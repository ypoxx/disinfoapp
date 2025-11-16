import type { Quiz } from '@/types';

export const quizzes: Record<string, Quiz> = {
  basics: {
    id: 'basics-quiz',
    moduleId: 'basics',
    timeLimit: 300, // 5 minutes
    passingScore: 70,
    questions: [
      {
        id: 'basics-q1',
        question: {
          de: 'Was ist der Hauptunterschied zwischen Desinformation und Fehlinformation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Desinformation wird absichtlich verbreitet, Fehlinformation nicht' },
          { de: 'Fehlinformation ist gefährlicher als Desinformation' },
          { de: 'Desinformation kommt nur in sozialen Medien vor' },
          { de: 'Es gibt keinen Unterschied zwischen beiden' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Desinformation wird absichtlich und gezielt verbreitet, um zu täuschen oder zu manipulieren. Fehlinformation dagegen ist falsche Information, die ohne böse Absicht geteilt wird.',
        },
        points: 10,
      },
      {
        id: 'basics-q2',
        question: {
          de: 'Sind "Fake News" und Desinformation dasselbe?',
        },
        type: 'true-false',
        correctAnswer: 'false',
        explanation: {
          de: '"Fake News" ist ein umgangssprachlicher Begriff, der oft politisch verwendet wird. Desinformation ist der präzisere wissenschaftliche Begriff für absichtlich falsche Informationen.',
        },
        points: 10,
      },
      {
        id: 'basics-q3',
        question: {
          de: 'Welche der folgenden ist KEINE typische Motivation für das Verbreiten von Desinformation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Politische Manipulation' },
          { de: 'Finanzielle Gewinne durch Klicks' },
          { de: 'Versehentliche Weitergabe' },
          { de: 'Soziale Spaltung fördern' },
        ],
        correctAnswer: 2,
        explanation: {
          de: 'Versehentliche Weitergabe ist per Definition keine Desinformation, da diese absichtlich verbreitet wird. Die anderen Optionen sind typische Motivationen.',
        },
        points: 10,
      },
      {
        id: 'basics-q4',
        question: {
          de: 'Warum ist Desinformation in sozialen Medien besonders wirksam?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Schnelle Verbreitung und algorithmische Verstärkung' },
          { de: 'Menschen nutzen nur soziale Medien als Informationsquelle' },
          { de: 'Soziale Medien verbieten Faktenprüfungen' },
          { de: 'Traditionelle Medien sind immer vertrauenswürdiger' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Desinformation verbreitet sich in sozialen Medien schnell durch Teilen und wird oft durch Algorithmen verstärkt, die emotionale Inhalte bevorzugen.',
        },
        points: 10,
      },
      {
        id: 'basics-q5',
        question: {
          de: 'Was ist ein "Echo Chamber" (Echokammer) im Kontext von Desinformation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Eine Umgebung, wo nur ähnliche Meinungen geteilt werden' },
          { de: 'Ein Raum mit guter Akustik' },
          { de: 'Eine technische Funktion in sozialen Medien' },
          { de: 'Ein Werkzeug zur Faktenprüfung' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Eine Echokammer ist eine Informationsumgebung, in der Nutzer hauptsächlich mit Inhalten konfrontiert werden, die ihre bestehenden Überzeugungen bestätigen. Dies verstärkt Desinformation.',
        },
        points: 10,
      },
    ],
  },

  tactics: {
    id: 'tactics-quiz',
    moduleId: 'tactics',
    timeLimit: 420, // 7 minutes
    passingScore: 70,
    questions: [
      {
        id: 'tactics-q1',
        question: {
          de: 'Was ist "Astroturfing" im Kontext von Desinformation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Künstlich erzeugte Graswurzelbewegungen' },
          { de: 'Eine Art von Kunstrasen' },
          { de: 'Automatische Übersetzung von Inhalten' },
          { de: 'Künstliche Intelligenz zur Faktenprüfung' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Astroturfing bezeichnet das Vortäuschen einer spontanen Graswurzelbewegung, die in Wirklichkeit organisiert und bezahlt ist, um die öffentliche Meinung zu manipulieren.',
        },
        points: 10,
      },
      {
        id: 'tactics-q2',
        question: {
          de: 'Was sind "Deepfakes"?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'KI-generierte gefälschte Videos oder Audios' },
          { de: 'Besonders tiefe Recherchen' },
          { de: 'Verschlüsselte Nachrichten' },
          { de: 'Echte, aber manipulierte Fotos' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Deepfakes sind mit KI-Technologie erstellte gefälschte Videos, Audios oder Bilder, die täuschend echt wirken und oft schwer zu erkennen sind.',
        },
        points: 10,
      },
      {
        id: 'tactics-q3',
        question: {
          de: 'Emotionale Manipulation durch Desinformation funktioniert am besten mit welcher Emotion?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Angst und Wut' },
          { de: 'Freude und Hoffnung' },
          { de: 'Langeweile' },
          { de: 'Neugier' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Desinformation nutzt oft Angst und Wut, da diese Emotionen Menschen dazu bringen, Inhalte schnell zu teilen, ohne sie zu hinterfragen.',
        },
        points: 10,
      },
      {
        id: 'tactics-q4',
        question: {
          de: 'Was ist "Cherry Picking" als Desinformationstaktik?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Nur Fakten auswählen, die die eigene These stützen' },
          { de: 'Kirschen als Beispiel verwenden' },
          { de: 'Die besten Quellen auswählen' },
          { de: 'Zufällige Auswahl von Informationen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Cherry Picking bedeutet, selektiv nur die Fakten auszuwählen, die die eigene Position unterstützen, während widersprechende Beweise ignoriert werden.',
        },
        points: 10,
      },
      {
        id: 'tactics-q5',
        question: {
          de: 'Bot-Netzwerke in sozialen Medien werden hauptsächlich eingesetzt, um...',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Falsche Inhalte massenhaft zu verbreiten und Trends zu manipulieren' },
          { de: 'Nutzer vor Desinformation zu schützen' },
          { de: 'Fakten schneller zu überprüfen' },
          { de: 'Die Servergeschwindigkeit zu erhöhen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Bot-Netzwerke sind automatisierte Accounts, die verwendet werden, um Desinformation massenhaft zu verbreiten, Trends zu manipulieren und den Eindruck breiter Unterstützung zu erwecken.',
        },
        points: 10,
      },
      {
        id: 'tactics-q6',
        question: {
          de: 'Ist es eine Desinformationstaktik, wahre Informationen aus dem Kontext zu reißen?',
        },
        type: 'true-false',
        correctAnswer: 'true',
        explanation: {
          de: 'Ja! Selbst wahre Informationen können zur Desinformation werden, wenn sie aus dem Kontext gerissen und in einer irreführenden Weise präsentiert werden.',
        },
        points: 10,
      },
      {
        id: 'tactics-q7',
        question: {
          de: 'Was bedeutet "Whataboutism" als rhetorische Taktik?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Von einem Thema ablenken, indem man auf etwas anderes hinweist' },
          { de: 'Fragen stellen, um mehr zu lernen' },
          { de: 'Wissenschaftliche Methodik' },
          { de: 'Eine Diskussionstechnik für konstruktive Debatten' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Whataboutism ist eine Ablenkungstaktik, bei der statt auf Kritik einzugehen, auf vermeintliche Probleme beim Kritiker oder anderen hingewiesen wird.',
        },
        points: 10,
      },
    ],
  },

  psychology: {
    id: 'psychology-quiz',
    moduleId: 'psychology',
    timeLimit: 480, // 8 minutes
    passingScore: 70,
    questions: [
      {
        id: 'psych-q1',
        question: {
          de: 'Was ist der Bestätigungsfehler (Confirmation Bias)?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Die Tendenz, Informationen so zu interpretieren, dass sie unsere Überzeugungen bestätigen' },
          { de: 'Fehler beim Bestätigen von E-Mails' },
          { de: 'Eine Methode zur Faktenprüfung' },
          { de: 'Ein technischer Fehler in sozialen Medien' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Der Bestätigungsfehler ist unsere Tendenz, Informationen bevorzugt so wahrzunehmen und zu interpretieren, dass sie unsere bestehenden Überzeugungen und Erwartungen bestätigen.',
        },
        points: 10,
      },
      {
        id: 'psych-q2',
        question: {
          de: 'Angst reduziert unsere Fähigkeit zum kritischen Denken.',
        },
        type: 'true-false',
        correctAnswer: 'true',
        explanation: {
          de: 'Wahr. Angst aktiviert das limbische System und reduziert die Aktivität im präfrontalen Kortex, der für rationales Denken zuständig ist. Deshalb funktioniert angstbasierte Desinformation so gut.',
        },
        points: 10,
      },
      {
        id: 'psych-q3',
        question: {
          de: 'Was beschreibt der Dunning-Kruger-Effekt?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Menschen mit wenig Wissen überschätzen ihre Kompetenz' },
          { de: 'Experten sind immer selbstsicher' },
          { de: 'Je mehr man weiß, desto selbstsicherer wird man' },
          { de: 'Unwissenheit macht glücklich' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Der Dunning-Kruger-Effekt beschreibt, dass Menschen mit geringer Kompetenz in einem Bereich ihre Fähigkeiten oft überschätzen, während Experten eher zur Selbstunterschätzung neigen.',
        },
        points: 10,
      },
      {
        id: 'psych-q4',
        question: {
          de: 'Warum werden Inhalte mit moralischer Empörung häufiger geteilt?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Sie aktivieren soziale Identität und geben das Gefühl, auf der richtigen Seite zu stehen' },
          { de: 'Sie sind faktisch genauer' },
          { de: 'Algorithmen bevorzugen sie zufällig' },
          { de: 'Sie sind kürzer und leichter zu lesen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Moralische Empörung aktiviert unsere soziale Identität, gibt uns das Gefühl moralischer Überlegenheit und motiviert zum Teilen als "moralische Pflicht" - oft ohne Faktencheck.',
        },
        points: 10,
      },
      {
        id: 'psych-q5',
        question: {
          de: 'Was ist "Sozialer Beweis" (Social Proof)?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Unsere Tendenz, das Verhalten anderer zu imitieren, besonders in unsicheren Situationen' },
          { de: 'Ein juristischer Beweis in sozialen Netzwerken' },
          { de: 'Nachweis der Identität in sozialen Medien' },
          { de: 'Beweis für soziales Engagement' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Sozialer Beweis ist unsere psychologische Tendenz, uns an anderen zu orientieren. Online manifestiert sich dies durch Likes, Shares und virale Verbreitung - die manipuliert werden kann.',
        },
        points: 10,
      },
    ],
  },

  verification: {
    id: 'verification-quiz',
    moduleId: 'verification',
    timeLimit: 360, // 6 minutes
    passingScore: 70,
    questions: [
      {
        id: 'verify-q1',
        question: {
          de: 'Wofür steht das "A" in CRAAP (im CRAAP-Test für Quellenbewertung)?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Authority (Autorität) und Accuracy (Genauigkeit)' },
          { de: 'Authenticity (Authentizität)' },
          { de: 'Availability (Verfügbarkeit)' },
          { de: 'Algorithm (Algorithmus)' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'CRAAP steht für Currency, Relevance, Authority, Accuracy und Purpose - eine bewährte Methode zur systematischen Bewertung von Informationsquellen.',
        },
        points: 10,
      },
      {
        id: 'verify-q2',
        question: {
          de: 'Was ist "Laterales Lesen"?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Die ursprüngliche Quelle verlassen und recherchieren, was andere über sie sagen' },
          { de: 'Von links nach rechts lesen' },
          { de: 'Mehrere Artikel gleichzeitig lesen' },
          { de: 'Nur Überschriften lesen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Laterales Lesen bedeutet, nicht nur die Quelle selbst zu lesen, sondern parallel zu recherchieren, was andere über diese Quelle sagen - eine Schlüsseltechnik professioneller Faktenchecker.',
        },
        points: 10,
      },
      {
        id: 'verify-q3',
        question: {
          de: 'Welches Tool eignet sich am besten, um zu prüfen, ob ein Bild aus dem Kontext gerissen wurde?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Rückwärts-Bildersuche (z.B. Google Images, TinEye)' },
          { de: 'Photoshop' },
          { de: 'Facebook-Suche' },
          { de: 'Wikipedia' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Mit der Rückwärts-Bildersuche kannst du herausfinden, wann und wo ein Bild ursprünglich erschien, ob der Kontext geändert wurde oder ob es manipuliert wurde.',
        },
        points: 10,
      },
      {
        id: 'verify-q4',
        question: {
          de: 'Eine Steigerung von 2% auf 3% entspricht wie viel Prozent relativer Zunahme?',
        },
        type: 'multiple-choice',
        options: [
          { de: '50%' },
          { de: '1%' },
          { de: '3%' },
          { de: '5%' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Von 2% auf 3% ist eine Steigerung von 1 Prozentpunkt, aber 50% relativ (3 ist 50% mehr als 2). Diese Verwechslung wird oft zur Manipulation genutzt!',
        },
        points: 10,
      },
      {
        id: 'verify-q5',
        question: {
          de: '"Korrelation impliziert Kausalität" ist eine korrekte Aussage.',
        },
        type: 'true-false',
        correctAnswer: 'false',
        explanation: {
          de: 'Falsch! Korrelation bedeutet NICHT Kausalität. Nur weil zwei Dinge zusammen auftreten, heißt das nicht, dass eins das andere verursacht. Dies ist ein häufiger Fehler in irreführenden Statistiken.',
        },
        points: 10,
      },
      {
        id: 'verify-q6',
        question: {
          de: 'Welches Warnsignal deutet NICHT auf eine unzuverlässige Quelle hin?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Detaillierte Quellenangaben und Referenzen' },
          { de: 'Fehlende Autorenangabe' },
          { de: 'Sehr emotionale, reißerische Sprache' },
          { de: 'Verdächtige URL mit Rechtschreibfehlern' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Detaillierte Quellenangaben sind ein POSITIVES Zeichen! Die anderen drei sind Red Flags, die auf unzuverlässige Quellen hindeuten.',
        },
        points: 10,
      },
    ],
  },

  practice: {
    id: 'practice-quiz',
    moduleId: 'practice',
    timeLimit: 600, // 10 minutes
    passingScore: 80,
    questions: [
      {
        id: 'prac-q1',
        question: {
          de: 'Ein viraler Post behauptet: "Wissenschaftler bestätigen: Kaffee verhindert Krebs!" Welche Schritte solltest du ZUERST unternehmen?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Nach der Original-Studie suchen und prüfen, wer die Forschung durchgeführt hat' },
          { de: 'Den Post sofort teilen, weil Kaffee gesund ist' },
          { de: 'Alle Wissenschaftler ablehnen, weil sie oft widersprochen werden' },
          { de: 'Nur die Kommentare lesen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Immer zur Primärquelle gehen! Suche die Original-Studie, prüfe Stichprobengröße, Methodik und wer sie finanziert hat. Reißerische Vereinfachungen komplexer Forschung sind häufig irreführend.',
        },
        points: 15,
      },
      {
        id: 'prac-q2',
        question: {
          de: 'Du siehst ein schockierendes Video von "aktuellen Protesten" in deiner Stadt. Was tust du?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Rückwärts-Bildersuche, Datum prüfen, Nachrichtenseiten checken' },
          { de: 'Sofort an alle Kontakte weiterleiten' },
          { de: 'Ignorieren, weil Videos immer manipuliert sind' },
          { de: 'Nur auf die Kommentarzahl achten' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Perfekte Anwendung! Rückwärtssuche zeigt oft, dass "aktuelle" Videos alt sind oder aus anderen Kontexten stammen. Immer verifizieren vor dem Teilen.',
        },
        points: 15,
      },
      {
        id: 'prac-q3',
        question: {
          de: 'Eine Statistik zeigt: "Kriminalität stieg um 200%!" (von 1 auf 3 Fälle). Was ist das Problem?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Kleine absolute Zahlen werden durch prozentuale Darstellung dramatisiert' },
          { de: 'Die Mathematik stimmt nicht' },
          { de: 'Kriminalität kann nicht steigen' },
          { de: 'Es gibt kein Problem, die Aussage ist korrekt' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Exzellent erkannt! Von 1 auf 3 ist mathematisch 200% Zunahme, aber absolut fast bedeutungslos. Diese Taktik nutzt große Prozentzahlen für emotionalen Effekt.',
        },
        points: 15,
      },
      {
        id: 'prac-q4',
        question: {
          de: 'Ein Freund teilt eine Geschichte, die perfekt deine politische Meinung bestätigt. Deine Reaktion?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Extra skeptisch sein - Bestätigungsfehler macht mich anfällig!' },
          { de: 'Sofort teilen, weil mein Freund vertrauenswürdig ist' },
          { de: 'Nur teilen, wenn es viele Likes hat' },
          { de: 'Ablehnen, weil es zu einfach klingt' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Brilliant! Wenn etwas perfekt in dein Weltbild passt, aktiviere erhöhte Skepsis. Bestätigungsfehler macht uns blind für Fehler in "unseren" Geschichten.',
        },
        points: 15,
      },
      {
        id: 'prac-q5',
        question: {
          de: 'Du fühlst intensive Wut beim Lesen eines Artikels. Was solltest du tun?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Pausieren, tief atmen, dann kritisch prüfen - Emotion ist ein Warnsignal' },
          { de: 'Sofort kommentieren und teilen' },
          { de: 'Den Artikel ignorieren' },
          { de: 'Nur teilen, wenn Freunde zustimmen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Perfekt! Starke Emotionen sind ein Warnsignal. Desinformation nutzt Wut, um rationalesPrüfen zu umgehen. Die 24-Stunden-Regel hilft: Warte einen Tag, bevor du emotionale Inhalte teilst.',
        },
        points: 15,
      },
    ],
  },
};
