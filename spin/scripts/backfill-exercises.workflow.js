export const meta = {
  name: 'backfill-exercises',
  description: 'Backfill: 3 Übungen je Technik, deren Eintrag bereits existiert (keine Technik-Datei-Änderung). Blindprüfung der Übungs-Szenarien.',
  phases: [
    { title: 'Autor', detail: '3 Übungen je Technik schreiben' },
    { title: 'Prüfung', detail: 'Szenario-Blindprüfung ×2, Distraktor-, Stil-Check' },
    { title: 'Revision', detail: 'Beanstandete überarbeiten' },
  ],
}

const SPIN = '/home/user/disinfoapp/spin'
const NODES_FILE = `${SPIN}/content/source/technique-id-list.txt`
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ENTRIES = A.entries      // [{id, file}]  file = kebab technique filename
const PREFIX = A.prefix        // e.g. 'backfill'
const CHARTA = `${SPIN}/docs/sprachcharta.md`
const camel = (id) => id.replace(/_(.)/g, (m, c) => c.toUpperCase()).replace(/^(.)/, (m, c) => c.toUpperCase())
const constName = (id) => PREFIX.replace(/[^a-zA-Z0-9]/g, '') + camel(id)

const AUTOR_SCHEMA = {
  type: 'object', required: ['exerciseScenarios', 'notes'],
  properties: {
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

const autorPrompt = (e, objections) => `Du bist Redakteur der SPIN-Lern-App (Zielgruppe: PR-/Kommunikationsprofis). Schreibe GENAU 3 Übungen für die BEREITS EXISTIERENDE Technik '${e.id}'. Der Technik-Eintrag ist fertig — du erzeugst NUR Übungen, du änderst die Technik-Datei NICHT.

Lies zuerst:
1. ${CHARTA} — Sprachcharta (Beispiel-/Szenario-Regel: Kanal + Rollen + Situation!, Erklärungs-Bauplan, Verbotslisten, Evidenz-Ehrlichkeit)
2. ${SPIN}/content/techniques/${e.file} — der fertige Technik-Eintrag (Name, Beschreibung, evidence, warningNeurons, evidenceTier). Übungen dürfen NICHT die dortigen examples wörtlich recyceln — eigene Miniaturen.
3. ${SPIN}/content/techniques/paltering-half-truth.ts — Golden-Set-Formatvorbild
4. ${SPIN}/content/techniques/index.ts — nur DORT registrierte Technik-IDs dürfen in relatedTechniques stehen.

Erzeuge NEUE Datei ${SPIN}/content/exercises/${PREFIX}-${e.file} (export const ${constName(e.id)}: Exercise[]; Import aus '../types'):
- 1× technique-match (4 benannte Technik-Optionen, Distraktoren = echte verwechselbare Nachbarn, KEINE Gimmes)
- 1× response-choice ('Was tust du?', 4 Profi-Optionen, eine best practice) ODER fill-blank
- 1× nach didaktischem Ermessen; bei evidenceTier 'frontier' MUSS eine Übung Begriffswissen prüfen, nie Wirkung
- Jede Übung: id '${PREFIX}-${e.id}-1..3', primaryTechniqueId '${e.id}' (in relatedTechniques, nur registrierte IDs), correctAnswers.length===1, points 10, difficulty passend (2-Optionen ⇒ beginner; strebe über die 3 Übungen ≥2 verschiedene Schwierigkeitsbänder an), Erklärung nach Bauplan (Mechanismus + legitim einsetzen + erkennen/kontern in Du-Form + Distraktor-Aufklärung), de UND en vollständig und idiomatisch.
- Die 3 Szenarien werden blind (ohne Techniknamen) klassifiziert — jedes muss '${e.id}' EINDEUTIG zeigen, abgegrenzt von Nachbartechniken.
- Variiere Takeaways inhaltlich über die 3 Übungen (keine Schablone).
- NICHT in index.ts registrieren.
${objections ? `\nREVISION — behebe exakt diese Beanstandungen:\n${objections}\n` : ''}
Prüfe: cd ${SPIN} && npx tsc -b (fehlerfrei; nur DEINE Datei).

Ergebnis: exerciseScenarios (je Übung exerciseId/scenarioDe/options/correctIndex — scenarioDe = das Szenario ODER, wenn kein Szenario, der Fragetext), notes (max 3 Sätze).`

const blindPrompt = (scenarios, lens) => `Blindprüfung: Bestimme für JEDES der 3 Übungs-Szenarien die primär gezeigte Kommunikationstechnik. ${lens}

Die möglichen Techniken (id|Name) stehen in ${NODES_FILE} — lies sie zuerst: cat ${NODES_FILE}

Szenarien:
${scenarios.map((s, i) => `${i}: ${s.scenarioDe}`).join('\n')}

Je Szenario die EINE deutlichste Technik-ID (identifiedId, exampleIndex=Position), optional secondGuess, confident=false bei Schwanken. Streng urteilen.`

const distraktorPrompt = (e, sc) => `Distraktor-Advokat: Kannst du bei diesen Übungen eine NICHT-korrekte Option ernsthaft als richtig verteidigen? Sind Distraktoren plausibel (verwechselbare Nachbarn) statt Füllmaterial/Gimmes? Zieltechnik: ${e.id}
${JSON.stringify(sc, null, 1)}
pass=true nur wenn alle Übungen eindeutig UND ohne Gimme-Distraktoren. objections konkret pro Übung.`

const stilPrompt = (e) => `Stil-Lektorat gegen ${CHARTA}. Lies auch ${SPIN}/content/techniques/${e.file} (für Beispiel-Dubletten-Abgleich) und ${SPIN}/content/exercises/${PREFIX}-${e.file}.
Prüfe hart: Floskel-Verbotsliste, Register (kollegial, Du-Form-Takeaways), Szenario-Regel (Kanal+Rollen+Situation je Szenario; keine Dublette zu den technique.examples), Erklärungs-Bauplan (Mechanismus + doppelter Takeaway + Distraktor-Aufklärung in JEDER Erklärung), EN idiomatisch/bedeutungsgleich (keine Germanismen), keine Schablonen-Wiederholung über die 3 Übungen, verbotene Options-Strings. pass=false mit objections (Datei+Feld+Zitat).`

const results = await pipeline(
  ENTRIES,
  (e) => agent(autorPrompt(e, null), { label: `autor:${e.id}`, phase: 'Autor', schema: AUTOR_SCHEMA, effort: 'high' }),
  async (draft, e) => {
    if (!draft) return { entry: e.id, status: 'autor_failed', open: [] }
    const [bA, bB, dis, st] = await parallel([
      () => agent(blindPrompt(draft.exerciseScenarios, 'Perspektive: Wirkmechanismus.'), { label: `blindA:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(draft.exerciseScenarios, 'Perspektive: Oberflächen-Cues.'), { label: `blindB:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(distraktorPrompt(e, draft.exerciseScenarios), { label: `distraktor:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
      () => agent(stilPrompt(e), { label: `stil:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
    ])
    const obj = []
    for (const [nm, b] of [['A', bA], ['B', bB]]) for (const v of b?.verdicts ?? []) {
      if (v.identifiedId !== e.id) obj.push(`Blind${nm} Szenario${v.exampleIndex}: '${v.identifiedId}' statt '${e.id}' — schärfen`)
      else if (!v.confident) obj.push(`Blind${nm} Szenario${v.exampleIndex}: unsicher (${v.secondGuess ?? '-'}) — eindeutiger`)
    }
    if (dis && !dis.pass) obj.push(...(dis.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (st && !st.pass) obj.push(...(st.objections ?? []).map((o) => `Stil: ${o}`))

    if (obj.length === 0) return { entry: e.id, status: 'passed_round1', open: [] }
    log(`${e.id}: ${obj.length} Beanstandungen → Revision`)
    const rev = await agent(autorPrompt(e, obj.join('\n')), { label: `revision:${e.id}`, phase: 'Revision', schema: AUTOR_SCHEMA, effort: 'high' })
    if (!rev) return { entry: e.id, status: 'revision_failed', open: obj }
    const [a2, b2, d2, s2] = await parallel([
      () => agent(blindPrompt(rev.exerciseScenarios, 'Perspektive: Wirkmechanismus.'), { label: `blindA2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(rev.exerciseScenarios, 'Perspektive: Oberflächen-Cues.'), { label: `blindB2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(distraktorPrompt(e, rev.exerciseScenarios), { label: `distraktor2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
      () => agent(stilPrompt(e), { label: `stil2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
    ])
    const open = []
    for (const [nm, b] of [['A2', a2], ['B2', b2]]) for (const v of b?.verdicts ?? []) {
      if (v.identifiedId !== e.id) open.push(`Blind${nm} Szenario${v.exampleIndex}: '${v.identifiedId}'`)
    }
    if (d2 && !d2.pass) open.push(...(d2.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (s2 && !s2.pass) open.push(...(s2.objections ?? []).map((o) => `Stil: ${o}`))
    const rechecked = !!(a2 || b2 || d2 || s2)
    return { entry: e.id, status: open.length === 0 ? (rechecked ? 'passed_round2' : 'revised_unverified') : 'flagged', open }
  }
)

const compact = results.filter(Boolean).map((r) => ({ entry: r.entry, status: r.status, open: (r.open ?? []).slice(0, 8) }))
const passed = compact.filter((r) => r.status?.startsWith('passed')).length
log(`${PREFIX}: ${passed}/${ENTRIES.length} bestanden`)
return { prefix: PREFIX, passed, total: ENTRIES.length, summary: compact }
