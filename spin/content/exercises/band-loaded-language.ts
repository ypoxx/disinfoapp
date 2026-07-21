// Band-Übung (BEGINNER) für loaded_language (Loaded Language / Euphemismus).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Bewusst einfacheres Band als wave5a-loaded-language.ts (intermediate):
// nur sach-bezogene Färbung ohne Personen-Etiketten (kein Ad-Hominem-Rauschen),
// blatante Oberflächen-Cues, in <10s lösbar. Kürzere, syntaktisch leichtere
// Erklärung mit eigener Kontern-Heuristik („Was ist hier passiert?" statt
// Gegenwort-Test) und frischem Szenario (Verpackungs-Downsizing/Snack).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandLoadedLanguage: Exercise[] = [
  {
    id: 'band-loaded_language-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik erkennst du hier?',
      en: 'Which technique do you recognise here?',
    },
    scenario: {
      de: 'Produktankündigung eines Snack-Herstellers: Das Marketing-Team textet die Rückseite der Chipstüte für die Verbraucher. Der Inhalt schrumpft von 200 auf 150 Gramm. Auf der Packung steht dafür durchgehend „handlichere Genussportion" und „die neue Wohlfühlgröße" — von weniger Inhalt oder unverändertem Preis kein Wort.',
      en: 'Product announcement from a snack maker: the marketing team writes the back of the crisp bag for shoppers. The contents shrink from 200 to 150 grams. On the pack this is called, throughout, a "handier indulgence portion" and "the new feel-good size" — not a word about less content or the unchanged price.',
    },
    options: [
      { de: 'Loaded Language / Euphemismus', en: 'Loaded language / euphemism' },
      { de: 'Emotionaler Appell (Emotionale Ansprache)', en: 'Emotional appeal' },
      { de: 'Paltering (Halbwahrheit)', en: 'Paltering (half-truth)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Klarer Fall von Loaded Language (wertend gefärbte Wortwahl): Dieselbe Sache — weniger Inhalt — bekommt ein schön klingendes Etikett („Genussportion", „Wohlfühlgröße"). Der Hebel wirkt, weil die Wertung schon im Wort mitreist und beim Lesen unbemerkt mit übernommen wird, noch bevor du die nackte Tatsache prüfst. Legitim einsetzen: Freundliche Wörter sind erlaubt, aber nur, wenn die nackte Tatsache (150 statt 200 Gramm) klar danebensteht. Erkennen und kontern: Frag dich „Was ist hier eigentlich passiert?" und benenne es nüchtern; bleibt vom schönen Wort nichts als die Sache übrig, war das Wort nur Deko — frag dann nach der Zahl, die es verdeckt. Emotionaler Appell wäre es, wenn eine Gefühlserzählung aufgebaut würde (etwa eine kleine Geschichte über Genuss-Momente mit der Familie); hier fehlt jede solche Erzählung, nur ein einzelnes Wort ist gefärbt. Paltering (irreführende Halbwahrheit) bräuchte eine wörtlich wahre, aber irreführende Tatsachenaussage — hier steht keine solche Aussage, nur ein umetikettierter Vorgang.',
      en: 'A clear case of loaded language: the same thing — less content — gets a nice-sounding label ("indulgence portion," "feel-good size"). The lever works because the verdict rides along inside the word and is picked up unnoticed as you read, before you ever check the bare fact. Used legitimately: friendly words are fine, but only when the bare fact (150 grams instead of 200) stands plainly beside them. To spot and counter it: ask yourself "what actually happened here?" and name it plainly; if nothing but the fact is left once you strip the pretty word, the word was just decoration — then ask for the figure it hides. It would be an emotional appeal if a feelings-driven story were built up (say, a little tale of indulgent moments with the family); here there is no such story, only a single coloured word. Paltering would need a literally true but misleading factual claim — there is no such claim here, just a relabelled act.',
    },
    points: 10,
    primaryTechniqueId: 'loaded_language',
    relatedTechniques: ['loaded_language', 'emotional_appeal', 'paltering_half_truth'],
  },
];
