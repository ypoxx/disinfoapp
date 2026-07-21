// Welle R6: 3 Übungen für censorship_chilling_effects (Zensur & Chilling Effects).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung. Evidenz-Tier moderate: Wirkaussagen nur so weit wie belegt.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6CensorshipChillingEffects: Exercise[] = [
  {
    id: 'wave6-censorship_chilling_effects-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Interne Townhall eines Konzerns nach mehreren kritischen Wortmeldungen im anonymen Hinweisgeber-Kanal: Der Kommunikationschef stellt vor der Belegschaft klar, man werte künftig „aus, wer den Kanal wie nutzt", und Auffälligkeiten würden „nachgehalten". In den Wochen darauf brechen die Meldungen fast vollständig ein — auch Routine- und Compliance-Fragen bleiben aus, obwohl niemand ausdrücklich etwas verboten hat.',
      en: 'A company town hall after several critical posts in the anonymous whistleblower channel: the head of communications tells staff that from now on the firm will "review who uses the channel and how", and that anything conspicuous will be "followed up". Over the following weeks reports dry up almost entirely — even routine and compliance questions stop, although no one has explicitly forbidden anything.',
    },
    options: [
      { de: 'Zensur & Chilling Effects', en: 'Censorship & Chilling Effects' },
      { de: 'Coercive Control (Zwang und Kontrolle)', en: 'Coercive Control' },
      { de: 'Zersetzung', en: 'Zersetzung (Decomposition)' },
      { de: 'Kompromat (Druck über kompromittierendes Material)', en: 'Kompromat (Compromising Material as Leverage)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zensur & Chilling Effects: Der Hebel ist kein ausgesprochenes Verbot und kein direkter Zwang gegen eine bestimmte Person, sondern die sichtbar gemachte Überwachung — die Ansage, Nutzung werde „ausgewertet" und „nachgehalten", lässt Menschen aus Sorge vor Zuordnung schweigen, bis auch legitime Fragen ausbleiben (Selbstzensur). Genau dieser indirekte, selbst auferlegte Rückzug ohne ausdrückliche Regel ist die Signatur des Chilling Effects. Schutzhinweis: Wer Betroffene schützt, benennt den eingebrochenen Kanal nicht als „Desinteresse", sondern als Folge der Überwachungsansage; belastbarer Schutz heißt, Anonymität technisch und schriftlich zuzusichern und die personenbezogene Auswertung glaubhaft zurückzunehmen. Erkennen und kontern: Achte auf die Kombination aus angekündigter Beobachtung und anschließend sinkender Beteiligung; frag, ob eine „ruhigere" Kennzahl in Wahrheit Schweigen misst, und dokumentiere den Verlauf. Coercive Control lag nahe, weil auch dort Überwachung als Mittel dient — dort ist der Zwang jedoch direkt und auf bestimmte Personen gerichtet (Regeln, Drohungen, spürbare Konsequenzen), hier befiehlt niemand etwas: Die Belegschaft verstummt von selbst aus wahrgenommener Beobachtung. Zersetzung wirkte plausibel, weil auch sie internen Widerspruch dämpft — sie arbeitet aber verdeckt und maßgeschneidert gegen einzelne Zielpersonen über längere Zeit, während hier eine einzige, offene Ansage an alle den Effekt auslöst. Kompromat wäre die Antwort, wenn belastendes Material gegen konkrete Personen als Druckmittel gehalten und eingesetzt würde — hier gibt es kein solches Material, nur die abschreckende Aussicht, überhaupt identifiziert zu werden.',
      en: 'Censorship & Chilling Effects: the lever is neither a stated ban nor direct compulsion of a specific person, but visible surveillance — announcing that usage will be "reviewed" and "followed up" makes people go quiet for fear of being identified, until even legitimate questions stop (self-censorship). That indirect, self-imposed withdrawal with no explicit rule is the signature of a chilling effect. Protective note: to protect the people affected, read the dead channel not as "disinterest" but as a consequence of the surveillance announcement; real protection means guaranteeing anonymity technically and in writing and credibly rolling back the individual-level analysis. To spot and counter it: watch for the pairing of announced monitoring and subsequently falling participation; ask whether a "calmer" metric is actually measuring silence, and document the timeline. Coercive control was close because it too uses surveillance as a tool — but there the compulsion is direct and aimed at specific individuals (rules, threats, tangible consequences), whereas here no one is ordered to do anything: staff fall silent on their own from perceived observation. Zersetzung seemed plausible because it also dampens internal dissent — but it works covertly and in tailored fashion against specific targets over time, whereas here a single, open announcement to everyone triggers the effect. Kompromat would be the answer if compromising material on named people were held and deployed as leverage — but there is no such material here, only the deterrent prospect of being identified at all.',
    },
    points: 10,
    primaryTechniqueId: 'censorship_chilling_effects',
    relatedTechniques: ['censorship_chilling_effects'],
  },
  {
    id: 'wave6-censorship_chilling_effects-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die interne Kommunikation. Zwei Wochen nachdem die Leitung in einer Townhall angekündigt hat, die Nutzung des anonymen Hinweisgeber-Kanals werde „ausgewertet", sind die Meldungen von rund dreißig pro Woche auf nahezu null gefallen — auch sachliche Rückfragen zu Prozessen bleiben aus. Eine Bereichsleiterin freut sich bereits über „endlich Ruhe im Kanal".',
      en: 'You lead internal communications. Two weeks after leadership announced in a town hall that use of the anonymous whistleblower channel would be "reviewed", reports have dropped from around thirty a week to almost zero — even factual process questions have stopped. A division head is already pleased about "finally some quiet in the channel".',
    },
    options: [
      {
        de: 'Ich benenne den Effekt gegenüber der Leitung: Der Einbruch ist kein Desinteresse, sondern Selbstzensur nach der Überwachungsansage. Ich dringe darauf, die personenbezogene Auswertung öffentlich und glaubhaft zurückzunehmen, die Anonymität des Kanals technisch und schriftlich zuzusichern, und dokumentiere Ansage wie Verlauf — damit legitime Meldungen wieder möglich werden.',
        en: 'I name the effect to leadership: the drop is not disinterest but self-censorship after the surveillance announcement. I press to publicly and credibly roll back the individual-level analysis, to guarantee the channel\'s anonymity technically and in writing, and I document both the announcement and the timeline — so that legitimate reports become possible again.',
      },
      {
        de: 'Ich werte den Rückgang als Erfolg: Offenbar gab es weniger Beschwerden und das Klima hat sich beruhigt. Ich melde die gesunkene Meldungszahl als Verbesserung nach oben.',
        en: 'I treat the drop as a success: apparently there were fewer complaints and the climate has calmed down. I report the lower number of reports upward as an improvement.',
      },
      {
        de: 'Ich fordere die Belegschaft per Rundmail auf, den Kanal wieder zu nutzen, und stelle in Aussicht, dass sonst Themen „von oben" gesetzt werden.',
        en: 'I send an all-staff email telling staff to use the channel again, and hint that otherwise topics will be set "from the top".',
      },
      {
        de: 'Ich lasse die Auswertung laufen, veröffentliche aber zusätzlich ein Ranking der aktivsten Abteilungen, um über den Wettbewerb wieder zur Nutzung anzuspornen.',
        en: 'I keep the analysis running but additionally publish a ranking of the most active departments, to spur usage again through competition.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Reaktion erkennt den Chilling Effect als das, was er ist — eine durch die Überwachungsansage ausgelöste Selbstzensur — und schützt die Betroffenen handfest: Ursache benennen, die personenbezogene Auswertung glaubhaft zurücknehmen, Anonymität verbindlich zusichern und den Vorgang dokumentieren. Schutzhinweis: Solange die Beobachtung im Raum steht, misst jede „ruhigere" Kennzahl vor allem Schweigen; Vertrauen kehrt erst zurück, wenn die Zuordnung zur Person nachweislich vom Tisch ist. Erkennen: Das Warnzeichen ist der zeitliche Zusammenhang — Ansage der Auswertung, danach Einbruch auch legitimer Beiträge. Zur Erfolgs-Deutung: Sie klingt aufgeräumt, verwechselt aber Schweigen mit Zufriedenheit und schreibt genau die Abschreckung als Verbesserung fort, die das Problem ist. Zur Rundmail mit Druck: Der Impuls ist verständlich, doch neue Drohkulisse („von oben") verstärkt die Abschreckung, statt sie aufzulösen — Zwang heilt keinen Chilling Effect. Zum Aktivitäts-Ranking: Es lässt die Überwachung bestehen und macht Sichtbarkeit sogar zur Kennzahl; wer sich ohnehin beobachtet fühlt, wird durch ein öffentliches Ranking eher stiller, nicht offener.',
      en: 'The best response recognizes the chilling effect for what it is — self-censorship triggered by the surveillance announcement — and protects the people affected concretely: name the cause, credibly withdraw the individual-level analysis, firmly guarantee anonymity, and document the episode. Protective note: as long as the monitoring stands, any "calmer" metric mainly measures silence; trust returns only once identification of individuals is demonstrably off the table. To spot it: the warning sign is the timing — announcement of review, then a collapse of even legitimate contributions. On the "success" reading: it sounds tidy but mistakes silence for satisfaction and carries forward as an improvement the very deterrence that is the problem. On the pressuring all-staff email: the impulse is understandable, but a fresh threat ("from the top") amplifies the deterrence rather than dissolving it — coercion does not cure a chilling effect. On the activity ranking: it leaves the surveillance in place and even turns visibility into a metric; people who already feel watched grow quieter under a public ranking, not more open.',
    },
    points: 10,
    primaryTechniqueId: 'censorship_chilling_effects',
    relatedTechniques: ['censorship_chilling_effects'],
  },
  {
    id: 'wave6-censorship_chilling_effects-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Konzern-Intranet während eines noch laufenden Produktsicherheits-Rückrufs: Die Pressestelle weist die Redaktion an, die bereits veröffentlichte Mitarbeiter-FAQ zum aktuellen Rückruf offline zu nehmen und aus der internen Suche zu entfernen, damit die frühere Offenlegung nicht mehr auffindbar ist. Es wird keine andere Lesart des Vorgangs erzählt und nichts korrigiert oder eingeordnet — die weiterhin sicherheitsrelevante Information wird schlicht unzugänglich gemacht.',
      en: 'A company intranet during a still-ongoing product-safety recall: the press office instructs the editorial team to take the already-published staff FAQ about the current recall offline and remove it from internal search, so the earlier disclosure can no longer be found. No alternative account of events is told and nothing is corrected or contextualized — the still-safety-relevant information is simply made inaccessible.',
    },
    options: [
      { de: 'Zensur & Chilling Effects', en: 'Censorship & Chilling Effects' },
      { de: 'Kontrolle des historischen Narrativs', en: 'Historical Narrative Control' },
      { de: 'Data Voids & SEO-Manipulation', en: 'Data Voids & SEO Manipulation' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zensur & Chilling Effects: Das Muster ist die gezielte Unterdrückung — bereits veröffentlichte, zugängliche Information wird entfernt und aus der Suche genommen, damit sie nicht mehr auffindbar ist. Genau dieses Unzugänglich-Machen bestehender Information (nicht ihr Widerlegen oder Aktualisieren) ist der Zensur-Kern dieser Technik; Penney (2016) belegt daneben die abschreckende Zwillingsseite, den Chilling Effect, macht aber keine bezifferte Wirkzusage über Kontexte hinweg. Schutzhinweis: Sichere eine Kopie der Original-FAQ mit Zeitstempel außerhalb der Reichweite der Pressestelle und halt fest, wer wann die Entfernung angeordnet hat — gerade bei einem laufenden Rückruf bleibt die entzogene Information akut sicherheitsrelevant, und eine gesicherte Fassung ist der Ankerpunkt, den diese Taktik auflösen will. Erkennen: Achte darauf, ob Information korrigiert und eingeordnet oder ob sie stillschweigend entfernt und de-indexiert wird; Letzteres ist das Warnzeichen. Kontrolle des historischen Narrativs ist hier der schärfste Distraktor und die eigentliche Prüfung: Sie verlangt, dass eine kuratierte Lesart der Vergangenheit installiert wird, um sie zu legitimieren — hier wird aber gar keine Ersatzerzählung erzählt, und es geht nicht um die Um-Deutung von Geschichte, sondern um die Unterdrückung einer weiterhin gültigen Sicherheitsinfo zu einem noch laufenden Rückruf: Die Aufzeichnung wird entzogen, nicht umgedeutet. Data Voids wirkte plausibel, weil auch Suche betroffen ist — dort wird eine bestehende Leerstelle mit eigenem Material bespielt, um Suchende umzulenken, hier wird vorhandenes Material aus der Suche entfernt, um es zu verbergen.',
      en: 'Censorship & Chilling Effects: the pattern is deliberate suppression — already-published, accessible information is removed and pulled from search so it can no longer be found. This making-inaccessible of existing information (rather than rebutting or updating it) is the censorship core of this technique; Penney (2016) separately documents the deterrent twin, the chilling effect, but makes no quantified cross-context claim. Protective note: secure a time-stamped copy of the original FAQ beyond the press office\'s reach and record who ordered the removal and when — during an ongoing recall the withdrawn information stays acutely safety-relevant, and a secured version is the anchor this tactic tries to dissolve. To spot it: check whether information is corrected and contextualized or quietly removed and de-indexed; the latter is the warning sign. Historical narrative control is the sharpest distractor here and the real test: it requires installing a curated reading of the past to legitimize it — but here no replacement story is told at all, and this is not about re-interpreting history but about suppressing a still-valid safety notice for a still-ongoing recall: the record is withdrawn, not reinterpreted. Data voids seemed plausible because search is affected too — but there an existing gap is filled with one\'s own material to redirect searchers, whereas here existing material is pulled from search to hide it.',
    },
    points: 10,
    primaryTechniqueId: 'censorship_chilling_effects',
    relatedTechniques: ['censorship_chilling_effects', 'historical_narrative_control', 'data_voids_seo_manipulation'],
  },
];
