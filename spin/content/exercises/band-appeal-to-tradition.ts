// Band-Übung (BEGINNER): 1 Übung für appeal_to_tradition (Traditionsargument).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Blatant im Szenario (reine Alters-/Herkunfts-Cues, ohne Status-quo-Register),
// genau EINE Technik, in <10s lösbar. quick-check.
// evidenceTier 'weak' → Wirkmechanismus gehedgt, keine harten Wirkbehauptungen.
// Kein seriousMode.
// Abgrenzung zu den intermediate-Übungen (wave5a): neues Szenario (Kleiderordnung
// statt Sortiment/Magazin/Präsenz), blatante Cues, eigenständig formulierte
// Erklärung und clean-wrong Distraktoren (Nature + Social Proof statt Status quo).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandAppealToTradition: Exercise[] = [
  {
    id: 'band-appeal_to_tradition-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Mitarbeiterversammlung einer Privatbank: Als eine Nachwuchsberaterin fragt, ob die Krawattenpflicht für Herren noch zeitgemäß sei, antwortet der Vorstandsvorsitzende vor allen: „Bei uns tragen die Herren seit der Gründung 1878 Krawatte — das ist gelebte Tradition, es gehört zum Haus, und was seit jeher zu uns gehört, stellt man nicht in Frage." Einen sachlichen Grund für die Krawattenpflicht nennt er nicht.',
      en: 'All-staff meeting at a private bank: when a junior adviser asks whether the tie requirement for men is still appropriate, the CEO tells everyone: "At this bank, gentlemen have worn a tie since we were founded in 1878 — it\'s a living tradition, part of the house, and what has always been part of us is not something you question." He gives no substantive reason for the tie requirement.',
    },
    options: [
      { de: 'Traditionsargument (Weil-schon-immer)', en: 'Appeal to tradition' },
      { de: 'Natürlichkeitsargument (Appeal to Nature)', en: 'Appeal to nature' },
      { de: 'Social Proof (Bandwagon)', en: 'Social proof (bandwagon)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein Traditionsargument: Nicht ein Nutzen der Krawatte trägt die Antwort, sondern ihr bloßes Alter — „seit 1878", „gelebte Tradition". Lange Üblichkeit soll als Grund genügen; vieles mit langer Geschichte lesen wir schnell als bewährt, doch Dauer allein belegt keine heutige Berechtigung. Legitim einsetzen: Nenn ein über fast 150 Jahre gewachsenes Erbe als einen Gesichtspunkt, aber miss die Entscheidung daneben an heutigen Kriterien, statt das Alter zum Beweis zu erklären. Erkennen und kontern: Achte auf Zeit- und Herkunftssignale ohne Sachbeleg und frag konkret zurück, was die Krawatte heute für Kundenvertrauen und Auftritt bringt. Warum die anderen Optionen nicht passen: Das Natürlichkeitsargument würde die Krawatte als „von Natur aus richtig" begründen — hier zählt Alter, nicht Natur. Social Proof (Bandwagon) hieße, viele andere Banken hielten es gerade so — die Antwort beruft sich aber auf lange Dauer im eigenen Haus, nicht auf die Zahl der Nachahmer.',
      en: 'This is an appeal to tradition: what carries the answer isn\'t any benefit of the tie but its sheer age — "since 1878", "a living tradition". Long-standing custom is offered as reason enough. The cue likely lands because much of what has a long history reads as tried-and-true, yet duration alone proves nothing about present-day merit. Used legitimately: a brand grown over nearly 150 years is a genuine asset — it stays sound when you name that heritage as one consideration and still weigh the decision against today\'s criteria, rather than casting age as proof. To spot and counter it: watch for time-and-origin signals with no substantive backing, then ask concretely what the tie does for client trust and presentation today. Why the other options don\'t fit: appeal to nature would justify the tie as "naturally right" — but here it\'s age, not nature, that counts. Social proof (bandwagon) would claim many other banks currently do the same — yet the answer rests on long duration within the firm itself, not on the number of imitators.',
    },
    points: 10,
    primaryTechniqueId: 'appeal_to_tradition',
    relatedTechniques: ['appeal_to_tradition', 'appeal_to_nature', 'social_proof'],
  },
];
