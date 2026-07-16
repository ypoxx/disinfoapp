import type { Exercise } from '../../types';

// microtargeting — Phase 3 densification batch.
export const microtargetingP3Exercises: Exercise[] = [
  {
    id: 'mt-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Welche Technik ist der dominante Treiber dieser Kampagne — der Hebel, der die anderen überhaupt erst steuert?',
      en: 'Which technique is the dominant driver of this campaign — the lever that governs the others in the first place?',
    },
    scenario: {
      de: 'Ein Direct-to-Consumer-Anbieter für Abo-Boxen startet seine große Weihnachtskampagne. Das Growth-Team baut ein System, das für jeden einzelnen Interessenten ein psychografisches und ein Verhaltensprofil von einem Datenhändler zieht und daraus automatisch entscheidet, welchen Überzeugungshebel es ausspielt. Wer als unsicher und entscheidungsschwach eingestuft wird, sieht einen Countdown-Timer und „Nur noch 3 Boxen verfügbar". Wer als gemeinschaftsorientiert profiliert ist, bekommt „Schon 40.000 Mitglieder sind dabei" samt Testimonials. Wer als statusgetrieben gilt, sieht dieselbe Box als „exklusiven Vorab-Zugang für ausgewählte Kundinnen". Jede Person sieht genau einen Hebel — ausgewählt allein durch ihr Datenprofil.',
      en: 'A direct-to-consumer subscription-box brand launches its big holiday campaign. The growth team builds a system that, for every single prospect, pulls a psychographic and a behavioural profile from a data broker and then automatically decides which persuasion lever to deploy. Anyone classified as uncertain and indecisive sees a countdown timer and "Only 3 boxes left". Anyone profiled as community-oriented gets "Already 40,000 members have joined" plus testimonials. Anyone deemed status-driven sees the same box as "exclusive early access for selected customers". Each person sees exactly one lever — selected solely by their data profile.',
    },
    options: [
      {
        de: 'Microtargeting — die eigentliche Maschine profiliert jede Einzelperson aus zugekauften Daten und spielt genau den Hebel aus, für den ihr Profil am anfälligsten ist; Knappheit, sozialer Beweis und Exklusivität sind nur austauschbare Nutzlasten, die pro Profil zugeordnet werden.',
        en: 'Microtargeting — the actual engine profiles each individual from purchased data and deploys exactly the lever their profile is most vulnerable to; scarcity, social proof and exclusivity are merely interchangeable payloads assigned per profile.',
      },
      {
        de: 'Knappheit — die Countdown-Timer und „Nur noch 3 verfügbar" sind der stärkste Conversion-Treiber und geben der Kampagne ihren Druck.',
        en: 'Scarcity — the countdown timers and "only 3 left" are the strongest conversion driver and give the campaign its pressure.',
      },
      {
        de: 'Sozialer Beweis — die „40.000 Mitglieder"-Botschaft samt Testimonials trägt die eigentliche Überzeugungslast.',
        en: 'Social proof — the "40,000 members" message with testimonials carries the real persuasive load.',
      },
      {
        de: 'Framing — im Kern wird nur ein und dieselbe Box jeweils unterschiedlich verpackt und präsentiert.',
        en: 'Framing — at its core it is just one and the same box, packaged and presented differently each time.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Kampagne schichtet drei klassische Hebel übereinander — Knappheit, sozialen Beweis und eine Exklusivitäts-/Framing-Ansprache. Doch keiner davon steuert die Kampagne: Jeder erreicht nur ein Segment. Was entscheidet, WER WELCHEN Hebel sieht, ist die personengenaue Profilierung aus Datenhändler-Daten — und genau dieses datengetriebene Auswählen exakt der Schwachstelle, die getroffen werden soll, ist die Signatur von Microtargeting. Es ist der dominante Treiber, weil es die anderen Hebel erst orchestriert. Knappheit (Option 2) und sozialer Beweis (Option 3) sind real und wirksam, aber jeweils nur eine austauschbare Nutzlast für ein einziges Segment — nimm die Profilierungsmaschine weg, und sie verlieren ihre personengenaue Präzision. Framing (Option 4) beschreibt nur, wie sich die Botschaften im Wortlaut unterscheiden; Framing allein braucht keine persönlichen Daten und erklärt nicht, wem welche Version zugeordnet wird. Grenze: Personalisierung aus einwilligungsbasierten First-Party-Daten mit transparenten, nicht-sensiblen Segmenten und ehrlichen Angeboten ist legitim. Hier aber kauft das System abgeleitete psychografische Schwachstellen bei einem Broker zu — Daten, die die Nutzer nie wissentlich gegeben haben — und zielt auf den wunden Punkt jeder Einzelperson. Das kippt ins manipulative Microtargeting und wirft mit dieser Profilbildung zusätzlich DSGVO-Fragen auf.',
      en: 'The campaign stacks three classic levers — scarcity, social proof, and an exclusivity/framing pitch. But none of them governs the campaign: each reaches only one segment. What decides WHO sees WHICH lever is the per-person profiling from data-broker records — and precisely this data-driven selection of exactly the weakness to hit is the signature of microtargeting. It is the dominant driver because it orchestrates the other levers in the first place. Scarcity (option 2) and social proof (option 3) are real and powerful, but each is only one interchangeable payload for a single segment — remove the profiling engine and they lose their per-person precision. Framing (option 4) only describes how the messages differ in wording; framing on its own needs no personal data and cannot explain who is assigned which version. Boundary: personalization from consented first-party data with transparent, non-sensitive segments and honest offers is legitimate. Here, though, the system buys inferred psychographic vulnerabilities from a broker — data the users never knowingly gave — and aims at each individual\'s sore point. That tips into manipulative microtargeting and, with this profiling, additionally raises GDPR questions.',
    },
    points: 20,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'scarcity', 'social_proof'],
  },
];
