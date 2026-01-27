/**
 * Image Service for Discover Feed
 *
 * Uses curated Unsplash images for each technique.
 * All images are pre-selected for quality and relevance.
 * Falls back to beautiful gradients if image fails to load.
 */

/**
 * Curated Unsplash images for each technique
 * Format: technique_id -> Unsplash photo URL
 * Images are optimized for mobile (800x1200) with auto-format
 */
export const techniqueImages: Record<string, string> = {
  // === COGNITIVE BIASES ===
  framing: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1200&fit=crop&auto=format',
  priming: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=1200&fit=crop&auto=format',
  anchoring: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=1200&fit=crop&auto=format',

  // === SOCIAL INFLUENCE ===
  social_proof: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1200&fit=crop&auto=format',
  scarcity: 'https://images.unsplash.com/photo-1586441135634-8a1a68a315d8?w=800&h=1200&fit=crop&auto=format',
  reciprocity: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1200&fit=crop&auto=format',
  authority: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1200&fit=crop&auto=format',
  liking: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=1200&fit=crop&auto=format',
  consistency: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=1200&fit=crop&auto=format',
  reactance_theory: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=1200&fit=crop&auto=format',

  // === LOGICAL FALLACIES ===
  ad_hominem: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=1200&fit=crop&auto=format',
  false_dichotomy: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?w=800&h=1200&fit=crop&auto=format',
  straw_man: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&h=1200&fit=crop&auto=format',
  equivocation: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=1200&fit=crop&auto=format',

  // === EMOTIONAL MANIPULATION ===
  emotional_appeal: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&h=1200&fit=crop&auto=format',

  // === REPETITION & MEMORY ===
  repetition: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=1200&fit=crop&auto=format',
  illusory_truth_effect: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=1200&fit=crop&auto=format',

  // === NLP TECHNIQUES ===
  pacing_and_leading: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=1200&fit=crop&auto=format',
  embedded_commands: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1200&fit=crop&auto=format',

  // === DIGITAL INFLUENCE ===
  microtargeting: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=1200&fit=crop&auto=format',
  digital_influence: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop&auto=format',
  visual_manipulation: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=1200&fit=crop&auto=format',
  synthetic_media: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1200&fit=crop&auto=format',
  dark_patterns: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&h=1200&fit=crop&auto=format',
  nudging: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1200&fit=crop&auto=format',
  ai_persuasion: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1200&fit=crop&auto=format',
  narrative_persuasion: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=1200&fit=crop&auto=format',
};

/**
 * Category-based gradient fallbacks with Telekom Magenta accent
 */
const categoryGradients: Record<string, string> = {
  cognitive_bias: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b4e 50%, #e20074 100%)',
  social_dynamics: 'linear-gradient(135deg, #4a1d6a 0%, #be185d 50%, #e20074 100%)',
  emotional_manipulation: 'linear-gradient(135deg, #be123c 0%, #7c2d12 50%, #e20074 100%)',
  logical_fallacy: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 50%, #e20074 100%)',
  nlp: 'linear-gradient(135deg, #7e22ce 0%, #065f46 50%, #e20074 100%)',
  digital_influence: 'linear-gradient(135deg, #0891b2 0%, #4f46e5 50%, #e20074 100%)',
};

/**
 * Get the curated image URL for a technique
 * Returns null if no image is available (will use gradient fallback)
 */
export function getImageForTechnique(techniqueId: string): string | null {
  return techniqueImages[techniqueId] || null;
}

/**
 * Get a beautiful gradient fallback for a category
 */
export function getGradientForCategory(category: string): string {
  return categoryGradients[category] || 'linear-gradient(135deg, #1a1a2e 0%, #e20074 100%)';
}

/**
 * Generate a deterministic gradient based on technique name and category
 * Used when no curated image is available
 */
export function generateGradient(techniqueName: string, category: string): string {
  const categoryColors: Record<string, string[]> = {
    cognitive_bias: ['#3b82f6', '#8b5cf6', '#e20074'],
    social_dynamics: ['#ec4899', '#e20074', '#ef4444'],
    emotional_manipulation: ['#f59e0b', '#e20074', '#ef4444'],
    logical_fallacy: ['#10b981', '#14b8a6', '#e20074'],
    nlp: ['#8b5cf6', '#e20074', '#d946ef'],
    digital_influence: ['#06b6d4', '#e20074', '#3b82f6'],
  };

  // Hash function to generate consistent colors from string
  const hash = (str: string): number => {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = str.charCodeAt(i) + ((h << 5) - h);
    }
    return Math.abs(h);
  };

  const colors = categoryColors[category] || ['#e20074', '#8b5cf6', '#3b82f6'];
  const nameHash = hash(techniqueName);
  const primaryColor = colors[nameHash % colors.length];
  const secondaryColor = colors[(nameHash + 1) % colors.length];
  const tertiaryColor = colors[(nameHash + 2) % colors.length];

  // Generate angle based on name
  const angle = nameHash % 360;

  return `linear-gradient(${angle}deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${tertiaryColor} 100%)`;
}

/**
 * Preload images for smoother experience
 * Call this on app init or when entering the feed
 */
export function preloadTechniqueImages(): void {
  Object.values(techniqueImages).forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

/**
 * Check if an image URL is valid/loadable
 */
export function checkImageUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}
