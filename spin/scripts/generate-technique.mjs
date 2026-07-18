/**
 * Technique generator — Basisschicht aus der Persuasions-Taxonomie.
 *
 * Erzeugt für gegebene Taxonomie-Knoten Rohfassungen von Technik-Dateien
 * (DE/EN-Beschreibung, Evidenz aus claimEvidenceMap + Quellen, Evidenz-Stufe,
 * Kategorie-Mapping, Verwandtschaften aus den Kanten). Redaktionelle Felder
 * (examples, warningNeurons) bleiben als TODO-Platzhalter — sie werden von
 * der Produktionslinie (Ausbau-Plan §Produktionslinie) gefüllt.
 *
 * Overlay-Prinzip: Eine EXISTIERENDE Technik-Datei wird NIE überschrieben
 * (außer mit --force). Das Manifest (content/source/generation-manifest.json)
 * hält fest, aus welcher Taxonomie-Version ein Eintrag stammt, damit
 * Taxonomie-Updates als Diff-Report auflaufen statt still zu überschreiben.
 *
 * Aufruf:  node scripts/generate-technique.mjs <nodeId> [<nodeId> ...] [--force]
 *          node scripts/generate-technique.mjs --list   (zeigt fehlende Knoten)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TAXONOMY_PATH = join(ROOT, 'content/source/persuasion_taxonomy_v21_0_1.json');
const TECHNIQUES_DIR = join(ROOT, 'content/techniques');
const MANIFEST_PATH = join(ROOT, 'content/source/generation-manifest.json');

const taxonomy = JSON.parse(readFileSync(TAXONOMY_PATH, 'utf-8'));
const sourcesById = new Map(taxonomy.sources.map((s) => [s.id, s]));

// ---- Kategorie-Mapping: Taxonomie-Kategorie → App-Kategorie -------------
const CATEGORY_DEFAULT = {
  psychological_techniques: 'cognitive_bias',
  rhetorical_argumentation_techniques: 'logical_fallacy',
  neurolinguistic_techniques: 'nlp',
  digital_manipulation_techniques: 'dark_patterns',
  visual_manipulation_techniques: 'ai_influence',
  behavioral_economics_decision_making: 'cognitive_bias',
  relational_agentic_manipulation: 'ai_influence',
  attention_engagement_manipulation: 'digital_influence',
  coordinated_influence_operations: 'influence_ops',
  identity_trust_manipulation: 'ai_influence',
  data_extraction_persuasion: 'dark_patterns',
  platform_governance_context: 'digital_influence',
};

// Knoten-Überschreibungen, wo der Kategorie-Default nicht passt
const CATEGORY_OVERRIDE = {
  // Soziale Dynamik statt Bias
  unity_identity: 'social_dynamics',
  groupthink: 'social_dynamics',
  nemawashi: 'social_dynamics',
  behavioral_mimicry: 'social_dynamics',
  stereotyping: 'social_dynamics',
  // Emotionale Beeinflussung
  guilt_appeals: 'emotional_manipulation',
  fear_uncertainty_doubt: 'emotional_manipulation',
  conspiracy_theory_narratives: 'emotional_manipulation',
  // Digitale Einflussnahme statt Dark Patterns (Reichweiten-/Suchmechanik)
  microtargeting: 'digital_influence',
  digital_influence: 'digital_influence',
  data_voids_seo_manipulation: 'digital_influence',
  search_engine_manipulation_effect: 'digital_influence',
  // Zwang & Kontrolle (Ernstmodus)
  gaslighting: 'coercive_control',
  love_bombing: 'coercive_control',
  darvo: 'coercive_control',
  coercive_control: 'coercive_control',
  zersetzung_decomposition: 'coercive_control',
  kompromat_leverage: 'coercive_control',
  parasocial_manipulation: 'social_dynamics',
  // Koordinierte Kampagnen
  networked_harassment: 'coercive_control',
  censorship_chilling_effects: 'coercive_control',
  societal_atomization: 'coercive_control',
  proxy_attack: 'coercive_control',
  // Identität/Propaganda → Kampagnen
  black_grey_white_propaganda: 'influence_ops',
  // Persuasions-Klassiker in psychological_techniques
  but_you_are_free: 'social_dynamics',
};

// ---- Evidenz-Stufe ------------------------------------------------------
function evidenceTierOf(node) {
  const conf = node.riskProfile?.evidenceConfidence ?? 'low';
  if (conf === 'very_low') return 'frontier';
  const refs = node.sourceRefs ?? [];
  if (refs.length > 0) {
    const provisional = refs.filter((r) => sourcesById.get(r)?.provisional).length;
    if (provisional / refs.length > 0.5) return 'frontier';
  }
  return { high: 'robust', moderate: 'moderate', low: 'weak' }[conf] ?? 'weak';
}

const EFFECTIVENESS = {
  large: 'very_high',
  moderate: 'high',
  small: 'moderate',
  heterogeneous: 'moderate',
  unknown: 'moderate',
  not_applicable: 'moderate',
};
const CONFIDENCE_NUM = { high: 0.85, moderate: 0.65, low: 0.4, very_low: 0.2 };
const QUALITY = { high: 'high', moderate: 'moderate', low: 'low', very_low: 'low' };

function sourceLabel(ref) {
  const s = sourcesById.get(ref);
  if (!s) return null;
  const first = (s.authors?.[0] ?? '').split(',')[0].split(' ').pop();
  const etAl = (s.authors?.length ?? 0) > 1 ? ' et al.' : '';
  return `${first}${etAl} (${s.year}) - ${s.title}`;
}

function kebab(id) {
  return id.replace(/_/g, '-');
}
function camel(id) {
  return id.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}
function esc(str) {
  return (str ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ').trim();
}

function existingTechniqueIds() {
  return new Set(
    readdirSync(TECHNIQUES_DIR)
      .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
      .map((f) => f.replace('.ts', '').replace(/-/g, '_'))
  );
}

function generate(nodeId, { force = false, waveIds = new Set() } = {}) {
  const node = taxonomy.nodes.find((n) => n.id === nodeId);
  if (!node) throw new Error(`Knoten nicht gefunden: ${nodeId}`);

  const filePath = join(TECHNIQUES_DIR, `${kebab(nodeId)}.ts`);
  if (existsSync(filePath) && !force) {
    console.log(`SKIP  ${nodeId} — Datei existiert (Overlay-Schutz, --force zum Überschreiben)`);
    return null;
  }

  const category = CATEGORY_OVERRIDE[nodeId] ?? CATEGORY_DEFAULT[node.categoryId] ?? 'cognitive_bias';
  const tier = evidenceTierOf(node);
  const known = existingTechniqueIds();

  const related = (taxonomy.edges ?? [])
    .filter((e) => e.source === nodeId || e.target === nodeId)
    .map((e) => (e.source === nodeId ? e.target : e.source))
    .filter((id) => known.has(id) || waveIds.has(id))
    .filter((id, i, a) => a.indexOf(id) === i)
    .slice(0, 5);

  const claims = (node.claimEvidenceMap ?? [])
    .filter((c) => ['direct', 'moderate', 'indirect'].includes(c.supportLevel))
    .slice(0, 3);
  const studyRefs = [...new Set(claims.flatMap((c) => c.sourceRefs ?? []))]
    .map(sourceLabel)
    .filter(Boolean)
    .slice(0, 3);
  const findings = claims[0]?.claim ?? node.description ?? '';
  const conf = node.riskProfile?.evidenceConfidence ?? 'low';

  const content = `import type { Technique } from '../types';

/**
 * GENERATED BASE (Taxonomie ${taxonomy.metaData?.version ?? '?'}, Knoten: ${nodeId}).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) TODO — werden
 * von der Produktionslinie gefüllt und geprüft. Danach gilt Overlay-Schutz.
 */
