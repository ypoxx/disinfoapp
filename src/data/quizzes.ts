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
};
