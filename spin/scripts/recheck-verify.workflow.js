export const meta = {
  name: 'recheck-verify',
  description: 'Re-Verifikation der 17 revised_unverified wave4-Einträge: Blind ×2 + Distraktor + Stil, KEINE Neugenerierung. Flagged → Fix.',
  phases: [
    { title: 'Prüfung', detail: 'Blind ×2 + Distraktor + Stil je Eintrag' },
    { title: 'Revision', detail: 'Beanstandete wave4-Datei überarbeiten' },
    { title: 'Nachprüfung', detail: 'Blind ×2 + Distraktor + Stil erneut' },
  ],
}
const SPIN = '/home/user/disinfoapp/spin'
const NODES_FILE = `${SPIN}/content/source/technique-id-list.txt`
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
// Erwartet args.entries = [{id, file, exercises:[{id, scenarioDe, hasScenario}]}] (Szenarien vorextrahiert)
const ENTRIES = A.entries || []

const BLIND_SCHEMA = {
  type: 'object', required: ['classifications'],
  properties: {
    classifications: {
      type: 'array',
      items: { type: 'object', required: ['exId', 'identifiedId'], properties: { exId: { type: 'string' }, identifiedId: { type: 'string' }, secondGuess: { type: 'string' }, confident: { type: 'boolean' } } },
    },
  },
}
const CHECK_SCHEMA = { type: 'object', required: ['pass', 'objections'], properties: { pass: { type: 'boolean' }, objections: { type: 'array', items: { type: 'string' } } } }
const FIX_SCHEMA = {
  type: 'object', required: ['scenarios', 'changed'],
  properties: {
    scenarios: { type: 'array', items: { type: 'object', required: ['exId', 'scenarioDe'], properties: { exId: { type: 'string' }, scenarioDe: { type: 'string' } } } },
    changed: { type: 'string' },
  },
}

const scenarioList = (exs) => exs.filter((x) => x.scenarioDe).map((x) => `— exId: ${x.id}\n  Szenario: ${x.scenarioDe}`).join('\n\n')

const blindPrompt = (e, exs, lens) => `Blindprüfung (adversarial). Für JEDES der folgenden Szenarien: welche Kommunikationstechnik zeigt es PRIMÄR? ${lens}
Techniken (id|Name): lies zuerst cat ${NODES_FILE}
Beurteile nur den Szenariotext, ohne zu wissen, welche Technik gemeint ist.

${scenarioList(exs)}

Gib classifications zurück: pro Szenario { exId, identifiedId (deutlichste Technik-ID), secondGuess, confident=false bei Schwanken }.`

const distraktorPrompt = (e) => `Distraktor-Advokat (adversarial). Lies ${SPIN}/content/exercises/${e.file}. Zieltechnik aller Übungen: ${e.id}.
Prüfe je Übung, ob eine FALSCHE Antwortoption verteidigbar/ko-korrekt ist oder ein Distraktor bloß Füllmaterial (Gimme) ist. pass nur bei Eindeutigkeit ohne Gimmes. objections konkret mit Übungs-ID + Zitat der Option.`

const stilPrompt = (e) => `Stil-Lektorat (adversarial) gegen ${SPIN}/docs/sprachcharta.md. Lies ${SPIN}/content/exercises/${e.file} (alle Übungen, Zieltechnik ${e.id}).
Prüfe: Floskeln/Plattheit, Register (präzise/kollegial/nie belehrend), Erklärungs-Bauplan (Mechanismus 1–2 Sätze + doppelter Takeaway legitim/erkennen-kontern in Du-Form + Distraktor-Aufklärung), EN-Idiomatik (kein Wort-für-Wort, keine V2-Inversion/Germanismen), Gloss-Konsistenz (korrekte Option nicht als einzige un-glossiert), Beispiel-Regel (Kanal+Rollen+Situation), Evidenz-Ehrlichkeit (keine Wirkbehauptung als Faktum bei weak/frontier). pass=false NUR bei substanziellen Verstößen (kein Mikro-Geschmack); objections konkret mit Übungs-ID + Zitat.`

