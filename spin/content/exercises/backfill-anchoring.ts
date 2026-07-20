// Backfill: 3 Übungen für die bestehende Technik 'anchoring' (Ankereffekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Formatvorbild: pilot-paltering-half-truth.ts / pilot-decoy-effect.ts (Golden Set).
// evidenceTier von 'anchoring': robust (confidence 0.92, evidenceQuality high) —
// Übungen dürfen Wirkung/Erkennung prüfen, keine Frontier-Begriffsschranke.
// NICHT in index.ts registriert — Registrierung erfolgt separat.

import type { Exercise } from '../types';

export const backfillAnchoring: Exercise[] = [
  {
    id: 'backfill-anchoring-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Neugeschäfts-Direktor hier ein?',
      en: 'Which technique is the new-business director using here?',
    },
    scenario: {
      de: 'Pitch für einen Marken-Relaunch: Bevor der Neugeschäfts-Direktor einer Agentur sein Honorar nennt, stellt er der Marketingleiterin eines Möbelherstellers eine Folie voran: „Vergleichbare Relaunch-Projekte liegen in unserer Branche bei rund 240.000 Euro." Erst danach präsentiert er sein Angebot: 175.000 Euro. Die Marketingleiterin hatte intern mit 90.000 Euro gerechnet — doch nach der ersten Zahl klingt sein Angebot für sie plötzlich wie ein fairer Kompromiss.',
      en: 'Pitch for a brand relaunch: before the agency\'s new-business director states his fee, he opens with a slide for the furniture manufacturer\'s marketing lead: "Comparable relaunch projects in our sector run to about €240,000." Only then does he present his own offer: €175,000. The marketing lead had budgeted €90,000 internally — yet after that first figure, his offer suddenly sounds to her like a fair compromise.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Die zuerst genannte Zahl — 240.000 Euro — setzt den Bezugspunkt, an dem alles Folgende gemessen wird. Sie muss dafür nicht einmal einschlägig sein; sie verschiebt schlicht die Skala, sodass 175.000 Euro als Nachlass erscheinen statt als das Doppelte des eigenen Budgets. Legitim einsetzen kannst du das, indem du einen echten, belegbaren Referenzwert an den Anfang stellst — etwa eine transparente Marktspanne, die deinem Gegenüber die Einordnung erleichtert. Erkennen und kontern: Bemerke, welche Zahl zuerst im Raum liegt, und leite deinen eigenen Wert unabhängig her, bevor du auf das Angebot reagierst — verhandle von deiner Zahl aus, nicht von seiner. Framing wäre es, wenn dieselbe Summe unterschiedlich verpackt würde („nur 480 Euro pro Tag" statt „175.000 Euro") — hier wirkt aber eine vorgeschaltete Vergleichszahl, nicht die Darstellung derselben Zahl. Der Köder-Effekt bräuchte ein Optionsset mit einer bewusst unterlegenen dritten Variante — es liegt nur ein einziges Angebot auf dem Tisch. Priming würde über einen sachfremden Reiz einen Begriff voraktivieren; hier ist es eine konkrete, direkt auf den Preis bezogene Ausgangszahl.',
      en: 'Anchoring: the first figure mentioned — €240,000 — sets the reference point against which everything that follows is measured. It need not even be relevant; it simply shifts the scale, so that €175,000 reads as a discount rather than as double the internal budget. You can use this legitimately by putting a genuine, verifiable reference value up front — a transparent market range, say, that helps your counterpart place the offer. To spot and counter it: notice which number lands first, and derive your own value independently before you react to the offer — negotiate from your figure, not from theirs. Framing would be the same sum packaged differently ("just €480 a day" instead of "€175,000") — but here a pre-positioned comparison figure is doing the work, not the presentation of one and the same number. The decoy effect would require an option set with a deliberately inferior third variant — there is only a single offer on the table. Priming would pre-activate a concept through an unrelated cue; here it is a concrete opening number tied directly to the price.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'framing', 'decoy_effect', 'priming'],
  },
  {
    id: 'backfill-anchoring-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Vertragsverlängerung mit eurer Media-Monitoring-Agentur: Als Kommunikationsleiterin sitzt du im Renewal-Call, in dem der Vertriebsleiter die Runde eröffnet: „Der Listenpreis für euren Leistungsumfang liegt inzwischen bei 320.000 Euro im Jahr." Ihr habt letztes Jahr 210.000 Euro gezahlt. Nach kurzer Pause schiebt er nach: „Als langjährigem Partner biete ich euch 260.000 an." Deine interne Bedarfsrechnung und ein frisches Wettbewerbsangebot legen eher 190.000 Euro nahe.',
      en: 'Renewal with your media-monitoring agency: as head of communications you are in the renewal call when the sales director opens the round: "The list price for your scope is now €320,000 a year." You paid €210,000 last year. After a short pause he adds: "As a long-standing partner, I can offer you €260,000." Your own needs analysis and a fresh competitor quote point closer to €190,000.',
    },
    options: [
      {
        de: 'Ich lasse mich vom Listenpreis nicht auf die Skala ziehen: Ich benenne ruhig, dass 320.000 kein Bezugspunkt für uns sind, lege meine unabhängig hergeleitete Zahl samt Wettbewerbsangebot daneben und verhandle von 190.000 aus.',
        en: 'I refuse to be pulled onto the list-price scale: I calmly note that €320,000 is not a reference point for us, put my independently derived figure and the competitor quote on the table, and negotiate from €190,000.',
      },
      {
        de: 'Da 260.000 klar unter dem Listenpreis von 320.000 liegen, greife ich zu — ein solcher Nachlass ist für einen langjährigen Partner ein gutes Ergebnis.',
        en: 'Since €260,000 sits clearly below the €320,000 list price, I take it — a discount like that is a good outcome for a long-standing partner.',
      },
      {
        de: 'Ich schlage die Mitte zwischen seinen 260.000 und unseren 210.000 vom Vorjahr vor, also rund 235.000 — so treffen wir uns fair in der Mitte.',
        en: 'I propose splitting the difference between his €260,000 and our €210,000 from last year, so about €235,000 — a fair meeting in the middle.',
      },
      {
        de: 'Ich werte den überhöhten Listenpreis als Vertrauensbruch, breche den Call ab und kündige an, künftig ausschließlich über den Wettbewerber zu gehen.',
        en: 'I treat the inflated list price as a breach of trust, end the call, and announce that we will go exclusively with the competitor from now on.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vertriebsleiter wirft mit 320.000 Euro einen Anker — eine hohe Ausgangszahl, an der jeder folgende Betrag gemessen wird, sodass 260.000 wie ein Entgegenkommen wirken. Wirksam ist das, weil ein einmal gesetzter Referenzpunkt die Skala verschiebt, selbst wenn du weißt, dass er willkürlich hoch ist. Die beste Antwort neutralisiert genau das: Du erkennst den Anker, benennst ihn als für euch irrelevant und ersetzt ihn durch einen eigenen, unabhängig hergeleiteten Wert — die stärkste Gegenmaßnahme gegen Anchoring ist ein selbst gesetzter Gegenanker aus belastbaren Daten. Option zwei fällt voll darauf herein, indem sie den Nachlass am Listenpreis statt am tatsächlichen Bedarf misst — „unter 320.000" ist nur relativ zu einer Zahl gut, die er frei gewählt hat. Die Mitte vorzuschlagen bleibt im Ankerraum gefangen: 235.000 ist bloß der Kompromiss zwischen zwei fremden Zahlen und immer noch weit über deiner Kalkulation. Den Call abzubrechen überkorrigiert — ein hoher Anker ist ein normaler Verhandlungszug, kein Betrug; du verschenkst Verhandlungsmasse und eine funktionierende Partnerschaft, statt den Anker einfach zu ersetzen.',
      en: 'The sales director drops an anchor at €320,000 — a high opening number against which every later figure is measured, so that €260,000 looks like a concession. It works because a reference point, once set, shifts the scale even when you know it was pitched arbitrarily high. The best response neutralises exactly that: you recognise the anchor, name it as irrelevant to you, and replace it with your own independently derived value — the strongest counter to anchoring is a counter-anchor of your own built from solid data. Option two falls for it completely by measuring the discount against the list price rather than against your actual need — "below €320,000" is only good relative to a number he chose freely. Splitting the difference stays trapped inside the anchored zone: €235,000 is merely the compromise between two of his figures and still far above your calculation. Ending the call over-corrects — a high anchor is a normal negotiating move, not fraud; you throw away bargaining room and a working partnership instead of simply replacing the anchor.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'framing'],
  },
  {
    id: 'backfill-anchoring-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Die Schätzungen der Runde wandern nach oben, vor allem weil ___.',
      en: 'Complete the sentence: The room\'s estimates drift upward, mainly because ___.',
    },
    scenario: {
      de: 'Reichweiten-Workshop vor einer Kampagne: Die Teamleiterin bittet alle sieben Kolleginnen und Kollegen, unabhängig zu schätzen, wie viele Menschen der geplante Bewegtbild-Spot organisch erreichen wird. Der erste, der spricht, wirft in den Raum: „Mindestens zwei Millionen." Reihum liegen die Schätzungen danach zwischen 1,5 und 2,2 Millionen — obwohl die Kennzahlen vergleichbarer Spots eher auf 400.000 hindeuten.',
      en: 'Reach workshop before a campaign: the team lead asks all seven colleagues to estimate independently how many people the planned video spot will reach organically. The first to speak tosses out: "At least two million." Around the table, the estimates that follow land between 1.5 and 2.2 million — even though the metrics from comparable spots point closer to 400,000.',
    },
    options: [
      {
        de: 'die zuerst genannte Zahl als Bezugspunkt dient, um den herum alle weiteren Schätzungen kreisen, unabhängig von den tatsächlichen Kennzahlen (Ankereffekt)',
        en: 'the first number spoken serves as a reference point around which all later estimates cluster, regardless of the actual metrics (anchoring)',
      },
      {
        de: 'der erste Redebeitrag als Erstes fällt und deshalb am besten erinnert und am stärksten gewichtet wird (Primäreffekt der Reihenfolge)',
        en: 'the first contribution comes first and is therefore best remembered and most heavily weighted (primacy order effect)',
      },
      {
        de: 'die anderen sich der Mehrheit anschließen, weil sie annehmen, so viele Kolleginnen könnten nicht irren (Soziale Bewährtheit)',
        en: 'the others fall in line with the majority, assuming that so many colleagues cannot be wrong (social proof)',
      },
      {
        de: 'dieselbe Reichweite bewusst positiv verpackt wird, um sie größer wirken zu lassen (Framing)',
        en: 'the same reach is deliberately packaged in positive terms to make it look bigger (framing)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Eine zuerst laut genannte Zahl zieht anschließende numerische Schätzungen zu sich heran — selbst bei Fachleuten und selbst dann, wenn eigentlich unabhängig geschätzt werden sollte. Der verräterische Marker ist die Streuung: Alle clustern eng um zwei Millionen, während die harten Kennzahlen woanders liegen. Legitim einsetzen lässt sich das in Moderation, indem du bewusst mit einem realistischen Referenzwert eröffnest, um eine Runde produktiv einzunorden. Erkennen und kontern: Lass unabhängige Schätzungen verdeckt und schriftlich abgeben, bevor die erste Zahl fällt — so kann kein Anker die Runde kapern. Der Primäreffekt der Reihenfolge wäre nah, erklärt aber, warum ein Beitrag besser erinnert oder gewichtet wird — hier geht es nicht um Erinnerung, sondern darum, dass eine konkrete Zahl die Skala verschiebt. Soziale Bewährtheit bräuchte Orientierung an einer sichtbaren Mehrheitsmeinung; hier zieht die Zahl selbst, nicht ihre Verbreitung. Framing würde dieselbe Reichweite anders darstellen (etwa als Prozentwert), statt über eine vorgeschaltete Ausgangszahl zu wirken.',
      en: 'Anchoring: a number said out loud first pulls subsequent numerical estimates toward it — even among experts, and even when people were meant to estimate independently. The tell-tale marker is the spread: everyone clusters tightly around two million while the hard metrics sit elsewhere. It can be used legitimately in facilitation by opening deliberately with a realistic reference value to calibrate a room productively. To spot and counter it: collect independent estimates silently and in writing before the first number is spoken — that way no anchor can hijack the round. The primacy order effect is close but explains why a contribution is better remembered or weighted — this is not about memory but about a concrete number shifting the scale. Social proof would require people taking their cue from a visible majority view; here it is the number itself that pulls, not how widely it is shared. Framing would present the same reach differently (as a percentage, say) rather than working through a pre-positioned opening figure.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'primacy_order_effects', 'social_proof', 'framing'],
  },
];
