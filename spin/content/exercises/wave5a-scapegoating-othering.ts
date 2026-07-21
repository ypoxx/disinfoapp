// Welle 5a: 3 Übungen für scapegoating_othering (Sündenbock / Othering).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aScapegoatingOthering: Exercise[] = [
  {
    id: 'wave5a-scapegoating_othering-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Produktionsvorstand hier ein?',
      en: 'Which technique is the head of production using here?',
    },
    scenario: {
      de: 'Betriebsversammlung nach einer Gewinnwarnung: Der Produktionsvorstand sagt vor der Belegschaft: „Seit die Kollegen aus dem zugekauften Werk in unsere Prozesse hineinregieren, stimmt hier nichts mehr — die halten sich an keine Absprachen und ziehen den ganzen Laden runter. Sortieren wir die aus, läuft es wieder." Zahlen oder eine Ursachenanalyse legt er nicht vor.',
      en: 'Works meeting after a profit warning: the head of production tells the assembled staff: "Ever since the people from the acquired plant started meddling in our processes, nothing works here anymore — they keep to no agreements and drag the whole place down. Sort them out and things will run again." He presents no figures and no root-cause analysis.',
    },
    options: [
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Stereotypisierung (Stereotyping)', en: 'Stereotyping' },
      { de: 'Ad hominem (persönlicher Angriff)', en: 'Ad hominem' },
      { de: 'Guilt by Association (Kontaktschuld)', en: 'Guilt by association' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Scapegoating / Othering: Ein diffuses Problem — die Gewinnwarnung — bekommt genau eine schuldige Gruppe zugewiesen, die zugleich als Fremdkörper markiert wird („die von drüben", „ziehen den Laden runter", „aussortieren"). Der Hebel bündelt die Unzufriedenheit auf einen greifbaren Sündenbock und schweißt das „Wir" gegen ein „Die" — die eigentlichen, meist strukturellen Ursachen bleiben ungeprüft. Legitim einsetzen: Eine konkret verantwortliche Stelle zu benennen ist zulässig — professionell bleibt es, wenn du die Kausalität belegst und eine einzelne, überprüfbare Verantwortung adressierst, statt eine ganze Gruppe pauschal zum Feind zu erklären. Erkennen und kontern: Frag nach dem Beleg für die behauptete Ursache und danach, welcher Anteil wirklich bei dieser Gruppe liegt — sobald „die sind schuld" die ganze Analyse ist und die Lösung nur „die loswerden" heißt, ist es Scapegoating. Stereotypisierung liegt nahe, weil auch sie einer Gruppe pauschale Eigenschaften zuschreibt — ihr fehlt aber der Kern hier: die kausale Schuldzuweisung für ein konkretes Problem samt Bedrohungserzählung; ein Stereotyp kommt ohne diesen Schuldspruch aus. Ad hominem greift eine einzelne Person an, um deren Argument zu entwerten — hier wird kein Argument einer Person, sondern eine ganze Gruppe zur Ursache erklärt. Guilt by Association würde jemanden über die bloße Verbindung zu einer anrüchigen dritten Partei diskreditieren („die arbeiten ja mit X zusammen") — eine solche Verknüpfung fehlt hier; die Gruppe selbst wird zum Schuldigen erklärt.',
      en: 'Scapegoating / Othering: a diffuse problem — the profit warning — is pinned on exactly one culpable group that is at the same time marked as a foreign body ("the ones from over there", "drag the place down", "sort them out"). The lever channels the discontent onto a tangible scapegoat and welds an "us" against a "them" — the real, mostly structural causes go unexamined. Used legitimately: naming a concretely responsible party is fair — it stays professional when you evidence the causation and address a single, checkable accountability instead of declaring a whole group the enemy. To spot and counter it: ask for proof of the claimed cause and for how much actually sits with that group — the moment "they are to blame" is the entire analysis and the only remedy is "get rid of them", it is scapegoating. Stereotyping seems close because it too ascribes blanket traits to a group — but it lacks the core here: the causal attribution of blame for a specific problem plus a threat narrative; a stereotype needs no such verdict. Ad hominem attacks a single person to void their argument — here no person\'s argument, but a whole group is declared the cause. Guilt by association would discredit someone through the mere link to a disreputable third party ("they work with X, after all") — no such link appears here; the group itself is declared guilty.',
    },
    points: 10,
    primaryTechniqueId: 'scapegoating_othering',
    relatedTechniques: ['scapegoating_othering', 'ad_hominem', 'guilt_by_association'],
  },
  {
    id: 'wave5a-scapegoating_othering-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Town-Hall, die du als Kommunikationsverantwortliche moderierst: Nach schwachen Zahlen sagt ein Bereichsleiter offen ins Mikrofon: „Das Problem ist doch klar — seit die Leute aus dem zugekauften Standort mitreden, geht es bergab. Die passen einfach nicht zu uns." Zustimmendes Raunen im Saal. Alle Augen richten sich auf dich.',
      en: 'Town hall you are moderating as communications lead: after weak numbers, a department head says openly into the mic: "The problem is obvious — ever since the people from the acquired site got a say, things have gone downhill. They just don\'t fit in with us." Approving murmurs in the room. All eyes turn to you.',
    },
    options: [
      {
        de: 'Ich hole die Debatte zurück auf die Ursachen: Ich nehme den Frust dahinter ernst, widerspreche aber der Pauschale — und lege die tatsächlichen Treiber der Zahlen offen (Auftragslage, Lieferkette, Preisdruck), an denen wir gemeinsam arbeiten, statt eine Kollegengruppe zum Sündenbock zu machen.',
        en: 'I bring the debate back to causes: I take the frustration behind it seriously but reject the blanket verdict — and lay out the actual drivers of the numbers (order intake, supply chain, price pressure) that we tackle together, rather than making a group of colleagues the scapegoat.',
      },
      {
        de: 'Ich lasse es unkommentiert stehen — die Stimmung ist ohnehin aufgeheizt, und offener Widerspruch würde den Bereichsleiter nur vor allen bloßstellen.',
        en: 'I let it stand without comment — the mood is heated anyway, and open pushback would only expose the department head in front of everyone.',
      },
      {
        de: 'Ich gebe ihm recht und kündige an, die Integration des zugekauften Standorts auf den Prüfstand zu stellen — die Belegschaft will jetzt ein klares Signal.',
        en: 'I agree with him and announce that we will put the integration of the acquired site under review — the workforce wants a clear signal now.',
      },
      {
        de: 'Ich kontere, indem ich die Schuld umlenke: Nicht der zugekaufte Standort sei das Problem, sondern die Geschäftsführung, die den Zukauf überhaupt zu verantworten habe.',
        en: 'I counter by redirecting the blame: the problem is not the acquired site but top management, which is responsible for the acquisition in the first place.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Aussage ist Scapegoating / Othering: Ein komplexes Ergebnis wird kollektiv einer Gruppe angelastet, die zugleich als „nicht zu uns passend" ausgegrenzt wird — der greifbare Sündenbock ersetzt die Ursachenanalyse. Die beste Option nimmt dem Muster die Grundlage: Du entkoppelst den echten Frust von der Pauschal-Schuld und stellst die belegbaren Treiber der Zahlen in den Raum, an denen alle gemeinsam arbeiten können. Legitim einsetzen: Eine konkret verantwortliche Stelle darfst du benennen — der Unterschied ist, ob du eine belegte, einzelne Verantwortung adressierst oder eine ganze Gruppe zum Feindbild machst. Erkennen und kontern: Sobald „die sind schuld" die ganze Diagnose trägt, frag nach dem Beleg und lenke auf die prüfbaren Ursachen zurück — ohne den dahinterliegenden Frust kleinzureden. Unkommentiert stehen lassen bestätigt den Sündenbock durch dein Schweigen und überlässt dem Raunen die Deutungshoheit. Ihm recht zu geben und die Integration „auf den Prüfstand" zu stellen adelt die Ausgrenzung zur offiziellen Linie. Die Schuld auf die Geschäftsführung umzulenken wirkt fair, ist aber nur ein neuer Sündenbock — du tauschst die Zielgruppe aus, statt zur Ursachenfrage zurückzukehren.',
      en: 'The statement is scapegoating / othering: a complex outcome is blamed collectively on a group that is at the same time excluded as "not fitting in with us" — the tangible scapegoat replaces root-cause analysis. The best option removes that foundation: you decouple the genuine frustration from the blanket blame and put the evidenced drivers of the numbers on the table, which everyone can work on together. Used legitimately: you may name a concretely responsible party — the difference is whether you address an evidenced, single accountability or turn a whole group into an enemy image. To spot and counter it: as soon as "they are to blame" carries the whole diagnosis, ask for the evidence and steer back to the testable causes — without belittling the frustration underneath. Letting it stand endorses the scapegoat through your silence and hands interpretive authority to the murmurs. Agreeing and putting the integration "under review" elevates the exclusion into official policy. Redirecting the blame onto management looks fair but is just a fresh scapegoat — you swap the target group instead of returning to the question of cause.',
    },
    points: 10,
    primaryTechniqueId: 'scapegoating_othering',
    relatedTechniques: ['scapegoating_othering'],
  },
  {
    id: 'wave5a-scapegoating_othering-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'LinkedIn-Beitrag eines Funktionärs eines Einzelhandelsverbands: „Wer hat unsere Innenstädte leergefegt? Nicht wir. Es sind die anonymen Plattform-Riesen — sie halten sich an keine Regeln, saugen unsere Kaufkraft ab und zerstören, was Generationen aufgebaut haben. Sie sind das Problem, nicht die Lösung." Strukturelle Ursachen wie Mietniveau oder verändertes Kaufverhalten kommen nicht vor; eine ganze Akteursgruppe wird zum Alleinschuldigen und zur Bedrohung erklärt.',
      en: 'LinkedIn post by an official of a retail trade association: "Who swept our town centres empty? Not us. It is the faceless platform giants — they keep to no rules, drain our purchasing power and destroy what generations built. They are the problem, not the solution." Structural causes such as rent levels or changed buying behaviour never appear; a whole class of actors is declared the sole culprit and a threat.',
    },
    options: [
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Stereotypisierung (Stereotyping)', en: 'Stereotyping' },
      { de: 'Whataboutism (Und-was-ist-mit)', en: 'Whataboutism' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Scapegoating / Othering: Der Beitrag macht eine ganze Akteursgruppe — „die anonymen Plattform-Riesen" — zum Alleinschuldigen für ein komplexes Problem und markiert sie zugleich als bedrohliche „Andere" („saugen ab", „zerstören", „sind das Problem"). Der Hebel bündelt Unzufriedenheit auf einen greifbaren Feind und lässt die strukturellen Ursachen unbenannt. Erkennen und kontern: Frag, welcher Anteil des Problems wirklich belegt bei dieser Gruppe liegt und welche Ursachen ausgeblendet werden — bricht die Alleinschuld auseinander, war es Scapegoating. Legitim einsetzen: Einen konkret verantwortlichen Akteur zu benennen ist zulässig, wenn du die Kausalität belegst und die übrigen Treiber nicht unterschlägst. Stereotypisierung liegt nahe, weil auch hier einer Gruppe pauschale Eigenschaften angehängt werden — der Kern ist aber die Schuldzuweisung für ein konkretes Problem samt Bedrohungserzählung, nicht die bloße Eigenschaftszuschreibung. Whataboutism würde eine gegen einen selbst gerichtete Kritik mit einer Gegenanklage parieren („Und was ist mit euren Fehlern?"); hier wird jedoch keine Kritik abgewehrt, sondern proaktiv ein Schuldiger benannt — das „Nicht wir" leitet die Schuld weiter, statt einen konkreten Vorwurf zu kontern.',
      en: 'Scapegoating / Othering: the post makes a whole class of actors — "the faceless platform giants" — the sole culprit for a complex problem and at the same time marks them as a threatening "other" ("drain", "destroy", "are the problem"). The lever channels discontent onto a tangible enemy and leaves the structural causes unnamed. To spot and counter it: ask how much of the problem is actually evidenced against that group and which causes are being hidden — if the sole blame falls apart, it was scapegoating. Used legitimately: naming a concretely responsible actor is fair when you evidence the causation and do not suppress the other drivers. Stereotyping seems close because blanket traits are again attached to a group — but the core here is the attribution of blame for a specific problem plus a threat narrative, not the mere ascription of traits. Whataboutism would parry a criticism aimed at oneself with a counter-charge ("and what about your failures?"); here, though, no criticism is being deflected — a culprit is named proactively, and the "not us" passes blame onward rather than countering a specific accusation.',
    },
    points: 10,
    primaryTechniqueId: 'scapegoating_othering',
    relatedTechniques: ['scapegoating_othering', 'whataboutism'],
  },
];
