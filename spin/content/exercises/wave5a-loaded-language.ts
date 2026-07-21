// Welle 5a: 3 Übungen für loaded_language (Loaded Language / Euphemismus).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aLoadedLanguage: Exercise[] = [
  {
    id: 'wave5a-loaded_language-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt diese Sprachregelung?',
      en: 'Which technique shapes this wording guideline?',
    },
    scenario: {
      de: 'Interne Sprachregelung eines Energieversorgers: Die Kommunikationsleitung gibt dem Callcenter vor, die anstehende Grundpreis-Erhöhung im Kundengespräch durchgehend „Tarif-Modernisierung" zu nennen und einen Anbieterwechsel des Kunden als „Blindflug" abzutun — zwei verschiedene Vorgänge mit je einem gefärbten Etikett: das eigene Handeln aufgewertet (Euphemismus), die Alternative des Kunden abgewertet (Dysphemismus).',
      en: 'Internal wording guideline at an energy utility: the communications lead instructs the call centre to refer to the upcoming base-rate increase consistently as "tariff modernisation" and to dismiss a customer switching provider as "a blind gamble" — two separate acts, each given a single coloured label: the utility\'s own move talked up (euphemism), the customer\'s alternative talked down (dysphemism).',
    },
    options: [
      { de: 'Loaded Language / Euphemismus', en: 'Loaded language / euphemism' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
      { de: 'Equivocation (Doppeldeutigkeit)', en: 'Equivocation' },
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Kennzeichen von Loaded Language: Für denselben Vorgang stehen zwei Wörter bereit, und schon die Wahl entscheidet über die Bewertung — aufwertend in die eine, abschreckend in die andere Richtung. Der Preis steigt, ob er „Erhöhung" oder „Modernisierung" heißt; der Wechsel bleibt derselbe, ob „Anbieterwechsel" oder „Blindflug". Legitim einsetzen: Ein freundliches, aber zutreffendes Wort zu wählen ist normales Handwerk — professionell bleibt es, wenn du dieselbe Aussage auch unter dem nüchternen Begriff verträtest. Erkennen und kontern: Mach den Gegenwort-Test — bilde zu jedem Etikett das gegenteilig gefärbte Wort. Findest du es mühelos und kippt die Wertung mit, war das Wort die Botschaft, nicht die Sache. Framing liegt am nächsten, weil Loaded Language dessen sprachliche Feinstufe ist — Framing rückt aber einen ganzen Aspekt in den Vordergrund (etwa Versorgungssicherheit statt Preis), während hier der Bezug identisch bleibt und nur die Wortfärbung wechselt. Equivocation nutzt ein mehrdeutiges Wort und gleitet zwischen seinen Bedeutungen; hier ist jedes Wort eindeutig, nur wertend gewählt. Paltering täuscht mit wörtlich wahren Einzelaussagen, meist durch Weglassen — hier steht keine wahr-aber-irreführende Tatsachenbehauptung, sondern ein umetikettierter Vorgang.',
      en: 'The hallmark of loaded language: for one and the same event two words stand ready, and the choice alone settles the verdict — flattering in one direction, off-putting in the other. The price rises whether it is called an "increase" or "modernisation"; switching is the same act whether it is "changing provider" or "a blind gamble." Used legitimately: choosing a friendly but accurate word is ordinary craft — it stays professional when you would defend the same statement under the plain term too. To spot and counter it: run the counter-word test — for every label, form the oppositely coloured word. If it comes easily and the verdict flips with it, the word was the message, not the substance. Framing is the closest neighbour, since loaded language is its fine-grained linguistic form — but framing foregrounds a whole aspect (say, security of supply rather than price), whereas here the referent stays identical and only the colouring of the word changes. Equivocation exploits an ambiguous word and slides between its meanings; here every word is unambiguous, merely chosen for its slant. Paltering deceives with literally true individual statements, usually by omission — here there is no true-but-misleading factual claim, just a relabelled event.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_language',
    relatedTechniques: ['loaded_language', 'framing', 'equivocation', 'paltering_half_truth'],
  },
  {
    id: 'wave5a-loaded_language-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du redigierst als Kommunikationsverantwortliche den Entwurf einer Stellungnahme deines Hauses für eine Wirtschaftszeitung. Die Fachabteilung hat die geplante Preiserhöhung durchgehend als „Preisanpassung im Sinne fairer Wertschätzung" formuliert und den Wettbewerber beiläufig als „Billigheimer ohne Substanz" bezeichnet.',
      en: 'As head of communications you are editing the draft of your company\'s statement for a business newspaper. The department has phrased the planned price increase throughout as a "price adjustment in the spirit of fair appreciation" and refers in passing to the competitor as a "bargain-basement outfit with no substance."',
    },
    options: [
      {
        de: 'Ich entschärfe die aufgeladenen Wörter: „Preiserhöhung" beim Namen nennen, Höhe und Grund konkret angeben und die Wertung über den Wettbewerber streichen — die Stellungnahme trägt dann die Sache, nicht das Etikett.',
        en: 'I defuse the loaded words: name the "price increase" plainly, state the amount and reason concretely, and cut the judgement about the competitor — so the statement rests on the substance, not the label.',
      },
      {
        de: 'Ich lasse die positiven Wörter für uns stehen und streiche nur den Seitenhieb auf den Wettbewerber — die eigene Beschönigung ist ja Marketing.',
        en: 'I keep the positive words for us and only cut the jab at the competitor — after all, softening our own side is just marketing.',
      },
      {
        de: 'Ich verschärfe spiegelbildlich und lasse uns als „einzig faire Wahl am Markt" auftreten, um im Wettbewerb nicht zurückzustecken.',
        en: 'I sharpen the language in kind and present us as the "only fair choice on the market," so as not to give ground to the competition.',
      },
      {
        de: 'Ich gebe den Entwurf unverändert frei, solange keine einzelne Aussage sachlich falsch ist — die Wortwahl ist Geschmackssache.',
        en: 'I clear the draft unchanged as long as no single statement is factually false — word choice is a matter of taste.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf nutzt beide Register von Loaded Language: einen Euphemismus fürs eigene Haus („faire Wertschätzung" statt Preiserhöhung) und einen Dysphemismus für den Wettbewerber („Billigheimer ohne Substanz"). Die Wertung reist im Substantiv mit, ehe ein Fakt sie stützt. Die beste Option nimmt beiden Seiten die Färbung — sie benennt die Preiserhöhung und begründet sie, statt sie zu verkleiden, und verzichtet auf die Abwertung. Legitim einsetzen: Ein positives, aber zutreffendes Wort ist erlaubt — tragfähig wird es nur, wenn es durch nachprüfbare Angaben gedeckt ist. Erkennen und kontern: Übersetze jeden gefärbten Begriff ins Nüchterne zurück und prüfe, ob du dieselbe Aussage unter dem Klartext-Wort ebenso verträtest; hält sie das nicht aus, trug das Etikett die Last. Nur den Seitenhieb zu streichen entfernt den Dysphemismus, lässt aber die Selbst-Beschönigung stehen — vor einer Wirtschaftsredaktion fällt genau die beim ersten Nachfragen auf. Spiegelbildlich zu verschärfen verdoppelt die Technik und macht die Stellungnahme angreifbar. Alles durchzuwinken verwechselt wörtliche Richtigkeit mit Ehrlichkeit: Jede Einzelaussage kann stimmen und der Gesamteindruck trotzdem gefärbt sein.',
      en: 'The draft uses both registers of loaded language: a euphemism for one\'s own side ("fair appreciation" instead of a price increase) and a dysphemism for the competitor ("bargain-basement outfit with no substance"). The verdict travels inside the noun before any fact supports it. The best option strips the colouring from both sides — it names and justifies the price increase rather than disguising it, and drops the disparagement. Used legitimately: a positive but accurate word is allowed — it only holds up when backed by verifiable detail. To spot and counter it: translate every coloured term back into plain language and check whether you would defend the same statement under the plain word; if it will not bear that, the label was carrying the weight. Cutting only the jab removes the dysphemism but leaves the self-flattery standing — in front of a business newsroom that surfaces at the first follow-up question. Sharpening in kind doubles the technique and makes the statement attackable. Waving it all through confuses literal correctness with honesty: every single claim can be true and the overall impression still coloured.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_language',
    relatedTechniques: ['loaded_language', 'ad_hominem', 'framing'],
  },
  {
    id: 'wave5a-loaded_language-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit dieser Wortwahl versucht die Werksleitung, ___.',
      en: 'Complete the sentence: With this wording, plant management is trying to ___.',
    },
    scenario: {
      de: 'Rundmail der Werksleitung an die Belegschaft: Die Streichung der Nachtschicht und der Wegfall von 120 Stellen erscheinen durchgehend als „Zukunftssicherung durch Standortfokussierung" und „sozialverträgliche Kapazitätsanpassung". Das Wort Entlassung fällt an keiner Stelle.',
      en: 'Circular email from plant management to the workforce: cutting the night shift and eliminating 120 jobs appear throughout as "securing the future through site focus" and "socially responsible capacity adjustment." The word redundancy never appears.',
    },
    options: [
      {
        de: 'durch beschönigende Sammelbegriffe die Bewertung schon im Wort mitzuliefern und das harte Wort „Entlassung" sprachlich zu vermeiden (Loaded Language / Euphemismus)',
        en: 'deliver the verdict inside the word through softening umbrella terms and linguistically avoid the hard word "redundancy" (loaded language / euphemism)',
      },
      {
        de: 'die Nachricht so zu rahmen, dass die Belegschaft sie vor dem Hintergrund „Standort retten" liest und den Stellenabbau als notwendigen Teil davon einordnet (Framing)',
        en: 'frame the message so the workforce reads it against a "saving the site" backdrop and files the job cuts as a necessary part of it (framing)',
      },
      {
        de: 'mit lauter wörtlich zutreffenden Teilaussagen einen geschönten Gesamteindruck zu erzeugen, ohne eine einzelne Aussage falsch zu machen (Paltering / Halbwahrheit)',
        en: 'produce a rosy overall impression from a string of literally accurate partial statements without making any single claim false (paltering / half-truth)',
      },
      {
        de: 'einen mehrdeutigen Begriff zu benutzen und je nach Leser zwischen seinen Bedeutungen zu wechseln (Equivocation / Doppeldeutigkeit)',
        en: 'use an ambiguous term and shift between its meanings depending on the reader (equivocation)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Loaded Language ersetzt hier die konkrete Beschreibung durch einen Sammelbegriff: „Kapazitätsanpassung" nimmt den Platz von „Entlassung" ein und bringt das Urteil „nichts Schlimmes" gleich mit. Legitim einsetzen: Sachlich korrekte, weniger harte Begriffe sind zulässig — professionell bleibt es nur, wenn das Konkrete (welche Schicht, welche Stellen) klar daneben steht, statt ersetzt zu werden. Erkennen und kontern: Benenne das ausgelassene Klartext-Wort — hier „Entlassung" — und prüfe, ob der beschönigende Begriff dieselbe Information trägt; verschwindet das harte Wort spurlos, hat das Etikett es verdeckt. Framing liegt nahe, weil auch hier ein günstiger Aspekt betont wird — Framing verschiebt aber den Bezugsrahmen der ganzen Botschaft (Standort retten), während Loaded Language auf der Ebene einzelner Wörter für denselben Sachverhalt arbeitet; das definierende Signal hier ist der ausgetauschte Begriff, nicht der Perspektivwechsel. Paltering täuschte mit wörtlich wahren Teilaussagen und Weglassen — hier steht die Zahl (120 Stellen) sogar da, verdeckt ist nur das Wort. Equivocation bräuchte einen mehrdeutigen Begriff, zwischen dessen Bedeutungen gewechselt wird; die Sammelbegriffe hier sind nicht doppeldeutig, nur beschönigend gewählt.',
      en: 'Loaded language here replaces the concrete description with an umbrella term: "capacity adjustment" takes the place of "redundancy" and brings the verdict "nothing bad" along with it. Used legitimately: factually correct, less harsh terms are allowed — it stays professional only when the concrete detail (which shift, which positions) stands plainly beside it rather than replacing it. To spot and counter it: name the omitted plain word — here "redundancy" — and check whether the softening term carries the same information; if the hard word vanishes without trace, the label has covered it. Framing seems close because a favourable aspect is emphasised here too — but framing shifts the reference frame of the whole message (saving the site), whereas loaded language operates at the level of individual words for the same referent; the defining signal here is the swapped term, not a change of perspective. Paltering would deceive with literally true partial statements and omission — here the figure (120 jobs) is even stated; only the word is hidden. Equivocation would need an ambiguous term whose meanings are switched between; the umbrella terms here are not double-edged, merely chosen to flatter.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_language',
    relatedTechniques: ['loaded_language', 'framing', 'paltering_half_truth', 'equivocation'],
  },
];
