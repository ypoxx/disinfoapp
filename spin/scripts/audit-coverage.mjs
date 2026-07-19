/**
 * Coverage-Audit (Ausbau-Plan R6, Vollständigkeits-Gate).
 * Berichtet je registrierter Technik: Anzahl Übungen (nach primaryTechniqueId
 * bzw. Fallback relatedTechniques[0]) und abgedeckte Schwierigkeitsbänder.
 * Kein Build-Blocker — reines Reporting. Aufruf: node scripts/audit-coverage.mjs
 *
 * Ziel: jede Technik ≥ MIN_EXERCISES über ≥ MIN_BANDS Schwierigkeitsbänder.
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TECH_DIR = join(ROOT, 'content/techniques');
const EX_DIR = join(ROOT, 'content/exercises');

const MIN_EXERCISES = 3;
const MIN_BANDS = 2;

// Registrierte Techniken = die in techniques/index.ts importierten
const techIndex = readFileSync(join(TECH_DIR, 'index.ts'), 'utf-8');
const registeredFiles = [...techIndex.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1]);
const techIds = new Set();
for (const f of registeredFiles) {
  const src = readFileSync(join(TECH_DIR, `${f}.ts`), 'utf-8');
  const m = src.match(/id: '([a-z0-9_]+)'/);
  if (m) techIds.add(m[1]);
}

// Registrierte Übungsdateien aus exercises/index.ts
const exIndex = readFileSync(join(EX_DIR, 'index.ts'), 'utf-8');
const exFiles = [...exIndex.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1]);

// Übungen sammeln: primary + difficulty grob per Regex je Objektblock
const perTech = new Map([...techIds].map((id) => [id, { count: 0, bands: new Set() }]));
let totalExercises = 0;
for (const f of exFiles) {
  let src;
  try { src = readFileSync(join(EX_DIR, `${f}.ts`), 'utf-8'); } catch { continue; }
  // Split grob an "id:" Übungsgrenzen
  const blocks = src.split(/\n\s*\{\s*\n\s*id: '/).slice(1);
  for (const b of blocks) {
    totalExercises++;
    const diff = (b.match(/difficulty: '(\w+)'/) || [])[1];
    const prim = (b.match(/primaryTechniqueId: '([a-z0-9_]+)'/) || [])[1];
    const rel0 = (b.match(/relatedTechniques: \['([a-z0-9_]+)'/) || [])[1];
    const t = prim || rel0;
    if (t && perTech.has(t)) {
      perTech.get(t).count++;
      if (diff) perTech.get(t).bands.add(diff);
    }
  }
}

const under = [];
const zero = [];
for (const [id, v] of perTech) {
  if (v.count === 0) zero.push(id);
  else if (v.count < MIN_EXERCISES || v.bands.size < MIN_BANDS) under.push({ id, count: v.count, bands: [...v.bands].join('/') });
}

console.log(`Registrierte Techniken: ${techIds.size}`);
console.log(`Übungen gesamt: ${totalExercises}`);
console.log(`Techniken mit 0 Übungen: ${zero.length}`);
if (zero.length) console.log('  ' + zero.join(', '));
console.log(`Techniken unter Ziel (<${MIN_EXERCISES} Übungen oder <${MIN_BANDS} Bänder): ${under.length}`);
for (const u of under.sort((a, b) => a.count - b.count)) {
  console.log(`  ${u.id}: ${u.count} Übungen, Bänder ${u.bands || '—'}`);
}
const ok = zero.length === 0 && under.length === 0;
console.log(ok ? '\n✓ Vollständigkeits-Ziel erfüllt' : `\n✗ ${zero.length + under.length} Techniken unter Ziel`);
process.exit(0);
