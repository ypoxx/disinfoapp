export const meta = {
  name: 'wave-production',
  description: 'Content-Welle: Einträge durch die Produktionslinie (Redaktion, Doppel-Blindprüfung, Distraktor/Fach/Stil-Checks, eine Revisionsschleife)',
  phases: [
    { title: 'Redaktion', detail: 'Technik-Datei füllen + 3 Übungen' },
    { title: 'Prüfung', detail: 'Blindprüfung ×2, Distraktor-, Fach-, Stil-Check' },
    { title: 'Revision', detail: 'Beanstandete überarbeiten + nachprüfen' },
  ],
}

const SPIN = '/home/user/disinfoapp/spin'
const NODES_FILE = `${SPIN}/content/source/technique-id-list.txt`
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ENTRIES = A.entries           // [{id, file}]
const PREFIX = A.prefix             // e.g. 'wave5'
const CHARTA = `${SPIN}/docs/sprachcharta.md`
const camel = (id) => id.replace(/_(.)/g, (m, c) => c.toUpperCase()).replace(/^(.)/, (m, c) => c.toUpperCase())
const constName = (id) => PREFIX.replace(/[^a-zA-Z0-9]/g, '') + camel(id)

const REDAKTEUR_SCHEMA = {
  type: 'object', required: ['examplesDe', 'exerciseScenarios', 'notes'],
  properties: {
    examplesDe: { type: 'array', items: { type: 'string' } },
    exerciseScenarios: { type: 'array', items: {
      type: 'object', required: ['exerciseId', 'scenarioDe', 'options', 'correctIndex'],
      properties: { exerciseId: { type: 'string' }, scenarioDe: { type: 'string' }, options: { type: 'array', items: { type: 'string' } }, correctIndex: { type: 'integer' } },
    } },
    notes: { type: 'string' },
  },
}
const BLIND_SCHEMA = {
  type: 'object', required: ['verdicts'],
  properties: { verdicts: { type: 'array', items: {
    type: 'object', required: ['exampleIndex', 'identifiedId', 'confident'],
    properties: { exampleIndex: { type: 'integer' }, identifiedId: { type: 'string' }, secondGuess: { type: 'string' }, confident: { type: 'boolean' } },
  } } },
}
const CHECK_SCHEMA = {
  type: 'object', required: ['pass', 'objections'],
  properties: { pass: { type: 'boolean' }, objections: { type: 'array', items: { type: 'string' } } },
}

