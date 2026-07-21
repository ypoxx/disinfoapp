// Backfill: 3 Übungen für microtargeting (Microtargeting).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillMicrotargeting: Exercise[] = [
  {
    id: 'backfill-microtargeting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt das Growth-Team hier ein?',
      en: 'Which technique is the growth team using here?',
    },
    scenario: {
      de: 'Eine Banking-App verbindet für jede einzelne Nutzerin ihre Transaktionshistorie und ihr In-App-Verhalten mit zugekauften Profildaten und errechnet daraus einen persönlichen „Geldsorgen-Score". Als bei einer Nutzerin mit hohem Score eine Lastschrift platzt, verschickt das Growth-Team noch am selben Abend eine individuell getextete Push-Benachrichtigung: „Kurzfristig knapp, Anna? Dein persönlicher Liquiditäts-Boost steht für dich bereit." Andere Nutzerinnen bekommen zur selben Situation gar keine oder eine ganz andere Nachricht.',
      en: 'A banking app joins each individual user\'s transaction history and in-app behaviour with purchased profile data and computes a personal "money-worry score" from it. When a direct debit bounces for a high-scoring user, the growth team sends an individually worded push notification that same evening: "Bit short this month, Anna? Your personal liquidity boost is ready for you." Other users get no message, or a completely different one, in the same situation.',
    },
    options: [
      { de: 'Emotionale Appelle', en: 'Emotional appeals' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Microtargeting: Der Hebel ist nicht die Botschaft an sich, sondern dass sie aus persönlichen Daten einer einzelnen Person gebaut und exakt auf deren momentane Schwachstelle gezielt wird — hier auf akute Geldsorge, ausgelöst im Sekundentakt der geplatzten Lastschrift. Erkennbar wird die Technik gerade daran, dass verschiedene Nutzerinnen in derselben Lage unterschiedliche oder gar keine Nachricht erhalten: Es wird pro Individuum ausgespielt, nicht an ein Publikum. Der Mechanismus wirkt, weil eine Botschaft, die private Umstände zu kennen scheint, relevanter und vertrauter wirkt und Widerstand senkt (Matz et al. 2017; moderate Evidenz — die Wirkung hängt von Datenqualität und Modellgüte ab). Legitim einsetzen: Relevanz aus einwilligungsbasierten Erstdaten ist sauber — sprich Segmente mit passenden, nützlichen Angeboten an, ohne aus einer erkannten Notlage Kapital zu schlagen. Erkennen und kontern: Frag dich „Woher kennt diese Nachricht meine Lage?" und prüfe, welche Daten aus welcher Quelle sie speisen. Emotionale Appelle wirken verwandt, weil auch hier eine Angst angesprochen wird — aber ein Appell adressiert ein breites Publikum über einen geteilten Gefühlsauslöser, ohne dass individuelle Daten die Auswahl steuern. Framing würde dasselbe Angebot nur in eine Perspektive rücken („Boost" statt „teurer Kredit"), ohne pro Person auszuspielen. Nudging läge vor, wenn die Auswahlarchitektur der App das Verhalten lenkte (Voreinstellung, Platzierung) — hier steuert nicht das Interface, sondern das personenscharfe Datenprofil die Ansprache.',
      en: 'Microtargeting: the lever is not the message itself but the fact that it is built from one individual\'s personal data and aimed precisely at her momentary vulnerability — here acute money worry, triggered in the seconds after the bounced debit. The technique gives itself away exactly because different users in the same situation receive different messages or none at all: it is delivered per individual, not to an audience. The mechanism works because a message that appears to know your private circumstances feels more relevant and familiar and lowers resistance (Matz et al. 2017; moderate evidence — the effect depends on data quality and model accuracy). Used legitimately: relevance drawn from consented first-party data is above board — address segments with fitting, useful offers without cashing in on a detected hardship. To spot and counter it: ask yourself "How does this message know my situation?" and check which data, from which source, feed it. Emotional appeals look related because a fear is being touched here too — but an appeal addresses a broad audience through a shared emotional trigger, without individual data steering the selection. Framing would merely cast the same offer in a certain light ("boost" instead of "expensive loan") without per-person delivery. Nudging would be at play if the app\'s choice architecture steered behaviour (a default, a placement) — here it is not the interface but the person-level data profile that drives the approach.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'emotional_appeal', 'framing', 'nudging'],
  },
  {
    id: 'backfill-microtargeting-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Pitch eines Datendienstleisters beim Marketingleiter einer Versicherung: Als CRM-Verantwortliche sitzt du mit am Tisch. Der Anbieter verspricht, eure Bestandskundenliste mit zugekauften Signalen zu Lebensereignissen anzureichern — Scheidung, Trauerfall, Jobverlust — und daraus für jede Person den psychologisch günstigsten Moment zu berechnen, um ihr individuell eine passende Police anzubieten: „Wir erreichen jeden genau dann, wenn er am empfänglichsten ist."',
      en: 'A data vendor pitches to the marketing director of an insurer; as the person responsible for CRM you are at the table. The vendor promises to enrich your existing-customer list with purchased life-event signals — divorce, bereavement, job loss — and to compute, for each person, the psychologically most opportune moment to offer them a tailored policy individually: "We reach everyone at the exact moment they are most receptive."',
    },
    options: [
      {
        de: 'Ich lehne die Anreicherung mit Verletzlichkeits-Signalen ab und schlage stattdessen einwilligungsbasierte Erstdaten-Segmente vor: relevante Ansprache nach selbst angegebenem Bedarf und Lebensphase, transparent und ohne den „empfänglichsten Moment" einer Notlage auszunutzen.',
        en: 'I decline to enrich our list with vulnerability signals and propose consented first-party segments instead: relevant outreach based on self-declared needs and life stage, transparent and without exploiting the "most receptive moment" of a hardship.',
      },
      {
        de: 'Ich stimme zu: Die Daten sind am Markt legal erhältlich, und eine Police im richtigen Moment ist ein echter Kundennutzen — je genauer wir treffen, desto besser für beide Seiten.',
        en: 'I agree: the data is legally available on the market, and a policy at the right moment is genuine customer value — the more precisely we hit, the better for both sides.',
      },
      {
        de: 'Ich übernehme die Signale, um die Ansprache für die markierten Personen individuell zu texten — das verbuche ich als normale Personalisierung des Bestandsmarketings, nicht als Ausnutzen einer Notlage.',
        en: 'I take the signals to individually word the outreach for the flagged people — I book that as ordinary personalisation of our existing-customer marketing, not as exploiting a hardship.',
      },
      {
        de: 'Ich behalte die Lebensereignis-Trigger, entferne nur die sensibelsten (Trauerfall) und lasse Scheidung und Jobverlust als Auslöser stehen — so bleibt der Präzisionsvorteil, ohne die heikelste Kategorie.',
        en: 'I keep the life-event triggers, remove only the most sensitive one (bereavement) and leave divorce and job loss as triggers — so we keep the precision advantage without the touchiest category.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Was der Anbieter vorschlägt, ist Microtargeting in seiner problematischsten Ausprägung: einzelne Personen über zugekaufte Daten identifizieren und die Ansprache exakt auf ihre momentane Verletzlichkeit legen. Der Hebel wirkt, weil eine Botschaft, die genau im schwächsten Moment eintrifft, kaum noch auf ruhige Abwägung trifft — die Notlage senkt den Widerstand, bevor das Angebot überhaupt geprüft wird (Matz et al. 2017; moderate Evidenz). Der professionelle Trennstrich verläuft nicht bei „personalisiert ja/nein", sondern bei Datenquelle und Absicht. Legitim einsetzen: Biete Relevanz auf Basis dessen, was Kundinnen dir aktiv eingeräumt haben — die Einwilligung ist die Grenze, nicht der am Markt verfügbare Datenpunkt. Erkennen und kontern: Verlang vom Anbieter offenzulegen, woher jedes Signal stammt und ob dafür eine Einwilligung existiert; wenn das Verkaufsargument ausgerechnet der „empfänglichste Moment" einer Krise ist, ist das der rote Faden, den du kappst. Die beste Option hält den Nutzen — passende Ansprache — und entzieht der Technik den Missbrauch, die Notlage als Timing. Option 2 wirkt plausibel, weil „legal erhältlich" und „Kundennutzen" nach Win-win klingen — doch die Rechtmäßigkeit der Datenquelle deckt nicht das Ausnutzen einer Krise, und einmal aufgedeckt beschädigt genau das die Marke nachhaltiger als jeder entgangene Abschluss. Option 3 unterschätzt den Kern: Sobald die zugekauften Signale bestimmen, wer die Ansprache bekommt, ist es Microtargeting — ob du es „Personalisierung" nennst oder nicht; die Auswahl ist der Hebel, nicht die Formulierung. Option 4 ist eine Scheinlösung: Eine Kategorie zu streichen und Scheidung und Jobverlust als Auslöser zu behalten, targetiert weiterhin nach individueller Notlage — die Technik bleibt dieselbe, nur diskreter.',
      en: 'What the vendor proposes is microtargeting in its most problematic form: identifying individuals through purchased data and pitching to them precisely at their momentary vulnerability. The lever works because a message that lands at exactly the weakest moment leaves little room for calm deliberation — the hardship lowers resistance before the offer is even examined (Matz et al. 2017; moderate evidence). The professional line is drawn not at "personalised yes/no" but at the data source and the intent. Used legitimately: offer relevance based on what customers have actively granted you — consent is the boundary, not the data point that happens to be for sale. To spot and counter it: require the vendor to disclose where each signal comes from and whether consent exists for it; when the selling point is precisely the "most receptive moment" of a crisis, that is the thread you cut. The best option keeps the value — fitting outreach — and strips the technique of its abuse, the hardship as timing. Option 2 seems plausible because "legally available" and "customer value" sound like win-win — but the lawfulness of the data source does not cover exploiting a crisis, and once exposed, that is exactly what damages the brand more lastingly than any missed sale. Option 3 underestimates the core: the moment the purchased signals decide who receives the outreach, it is microtargeting — whether you call it "personalisation" or not; the selection is the lever, not the phrasing. Option 4 is a pseudo-fix: dropping one category and keeping divorce and job loss as triggers still targets by individual hardship — the technique stays the same, only more discreet.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting'],
  },
  {
    id: 'backfill-microtargeting-3',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ergänze: Der Fundraiser erhöht die Spendenbereitschaft, indem er ___.',
      en: 'Complete the sentence: the fundraiser raises willingness to give by ___.',
    },
    scenario: {
      de: 'Digitale Spendenkampagne einer Hilfsorganisation: Der Fundraising-Manager verknüpft für jeden einzelnen Bestandsspender die Spendenhistorie mit aus öffentlich sichtbaren Aktivitäten abgeleiteten Interessen und leitet daraus je Person einen individuellen emotionalen Auslöser ab. Der langjährige Tierschutz-Spender bekommt eine Mail über ein gerettetes Tier, die frisch verwitwete Spenderin eine über Vermächtnisspenden zum Andenken an einen geliebten Menschen, der junge Erstspender eine über Bildung für Kinder — jede Ansprache ist auf den persönlichen wunden Punkt der Adressatin zugeschnitten.',
      en: 'A relief organisation\'s digital donation campaign: for each individual existing donor the fundraising manager links the giving history with interests inferred from their public activity and derives, per person, an individual emotional trigger. The long-standing animal-welfare donor receives an email about a rescued animal, the recently widowed donor one about legacy giving in memory of a loved one, the young first-time donor one about education for children — each approach is tailored to the addressee\'s personal sore spot.',
    },
    options: [
      {
        de: 'für jede Person aus ihren eigenen Daten deren individuellen wunden Punkt errechnet und die Botschaft genau darauf zuschneidet',
        en: 'computing each person\'s individual sore spot from their own data and tailoring the message straight to it',
      },
      {
        de: 'die Spender in wenige Interessengruppen einteilt und jeder Gruppe ihr passendes Thema schickt, statt einzelne Profile auszuwerten',
        en: 'sorting donors into a few interest groups and sending each group its matching theme, rather than evaluating individual profiles',
      },
      {
        de: 'mit einem allgemein berührenden Bild arbeitet, das bei jedem dieselbe Emotion weckt',
        en: 'working with a generally moving image that stirs the same emotion in everyone',
      },
      {
        de: 'das Spendenformular auf einen höheren Betrag voreinstellt und die Ein-Klick-Spende zur bequemsten Option macht',
        en: 'presetting the donation form to a higher amount and making the one-click gift the easiest option',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Microtargeting: Der Fundraiser errechnet für jede Person aus ihren eigenen Daten einen eigenen wunden Punkt und schneidet die Botschaft genau darauf zu — Tierfreund, Verwitwete und Erstspender bekommen nicht Varianten einer Mail, sondern jeweils die Ansprache, die ihre persönliche Empfänglichkeit trifft. Das ist das Kennzeichen, das Microtargeting von den Nachbarn abhebt: Gesteuert wird über das individuelle Datenprofil, nicht über eine Zielgruppe oder einen gemeinsamen Nenner. Warum wirkt das? Weil maßgeschneiderte Ansprache Nähe vortäuscht: Wer den Eindruck hat, die Botschaft sei eigens für seine Lebenslage gemacht, prüft sie seltener und glaubt ihr eher (moderate Evidenz; die Stärke hängt von Datenqualität und Modellgüte ab). Legitim einsetzen: Spender nach dem anzusprechen, was sie dir gegenüber selbst als Interesse gezeigt haben, ist gutes Fundraising — die Grenze ist überschritten, sobald du eine private Trauer ausnutzt, die dir niemand für Werbung anvertraut hat. Erkennen und kontern: Halt inne, wenn eine Mail einen sehr privaten Umstand zu kennen scheint, und prüf, was du dieser Organisation je aktiv mitgeteilt hast — deckt sich beides nicht, ist zugekauftes oder abgeleitetes Profilwissen im Spiel. Die Segment-Variante (Option 2) ist die verführerischste Fehlspur: Spender in wenige Interessengruppen zu sortieren sieht ähnlich aus, wertet aber keine Einzelprofile aus — bei Microtargeting entscheidet die Datenspur der einzelnen Person, nicht die Schublade. Ein emotionaler Appell (Option 3) zöge alle über denselben Gefühlsknopf — ein bewegendes Motiv für die ganze Liste; hier aber entscheidet das einzelne Profil, welcher wunde Punkt bei wem angetippt wird. Nudging (Option 4) läge in der Architektur des Spendenwegs selbst — der voreingestellte Betrag, der bequemste Klick —, nicht in einer pro Person berechneten Auslöser-Wahl.',
      en: 'Microtargeting: from each person\'s own data the fundraiser computes an individual sore spot and tailors the message straight to it — the animal lover, the widow and the first-time donor do not get variants of one email but each the approach that hits their personal receptiveness. That is the hallmark setting microtargeting apart from its neighbours: the targeting is driven by the individual data profile, not by an audience or a common denominator. Why does it work? Because a tailored approach feigns closeness: someone who feels the message was made specifically for their situation checks it less and believes it more (moderate evidence; its strength depends on data quality and model accuracy). Used legitimately: addressing donors by the interest they have themselves shown you is good fundraising — the line is crossed when you exploit a private grief nobody entrusted to you for marketing. To spot and counter it: pause when an email appears to know a very private circumstance, and check what you ever actively told that organisation — if the two do not match, purchased or inferred profile knowledge is in play. The segment variant (option 2) is the most seductive wrong turn: sorting donors into a few interest groups looks similar but evaluates no individual profiles — in microtargeting it is the single person\'s data trail, not the bucket, that decides. An emotional appeal (option 3) would pull everyone by the same emotional button — one moving motif for the whole list; here, though, the individual profile decides which sore spot is pressed for whom. Nudging (option 4) would lie in the architecture of the donation flow itself — the preset amount, the easiest click — not in a per-person computed choice of trigger.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'emotional_appeal', 'nudging'],
  },
];
