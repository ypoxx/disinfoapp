// Welle wave5c: 3 Übungen für agentic_decision_capture (Agentic Decision Capture).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'frontier' → Begriffswissen prüfen, keine Wirkbehauptungen.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cAgenticDecisionCapture: Exercise[] = [
  {
    id: 'wave5c-agentic_decision_capture-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik prägt dieses Muster?',
      en: 'Which technique shapes this pattern?',
    },
    scenario: {
      de: 'Eine Kanzlei-Office-Managerin lässt ihren KI-Reiseassistenten die Bahnverbindung für einen Mandantentermin buchen: „Nimm die schnellste Verbindung am Dienstagmorgen." Das Buchungsportal blendet dem Agenten eine als „empfohlen" vorsortierte Liste ein, in der ein Sparangebot mit Umstieg über einer 20 Minuten schnelleren Direktverbindung steht — eine bezahlte Platzierung. Der Agent bucht die oberste Zeile und legt der Managerin nur noch die Bestätigung vor. Die Auswahlliste hat kein Mensch gesehen.',
      en: 'A law-firm office manager has her AI travel assistant book the rail connection for a client meeting: "Take the fastest connection on Tuesday morning." The booking portal serves the agent a list pre-sorted as "recommended", in which a discounted option with a transfer sits above a direct connection that is 20 minutes faster — a paid placement. The agent books the top row and merely puts the confirmation in front of the manager. No human ever saw the list of options.',
    },
    options: [
      { de: 'Agentic Decision Capture', en: 'Agentic Decision Capture' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Automation Bias (Übervertrauen in Systeme)', en: 'Automation bias (over-reliance)' },
      { de: 'Dark Patterns', en: 'Dark patterns' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Agentic Decision Capture: Die Entscheidung ist an einen KI-Agenten delegiert, und genau dort wird sie eingefangen — die vorsortierte, bezahlte Trefferreihenfolge im Agentenpfad bestimmt das Ergebnis, ohne dass ein Mensch die Optionen je bewusst gegeneinander abwägt. So nutzt du das Wissen professionell: Wenn dein Team Agenten Aufgaben delegiert, gib prüfbare Kriterien mit („direkte Verbindung, kürzeste Reisezeit") und lass dir die Auswahlbegründung ausgeben, statt nur den Warenkorb zu bestätigen. Daran erkennst du es: Rekonstruiere die Kette „Auftrag → Auswahl → Ausführung" — wenn das Ergebnis nicht auf dein gesetztes Kriterium zurückführbar ist, sondern auf eine „empfohlene" Reihenfolge, ist die Entscheidung gekapert; entschärfe es, indem du die Rangfolge gegen eine neutrale Sortierung (hier: Reisezeit) prüfst. Nudging wäre die korrekte Antwort, wenn ein Mensch die Auswahlarchitektur vor Augen hätte und subtil gelenkt würde — hier sieht kein Mensch die Liste, gelenkt wird der Agent. Automation Bias meint, dass ein Mensch die Ausgabe eines Systems ungeprüft übernimmt; das Problem läge dann bei der Managerin — hier ist die Umgebung so gebaut, dass schon der Agent in die Zeile gelenkt wird. Dark Patterns bezeichnen auf menschliche Nutzer:innen gemünzte Oberflächentricks; das verwandte Muster zielt hier auf die Automatisierungsschicht, nicht auf ein menschliches Auge.',
      en: 'Agentic Decision Capture: the decision is delegated to an AI agent, and that is exactly where it gets captured — the pre-sorted, paid result ordering inside the agent\'s path determines the outcome, without any human ever consciously weighing the options against each other. How to use the insight professionally: when your team delegates tasks to agents, hand over checkable criteria ("direct connection, shortest travel time") and have the agent output the reason for its choice instead of merely confirming the basket. How to spot it: reconstruct the chain "brief → selection → execution" — if the outcome traces back not to your stated criterion but to a "recommended" ordering, the decision has been captured; defuse it by checking the ranking against a neutral sort (here: travel time). Nudging would be the right answer if a human had the choice architecture in front of them and were being subtly steered — here no human sees the list, it is the agent that is steered. Automation bias means a human adopts a system\'s output unchecked; the problem would then sit with the manager — here the environment is built so that the agent is steered into the row in the first place. Dark patterns are surface tricks aimed at human users; the related pattern here targets the automation layer, not a human eye.',
    },
    points: 10,
    primaryTechniqueId: 'agentic_decision_capture',
    relatedTechniques: ['agentic_decision_capture', 'nudging', 'automation_bias_overreliance', 'dark_patterns'],
  },
  {
    id: 'wave5c-agentic_decision_capture-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation und lässt einen internen KI-Agenten Angebote von PR-Agenturen „nach bestem Preis-Leistungs-Verhältnis" vorsortieren und den Sieger zur Freigabe vorlegen. Beim Blick in die Konfiguration fällt dir auf: Der Agent rechnet mit einer voreingestellten Gewichtung, die einen bestehenden Rahmenvertragspartner mit einem festen Punktebonus bevorzugt — ein Kriterium, das niemand im Team bewusst gesetzt hat.',
      en: 'You head corporate communications and have an internal AI agent pre-sort PR-agency offers "by best value for money" and put the winner in front of you for sign-off. Checking the configuration, you notice the agent works with a preset weighting that favours an existing framework-contract partner with a fixed point bonus — a criterion no one on the team consciously set.',
    },
    options: [
      {
        de: 'Ich lege die Gewichtungs- und Auswahlkriterien offen, prüfe sie gegen einen bewusst abgestimmten Kriterienkatalog und lasse die Rangfolge ohne die versteckte Bevorzugung neu berechnen, bevor irgendetwas in die Freigabe geht.',
        en: 'I surface the weighting and selection criteria, check them against a deliberately agreed criteria catalogue, and have the ranking recalculated without the hidden preference before anything goes to sign-off.',
      },
      {
        de: 'Ich gebe die Empfehlung frei — der Agent hat sauber und schnell sortiert, das spart dem Team einen ganzen Vergleichstag.',
        en: 'I approve the recommendation — the agent sorted things cleanly and quickly, saving the team a whole day of comparison.',
      },
      {
        de: 'Ich weise den Agenten an, künftig grundsätzlich den erstplatzierten Anbieter zu übernehmen — dann ist der Prozess wenigstens einheitlich.',
        en: 'I instruct the agent to always take the top-ranked provider from now on — at least then the process is consistent.',
      },
      {
        de: 'Ich behalte das Ergebnis, ergänze im Freigabevermerk aber „Kriterien unabhängig geprüft", damit die Dokumentation formal sauber ist.',
        en: 'I keep the result but add "criteria independently reviewed" to the sign-off note, so the documentation is formally clean.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus: Eine an den Agenten delegierte Entscheidung wird über eine voreingestellte Gewichtung eingefangen, die niemand bewusst bestätigt hat — die Rangfolge, und damit deine Freigabe, hängt an einem versteckten Kriterium (Agentic Decision Capture). So nutzt du das Wissen professionell: Lass Agenten nur mit offengelegten, im Team abgestimmten Kriterien werten und trenne die Konfiguration der Gewichtung sichtbar von der Ausführung. Erkennen und kontern: Wenn du ein Agenten-Ergebnis nicht lückenlos auf gesetzte Kriterien zurückführen kannst, ist das dein Signal — lege die Gewichtung offen, entferne unbestätigte Boni und lass ohne sie neu rechnen, bevor du freigibst. Die schnelle Freigabe wirkt plausibel, weil das Ergebnis sauber aufbereitet aussieht und Zeit spart — sie übernimmt aber genau die versteckte Bevorzugung ungeprüft und ist damit der Automation-Bias-Reflex, den die Kaperung ausnutzt. Den erstplatzierten Anbieter zur Regel zu machen, verstetigt die Kaperung, statt sie zu lösen. Der geschönte Freigabevermerk dokumentiert eine Prüfung, die nicht stattgefunden hat — das ist kein Schutz, sondern ein zusätzliches Risiko.',
      en: 'The mechanism: a decision delegated to the agent is captured via a preset weighting that no one consciously endorsed — the ranking, and with it your sign-off, hinges on a hidden criterion (Agentic Decision Capture). How to use the insight professionally: let agents score only with disclosed, team-agreed criteria, and keep the configuration of the weighting visibly separate from execution. To recognise and counter it: whenever you cannot trace an agent result cleanly back to stated criteria, treat that as your signal — surface the weighting, strip out unconfirmed bonuses, and recalculate without them before you sign off. The quick approval looks plausible because the result comes neatly packaged and saves time — but it adopts the hidden preference unchecked and is exactly the automation-bias reflex the capture exploits. Making the top-ranked provider the rule entrenches the capture rather than resolving it. The dressed-up sign-off note documents a review that never happened — that is not a safeguard but an added risk.',
    },
    points: 10,
    primaryTechniqueId: 'agentic_decision_capture',
    relatedTechniques: ['agentic_decision_capture', 'nudging', 'automation_bias_overreliance'],
  },
  {
    id: 'wave5c-agentic_decision_capture-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Rechercheauftrag an den KI-Assistenten einer Redaktion: „Finde den nächstgelegenen zertifizierten Prüfdienstleister und fordere ein Angebot an." Auf einer Anbieterseite ist im Quelltext eine nur für automatisierte Besucher sichtbare Auszeichnung hinterlegt, die das Haus als „einzigen verifizierten Partner in der Region" ausweist. Der Assistent übernimmt das Signal und kontaktiert genau diesen Anbieter — obwohl zwei zertifizierte Häuser näher liegen.',
      en: 'Research brief to a newsroom\'s AI assistant: "Find the nearest certified testing provider and request a quote." One provider\'s page carries markup in its source code, visible only to automated visitors, that labels the firm as the "only verified partner in the region". The assistant adopts the signal and contacts precisely this provider — even though two certified firms are closer.',
    },
    options: [
      { de: 'Agentic Decision Capture', en: 'Agentic Decision Capture' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Automation Bias (Übervertrauen in Systeme)', en: 'Automation bias (over-reliance)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Agentic Decision Capture: Die an den Assistenten delegierte Entscheidung wird über Inhalte eingefangen, die eigens für die Automatisierungsschicht gebaut sind — eine nur für Agenten sichtbare Auszeichnung (indirekte Prompt-Injection/manipuliertes Markup) lenkt die Auswahl. So nutzt du das Wissen professionell: Strukturierte Herkunfts- und Zertifizierungssignale sind legitim, wenn sie für Menschen wie Maschinen identisch und überprüfbar sind — nicht als Nur-für-Agenten-Behauptung. Erkennen und kontern: Frag dich, warum der Agent gerade dieses Ergebnis wählt — prüfe, ob die „verifiziert"-Aussage auch für menschliche Besucher der Seite gilt, und gleiche gegen eine unabhängige Zertifizierungsliste ab, statt der Seitenauszeichnung zu vertrauen. Nudging wäre es, wenn eine sichtbare Auswahlarchitektur einen Menschen subtil lenkte — hier sieht kein Mensch die Auszeichnung, sie ist für den Agenten gemacht. Automation Bias läge vor, wenn ein Mensch die Assistenten-Ausgabe ungeprüft übernähme; hier steckt die Manipulation in den Webinhalten und zielt auf den Agenten, bevor überhaupt ein Mensch beteiligt ist.',
      en: 'Agentic Decision Capture: the decision delegated to the assistant is captured via content built specifically for the automation layer — markup visible only to agents (indirect prompt injection / manipulated markup) steers the selection. How to use the insight professionally: structured provenance and certification signals are legitimate when they are identical and verifiable for humans and machines alike — not as an agent-only claim. To recognise and counter it: ask why the agent picked this particular result — check whether the "verified" claim also holds for human visitors to the page, and cross-check against an independent certification registry instead of trusting the page\'s own markup. Nudging would apply if a visible choice architecture subtly steered a human — here no human sees the markup, it is made for the agent. Automation bias would apply if a human adopted the assistant\'s output unchecked; here the manipulation sits in the web content and targets the agent before any human is even involved.',
    },
    points: 10,
    primaryTechniqueId: 'agentic_decision_capture',
    relatedTechniques: ['agentic_decision_capture', 'nudging', 'automation_bias_overreliance'],
  },
];
