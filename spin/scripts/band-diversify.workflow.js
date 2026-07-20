export const meta = {
  name: 'band-diversify',
  description: 'Ergänzt je Technik EINE Übung in einem komplementären Schwierigkeitsband (Erkenntnistreppe).',
  phases: [
    { title: 'Autor', detail: '1 Übung im Zielband' },
    { title: 'Prüfung', detail: 'Szenario-Blind ×2, Distraktor, Stil' },
    { title: 'Revision', detail: 'Beanstandete überarbeiten' },
  ],
}
const SPIN = '/home/user/disinfoapp/spin'
const NODES_FILE = `${SPIN}/content/source/technique-id-list.txt`
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ENTRIES = A.entries    // [{id, file, band}]
const camel = (id) => id.replace(/_(.)/g, (m, c) => c.toUpperCase()).replace(/^(.)/, (m, c) => c.toUpperCase())

const AUTOR_SCHEMA = {
  type: 'object', required: ['scenarioDe', 'options', 'correctIndex', 'notes'],
  properties: {
    scenarioDe: { type: 'string' }, options: { type: 'array', items: { type: 'string' } },
    correctIndex: { type: 'integer' }, notes: { type: 'string' },
  },
}
const BLIND_SCHEMA = { type: 'object', required: ['identifiedId', 'confident'], properties: { identifiedId: { type: 'string' }, secondGuess: { type: 'string' }, confident: { type: 'boolean' } } }
const CHECK_SCHEMA = { type: 'object', required: ['pass', 'objections'], properties: { pass: { type: 'boolean' }, objections: { type: 'array', items: { type: 'string' } } } }

const bandDesc = (b) => b === 'beginner'
  ? 'BEGINNER: genau EINE Technik, blatant im Szenario (explizite Cue-Wörter), 2-4 benannte Technik-Optionen, in <10s aus Oberflächen-Cues lösbar. quick-check oder leichter technique-match.'
  : b === 'advanced'
  ? 'ADVANCED: Technik subtil/eingebettet (keine Cue-Wörter), Distraktoren sind Near-Misses, Multi-Satz-Szenario ODER Second-Order-Abwägung. spot-the-flag/harter technique-match/response-choice.'
  : 'INTERMEDIATE: EINE dominante Technik unter plausiblen, verwechselbaren Distraktoren; erfordert Mechanismus-Kenntnis. 4 Optionen.'

const autorPrompt = (e, objections) => `Du bist Redakteur der SPIN-Lern-App (Zielgruppe PR-/Kommunikationsprofis). Schreibe GENAU 1 zusätzliche Übung für die bestehende Technik '${e.id}' im Zielband ${e.band.toUpperCase()}.

Lies: ${SPIN}/docs/sprachcharta.md; ${SPIN}/content/techniques/${e.file} (Technik-Eintrag + examples — NICHT duplizieren); die bestehenden Übungen in ${SPIN}/content/exercises/ die primaryTechniqueId '${e.id}' tragen (grep), damit deine Übung sich in Szenario UND Schwierigkeit klar davon abhebt.

Zielband: ${bandDesc(e.band)}
Bei seriousMode-Techniken (Zwang & Kontrolle: gaslighting/love_bombing/darvo/coercive_control): nüchterner Ton, kein 'Legitim einsetzen', Schutz-/Erkennungsperspektive.

Erzeuge NEUE Datei ${SPIN}/content/exercises/band-${e.file} (export const band${camel(e.id)}: Exercise[] mit GENAU 1 Element; Import aus '../types'):
- id 'band-${e.id}-1', primaryTechniqueId '${e.id}' (in relatedTechniques, nur in content/techniques/index.ts registrierte IDs), correctAnswers.length===1, difficulty '${e.band}', points 10, Typ passend zum Band.
- Distraktoren = echte verwechselbare Nachbarn (keine Gimmes). Erklärung nach Bauplan (Mechanismus + [legitim einsetzen, außer seriousMode] + erkennen/kontern in Du-Form + Distraktor-Aufklärung). de + en vollständig, EN idiomatisch.
- Das Szenario wird blind (ohne Techniknamen) klassifiziert — es muss '${e.id}' eindeutig zeigen.
${objections ? `\nREVISION — behebe:\n${objections}\n` : ''}
Prüfe: cd ${SPIN} && npx tsc -b. Gib zurück: scenarioDe (Szenario ODER Fragetext), options (deutsch), correctIndex, notes.`

