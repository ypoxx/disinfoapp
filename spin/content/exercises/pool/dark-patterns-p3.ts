import type { Exercise } from '../../types';

// dark_patterns — Phase 3 densification batch.
export const darkPatternsP3Exercises: Exercise[] = [
  {
    id: 'da-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche ist der dominante Treiber der Wirkung — der Hebel, ohne den der Ablauf zusammenbräche?',
      en: 'Several techniques work together here. Which is the dominant driver of the effect — the lever without which the flow would collapse?',
    },
    scenario: {
      de: 'Deine Firma bringt eine Produktivitäts-App heraus; das Wachstumsteam hat den Ablauf gebaut, der greift, sobald die kostenlose Testphase endet. In einem bildschirmfüllenden Fenster prangt groß und farbig „Premium fortsetzen — deine Fortschritte bleiben erhalten". Darüber läuft ein Countdown „Einmaliges Angebot, endet in 04:59" (bei jedem erneuten Öffnen springt er zurück auf 05:00). Die Verlängerung ist bereits vorausgewählt. Wer nicht verlängern will, muss einen kleinen, blassen Link „Nein danke" antippen, danach durch zwei weitere Bestätigungsseiten scrollen und am Ende eine doppelt verneinte Rückfrage („Bist du sicher, dass du nicht weiter Zeit sparen möchtest?") korrekt beantworten. Wer irgendwo abbricht, bleibt im bezahlten Abo.',
      en: 'Your company is launching a productivity app; the growth team built the flow that triggers the moment the free trial ends. A full-screen window prominently displays, in large colour, "Continue Premium — keep your progress." Above it runs a countdown, "One-time offer, ends in 04:59" (which jumps back to 05:00 every time the screen is reopened). Renewal is already pre-selected. Anyone who does not want to renew must tap a small, pale "No thanks" link, then scroll through two further confirmation pages, and finally answer a double-negative prompt ("Are you sure you don\'t want to keep saving time?") correctly. Anyone who abandons the flow anywhere stays in the paid subscription.',
    },
    options: [
      {
        de: 'Dark Patterns — die Wirkung steckt in der Ablauf-Architektur selbst: vorausgewählte Verlängerung, versteckter und mehrfach verbauter Ausstieg plus eine irreführend formulierte Rückfrage. Die unerwünschte Zahlung passiert als Standardfolge, sobald man nicht gegen das Design ankämpft.',
        en: 'Dark patterns — the effect lives in the architecture of the flow itself: pre-selected renewal, a hidden and repeatedly obstructed exit, plus a misleadingly worded prompt. The unwanted charge happens as the default outcome unless you fight the design.',
      },
      {
        de: 'Knappheit — der ablaufende Countdown erzeugt FOMO, und dieser Zeitdruck ist es, der die Nutzer letztlich zum Bleiben bewegt.',
        en: 'Scarcity — the expiring countdown creates FOMO, and it is that time pressure which ultimately moves users to stay.',
      },
      {
        de: 'Emotionaler Appell — die schuldbeladene Ablehn-Formulierung rund um „verlorene Fortschritte" und „Zeit sparen" ist die eigentliche treibende Kraft.',
        en: 'Emotional appeal — the guilt-laden decline wording about "lost progress" and "saving time" is the real driving force.',
      },
      {
        de: 'Nudging — es ist nur ein kräftiger Standard-Nudge hin zur empfohlenen Option; die freie Gegenwahl bleibt dabei erhalten.',
        en: 'Nudging — it is just a strong default nudge toward the recommended option; the free counter-choice remains fully intact.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dominanter Treiber ist das Dark Pattern: Was die Zahlung tatsächlich erzwingt, ist die Struktur des Ablaufs — die Verlängerung ist vorbelegt (Standard-Trägheit), der Ausstieg ist bewusst mit Reibung verbaut (Obstruktion / „Roach Motel"), und die doppelt verneinte Rückfrage ist eine Fangfrage. Der Test macht die Dominanz sichtbar: Nimm Countdown und Schuldtext weg — der Mechanismus bleibt wirksam, weil Abbrechen mühsam bleibt und der voreingestellte Zustand die Arbeit erledigt; nimm die Design-Asymmetrie weg — der Ablauf bricht zusammen. Knappheit (B) ist zwar präsent, aber der Countdown ist gefälscht (er setzt sich bei jedem Öffnen zurück) und nur ein Verstärker; er verankert keine echte Verfügbarkeit und trägt den Ablauf nicht. Der emotionale Appell (C) über „verlorene Fortschritte" ist eine Zutat der Confirmshaming-Formulierung, würde aber allein niemanden im Abo halten, der bequem kündigen könnte. Nudging (D) ist der lehrreichste Fehlgriff und zugleich die Grenze: Ein legitimer Nudge ist transparent und lässt die Gegenwahl gleich leicht erreichbar — hier wird sie gezielt versteckt, mehrfach erschwert und sprachlich verdreht, also gerade nicht mehr genudged, sondern manipuliert. Ethische Grenze für Kommunikationsprofis: Standardwerte und Gestaltung dürfen empfehlen, aber Ein- und Ausstieg müssen gleich leicht und die Optionen klar benannt sein.',
      en: 'The dominant driver is the dark pattern: what actually forces the charge is the structure of the flow — renewal is pre-checked (default inertia), the exit is deliberately walled off with friction (obstruction / "roach motel"), and the double-negative prompt is a trick question. The test makes the dominance visible: strip out the countdown and the guilt copy — the mechanism still works, because cancelling stays effortful and the pre-set state does the work; strip out the design asymmetry — the flow collapses. Scarcity (B) is present, but the countdown is fake (it resets on every reopen) and merely an amplifier; it anchors no genuine availability and does not carry the flow. The emotional appeal (C) about "lost progress" is an ingredient of the confirmshaming wording, yet on its own it would hold no one who could cancel comfortably. Nudging (D) is the most instructive miss and also the boundary: a legitimate nudge is transparent and keeps the counter-choice equally easy to reach — here it is deliberately hidden, obstructed several times over and linguistically twisted, i.e. no longer nudged but manipulated. The ethical line for comms professionals: defaults and design may recommend, but entry and exit must be equally easy and the options clearly labelled.',
    },
    points: 20,
    primaryTechniqueId: 'dark_patterns',
    relatedTechniques: ['dark_patterns', 'scarcity', 'emotional_appeal'],
  },
];
