import type { Exercise } from '../../types';

// nudging — Phase 3 densification batch.
export const nudgingP3Exercises: Exercise[] = [
  {
    id: 'nu-p3-1',
    type: 'scenario-quiz',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Techniken wirken hier zusammen. Welche ist der dominante Treiber des gemessenen Effekts?',
      en: 'Several techniques work together here. Which one is the dominant driver of the measured effect?',
    },
    scenario: {
      de: 'Ein Energieversorger will mehr Kundinnen und Kunden auf seinen Grüntarif bringen. In einem A/B-Test des Anmeldeflusses werden drei Änderungen kombiniert: (1) Der Grüntarif ist im Auswahlformular jetzt vorausgewählt, statt wie bisher der Standardtarif. (2) Eine Zeile blendet ein: „Die Mehrheit der Neukund:innen in deiner Region wählt grün." (3) Ganz oben erscheint zuerst das teure Premium-Grünpaket, wodurch der normale Grüntarif preislich moderat wirkt. Die Grün-Abschlüsse steigen deutlich. Eine anschließende Auswertung, die jede Änderung einzeln isoliert, zeigt: Allein die Vorauswahl erklärt den Großteil des Zuwachses, während Regionshinweis und Preisreihenfolge jeweils nur wenig beitragen.',
      en: 'An energy provider wants to move more customers onto its green tariff. In an A/B test of the sign-up flow, three changes are combined: (1) the green tariff is now pre-selected in the choice form instead of the standard tariff as before; (2) a line appears reading “The majority of new customers in your region choose green”; (3) the expensive premium-green package is shown first at the top, making the ordinary green tariff look moderately priced. Green sign-ups rise markedly. A follow-up analysis isolating each change individually shows that the pre-selection alone explains the bulk of the increase, while the region line and the price ordering each contribute only marginally.',
    },
    options: [
      {
        de: 'Nudging — die geänderte Voreinstellung, dass der Grüntarif nun vorausgewählt ist.',
        en: 'Nudging — the changed default that now pre-selects the green tariff.',
      },
      {
        de: 'Sozialer Beweis — der Hinweis, dass die Mehrheit in der Region grün wählt.',
        en: 'Social proof — the note that the majority in the region chooses green.',
      },
      {
        de: 'Anchoring — das zuerst gezeigte, teure Premium-Grünpaket als Preisanker.',
        en: 'Anchoring — the expensive premium-green package shown first as a price anchor.',
      },
      {
        de: 'Framing — die Darstellung dieses Tarifs als die „grüne, saubere" Wahl.',
        en: 'Framing — presenting this tariff as the “green, clean” choice.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Alle vier Techniken sind real vorhanden — die Expertenaufgabe ist, den dominanten Treiber zu isolieren. Der Mechanismus des Nudging: Menschen behalten Voreinstellungen aus Trägheit und weil ein Default als stille Empfehlung gelesen wird; deshalb verschieben Defaults Verhalten oft stärker als jede einzelne Botschaft. Genau das bestätigt die Einzelauswertung — die Vorauswahl allein trägt den Großteil des Effekts. Sozialer Beweis (der Regionshinweis) und Anchoring (das Premiumpaket zuerst) wirken zwar mit, erklären laut Isolationsanalyse aber nur einen kleinen Teil; sie sind Verstärker, nicht der Motor. Framing (die „grüne/saubere" Etikettierung) verändert hier keine Kernaussage und ist am schwächsten belegt. Ethische Grenze: Ein Default zugunsten von Ökostrom ist vertretbar, solange der Standardtarif gleich sichtbar und mit einem Klick wählbar bleibt und die Vorauswahl offen erkennbar ist; manipulativ würde es, wenn der Wechsel versteckt oder erschwert würde — dann kippt der Nudge zum Dark Pattern.',
      en: 'All four techniques are genuinely present — the expert task is to isolate the dominant driver. The nudging mechanism: people keep defaults out of inertia and because a default reads as a silent recommendation, so defaults often shift behavior more than any single message. The isolation analysis confirms exactly this — the pre-selection alone carries the bulk of the effect. Social proof (the region line) and anchoring (the premium package shown first) do contribute, but the isolation analysis shows each explains only a small share; they are amplifiers, not the engine. Framing (the “green/clean” labeling) changes no core claim here and is the weakest of the four. Ethical line: a default in favor of green energy is defensible as long as the standard tariff stays equally visible, selectable in one click, and the pre-selection is openly recognizable; it becomes manipulative if switching is hidden or obstructed — then the nudge tips into a dark pattern.',
    },
    points: 20,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'social_proof', 'anchoring', 'framing'],
  },
  {
    id: 'nu-p3-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik wird hier eingesetzt?',
      en: 'Which technique is being used here?',
    },
    scenario: {
      de: 'In einem Bürogebäude kleben grüne Fußabdrücke auf dem Boden, die vom Eingang zur Treppe führen, und ein Schild auf Augenhöhe lädt freundlich zum Treppensteigen ein. Der Aufzug bleibt direkt daneben voll verfügbar — niemand wird zu etwas gezwungen.',
      en: 'In an office building, green footprints on the floor lead from the entrance to the staircase, and a sign at eye level warmly invites people to take the stairs. The elevator right next to it stays fully available — no one is forced to do anything.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist ein Nudge in Reinform: Die Umgebung wird so gestaltet, dass die gewünschte Wahl (Treppe) sichtbarer und naheliegender wird — ohne eine Option zu verbieten oder zu verteuern. Der Aufzug bleibt gleichwertig erreichbar, also bleibt die Wahlfreiheit erhalten; genau das unterscheidet den legitimen Nudge vom Zwang. Priming würde eine Assoziation vorab aktivieren, um eine spätere, andere Entscheidung zu beeinflussen — hier wird die Wahl unmittelbar über die Umgebung gelenkt. Framing würde dieselbe Information anders formulieren, Sozialer Beweis würde auf das Verhalten anderer verweisen — beides fehlt vollständig.',
      en: 'This is a nudge in pure form: the environment is arranged so that the desired choice (the stairs) becomes more visible and more convenient — without forbidding or pricing out any option. The elevator stays equally reachable, so freedom of choice is preserved; that is exactly what separates a legitimate nudge from coercion. Priming would pre-activate an association to influence a later, different decision — here the choice is steered directly through the environment. Framing would reword the same information, social proof would point to what others do — both are entirely absent.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'priming', 'framing'],
  },
  {
    id: 'nu-p3-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?',
      en: 'Which persuasion technique is primarily being used here?',
    },
    scenario: {
      de: 'Um die Meeting-Müdigkeit zu senken, stellt die IT das gemeinsame Kalender-Tool um: Neue Termine dauern jetzt standardmäßig 25 statt 30 und 50 statt 60 Minuten, sodass automatisch kurze Pausen entstehen. Wer will, kann die Länge mit einem Klick auf jeden beliebigen Wert ändern; nichts wird blockiert. Über ein Quartal sinkt die durchschnittliche Meeting-Dauer spürbar.',
      en: 'To reduce meeting fatigue, IT reconfigures the shared calendar tool: new meetings now default to 25 minutes instead of 30 and 50 instead of 60, so short breaks arise automatically. Anyone can change the length to any value with one click; nothing is blocked. Over a quarter, average meeting duration falls noticeably.',
    },
    options: [
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der treibende Hebel ist Nudging: Eine geänderte Voreinstellung (Default) verschiebt das Verhalten, weil die meisten Menschen den vorgeschlagenen Wert schlicht übernehmen — die Entscheidungsarchitektur ändert sich, die Wahlfreiheit bleibt aber voll erhalten (jede Länge ist mit einem Klick möglich). Anchoring ist der verlockendste Fehlgriff, weil „25 Minuten" wie ein Zahlenanker aussieht; ein Anker beeinflusst aber eine Schätzung oder Verhandlung, indem er einen Referenzwert setzt — hier wird nichts geschätzt, sondern eine Voreinstellung aus Bequemlichkeit behalten. Framing würde dieselbe Information anders formulieren (etwa „gewinne 5 Minuten" statt „verliere nichts"); der Termintext bleibt aber unverändert. Priming würde vorab eine Assoziation aktivieren, die eine spätere Entscheidung färbt. Ethische Grenze: legitim, weil das Ziel (weniger Erschöpfung) im Interesse der Beschäftigten liegt und das Überschreiben jederzeit mühelos möglich ist.',
      en: 'The driving lever is nudging: a changed default shifts behavior because most people simply keep the suggested value — the choice architecture changes while freedom of choice remains fully intact (any length is one click away). Anchoring is the most tempting miss because “25 minutes” looks like a numeric anchor; but an anchor influences an estimate or negotiation by setting a reference value — here nothing is being estimated, a default is merely kept out of convenience. Framing would reword the same information (say “gain 5 minutes” instead of “lose nothing”); but the meeting text is unchanged. Priming would pre-activate an association that colors a later decision. Ethical line: legitimate, because the goal (less fatigue) is in the employees’ interest and overriding the default is effortless at any time.',
    },
    points: 10,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'anchoring', 'framing'],
  },
  {
    id: 'nu-p3-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als verantwortliche Person für die Terminkommunikation vor?',
      en: 'As the person responsible for appointment communications, how do you proceed?',
    },
    scenario: {
      de: 'Eine Klinik verliert viel Kapazität durch Nichterscheinen zu gebuchten Terminen. Die Leitung will die No-Show-Quote senken, ohne Patient:innen zu zwingen oder abzuschrecken. Dir liegen vier Vorschläge vor.',
      en: 'A clinic loses a lot of capacity to no-shows for booked appointments. Leadership wants to lower the no-show rate without coercing or deterring patients. Four proposals are on your desk.',
    },
    options: [
      {
        de: 'Ich baue Reibung ab: Die Bestätigung enthält einen Ein-Klick-Kalendereintrag, am Vortag geht eine freundliche Erinnerung raus, und das Verschieben ist genauso einfach wie das Bestätigen. Die Umgebung erleichtert das Erscheinen, hält aber Absage und Verschiebung gleichwertig und transparent offen.',
        en: 'I reduce friction: the confirmation includes a one-tap calendar entry, a friendly reminder goes out the day before, and rescheduling is just as easy as confirming. The setup makes attending easier while keeping cancellation and rescheduling equally easy and transparent.',
      },
      {
        de: 'Ich verstecke den Absage-Link tief in den Einstellungen und lasse Stornierungen nur telefonisch über eine Hotline mit langen Wartezeiten zu — dann erscheinen die meisten einfach.',
        en: 'I bury the cancellation link deep in the settings and only allow cancellations by phone via a hotline with long hold times — then most people just show up.',
      },
      {
        de: 'Ich verschicke einfach häufiger dieselbe Standard-E-Mail, in der Hoffnung, dass die bloße Wiederholung wirkt.',
        en: 'I simply send the same standard email more often, hoping that sheer repetition does the trick.',
      },
      {
        de: 'Ich setze bei der Buchung ein vorausgewähltes Häkchen für eine 50-€-No-Show-Gebühr ins Kleingedruckte, das kaum jemand bemerkt.',
        en: 'At booking I place a pre-ticked box for a €50 no-show fee in the fine print that almost no one notices.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nur Option 1 (Index 0) ist der legitime Nudge und zugleich die beste Wahl unter allen drei Maßstäben — Wirksamkeit, Ethik und Recht. Reibungsabbau plus rechtzeitige Erinnerung sind gut belegte Hebel gegen No-Shows; entscheidend ist, dass Absage und Verschiebung genauso leicht bleiben — so bleibt die Wahlfreiheit real erhalten. Option 2 (Index 1) erschwert den Ausstieg gezielt und macht aus dem Nudge ein Dark Pattern: Das erzeugt Reaktanz, Beschwerden und rechtliche Risiken, sobald es auffällt. Option 3 (Index 2) ist bloße Wiederholung ohne Änderung der Entscheidungsarchitektur — sie nervt, senkt die Öffnungsrate und wirkt kaum. Option 4 (Index 3) ist ein verstecktes vorausgewähltes Häkchen mit versteckter Gebühr: doppelt problematisch, weil es täuscht und im Verbraucher- und Vertragsrecht angreifbar ist (überraschende Klausel, fehlende aktive Zustimmung). Die Grenze des Nudging: Verhalten erleichtern ja — die gleichwertige Alternative verstecken oder Zustimmung erschleichen nein.',
      en: 'Only option 1 (index 0) is the legitimate nudge and simultaneously the best choice on all three yardsticks — effectiveness, ethics and law. Reducing friction plus a timely reminder are well-evidenced levers against no-shows; the crucial point is that cancelling and rescheduling stay just as easy — so freedom of choice genuinely remains. Option 2 (index 1) deliberately obstructs the exit and turns the nudge into a dark pattern: it breeds reactance, complaints and legal risk once noticed. Option 3 (index 2) is mere repetition with no change to the choice architecture — it annoys, lowers open rates and barely works. Option 4 (index 3) is a hidden pre-ticked box with a concealed fee: doubly problematic because it deceives and is vulnerable under consumer and contract law (surprising clause, missing active consent). The boundary of nudging: making a behavior easier, yes — hiding the equivalent alternative or sneaking in consent, no.',
    },
    points: 15,
    primaryTechniqueId: 'nudging',
    relatedTechniques: ['nudging', 'dark_patterns', 'repetition'],
  },
];