const blindPrompt = (sc, lens) => `Blindprüfung: Welche Kommunikationstechnik zeigt dieses Szenario primär? ${lens}
Techniken (id|Name) in ${NODES_FILE} — lies: cat ${NODES_FILE}
Szenario: ${sc}
Gib identifiedId (die deutlichste Technik-ID), optional secondGuess, confident=false bei Schwanken.`

const results = await pipeline(
  ENTRIES,
  (e) => agent(autorPrompt(e, null), { label: `autor:${e.id}`, phase: 'Autor', schema: AUTOR_SCHEMA, effort: 'high' }),
  async (draft, e) => {
    if (!draft) return { entry: e.id, status: 'autor_failed', open: [] }
    const [bA, bB, dis, st] = await parallel([
      () => agent(blindPrompt(draft.scenarioDe, 'Wirkmechanismus.'), { label: `blindA:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(draft.scenarioDe, 'Oberflächen-Cues.'), { label: `blindB:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
      () => agent(`Distraktor-Advokat: Ist bei dieser Übung eine falsche Option verteidigbar oder ein Distraktor bloß Füllmaterial? Zieltechnik ${e.id}:\n${JSON.stringify(draft)}\npass nur bei Eindeutigkeit ohne Gimmes.`, { label: `distraktor:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
      () => agent(`Stil-Lektorat gegen ${SPIN}/docs/sprachcharta.md. Lies ${SPIN}/content/exercises/band-${e.file}. Prüfe Floskeln, Register (seriousMode nüchtern), Bauplan (Mechanismus+Takeaways+Distraktor-Aufklärung, Du-Form), EN-Idiomatik, Band-Passung (${e.band}), keine Dublette zu technique.examples. pass=false mit objections.`, { label: `stil:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
    ])
    const obj = []
    for (const [nm, b] of [['A', bA], ['B', bB]]) {
      if (b && b.identifiedId !== e.id) obj.push(`Blind${nm}: '${b.identifiedId}' statt '${e.id}'`)
      else if (b && !b.confident) obj.push(`Blind${nm}: unsicher (${b.secondGuess ?? '-'})`)
    }
    if (dis && !dis.pass) obj.push(...(dis.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (st && !st.pass) obj.push(...(st.objections ?? []).map((o) => `Stil: ${o}`))
    if (obj.length === 0) return { entry: e.id, status: 'passed_round1', open: [] }
    const rev = await agent(autorPrompt(e, obj.join('\n')), { label: `revision:${e.id}`, phase: 'Revision', schema: AUTOR_SCHEMA, effort: 'high' })
    if (!rev) return { entry: e.id, status: 'revision_failed', open: obj }
    const [a2, b2, d2, s2] = await parallel([
      () => agent(blindPrompt(rev.scenarioDe, 'Wirkmechanismus.'), { label: `blindA2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(rev.scenarioDe, 'Oberflächen-Cues.'), { label: `blindB2:${e.id}`, phase: 'Revision', schema: BLIND_SCHEMA }),
      () => agent(`Distraktor-Advokat: Zieltechnik ${e.id}:\n${JSON.stringify(rev)}\npass nur bei Eindeutigkeit ohne Gimmes.`, { label: `distraktor2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
      () => agent(`Stil-Lektorat gegen ${SPIN}/docs/sprachcharta.md für ${SPIN}/content/exercises/band-${e.file}. pass=false mit objections.`, { label: `stil2:${e.id}`, phase: 'Revision', schema: CHECK_SCHEMA }),
    ])
    const open = []
    for (const [nm, b] of [['A2', a2], ['B2', b2]]) if (b && b.identifiedId !== e.id) open.push(`Blind${nm}: '${b.identifiedId}'`)
    if (d2 && !d2.pass) open.push(...(d2.objections ?? []).map((o) => `Distraktor: ${o}`))
    if (s2 && !s2.pass) open.push(...(s2.objections ?? []).map((o) => `Stil: ${o}`))
    return { entry: e.id, status: open.length === 0 ? 'passed_round2' : 'flagged', open }
  }
)
const compact = results.filter(Boolean).map((r) => ({ entry: r.entry, status: r.status, open: (r.open ?? []).slice(0, 6) }))
log(`band-diversify: ${compact.filter((r) => r.status?.startsWith('passed')).length}/${ENTRIES.length} bestanden`)
return { passed: compact.filter((r) => r.status?.startsWith('passed')).length, total: ENTRIES.length, summary: compact }
