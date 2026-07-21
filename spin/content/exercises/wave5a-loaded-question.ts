// Welle wave5a: 3 Übungen für loaded_question.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen; Fokus auf Muster & Kontern.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aLoadedQuestion: Exercise[] = [
  {
    id: 'wave5a-loaded_question-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Moderatorin hier ein?',
      en: 'Which technique is the interviewer using here?',
    },
    scenario: {
      de: 'Live-Interview nach einem Datenleck: Die Moderatorin fragt den Vorstandsvorsitzenden eines Zahlungsdienstleisters: „Wie lange wollen Sie die betroffenen Kunden eigentlich noch im Unklaren lassen?" Dass Kunden bewusst im Unklaren gelassen werden, hat niemand belegt — die Frage setzt es bereits voraus.',
      en: 'Live interview after a data breach: the host asks the CEO of a payment provider, "How much longer do you actually intend to keep the affected customers in the dark?" That customers are being deliberately kept in the dark is not established anywhere — the question already presupposes it.',
    },
    options: [
      { de: 'Fangfrage (unterstellende Frage)', en: 'Loaded question (complex question)' },
      { de: 'Reizsprache (Loaded Language)', en: 'Loaded language' },
      { de: 'Zirkelschluss (Begging the Question)', en: 'Begging the question' },
      { de: 'Strohmann (Strohmann-Argument)', en: 'Straw man' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fangfrage: Die eigentlich strittige Behauptung — es würden Kunden bewusst im Unklaren gelassen — steckt nicht in einer Aussage, sondern ist als Voraussetzung fest in die Frage eingebaut. Genau darin liegt der Mechanismus: Wer auf das „Wie lange noch" eingeht, hat das „dass überhaupt" schon zugestanden; jedes Ja und jedes Nein bestätigt die Unterstellung. Legitim einsetzen lässt sich der Kern, wenn die vorausgesetzte Tatsache tatsächlich unstrittig ist („Wann rollen Sie das Update aus?" an ein bereits angekündigtes Update). Erkennen und kontern: Zerlege die Frage in ihre versteckte Vorfrage und beantworte zuerst diese („Ihre Frage unterstellt, wir hielten Kunden im Unklaren — das trifft nicht zu. Tatsächlich …"). Reizsprache liegt nahe, weil „im Unklaren lassen" wertend klingt — dort wäre aber die Wortwahl der Hebel; hier ist es die Frageform, die eine unbewiesene Annahme einschmuggelt. Ein Zirkelschluss würde die Behauptung mit sich selbst begründen; ein Strohmann würde eine verzerrte Version der Gegenposition aufbauen und diese angreifen — hier wird aber keine vorgetragene Position verdreht, sondern nur eine unbewiesene Voraussetzung in die Frageform eingebaut.',
      en: 'Loaded question: the genuinely contested claim — that customers are being deliberately kept in the dark — is not stated but built into the question as a presupposition. That is exactly the mechanism: engaging with the "how much longer" already concedes the "whether at all"; every yes and every no confirms the insinuation. The legitimate core works when the presupposed fact really is uncontested ("When are you rolling out the update?" about an already announced update). To spot and counter it, break the question into its hidden prior question and answer that first ("Your question assumes we are keeping customers in the dark — that is not the case. In fact …"). Loaded language seems close because "keep in the dark" sounds judgemental — but there the wording would be the lever; here it is the question form smuggling in an unproven assumption. Begging the question would justify the claim with itself; a straw man would build a distorted version of the other side\'s position and attack that — but here no stated position is twisted, only an unproven assumption is built into the question form.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_question',
    relatedTechniques: ['loaded_question', 'straw_man'],
  },
  {
    id: 'wave5a-loaded_question-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du vertrittst als Kommunikationschefin deinen Vorstand in einem Radiointerview. Die Moderatorin fragt: „Warum informieren Sie Ihre Aktionäre eigentlich erst, wenn der Kurs schon gefallen ist?" Dass zu spät informiert wird, ist nie belegt — die Frage setzt es als Tatsache voraus.',
      en: 'You represent your board as head of communications in a radio interview. The host asks: "Why do you actually inform your shareholders only once the share price has already fallen?" That you inform too late is never established — the question presupposes it as fact.',
    },
    options: [
      {
        de: 'Ich weise die eingebaute Unterstellung zurück, bevor ich inhaltlich antworte: „Ihre Frage setzt voraus, dass wir zu spät informieren — das ist nicht der Fall. Kursrelevante Fakten veröffentlichen wir unverzüglich, und zwar so:" — dann nenne ich die Chronologie.',
        en: 'I reject the built-in insinuation before answering on substance: "Your question assumes we inform too late — that is not the case. We publish price-relevant facts without delay, as follows:" — then I give the timeline.',
      },
      {
        de: 'Ich antworte direkt auf das „Warum" und erkläre, warum die späte Information in diesem Fall vertretbar war.',
        en: 'I answer the "why" directly and explain why the late disclosure was justifiable in this case.',
      },
      {
        de: 'Ich kontere mit einer Gegenfrage im selben Ton: „Und seit wann recherchieren Sie eigentlich so einseitig gegen uns?"',
        en: 'I counter with a question in the same register: "And since when have you actually been reporting so one-sidedly against us?"',
      },
      {
        de: 'Ich verweigere jede Antwort mit Verweis auf laufende Prüfungen und gehe zum nächsten Thema über.',
        en: 'I decline to answer at all, citing ongoing reviews, and move on to the next topic.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Frage ist eine Fangfrage: Die strittige Behauptung („Sie informieren zu spät") ist als Voraussetzung eingebaut, sodass jede Sachantwort sie mitbestätigt. Der Mechanismus wirkt nur, solange die Vorfrage unbeantwortet bleibt. Die beste Option trennt genau diese beiden Ebenen: erst die Unterstellung benennen und zurückweisen, dann die belegbare Chronologie liefern — so bestätigst du nichts, was nicht stimmt. Zur Einordnung: Eine vorausgesetzte Annahme ist nicht per se unlauter — bei unstrittiger Faktenlage ist sie ein normaler, effizienter Gesprächszug; zum Fehlschluss wird sie erst, wenn die Voraussetzung selbst strittig ist. „Direkt auf das Warum antworten" wirkt souverän und kooperativ, übernimmt aber genau die Prämisse und liefert die Schlagzeile („Sprecherin rechtfertigt späte Information"). Die Gegenfrage kontert eine Fangfrage mit der nächsten (plus Ad-hominem-Beigeschmack) und eskaliert, statt zu klären. Die Antwort zu verweigern lässt die Unterstellung unwidersprochen im Raum stehen — im Zweifel liest das Publikum Schweigen als Eingeständnis.',
      en: 'The question is a loaded one: the contested claim ("you inform too late") is built in as a presupposition, so any answer on substance confirms it. The mechanism only works while the prior question stays unanswered. The best option separates exactly these two levels: first name and reject the insinuation, then supply the verifiable timeline — that way you confirm nothing that is not true. For context: a presupposed assumption is not inherently illegitimate — where the facts are uncontested it is a normal, efficient conversational move; it becomes a fallacy only once the premise itself is disputed. "Answering the why directly" looks composed and cooperative but adopts the premise and hands over the headline ("Spokesperson justifies late disclosure"). The counter-question answers one loaded question with another (plus an ad hominem flavour) and escalates instead of clarifying. Declining to answer leaves the insinuation standing unchallenged — in doubt, the audience reads silence as an admission.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_question',
    relatedTechniques: ['loaded_question'],
  },
  {
    id: 'wave5a-loaded_question-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Frage ___.',
      en: 'Complete the sentence: With this question, ___.',
    },
    scenario: {
      de: 'Vergabegespräch: Der Einkäufer eines Großkunden fragt den Vertriebsleiter eines Software-Anbieters: „Wie erklären Sie eigentlich die vielen versteckten Zusatzkosten in Ihren Verträgen?" Ob es versteckte Zusatzkosten überhaupt gibt, ist strittig und an keiner Stelle belegt.',
      en: 'Procurement meeting: the buyer at a major client asks the head of sales of a software vendor: "How do you actually explain all the hidden extra costs in your contracts?" Whether there are hidden extra costs at all is disputed and nowhere established.',
    },
    options: [
      {
        de: 'behandelt der Einkäufer eine strittige, unbelegte Annahme (versteckte Zusatzkosten) als bereits feststehend — jede Antwort auf das „Wie" bestätigt sie mit (Fangfrage)',
        en: 'the buyer treats a disputed, unproven assumption (hidden extra costs) as already settled — any answer to the "how" confirms it (loaded question)',
      },
      {
        de: 'präsentiert der Einkäufer aus einer größeren Datenlage nur die für den Anbieter ungünstigen Belege (Cherry-Picking)',
        en: 'the buyer presents only the evidence unfavourable to the vendor from a larger body of data (cherry-picking)',
      },
      {
        de: 'rahmt der Einkäufer die ganze Verhandlung über einen ungünstigen Bezugsrahmen, in dem jedes Detail von vornherein verdächtig wirkt (Framing)',
        en: 'the buyer frames the whole negotiation through an unfavourable reference frame in which every detail looks suspect from the outset (framing)',
      },
      {
        de: 'trifft der Einkäufer eine wörtlich wahre, aber unvollständige Aussage, die einen falschen Gesamteindruck erzeugt (Paltering)',
        en: 'the buyer makes a literally true but incomplete statement that creates a false overall impression (paltering)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fangfrage: Das „Wie erklären Sie …" lenkt auf eine Rechtfertigung und überspringt die eigentliche Streitfrage, ob es die versteckten Kosten überhaupt gibt. Genau das ist der Hebel — die unbewiesene Annahme reist im Frageformat mit, und wer erklärt, hat sie zugestanden. Legitim wäre dieselbe Frage, sobald die Kostenposition unstrittig auf dem Tisch liegt; hier ist sie es nicht. Erkennen und kontern: adressiere zuerst die Vorfrage („Bevor ich das erkläre — welche konkrete Position meinen Sie? In unseren Verträgen sind alle Kosten ausgewiesen."). Cherry-Picking liegt nahe, weil es nach selektiver Kostenbetrachtung klingt — es bräuchte aber eine Auswahl aus vorhandenen Belegen, hier wird die Behauptung überhaupt erst unterstellt. Framing würde einen ganzen Bezugsrahmen um die Verhandlung legen und einen Aspekt betonen; hier wird kein solcher Rahmen gesetzt, sondern eine strittige Einzeltatsache als gegeben unterstellt. Paltering bräuchte eine wörtlich wahre Einzelaussage — die fehlt ebenso, die Annahme steckt schlicht in der Frage.',
      en: 'Loaded question: the "how do you explain …" steers toward a justification and skips the real point of contention — whether the hidden costs exist at all. That is precisely the lever — the unproven assumption travels along in the question form, and whoever explains has conceded it. The same question would be legitimate once the cost item is uncontestedly on the table; here it is not. To spot and counter it, address the prior question first ("Before I explain that — which specific item do you mean? In our contracts all costs are itemised."). Cherry-picking seems close because it sounds like selective costing — but it would need a selection from existing evidence, whereas here the claim is merely presupposed. Framing would lay a whole reference frame over the negotiation and foreground one aspect; here no such frame is set, a disputed single fact is treated as given. Paltering would need a literally true single statement — that too is absent; the assumption simply sits inside the question.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_question',
    relatedTechniques: ['loaded_question', 'cherry_picking', 'framing', 'paltering_half_truth'],
  },
];
