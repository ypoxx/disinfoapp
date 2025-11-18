/**
 * LocalStorage-based rate limiter for API calls
 */

const STORAGE_KEY = 'checker_usage';
const DAILY_LIMIT = parseInt(import.meta.env.VITE_DAILY_ANALYSIS_LIMIT || '5');

interface UsageData {
  count: number;
  date: string;
}

/**
 * Get today's date as YYYY-MM-DD
 */
function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Get current usage data from localStorage
 */
function getUsageData(): UsageData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { count: 0, date: getTodayDate() };
    }

    const data = JSON.parse(stored) as UsageData;

    // Reset if it's a new day
    if (data.date !== getTodayDate()) {
      return { count: 0, date: getTodayDate() };
    }

    return data;
  } catch (error) {
    console.error('Error reading usage data:', error);
    return { count: 0, date: getTodayDate() };
  }
}

/**
 * Save usage data to localStorage
 */
function saveUsageData(data: UsageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving usage data:', error);
  }
}

/**
 * Check if user can make another request
 */
export function canMakeRequest(): boolean {
  const data = getUsageData();
  return data.count < DAILY_LIMIT;
}

/**
 * Get remaining requests for today
 */
export function getRemainingRequests(): number {
  const data = getUsageData();
  return Math.max(0, DAILY_LIMIT - data.count);
}

/**
 * Get used requests for today
 */
export function getUsedRequests(): number {
  const data = getUsageData();
  return data.count;
}

/**
 * Get total daily limit
 */
export function getDailyLimit(): number {
  return DAILY_LIMIT;
}

/**
 * Increment usage counter
 */
export function incrementUsage(): void {
  const data = getUsageData();
  data.count += 1;
  saveUsageData(data);
}

/**
 * Reset usage (for testing purposes)
 */
export function resetUsage(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get time until reset (midnight)
 */
export function getTimeUntilReset(): string {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const diff = midnight.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
}
