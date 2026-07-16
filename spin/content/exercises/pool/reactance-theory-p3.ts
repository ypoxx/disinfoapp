import type { Exercise } from '../../types';

// reactance_theory — Phase 3 densification batch.
export const reactanceP3Exercises: Exercise[] = [
  {
    id: 'rt-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welcher Hebel ist der dominante Treiber der Nachfrage in dieser Kampagne?',
      en: 'Which lever is the dominant driver of demand in this campaign?',
    },
    scenario: {
      de: 'Ein exklusiver Business-Club relauncht seine Mitgliedschaft. Die Kampagne läuft so: „Wir haben die Aufnahme gerade wieder geschlossen. Ehrlich gesagt ist dieser Kreis nicht für jeden — wir haben in diesem Jahr Tausenden abgesagt, und die meisten unserer heutigen Mitglieder wären beim ersten Gespräch fast wieder gegangen. Du kannst jederzeit weiterziehen; niemand hält dich auf. Aber wer darauf besteht, hereingelassen zu werden, ist genau die Person, die wir suchen." In den Wochen danach verdreifachen sich die Bewerbungen.',
      en: 'An exclusive business club is relaunching its membership. The campaign reads: “We’ve just closed admissions again. Honestly, this circle isn’t for everyone — we said no to thousands this year, and most of our current members nearly walked away after the first conversation. You can move on any time; no one is stopping you. But whoever insists on being let in is exactly the person we want.” In the following weeks, applications triple.',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominanter Treiber ist die Reaktanz. Die ganze Botschaft ist als Zurückweisung gebaut: „nicht für jeden", „wir haben Tausenden abgesagt", „du kannst jederzeit weiterziehen", „wer darauf besteht, hereingelassen zu werden". Genau dieses Zurückhalten und die betonte Wahlfreiheit provozieren den Wunsch, die verwehrte Option zurückzuerobern — die Bewerbungen verdreifachen sich, nachdem die Tür zugemacht wurde. Der Mechanismus (Brehm): Eine wahrgenommene Bedrohung der eigenen Entscheidungsfreiheit steigert die Attraktivität des Entzogenen. Verknappung ist zwar mitpräsent („Aufnahme geschlossen"), aber nur eine Klausel und nicht der Motor: Verknappung bräuchte eine echte knappe Menge oder Frist als Werttreiber — hier wird kein Vorrat knapp, die Schließung rahmt bloß die Zurückweisung. Sozialer Beweis scheidet aus, weil die „Tausenden" nicht als Vorbild zum Mitmachen dienen, sondern als Abgelehnte die Exklusivität und damit die Reaktanz befeuern — das Gegenteil von Konformitätsdruck. Framing ordnet nur die Betonung, erklärt aber nicht, warum der Entzug Begehren erzeugt. Grenze: Auf echte Selektivität hinzuweisen ist legitim; eine inszenierte Ablehnung allein zur Provokation ist manipulativ.',
      en: 'The dominant driver is reactance. The whole message is built as rejection: “not for everyone”, “we said no to thousands”, “you can move on any time”, “whoever insists on being let in”. Precisely this withholding and the emphasized freedom to leave provoke the urge to reclaim the denied option — applications triple after the door is shut. The mechanism (Brehm): a perceived threat to one’s own freedom of choice raises the attractiveness of what is withdrawn. Scarcity is co-present (“admissions closed”), but it is one clause, not the engine: scarcity would need a genuinely limited quantity or deadline as the value driver — nothing here runs short, the closing merely frames the rejection. Social proof is out because the “thousands” are not a model to imitate but rejects who fuel the exclusivity, and thus the reactance — the opposite of conformity pressure. Framing only arranges emphasis; it does not explain why the withdrawal creates desire. Boundary: pointing to genuine selectivity is legitimate; staging rejection purely to provoke is manipulative.',
    },
    points: 20,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity', 'social_proof'],
  },
  {
    id: 'rt-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik setzt diese Stellenanzeige ein?',
      en: 'Which technique does this job ad use?',
    },
    scenario: {
      de: 'Eine Stellenanzeige eines Start-ups beginnt mit der Zeile: „Bewirb dich bloß NICHT bei uns, wenn du einen ruhigen 9-to-5-Job suchst. Dieser Platz ist nur für Leute, die Verantwortung wollen, bis es wehtut."',
      en: 'A start-up’s job ad opens with the line: “Do NOT apply to us if you’re looking for a quiet 9-to-5. This spot is only for people who want responsibility until it hurts.”',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Reaktanz in Reinform: „Bewirb dich bloß NICHT" verbietet die Handlung — und genau dieses Verbot provoziert den Reiz, sich erst recht zu bewerben und zu beweisen, dass man dazugehört. Der Hebel funktioniert, weil eine eingeschränkte Freiheit den Drang weckt, sie zurückzuerobern. Grenze: Die Rolle ehrlich zu beschreiben und Erwartungen klarzumachen ist völlig legitim; manipulativ wird das „Nicht" nur, wenn es reiner Trick ist, um die Bewerberzahl zu treiben. Verknappung passt nicht, denn es gibt keine begrenzte Platzzahl oder Frist — „nur für Leute, die …" ist eine Eignungshürde, keine Mengenknappheit. Sozialer Beweis würde nennen, wie viele sich schon beworben haben; Framing würde dieselbe Info in Gewinn/Verlust umdeuten. Hier wirkt allein das Verbot als Provokation.',
      en: 'This is reactance in pure form: “Do NOT apply” forbids the action — and that very prohibition provokes the impulse to apply anyway and prove you belong. The lever works because a restricted freedom sparks the drive to reclaim it. Boundary: describing the role honestly and setting expectations is entirely legitimate; the “not” turns manipulative only when it is a pure trick to inflate applicant numbers. Scarcity does not fit, because there is no limited number of spots or deadline — “only for people who …” is an eligibility bar, not quantity scarcity. Social proof would state how many have already applied; framing would recast the same information as gain/loss. Here it is the prohibition alone that acts as provocation.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity'],
  },
  {
    id: 'rt-p3-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter diesem Verpackungstext?',
      en: 'Which technique is behind this packaging text?',
    },
    scenario: {
      de: 'Auf der Verpackung einer neuen extra-scharfen Sauce steht groß: „WARNUNG: nichts für Anfänger. Probier sie am besten gar nicht erst." Nach dem Launch meldet der Hersteller Rekordverkäufe.',
      en: 'The packaging of a new extra-hot sauce says in large letters: “WARNING: not for beginners. Best not to even try it.” After launch, the maker reports record sales.',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Autoritätsargument', en: 'Appeal to authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist der „verbotene Frucht"-Effekt der Reaktanz: „nichts für dich / probier es gar nicht erst" schränkt die Freiheit ein und weckt gerade dadurch den Wunsch, es doch zu versuchen. Der Reiz entsteht aus der impliziten Verweigerung, nicht aus dem Produktnutzen. Grenze: Ein echter Sicherheitshinweis ist legitim und nötig; als bloßer Lockvogel inszeniert (womöglich sogar ein reales Risiko verharmlosend) wird die „Warnung" manipulativ. Emotionaler Appell wäre der Motor, wenn gezielt Angst oder Freude die Kaufentscheidung trüge — die milde „WARNUNG" richtet hier aber nur das Verbot her. Verknappung bräuchte eine begrenzte Menge oder Zeit (fehlt). Ein Autoritätsargument würde eine Experten- oder Prüfinstanz als Beleg anführen. Es wirkt allein die Herausforderung „trau dich nicht".',
      en: 'This is reactance’s “forbidden fruit” effect: “not for you / don’t even try it” restricts freedom and thereby sparks the wish to try it after all. The pull comes from the implied refusal, not from the product’s merits. Boundary: a genuine safety notice is legitimate and necessary; staged purely as a lure (perhaps even downplaying a real risk), the “warning” becomes manipulative. Emotional appeal would be the engine if fear or delight directly carried the purchase — here the mild “WARNING” only sets up the prohibition. Scarcity would need a limited quantity or time (absent). An appeal to authority would cite an expert or testing body as proof. What acts here is the dare alone: “I bet you can’t handle it.”',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'emotional_appeal'],
  },
  {
    id: 'rt-p3-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Werbebotschaft vor allem?',
      en: 'Which technique primarily shapes this ad message?',
    },
    scenario: {
      de: 'Eine Matratzenmarke schaltet Anzeigen mit dem Text: „Kauf unsere Matratze bitte nicht — jedenfalls nicht, wenn du dich an deine Rückenschmerzen am Morgen längst gewöhnt hast und daran ohnehin nichts ändern willst."',
      en: 'A mattress brand runs ads reading: “Please don’t buy our mattress — at least not if you’ve long grown used to your morning back pain and have no intention of changing anything about it anyway.”',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Prägend ist die Reaktanz über umgekehrte Psychologie: „Kauf bitte nicht" ist ein Schein-Verbot, das die Leserin dazu bringt, ihre Wahlfreiheit zurückzuerobern und den Kauf gerade deshalb zu erwägen. Es gibt zwar einen leichten Verlust-Rahmen (Rückenschmerzen), aber der ist nur Beiwerk um die eigentliche Provokation, das ausgesprochene „Nicht". Grenze: Umgekehrte Psychologie auf einem ehrlichen Nutzenversprechen ist ein sanfter, meist harmloser Hebel; problematisch wird sie, wenn das „Kauf nicht" einen echten Nachteil verdeckt oder Druck erzeugt. Framing scheidet aus, weil Framing dieselbe Information nur in Gewinn/Verlust umsortieren würde — hier ist der Treiber das explizite Verbot, nicht die Betonung. Emotionaler Appell wäre dominant, wenn die Angst vor Rückenschmerzen den Kern trüge (sie ist nur Dekor). Verknappung bräuchte eine Mengen- oder Zeitgrenze (fehlt). Reaktanz dominiert.',
      en: 'What shapes this is reactance via reverse psychology: “please don’t buy” is a mock prohibition that pushes the reader to reclaim her freedom of choice and, for that very reason, to consider buying. There is a light loss frame (back pain), but it is mere decoration around the actual provocation, the spoken “not”. Boundary: reverse psychology on an honest value proposition is a soft, mostly harmless lever; it becomes problematic when the “don’t buy” conceals a real drawback or creates pressure. Framing is out, because framing would only resort the same information into gain/loss — here the driver is the explicit prohibition, not the emphasis. Emotional appeal would dominate if fear of back pain carried the core (it is only decor). Scarcity would need a quantity or time limit (absent). Reactance dominates.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'framing'],
  },
  {
    id: 'rt-p3-5',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik nutzt die Marke hier gezielt aus?',
      en: 'Which technique is the brand deliberately exploiting here?',
    },
    scenario: {
      de: 'Eine Getränkemarke darf ihren neuen Spot wegen einer Werberichtlinie nicht im TV zeigen. Statt ihn zurückzuziehen, stellt sie ihn online und titelt: „Das ist der Spot, den man dir nicht zeigen wollte." Der Clip geht viral.',
      en: 'A drinks brand is not allowed to air its new spot on TV because of an advertising rule. Instead of pulling it, the brand posts it online with the headline: “This is the ad they didn’t want you to see.” The clip goes viral.',
    },
    options: [
      { de: 'Reaktanz-Theorie', en: 'Reactance theory' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Sozialer Beweis (Social Proof)', en: 'Social proof' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ausgenutzt wird Reaktanz in der „verbotene Frucht"-Variante: Die Inszenierung als unterdrückter Inhalt („den man dir nicht zeigen wollte") bedroht die Freiheit des Publikums, den Spot zu sehen, und provoziert es, sich diese Freiheit zurückzuholen — ein Bumerang- bzw. Streisand-Effekt. Grenze: Auf eine tatsächliche Einschränkung transparent hinzuweisen ist in Ordnung; das Etikett „verboten" allein zur Reichweitensteigerung zu instrumentalisieren ist manipulativ. Verknappung ist der nächste Fehlgriff, passt aber nicht: Sie bräuchte einen knappen Vorrat oder eine Frist als Werttreiber — hier ist nichts knapp, der Clip liegt frei online; sein Reiz kommt aus dem Verbot, nicht aus Seltenheit. Sozialer Beweis würde auf der Zahl bisheriger Zuschauer aufbauen; ein emotionaler Appell würde ein Gefühl ins Zentrum stellen. Der Freiheits-Entzug ist der Motor.',
      en: 'What is exploited is reactance in its “forbidden fruit” variant: staging the ad as suppressed content (“they didn’t want you to see”) threatens the audience’s freedom to view it and provokes them to reclaim that freedom — a boomerang, or Streisand, effect. Boundary: pointing transparently to a genuine restriction is fine; weaponizing the “forbidden” label purely to inflate reach is manipulative. Scarcity is the closest miss but does not fit: it would need a limited supply or deadline as the value driver — here nothing is scarce, the clip sits freely online; its pull comes from the prohibition, not from rarity. Social proof would build on the number of prior viewers; an emotional appeal would put a feeling at the centre. The removal of freedom is the engine.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity'],
  },
  {
    id: 'rt-p3-6',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Das Ergebnis zeigt, wie eine wahrgenommene ___ das Markierte gerade begehrenswerter macht.',
      en: 'Complete: The result shows how a perceived ___ makes the flagged item all the more desirable.',
    },
    scenario: {
      de: 'Eine interne Wiki-Seite wird mit dem Hinweis „Vertraulich — bitte nicht abteilungsübergreifend teilen" markiert. Genau diese Seite verzeichnet danach die meisten Zugriffe im ganzen Intranet.',
      en: 'An internal wiki page is tagged “Confidential — please do not share across departments.” That very page then records the most views in the entire intranet.',
    },
    options: [
      { de: 'Einschränkung der eigenen Entscheidungsfreiheit', en: 'restriction of one’s own freedom of choice' },
      { de: 'Knappheit des verfügbaren Vorrats', en: 'scarcity of the available supply' },
      { de: 'Bestätigung durch die Mehrheit', en: 'endorsement by the majority' },
      { de: 'Glaubwürdigkeit einer Autorität', en: 'credibility of an authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Es passt nur „Einschränkung der eigenen Entscheidungsfreiheit". Das ist der Kern der Reaktanz (Brehm): Wird der Zugang zu etwas beschränkt oder verboten, steigt seine Attraktivität, weil Menschen die bedrohte Freiheit zurückerobern wollen. Das Etikett „Vertraulich — nicht teilen" schränkt den Zugriff nur nominell ein und weckt genau dadurch die Neugier. „Knappheit des Vorrats" beschreibt einen anderen Mechanismus — begrenzte Menge treibt den Wert —, doch hier ist nichts knapp: Die Seite ist vollständig verfügbar, nur der Zugang ist etikettiert. „Bestätigung durch die Mehrheit" wäre sozialer Beweis (kommt nicht vor), „Glaubwürdigkeit einer Autorität" würde den Wert über einen Experten-Stempel heben, nicht über ein Verbot. Nur die Einschränkung der Wahlfreiheit erklärt, warum ausgerechnet ein Verbot das Begehren steigert. Grenze: Echte Vertraulichkeitshinweise schützen legitim; ein vorgetäuschtes „Vertraulich" als Köder ist manipulativ.',
      en: 'Only “restriction of one’s own freedom of choice” fits. This is the core of reactance (Brehm): when access to something is restricted or forbidden, its attractiveness rises because people want to reclaim the threatened freedom. The tag “confidential — do not share” restricts access only nominally and, by exactly that, arouses curiosity. “Scarcity of the supply” describes a different mechanism — limited quantity drives value — but nothing here is scarce: the page is fully available, only its access is labelled. “Endorsement by the majority” would be social proof (not present); “credibility of an authority” would raise value via an expert’s stamp, not via a prohibition. Only the restriction of freedom of choice explains why a ban of all things increases desire. Boundary: genuine confidentiality tags protect legitimately; a fake “confidential” used as bait is manipulative.',
    },
    points: 10,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'scarcity'],
  },
  {
    id: 'rt-p3-7',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie formulierst du die Ankündigung, damit die Pflicht-Schulung wirkt statt Widerstand zu erzeugen?',
      en: 'How do you word the announcement so the mandatory training lands instead of provoking resistance?',
    },
    scenario: {
      de: 'Alle 2.000 Mitarbeitenden müssen bis Monatsende ein neues Pflicht-Sicherheitstraining absolvieren. Bei der letzten Pflichtmaßnahme führte ein sehr befehlender Ton zu Trotz, Beschwerden und schleppender Teilnahme. Du textest die Ankündigung neu.',
      en: 'All 2,000 employees must complete a new mandatory security training by month-end. The last mandatory measure, delivered in a very commanding tone, produced defiance, complaints and sluggish participation. You are rewriting the announcement.',
    },
    options: [
      {
        de: 'Du erklärst kurz, warum das Training wichtig ist, machst die Frist klar und betonst, dass die Mitarbeitenden selbst entscheiden, wann und wie sie es in ihre Woche einbauen — verbindlich in der Sache, respektvoll im Ton. Das nimmt der Anordnung die Freiheits-Bedrohung, die beim letzten Mal den Trotz auslöste.',
        en: 'You briefly explain why the training matters, make the deadline clear, and stress that employees decide themselves when and how to fit it into their week — firm on substance, respectful in tone. This removes the freedom-threat that triggered defiance last time.',
      },
      {
        de: 'Du verschärfst den Ton: Du stellst unmissverständlich klar, dass Nichtteilnahme disziplinarische Folgen hat und keine Ausreden akzeptiert werden.',
        en: 'You harden the tone: you make it unmistakably clear that non-participation has disciplinary consequences and that no excuses will be accepted.',
      },
      {
        de: 'Du drehst es um und schreibst: „Ehrlich gesagt trauen wir es den meisten von euch ohnehin nicht zu, das rechtzeitig zu schaffen." — als kleine psychologische Provokation.',
        en: 'You flip it and write: “Honestly, we doubt most of you will manage this in time anyway” — as a little psychological provocation.',
      },
      {
        de: 'Du verschweigst, dass es Pflicht ist, und tarnst das Training als freiwilliges „Bonus-Angebot", um Widerstand von vornherein zu vermeiden.',
        en: 'You conceal that it is mandatory and disguise the training as a voluntary “bonus offer” to avoid resistance from the outset.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Am besten ist die autonomie-wahrende Ankündigung (Option 1): Grund nennen, die Pflicht klar benennen, aber den Mitarbeitenden echte Kontrolle über das Wie und Wann lassen. Die Reaktanz-Theorie erklärt genau das Problem des letzten Mals: Ein befehlender, kontrollierender Ton wird als Bedrohung der Freiheit gelesen und erzeugt Trotz. Ein wiederhergestelltes Gefühl von Wahl (eine „aber du entscheidest selbst"-Rahmung) senkt den Widerstand, ohne die Verbindlichkeit aufzugeben. Option 2 wiederholt den Fehler — mehr Befehl, mehr Freiheits-Bedrohung, mehr Reaktanz und Bumerang, dazu ein schlechteres Klima. Option 3 setzt umgekehrte Psychologie gegen die eigenen Leute ein: manipulativ, vertrauensschädigend und riskant, weil die Provokation eher beleidigt als motiviert — für eine interne Pflicht unangemessen. Option 4 ist schlichte Täuschung (die Pflicht verschweigen); sie fliegt auf, sobald die Wahrheit sichtbar wird, und zerstört Glaubwürdigkeit. Die Grenze: Autonomie wahren und Gründe geben ist ethisch — täuschen oder zwingen nicht.',
      en: 'The best choice is the autonomy-preserving announcement (option 1): give a reason, state the requirement clearly, but leave employees genuine control over the how and when. Reactance theory explains exactly last time’s problem: a commanding, controlling tone is read as a threat to freedom and produces defiance. A restored sense of choice (a “but you decide for yourself” framing) lowers resistance without dropping the obligation. Option 2 repeats the mistake — more command, more freedom-threat, more reactance and boomerang, plus a worse climate. Option 3 turns reverse psychology on your own staff: manipulative, trust-eroding and risky, because the provocation is more likely to insult than motivate — unfit for an internal obligation. Option 4 is plain deception (hiding that it is mandatory); it collapses the moment the truth surfaces and destroys credibility. The boundary: preserving autonomy and giving reasons is ethical — deceiving or coercing is not.',
    },
    points: 15,
    primaryTechniqueId: 'reactance_theory',
    relatedTechniques: ['reactance_theory', 'nudging'],
  },
];
