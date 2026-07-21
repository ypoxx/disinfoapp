import type { Exercise } from '../types';

/**
 * Quick-Checks — schnelle Einzeltechnik-Erkennung (Session-Opener).
 * R4-Sanierung (Content-Offensive §3): vom Binärurteil „Manipulation ja/nein"
 * auf benannte Technik-Optionen reframet; qc-2/qc-5 wurden in R1 retired
 * (kein lehrbares Technik-Urteil).
 */
export const quickChecks: Exercise[] = [
  {
    id: 'qc-1',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik treibt diesen Post primär an?',
      en: 'Which technique primarily drives this post?',
    },
    scenario: {
      de: '🔴 EILMELDUNG: Studie beweist - 5G-Strahlung verursacht Krebs! Die Regierung verschweigt die Wahrheit! TEILEN bevor es gelöscht wird!!!',
      en: '🔴 BREAKING: Study proves 5G radiation causes cancer! The government is hiding the truth! SHARE before it gets deleted!!!',
    },
    options: [
      { de: 'Künstliche Dringlichkeit (Verknappung)', en: 'Artificial urgency (scarcity)' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Reaktanz-Trigger', en: 'Reactance trigger' },
      { de: 'Social Proof', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das handlungsauslösende Element ist die künstliche Frist: „TEILEN bevor es gelöscht wird" erzeugt Zeitdruck, der die Prüfung der Behauptung überspringt — geteilt wird zuerst, gedacht später. Legitim ist Dringlichkeit nur bei echten, nachprüfbaren Fristen. Erkennen und kontern: Frag dich, wer die Frist setzt und ob sie real ist — eine echte Studie verschwindet nicht um Mitternacht. Der emotionale Appell ist klar vorhanden (Krebs-Angst), erklärt aber nicht den Teilen-Reflex; der Reaktanz-Trigger („Regierung verschweigt") liefert das Motiv, nicht den Zeitdruck; Social Proof fehlt — niemand behauptet hier, dass viele schon geteilt hätten.',
      en: 'The action trigger is the artificial deadline: "SHARE before it gets deleted" creates time pressure that skips verification — share first, think later. Urgency is legitimate only with real, checkable deadlines. To recognise and counter it: ask yourself who sets the deadline and whether it is real — a genuine study does not vanish at midnight. The emotional appeal is clearly present (cancer fear) but does not explain the share reflex; the reactance trigger ("government is hiding it") supplies the motive, not the time pressure; social proof is absent — nobody claims that many have already shared.',
    },
    points: 5,
    primaryTechniqueId: 'scarcity',
    relatedTechniques: ['scarcity', 'emotional_appeal', 'reactance_theory'],
  },
  {
    id: 'qc-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik stützt hier die Überzeugungskraft?',
      en: 'Which technique underpins the persuasive force here?',
    },
    scenario: {
      de: 'Neue Analyse zeigt: Das Unternehmen XY hat seine CO2-Bilanz um 40% geschönt. Drei unabhängige Gutachter bestätigen die Diskrepanz. Vollständiger Bericht mit Methodik: envirotrust.org/report-2024',
      en: 'New analysis shows: Company XY inflated its carbon footprint figures by 40%. Three independent auditors confirm the discrepancy. Full report with methodology: envirotrust.org/report-2024',
    },
    options: [
      { de: 'Autorität (unabhängige Gutachter)', en: 'Authority (independent auditors)' },
      { de: 'Ankereffekt (die 40%-Zahl)', en: 'Anchoring (the 40% figure)' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Glaubwürdigkeit ruht auf Autoritätssignalen: „drei unabhängige Gutachter" und der Methodik-Link delegieren das Urteil an Experten. Genau so arbeitet auch seriöse Kommunikation — legitim, solange die Autorität real und nachprüfbar ist. Erkennen und kontern: Prüf die Quelle lateral, bevor du die Autorität akzeptierst — wer steht hinter envirotrust.org, wer sind die Gutachter? Der Ankereffekt wirkt plausibel, weil die präzise 40%-Zahl hängen bleibt — sie verankert aber eine Größenordnung, sie beglaubigt nicht; Social Proof bräuchte die Masse („tausende teilen das"), nicht Experten; Framing beschreibt die Wortwahl („geschönt"), trägt aber nicht die Beweisführung.',
      en: 'The credibility rests on authority signals: "three independent auditors" and the methodology link delegate judgement to experts. Serious communication works exactly the same way — legitimate as long as the authority is real and checkable. To recognise and counter it: check the source laterally before accepting the authority — who is behind envirotrust.org, who are the auditors? Anchoring looks plausible because the precise 40% figure sticks — but it anchors a magnitude, it does not certify; social proof would need the crowd ("thousands are sharing this"), not experts; framing describes the word choice ("inflated") but does not carry the proof.',
    },
    points: 5,
    primaryTechniqueId: 'authority',
    relatedTechniques: ['authority', 'anchoring', 'framing'],
  },
  {
    id: 'qc-4',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik soll hier Glaubwürdigkeit erzeugen?',
      en: 'Which technique is meant to create credibility here?',
    },
    scenario: {
      de: 'Ein Insider bei der Firma ABC packt aus: "Die neuen Produkte sind gesundheitsschädlich!" Über 50.000 haben schon geteilt. Die Mainstream-Medien berichten nicht darüber - fragt euch warum!',
      en: 'An insider at company ABC reveals: "The new products are harmful to health!" Over 50,000 have already shared this. The mainstream media aren\'t covering it — ask yourselves why!',
    },
    options: [
      { de: 'Social Proof (50.000 Teilungen)', en: 'Social proof (50,000 shares)' },
      { de: 'Autorität (der „Insider")', en: 'Authority (the "insider")' },
      { de: 'Reaktanz-Trigger (Anti-Medien-Frage)', en: 'Reactance trigger (anti-media question)' },
      { de: 'Wiederholung', en: 'Repetition' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Zahl trägt die Behauptung: „Über 50.000 haben geteilt" ersetzt den fehlenden Beleg durch die Masse — wenn so viele teilen, wird schon etwas dran sein. Legitim ist Social Proof, wenn die Popularität echt und relevant ist (z.B. verifizierte Bewertungen). Erkennen und kontern: Trenn Verbreitung von Wahrheit — wie oft etwas geteilt wurde, sagt nichts über den Inhalt. Die Autorität wirkt plausibel, weil ein „Insider" Expertise suggeriert — anonym und unverifizierbar ist er aber gerade keine prüfbare Autorität; der Reaktanz-Trigger („fragt euch warum") liefert das Verschwörungsmotiv, nicht die Glaubwürdigkeit; Wiederholung bräuchte mehrfaches Auftreten derselben Botschaft über Zeit.',
      en: 'The number carries the claim: "over 50,000 have shared this" substitutes the crowd for the missing evidence — if that many share it, there must be something to it. Social proof is legitimate when the popularity is real and relevant (e.g. verified reviews). To recognise and counter it: separate reach from truth — how often something is shared says nothing about its content. Authority looks plausible because an "insider" suggests expertise — but anonymous and unverifiable, he is precisely not a checkable authority; the reactance trigger ("ask yourselves why") supplies the conspiracy motive, not the credibility; repetition would require the same message appearing repeatedly over time.',
    },
    points: 5,
    primaryTechniqueId: 'social_proof',
    relatedTechniques: ['social_proof', 'authority', 'reactance_theory'],
  },
  {
    id: 'qc-6',
    type: 'quick-check',
    difficulty: 'advanced',
    question: {
      de: 'Welcher Hebel soll hier die Handlung auslösen?',
      en: 'Which lever is meant to trigger the action here?',
    },
    scenario: {
      de: 'BREAKING: CEO von TechCorp in geheimes Treffen mit Lobbyisten verwickelt! Exklusive Fotos beweisen alles. Die Aktie wird morgen einbrechen - noch schnell verkaufen! #TechCorpSkandal',
      en: 'BREAKING: TechCorp CEO caught in secret meeting with lobbyists! Exclusive photos prove everything. The stock will crash tomorrow — sell now while you can! #TechCorpScandal',
    },
    options: [
      { de: 'Verlustaversion (drohender Kurssturz)', en: 'Loss aversion (impending crash)' },
      { de: 'Verknappung (die Frist „morgen")', en: 'Scarcity (the "tomorrow" deadline)' },
      { de: 'Autorität („Fotos beweisen alles")', en: 'Authority ("photos prove everything")' },
      { de: 'Emotionaler Appell (Skandal-Ton)', en: 'Emotional appeal (scandal tone)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Verkaufsimpuls kommt aus der Verlustaversion: Der angekündigte Einbruch macht einen konkreten, unmittelbar drohenden Verlust am eigenen Depot spürbar — und drohende Verluste wiegen schwerer als entgangene Gewinne. Das Muster ist klassische Marktmanipulation; legitim ist dagegen das ehrliche Benennen realer Risiken samt Gegenrechnung. Erkennen und kontern: Wenn dich jemand unter Zeitdruck zum Verkaufen drängt, frag, wem der Kurssturz nützt — und prüf die „Beweise", bevor du handelst. Die Verknappung ist der nächstliegende Distraktor, weil „morgen" eine Frist setzt — sie terminiert aber nur den Verlust, der eigentliche Hebel ist das Verlustszenario selbst; die „exklusiven Fotos" behaupten Beweis-Autorität, tragen aber nicht den Handlungsdruck; der Skandal-Ton hält alles zusammen, löst aber ohne das Verlustszenario keinen Verkauf aus.',
      en: 'The sell impulse comes from loss aversion: the announced crash makes a concrete, imminent loss to your own portfolio tangible — and looming losses weigh heavier than missed gains. The pattern is classic market manipulation; the legitimate counterpart is honestly naming real risks together with a counter-calculation. To recognise and counter it: when someone pressures you to sell under time pressure, ask who benefits from the crash — and check the "proof" before acting. Scarcity is the closest distractor because "tomorrow" sets a deadline — but it merely schedules the loss; the actual lever is the loss scenario itself. The "exclusive photos" claim evidentiary authority but do not carry the pressure to act; the scandal tone binds it all together but triggers no sale without the loss scenario.',
    },
    points: 5,
    primaryTechniqueId: 'loss_aversion',
    relatedTechniques: ['loss_aversion', 'scarcity', 'emotional_appeal'],
  },
];
