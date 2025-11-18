/**
 * Array utility functions
 */

/**
 * Fisher-Yates shuffle algorithm
 * Shuffles an array in place and returns a mapping of new index to original index
 */
export function shuffleWithMapping<T>(array: T[]): {
  shuffled: T[];
  indexMapping: number[];
} {
  const shuffled = [...array];
  const indexMapping = array.map((_, i) => i);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    // Swap index mapping
    [indexMapping[i], indexMapping[j]] = [indexMapping[j], indexMapping[i]];
  }

  return { shuffled, indexMapping };
}

/**
 * Simple Fisher-Yates shuffle
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random elements from array without replacement
 */
export function getRandomElements<T>(array: T[], count: number): T[] {
  if (count >= array.length) {
    return shuffle(array);
  }

  const shuffled = shuffle(array);
  return shuffled.slice(0, count);
}

/**
 * Get random element from array
 */
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
