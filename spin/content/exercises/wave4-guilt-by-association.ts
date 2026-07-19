// Welle R4: 3 Übungen für guilt_by_association (Kontaktschuld / Guilt by Association).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4GuiltByAssociation: Exercise[] = [
  {
    id: 'w4-guilt_by_association-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt der Vorstandsvorsitzende hier ein?',
      en: 'Which pattern is the chairman using here?',
    },
    scenario: {
      de: 'Vorstandssitzung des Branchenverbands zur Konsultation einer EU-Verordnung: Die Referentin Public Affairs empfiehlt, in der Stellungnahme eine zweijährige Übergangsfrist zu fordern, und legt eine Kostenrechnung dazu vor. Der Vorstandsvorsitzende beendet den Tagesordnungspunkt: „Dieselbe Forderung steht fast wortgleich im Papier dieser radikalen Kampagnengruppe. Wenn wir das übernehmen, stehen wir morgen in einer Reihe mit denen — das brauchen wir inhaltlich gar nicht erst zu diskutieren."',
      en: 'Board meeting of the industry association on an EU regulation consultation: the public affairs officer recommends demanding a two-year transition period in the association\'s submission and presents a cost analysis to support it. The chairman closes the agenda item: "That exact demand appears almost verbatim in the paper of that radical campaign group. If we adopt it, tomorrow we will be lumped in with them — no need to even discuss the substance."',
    },
    options: [
      { de: 'Kontaktschuld (Guilt by Association)', en: 'Guilt by association' },
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Strohmann-Argument', en: 'Straw man' },
      { de: 'Unity / Identitäts-Appell', en: 'Unity / identity appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kontaktschuld: Die Forderung wird nicht an der vorgelegten Kostenrechnung gemessen, sondern an ihrer Nachbarschaft — die bloße Übereinstimmung mit einer abgelehnten Gruppe ersetzt die Prüfung, und die angedrohte Zuordnung („in einer Reihe mit denen") schreckt zugleich jede weitere Wortmeldung ab. Legitim einsetzen: Absender und Umfeld zu prüfen gehört zu deinem Handwerk — wer eine Position sonst noch vertritt, gehört in deine Positionierungs- und Wahrnehmungsplanung; professionell bleibt das aber nur, solange du es als Ergänzung zur Sachprüfung nutzt, nie als ihren Ersatz. Erkennen und kontern: Du erkennst das Muster daran, dass über Herkunft statt Gehalt gesprochen wird — trenn beide Ebenen explizit: „Zwei Fragen: Stimmt die Rechnung? Und wie gehen wir kommunikativ mit der Überschneidung um?" So bleibt das berechtigte Wahrnehmungsthema auf dem Tisch, ohne dass es die Sachentscheidung kapert. Ad Hominem wirkt plausibel, weil auch hier diskreditiert statt argumentiert wird — es greift aber Eigenschaften oder Verhalten einer Person an; die Referentin selbst wird nicht angegriffen, ihre Forderung wird nur über Nähe einsortiert. Der Strohmann liegt nahe, weil die Forderung unfair behandelt wird — verzerrt wird sie jedoch nicht: Sie wird korrekt referiert und allein über die Nachbarschaft entwertet. Der Unity-Appell passt scheinbar wegen des Wir-gegen-die-Rahmens — er mobilisiert aber Zustimmung über gemeinsame Identität; hier läuft es umgekehrt: Eine Position wird über die Fremdgruppe abgewertet.',
      en: 'Guilt by association: the demand is not measured against the cost analysis on the table but judged by the company it keeps — mere overlap with a disliked group replaces scrutiny, and the threatened labelling ("lumped in with them") deters any further contribution at the same time. Used legitimately: vetting senders and their surroundings is part of your craft — knowing who else holds a position feeds your positioning and perception planning; it stays professional only as long as you treat it as a complement to examining the substance, never as its replacement. To spot and counter it: you recognise the pattern when origin is debated instead of merit — separate the two levels explicitly: "Two questions: does the maths hold? And how do we handle the overlap communicatively?" That keeps the legitimate perception issue on the table without letting it hijack the substantive decision. Ad hominem looks plausible because here, too, someone discredits instead of arguing — but it attacks a person\'s own traits or conduct; the officer herself is not attacked, her demand is merely pigeonholed by proximity. The straw man seems close because the demand is treated unfairly — yet it is not distorted: it is quoted accurately and devalued purely by association. The unity appeal appears to fit because of the us-versus-them frame — but it mobilises agreement through shared identity; here it runs the other way round: a position is devalued through the out-group.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_by_association',
    relatedTechniques: ['guilt_by_association', 'ad_hominem', 'straw_man', 'unity_identity'],
  },
  {
    id: 'w4-guilt_by_association-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Anruf einer Wirtschaftsredakteurin, Redaktionsschluss 18 Uhr: Ein Kampagnen-Blog nennt eure neue Recycling-Initiative „reine Fassade" — einziger Beleg: Euer Unternehmen sitzt im selben Branchenverband wie ein Konzern, der wegen Umweltverstößen vor Gericht steht. Inhaltliche Kritik an der Initiative enthält der Beitrag nicht. Die Redakteurin bittet dich als Pressesprecher um eine Stellungnahme.',
      en: 'Call from a business editor, deadline 6 p.m.: a campaign blog calls your new recycling initiative "pure window dressing" — its only evidence: your company sits in the same industry association as a corporation currently in court over environmental violations. The post contains no substantive criticism of the initiative itself. The editor asks you, as press officer, for a statement.',
    },
    options: [
      {
        de: 'Ich trenne in der Stellungnahme Verbindung und Sache: Ich bestätige die Verbandsmitgliedschaft, verweise auf unsere dokumentierten Positionen — einschließlich der Punkte, in denen sie von denen des beklagten Konzerns abweichen — und biete der Redakteurin prüfbares Material zur Initiative selbst an: Ziele, Zwischenstände, externe Auditierung.',
        en: 'In my statement I separate the link from the substance: I confirm the association membership, point to our documented positions — including where they diverge from those of the corporation on trial — and offer the editor verifiable material on the initiative itself: targets, interim results, external auditing.',
      },
      {
        de: 'Ich recherchiere bis 17 Uhr, wer das Kampagnen-Blog finanziert, und gebe der Redakteurin diese Verbindungen als Einordnung mit — dann können die Leser selbst entscheiden, wem sie glauben.',
        en: 'By 5 p.m. I research who funds the campaign blog and hand the editor those connections as context — then readers can decide for themselves whom to believe.',
      },
      {
        de: 'Ich empfehle dem Vorstand noch heute den Austritt aus dem Verband und sage der Redakteurin einen Rückruf zu, sobald die Entscheidung gefallen ist.',
        en: 'I recommend to the board that we leave the association today and promise the editor a call back once the decision is made.',
      },
      {
        de: 'Ich gebe keine Stellungnahme ab: Wer auf so etwas antwortet, adelt den Vorwurf — ohne unser Zutun trägt die Geschichte nicht.',
        en: 'I give no statement: responding to something like this dignifies the accusation — without us, the story has no legs.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorwurf arbeitet mit Kontaktschuld: Die Initiative wird nicht inhaltlich kritisiert, sondern allein über die Verbandsnachbarschaft entwertet — das funktioniert, solange Verbindung und Sache im selben Satz verschmelzen. Die beste Option entkoppelt genau das: Die Faktenebene der Verbindung wird transparent bestätigt (nichts wirkt verdächtiger als eine bestrittene Mitgliedschaft), die Substanz der Initiative wird prüfbar gemacht — damit bekommt die Redakteurin vor Redaktionsschluss Material, das die Lücke im Blog-Beitrag von selbst sichtbar macht. Legitim einsetzen: Dieselbe Trennung ist auch dein Werkzeug in der Gegenrichtung — Umfeld und Interessenlage einer Quelle darfst du benennen, aber als Anlass für genaueres Hinsehen, nicht als Urteil über den Inhalt. Erkennen: Besteht der „Beleg" nur aus Nähe — gleiche Mitgliedschaft, gleiche Bühne, gleicher Unterstützer —, hast du das Muster vor dir. Die Gegen-Recherche zur Blog-Finanzierung wirkt plausibel, weil sie symmetrisch erscheint — sie ist aber gespiegelte Kontaktschuld: Du bestätigst die Spielregel, dass Umfeld statt Inhalt zählt, und lieferst der Redaktion eine Schlammschlacht-Erzählung mit zwei Akteuren. Der Sofort-Austritt überkorrigiert: Er behandelt die Mitgliedschaft als Schuldbeweis und presst eine strategische Abwägung in eine Drei-Stunden-Frist — und eine Stellungnahme hat die Redakteurin dann immer noch nicht. Das Schweigen wirkt souverän, kalkuliert aber falsch: Vor Redaktionsschluss erscheint der Beitrag mit „war für eine Stellungnahme nicht zu erreichen" — der Rahmen des Blogs bleibt unwidersprochen stehen.',
      en: 'The accusation runs on guilt by association: the initiative is not criticised on substance but devalued solely through the company it keeps — which works as long as link and substance stay fused in one sentence. The best option decouples exactly that: the factual link is confirmed transparently (nothing looks more suspicious than a denied membership), and the initiative\'s substance is made verifiable — giving the editor material before deadline that exposes the gap in the blog post on its own. Used legitimately: the same separation is your tool in the other direction — you may name a source\'s surroundings and interests, but as a reason to look closer, not as a verdict on the content. To spot it: when the only "evidence" is proximity — same membership, same stage, same supporter — you are looking at the pattern. Researching the blog\'s funding looks plausible because it seems symmetrical — but it is mirrored guilt by association: you confirm the rule that surroundings beat substance, and hand the newsroom a mudslinging story with two players. The instant exit overcorrects: it treats the membership as proof of guilt and squeezes a strategic decision into a three-hour window — and the editor still has no statement. Silence feels composed but miscalculates: before deadline, the piece runs with "could not be reached for comment" — and the blog\'s frame stands unchallenged.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_by_association',
    relatedTechniques: ['guilt_by_association', 'ad_hominem'],
  },
  {
    id: 'w4-guilt_by_association-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Kommentarspalte unter dem LinkedIn-Beitrag einer Beratungsagentur zu ihrem neuen Whitepaper über KI im Newsroom: Ein Branchenkollege schreibt: „Bezeichnend, wer das teilt — unter den ersten Accounts ist ausgerechnet dieses berüchtigte Clickbait-Portal. Damit ist zum Whitepaper eigentlich alles gesagt." Auf Thesen oder Datenbasis des Papiers geht er nicht ein.',
      en: 'Comment thread under a consultancy\'s LinkedIn post about its new white paper on AI in the newsroom: an industry peer writes: "Telling who shares this — among the first accounts is, of all things, that notorious clickbait outlet. That really says everything about the white paper." He does not engage with the paper\'s claims or data.',
    },
    options: [
      { de: 'Kontaktschuld (Guilt by Association)', en: 'Guilt by association' },
      { de: 'Ad Hominem', en: 'Ad hominem' },
      { de: 'Cherry-Picking / Card-Stacking', en: 'Cherry-picking / card-stacking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kontaktschuld: Das Whitepaper wird über seine Anhängerschaft entwertet — wer etwas teilt, sagt aber nichts darüber, ob es stimmt; „damit ist alles gesagt" ersetzt die inhaltliche Auseinandersetzung durch bloße Nähe. Legitim einsetzen: Zu beobachten, wer deine Inhalte teilt, ist Handwerk — für Resonanzanalyse und Risikoeinschätzung ist die Reichweitenstruktur relevant, nur eben kein Sachargument für oder gegen den Inhalt. Erkennen und kontern: Ein Pauschalurteil ohne ein einziges Wort zum Inhalt ist dein Signal — hol die Diskussion auf die Sachebene zurück („Welche These im Papier halten Sie für falsch?") und lass die Assoziation als das stehen, was sie ist: eine Angabe zur Verbreitung, nicht zur Qualität. Ad Hominem wirkt plausibel, weil abgewertet statt argumentiert wird — es zielt aber auf Eigenschaften oder Verhalten des Urhebers selbst; hier wird weder Agentur noch Autorenteam angegriffen, sondern nur ihr Applaus. Cherry-Picking liegt nahe, weil ein einzelnes Detail (ein teilender Account) herausgegriffen wird — es bezeichnet aber die selektive Auswahl von Belegen innerhalb einer Argumentation; hier gibt es gar keine Argumentation, die Assoziation ersetzt sie vollständig.',
      en: 'Guilt by association: the white paper is devalued through its following — but who shares something says nothing about whether it is true; "that says everything" substitutes mere proximity for engaging with the content. Used legitimately: keeping an eye on who amplifies your content is part of your craft — it feeds your media response analysis and risk assessment, it just is not an argument for or against the content. To spot and counter it: a sweeping verdict without a single word on substance is your signal — pull the discussion back to the merits ("Which claim in the paper do you consider wrong?") and let the association stand for what it is: a fact about distribution, not about quality. Ad hominem looks plausible because someone devalues instead of arguing — but it targets the author\'s own traits or conduct; here neither the consultancy nor its authors are attacked, only their applause. Cherry-picking seems close because a single detail (one sharing account) is singled out — but it names the selective use of evidence within an argument; here there is no argument at all, the association replaces it entirely.',
    },
    points: 10,
    primaryTechniqueId: 'guilt_by_association',
    relatedTechniques: ['guilt_by_association', 'ad_hominem', 'cherry_picking'],
  },
];
