// Welle R4: 3 Übungen für integrity_clash_laundering (Integrity Clash / Provenance Laundering).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4IntegrityClashLaundering: Exercise[] = [
  {
    id: 'w4-integrity_clash_laundering-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik täuscht hier das Prüf-Tool und die Redaktion?',
      en: 'Which technique is fooling the verification tool and the newsroom here?',
    },
    scenario: {
      de: 'Faktencheck-Desk einer Nachrichtenagentur, Anfrage an den Leiter Unternehmenskommunikation eines Logistikkonzerns: Ein Video zeigt angeblich einen Chemieunfall auf dem Betriebshof. Das Prüf-Tool der Redaktion meldet „Content Credentials gültig, unbearbeitete Kameraaufnahme". Die forensische Analyse des Konzerns ergibt später: Der Clip ist KI-generiert und wurde von einem Bildschirm mit einem signierenden Smartphone abgefilmt — das Herkunftsmanifest bezeugt korrekt die Neuaufnahme, nicht das Gezeigte.',
      en: 'Fact-checking desk of a news agency, inquiry to the head of corporate communications at a logistics group: a video purports to show a chemical accident in the depot yard. The newsroom\'s verification tool reports "Content Credentials valid, unedited camera capture". The company\'s forensic analysis later shows: the clip is AI-generated and was filmed off a screen with a signing smartphone — the provenance manifest truthfully attests to the re-capture, not to what is shown.',
    },
    options: [
      { de: 'Integrity Clash / Provenance Laundering', en: 'Integrity clash / provenance laundering' },
      { de: 'Synthetische Medien (Deepfake-Video/-Bild)', en: 'Synthetic media (deepfake video/imagery)' },
      { de: 'Identity and Provenance Deception (Täuschung über Urheberschaft)', en: 'Identity and provenance deception (misattributed authorship)' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Integrity Clash / Provenance Laundering: Herkunftssignale wie Content Credentials bezeugen die technische Integrität einer Datei und den dokumentierten Abschnitt ihrer Entstehungskette — nicht die semantische Echtheit des Inhalts. Genau diese Lücke nutzt die Neuaufnahme über eine legitime, signierende Kamera: Der synthetische Clip erwirbt ein wahrheitsgemäßes Manifest über den falschen Gegenstand, die Herkunft ist „gewaschen". Legitim einsetzen: Nutze Provenance-Standards für dein eigenes Material — und kommuniziere intern präzise, was sie bezeugen (Signatur und Kette, nicht Wahrheit), damit dein Team sie richtig einordnet. Erkennen und kontern: Prüfe, wo die Manifest-Kette beginnt und ob Aufnahmeort, -zeit und Gerät zum behaupteten Ereignis passen; behandle ein grünes Häkchen als Datei-Prüfung, nie als Inhalts-Prüfung, und such nach Abfilm-Spuren wie Moiré oder Reflexen. Synthetische Medien wirken plausibel, weil ein KI-Clip im Spiel ist — der Eintrag bezeichnet aber die Erzeugung des Inhalts; das Spezifikum hier ist, dass die Prüf-Ebene selbst zum Täuschungswerkzeug wird. Identity and Provenance Deception ist der breitere Nachbar für Täuschung über Identität und Verantwortlichkeit — hier wird nicht ein Absender vorgetäuscht, sondern gezielt der technische Nachweis-Layer ausgenutzt. Visuelle Manipulation lenkt Wahrnehmung über Bildsprache und Gestaltung; das Video wirkt aber nicht durch Gestaltung, sondern durch sein beglaubigtes Etikett.',
      en: 'Integrity clash / provenance laundering: provenance signals like Content Credentials attest to the technical integrity of a file and the documented segment of its creation chain — not to the semantic authenticity of the content. That is exactly the gap the re-capture through a legitimate signing camera exploits: the synthetic clip acquires a truthful manifest about the wrong object; its provenance has been laundered. Used legitimately: apply provenance standards to your own material — and be precise internally about what they attest (signature and chain, not truth) so your team reads them correctly. To spot and counter it: check where the manifest chain begins and whether capture location, time, and device match the claimed event; treat a green check mark as a file check, never a content check, and look for signs the clip was re-shot off a screen, such as moiré patterns or reflections. Synthetic media seems plausible because an AI clip is involved — but that entry covers the creation of the content; the specific move here is that the verification layer itself becomes the instrument of deception. Identity and provenance deception is the broader neighbor covering deception about identity and accountability — here no sender is being impersonated; the technical attestation layer is being gamed. Visual manipulation steers perception through imagery and design; this video works not through its design but through its certified label.',
    },
    points: 10,
    primaryTechniqueId: 'integrity_clash_laundering',
    relatedTechniques: ['integrity_clash_laundering', 'synthetic_media', 'identity_provenance_deception', 'visual_manipulation'],
  },
  {
    id: 'w4-integrity_clash_laundering-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Krisenstab bei einem Energieversorger: Auf einer Plattform kursiert ein Video, das einen Störfall in einem Umspannwerk zeigen soll. Dein Monitoring-Dienstleister meldet: „Content Credentials kryptografisch gültig, Kamera-Original — aus unserer Sicht authentisch." Der Vorstand erwartet in einer Stunde deine Empfehlung, ob das Unternehmen den Vorfall einräumt oder dementiert.',
      en: 'Crisis team at an energy utility: a video circulating on a platform purports to show an incident at a substation. Your monitoring provider reports: "Content Credentials cryptographically valid, camera original — authentic in our assessment." The board expects your recommendation within the hour: acknowledge the incident or deny it.',
    },
    options: [
      {
        de: 'Ich stufe den Befund als Datei-Prüfung ein, nicht als Echtheitsbeweis: Wir klären, wo die Manifest-Kette beginnt und ob Aufnahmeort und -zeit zum behaupteten Störfall passen, und gleichen mit Betriebsdaten und Standortteam ab — erst auf dieser Basis empfehle ich einräumen oder dementieren.',
        en: 'I classify the finding as a file check, not proof of authenticity: we establish where the manifest chain begins and whether capture location and time match the claimed incident, and cross-check with operations data and the site team — only on that basis do I recommend acknowledging or denying.',
      },
      {
        de: 'Ich folge dem Dienstleister: Kryptografische Signaturen lassen sich praktisch nicht fälschen, also ist das Video echt — ich empfehle, den Vorfall einzuräumen und in die Krisenkommunikation zu gehen.',
        en: 'I follow the provider: cryptographic signatures are practically impossible to forge, so the video is real — I recommend acknowledging the incident and moving into crisis communications.',
      },
      {
        de: 'Ich empfehle ein sofortiges Dementi mit dem Hinweis, das Video könne ein Deepfake sein, solange keine KI-Wasserzeichen-Prüfung das Gegenteil belegt.',
        en: 'I recommend an immediate denial, pointing out the video could be a deepfake as long as no AI watermark check proves otherwise.',
      },
      {
        de: 'Ich lasse das Video zusätzlich durch zwei KI-Detektoren laufen; melden beide nichts, gilt die Echtheit als bestätigt und wir räumen ein.',
        en: 'I additionally run the video through two AI detectors; if both come back clean, authenticity counts as confirmed and we acknowledge.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Provenance-Signale bezeugen die Unversehrtheit einer Datei und den dokumentierten Abschnitt ihrer Kette — ein synthetischer oder manipulierter Inhalt kann über Neuaufnahme oder Neuexport genau solche gültigen Signale erwerben. Deshalb trennt die beste Option sauber: Signal-Prüfung als ein Indiz, Sachprüfung (Kettenbeginn, Aufnahmekontext, Betriebsdaten, Standortteam) als Entscheidungsgrundlage. Legitim einsetzen: Provenance-Checks gehören ins Verifikations-Repertoire jedes Krisenstabs — professionell wird es, wenn du ihren Geltungsbereich in der Empfehlung an den Vorstand explizit machst. Erkennen und kontern: Koppel jede Signal-Aussage („gültig", „Original") an die Frage, was genau sie bezeugt, und hol eine vom Signal unabhängige Bestätigung ein, bevor du dich festlegst. Die Dienstleister-Option wirkt plausibel, weil die Kryptografie tatsächlich kaum fälschbar ist — nur bezeugt sie nicht, was der Dienstleister daraus macht: Aus „Signatur intakt" wird unzulässig „Inhalt wahr". Das vorschnelle Deepfake-Dementi kehrt denselben Kategorienfehler nur um — ein fehlendes Wasserzeichen beweist so wenig wie ein vorhandenes, und wenn der Störfall real ist, kostet dich das Dementi die Glaubwürdigkeit im Kernmoment der Krise. Die Detektor-Option verlagert die Fehllogik auf die nächste Signal-Ebene: Wasserzeichen und Detektor-Befunde überleben Re-Encoding oft nicht; ein Nullbefund ist kein Befund.',
      en: 'Provenance signals attest to a file\'s intactness and the documented segment of its chain — synthetic or manipulated content can acquire exactly such valid signals through re-capture or re-export. That is why the best option separates cleanly: the signal check is one indicator; the substantive check (chain start, capture context, operations data, site team) is the basis for the decision. Used legitimately: provenance checks belong in every crisis team\'s verification repertoire — it becomes professional when you make their scope explicit in your recommendation to the board. To spot and counter it: tie every signal claim ("valid", "original") to the question of what exactly it attests, and obtain confirmation independent of the signal before you commit. The provider option seems plausible because the cryptography is indeed nearly impossible to forge — but it does not attest to what the provider infers: "signature intact" quietly becomes "the content is genuine" — an inference the signal cannot support. The hasty deepfake denial merely inverts the same category error — a missing watermark proves as little as a present one, and if the incident is real, that denial costs you credibility at the core moment of the crisis. The detector option shifts the flawed logic to the next signal layer: watermarks and detector findings often do not survive re-encoding; a null result is not a result.',
    },
    points: 10,
    primaryTechniqueId: 'integrity_clash_laundering',
    relatedTechniques: ['integrity_clash_laundering', 'synthetic_media'],
  },
  {
    id: 'w4-integrity_clash_laundering-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Das eigentliche Täuschmoment liegt darin, dass ___.',
      en: 'Complete the sentence: The actual deceptive move is that ___.',
    },
    scenario: {
      de: 'Team-Chat des Social-Media-Teams während einer Übernahmedebatte: Ein Kollege postet ein angebliches Statement-Video des Konkurrenz-CEO mit dem Kommentar: „Hab es durch den Plattform-Detektor gejagt — kein KI-Inhalt erkannt, kein Wasserzeichen. Das ist echt, das können wir aufgreifen." Tatsächlich ist das Video KI-generiert; sein Wasserzeichen ging beim mehrfachen Re-Encoding verloren.',
      en: 'Social media team chat during a takeover debate: a colleague posts an alleged statement video of the rival CEO with the comment: "Ran it through the platform detector — no AI content flagged, no watermark. It\'s genuine, we can pick this up." In fact the video is AI-generated; its watermark was lost through repeated re-encoding.',
    },
    options: [
      {
        de: 'ein technisches Prüfsignal als Beleg für etwas gelesen wird, das es gar nicht bezeugen kann (Integrity Clash / Provenance Laundering)',
        en: 'a technical verification signal is read as evidence of something it cannot attest to (integrity clash / provenance laundering)',
      },
      {
        de: 'ein KI-System täuschend echte Videoinhalte erzeugt hat (Synthetische Medien)',
        en: 'an AI system has produced deceptively realistic video content (synthetic media)',
      },
      {
        de: 'über Urheber und Verantwortlichkeit des Inhalts getäuscht wird (Identity and Provenance Deception)',
        en: 'the audience is deceived about the author and accountability of the content (identity and provenance deception)',
      },
      {
        de: 'Bildsprache und Schnitt die emotionale Wahrnehmung lenken (Visuelle Manipulation)',
        en: 'imagery and editing steer emotional perception (visual manipulation)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Integrity Clash / Provenance Laundering: Wasserzeichen und Detektor-Befunde sind fragile Signal-Ebenen — bei Re-Encoding gehen sie erwartbar verloren. Die Täuschung greift, weil das Team einen Nullbefund („nichts erkannt") als positiven Echtheitsbeleg liest: Das Signal bezeugt hier schlicht nichts, wird aber als Beweis behandelt. Legitim einsetzen: Detektoren und Wasserzeichen-Checks sind als Vorfilter im Monitoring sinnvoll — professionell nutzt du sie, indem du ihren Geltungsbereich mitlieferst („kein Befund" heißt „keine Aussage"). Erkennen und kontern: Frag bei jedem Prüfergebnis, was es positiv bezeugt — und lass brisantes Material vor dem Aufgreifen über einen unabhängigen Weg bestätigen, etwa die Gegenseite oder die Originalquelle des angeblichen Statements. Synthetische Medien wirken plausibel, weil das Video tatsächlich KI-generiert ist — dieser Eintrag beschreibt aber die Erzeugung des Inhalts; gefragt war das Täuschmoment im Team-Chat, und das ist der fehlgedeutete Prüfbefund. Identity and Provenance Deception liegt nahe, weil dem CEO ein fremdes Statement untergeschoben wird — das ist die Wirkung des Gesamtszenarios, nicht der Hebel, der den Kollegen überzeugt hat. Visuelle Manipulation scheidet aus: Nicht Bildsprache oder Schnitt überzeugen hier, sondern das scheinbar saubere Prüfergebnis.',
      en: 'Integrity clash / provenance laundering: watermarks and detector findings are fragile signal layers — re-encoding predictably destroys them. The deception works because the team reads a null result ("nothing flagged") as positive proof of authenticity: the signal attests to nothing here, yet is treated as evidence. Used legitimately: detectors and watermark checks make sense as a first-pass filter in monitoring — you use them professionally by stating their scope alongside the result ("no finding" means "no statement"). To spot and counter it: for every verification result, ask what it positively attests — and have sensitive material confirmed through an independent route before picking it up, such as the other side or the original source of the alleged statement. Synthetic media seems plausible because the video really is AI-generated — but that entry describes the creation of the content; the question asked for the deceptive move in the team chat, and that is the misread verification result. Identity and provenance deception is close because a fabricated statement is being attributed to the CEO — but that is the effect of the overall scenario, not the lever that convinced the colleague. Visual manipulation is out: it is not imagery or editing that persuades here, but the seemingly clean check result.',
    },
    points: 10,
    primaryTechniqueId: 'integrity_clash_laundering',
    relatedTechniques: ['integrity_clash_laundering', 'synthetic_media', 'identity_provenance_deception', 'visual_manipulation'],
  },
];
