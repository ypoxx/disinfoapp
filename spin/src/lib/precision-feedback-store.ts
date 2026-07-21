/**
 * Precision-feedback persistence — kept out of the component module so the
 * component file stays fast-refresh-clean (component-only exports).
 * Local-only storage; no backend dependency.
 */
export interface FeedbackEntry {
  contentId: string;
  surface: string;
  reason: string;
  note?: string;
  at: string;
}

const STORAGE_KEY = 'spin-precision-feedback';

/** Append a feedback entry (best-effort; never throws into the UI) */
export function storeFeedback(entry: FeedbackEntry): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: FeedbackEntry[] = raw ? JSON.parse(raw) : [];
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(-500)));
  } catch {
    // storage full or unavailable — feedback is best-effort
  }
}

/** Read stored feedback (for an export/summary view) */
export function readPrecisionFeedback(): FeedbackEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
