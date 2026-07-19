// Welle 5c: 3 Übungen für decontextualization_cheapfakes.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cDecontextualizationCheapfakes: Exercise[] = [
  {
    id: 'wave5c-decontextualization_cheapfakes-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Reputationsangriff auf einen Lebensmittelkonzern: Auf einem viralen Kanal kursiert ein echtes, unbearbeitetes Foto eines Brands, überschrieben „Heute in der Produktionshalle von [Marke]". Die Pressestelle verifiziert: Das Bild ist unverändert — es zeigt aber einen Lagerbrand eines anderen Unternehmens aus dem Jahr 2016.',
      en: 'Reputational attack on a food company: a viral channel is circulating a real, unaltered photo of a fire, captioned "Today at [brand]\'s production hall". The press office verifies it: the image is untouched — but it shows a warehouse fire at a different company back in 2016.',
    },
    options: [
      { de: 'Dekontextualisierung / Cheapfakes', en: 'Decontextualization / cheapfakes' },
      { de: 'Synthetische Medien / Deepfake', en: 'Synthetic media / deepfake' },
      { de: 'Visuelle Manipulation (retuschiertes Bild)', en: 'Visual manipulation (doctored image)' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity/provenance deception' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dekontextualisierung / Cheapfakes: Das Bild ist echt und unverändert — getäuscht wird allein über die falsche Beschriftung („heute", „unsere Halle"). Der Hebel ist die Autorität des unmanipulierten Fotos: Was echt aussieht, wird kaum hinterfragt, und der falsche Kontext liefert die Erzählung gratis mit. Legitim ist derselbe Mechanismus in seriös: Archivmaterial darf man zeigen, wenn Datum, Ort und Anlass korrekt ausgewiesen sind. Erkennen und kontern: Frage nach Aufnahmedatum und Erstquelle, prüfe das Motiv per Reverse-Bildersuche und stelle den echten Kontext sichtbar daneben. Ein Deepfake wäre KI-erzeugt — hier wurde nichts synthetisiert. Visuelle Manipulation würde die Bildinhalte selbst verändern (retuschieren, montieren); hier ist kein Pixel angetastet. Identitäts- und Herkunftstäuschung fälscht, wer etwas gesendet oder erstellt hat — hier stimmt die Quelle des Bildes, falsch ist nur der behauptete Anlass.',
      en: 'Decontextualization / cheapfakes: the image is real and unaltered — the deception runs entirely through the false caption ("today", "our hall"). The lever is the authority of an unmanipulated photo: what looks genuine is rarely questioned, and the false context supplies the narrative for free. The same mechanism is legitimate when done straight: archive material may be shown as long as date, place and occasion are stated correctly. To spot and counter it, ask for the capture date and original source, run the image through a reverse image search, and place the true context visibly alongside. A deepfake would be AI-generated — nothing here was synthesized. Visual manipulation would alter the image content itself (retouching, compositing); not a pixel is touched here. Identity/provenance deception falsifies who sent or created something — here the image\'s source is genuine; only the claimed occasion is false.',
    },
    points: 10,
    primaryTechniqueId: 'decontextualization_cheapfakes',
    relatedTechniques: ['decontextualization_cheapfakes', 'synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'wave5c-decontextualization_cheapfakes-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Kommunikationsleiterin eines Klinikums entdeckst du, dass ein echtes, aber sechs Jahre altes Foto überfüllter Flure als „Zustände bei uns heute" durch die Netzwerke geht. Das Bild ist unverändert; falsch behauptet sind nur Datum und Ort.',
      en: 'As head of communications at a hospital, you discover that a real but six-year-old photo of crowded corridors is going around online as "conditions here today". The image is unaltered; only the date and place are falsely claimed.',
    },
    options: [
      {
        de: 'Ich belege den echten Kontext: Ich weise zeitnah Aufnahmedatum und Herkunft des Originals aus, verlinke die auffindbare Erstquelle und zeige per Reverse-Bildersuche, dass das Motiv alt und ortsfremd ist — sachlich, ohne die Falschbehauptung unnötig zu wiederholen.',
        en: 'I document the real context: I promptly state the capture date and origin of the original, link the traceable first source, and use a reverse image search to show the picture is old and unrelated — factually, without needlessly repeating the false claim.',
      },
      {
        de: 'Ich fordere die Plattform auf, das Bild als Deepfake zu kennzeichnen, weil es unser Haus falsch darstellt.',
        en: 'I ask the platform to label the image as a deepfake, since it misrepresents our hospital.',
      },
      {
        de: 'Ich ignoriere den Post — das Bild ist ja unbearbeitet, und ein Faktencheck macht ihn nur größer.',
        en: 'I ignore the post — the image is unedited after all, and a fact-check would only amplify it.',
      },
      {
        de: 'Ich lasse ein aktuelles, bewusst leeres Flur-Foto gegenposten, ohne den kursierenden Beitrag oder seinen falschen Kontext überhaupt zu erwähnen.',
        en: 'I have a current, deliberately empty-corridor photo posted in response, without mentioning the circulating post or its false context at all.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Angriff ist ein Cheapfake: echtes Material, das allein durch falschen Kontext (Datum, Ort) täuscht. Legitim ist derselbe Mechanismus in seriös: Archiv- und Vergleichsbilder darfst du zeigen, solange Datum, Ort und Anlass korrekt ausgewiesen sind. Kontern heißt hier, genau diesen fehlenden Kontext zu liefern — Aufnahmedatum, Erstquelle und Reverse-Bildersuche stellen die Wahrheit überprüfbar daneben, ohne die Falschbehauptung zur Schlagzeile zu machen. Die Deepfake-Meldung wirkt plausibel, weil „Fälschung" naheliegt — aber das Bild ist nicht KI-erzeugt; eine falsche Technik-Zuschreibung lässt die Meldung ins Leere laufen und untergräbt deine Glaubwürdigkeit. Ignorieren verwechselt „unbearbeitet" mit „harmlos": Gerade weil das Foto echt ist, überzeugt es — Schweigen überlässt der Gegenseite die Deutung. Ein reines Gegen-Foto ohne Richtigstellung adressiert den falschen Kontext nicht und wirkt wie Behauptung gegen Behauptung; die entscheidende Information — dass das Bild alt und ortsfremd ist — fehlt.',
      en: 'The attack is a cheapfake: genuine material that deceives solely through false context (date, place). The same mechanism is legitimate when done straight: you may show archive or comparison images as long as date, place and occasion are stated correctly. Countering it means supplying exactly that missing context — capture date, original source and a reverse image search put the verifiable truth alongside, without turning the false claim into the headline. The deepfake report seems plausible because "fake" comes to mind — but the image is not AI-generated; a wrong technique label makes the report misfire and undercuts your credibility. Ignoring it confuses "unedited" with "harmless": precisely because the photo is real, it convinces — silence hands the other side the interpretation. A bare counter-photo without a correction fails to address the false context and reads as claim against claim; the decisive fact — that the image is old and unrelated — is missing.',
    },
    points: 10,
    primaryTechniqueId: 'decontextualization_cheapfakes',
    relatedTechniques: ['decontextualization_cheapfakes', 'synthetic_media'],
  },
  {
    id: 'wave5c-decontextualization_cheapfakes-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Dieses Vorgehen heißt ___.',
      en: 'Complete the sentence: this pattern is called ___.',
    },
    scenario: {
      de: 'Monitoring-Team einer Partei sichtet einen viralen Clip: Ein echtes Interviewvideo der Spitzenkandidatin ist merklich verlangsamt, sodass ihre Sprache verwaschen und benommen klingt. Die Bildspur ist technisch unangetastet — nur das gedrosselte Tempo erzeugt den Eindruck.',
      en: 'A party\'s monitoring team reviews a viral clip: a genuine interview video of the lead candidate has been noticeably slowed down, so her speech sounds slurred and dazed. The footage is technically untouched — only the slowed-down playback creates the impression.',
    },
    options: [
      {
        de: 'Dekontextualisierung / Cheapfakes — echtes Material wird durch einen simplen Eingriff (hier: Tempo) in einen falschen Eindruck gerückt, ganz ohne KI',
        en: 'decontextualization / cheapfakes — real material is pushed into a false impression by a crude edit (here: speed), entirely without AI',
      },
      {
        de: 'Synthetische Medien / Deepfake — die Aufnahme wurde per KI erzeugt oder das Gesicht synthetisch verändert',
        en: 'synthetic media / deepfake — the footage was AI-generated or the face synthetically altered',
      },
      {
        de: 'Visuelle Manipulation — die Bildinhalte selbst wurden retuschiert, montiert oder entfernt',
        en: 'visual manipulation — the image content itself was retouched, composited or removed',
      },
      {
        de: 'Stimmklonen / Vishing — eine synthetisch nachgebildete Stimme imitiert die Person',
        en: 'voice cloning / vishing — a synthetically reproduced voice imitates the person',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Dekontextualisierung / Cheapfakes: Das Video ist echt, kein Bild und kein Ton wurde synthetisiert — die Täuschung entsteht allein aus dem verlangsamten Tempo. Genau das macht Cheapfakes aus: einfache, KI-freie Eingriffe (Tempo, Schnitt, Zuschnitt, Beschriftung), die reales Material in einen falschen Eindruck rücken. Legitim ist Zeitlupe oder Zeitraffer als offen gekennzeichnetes Stilmittel — etwa in einer Reportage, wenn die Bearbeitung transparent gemacht wird. Erkennen und kontern: Vergleiche mit dem Originalclip in Normalgeschwindigkeit und stelle Länge und Quelle des Originals sichtbar daneben. Deepfake liegt nahe, weil das Ergebnis manipuliert wirkt — aber nichts ist KI-erzeugt; die Aufnahme selbst ist authentisch. Visuelle Manipulation würde die Bildinhalte verändern, hier ist die Bildspur unangetastet. Stimmklonen würde eine synthetische Stimme erzeugen; hier ist es die echte Stimme, nur gedrosselt.',
      en: 'Decontextualization / cheapfakes: the video is real, no image or audio was synthesized — the deception comes solely from the slowed speed. That is exactly what defines cheapfakes: simple, AI-free edits (speed, cuts, cropping, captions) that push genuine material into a false impression. Slow motion or time-lapse is legitimate as an openly labelled stylistic device — for instance in a report, when the edit is made transparent. To spot and counter it, compare with the original clip at normal speed and place the original\'s length and source visibly alongside. Deepfake seems close because the result feels manipulated — but nothing is AI-generated; the recording itself is authentic. Visual manipulation would alter the image content, yet the footage here is untouched. Voice cloning would create a synthetic voice; here it is the real voice, merely slowed down.',
    },
    points: 10,
    primaryTechniqueId: 'decontextualization_cheapfakes',
    relatedTechniques: ['decontextualization_cheapfakes', 'synthetic_media', 'voice_cloning_vishing'],
  },
];
