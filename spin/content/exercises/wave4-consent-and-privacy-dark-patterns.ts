// Welle R4: 3 Übungen für consent_and_privacy_dark_patterns (Consent- und Privacy-Dark-Patterns).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4ConsentAndPrivacyDarkPatterns: Exercise[] = [
  {
    id: 'w4-consent_and_privacy_dark_patterns-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster zeigt der Cookie-Dialog?',
      en: 'Which pattern is the cookie dialog using?',
    },
    scenario: {
      de: 'Abnahme des Website-Relaunchs: Im Review-Call führt der Projektleiter der Digitalagentur der Pressesprecherin den neuen Cookie-Dialog vor. „Alle akzeptieren" ist ein farbiger Primärbutton; eine Ablehnen-Schaltfläche gibt es nicht. Wer nicht zustimmen will, muss über den grauen Textlink „Einstellungen verwalten", dort ans Seitenende scrollen und die Auswahl mit „Wirklich auf passende Inhalte verzichten?" ein zweites Mal bestätigen. Vorangekreuzt ist dabei nichts. „Branchenstandard", sagt der Projektleiter, „die Opt-in-Quote dankt es uns."',
      en: 'Sign-off on the website relaunch: in the review call, the digital agency\'s project lead walks the press officer through the new cookie dialog. "Accept all" is a coloured primary button; there is no reject button. Anyone unwilling to consent has to go through the grey text link "Manage settings", scroll to the bottom of that page, and confirm the choice a second time via "Really miss out on content picked for you?". Nothing is pre-ticked. "Industry standard," says the project lead, "our opt-in rate will thank us."',
    },
    options: [
      { de: 'Sludge', en: 'Sludge' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Consent- und Privacy-Dark-Patterns', en: 'Consent and privacy dark patterns' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Consent- und Privacy-Dark-Patterns: Die gesamte Choreografie zielt auf eine Einwilligung in Datenverarbeitung — Zustimmen ist ein Klick, Ablehnen ein Menü mit Scrollweg und schuldbesetzter Rückfrage, und die visuelle Hierarchie macht den Zustimmen-Button zum einzigen echten Angebot. Genau das untergräbt die freiwillige, informierte Entscheidung, die eine Einwilligung sein soll. Legitim einsetzen: Du darfst für Zustimmung werben — aber gib Ja und Nein gleichwertige Buttons und benenne die Zwecke klar; das schützt deine Opt-in-Daten vor rechtlicher Anfechtung und die Marke vor dem Vorwurf der Trickserei, und Aufsichtsbehörden prüfen inzwischen genau diese Symmetrie. Erkennen und kontern: Zähl die Klicks — brauchen Ja und Nein gleich viele und sind beide gleich sichtbar? Wenn nicht, benenne das in der Abnahme als Rechts- und Reputationsrisiko, nicht als Geschmacksfrage, und verlange eine gleichwertige Ablehnen-Option. Sludge wirkt plausibel, weil die Ablehnung mühsam gemacht wird — Sludge ist aber der Oberbegriff für schädliche Prozessreibung jeder Art; hier hat die Reibung ein spezifisches Ziel, die Datenpreisgabe, und kombiniert sich mit visueller Hierarchie und Schuld-Rückfrage zum Einwilligungsmuster. Der Default-/Status-quo-Effekt wirkt plausibel, weil Voreinstellungen Entscheidungen prägen — hier ist aber ausdrücklich nichts vorangekreuzt; der Hebel ist der ungleiche Weg, nicht die Voreinstellung. Subscription Trap / Obstruction beschreibt den künstlich erschwerten Ausstieg aus einem laufenden Vertrag (einfach rein, schwer raus) — hier geht es nicht um eine Kündigung, sondern um die Einwilligungsentscheidung selbst.',
      en: 'Consent and privacy dark patterns: the entire choreography targets consent to data processing — accepting takes one click, refusing takes a menu, a scroll, and a guilt-tinged confirmation, and the visual hierarchy makes the accept button the only real offer. That is exactly what undermines the voluntary, informed decision consent is supposed to be. Used legitimately: you may advocate for a yes — but give yes and no equally weighted buttons and name the purposes clearly; that protects your opt-in data from legal challenge and your brand from accusations of trickery, and regulators now scrutinise precisely this symmetry. To spot and counter it: count the clicks — do yes and no take the same number, and are both equally visible? If not, flag it in sign-off as a legal and reputational risk, not a matter of taste, and insist on an equivalent reject option. Sludge looks plausible because refusal is made laborious — but sludge is the umbrella term for harmful process friction of any kind; here the friction has a specific target, data disclosure, and combines with visual hierarchy and a guilt prompt into a consent pattern. The default / status quo effect looks plausible because pre-set choices shape decisions — but nothing here is pre-ticked; the lever is the unequal path, not a default. Subscription trap / obstruction describes an artificially obstructed exit from an ongoing contract (easy in, hard out) — this is not about cancelling anything, but about the consent decision itself.',
    },
    points: 10,
    primaryTechniqueId: 'consent_and_privacy_dark_patterns',
    relatedTechniques: ['consent_and_privacy_dark_patterns', 'sludge', 'default_status_quo', 'subscription_trap_obstruction'],
  },
  {
    id: 'w4-consent_and_privacy_dark_patterns-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Unternehmenskommunikation. Vor dem Launch der Kampagnen-Landingpage schreibt dir der Performance-Marketing-Manager in Teams: Die Einwilligung „Ich möchte Informationen von uns und Partnern erhalten" soll vorangekreuzt und in einer Checkbox mit dem Whitepaper-Download gebündelt werden — „sonst bricht uns das Lead-Volumen weg, das macht die ganze Branche so".',
      en: 'You head corporate communications. Ahead of the campaign landing page launch, the performance marketing manager messages you on Teams: the consent line "I would like to receive information from us and partners" should be pre-ticked and bundled into a single checkbox with the whitepaper download — "otherwise our lead volume collapses, the whole industry does it this way".',
    },
    options: [
      {
        de: 'Ich lasse Download und Einwilligung trennen: Das Whitepaper gibt es gegen die E-Mail-Adresse, die Marketing-Einwilligung ist eine eigene, nicht vorangekreuzte Checkbox mit benannten Zwecken und benannten Partnern. Weniger, aber belastbare Leads — und ein Formular, das einer Prüfung standhält.',
        en: 'I have download and consent separated: the whitepaper is available in exchange for the email address, and the marketing consent is its own unticked checkbox with named purposes and named partners. Fewer leads, but solid ones — and a form that holds up under scrutiny.',
      },
      {
        de: 'Ich übernehme den Vorschlag, ergänze aber direkt an der Checkbox einen Link zur Datenschutzerklärung — dort steht transparent, was mit den Daten passiert; wer es genau wissen will, kann jederzeit nachlesen.',
        en: 'I adopt the proposal but add a link to the privacy policy right next to the checkbox — it transparently explains what happens with the data; anyone who wants the details can read up at any time.',
      },
      {
        de: 'Ich lasse die Checkbox vorangekreuzt, nehme aber die Partner heraus — solange nur wir selbst die Adressen nutzen, ist eine Voreinstellung unkritisch.',
        en: 'I keep the checkbox pre-ticked but remove the partners — as long as only we ourselves use the addresses, a pre-set tick is harmless.',
      },
      {
        de: 'Ich streiche jede Einwilligungsabfrage aus dem Formular — je weniger wir abfragen, desto kleiner das Risiko, und Kontaktdaten von Interessenten dürfen wir ohnehin verwenden.',
        en: 'I remove every consent request from the form — the less we ask, the smaller the risk, and we are entitled to use prospects\' contact details anyway.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag kombiniert zwei klassische Consent-Dark-Patterns: die Voreinstellung (das Häkchen ist schon gesetzt) und die Bündelung (Download und Werbeeinwilligung in einer Checkbox) — beides erzeugt Zustimmungen, die nicht auf einer bewussten Entscheidung beruhen, und genau deshalb sind sie als Einwilligung rechtlich wertlos und als Leads weich. Die beste Option trennt Leistung und Einwilligung und macht die Zustimmung zu einer echten, aktiven Wahl mit benannten Zwecken und Empfängern: Das kostet Volumen, liefert aber Adressen, die du verwenden darfst und die auf tatsächlichem Interesse beruhen. Legitim einsetzen: Für Zustimmung werben ist erlaubt — formuliere den Nutzen der Einwilligung attraktiv („monatliches Branchenbriefing" statt „Informationen von Partnern"), statt die Entscheidung zu verstecken. Erkennen und kontern: Prüf bei jedem Formular — auch dem eigenen — ob die Einwilligung eine aktive Handlung ist und ob sie sich ablehnen lässt, ohne die Leistung zu verlieren; wenn nicht, ist es ein Dark Pattern, egal wie verbreitet es in der Branche ist. Der Datenschutz-Link wirkt plausibel, weil Transparenz das richtige Prinzip ist — er heilt aber weder Voreinstellung noch Bündelung: Wer die verlinkte Erklärung nie öffnet, hat trotzdem „zugestimmt", ohne zu entscheiden. Das Herausnehmen der Partner wirkt wie ein Kompromiss, lässt aber das Kernproblem stehen — auch für den eigenen Newsletter ersetzt ein vorangekreuztes Häkchen keine aktive Einwilligung. Die Komplettstreichung überkorrigiert: Sie verschenkt das legitime Opt-in-Instrument und ersetzt es durch die falsche Annahme, Interessentendaten seien ohne Einwilligung frei nutzbar — damit tauschst du ein Dark Pattern gegen ein Compliance-Problem.',
      en: 'The proposal combines two classic consent dark patterns: the pre-set default (the box is already ticked) and bundling (download and marketing consent in one checkbox) — both produce agreements that do not rest on a conscious decision, which is exactly why they are legally worthless as consent and soft as leads. The best option separates deliverable and consent and turns agreement into a real, active choice with named purposes and recipients: it costs volume but yields addresses you may actually use and that reflect genuine interest. Used legitimately: advocating for a yes is fine — make the benefit of consenting attractive ("a monthly industry briefing" instead of "information from partners") rather than hiding the decision. To spot and counter it: for every form — including your own — check whether consent is an active action and whether it can be declined without losing the deliverable; if not, it is a dark pattern, however common in the industry. The privacy-policy link looks plausible because transparency is the right principle — but it cures neither the default nor the bundling: someone who never opens the linked policy has still "consented" without deciding. Removing the partners feels like a compromise but leaves the core problem intact — even for your own newsletter, a pre-ticked box is no substitute for active consent. Scrapping consent altogether overcorrects: it throws away the legitimate opt-in instrument and replaces it with the false assumption that prospect data is free to use without consent — trading a dark pattern for a compliance problem.',
    },
    points: 10,
    primaryTechniqueId: 'consent_and_privacy_dark_patterns',
    relatedTechniques: ['consent_and_privacy_dark_patterns', 'default_status_quo'],
  },
  {
    id: 'w4-consent_and_privacy_dark_patterns-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt das Muster, das die Plattform einsetzt?',
      en: 'What is the pattern the platform is using called?',
    },
    scenario: {
      de: 'Nachbereitung der Webinar-Reihe: Der PR-Referent hat sich beim Webinar-Tool zunächst nur mit seiner E-Mail-Adresse registriert. Bei jedem weiteren Login blendet die Plattform einen Dialog ein — „Ihr Profil ist zu 60 % vollständig" — und fragt jeweils ein weiteres Feld ab: Telefonnummer, Position, Unternehmensgröße, Budgetverantwortung. Ein Fortschritt, der nichts freischaltet — kein Bonus, keine Funktion, keine Belohnung, nur die nächste Abfrage. Wofür die Angaben genutzt werden, nennt kein Dialog; der „Überspringen"-Link wird von Mal zu Mal unauffälliger. Zwei Wochen später ruft ein Vertriebler des Plattform-Sponsors an — er kennt Position und Budgetverantwortung des Referenten.',
      en: 'Follow-up on the webinar series: the PR officer initially registered for the webinar tool with nothing but his email address. On every subsequent login the platform shows a dialog — "Your profile is 60% complete" — and asks for one more field each time: phone number, job title, company size, budget responsibility. A progress bar that unlocks nothing — no bonus, no feature, no reward, just the next prompt. No dialog ever states what the details will be used for; the "Skip" link gets less conspicuous each round. Two weeks later, a sales rep from the platform\'s sponsor calls — and already knows the officer\'s job title and budget responsibility.',
    },
    options: [
      { de: 'Gamification / Variable Belohnungen (Punkte, Streaks, Belohnungen)', en: 'Gamification / variable rewards (points, streaks, rewards)' },
      { de: 'Consent- und Privacy-Dark-Patterns', en: 'Consent and privacy dark patterns' },
      { de: 'Sludge', en: 'Sludge' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Consent- und Privacy-Dark-Patterns in der Spielart der progressiven Profilbildung: Die Datenpreisgabe wird in kleine Einzelschritte zerlegt, von denen keiner groß genug wirkt, um innezuhalten — kein Dialog nennt einen Zweck, und am Ende liegt ein Vertriebsprofil beim Sponsor, in dessen Weitergabe der Referent nie informiert eingewilligt hat; der schrumpfende Überspringen-Link drückt zusätzlich in Richtung Preisgabe. Legitim einsetzen: Schrittweise Datenerhebung ist als UX-Prinzip vertretbar — wenn jedes Feld freiwillig und ablehnbar bleibt, Zweck und Empfänger beim Abfragen genannt werden und das Überspringen dauerhaft gleichwertig sichtbar ist; so bekommst du Profildaten, die einer Prüfung standhalten. Erkennen und kontern: Frag dich bei jeder Einzelabfrage, welches Gesamtbild entsteht, wer es bekommt und ob du dem je zugestimmt hast — und prüfe bei Tools für dein eigenes Team, welche Felder wirklich Pflicht sind und was mit den Daten geschieht. Gamification / Variable Belohnungen wirkt plausibel, weil die Fortschrittsanzeige an eine Spielmechanik erinnert — die definierenden Merkmale fehlen hier aber vollständig: keine Punkte, keine Streaks, keine variabel getaktete Belohnung, kein Wiederkehr-Ziel. Die „60 %"-Anzeige belohnt nichts und schaltet nichts frei, sie fordert nur das nächste Feld ein; sie ist ein Completion-Nudge im Dienst der undeklarierten Datenabschöpfung, nicht Gamification. Sludge wirkt plausibel, weil der schrumpfende Überspringen-Link Reibung gegen das Ablehnen erzeugt — Sludge bezeichnet aber schädliche Prozessreibung im Allgemeinen; die Pointe hier ist die zerstückelte, nie erklärte Einwilligung in ein wachsendes Datenprofil. Subscription Trap / Obstruction wirkt plausibel, weil auch dort der Ausweg versteckt wird — das Muster beschreibt aber den künstlich erschwerten Ausstieg aus einem Abo oder Vertrag; hier gibt es weder Abo noch Kündigung, sondern eine Einwilligungsentscheidung, die dem Nutzer gar nicht erst gestellt wird.',
      en: 'Consent and privacy dark patterns in the progressive-profiling variant: data disclosure is broken into small single steps, none of which feels significant enough to pause over — no dialog ever names a purpose, and in the end a sales profile sits with the sponsor that the officer never gave informed consent to share; the shrinking skip link adds extra push towards disclosure. Used legitimately: staged data collection is defensible as a UX principle — if every field stays voluntary and declinable, purpose and recipients are named at the moment of asking, and skipping remains permanently and equally visible; that gets you profile data that holds up under scrutiny. To spot and counter it: with every single-field prompt, ask what overall picture is being assembled, who receives it, and whether you ever agreed to that — and for tools your own team rolls out, check which fields are genuinely required and where the data goes. Gamification / variable rewards looks plausible because the completeness meter resembles a game mechanic — but its defining features are entirely absent here: no points, no streaks, no variably timed reward, no return-visit goal. The "60%" display rewards nothing and unlocks nothing, it merely demands the next field; it is a completion nudge in service of undeclared data extraction, not gamification. Sludge looks plausible because the shrinking skip link creates friction against declining — but sludge denotes harmful process friction in general; the point here is the fragmented, never-explained consent to a growing data profile. Subscription trap / obstruction looks plausible because it also hides the way out — but that pattern describes an artificially obstructed exit from a subscription or contract; here there is no subscription and no cancellation, just a consent decision the user is never actually given.',
    },
    points: 10,
    primaryTechniqueId: 'consent_and_privacy_dark_patterns',
    relatedTechniques: ['consent_and_privacy_dark_patterns', 'gamification_variable_reward', 'sludge', 'subscription_trap_obstruction'],
  },
];
