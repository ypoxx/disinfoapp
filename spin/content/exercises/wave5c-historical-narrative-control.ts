// Welle 5c: 3 Übungen für historical_narrative_control (Kontrolle des Geschichtsbildes).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'frontier' → als Begriffswissen gelehrt (Muster benennen), keine Wirkbehauptungen.
// Übungen 1 und 3 prüfen Begriffswissen (Muster benennen); Übung 2 (response-choice) testet
// bewusst nur „erkennen & kontern" nach Charta-Bauplan — nicht die Wirkung des Musters, die
// Evidenz bleibt durchweg gehedged.
// Kein seriousMode (Kategorie influence_ops): Übungen dürfen legitim/erkennen/kontern lehren.
// Kern der Technik: kuratierte Lesart der VERGANGENHEIT (selektives Erinnern, Revision, Gedenken),
// um die heutige Ordnung/Strategie/Führung zu legitimieren. Abgrenzung zu agenda_setting
// (Salienz von Gegenwartsthemen) und narrative_persuasion (Überzeugung durch Geschichte an sich).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cHistoricalNarrativeControl: Exercise[] = [
  {
    id: 'wave5c-historical_narrative_control-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik liegt der Jubiläumskampagne zugrunde?',
      en: 'Which technique underlies the anniversary campaign?',
    },
    scenario: {
      de: 'Zum 150. Jubiläum eines Familienunternehmens legt die Agentur der Erbengeneration eine Kampagne vor: Werksmuseum, Festschrift und interaktiver Zeitstrahl erzählen die Firmengeschichte als ungebrochene Linie „verantwortungsvollen Unternehmertums". Die Zwangsarbeit in den 1940ern und eine Kartellstrafe der 1990er tauchen nirgends auf. Der kuratierte Rückblick soll die heutige ESG-Positionierung als angestammte Tradition erscheinen lassen, nicht als jüngere strategische Wende.',
      en: 'For a family firm\'s 150th anniversary, the agency presents the heirs with a campaign: a company museum, a commemorative volume, and an interactive timeline tell the firm\'s history as an unbroken line of "responsible enterprise". The forced labour of the 1940s and a 1990s antitrust penalty appear nowhere. The curated look-back is meant to make today\'s ESG positioning read as inherited tradition rather than a recent strategic turn.',
    },
    options: [
      { de: 'Kontrolle des Geschichtsbildes', en: 'Historical narrative control' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
      { de: 'Cherry-Picking (selektive Belegauswahl)', en: 'Cherry-picking (selective use of evidence)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kontrolle des Geschichtsbildes: Nicht ein Gegenwartsthema wird gesetzt, sondern die Deutung der Vergangenheit wird kuratiert — unbequeme Kapitel (Zwangsarbeit, Kartellstrafe) werden aus Museum, Festschrift und Zeitstrahl getilgt, damit die heutige ESG-Linie als angestammte Tradition legitim erscheint. Der Hebel: Eine lückenlose, widerspruchsfreie Geschichte lässt die gegenwärtige Strategie als ihre naturgegebene Fortsetzung wirken. Hinweis zur Evidenz: Das ist ein Begriff der Erinnerungspolitik ohne belegtes Wirkmaß — behandle ihn als Muster zum Benennen, nicht als gesicherten Effekt. Legitim einsetzen: Eine Jubiläumserzählung darf Kontinuität betonen — aber ehrlich, mit ausgewiesenen Brüchen, und die heutige Positionierung als bewusste Entscheidung statt als bruchlose Tradition. Erkennen und kontern: Prüf den Zeitstrahl auf systematische Leerstellen; fehlen die dokumentierten schwierigen Kapitel, verlang ihre Aufnahme — eine geschönte Chronik fällt bei der ersten Recherche von Historikern oder Journalisten in sich zusammen. Themensetzung (Agenda Setting) wäre die Wahl, wenn ein Gegenwartsthema durch Platzierung und Frequenz wichtig gemacht würde — hier geht es um die umgeschriebene Vergangenheit, nicht um Salienz. Narrative Persuasion meint Überzeugung durch eine mitreißende Geschichte an sich; prägend ist hier aber speziell die Kontrolle über die Lesart der eigenen Historie. Cherry-Picking (selektive Auslassung) läge nahe, weil günstige Kapitel gezeigt und ungünstige weggelassen werden — es benennt aber das selektive Herauspicken einzelner Belege innerhalb einer Argumentation; prägend ist hier die durchgehende Kuratierung der gesamten Firmenhistorie über Museum, Festschrift und Zeitstrahl, um die Gegenwart zu legitimieren.',
      en: 'Historical narrative control: it is not a present-day issue that is being set, but the reading of the past that is curated — awkward chapters (forced labour, an antitrust penalty) are erased from the museum, the commemorative volume, and the timeline so that today\'s ESG line reads as inherited tradition. The lever: a seamless, contradiction-free history makes the present strategy look like its natural continuation. On the evidence: this is a memory-politics concept with no measured effect — treat it as a pattern to name, not as an established effect. Used legitimately: an anniversary story may stress continuity — but honestly, with the breaks disclosed, and today\'s positioning presented as a deliberate choice rather than a seamless tradition. To spot and counter it: check the timeline for systematic gaps; if the documented difficult chapters are missing, insist they be included — a sanitised chronicle collapses the first time a historian or journalist actually looks into it. Agenda setting would be the pick if a present-day topic were made important through placement and frequency — here it is the rewritten past, not salience. Narrative persuasion means persuasion through a gripping story as such; what defines this case is specifically the control over the reading of one\'s own history. Cherry-picking would be tempting, since favourable chapters are shown and unfavourable ones dropped — but that names the selective picking of individual data points within an argument; what defines this case is the sustained curation of the entire company history across museum, volume, and timeline to legitimise the present.',
    },
    points: 10,
    primaryTechniqueId: 'historical_narrative_control',
    relatedTechniques: ['historical_narrative_control', 'agenda_setting', 'narrative_persuasion', 'cherry_picking'],
  },
  {
    id: 'wave5c-historical_narrative_control-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Energieversorgers, der sein 75-jähriges Bestehen begeht. Die beauftragte Agentur schlägt für Festschrift und Werksausstellung einen Zeitstrahl vor, der die Konzernhistorie als lückenlose Erfolgsgeschichte des Fortschritts zeigt — die jahrzehntelange Braunkohleverstromung und der Widerstand gegen frühere Umweltauflagen sind bewusst ausgespart. „So steht eure heutige Wasserstoff-Strategie als konsequente Tradition da, nicht als Kehrtwende."',
      en: 'You lead communications for a utility marking its 75th anniversary. The commissioned agency proposes, for the commemorative volume and the works exhibition, a timeline showing the group\'s history as a seamless success story of progress — the decades of lignite power and the resistance to earlier environmental rules are deliberately left out. "That way your current hydrogen strategy stands as a consistent tradition, not a U-turn."',
    },
    options: [
      {
        de: 'Ich bestehe auf einer ehrlichen Chronik: Die dokumentierten schwierigen Kapitel kommen ausgewiesen vor, und die Wasserstoff-Strategie wird als bewusste Kurskorrektur erzählt. Eine geschönte Geschichte hält nur bis zur ersten Recherche — dann steht die Auslassung in der Schlagzeile, nicht der Fortschritt.',
        en: 'I insist on an honest chronicle: the documented difficult chapters appear, clearly marked, and the hydrogen strategy is told as a deliberate course correction. A sanitised history holds only until someone actually digs into it — then the omission, not the progress, becomes the headline.',
      },
      {
        de: 'Ich übernehme den lückenlosen Zeitstrahl, ergänze aber im Anhang der Festschrift eine kleingedruckte Fußnote zur Braunkohle — formal vollständig, und die Wirkung der ungebrochenen Erfolgsgeschichte bleibt weitgehend erhalten.',
        en: 'I take the seamless timeline but add, in the volume\'s appendix, a small-print footnote on lignite — formally complete, and the effect of the unbroken success story is largely preserved.',
      },
      {
        de: 'Ich nehme die Braunkohle-Jahre in die interne Mitarbeiter-Chronik und ins Firmenarchiv auf, halte die öffentliche Ausstellung und die Festschrift aber bei der lückenlosen Fortschrittslinie — nach außen bleibt das geschlossene Bild erhalten.',
        en: 'I put the lignite years into the internal staff chronicle and the company archive, but keep the public exhibition and the commemorative volume on the seamless progress line — outward, the closed picture stays intact.',
      },
      {
        de: 'Ich lasse die Ausstellung zusätzlich einen „Gründervater" als visionären Vorreiter der Energiewende inszenieren und datiere frühe Nachhaltigkeitsbekenntnisse in die 1970er zurück, damit die Tradition noch tiefer wirkt.',
        en: 'I have the exhibition additionally stage a "founding father" as a visionary pioneer of the energy transition, backdating early sustainability commitments to the 1970s so the tradition reads even deeper.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Agenturvorschlag ist Kontrolle des Geschichtsbildes: Die Vergangenheit wird zur lückenlosen Erfolgslinie zurechtgeschnitten, damit die heutige Strategie als angestammte Tradition und nicht als Kehrtwende erscheint. Die beste Option lässt die dokumentierten Brüche stehen und erzählt die Gegenwart als bewusste Entscheidung — das nimmt der Inszenierung den Boden. Der Mechanismus: Eine widerspruchsfreie Historie borgt der heutigen Position Legitimität, doch sobald die Auslassung auffliegt, kippt die Aufmerksamkeit von der Sache auf das Verschwiegene. Hinweis zur Evidenz: „Kontrolle des Geschichtsbildes" ist ein Begriff der Erinnerungspolitik ohne belegtes Wirkmaß — benenne das Muster, versprich dir aber keinen gesicherten Effekt. Legitim einsetzen: Kontinuität betonen ist erlaubt — ehrlich, mit ausgewiesenen Brüchen und offener Kurskorrektur. Erkennen und kontern: Gib die Chronik einer externen Historiker-Kuratel und einem offengelegten Quellenapparat zur Prüfung — eine Geschichtsschreibung, die dokumentierte Kapitel auslässt, hält einer unabhängigen Peer-Review nicht stand. Die Fußnote im Anhang bleibt eine Auslassung mit Feigenblatt — die gewollte Wirkung entsteht gerade dadurch, dass die Brüche aus der sichtbaren Erzählung verschwinden. Die schwierigen Kapitel nur in die interne Chronik und ins Archiv zu schieben löst das Problem nicht: Legitimiert wird über die öffentliche Erzählung — bleibt die Ausstellung geschönt, arbeitet die Technik genau dort weiter, wo sie wirkt, und das Archiv dient bloß als Alibi. Den „visionären Gründervater" samt zurückdatierter Bekenntnisse zu inszenieren macht es schlimmer — das ist aktive Revision der Vergangenheit und damit die Technik in Reinform.',
      en: 'The agency proposal is historical narrative control: the past is trimmed into a seamless success line so that today\'s strategy reads as inherited tradition rather than a U-turn. The best option leaves the documented breaks in and tells the present as a deliberate choice — which removes the staging\'s foundation. The mechanism: a contradiction-free history lends the present position legitimacy, but the moment the omission surfaces, attention flips from the issue to what was left out. On the evidence: "historical narrative control" is a memory-politics concept with no measured effect — name the pattern, but do not bank on an established effect. Used legitimately: stressing continuity is fine — honestly, with the breaks disclosed and the course correction owned. To spot and counter it: hand the chronicle to an outside panel of historians and an openly documented source apparatus — a history that drops documented chapters does not survive an independent peer review. The footnote in the appendix stays an omission with a fig leaf — the intended effect exists precisely because the breaks vanish from the visible story. Moving the difficult chapters into the internal chronicle and the archive alone does not solve it: the legitimising work runs through the public story — if the exhibition stays sanitised, the technique keeps operating exactly where it takes effect, and the archive serves as a mere alibi. Staging a "visionary founding father" with backdated commitments makes it worse — that is active revision of the past, the technique in its purest form.',
    },
    points: 10,
    primaryTechniqueId: 'historical_narrative_control',
    relatedTechniques: ['historical_narrative_control', 'agenda_setting'],
  },
  {
    id: 'wave5c-historical_narrative_control-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'In seiner ersten Townhall erzählt der neue Vorstandschef eines Maschinenbauers die Firmengeschichte neu: Die zwölf Jahre unter seinem Vorgänger fasst er als „verlorenes Jahrzehnt der Verzagtheit" zusammen, seinen eigenen Antritt als Rückkehr zu den „mutigen Gründerjahren". Der umgedeutete Rückblick soll den angekündigten radikalen Konzernumbau als überfällige Wiederherstellung der wahren Tradition legitimieren.',
      en: 'In his first town hall, the new CEO of a machinery maker retells the company\'s history: the twelve years under his predecessor he sums up as a "lost decade of timidity", his own arrival as a return to the "bold founding years". The reinterpreted look-back is meant to legitimise the announced radical restructuring as an overdue restoration of the true tradition.',
    },
    options: [
      { de: 'Kontrolle des Geschichtsbildes', en: 'Historical narrative control' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
      { de: 'Narrative Persuasion', en: 'Narrative persuasion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kontrolle des Geschichtsbildes: Der CEO steuert die Lesart der Vergangenheit — die Vorgänger-Ära wird zum „verlorenen Jahrzehnt" umgedeutet, der eigene Antritt zur Rückkehr zu den „Gründerjahren" —, damit der heutige Umbau als Wiederherstellung der wahren Tradition legitim erscheint. Das ist der Kern des Begriffs: selektives Erinnern und Revision des Rückblicks im Dienst gegenwärtiger Macht. Hinweis zur Evidenz: ein Konzept der Erinnerungspolitik ohne belegtes Wirkmaß — benenne das Muster, ohne einen gesicherten Effekt zu unterstellen. Legitim einsetzen: Eine neue Führung darf einen Kurswechsel begründen — aber mit belegten Zahlen zur Vorgänger-Bilanz statt mit einer umgeschriebenen Heldenerzählung. Erkennen und kontern: Werde hellhörig, wenn eine ganze Ära pauschal zur dunklen Vorgeschichte erklärt wird; frag nach den konkreten, überprüfbaren Fakten hinter dem „verlorenen Jahrzehnt". Themensetzung (Agenda Setting) wäre es, wenn ein Gegenwartsthema durch Dauerpräsenz wichtig gemacht würde — hier wird die Vergangenheit umgedeutet, nicht ein aktuelles Thema gesetzt. Narrative Persuasion beschreibt Überzeugung durch eine Geschichte allgemein; das prägende Muster ist hier speziell die Kontrolle über die Deutung der eigenen Firmenhistorie.',
      en: 'Historical narrative control: the CEO steers the reading of the past — the predecessor era is recast as a "lost decade", his own arrival as a return to the "founding years" — so that today\'s restructuring reads as a restoration of the true tradition. That is the core of the term: selective remembering and revision of the record in the service of present power. On the evidence: a memory-politics concept with no measured effect — name the pattern without implying an established effect. Used legitimately: new leadership may justify a change of course — but with evidenced figures on the predecessor\'s record rather than a rewritten hero story. To spot and counter it: prick up your ears when a whole era is written off wholesale as a dark prehistory; ask for the concrete, checkable facts behind the "lost decade". Agenda setting would be it if a present-day topic were made important through sustained presence — here the past is reinterpreted, not a current issue set. Narrative persuasion describes persuasion through a story in general; the defining pattern here is specifically control over the reading of one\'s own company history.',
    },
    points: 10,
    primaryTechniqueId: 'historical_narrative_control',
    relatedTechniques: ['historical_narrative_control', 'agenda_setting', 'narrative_persuasion'],
  },
];
