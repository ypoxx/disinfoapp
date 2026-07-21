export const meta = {
  name: 'band-fix',
  description: 'Behebt die beanstandeten 16 Band-Übungen (Stil + 3 Korrektheits-kritische) und re-verifiziert.',
  phases: [
    { title: 'Fix', detail: 'Datei in-place korrigieren' },
    { title: 'Re-Prüfung', detail: 'Blind ×2 + Distraktor + Stil' },
  ],
}
const SPIN = '/home/user/disinfoapp/spin'
const NODES_FILE = `${SPIN}/content/source/technique-id-list.txt`

// Per-entry objections + structural hints. bands: b=beginner, i=intermediate, a=advanced
const ENTRIES = [
  { id: 'whataboutism', file: 'band-whataboutism.ts', band: 'i', hint: '', obj: [
    "EN Zeile mit V2-Inversion-Calque 'Why the rise was scrapped, he does not say.' → idiomatisch umstellen ('He does not say why the raise was scrapped.').",
    "EN Germanismus 'concrete question' → 'the specific question' / 'the direct question'.",
    "EN 'nets the two failings against each other' (Finanzjargon) → 'weighs ... against each other' / 'plays one failing off against the other'.",
    "Rollen-Inkonsistenz EN: erst 'team representative', später 'team rep'. DE 'Teamsprecherin' = spokesperson, nicht 'representative'. Durchgängig eine Rolle (spokesperson).",
    "Gloss-Register: korrekte Option 'Whataboutism' nur mit Latein '(tu quoque)', Distraktoren mit Klartext. Gib der korrekten Option EBENFALLS eine knappe deutsche Klartext-Auflösung (z. B. 'Whataboutism (Und-was-ist-mit …)').",
    "Bauplan Pkt 3: auch erklären, WARUM die gewählte (falsche) Option plausibel wirkte, nicht nur die Abgrenzung.",
  ] },
  { id: 'red_herring', file: 'band-red-herring.ts', band: 'i', hint: '', obj: [
    "Bauplan Pkt 1 (Mechanismus) fehlt: 1–2 Sätze, WARUM der Hebel wirkt (begrenzte Aufmerksamkeit; ein neues, attraktiveres Thema verdrängt die offene Frage).",
    "Leg 'legitim einsetzen' ist bloßer Freibrief ('Auf kommende Produkte hinzuweisen ist normal') → echtes 'So nutzt du das professionell: …' formulieren.",
    "Options-Konsistenz: Option 0 de 'Red Herring (Ablenkung)' aber en 'Red herring' ohne Gloss — EN-Geschwister haben Klammer-Gloss. EN angleichen, Groß-/Kleinschreibung prüfen.",
    "Plattheit/Wortwiederholung: 'offen' und 'Ausfall' häufen sich stark → variieren.",
    "Selbst-Zitat 'mit keinem Wort' als Cue zurückzitieren wirkt gestelzt → Cue benennen statt Szenariotext zu wiederholen.",
    "Anglizismus 'Presse-Call' im Erzählrahmen → 'Pressetermin' / 'Telefon-Pressekonferenz'. ('launchen' im CEO-Zitat darf bleiben.)",
  ] },
  { id: 'loaded_language', file: 'band-loaded-language.ts', band: 'b', hint:
    "BLOCKIEREND: Der Framing-Distraktor ist ko-korrekt, weil content/techniques/framing.ts Framing als Bedeutungsformung 'durch Wortwahl' definiert (Euphemismus wird in dieser App unter Framing subsumiert). Zusätzlich liefert das Szenario mit 'optimiertes Frischeformat' selbst einen Framing-Cue (neuer Blickwinkel Frische). FIX: (1) Ersetze den Framing-Distraktor durch einen kollisionsfreien verwechselbaren Nachbarn — nimm 'emotional_appeal' (Emotionale Ansprache) statt 'framing'. (2) Entferne den Frische-Blickwinkel: ersetze 'optimiertes Frischeformat' durch einen REINEN Euphemismus, der dieselbe Sache (weniger Inhalt) umetikettiert, ohne neuen Blickwinkel (z. B. 'die neue Wohlfühlgröße' / 'schlankere Snackgröße'). (3) In der explanation den 'Framing wäre es …'-Absatz durch 'Emotionale Ansprache wäre es …' ersetzen (Emotional Appeal = appelliert an ein Gefühl/eine Geschichte, hier fehlt jede emotionale Erzählung; nur ein Wort ist gefärbt). relatedTechniques: ['loaded_language','emotional_appeal','paltering_half_truth'].",
    obj: [
    "Beispiel-Regel: Rollen-Dyade fehlt (Kanal + Rollen + Situation). Sender→Empfänger ergänzen (z. B. Marketing-Team → Verbraucher / Fachpresse-Kontext).",
    "Bauplan Pkt 1 (Mechanismus) unterbelichtet: in 1–2 Sätzen sagen, WARUM der Hebel wirkt (die Wertung reist im Wort mit und wird unbemerkt übernommen).",
  ] },
  { id: 'appeal_to_tradition', file: 'band-appeal-to-tradition.ts', band: 'b', hint: '', obj: [
    "EN gemischte Metapher/Calque 'The lever likely gains traction' → 'The cue likely lands' o. Ä. (kein Hebel, der 'traction' gewinnt).",
    "EN Germanismus 'Why the neighbours don't fit' → 'Why the other options don't fit' / 'Why the near-misses miss'.",
    "EN Calque 'is genuine value' → 'is a genuine asset' / 'has genuine value'.",
    "Gloss-Register: korrekte Option latein '(Ad antiquitatem)', Distraktoren englisch. Einheitlich (deutsche Klartext-Gloss für die korrekte Option, z. B. 'Traditionsargument (Weil-schon-immer)').",
    "DE-Erklärung zu massig (~180 Wörter für beginner <10s): Mechanismus straffen, dozierenden Ton vermeiden.",
    "Evidenz: 'weil ALLES mit langer Geschichte …' überdehnt (Tier 'weak') → kalibrieren ('vieles' statt 'alles').",
  ] },
  { id: 'peak_end_rule', file: 'band-peak-end-rule.ts', band: 'i', hint: '', obj: [
    "Numerus-Bruch: Option 'Emotionale Appelle' (DE Plural) vs 'Emotional Appeal' (EN Singular) → angleichen (DE 'Emotionale Ansprache', EN 'Emotional appeal').",
    "Bauplan Pkt 1: Mechanismus-Satz präziser (warum Höhepunkt+Ende die Gesamterinnerung prägen), nicht bloß beschreiben, wie die Demo gebaut ist.",
    "Bauplan Pkt 3: für Distraktoren (Verfügbarkeitsheuristik, Ankereffekt) auch sagen, WARUM sie hier plausibel wirkten, nicht nur Lehrbuch-Kontrast.",
    "Distraktor 'Emotionale Appelle' ist der schwächste — schärfen oder durch echten kognitiven Nachbarn ersetzen (z. B. 'primacy_order_effects' als Reihenfolge-Nachbar), damit alle drei gleichwertige Near-Misses sind.",
  ] },
  { id: 'mental_accounting', file: 'band-mental-accounting.ts', band: 'i', hint: '', obj: [
    "Bauplan Pkt 1: Mechanismus in 1–2 Sätzen isolieren (Geld wird mentalen Töpfen zugeordnet, obwohl ein Euro überall gleich viel wert ist) — nicht ein einziger langer Block.",
    "Register: Du-Anrede konsequent, kein Wechsel zu unpersönlichem 'man'.",
    "Satzbau: Gedankenstrich-Ketten (~6 '—' in einem Absatz) auflösen in klare Sätze.",
    "Fachbegriff 'Mental Accounting' beim ersten Auftreten knapp deutsch auflösen ('mentale Buchführung').",
    "EN Calque 'un-invested cash sleeps right next to it' → idiomatisch ('the idle cash sits right beside it').",
    "Beispiel-Regel: Kanal/Adressat des Zitats ergänzen (an wen richtet sich die Aussage).",
  ] },
  { id: 'ai_deception_scheming', file: 'band-ai-deception-scheming.ts', band: 'a', hint: '', obj: [
    "Beispiel-Regel: Szenario auf Miniatur straffen (Kanal + Rollen + Situation) — kein langer Mehrabsatz-Bericht.",
    "Bauplan Pkt 1: Mechanismus in 1–2 knappen Sätzen.",
    "Wortwiederholung: 'schon getroffene(n)' 3×, 'souverän' 2× → variieren.",
    "Rollen-Inkonsistenz: in der Sycophancy-Abgrenzung 'Nutzerin', im Szenario 'Kundin' → eine Rolle durchhalten.",
    "'souverän' für eine erfundene Begründung ist aufhübschend → neutral ('wirkt schlüssig, lässt sich aber nicht in den Logs wiederfinden').",
    "EN 'it says it \"ran a regression\"' Pronomen-Doppelung → 'claims to have run …'.",
  ] },
  { id: 'confirmshaming', file: 'band-confirmshaming.ts', band: 'b', hint: '', obj: [
    "Evidenz-Ehrlichkeit (schwer): 'Der Trick zieht, weil kaum jemand …' / 'The trick works because …' ist Wirkbehauptung als Faktum → hedgen ('Der Hebel setzt darauf, dass …').",
    "Leg 'legitim einsetzen' widersprüchlich: soll zeigen, wie man es SAUBER macht — hier eher 'so vermeidest du den Trick'. Klar als legitime Praxis formulieren (Ja/Nein sachlich beschriften).",
    "EN Wort-für-Wort 'certify a flaw about themselves with a single tap' → idiomatisch ('few people will click a button that brands them as deficient').",
    "Beispiel-Regel: generische Consumer-Einzelrolle ('Nutzer Jonas', Vokabel-App) → neutrales Business/Comms-Szenario mit Rollen-Dyade.",
    "Anspruch-Ausführung-Drift: Header kündigt bewusst leichte Machart an, geliefert wird dichter Block → entweder Header anpassen oder Erklärung wirklich knapp halten.",
  ] },
  { id: 'astroturfing_sockpuppets', file: 'band-astroturfing-sockpuppets.ts', band: 'a', hint: '', obj: [
    "Leg-Takeaway fehlgerahmt: 'echte Kundinnen unter Klarnamen zu Wort kommen lassen' ist NICHT die legitime Variante von Astroturfing (das ist per Definition verdeckt). Formuliere die legitime Nachbar-Praxis als offen gekennzeichnete Fürsprache/Testimonials — und mache klar, dass verdeckte Steuerung selbst keine legitime Form hat.",
    "EN 'On the neighbours:' ist Translationese für 'Zu den Nachbarn:' → integrieren ('The neighbouring patterns:' o. Ä. bzw. die Abgrenzung fließend einbauen).",
    "Mechanische Dreifach-Parallelität '… reizt, weil …' 3× wortgleich → variieren.",
    "Verbloses Fragment 'im Zweifel über die Meldewege der Plattform' → vollständiger Satz.",
    "Selbstanspruch 'knappere Erklärung' nicht eingelöst (~190-Wort-Block) → straffen oder Header-Anspruch anpassen.",
    "Terminologie: 'Nähe zum Unternehmen offen kennzeichnen' → Hausbegriff 'offengelegte Trägerschaft/Kooperation' konsistent nutzen.",
  ] },
  { id: 'disguised_ads', file: 'band-disguised-ads.ts', band: 'b', hint: '', obj: [
    "Rollen-/Register-Bruch: 'du' ist erst das getäuschte Opfer, dann der werbetreibende Profi. Perspektive vereinheitlichen (Comms-Profi, der das Muster erkennt).",
    "'Erkennen und kontern' ist End-User-Klickhygiene → professionelle Gegen-Praxis (z. B. Kennzeichnungspflicht/Redaktions-Review).",
    "Szenario-Präferenz: B2C-Consumer-Sujet (Video-Plattform, Tutorial) → neutrales Business/Comms-Szenario, wie disguised-ads.ts es rahmt.",
    "Proportionalität: beginner '<10s blatant', trägt aber langen Mechanismus + volle Distraktor-Autopsie → straffen.",
    "Personifizierung 'Welche Technik nutzt der Play-Button hier?' → Akteur benennen (der Spiele-Vermarkter), nicht die UI-Fläche.",
  ] },
  { id: 'misdirection', file: 'band-misdirection.ts', band: 'a', hint:
    "BLOCKIEREND: Blind ×2 identifizierten 'nudging' statt 'misdirection'. In DIESER App IST misdirection ein Dark Pattern der Salienz-Asymmetrie (category dark_patterns; siehe misdirection.ts). Der Domänen-Rahmen (Preis-Screen) ist RICHTIG — NICHT auf Kampagnen-Misdirection umschreiben. FIX: schärfe die misdirection-EIGENE Signatur, die nudging NICHT hat: (1) die für die NUTZERIN vorteilhafte Option (Sparpreis) wird AKTIV unauffällig gemacht/versteckt (klein, blass, an den Rand) — das ist der Trennschnitt zu nudging, das zum NUTZER-Vorteil lenkt; (2) mach den anbieter-adversen Vorsatz explizit (Marge vor Reisenden-Interesse), also ein Dark Pattern, kein wohlmeinender Nudge; (3) vermeide neutrale Choice-Architecture-Formeln ('entscheidet allein Fläche und Farbe') zugunsten von 'die günstigere, im Interesse der Reisenden liegende Option wird gezielt in den Hintergrund gestaltet'. Ziel: Blind landet auf misdirection, nicht nudging. Falls sinnvoll, ergänze 'nudging' als vierten Distraktor mit sauberer Abgrenzung.",
    obj: [
    "Monokausale Wirkbehauptung 'entscheidet allein die Fläche und die Farbe' (Tier weak) → hedgen.",
    "Register-Bruch: 'Legitim einsetzen' unpersönlich, 'Erkennen und kontern' Du-Form → durchgängig Du.",
    "EN Calque 'reads like the pre-drawn path' → 'reads like the path already laid out' / 'the intended default'.",
    "Lexikalische Übersättigung 'Fläche' (mehrfach) → variieren.",
  ] },
  { id: 'fake_social_proof', file: 'band-fake-social-proof.ts', band: 'b', hint:
    "TEIL-BLOCKIEREND: Blind identifizierte einmal 'social_proof' statt 'fake_social_proof'. fake_social_proof ist ein Kind von social_proof; der Fabrikations-Cue muss unmissverständlich sein. FIX: schärfe die ERFUNDEN-ohne-reale-Grundlage-Signatur so, dass sie den 'fake'-Charakter blind erzwingt — z. B. der Zähler läuft auch ohne einen einzigen echten Kauf sichtbar weiter / die Zahl ist mit dem seit heute gelisteten Produkt logisch unvereinbar / ein zweiter Reiter zeigt 0 Bewertungen. Der Widerspruch muss auf der Oberfläche selbst ablesbar sein, damit blind 'fake_social_proof' (nicht 'social_proof') trifft.",
    obj: [
    "Mechanismus 3 Sätze statt 1–2 → straffen.",
    "'Oben prangt das Label' — 'prangt' ist wertend/nimmt die Beurteilung vorweg → neutral ('Oben steht/sitzt das Label').",
    "Terminologie: Klammer-Glossen 'Fake Social Proof (Falscher sozialer Beweis)' germanisieren den Hausbegriff → Gloss zurückhaltender oder konsistent zur Hausterminologie.",
    "Beispiel-Regel: explizite Rollen-Dyade (Sender→Empfänger) ergänzen.",
    "Du-Konsistenz: Szenario 'du', Erklärung 'die Kundin' → eine Perspektive.",
  ] },
  { id: 'gaslighting', file: 'band-gaslighting.ts', band: 'i', serious: true, hint: '', obj: [
    "EN Rückübersetzung 'Jour fixe' → 'stand-up' nicht bedeutungsgleich; neutraler ('the weekly team meeting').",
    "Gloss-Inkonsistenz: options[0] 'Gaslighting' ohne Gloss, options[1..3] mit Klammer-Gloss → korrekte Option ebenfalls knapp auflösen ('Gaslighting (Realität systematisch in Zweifel ziehen)').",
    "Anglizismus 'Threads zusammenziehen' → neutral ('Gesprächsstränge/Absprachen vermengen').",
    "Bauplan Pkt 3: bei Distraktoren auch sagen, warum sie plausibel wirkten (nicht nur Abgrenzung).",
    "Schutz vs. Kontern überlappen ('unabhängige Zweitwahrnehmung' vs 'dritte Person hinzuziehen') → entdoppeln.",
    "seriousMode: nüchtern, kein 'Legitim einsetzen', Schutz-/Erkennungsperspektive.",
  ] },
  { id: 'love_bombing', file: 'band-love-bombing.ts', band: 'i', serious: true, hint: '', obj: [
    "Terminologie: Option 'Coercive Control' Klammer-Definition weicht vom kanonischen Namen in coercive-control.ts ab → Hausnamen/Gloss angleichen.",
    "Gloss-Asymmetrie: drei Distraktoren lang glossiert, korrekte Option 'Love Bombing' ohne Gloss → knapp auflösen und ALLE Glossen kurz halten (kein Meta-Hinweis auf die Lösung).",
    "Register: ~180-Wort-Block, 'Schutz:' reiht 4 Imperative → straffen, Du-Form ruhig.",
    "Distraktor Foot-in-the-Door hat keinen Anker im Szenario → durch echten Nachbarn ersetzen oder Anker legen.",
    "seriousMode: nüchtern, kein 'Legitim einsetzen'.",
  ] },
  { id: 'darvo', file: 'band-darvo.ts', band: 'i', serious: true, hint: '', obj: [
    "Evidenz-Ehrlichkeit (schwerste): 'genau das lässt die Kundin an der Urheberin zweifeln und nimmt der Beschwerde ihr Gewicht' — Wirkung als Faktum → hedgen.",
    "Bauplan Pkt 1: Mechanismus überladen (~55-Wort-Satz + volle DARVO-Kette) → auf 1–2 Sätze straffen.",
    "Redundanz: 'Schutzhinweis' und 'So erkennst und konterst du es' überlappen fast vollständig → zusammenführen/entdoppeln.",
    "Register: ~370-Wort-Block, gedankenstrich-lastig → in klare Sätze/Absätze.",
    "Gloss-Inkonsistenz: 'Gaslighting' ohne Klammer-Gloss, andere Optionen mit → angleichen.",
    "seriousMode: nüchtern, kein 'Legitim einsetzen'.",
  ] },
  { id: 'coercive_control', file: 'band-coercive-control.ts', band: 'a', serious: true, hint: '', obj: [
    "Evidenz-Ehrlichkeit (Kern): 'Zuspitzungen bergen für Betroffene das höchste Risiko' / 'escalation carries the highest risk' ist superlative Wirkbehauptung ohne Quelle → entfernen/hedgen.",
    "Register: überlanger Block aus Schachtelsätzen, gehäufte Gedankenstriche/Semikola → straffen.",
    "Redundanz: Erkennungsmerkmale zweimal fast gleich aufgezählt (Mechanismus + Erkennen) → entdoppeln.",
    "Bauplan Pkt 1: Mechanismus als klar isolierten 1–2-Satz-Einstieg, nicht mit Framing-Argument vermengt.",
    "EN Präzisionsverlust: 'her world has quietly narrowed' für 'Radius/Handlungsspielraum' zu vage → 'her freedom of movement/room to act has quietly narrowed'.",
    "seriousMode: nüchtern, kein 'Legitim einsetzen', Schutz-/Erkennungsperspektive.",
  ] },
]

