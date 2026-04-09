import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence,
  type Auth,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  enableMultiTabIndexedDbPersistence,
  type Firestore,
} from 'firebase/firestore';
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

// Firebase is optional — app works fully without it
const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    // Enable offline persistence
    enableMultiTabIndexedDbPersistence(db).catch(() => {
      // Silently fail — Firestore offline works without this in most cases
    });

    // Set auth persistence
    setPersistence(auth, browserLocalPersistence).catch(() => {});

    // Listen for auth state changes
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
  }
} else {
  // No Firebase — set loading to false immediately
  useAuthStore.getState().setLoading(false);
}

/** Sign in with Google. Returns true on success. */
export async function signInWithGoogle(): Promise<boolean> {
  if (!auth) return false;
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    return true;
  } catch {
    return false;
  }
}

/** Sign out */
export async function signOut(): Promise<void> {
  if (!auth) return;
  await auth.signOut();
}

/** Save user data to Firestore */
export async function saveUserData(uid: string, data: Record<string, unknown>): Promise<void> {
  if (!db) return;
  try {
    await setDoc(doc(db, 'users', uid), {
      ...data,
      lastSynced: new Date().toISOString(),
    }, { merge: true });
  } catch {
    // Silently fail — data is persisted locally via Zustand
  }
}

/** Load user data from Firestore */
export async function loadUserData(uid: string): Promise<Record<string, unknown> | null> {
  if (!db) return null;
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    return snap.exists() ? (snap.data() as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export { isFirebaseConfigured, auth, db };
