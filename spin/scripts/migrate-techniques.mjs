/**
 * Migration Script: Extract techniques from old project and create individual files.
 * Run from spin/ directory: node scripts/migrate-techniques.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OLD_PROJECT = join(ROOT, '..');

// Read the old techniques file as text
const techniquesText = readFileSync(
  join(OLD_PROJECT, 'src/data/persuasion/techniques.ts'),
  'utf-8'
);

// Extract technique IDs to understand what we have
const idMatches = [...techniquesText.matchAll(/id:\s*'(\w+)'/g)];
const techniqueIds = idMatches.map(m => m[1]);
console.log(`Found ${techniqueIds.length} techniques: ${techniqueIds.join(', ')}`);

// Split the file into individual technique blocks
// Each technique starts with "  {" and ends with "  },"
const lines = techniquesText.split('\n');
const techniques = [];
let currentTechnique = [];
let depth = 0;
let inArray = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Detect start of the array
  if (line.includes('PersuasionTechnique[]')) {
    inArray = true;
    continue;
  }
  if (!inArray) continue;

  // Track depth to find technique boundaries
  const opens = (line.match(/{/g) || []).length;
  const closes = (line.match(/}/g) || []).length;

  if (depth === 0 && opens > 0) {
    // Start of a new technique
    currentTechnique = [line];
    depth += opens - closes;
  } else if (depth > 0) {
    currentTechnique.push(line);
    depth += opens - closes;

    if (depth === 0) {
      // End of technique
      techniques.push(currentTechnique.join('\n'));
      currentTechnique = [];
    }
  }
}

console.log(`Extracted ${techniques.length} technique blocks`);

// For each technique, transform and write to individual file
const outputDir = join(ROOT, 'content/techniques');
mkdirSync(outputDir, { recursive: true });

// Transform old format to new Technique type
function transformTechnique(block, id) {
  // Replace old field names
  let transformed = block
    // warningNeurons → warningSignals (make them LocalizedText[])
    .replace(/warningNeurons:\s*\[/g, 'warningSignals: [')
    // Transform simple string arrays in warningSignals to LocalizedText
    .replace(/warningSignals:\s*\[([\s\S]*?)\]/g, (match, content) => {
      // Check if already has LocalizedText format
      if (content.includes('de:')) return match;
      // Convert plain strings to LocalizedText
      const strings = [...content.matchAll(/'([^']+)'/g)].map(m => m[1]);
      if (strings.length === 0) return match;
      const converted = strings.map(s => `    { de: '${s.replace(/'/g, "\\'")}', en: '${s.replace(/'/g, "\\'")}' }`).join(',\n');
      return `warningSignals: [\n${converted}\n  ]`;
    })
    // Transform examples from string[] to LocalizedText[]
    .replace(/examples:\s*\[([\s\S]*?)\]/g, (match, content) => {
      if (content.includes('de:')) return match;
      const strings = [...content.matchAll(/'([^']+)'/g)].map(m => m[1]);
      if (strings.length === 0) return match;
      const converted = strings.map(s => `    { de: '${s.replace(/'/g, "\\'")}', en: '${s.replace(/'/g, "\\'")}' }`).join(',\n');
      return `examples: [\n${converted}\n  ]`;
    })
    // Transform evidence to flatten uncertainty
    .replace(/evidence:\s*{([\s\S]*?)(?=\n  \w|\n  })/g, (match, content) => {
      // If it already has the new format, skip
      if (content.includes('confidence:') && !content.includes('uncertainty')) return match;
      return match;
    });

  // Remove the leading "  {" and trailing "  },"
  transformed = transformed.replace(/^\s*{/, '').replace(/},?\s*$/, '');

  return transformed;
}

// Write individual technique files
for (let i = 0; i < techniques.length; i++) {
  const block = techniques[i];
  const id = techniqueIds[i];
  if (!id) {
    console.warn(`Skipping technique at index ${i} - no ID found`);
    continue;
  }

  const fileName = `${id.replace(/_/g, '-')}.ts`;
  const filePath = join(outputDir, fileName);

  // Write as a raw TypeScript export for now — we'll refine types later
  const content = `import type { Technique } from '../types';

export const ${camelCase(id)}: Technique = ${block.replace(/,\s*$/, '')};\n`;

  writeFileSync(filePath, content);
  console.log(`  ✓ ${fileName}`);
}

// Write index.ts that re-exports all techniques
const indexContent = `import type { Technique } from '../types';

${techniqueIds.map(id => `import { ${camelCase(id)} } from './${id.replace(/_/g, '-')}';`).join('\n')}

export const techniques: Technique[] = [
${techniqueIds.map(id => `  ${camelCase(id)},`).join('\n')}
];

export const techniqueMap = new Map<string, Technique>(
  techniques.map(t => [t.id, t])
);

export function getTechnique(id: string): Technique | undefined {
  return techniqueMap.get(id);
}
`;

writeFileSync(join(outputDir, 'index.ts'), indexContent);
console.log('\n✓ index.ts written');

function camelCase(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

console.log(`\nDone! ${techniques.length} technique files created in content/techniques/`);