const redakteurPrompt = (e, objections) => `Du bist Redakteur der SPIN-Lern-App (Zielgruppe: PR-/Kommunikationsprofis). Vervollständige den Technik-Eintrag '${e.id}' in Zielqualität.

Lies zuerst:
1. ${CHARTA} — verbindliche Sprachcharta (Beispiel-Regel: Kanal + Rollen + Situation!, Erklärungs-Bauplan, Verbotslisten, Evidenz-Ehrlichkeit)
2. ${SPIN}/content/techniques/${e.file} — Basisdatei (TODO-Felder füllen). BEACHTE evidenceTier: 'weak' → keine starken Wirkbehauptungen; 'frontier' → Frontier-Regeln (Begriffswissen statt Wirkversprechen). BEACHTE seriousMode: falls true (Zwang & Kontrolle), NÜCHTERNER Ton, KEINE spielerischen Elemente, Übungen NUR Erkennen/Schützen — nie "Wende diese Technik an", keine Ich-als-Täter-Perspektive. Die Erklärungen fokussieren auf Erkennen und Schutz der Betroffenen.
3. ${SPIN}/content/techniques/paltering-half-truth.ts — Golden-Set-Formatvorbild (bei seriousMode Ton anpassen: ernst, nicht spielerisch)
4. Taxonomie-Rohdaten:
   python3 -c "import json; d=json.load(open('${SPIN}/content/source/persuasion_taxonomy_v21_0_1.json')); n=[x for x in d['nodes'] if x['id']=='${e.id}'][0]; print(json.dumps(n, ensure_ascii=False, indent=1)[:6000])"

Aufgaben:
A) ${SPIN}/content/techniques/${e.file} fertigstellen: name/description schärfen (de+en, en idiomatisch); difficulty realistisch; GENAU 3 examples nach Beispiel-Regel (Kanal+Rollen+Situation), die die Zieltechnik EINDEUTIG und in Abgrenzung zu Nachbartechniken zeigen (werden blind klassifiziert); evidence.findings 2-3 präzise Sätze, ehrlich zur Konfidenz; 3-4 warningNeurons; "GENERATED BASE" → "REDAKTIONELL GEPRÜFT (${PREFIX})".
B) GENAU 3 Übungen in NEUER Datei ${SPIN}/content/exercises/${PREFIX}-${e.file} (export const ${constName(e.id)}: Exercise[]; Import aus '../types'):
   - 1× technique-match (4 benannte Technik-Optionen, Distraktoren = verwechselbare Nachbarn)
   - 1× response-choice ('Was tust du?', 4 Profi-Optionen, eine best practice) ODER fill-blank. Bei seriousMode: response-choice aus Schutz-/Erkennungsperspektive (z.B. "Du berätst eine betroffene Person / prüfst intern"), nie Täterperspektive.
   - 1× nach Ermessen; bei evidenceTier 'frontier' MUSS eine Übung Begriffswissen prüfen ('Wie heißt dieses Muster?'), nie Wirkung.
   - Jede Übung: id '${PREFIX}-${e.id}-1..3', primaryTechniqueId '${e.id}' (in relatedTechniques, die NUR existierende Technik-IDs enthalten dürfen — prüfe gegen content/techniques/index.ts), correctAnswers.length===1, points 10, difficulty passend (2-Optionen ⇒ beginner), Erklärung nach Bauplan (Mechanismus + legitim einsetzen [bei seriousMode: entfällt, stattdessen Schutzhinweis] + erkennen/kontern in Du-Form + Distraktor-Aufklärung), de+en vollständig.
   - NICHT in index.ts registrieren.
${objections ? `\nREVISION — behebe exakt diese Beanstandungen:\n${objections}\n` : ''}
Prüfe zum Schluss: cd ${SPIN} && npx tsc -b (fehlerfrei; nur DEINE zwei Dateien anfassen).

Ergebnis: examplesDe (3 finale deutsche Beispiele wörtlich), exerciseScenarios (je Übung exerciseId/scenarioDe/options/correctIndex), notes (max 3 Sätze).`

const blindPrompt = (examples, lens) => `Blindprüfung: Bestimme für JEDES der 3 Beispiele die primär gezeigte Kommunikationstechnik. ${lens}

Die möglichen Techniken (id|Name) stehen in der Datei ${NODES_FILE} — lies sie zuerst mit: cat ${NODES_FILE}

Beispiele:
${examples.map((ex, i) => `${i}: ${ex}`).join('\n')}

Je Beispiel die EINE deutlichste Technik-ID (identifiedId), optional secondGuess, confident=false bei Schwanken. Streng urteilen: zeigt ein Beispiel genauso gut eine andere Technik, nenne DIE.`

const distraktorPrompt = (e, sc) => `Distraktor-Advokat: Kannst du bei diesen Übungen eine NICHT-korrekte Option ernsthaft als richtig verteidigen? Sind Distraktoren plausibel (verwechselbare Nachbarn) statt Füllmaterial? Zieltechnik: ${e.id}
${JSON.stringify(sc, null, 1)}
pass=true nur wenn alle Übungen eindeutig und ohne Gimme-Distraktoren. objections konkret pro Übung.`

const fachPrompt = (e) => `Fach-Check. Lies ${SPIN}/content/techniques/${e.file}, vergleiche mit Knoten:
python3 -c "import json; d=json.load(open('${SPIN}/content/source/persuasion_taxonomy_v21_0_1.json')); n=[x for x in d['nodes'] if x['id']=='${e.id}'][0]; print(json.dumps(n, ensure_ascii=False, indent=1)[:8000])"
Prüfe: (1) keine Aussagen über die Evidenzlage hinaus (evidenceTier), (2) zitierte Studien = sourceRefs/claims (keine erfundenen), (3) Mechanismus korrekt, (4) ${SPIN}/content/exercises/${PREFIX}-${e.file}: keine ungedeckten Wirkbehauptungen. pass=false mit objections bei Verstoß.`

