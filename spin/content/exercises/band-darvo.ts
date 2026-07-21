// Band-Übung ADVANCED für darvo (DARVO — Leugnen, Angreifen, Täter-Opfer-Umkehr).
// Komplementär zum intermediate-Band der wave6-Übungen: hier subtil/eingebettet,
// ohne Reizwörter, mit Near-Miss-Distraktoren und blinder Klassifikation.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner, sachlicher Ton, keine
// spielerischen Elemente, kein "legitim einsetzen"; die Übung prüft NUR
// Erkennen und Schutz der Betroffenen. Evidenz-Tier weak: keine
// Wirkbehauptungen als Faktum.
// Szenario: schriftlicher Kanal vor Publikum (Studioleitung an Illustratorin
// im offenen Verteiler mit der Kundin), Technik ruhig/eingebettet ohne
// Reizwörter ("Opfer", "Rufmord", "Kampagne"). Abgehoben von wave6-darvo
// (mündliche HR-/Compliance-Konfrontation) durch Kanal und Setting.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const bandDarvo: Exercise[] = [
  {
    id: 'band-darvo-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster liegt hier vor?',
      en: 'Which pattern is at work here?',
    },
    scenario: {
      de: 'Eine freie Illustratorin schreibt der Studioleitung — die Lizenz-E-Mails und die Zeitstempel ihrer Dateien im Anhang —, dass ihre Entwürfe über den vereinbarten Rahmen hinaus eingesetzt wurden, unter anderem in einer Anzeigenkampagne, für die keine Freigabe vorlag. Der Studioleiter antwortet im selben Verteiler, in dem auch die Kundin sitzt: Von einer Überschreitung könne keine Rede sein, die Nutzung sei „von Anfang an weit gemeint" gewesen. Dass die Illustratorin das „ausgerechnet jetzt, kurz vor der Schlussrechnung" aufmache, spreche ja wohl für sich. Und letztlich sei es das Studio, das hier in Vorleistung gegangen sei und nun wegen einer „Formfrage" seinen guten Stand bei der Kundin geradegerückt sehen müsse.',
      en: 'A freelance illustrator writes to the studio\'s management — the licensing emails and the timestamps on her files attached — that her designs were used beyond the agreed scope, among other places in an ad campaign for which no sign-off existed. The studio lead replies on the same thread, which the client is copied into: there was no overreach to speak of, the usage was "always meant broadly". Her raising this "of all times, right before the final invoice" rather speaks for itself, he adds. And in the end it is the studio that fronted the work here and now has to set its standing with the client straight over a "technicality".',
    },
    options: [
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Gaslighting (gezielte Verunsicherung der Wahrnehmung)', en: 'Gaslighting (undermining someone\'s grip on reality)' },
      { de: 'Whataboutism (Und-was-ist-mit)', en: 'Whataboutism (and-what-about deflection)' },
      { de: 'Ad hominem (Angriff auf die Person)', en: 'Ad hominem (attack on the person)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'DARVO: Mit einem belegten Vorwurf konfrontiert, verschiebt der Studioleiter die Aufmerksamkeit von der prüfbaren Sachfrage auf Zeitpunkt und Motive der Illustratorin und stellt beide als zwei gleichrangige Streitparteien dar. Diese falsche Symmetrie ist der Hebel: Sie soll die im Verteiler mitlesende Kundin an der Urheberin zweifeln lassen und der belegten Beschwerde ihr Gewicht nehmen. Erkennen und gegensteuern: Stutzig macht dich die Dreierbewegung, hier nur leiser und ohne Reizwörter. Zuerst das Leugnen, indem die dokumentierte Absprache nachträglich umgedeutet wird („von Anfang an weit gemeint"). Dann der Angriff über den Zeitpunkt statt über die Sache; der Verweis auf die „Schlussrechnung" unterstellt der Illustratorin ein Geldmotiv, ohne es auszusprechen. Zuletzt die Rollenumkehr im Schlusssatz, in dem nicht die Urheberin als geschädigt gilt, deren Arbeit ohne Freigabe genutzt wurde, sondern das Studio um seinen „guten Stand". Behandle diese Umkehr nicht als neuen Sachverhalt. Halte die belegbare Frage, ob über den Lizenzrahmen hinaus genutzt wurde, von der Stimmungslage getrennt und bleib auf der Sachebene. Sichere Lizenz-Mails und Zeitstempel außerhalb der Reichweite der Gegenseite und lass die Beweislast bei der Seite, die die Nutzung zu verantworten hat, nicht bei der Urheberin. Gaslighting lag nahe, weil auch hier geleugnet wird. Dort wird jedoch systematisch die Wahrnehmung der Betroffenen untergraben, bis sie der eigenen Erinnerung nicht mehr traut; hier bleibt ihre Faktenlage unangetastet, verschoben wird allein die Opferrolle, und das ist der Kern von DARVO. Whataboutism wirkte plausibel, weil ein Gegenangriff vorkommt. Er würde aber mit einem unbezogenen Gegenvorwurf ablenken („Und was ist mit ihren eigenen Versäumnissen?"), statt die konfrontierte Seite zur Geschädigten zu erklären. Ad hominem beschreibt nur den Angriff auf die Person über ihr Motiv; das ist eine Zutat von DARVO, aber nicht die vollständige Kette aus Leugnen, Angriff und Umkehr.',
      en: 'DARVO: confronted with a documented complaint, the studio lead shifts attention away from the checkable question and onto the illustrator\'s timing and motives, presenting the two of them as equally weighted parties to a dispute. That false symmetry is the lever: it is meant to make the client on the thread doubt the author and drain the documented complaint of its weight. Spotting and countering it: the tell is the three-part move, here just quieter and stripped of trigger words. First the denial, as the documented agreement is recast after the fact ("always meant broadly"). Then the attack on timing rather than substance; the nod to the "final invoice" imputes a money motive to the illustrator without spelling it out. Finally the role reversal in the closing line, where the injured party is suddenly the studio and its "standing", not the person whose work was used without sign-off. Do not treat that reversal as a fresh matter. Keep the verifiable question of whether the usage went beyond the licensed scope apart from the mood, and stay on the facts. Secure the licensing emails and timestamps beyond the other side\'s reach, and leave the burden of proof with the party answerable for the usage, not with the author. Gaslighting was tempting because there is denial here too. But gaslighting works by steadily eroding the target\'s perception until she no longer trusts her own memory, whereas here her grip on the facts is untouched and only the victim role moves — the core of DARVO. Whataboutism looked plausible because a counter-attack appears, yet it would deflect with an unrelated charge ("And what about her own lapses?") instead of casting the confronted side as the wronged one. Ad hominem covers only the attack on the person through her motive; that is one ingredient of DARVO, not the full chain of denial, attack and reversal.',
    },
    points: 10,
    primaryTechniqueId: 'darvo',
    relatedTechniques: ['darvo', 'gaslighting', 'whataboutism', 'ad_hominem'],
  },
];