const BAND = { b: 'beginner', i: 'intermediate', a: 'advanced' }
const BLIND_SCHEMA = { type: 'object', required: ['identifiedId', 'confident'], properties: { identifiedId: { type: 'string' }, secondGuess: { type: 'string' }, confident: { type: 'boolean' } } }
const CHECK_SCHEMA = { type: 'object', required: ['pass', 'objections'], properties: { pass: { type: 'boolean' }, objections: { type: 'array', items: { type: 'string' } } } }
const FIX_SCHEMA = { type: 'object', required: ['scenarioDe', 'changed'], properties: { scenarioDe: { type: 'string' }, changed: { type: 'string' } } }

const fixPrompt = (e) => `Du bist Redakteur/Lektor der SPIN-Lern-App (Zielgruppe PR-/Kommunikationsprofis, reagieren allergisch auf Plattes und unidiomatisches Englisch). Überarbeite die bestehende Band-Übung für '${e.id}' (Band ${BAND[e.band].toUpperCase()}) IN-PLACE.

Lies zwingend: ${SPIN}/docs/sprachcharta.md; ${SPIN}/content/exercises/${e.file}; ${SPIN}/content/techniques/${e.file.replace('band-', '').replace(/-/g, '-')} (falls vorhanden — sonst die passende Technik-Datei in ${SPIN}/content/techniques/).${e.id === 'loaded_language' ? ` Lies AUCH ${SPIN}/content/techniques/framing.ts und ${SPIN}/content/techniques/emotional-appeal.ts.` : ''}${e.id === 'misdirection' ? ` Lies AUCH ${SPIN}/content/techniques/misdirection.ts (dark_patterns) und ${SPIN}/content/techniques/nudging.ts.` : ''}${e.id === 'fake_social_proof' ? ` Lies AUCH ${SPIN}/content/techniques/fake-social-proof.ts und ${SPIN}/content/techniques/social-proof.ts.` : ''}
${e.serious ? 'seriousMode (Zwang & Kontrolle): nüchterner, sachlicher Ton, KEIN "Legitim einsetzen"-Teil, Schutz-/Erkennungsperspektive.' : ''}
${e.hint ? `\nSTRUKTURELLE VORGABE (Priorität):\n${e.hint}\n` : ''}
Behebe ALLE folgenden Beanstandungen, ohne neue einzuführen:
${e.obj.map((o, i) => `${i + 1}. ${o}`).join('\n')}

Regeln (Sprachcharta): Erklärungs-Bauplan = (1) Mechanismus in 1–2 Sätzen: WARUM der Hebel wirkt; (2) doppelter Takeaway: legitim einsetzen [außer seriousMode] + erkennen & kontern in Du-Form; (3) Distraktor-Aufklärung: warum jede falsche Option plausibel wirkte UND warum sie hier nicht zutrifft. EN idiomatisch (kein Wort-für-Wort, keine V2-Inversion, keine Germanismen). Fachbegriffe beim ersten Auftreten knapp deutsch auflösen; korrekte Option NICHT als einzige un-glossiert lassen. Beispiel = Miniatur mit Kanal + Rollen (Sender→Empfänger) + Situation. Keine Wirkbehauptungen als Faktum bei evidenceTier weak/frontier. Keine Dublette zu technique.examples.

Editiere ${SPIN}/content/exercises/${e.file} direkt (Struktur/Exports/ID/primaryTechniqueId/difficulty '${BAND[e.band]}'/points 10 beibehalten; correctAnswers.length===1; relatedTechniques nur registrierte IDs). Prüfe danach: cd ${SPIN} && npx tsc -b (muss fehlerfrei sein).
Gib zurück: scenarioDe (das finale Szenario ODER der Fragetext, exakt wie in der Datei), changed (1 Satz, was du geändert hast).`

