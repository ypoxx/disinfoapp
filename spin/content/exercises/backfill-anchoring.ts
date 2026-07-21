// Backfill: 3 Übungen für die bestehende Technik 'anchoring' (Ankereffekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Formatvorbild: paltering-half-truth.ts (Golden Set).
// evidenceTier von 'anchoring': robust (confidence 0.92, evidenceQuality high) —
// Übungen dürfen Wirkung/Erkennung prüfen, keine Frontier-Begriffsschranke.
// Bewusst KEINE Preisverhandlung und KEINE Dublette zu technique.examples
// (Preis-Nachlass, Gehaltsverhandlung, Umfrage-Reihenfolge): eigene Miniaturen
// (Dauer-Schätzung, internes Zielsetzen, Reichweiten-Workshop).
// NICHT in index.ts registriert — Registrierung erfolgt separat.

import type { Exercise } from '../types';

export const backfillAnchoring: Exercise[] = [
  {
    id: 'backfill-anchoring-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik prägt hier die Schätzung der Projektverantwortlichen?',
      en: "Which technique is shaping the project owner's estimate here?",
    },
    scenario: {
      de: 'Kickoff für eine Content-Migration: Bevor die In-House-Projektverantwortliche einer Versicherung ihre eigene Zeitschätzung abgibt, ordnet der Delivery-Lead der beauftragten Agentur ein: „Migrationen in dieser Größenordnung laufen bei uns meist über rund 14 Monate." Erst danach schätzt sie den internen Aufwand — und nennt 12 Monate, obwohl zwei vergleichbare Migrationen im eigenen Haus in je fünf Monaten abgeschlossen waren.',
      en: 'Kickoff for a content migration: before the insurer\'s in-house project owner gives her own time estimate, the delivery lead of the commissioned agency sets the scene: "Migrations on this scale usually run to about 14 months for us." Only then does she estimate the internal effort — and names 12 months, even though two comparable migrations handled in-house each wrapped up in five.',
    },
    options: [
      { de: 'Ankereffekt', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Köder-Effekt (Decoy)', en: 'Decoy effect' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Die zuerst genannte Zahl — rund 14 Monate — setzt den Bezugspunkt, an dem die Projektverantwortliche ihren eigenen Aufwand misst, obwohl ihre Hauszahlen bei fünf Monaten liegen. Der Anker muss dafür nicht einmal belastbar sein; er eicht die Erwartung neu, sodass 12 Monate „nah dran" wirken statt mehr als das Doppelte des internen Erfahrungswerts. Legitim einsetzen kannst du das über Transparenz: Stell deinem Gegenüber einen ehrlichen, belegten Referenzwert voran, damit es eine ungewohnte Größe überhaupt einordnen kann. Erkennen und kontern: Merke dir, welche Zahl zuerst fällt, und leite deine eigene Schätzung unabhängig aus deinen realen Vergleichsdaten her, bevor du auf die fremde Zahl reagierst. Framing wäre es, wenn dieselbe Dauer nur anders verpackt würde („etwas mehr als ein Jahr" statt „14 Monate") — hier wirkt aber eine vorgeschaltete Vergleichszahl, nicht die Darstellung ein und derselben Zahl. Der Köder-Effekt bräuchte ein Set aus Optionen mit einer bewusst unterlegenen Variante — es steht nur eine einzige Kennzahl im Raum. Priming würde über einen sachfremden Reiz einen Begriff voraktivieren; hier ist es eine konkrete, direkt auf die Aufgabe bezogene Ausgangszahl.',
      en: 'Anchoring: the number stated first — about 14 months — sets the reference point against which the project owner measures her own effort, even though her in-house figures sit at five months. The anchor need not even be sound; it simply recalibrates the expectation, so that 12 months feels "close" rather than more than double the internal track record. You can use this legitimately through transparency: put an honest, verifiable reference value in front of your counterpart so they can gauge an unfamiliar figure at all. To spot and counter it: note which number lands first, and derive your own estimate independently from your real comparison data before you react to the outside figure. Framing would be the same duration merely repackaged ("a little over a year" instead of "14 months") — but here a pre-positioned comparison figure does the work, not the presentation of one and the same number. The decoy effect would require a set of options with a deliberately inferior variant — there is only a single figure on the table. Priming would pre-activate a concept through an unrelated cue; here it is a concrete opening number tied directly to the task.',
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
      de: 'Quartalsplanung mit deiner CMO: Als Kommunikationsleiterin sitzt du in der Zielrunde, als die CMO eröffnet: „Die Trust-Index-Spitzenreiter unserer Branche liegen bei 80 Punkten — daran orientieren wir uns." Eure letzte Messung lag bei 48; die Trenddaten der vergangenen vier Quartale legen realistisch etwa 55 nahe. Nach kurzer Pause schiebt sie nach: „Setzen wir 75 als Jahresziel."',
      en: 'Quarterly planning with your CMO: as head of communications you are in the target-setting round when the CMO opens: "The trust-index leaders in our sector sit at 80 points — that\'s our benchmark." Your last measurement was 48; the trend data from the past four quarters realistically points to around 55. After a short pause she adds: "Let\'s set 75 as the annual target."',
    },
    options: [
      {
        de: 'Ich löse das Ziel vom Spitzenwert: Ich benenne ruhig, dass die 80 kein Bezugspunkt für unsere Ausgangslage sind, lege die Trenddaten der letzten vier Quartale daneben und schlage ein daraus hergeleitetes, ambitioniertes Ziel um 60 vor.',
        en: 'I detach the target from the top score: I calmly note that 80 is not a reference point for our starting position, put the trend data from the past four quarters alongside it, and propose an ambitious target of around 60 derived from that.',
      },
      {
        de: 'Da 75 unter dem Spitzenwert von 80 liegt und ambitioniert klingt, übernehme ich es — ein hoch gestecktes Ziel zieht das Team nach oben.',
        en: 'Since 75 sits below the top score of 80 and sounds ambitious, I adopt it — a stretch target pulls the team upward.',
      },
      {
        de: 'Ich schlage die Mitte zwischen ihren 75 und unserer letzten Messung von 48 vor, also rund 62 — so treffen wir uns fair in der Mitte.',
        en: 'I propose splitting the difference between her 75 and our last measurement of 48, so about 62 — a fair meeting in the middle.',
      },
      {
        de: 'Ich werte die 80 als unseriöse Vorgabe, lehne die Zielrunde ab und bestehe darauf, dieses Quartal ganz ohne Trust-Ziel zu planen.',
        en: 'I treat the 80 as a dishonest directive, reject the target-setting round, and insist on planning this quarter with no trust target at all.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die CMO wirft mit 80 Punkten einen Anker — einen hohen Ausgangswert, an dem jedes folgende Ziel gemessen wird, sodass 75 schon wie eine maßvolle Landung wirkt, obwohl eure Trenddaten bei 55 liegen. Wirksam ist das, weil ein einmal gesetzter Referenzpunkt den Maßstab besetzt, selbst wenn du weißt, dass er aus einer fremden Ausgangslage stammt. So nutzt du das professionell: Wenn du selbst am Zug bist, mach den ersten, gut begründeten Vorschlag — eine belastbare Zahl von dir prägt den Rahmen, bevor eine fremde ihn besetzt; ein Anker, den du verantworten kannst, arbeitet für dich. Dagegen hältst du so: Die beste Antwort tut genau das — sie benennt die 80 als für eure Lage irrelevant und ersetzt sie durch ein aus euren Trenddaten hergeleitetes Ziel; der stärkste Konter gegen einen Anker ist ein eigener, datenbelegter Gegenanker. Option zwei übernimmt den Anker ungeprüft und misst „ambitioniert" allein an ihrer Zahl. Die Mitte vorzuschlagen bleibt im Ankerraum gefangen: 62 ist nur der Kompromiss zwischen zwei fremden Werten und noch immer über eurer realistischen Marke. Die Runde ganz abzulehnen überkorrigiert — ein hoher Anker ist ein normaler Planungszug, kein Vertrauensbruch; du verschenkst deinen Einfluss auf das Ziel, statt den Anker einfach zu ersetzen.',
      en: 'The CMO drops an anchor at 80 points — a high opening value against which every subsequent target is measured, so that 75 already looks like a moderate landing even though your trend data sits at 55. It works because a reference point, once set, claims the yardstick even when you know it comes from someone else\'s starting position. Here is the professional use: when it is your turn, make the first, well-founded proposal — a defensible figure from you frames the discussion before an outside one claims it; an anchor you can stand behind works in your favour. Here is how you push back: the best response does exactly that — it names the 80 as irrelevant to your situation and replaces it with a target derived from your trend data; the strongest counter to an anchor is one of your own, backed by data. Option two adopts the anchor unchecked and measures "ambitious" solely against her number. Splitting the difference stays trapped inside the anchored zone: 62 is merely the compromise between two outside values and still above your realistic mark. Rejecting the round outright over-corrects — a high anchor is a normal planning move, not a breach of trust; you throw away your influence over the target instead of simply replacing the anchor.',
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
      en: "Complete the sentence: The room's estimates drift upward, mainly because ___.",
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
        de: 'die anderen sich der Mehrheit anschließen, weil sie annehmen, so viele Kolleginnen könnten nicht irren (Social Proof)',
        en: 'the others fall in line with the majority, assuming that so many colleagues cannot be wrong (social proof)',
      },
      {
        de: 'dieselbe Reichweite bewusst positiv verpackt wird, um sie größer wirken zu lassen (Framing)',
        en: 'the same reach is deliberately packaged in positive terms to make it look bigger (framing)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ankereffekt: Eine zuerst laut genannte Zahl zieht anschließende numerische Schätzungen zu sich heran — selbst bei Fachleuten und selbst dann, wenn eigentlich unabhängig geschätzt werden sollte. Der verräterische Marker ist die Streuung: Alle clustern eng um zwei Millionen, während die harten Kennzahlen woanders liegen. Legitim einsetzen lässt sich das in Moderation, indem du bewusst mit einem realistischen Referenzwert eröffnest, um eine Runde produktiv einzunorden. So schützt du die Runde: Lass unabhängige Schätzungen verdeckt und schriftlich abgeben, bevor die erste Zahl fällt — so kann kein Anker die Runde kapern. Der Primäreffekt der Reihenfolge wäre nah, erklärt aber, warum ein Beitrag besser erinnert oder gewichtet wird — hier geht es nicht um Erinnerung, sondern darum, dass eine konkrete Zahl den Nullpunkt der Schätzung mitzieht. Social Proof bräuchte Orientierung an einer sichtbaren Mehrheitsmeinung; hier zieht die Zahl selbst, nicht ihre Verbreitung. Framing setzte auf den Ton, in dem die Zahl bewertet wird („nur 400.000" gegen „immerhin 400.000") — hier zieht jedoch die zuerst laut genannte Zahl selbst, ganz gleich, wie man sie benennt.',
      en: 'Anchoring: a number said out loud first pulls subsequent numerical estimates toward it — even among experts, and even when people were meant to estimate independently. The tell-tale marker is the spread: everyone clusters tightly around two million while the hard metrics sit elsewhere. It can be used legitimately in facilitation by opening deliberately with a realistic reference value to calibrate a room productively. How to protect the room: collect independent estimates silently and in writing before the first number is spoken — that way no anchor can hijack the round. The primacy order effect is close but explains why a contribution is better remembered or weighted — this is not about memory but about a concrete number dragging the zero point of the estimate with it. Social proof would require people taking their cue from a visible majority view; here it is the number itself that pulls, not how widely it is shared. Framing would turn on the tone in which the figure is judged ("only 400,000" versus "a solid 400,000") — but here it is the number said first that pulls, whatever you call it.',
    },
    points: 10,
    primaryTechniqueId: 'anchoring',
    relatedTechniques: ['anchoring', 'primacy_order_effects', 'social_proof', 'framing'],
  },
];
