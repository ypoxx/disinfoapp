/**
 * Firebase integration — lazy loaded.
 * The app works fully without Firebase (offline-only mode).
 * Firebase is loaded on demand when the user signs in.
 */

import { useAuthStore } from '@/stores/auth-store';

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

// Lazy-loaded Firebase instances (typed as any to avoid complex generic inference)
let firebaseInitialized = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let authInstance: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let dbInstance: any = null;

/** Initialize Firebase lazily */
async function ensureFirebase() {
  if (firebaseInitialized || !isFirebaseConfigured) return;
  firebaseInitialized = true;

  try {
    const { initializeApp } = await import('firebase/app');
    const {
      getAuth,
      onAuthStateChanged,
      browserLocalPersistence,
      setPersistence,
    } = await import('firebase/auth');
    const {
      getFirestore,
      enableMultiTabIndexedDbPersistence,
    } = await import('firebase/firestore');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    authInstance = auth;
    dbInstance = db;

    enableMultiTabIndexedDbPersistence(db).catch(() => {});
    setPersistence(auth, browserLocalPersistence).catch(() => {});

    onAuthStateChanged(auth, (user) => {
      if (user) {
        useAuthStore.getState().setUser({
          uid: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        useAuthStore.getState().setUser(null);
      }
    });
  } catch {
    console.warn('Firebase initialization failed — running in offline mode');
    useAuthStore.getState().setLoading(false);
  }
}

// If Firebase is configured, start loading it (non-blocking)
if (isFirebaseConfigured) {
  ensureFirebase();
} else {
  useAuthStore.getState().setLoading(false);
}

/** Sign in with Google. Returns true on success. */
export async function signInWithGoogle(): Promise<boolean> {
  await ensureFirebase();
  if (!authInstance) return false;
  try {
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authInstance, provider);
    return true;
  } catch {
    return false;
  }
}

/** Sign out */
export async function signOut(): Promise<void> {
  if (!authInstance) return;
  const { signOut: fbSignOut } = await import('firebase/auth');
  await fbSignOut(authInstance);
}

/** Save user data to Firestore */
export async function saveUserData(uid: string, data: Record<string, unknown>): Promise<void> {
  if (!dbInstance) return;
  try {
    const { doc, setDoc } = await import('firebase/firestore');
    await setDoc(doc(dbInstance, 'users', uid), {
      ...data,
      lastSynced: new Date().toISOString(),
    }, { merge: true });
  } catch { /* Silently fail — data is persisted locally */ }
}

/** Load user data from Firestore */
export async function loadUserData(uid: string): Promise<Record<string, unknown> | null> {
  if (!dbInstance) return null;
  try {
    const { doc, getDoc } = await import('firebase/firestore');
    const snap = await getDoc(doc(dbInstance, 'users', uid));
    return snap.exists() ? (snap.data() as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
