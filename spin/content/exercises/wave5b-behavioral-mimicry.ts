// Welle 5b: 3 Übungen für behavioral_mimicry (Behaviorale Mimikry / Chamäleon-Effekt).
// evidenceTier 'weak' — keine starken Wirkbehauptungen; kein seriousMode
// (dual-use), daher doppelter Takeaway: legitim einsetzen UND erkennen/kontern.
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bBehavioralMimicry: Exercise[] = [
  {
    id: 'wave5b-behavioral_mimicry-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt die Szene?',
      en: 'Which technique carries the scene?',
    },
    scenario: {
      de: 'Blind zu klassifizieren: Preisverhandlung im Kundentermin → Key-Account-Managerin einer Agentur gegenüber dem Einkaufsleiter. Über das Gespräch hinweg übernimmt sie unbewusst seine zurückgelehnte Sitzhaltung, sein ruhiges Sprechtempo und einzelne seiner Wortwendungen; das Klima wird spürbar wärmer. Kein Kompliment, keine Ähnlichkeitsbehauptung, kein Lenkungsschritt zu einem Abschluss, und keine Gefühlslage, die vom Einkaufsleiter auf sie überspringt — nur das fortlaufende, nichtbewusste Spiegeln von Haltung und Ton.',
      en: 'To classify blind: a pricing negotiation in a client meeting → an agency\'s key-account manager facing the head of procurement. Over the course of the conversation she nonconsciously takes on his reclined posture, his calm speaking pace, and a few of his turns of phrase; the atmosphere grows noticeably warmer. No compliment, no claim of similarity, no move to steer toward a close, and no felt state jumping from the head of procurement across to her — only the ongoing, nonconscious mirroring of posture and tone.',
    },
    options: [
      { de: 'Behaviorale Mimikry (Chamäleon-Effekt)', en: 'Behavioral Mimicry (Chameleon Effect)' },
      { de: 'Liking (Sympathie)', en: 'Liking' },
      { de: 'Pacing & Leading', en: 'Pacing & Leading' },
      { de: 'Emotionale Ansteckung (emotional contagion)', en: 'Emotional Contagion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Behaviorale Mimikry: Der Hebel ist das meist nichtbewusste Spiegeln von Haltung, Sprechtempo und Wortwahl des Gegenübers — die wachsende Vertrautheit speist sich allein aus dem Gleichklang im Auftreten, nicht aus Inhalten. So setzt du das professionell ein: Eine natürliche Anpassung an Tempo und Ton deines Gegenübers, die aus echtem Zuhören entsteht, baut Rapport auf; verlass dich für die Sachentscheidung aber nicht darauf, denn die Effekte gelten als klein und replikationsunsicher. Daran erkennst du es und so entschärfst du es: Frag dich, ob die Nähe aus deckungsgleicher Körpersprache erwächst statt aus Argumenten — trenne das warme Klima von der Frage, ob das Angebot trägt. Liking wäre es, wenn Sympathie über Komplimente, betonte Ähnlichkeit oder Attraktivität geweckt würde — hier fällt kein einziger solcher Anker, es zählt nur das Spiegeln. Pacing & Leading läge vor, wenn auf das Angleichen ein bewusster Führungsschritt folgte („…also lassen Sie uns jetzt unterschreiben") — genau dieser Lenkungszug fehlt. Emotionale Ansteckung (emotional contagion) wäre es, wenn eine Gefühlslage — etwa Ruhe oder Anspannung — vom Einkaufsleiter auf sie überspränge und beide denselben Affekt teilten; hier wird jedoch beobachtbares Verhalten (Haltung, Tempo, Wortwahl) gespiegelt, nicht eine Stimmung angesteckt.',
      en: 'Behavioral Mimicry: the lever is the largely nonconscious mirroring of the counterpart\'s posture, speaking pace, and word choice — the growing familiarity feeds solely on the match in bearing, not on content. Using it professionally: a natural adjustment to your counterpart\'s pace and tone that grows out of genuine listening builds rapport; but don\'t lean on it for the substantive decision, because the effects are considered small and hard to replicate. Recognising and defusing it: ask whether the closeness arises from matched body language rather than from arguments — separate the warm atmosphere from the question of whether the offer holds up. Liking would be the case if sympathy were sparked through compliments, stressed similarity, or attractiveness — not one such anchor is dropped here; only the mirroring counts. Pacing & Leading would apply if the matching were followed by a deliberate leading move ("…so let\'s sign now") — that steering move is exactly what is missing. Emotional contagion would be the case if a felt state — say calm or tension — spread from the head of procurement to her so that both shared the same affect; here, though, observable behaviour (posture, pace, word choice) is mirrored, not a mood caught.',
    },
    points: 10,
    primaryTechniqueId: 'behavioral_mimicry',
    relatedTechniques: ['behavioral_mimicry', 'liking', 'pacing_and_leading'],
  },
  {
    id: 'wave5b-behavioral_mimicry-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du führst als Beraterin ein Erstgespräch mit einem potenziellen Kunden und merkst, dass die Chemie stimmt. Ein Kollege rät dir für den nächsten Termin, gezielt Haltung, Sprechtempo und Lieblingsformulierungen des Kunden zu spiegeln, um den Abschluss sicherer zu machen.',
      en: 'As a consultant you run a first meeting with a prospective client and notice the chemistry is good. For the next session a colleague advises you to deliberately mirror the client\'s posture, speaking pace, and favourite phrases to make the close more certain.',
    },
    options: [
      {
        de: 'Ich spiegele im nächsten Termin mechanisch jede Geste und jeden Halbsatz des Kunden — je mehr Gleichklang, desto sicherer der Abschluss.',
        en: 'In the next session I mechanically mirror every gesture and half-sentence of the client — the more matching, the surer the close.',
      },
      {
        de: 'Ich baue Rapport über echtes Zuhören und passe mich natürlich an Tempo und Ton an, verlasse mich für die Abschlussfrage aber auf Sachargumente — die Wirkung bewussten Spiegelns ist klein und unsicher, und aufgesetztes Nachahmen fliegt auf.',
        en: 'I build rapport through genuine listening and adjust naturally to pace and tone, but rely on substance for the closing question — the effect of deliberate mirroring is small and uncertain, and forced imitation gets noticed.',
      },
      {
        de: 'Ich vermeide von nun an jede Anpassung an mein Gegenüber, weil Spiegeln grundsätzlich Manipulation ist.',
        en: 'From now on I avoid any adjustment to my counterpart, because mirroring is manipulation by its very nature.',
      },
      {
        de: 'Ich spiegele verdeckt und mache das Angleichen zum wichtigsten Hebel des Termins, statt die inhaltliche Vorbereitung zu vertiefen.',
        en: 'I mirror covertly and make the matching the meeting\'s main lever, instead of deepening the substantive preparation.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Mechanismus: Behaviorale Mimikry wirkt über das meist nichtbewusste Spiegeln von Haltung, Tempo und Wortwahl, das Vertrautheit erzeugen kann — die berichteten Effekte sind jedoch klein und replikationsunsicher. So setzt du das professionell ein: Eine natürliche Anpassung aus echtem Zuhören baut Rapport, ohne die Sachentscheidung zu ersetzen; genau das leistet Option 2. Erkennen und kontern: Prüfe, ob die Nähe aus Gleichklang im Auftreten statt aus Argumenten wächst, und halte das Klima von der Angebotsfrage getrennt. Option 1 klingt nach sicherem Rezept, überschätzt aber einen kleinen, umstrittenen Effekt und fliegt als mechanisches Nachäffen auf, was Vertrauen kostet. Option 3 überkorrigiert: Sich natürlich auf ein Gegenüber einzustellen ist normaler Rapport, nicht per se Manipulation — der Totalverzicht verwechselt Angemessenheit mit Missbrauch. Option 4 wirkt taktisch clever, setzt aber auf einen schwach belegten Hebel und vernachlässigt die inhaltliche Vorbereitung, die den Termin tatsächlich trägt.',
      en: 'Mechanism: behavioral mimicry works through the largely nonconscious mirroring of posture, pace, and word choice that can create familiarity — but the reported effects are small and hard to replicate. Using it professionally: a natural adjustment born of genuine listening builds rapport without replacing the substantive decision; that is exactly what option 2 does. Recognising and countering it: check whether the closeness grows from a match in bearing rather than from arguments, and keep the atmosphere apart from the question of the offer. Option 1 sounds like a sure recipe but overrates a small, contested effect and gets exposed as mechanical aping, which costs trust. Option 3 overcorrects: adjusting naturally to a counterpart is ordinary rapport, not manipulation as such — a blanket refusal confuses appropriateness with abuse. Option 4 looks tactically clever but bets on a weakly evidenced lever and neglects the substantive preparation that actually carries the meeting.',
    },
    points: 10,
    primaryTechniqueId: 'behavioral_mimicry',
    relatedTechniques: ['behavioral_mimicry', 'liking'],
  },
  {
    id: 'wave5b-behavioral_mimicry-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Blind zu klassifizieren: Videocall zur Kandidatenauswahl → Recruiterin gegenüber einer Bewerberin. Über den Call hinweg gleicht die Recruiterin unbewusst Sprechtempo, Kopfneigung und einzelne Formulierungen der Bewerberin an; die Bewerberin wirkt zunehmend gelöst. An keiner Stelle lenkt die Recruiterin zu einer Zusage oder Forderung hin, bietet keine Gegenleistung an, macht kein Kompliment und behauptet keine Ähnlichkeit — sie spiegelt nur fortlaufend, nichtbewusst Ton und Körpersignale.',
      en: 'To classify blind: a candidate-screening video call → a recruiter facing an applicant. Over the call the recruiter nonconsciously matches the applicant\'s speaking pace, head tilt, and a few of her phrasings; the applicant grows visibly at ease. At no point does the recruiter steer toward a commitment or demand, offer anything in return, pay a compliment, or claim any similarity — she only mirrors tone and body signals on an ongoing, nonconscious basis.',
    },
    options: [
      { de: 'Behaviorale Mimikry (Chamäleon-Effekt)', en: 'Behavioral Mimicry (Chameleon Effect)' },
      { de: 'Pacing & Leading', en: 'Pacing & Leading' },
      { de: 'Reziprozität (Gegenseitigkeit)', en: 'Reciprocity' },
      { de: 'Liking (Sympathie)', en: 'Liking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Behaviorale Mimikry: Das Muster ist das nichtbewusste Angleichen von Sprechtempo, Haltung und Formulierungen an das Gegenüber — die gelöste Stimmung entsteht aus dem Gleichklang im Auftreten selbst. So nutzt du das professionell: Sich hörend auf das Tempo einer angespannten Bewerberin einzustellen ist faire Gesprächsführung; nur solltest du wissen, dass die Wirkung solchen Spiegelns klein und replikationsunsicher ist. So erkennst du es: Achte darauf, ob die Vertrautheit aus deckungsgleicher Körpersprache statt aus Inhalten erwächst, und lass sie deine Bewertung der Eignung nicht färben. Pacing & Leading wäre es erst, wenn auf das Angleichen ein bewusster Führungsschritt folgte, mit dem die Recruiterin die Bewerberin irgendwohin lenkt — dieser Zug fehlt ausdrücklich. Reziprozität setzt eine Gegenleistung voraus, die zur Erwiderung verpflichtet — hier wird nichts gegeben. Liking wäre der Hebel, wenn Sympathie bewusst über ein Kompliment, eine betonte Ähnlichkeit oder Attraktivität geweckt würde — nichts davon fällt hier; dass die Ähnlichkeit nicht behauptet, sondern unbewusst über das Spiegeln hergestellt wird, macht es zu Mimikry und nicht zu Liking.',
      en: 'Behavioral Mimicry: the pattern is the nonconscious matching of speaking pace, posture, and phrasing to the counterpart — the eased mood arises from the match in bearing itself. Using it professionally: attuning yourself by ear to the pace of a tense applicant is fair conversation management; you should just know that the effect of such mirroring is small and hard to replicate. Recognising it: watch whether the familiarity grows from matched body language rather than from content, and don\'t let it colour your assessment of suitability. Pacing & Leading would only apply if the matching were followed by a deliberate leading move with which the recruiter steers the applicant somewhere — that move is expressly absent. Reciprocity requires something given that obliges a return — nothing is given here. Liking would be the lever if sympathy were deliberately sparked through a compliment, stressed similarity, or attractiveness — none of that is dropped here; that the similarity is not claimed but produced nonconsciously through the mirroring is what makes it mimicry rather than liking.',
    },
    points: 10,
    primaryTechniqueId: 'behavioral_mimicry',
    relatedTechniques: ['behavioral_mimicry', 'pacing_and_leading', 'reciprocity', 'liking'],
  },
];