const blindPrompt = (sc, lens) => `Blindprüfung: Welche Kommunikationstechnik zeigt dieses Szenario primär? ${lens}
Techniken (id|Name): lies cat ${NODES_FILE}
Szenario: ${sc}
Gib identifiedId (deutlichste Technik-ID), optional secondGuess, confident=false bei Schwanken.`

const results = await pipeline(
  ENTRIES,
  (e) => agent(fixPrompt(e), { label: `fix:${e.id}`, phase: 'Fix', schema: FIX_SCHEMA, effort: 'high' }),
  async (fix, e) => {
    if (!fix) return { entry: e.id, status: 'fix_failed', open: ['Fix-Agent lieferte nichts'] }
    const [bA, bB, dis, st] = await parallel([
      () => agent(blindPrompt(fix.scenarioDe, 'Wirkmechanismus.'), { label: `blindA:${e.id}`, phase: 'Re-Prüfung', schema: BLIND_SCHEMA }),
      () => agent(blindPrompt(fix.scenarioDe, 'Oberflächen-Cues.'), { label: `blindB:${e.id}`, phase: 'Re-Prüfung', schema: BLIND_SCHEMA }),
      () => agent(`Distraktor-Advokat: Ist bei dieser Übung eine falsche Option verteidigbar/ko-korrekt, oder ein Distraktor bloß Füllmaterial? Zieltechnik ${e.id}. Lies ${SPIN}/content/exercises/${e.file}. pass nur bei Eindeutigkeit ohne Gimmes; objections konkret mit Zitat.`, { label: `distraktor:${e.id}`, phase: 'Re-Prüfung', schema: CHECK_SCHEMA }),
      () => agent(`Stil-Lektorat gegen ${SPIN}/docs/sprachcharta.md. Lies ${SPIN}/content/exercises/${e.file}. Prüfe Floskeln, Register (seriousMode nüchtern), Bauplan (Mechanismus+doppelter Takeaway+Distraktor-Aufklärung, Du-Form), EN-Idiomatik, Gloss-Konsistenz, Band-Passung (${BAND[e.band]}), Evidenz-Ehrlichkeit. pass=false NUR bei substanziellen Verstößen (kein Mikro-Geschmack); objections konkret mit Zitat + Zeilenbezug.`, { label: `stil:${e.id}`, phase: 'Re-Prüfung', schema: CHECK_SCHEMA }),
    ])
    const open = []
    const blindHits = []
    for (const [nm, b] of [['A', bA], ['B', bB]]) {
      if (b) blindHits.push(b.identifiedId)
      if (b && b.identifiedId !== e.id) open.push(`Blind${nm}: '${b.identifiedId}' statt '${e.id}' (2nd: ${b.secondGuess ?? '-'})`)
    }
    if (dis && !dis.pass) open.push(...(dis.objections ?? []).slice(0, 4).map((o) => `Distraktor: ${o}`))
    if (st && !st.pass) open.push(...(st.objections ?? []).slice(0, 5).map((o) => `Stil: ${o}`))
    const blindOk = bA && bB && bA.identifiedId === e.id && bB.identifiedId === e.id
    const distOk = !dis || dis.pass
    const stilOk = !st || st.pass
    return {
      entry: e.id,
      status: (blindOk && distOk && stilOk) ? 'passed' : (blindOk && distOk) ? 'passed_correctness' : 'flagged',
      blindHits, changed: fix.changed, open,
    }
  }
)
const compact = results.filter(Boolean).map((r) => ({ entry: r.entry, status: r.status, blindHits: r.blindHits, changed: r.changed, open: (r.open ?? []).slice(0, 8) }))
const pass = compact.filter((r) => r.status === 'passed').length
const passCorr = compact.filter((r) => r.status === 'passed_correctness').length
log(`band-fix: ${pass} voll bestanden, ${passCorr} korrektheits-ok (Rest-Stil), ${compact.length - pass - passCorr} geflaggt`)
return { passed: pass, passedCorrectness: passCorr, total: ENTRIES.length, summary: compact }
