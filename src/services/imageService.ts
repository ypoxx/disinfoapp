/**
 * Image Service for Discover Feed
 * Handles fetching images from multiple sources with fallback strategy:
 * 1. Wikipedia Commons API
 * 2. Unsplash API
 * 3. Generated gradients
 */

interface ImageResult {
  url?: string;
  gradient?: string;
  source: 'wikipedia' | 'unsplash' | 'generated';
}

/**
 * Generate a deterministic gradient based on technique name and category
 */
export function generateGradient(techniqueName: string, category: string): string {
  const categoryColors: Record<string, string[]> = {
    cognitive_bias: ['#3b82f6', '#8b5cf6', '#6366f1'],
    social_dynamics: ['#ec4899', '#f43f5e', '#ef4444'],
    emotional_manipulation: ['#f59e0b', '#f97316', '#ef4444'],
    logical_fallacy: ['#10b981', '#14b8a6', '#06b6d4'],
    nlp: ['#8b5cf6', '#a855f7', '#d946ef'],
    digital_influence: ['#06b6d4', '#0ea5e9', '#3b82f6'],
  };

  // Hash function to generate consistent colors from string
  const hash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const colors = categoryColors[category as keyof typeof categoryColors] || [
    '#6366f1',
    '#8b5cf6',
    '#ec4899',
  ];
  const nameHash = hash(techniqueName);
  const primaryColor = colors[nameHash % colors.length];
  const secondaryColor = colors[(nameHash + 1) % colors.length];

  // Generate angle based on name
  const angle = (nameHash % 360);

  // Different gradient patterns based on hash
  const patterns = [
    `linear-gradient(${angle}deg, ${primaryColor}, ${secondaryColor})`,
    `radial-gradient(circle at ${nameHash % 100}% ${(nameHash * 2) % 100}%, ${primaryColor}, ${secondaryColor})`,
    `linear-gradient(${angle}deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${colors[(nameHash + 2) % colors.length]} 100%)`,
    `conic-gradient(from ${angle}deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
  ];

  return patterns[nameHash % patterns.length];
}

/**
 * Search Wikipedia Commons for images related to a term
 */
async function searchWikipediaImage(searchTerm: string): Promise<string | null> {
  try {
    const cleanTerm = searchTerm.replace(/\s+/g, '_');
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(
      cleanTerm
    )}&pithumbsize=800&origin=*`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.query?.pages) {
      const pages = Object.values(data.query.pages) as any[];
      const page = pages[0];
      if (page?.thumbnail?.source) {
        return page.thumbnail.source;
      }
    }
    return null;
  } catch (error) {
    console.warn('Wikipedia image fetch failed:', error);
    return null;
  }
}

/**
 * Search Unsplash for images (free tier: 50 requests/hour)
 */
async function searchUnsplashImage(searchTerm: string): Promise<string | null> {
  try {
    // Using Unsplash's demo endpoint (no API key needed for demo)
    // For production, you'd need to register and get an API key at https://unsplash.com/developers
    const url = `https://source.unsplash.com/800x1200/?${encodeURIComponent(
      searchTerm
    )},abstract,concept`;

    // Unsplash source returns a redirect to an image
    return url;
  } catch (error) {
    console.warn('Unsplash image fetch failed:', error);
    return null;
  }
}

/**
 * Main function to get image/gradient for a technique
 * Implements fallback strategy
 */
export async function getTechniqueImage(
  techniqueName: string,
  category: string
): Promise<ImageResult> {
  // Try Wikipedia first
  const wikiImage = await searchWikipediaImage(techniqueName);
  if (wikiImage) {
    return { url: wikiImage, source: 'wikipedia' };
  }

  // Try Unsplash as fallback
  try {
    const unsplashUrl = await searchUnsplashImage(techniqueName);
    if (unsplashUrl) {
      return { url: unsplashUrl, source: 'unsplash' };
    }
  } catch {
    // Unsplash failed, continue to gradient
  }

  // Generate gradient as final fallback
  const gradient = generateGradient(techniqueName, category);
  return { gradient, source: 'generated' };
}

/**
 * Cache images in localStorage to avoid repeated API calls
 */
const IMAGE_CACHE_KEY = 'discover_image_cache';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

interface CachedImage {
  result: ImageResult;
  timestamp: number;
}

export async function getCachedTechniqueImage(
  techniqueName: string,
  category: string,
  techniqueId: string
): Promise<ImageResult> {
  try {
    const cache = JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY) || '{}');
    const cached = cache[techniqueId] as CachedImage | undefined;

    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.result;
    }

    // Fetch new image
    const result = await getTechniqueImage(techniqueName, category);

    // Save to cache
    cache[techniqueId] = {
      result,
      timestamp: Date.now(),
    };
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(cache));

    return result;
  } catch (error) {
    console.warn('Image cache error:', error);
    // Return generated gradient on error
    return {
      gradient: generateGradient(techniqueName, category),
      source: 'generated',
    };
  }
}