const stilPrompt = (e) => `Stil-Lektorat gegen ${CHARTA}. Lies auch ${SPIN}/content/techniques/${e.file} und ${SPIN}/content/exercises/${PREFIX}-${e.file}.
Prüfe hart: Floskel-Verbotsliste, Register (kollegial; bei seriousMode ernst/nüchtern, keine spielerischen Formulierungen), Beispiel-Regel (Kanal+Rollen+Situation je Beispiel), Erklärungs-Bauplan (Mechanismus + doppelter Takeaway [seriousMode: nur Schutz/Erkennen] + Distraktor-Aufklärung, Du-Form), EN idiomatisch und bedeutungsgleich, verbotene Options-Strings. Aus Sicht einer PR-Leiterin mit 15 Jahren Erfahrung: platt? pass=false mit objections (Datei+Feld+Zitat).`

const results = await pipeline(
  ENTRIES,
  (e) => agent(redakteurPrompt(e, null), { label: `redaktion:${e.id}`, phase: 'Redaktion', schema: REDAKTEUR_SCHEMA, effort: 'high' }),
  async (draft, e) => {
    if (!draft) return { entry: e.id, status: 'redaktion_failed', open: [] }
    const [bA, bB, dis, fa, st] = await parallel([
      () => agent(blindPrompt(draft.examplesDe, 'Perspektive: Wirkmechanismus.'), { label: `blindA:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(draft.examplesDe, 'Perspektive: Oberflächen-Cues.'), { label: `blindB:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(distraktorPrompt(e, draft.exerciseScenarios), { label: `distraktor:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
      () => agent(fachPrompt(e), { label: `fach:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
      () => agent(stilPrompt(e), { label: `stil:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
    ])
    const obj = []
    for (const [nm, b] of [['A', bA], ['B', bB]]) for (const v of b?.verdicts ?? []) {
      if (v.identifiedId !== e.id) obj.push(`Blind${nm} Bsp${v.exampleIndex}: '${v.identifiedId}' statt '${e.id}' — Beispiel schärfen`)
      else if (!v.confident) obj.push(`Blind${nm} Bsp${v.exampleIndex}: unsicher (${v.secondGuess ?? '-'}) — eindeutiger`)
    }
    if (dis && !dis.pass) obj.push(...(dis.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (fa && !fa.pass) obj.push(...(fa.objections ?? []).map((o) => `Fachlich: ${o}`))
    if (st && !st.pass) obj.push(...(st.objections ?? []).map((o) => `Stil: ${o}`))

    if (obj.length === 0) return { entry: e.id, status: 'passed_round1', open: [] }
    log(`${e.id}: ${obj.length} Beanstandungen → Revision`)
    const rev = await agent(redakteurPrompt(e, obj.join('\n')), { label: `revision:${e.id}`, phase: 'Revision', schema: REDAKTEUR_SCHEMA, effort: 'high' })
    if (!rev) return { entry: e.id, status: 'revision_failed', open: obj }
    const [a2, b2, d2, s2] = await parallel([
      () => agent(blindPrompt(rev.examplesDe, 'Perspektive: Wirkmechanismus.'), { label: `blindA2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(rev.examplesDe, 'Perspektive: Oberflächen-Cues.'), { label: `blindB2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(distraktorPrompt(e, rev.exerciseScenarios), { label: `distraktor2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
      () => agent(stilPrompt(e), { label: `stil2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
    ])
    const open = []
    for (const [nm, b] of [['A2', a2], ['B2', b2]]) for (const v of b?.verdicts ?? []) {
      if (v.identifiedId !== e.id) open.push(`Blind${nm} Bsp${v.exampleIndex}: '${v.identifiedId}'`)
    }
    if (d2 && !d2.pass) open.push(...(d2.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (s2 && !s2.pass) open.push(...(s2.objections ?? []).map((o) => `Stil: ${o}`))
    const rechecked = !!(a2 || b2 || d2 || s2)
    return { entry: e.id, status: open.length === 0 ? (rechecked ? 'passed_round2' : 'revised_unverified') : 'flagged', open }
  }
)

const compact = results.filter(Boolean).map((r) => ({ entry: r.entry, status: r.status, open: (r.open ?? []).slice(0, 8) }))
const passed = compact.filter((r) => r.status?.startsWith('passed')).length
log(`${PREFIX}: ${passed}/${ENTRIES.length} bestanden, ${compact.filter(r=>r.status==='flagged').length} flagged, ${compact.filter(r=>r.status==='revised_unverified').length} unverifiziert`)
return { prefix: PREFIX, passed, total: ENTRIES.length, summary: compact }
