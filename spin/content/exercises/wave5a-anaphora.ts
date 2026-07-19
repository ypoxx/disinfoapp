// Welle 5a: 3 Übungen für anaphora (Anapher).
// Frontier-Tier: Übungen prüfen Begriffs- und Formwissen, nie belegte Wirkung.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aAnaphora: Exercise[] = [
  {
    id: 'wave5a-anaphora-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt diese rhetorische Figur?',
      en: 'What is this rhetorical figure called?',
    },
    scenario: {
      de: 'Hauptversammlung eines Maschinenbauers: Der Vorstandsvorsitzende beendet seinen Ausblick vor den Aktionären, jeden Satz mit denselben zwei Worten beginnend: „Wir investieren in die Werke. Wir investieren in die Ausbildung. Wir investieren in die nächste Gerätegeneration." Die drei Sätze folgen direkt aufeinander, der Auftakt bleibt Wort für Wort gleich.',
      en: 'Annual shareholders\' meeting of a machinery manufacturer: the CEO closes his outlook to investors by opening every sentence with the same two words: "We invest in our plants. We invest in our people. We invest in the next generation of machines." The three sentences follow one another directly, the opening staying identical word for word.',
    },
    options: [
      { de: 'Anapher', en: 'Anaphora' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Illusory-Truth-Effekt', en: 'Illusory truth effect' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Anapher: Das definierende Merkmal ist der Wort-für-Wort gleiche Auftakt mehrerer direkt aufeinanderfolgender Sätze („Wir investieren in…") innerhalb einer Passage. So setzt du die Figur professionell ein: Ein paralleler Satzanfang gibt einer ohnehin tragfähigen Kernbotschaft Rhythmus und macht sie einprägsamer — als Stilmittel ist das legitim. Daran erkennst du sie und so ordnest du sie ein: Achte auf den identischen Auftakt im engen Satzverbund und prüfe, ob der Dreiklang eine Aussage bündelt oder eine dünne Begründung überdeckt. Wiederholung als eigene Technik meint das mehrfache Ausspielen derselben Botschaft über Zeit und Kanäle hinweg (Vertrautheit durch Häufigkeit) — hier steht die Wiederholung dagegen als Formfigur in einem einzigen Redeabschnitt. Der Illusory-Truth-Effekt beschreibt, dass wiederholt Gehörtes glaubwürdiger wirkt — er bräuchte wiederholte Exposition über die Zeit, nicht den parallelen Satzbau in einem Moment. Emotionaler Appell zielt direkt auf ein Gefühl (Angst, Mitleid, Stolz); die Anapher ist zunächst eine strukturelle Figur, die auch ganz ohne emotionale Ladung funktioniert.',
      en: 'Anaphora: the defining feature is the word-for-word identical opening of several directly consecutive sentences ("We invest in…") within one passage. Using it professionally: a parallel sentence opening gives an already sound core message cadence and makes it more memorable — as a stylistic device that is legitimate. Recognising and placing it: watch for the identical opening in a tight run of sentences and check whether the triad bundles a statement or papers over a thin argument. Repetition as a distinct technique means playing out the same message repeatedly across time and channels (familiarity through frequency) — here the repetition instead appears as a formal figure within a single stretch of speech. The illusory truth effect describes how repeatedly heard claims come to feel more credible — it would require repeated exposure over time, not parallel sentence structure in one moment. An emotional appeal targets a feeling directly (fear, pity, pride); anaphora is first of all a structural figure that works even without any emotional charge.',
    },
    points: 10,
    primaryTechniqueId: 'anaphora',
    relatedTechniques: ['anaphora', 'repetition', 'illusory_truth_effect', 'emotional_appeal'],
  },
  {
    id: 'wave5a-anaphora-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation und redigierst das Krisenstatement eines Sprechers vor dem Auftritt. Der Entwurf endet mit einer Anapher: „Wir haben die Ursache gefunden. Wir haben die Lieferkette gesichert. Wir haben das Risiko beseitigt." Der dritte Satz beschreibt einen Stand, der intern noch gar nicht bestätigt ist — die Prüfung läuft. Der eingängige Dreiklang lässt alle drei Aussagen gleich abgeschlossen klingen.',
      en: 'You lead communications and are editing a spokesperson\'s crisis statement before the appearance. The draft ends on an anaphora: "We have found the cause. We have secured the supply chain. We have eliminated the risk." The third sentence describes a status that has not been internally confirmed — the review is still running. The catchy triad makes all three claims sound equally settled.',
    },
    options: [
      {
        de: 'Ich streiche die Anapher ersatzlos — in einer Krise haben rhetorische Figuren nichts verloren, ein Statement muss nüchtern und schmucklos sein.',
        en: 'I cut the anaphora entirely — rhetorical figures have no place in a crisis, a statement must be plain and unadorned.',
      },
      {
        de: 'Ich lasse den Dreiklang und baue ihn sogar aus — die Kadenz beruhigt den Raum schneller als jedes Detail, und genau das braucht eine Krise.',
        en: 'I keep the triad and even extend it — the cadence calms the room faster than any detail, and that is exactly what a crisis needs.',
      },
      {
        de: 'Ich behalte die Figur, lasse aber jede Zeile nur eine Aussage tragen, die wir belegen können: Den dritten, noch unbestätigten Satz ersetze ich durch eine verifizierte Aussage oder streiche ihn, damit der Rhythmus die Substanz stützt statt eine Lücke zu überdecken.',
        en: 'I keep the figure but let each line carry only a claim we can back: I replace the third, still-unconfirmed sentence with a verified statement or drop it, so the rhythm reinforces substance instead of masking a gap.',
      },
      {
        de: 'Ich überlasse die Formulierung dem Sprecher — Stil ist seine Sache, ich prüfe als Kommunikationsleitung nur die Fakten, nicht die Rhetorik.',
        en: 'I leave the wording to the spokesperson — style is his call; as comms lead I only check the facts, not the rhetoric.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Mechanismus: Die Anapher reiht drei Sätze mit gleichem Auftakt („Wir haben…"); der parallele Bau lässt sie als geschlossene Einheit erscheinen, sodass die noch unbestätigte dritte Aussage denselben Erledigt-Ton bekommt wie die beiden belegten. So setzt du die Figur professionell ein: Ein paralleler Satzanfang darf eine belastbare Botschaft ordnen und einprägsam machen — legitim wird er, wenn jede Zeile für sich hält. Erkennen und kontern: Prüfe im engen Satzverbund jede wiederholte Zeile einzeln auf ihren Faktenstand und trenne den Rhythmus von der Substanz; genau das leistet die richtige Option, indem sie den ungedeckten Satz austauscht statt ihn im Dreiklang mitlaufen zu lassen. Option 1 wirkt seriös, weil Nüchternheit in Krisen geboten ist — sie überkorrigiert aber: Das Problem ist nicht die Figur, sondern die ungedeckte Aussage darin. Option 2 klingt nach souveräner Bühnenführung, verwechselt aber Form mit Gehalt und behauptet eine Beruhigungswirkung, die so nicht belegt ist — und sie schreibt die Lücke fest. Option 4 wirkt wie eine saubere Rollentrennung, verkennt aber, dass Faktenprüfung und rhetorische Rahmung hier zusammenfallen: Der Dreiklang ist genau der Ort, an dem die unbestätigte Behauptung Autorität borgt.',
      en: 'Mechanism: the anaphora lines up three sentences with the same opening ("We have…"); the parallel build makes them read as one closed unit, so the still-unconfirmed third claim takes on the same done-and-dusted tone as the two backed ones. Using the figure professionally: a parallel sentence opening may order a solid message and make it memorable — it stays legitimate when every line holds on its own. Recognising and countering it: in a tight run of sentences, check each repeated line separately against the facts and separate rhythm from substance; that is exactly what the correct option does by swapping out the unbacked sentence instead of letting it ride along in the triad. Option 1 looks serious because restraint is called for in a crisis — but it overcorrects: the problem is not the figure, it is the unbacked claim inside it. Option 2 sounds like assured stagecraft but confuses form with substance and asserts a calming effect that is not established — and it locks the gap in. Option 4 looks like a clean division of roles but misses that fact-checking and rhetorical framing coincide here: the triad is precisely where the unconfirmed claim borrows authority.',
    },
    points: 10,
    primaryTechniqueId: 'anaphora',
    relatedTechniques: ['anaphora', 'paltering_half_truth', 'repetition'],
  },
  {
    id: 'wave5a-anaphora-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vervollständige: Die Passage nutzt die rhetorische Figur der ___, weil jeder Satz mit derselben Wendung beginnt.',
      en: 'Complete the sentence: The passage uses the rhetorical figure of ___, because every sentence begins with the same phrase.',
    },
    scenario: {
      de: 'Redemanuskript einer NGO-Sprecherin zum Spendenaufruf, drei Sätze in Folge: „Deshalb bleiben wir laut. Deshalb bleiben wir dran. Deshalb bleiben wir an eurer Seite." Der Auftakt „Deshalb bleiben wir" wiederholt sich Satz für Satz am Zeilenanfang.',
      en: 'Speech script of an NGO spokeswoman making a donation appeal, three sentences in a row: "That is why we stay loud. That is why we stay on it. That is why we stay by your side." The opening "That is why we stay" repeats at the start of each line.',
    },
    options: [
      { de: 'Anapher', en: 'Anaphora' },
      { de: 'Alliteration', en: 'Alliteration' },
      { de: 'Wiederholung', en: 'Repetition' },
      { de: 'Loaded Language', en: 'Loaded language' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Anapher: Kennzeichen ist der identische Wortlaut am Satzanfang mehrerer aufeinanderfolgender Sätze („Deshalb bleiben wir…"). So nutzt du sie professionell: Ein wiederkehrender Auftakt gibt einem Aufruf Struktur und Merkbarkeit — als Stilmittel ist das sauber, solange jede Zeile eine tragfähige Aussage transportiert. Daran erkennst du sie: Wo sich der Zeilenanfang Wort für Wort wiederholt und ein Dreiklang entsteht, liegt eine Anapher vor; frag dich dann, ob der Rhythmus eine Aussage bündelt oder eine dünne Begründung ersetzt. Alliteration meint dagegen den gleichen Anfangs-Laut aufeinanderfolgender Wörter („bleiben — Bühne — Botschaft"), nicht den gleichen Wortlaut am Satzanfang. Wiederholung als eigene Technik ist das mehrfache Ausspielen derselben Botschaft über Zeit und Kanäle; hier geht es um die Formfigur innerhalb einer einzigen Passage. Loaded Language wäre der Einsatz emotional aufgeladener Wörter zur Wertung — die Wortwahl hier ist neutral, verstärkt wird allein über den parallelen Satzbau.',
      en: 'Anaphora: its hallmark is the identical wording at the start of several consecutive sentences ("That is why we stay…"). Using it professionally: a recurring opening gives an appeal structure and memorability — a clean stylistic device, as long as each line carries a sound claim. Recognising it: where the start of the line repeats word for word and a triad forms, you are looking at anaphora; then ask whether the rhythm bundles a statement or replaces a thin argument. Alliteration, by contrast, means the same initial sound in consecutive words ("stage — story — statement"), not the same wording at the start of a sentence. Repetition as a distinct technique is playing out the same message repeatedly across time and channels; here it is the formal figure within a single passage. Loaded language would be the use of emotionally charged words to colour a judgment — the word choice here is neutral, the intensification comes solely from the parallel sentence structure.',
    },
    points: 10,
    primaryTechniqueId: 'anaphora',
    relatedTechniques: ['anaphora', 'repetition', 'loaded_language'],
  },
];
