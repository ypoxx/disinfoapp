// Band-Übung (INTERMEDIATE): 1 Übung für astroturfing_sockpuppets.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Bewusst leichter kalibriert als die advanced-Items in wave5c-astroturfing-sockpuppets.ts:
// gröberes Distraktor-Set (der ehrliche Hebel Social Proof statt der feinen
// Einzelstimme-vs-Ensemble-Abgrenzung zur Identitätstäuschung), Szenario ohne die
// advanced-typischen Negations-Cues, knappere Erklärung. Ein dominanter Cue trägt die Lösung.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const bandAstroturfingSockpuppets: Exercise[] = [
  {
    id: 'band-astroturfing_sockpuppets-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Ein Lieferdienst steht wegen der Bezahlung seiner Kurierinnen öffentlich in der Kritik. In zwei Verbraucher-Foren tauchen daraufhin binnen einer Woche rund zwanzig scheinbar unabhängige Stimmen auf — jede mit eigenem Namen, Profilbild und eigener Geschichte, teils als „langjährige Kundin", teils als „zufriedener Kurier" — und verteidigen das Unternehmen in eigenen Worten. Eine Nachfrage der Redaktion ergibt: Alle Konten wurden von einer beauftragten Agentur angelegt und aus einer Hand betrieben; der Auftraggeber wird nirgends genannt.',
      en: 'A delivery service is under public fire over how it pays its couriers. Within a week, about twenty seemingly independent voices surface across two consumer forums — each with its own name, avatar and back-story, some posing as a "long-time customer", others as a "happy courier" — defending the company in their own words. When an editor follows up, it emerges that all the accounts were set up and run by a single hired agency; the client is never named.',
    },
    options: [
      { de: 'Social Proof', en: 'Social Proof' },
      { de: 'Fake Social Proof', en: 'Fake Social Proof' },
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / Sock Puppets' },
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated Inauthentic Amplification' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Astroturfing: Ein Auftraggeber betreibt verdeckt mehrere Schein-Identitäten (Sockpuppets), die sich als unabhängige Kunden und Kuriere ausgeben. Der Hebel ist Social Proof — „so viele Betroffene halten zur Firma" — und trägt nur, solange niemand die gemeinsame Steuerung sieht. Die verdeckte Steuerung selbst hat keine seriöse Variante; sie lebt vom verborgenen Auftraggeber. Die legitime Nachbar-Praxis ist offengelegte Trägerschaft: echte Kundinnen und Mitarbeitende als klar gekennzeichnete Fürsprecher oder Testimonials auftreten lassen, statt Personen zu erfinden. Daran erkennst du es: Frag bei jeder plötzlichen Verteidigungswelle nach Account-Historie, Timing und Finanzierung; bleibt die Trägerschaft im Dunkeln, nutze die Meldewege der Plattform. Zur Abgrenzung: Social Proof ist der ehrliche Hebel dahinter — echte, gewachsene Zustimmung, die hier aber mit erfundenen Personen hergestellt ist. Fake Social Proof fälscht ebenfalls, aber ein aggregiertes Signal wie einen Sterne-Schnitt — hier sind die vielen scheinbaren Einzelpersonen das Kennzeichen, nicht eine Zahl. Coordinated Inauthentic Amplification koordiniert zwar auch, schiebt aber vorhandene Inhalte durch getaktetes Teilen nach oben; hier wird nichts verstärkt, sondern jede Identität neu erfunden.',
      en: 'Astroturfing: a single client covertly runs several fake identities (sock puppets) posing as independent customers and couriers. The lever is social proof — "so many ordinary people stand behind the firm" — and it only holds while no one sees the single hand steering them. The covert steering itself has no legitimate version; it lives on the hidden sponsor. Its lawful neighbour is disclosed sponsorship: letting real customers and staff speak as clearly labelled advocates or testimonials, rather than inventing people. To spot it: whenever a sudden wave of defence appears, ask about account history, timing and funding; if the backing stays hidden, use the platform\'s reporting channels. How the neighbouring patterns differ: Social Proof is the honest lever underneath — real, organically grown approval, here manufactured with invented people. Fake Social Proof also fabricates, but an aggregate signal such as a star average — here the tell is the many seemingly separate people, not a number. Coordinated Inauthentic Amplification is coordinated too, but it pushes existing content up through timed sharing; here nothing is amplified — every identity is invented from scratch.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets', 'social_proof', 'fake_social_proof', 'coordinated_inauthentic_amplification'],
  },
];
