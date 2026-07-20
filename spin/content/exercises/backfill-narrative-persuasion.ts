// Backfill: 3 Übungen für narrative_persuasion (Narrative Persuasion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Technik-Eintrag ist fertig; hier werden NUR Übungen ergänzt.
// Kein evidenceTier gesetzt (confidence 0.86, evidenceQuality 'high')
// → nicht 'frontier': Wirkung darf geprüft werden, kein Begriffswissen-Zwang.
// Kein seriousMode. Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const backfillNarrativePersuasion: Exercise[] = [
  {
    id: 'backfill-narrative_persuasion-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt diesen Auftritt?',
      en: 'Which technique carries this appearance?',
    },
    scenario: {
      de: 'Town-Hall zur Werksverlagerung bei einem Automobilzulieferer: Statt Zahlen zu Kosten, Zeitplan und Sozialplan zu nennen, erzählt der Transformationsleiter den rund 400 Mitarbeitenden die Geschichte von Vorarbeiter Kruse — vom ersten verunsicherten Morgen über den Umzug bis zur neuen Schichtleiterstelle am anderen Standort, Szene für Szene, mit Namen, Dialogen und Wendepunkten. Die Halle folgt gebannt; Nachfragen zum Sozialplan bleiben aus.',
      en: 'Town hall on relocating a plant at an automotive supplier: instead of giving figures on cost, timeline and the redundancy package, the transformation lead tells the roughly 400 employees the story of shop-floor supervisor Kruse — from the first uneasy morning through the move to a new shift-manager post at the other site, scene by scene, with names, dialogue and turning points. The hall follows spellbound; questions about the redundancy package never come.',
    },
    options: [
      { de: 'Narrative Persuasion (Erzählstrategie)', en: 'Narrative persuasion' },
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
      { de: 'Übereilte Verallgemeinerung', en: 'Hasty generalization' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Narrative Persuasion: Eine durchgehende Geschichte mit Figur, Szenen und Handlungsbogen zieht das Publikum in die Erzählung hinein (Transportation) — und wer in eine Geschichte versunken ist, argumentiert innerlich weniger dagegen. Genau deshalb versiegen hier die Nachfragen: Die Erzählung ersetzt die Prüfung des Sozialplans. Legitim einsetzen: Ein echter, repräsentativer Fall macht eine abstrakte Veränderung greifbar — professionell bleibt es, wenn die Geschichte die Daten illustriert und nicht an ihre Stelle tritt. Erkennen und kontern: Frag dich, wie typisch dieser eine Verlauf ist, und hol die aggregierte Ebene zurück („Wie sieht der Sozialplan für alle 400 aus, nicht nur für Kruse?"). Emotionale Appelle wären die naheliegende Verwechslung — sie setzen ein blankes Gefühl (Angst, Mitgefühl) an die Stelle des Arguments, ganz ohne erzählte Episode; hier trägt gerade der Handlungsbogen, nicht ein einzelner Gefühlsreiz. Framing rückte denselben Sachverhalt in einen bestimmten Deutungsrahmen („Zukunftschance statt Verlust") und argumentierte darin — der Transformationsleiter setzt aber keine Perspektive, er erzählt eine Geschichte. Übereilte Verallgemeinerung läge erst vor, wenn er aus Kruses Fall ausdrücklich schlösse, allen gehe es so — dieser explizite Schluss fällt nicht; die Wirkung entsteht durch das Versinken in der Geschichte, nicht durch einen ausgesprochenen Fehlschluss.',
      en: 'Narrative persuasion: a sustained story with a character, scenes and an arc pulls the audience into the narrative (transportation) — and someone immersed in a story argues back against it less. That is exactly why the questions dry up here: the story stands in for scrutiny of the redundancy package. Used legitimately: a real, representative case makes an abstract change tangible — it stays professional when the story illustrates the data rather than taking its place. To spot and counter it: ask how typical this one trajectory is and pull the aggregate level back in ("What does the package look like for all 400, not just for Kruse?"). Emotional appeal is the obvious confusion — it puts a bare feeling (fear, compassion) in the place of the argument, with no narrated episode at all; here it is the arc that does the work, not a single emotional trigger. Framing would place the same facts within a particular interpretive frame ("a chance for the future rather than a loss") and argue inside it — but the transformation lead sets no perspective, he tells a story. Hasty generalization would apply only if he explicitly concluded from Kruse\'s case that everyone fares the same — that explicit inference is never drawn; the effect comes from being immersed in the story, not from a stated fallacy.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'framing', 'hasty_generalization'],
  },
  {
    id: 'backfill-narrative_persuasion-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Kampagne einer Krankenversicherung für einen neuen Vorsorgetarif: Als Kommunikationsleiterin bekommst du den Agenturentwurf — ein vierminütiger, dokumentarisch erzählter Film, der ausschließlich einer Versicherten, „Lena", folgt: Diagnose, bange Wochen, dank früher Vorsorge glimpflicher Ausgang, Szene für Szene mit Musik und Off-Stimme. Keine Angabe, für wie viele Versicherte die Vorsorge etwas ändert, keine Häufigkeiten.',
      en: 'Campaign by a health insurer for a new preventive-care plan: as head of communications you receive the agency draft — a four-minute, documentary-style film that follows a single policyholder, "Lena", and no one else: diagnosis, anxious weeks, a mild outcome thanks to early screening, scene by scene with music and voice-over. No indication of how many policyholders the screening actually changes anything for, no frequencies.',
    },
    options: [
      {
        de: 'Ich behalte Lenas Geschichte als emotionalen Einstieg, verankere sie aber sichtbar an repräsentativen Zahlen (wie vielen die Vorsorge nützt, Basisrate) und markiere sie ausdrücklich als einen Fall — die Erzählung öffnet die Aufmerksamkeit, die Evidenz trägt die Entscheidung.',
        en: 'I keep Lena\'s story as the emotional way in, but anchor it visibly to representative figures (how many the screening helps, the base rate) and mark it explicitly as one case — the story opens attention, the evidence carries the decision.',
      },
      {
        de: 'Ich gebe den Entwurf so frei: Eine einzige starke Geschichte überzeugt nachweislich mehr als jede Statistik, Zahlen würden den Film nur schwächen.',
        en: 'I clear the draft as is: a single strong story demonstrably convinces more than any statistic, and figures would only weaken the film.',
      },
      {
        de: 'Ich streiche die Geschichte ganz und zeige nur die Vorsorge-Statistik und die Tarifkonditionen.',
        en: 'I cut the story entirely and show only the screening statistics and the plan\'s terms.',
      },
      {
        de: 'Ich lasse den Film noch immersiver schneiden — länger, mit schärferen Wendepunkten und engerer Identifikation mit Lena —, um die Wirkung zu vertiefen.',
        en: 'I have the film cut even more immersively — longer, with sharper turning points and tighter identification with Lena — to deepen the effect.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Entwurf ist reine Narrative Persuasion: Die durchgehende Geschichte transportiert das Publikum und senkt das Gegenargumentieren — dabei bleibt offen, für wie viele Versicherte Lenas Verlauf überhaupt repräsentativ ist. Die beste Option nutzt den legitimen Kern (die Geschichte als Türöffner) und stellt die repräsentative Evidenz dahinter; das ausdrückliche „ein Fall" schützt vor dem stillen Schluss „so geht es allen". Den Entwurf unverändert freizugeben wirkt plausibel, weil Geschichten tatsächlich stärker überzeugen als nackte Statistik (Green & Brock 2000) — aber „überzeugt" ist nicht „gut informiert entschieden"; eine einzelne Geschichte täuscht über die Typik und lässt die Versicherten die Häufigkeit selbst raten. Die Geschichte ganz zu streichen wirft den berechtigten Kern weg: Eine reine Statistik-Tafel wird überblättert, gerade weil sie niemanden hineinzieht. Den Film noch immersiver zu schneiden vertieft zwar die Transportation — aber genau da verläuft die Grenze: Du würdest die Prüfbereitschaft des Publikums gegen Dramatik eintauschen, statt sie zu erhalten.',
      en: 'The draft is pure narrative persuasion: the sustained story transports the audience and lowers counter-arguing — while leaving open how representative Lena\'s trajectory even is. The best option uses the legitimate core (the story as a door-opener) and places the representative evidence behind it; the explicit "one case" guards against the silent leap to "everyone fares this way". Clearing the draft unchanged seems plausible because stories really do convince more than bare statistics (Green & Brock 2000) — but "convinced" is not "decided while well informed"; a single story misleads about typicality and leaves policyholders to guess the frequency themselves. Cutting the story entirely throws away the legitimate core: a bare statistics panel gets skipped precisely because it draws no one in. Cutting the film to be even more immersive does deepen the transportation — but that is exactly where the line runs: you would be trading the audience\'s readiness to scrutinise for drama instead of preserving it.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'hasty_generalization'],
  },
  {
    id: 'backfill-narrative_persuasion-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Mit diesem Auftritt versucht die Gründerin, ___.',
      en: 'Complete the sentence: With this appearance, the founder is trying to ___.',
    },
    scenario: {
      de: 'Bühnen-Keynote einer Fintech-Gründerin vor Investoren und Fachpresse zur neuen Finanzierungsrunde: Sie nennt keine Nutzerzahlen, keine Marge, keine Kohorten. Stattdessen erzählt sie zwölf Minuten lang die durchgehende Geschichte ihrer Großmutter — von der abgelehnten Kreditanfrage am Küchentisch über schlaflose Jahre bis zu dem Moment, in dem die erste Kundin per App tatsächlich ihren Kredit bekommt. Der Saal ist still, dann langer Applaus.',
      en: 'Stage keynote by a fintech founder in front of investors and trade press for the new funding round: she gives no user numbers, no margin, no cohorts. Instead, for twelve minutes she tells the continuous story of her grandmother — from the loan request turned down at the kitchen table, through sleepless years, to the moment the first customer actually gets her loan through the app. The room falls silent, then long applause.',
    },
    options: [
      {
        de: 'über eine durchgehend erzählte Geschichte mit Figur und Handlungsbogen das Publikum so einzunehmen, dass es die fehlenden Kennzahlen nicht einfordert (Narrative Persuasion)',
        en: 'draw the audience in with a continuously told story that has a character and an arc, so they never demand the missing metrics (narrative persuasion)',
      },
      {
        de: 'allein ein blankes Gefühl (Rührung, Mitgefühl) an die Stelle des Sacharguments zu setzen (Emotionale Appelle)',
        en: 'put a bare feeling (being moved, compassion) alone in the place of the factual argument (emotional appeal)',
      },
      {
        de: 'mit einem vorgeschalteten Reiz ein späteres, separates Urteil unbemerkt zu bahnen (Priming)',
        en: 'use a stimulus placed in advance to unnoticeably prime a later, separate judgement (priming)',
      },
      {
        de: 'durch betonte Ähnlichkeit und Sympathie die Zustimmung des Publikums zu gewinnen (Liking)',
        en: 'win the audience over through emphasised similarity and likeability (liking)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Narrative Persuasion: Nicht ein einzelner Reiz wirkt hier, sondern die zwölf Minuten durchgehende Geschichte mit Figur, Küchentisch-Szene und Bogen bis zur ersten Kundin — das Versinken in dieser Erzählung (Transportation) verdrängt die Frage nach Nutzerzahlen und Marge. Legitim einsetzen: Eine Geschichte macht einen abstrakten Wert („Kredit für Übersehene") anschaulich und ist ein starker Einstieg — tragfähig bleibt sie, wenn die Kohortenzahlen auf der nächsten Folie folgen. Erkennen und kontern: Zieh die Geschichte gedanklich ab und prüf, welche belegbare Aussage übrig bleibt; bleibt zu Nutzern, Marge und Bindung nichts stehen, hat die Erzählung den Pitch getragen. Emotionale Appelle wären ein blankes Gefühl ohne erzählte Episode — hier liegt ein ausgeführter Handlungsbogen vor, kein einzelner Gefühlsreiz. Priming bräuchte einen vorgeschalteten Reiz, der ein späteres, getrenntes Urteil unbemerkt bahnt; hier ist die Geschichte nicht Vorlauf, sondern selbst die offen vorgetragene Botschaft. Liking gewönne Zustimmung über Ähnlichkeit und Sympathie („ich bin wie ihr") — die Großmutter-Erzählung arbeitet aber nicht über betonte Nähe zum Publikum, sondern über das Hineinziehen in eine Geschichte.',
      en: 'Narrative persuasion: it is not a single trigger at work here but the twelve-minute continuous story with a character, the kitchen-table scene and an arc up to the first customer — being immersed in that narrative (transportation) crowds out the question of user numbers and margin. Used legitimately: a story makes an abstract value ("credit for the overlooked") vivid and is a strong way in — it holds up when the cohort figures follow on the next slide. To spot and counter it: mentally subtract the story and check which verifiable claim is left; if nothing about users, margin and retention survives, the narrative carried the pitch. Emotional appeal would be a bare feeling with no narrated episode — here there is a developed arc, not a single emotional trigger. Priming would need a stimulus placed in advance that unnoticeably shapes a later, separate judgement; here the story is not a run-up but is itself the openly delivered message. Liking would win agreement through similarity and likeability ("I am one of you") — but the grandmother story works not through emphasised closeness to the audience but through drawing them into a narrative.',
    },
    points: 10,
    primaryTechniqueId: 'narrative_persuasion',
    relatedTechniques: ['narrative_persuasion', 'emotional_appeal', 'priming', 'liking'],
  },
];