export const ${camel(nodeId)}: Technique = {
  id: '${nodeId}',
  name: {
    de: '${esc(node.name)}',
    en: '${esc(node.nameEn ?? node.name)}',
  },
  description: {
    de: '${esc(node.description)}',
    en: '${esc(node.descriptionEn ?? node.description)}',
  },
  category: '${category}',
  difficulty: 'intermediate', // TODO redaktionell
  effectiveness: '${EFFECTIVENESS[node.riskProfile?.effectMagnitude ?? 'unknown']}',
  examples: [
    'TODO: Beispiel 1 (Kanal + Rollen)',
    'TODO: Beispiel 2 (Kanal + Rollen)',
    'TODO: Beispiel 3 (Kanal + Rollen)',
  ],
  evidence: {
    studies: [${studyRefs.map((s) => `\n      '${esc(s)}'`).join(',')}${studyRefs.length ? '\n    ' : ''}],
    findings: '${esc(findings)}',
    uncertainty: {
      confidence: ${CONFIDENCE_NUM[conf]},
      sampleSize: '',
      evidenceQuality: '${QUALITY[conf]}',
    },
  },
  relatedTechniques: [${related.map((r) => `'${r}'`).join(', ')}],
  warningNeurons: [
    'TODO: Warnsignal 1',
    'TODO: Warnsignal 2',
  ],
  taxonomyGroups: [],
  evidenceTier: '${tier}',${category === 'coercive_control' ? '\n  seriousMode: true,' : ''}
};
`;

  writeFileSync(filePath, content);

  // Manifest nachführen
  let manifest = { taxonomyVersion: taxonomy.metaData?.version ?? '21.0.1', entries: {} };
  if (existsSync(MANIFEST_PATH)) manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));
  manifest.entries[nodeId] = {
    file: `content/techniques/${kebab(nodeId)}.ts`,
    taxonomyVersion: taxonomy.metaData?.version ?? '21.0.1',
    generatedAt: new Date().toISOString(),
    evidenceTier: tier,
    category,
  };
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`OK    ${nodeId} → ${kebab(nodeId)}.ts  [${category}, ${tier}]`);
  return filePath;
}

// ---- CLI ---------------------------------------------------------------
const args = process.argv.slice(2);
if (args.includes('--list')) {
  const known = existingTechniqueIds();
  const missing = taxonomy.nodes.filter((n) => !known.has(n.id));
  console.log(`${missing.length} Knoten ohne Technik-Datei:`);
  for (const n of missing) {
    console.log(`  ${n.id}  [${CATEGORY_OVERRIDE[n.id] ?? CATEGORY_DEFAULT[n.categoryId]}, ${evidenceTierOf(n)}]`);
  }
  process.exit(0);
}

const force = args.includes('--force');
const ids = args.filter((a) => !a.startsWith('--'));
if (ids.length === 0) {
  console.error('Nutzung: node scripts/generate-technique.mjs <nodeId> [...] [--force] | --list');
  process.exit(1);
}
const waveIds = new Set(ids);
for (const id of ids) generate(id, { force, waveIds });