const verify = async (e, exs) => {
  const [bA, bB, dis, st] = await parallel([
    () => agent(blindPrompt(e, exs, 'Fokus Wirkmechanismus.'), { label: `blindA:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
    () => agent(blindPrompt(e, exs, 'Fokus Oberflächen-Cues.'), { label: `blindB:${e.id}`, phase: 'Prüfung', schema: BLIND_SCHEMA }),
    () => agent(distraktorPrompt(e), { label: `distraktor:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
    () => agent(stilPrompt(e), { label: `stil:${e.id}`, phase: 'Prüfung', schema: CHECK_SCHEMA }),
  ])
  const open = []
  // parent/child leniency: a scenario mis-called as a broader parent is a soft miss; a different family is hard.
  const blindMiss = []
  for (const [nm, b] of [['A', bA], ['B', bB]]) {
    if (!b) continue
    for (const c of (b.classifications ?? [])) {
      if (c.identifiedId !== e.id) blindMiss.push(`Blind${nm}[${c.exId}]: '${c.identifiedId}'${c.secondGuess ? ` (2nd ${c.secondGuess})` : ''}`)
    }
  }
  if (blindMiss.length) open.push(...blindMiss.slice(0, 6))
  if (dis && !dis.pass) open.push(...(dis.objections ?? []).slice(0, 4).map((o) => `Distraktor: ${o}`))
  if (st && !st.pass) open.push(...(st.objections ?? []).slice(0, 5).map((o) => `Stil: ${o}`))
  return { blindMiss, distOk: !dis || dis.pass, stilOk: !st || st.pass, open }
}

const fixPrompt = (e, open) => `Du bist Redakteur/Lektor der SPIN-Lern-App (Zielgruppe PR-/Kommunikationsprofis). Überarbeite ${SPIN}/content/exercises/${e.file} IN-PLACE für die Zieltechnik '${e.id}'. Lies zwingend ${SPIN}/docs/sprachcharta.md und die Technik-Datei in ${SPIN}/content/techniques/.
Behebe ausschließlich die folgenden Beanstandungen, ohne Struktur/IDs/primaryTechniqueId/difficulty/correctAnswers zu brechen und ohne neue Beanstandungen einzuführen:
${open.map((o, i) => `${i + 1}. ${o}`).join('\n')}
Wenn eine Blind-Beanstandung vorliegt: schärfe das betroffene Szenario so, dass die Zieltechnik '${e.id}' eindeutig dominiert (nicht der genannte Fehltreffer). relatedTechniques nur registrierte IDs. Prüfe danach: cd ${SPIN} && npx tsc -b.
Gib zurück: scenarios (array aller Übungen mit geänderten { exId, scenarioDe } — bei Fragetyp ohne Szenario den Fragetext), changed (1 Satz).`

const results = await pipeline(
  ENTRIES,
  async (e) => {
    const r1 = await verify(e, e.exercises)
    if (r1.open.length === 0) return { entry: e.id, status: 'passed', open: [] }
    // Revision
    const fix = await agent(fixPrompt(e, r1.open), { label: `fix:${e.id}`, phase: 'Revision', schema: FIX_SCHEMA, effort: 'high' })
    if (!fix) return { entry: e.id, status: 'revision_failed', open: r1.open }
    // rebuild exercises with updated scenarios for the re-blind
    const byId = Object.fromEntries((fix.scenarios ?? []).map((s) => [s.exId, s.scenarioDe]))
    const exs2 = e.exercises.map((x) => ({ ...x, scenarioDe: byId[x.id] ?? x.scenarioDe }))
    const r2 = await verifyRound2(e, exs2)
    return { entry: e.id, status: r2.open.length === 0 ? 'passed_round2' : 'flagged', changed: fix.changed, open: r2.open }
  }
)

async function verifyRound2(e, exs) {
  const [bA, bB, dis, st] = await parallel([
    () => agent(blindPrompt(e, exs, 'Fokus Wirkmechanismus.'), { label: `blindA2:${e.id}`, phase: 'Nachprüfung', schema: BLIND_SCHEMA }),
    () => agent(blindPrompt(e, exs, 'Fokus Oberflächen-Cues.'), { label: `blindB2:${e.id}`, phase: 'Nachprüfung', schema: BLIND_SCHEMA }),
    () => agent(distraktorPrompt(e), { label: `distraktor2:${e.id}`, phase: 'Nachprüfung', schema: CHECK_SCHEMA }),
    () => agent(stilPrompt(e), { label: `stil2:${e.id}`, phase: 'Nachprüfung', schema: CHECK_SCHEMA }),
  ])
  const open = []
  for (const [nm, b] of [['A2', bA], ['B2', bB]]) {
    if (!b) continue
    for (const c of (b.classifications ?? [])) if (c.identifiedId !== e.id) open.push(`Blind${nm}[${c.exId}]: '${c.identifiedId}'`)
  }
  if (dis && !dis.pass) open.push(...(dis.objections ?? []).slice(0, 4).map((o) => `Distraktor: ${o}`))
  if (st && !st.pass) open.push(...(st.objections ?? []).slice(0, 5).map((o) => `Stil: ${o}`))
  return { open }
}

const compact = results.filter(Boolean).map((r) => ({ entry: r.entry, status: r.status, changed: r.changed, open: (r.open ?? []).slice(0, 8) }))
const passed = compact.filter((r) => r.status?.startsWith('passed')).length
log(`recheck-verify: ${passed}/${ENTRIES.length} verifiziert`)
return { passed, total: ENTRIES.length, summary: compact }
