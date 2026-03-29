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
      {
        id: 'basics-q6',
        question: {
          de: 'Ein Unternehmen wird Ziel einer koordinierten Desinformationskampagne. Welche erste Maßnahme ist für die Kommunikationsabteilung am wichtigsten?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Die Narrativentwicklung analysieren und Reichweite der Kampagne einschätzen' },
          { de: 'Sofort eine Pressemitteilung herausgeben, die alles dementiert' },
          { de: 'Alle Social-Media-Kanäle vorübergehend abschalten' },
          { de: 'Rechtliche Schritte einleiten, ohne die Lage zu analysieren' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Bevor Kommunikationsprofis reagieren, müssen sie die Lage verstehen: Wer verbreitet was, mit welcher Reichweite und welchem Narrativ? Nur so kann eine wirksame Gegenstrategie entwickelt werden.',
        },
        points: 10,
      },
      {
        id: 'basics-q7',
        question: {
          de: 'Was unterscheidet professionellen PR-Spin grundlegend von Desinformation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'PR-Spin betont günstige Fakten, Desinformation erfindet oder verfälscht sie bewusst' },
          { de: 'Es gibt keinen Unterschied – beides ist Manipulation' },
          { de: 'PR-Spin ist immer legal, Desinformation immer illegal' },
          { de: 'Desinformation ist nur im Internet möglich, PR-Spin nur offline' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'PR-Spin arbeitet mit selektiver Hervorhebung realer Fakten. Desinformation hingegen erfindet, verfälscht oder manipuliert Informationen bewusst, um zu täuschen. Kommunikationsprofis müssen diese Grenze kennen und respektieren.',
        },
        points: 10,
      },
      {
        id: 'basics-q8',
        question: {
          de: 'Welche Rolle spielen Algorithmen bei der Verbreitung von Desinformation gegen Organisationen?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Sie verstärken emotionale und polarisierende Inhalte, wodurch Angriffe auf Organisationen schneller viral gehen' },
          { de: 'Algorithmen filtern Desinformation zuverlässig heraus' },
          { de: 'Algorithmen betreffen nur private Nutzer, nicht Organisationen' },
          { de: 'Die Rolle der Algorithmen wird stark überschätzt' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Plattform-Algorithmen priorisieren Inhalte mit hohem Engagement. Empörende Falschinformationen über Unternehmen oder Organisationen erzeugen starke Reaktionen und werden dadurch algorithmisch bevorzugt verbreitet.',
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
      {
        id: 'tactics-q8',
        question: {
          de: 'Was ist "Coordinated Inauthentic Behavior" (koordiniertes inauthentisches Verhalten)?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Netzwerke aus Fake-Accounts, die koordiniert handeln, um Narrative künstlich zu verstärken' },
          { de: 'Wenn mehrere Journalisten über das gleiche Thema berichten' },
          { de: 'Automatische Antworten im Kundenservice' },
          { de: 'Koordinierte PR-Kampagnen mehrerer Unternehmen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Coordinated Inauthentic Behavior beschreibt Netzwerke gefälschter Accounts, die gezielt zusammenarbeiten, um Desinformation zu verbreiten und den Eindruck einer breiten öffentlichen Meinung zu erwecken. Kommunikationsprofis müssen solche Muster erkennen können.',
        },
        points: 10,
      },
      {
        id: 'tactics-q9',
        question: {
          de: 'Wie funktioniert Plattform-Manipulation gegen Unternehmen typischerweise?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Durch koordinierte Bewertungsbomben, Hashtag-Hijacking und gezielte Trendmanipulation' },
          { de: 'Durch das Hacken der Unternehmenswebsite' },
          { de: 'Ausschließlich durch bezahlte Werbeanzeigen' },
          { de: 'Durch das Melden von Unternehmensaccounts bei der Plattform' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Plattform-Manipulation umfasst Taktiken wie koordinierte negative Bewertungen, das Kapern von Hashtags und das künstliche Pushen von Trends. Kommunikationsteams müssen diese Muster frühzeitig erkennen, um angemessen reagieren zu können.',
        },
        points: 10,
      },
      {
        id: 'tactics-q10',
        question: {
          de: 'Was bedeutet "Context Collapse" (Kontextkollaps) für die Unternehmenskommunikation?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Aussagen werden aus ihrem ursprünglichen Kontext gerissen und vor einem völlig anderen Publikum verbreitet' },
          { de: 'Ein technischer Fehler, bei dem Webseiten nicht laden' },
          { de: 'Wenn zu viele Informationen gleichzeitig veröffentlicht werden' },
          { de: 'Der Zusammenbruch interner Kommunikationskanäle' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Kontextkollaps entsteht, wenn Inhalte aus einem spezifischen Kommunikationskontext (z. B. interne Präsentation, Fachkonferenz) herausgerissen und ohne Kontext einem Massenpublikum präsentiert werden. Dies ist eine häufige Quelle für Desinformation gegen Organisationen.',
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
      {
        id: 'psych-q6',
        question: {
          de: 'Warum ist das Vertrauen in eine Organisation nach einer Desinformationskampagne schwer wiederherzustellen, selbst wenn die Falschinformation widerlegt wurde?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Der "Continued Influence Effect" sorgt dafür, dass widerlegte Informationen weiter das Denken beeinflussen' },
          { de: 'Menschen vergessen Widerlegungen schneller als Falschinformationen' },
          { de: 'Organisationen kommunizieren Widerlegungen immer schlecht' },
          { de: 'Vertrauen kann nach einer Krise nie wiederhergestellt werden' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Der Continued Influence Effect zeigt, dass falsche Informationen selbst nach Korrektur weiter das Urteil und Verhalten beeinflussen. Für Kommunikationsprofis bedeutet das: Eine einfache Richtigstellung reicht nicht – es braucht wiederholte, konsistente Gegenkommunikation.',
        },
        points: 10,
      },
      {
        id: 'psych-q7',
        question: {
          de: 'In einer Krisensituation neigen Kommunikationsteams zu vorschnellen Reaktionen. Welcher psychologische Mechanismus ist dafür hauptverantwortlich?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Action Bias – unter Druck besteht ein übermäßiger Drang zu handeln, auch wenn Abwarten besser wäre' },
          { de: 'Dunning-Kruger-Effekt – das Team überschätzt seine Fähigkeiten' },
          { de: 'Sozialer Beweis – das Team folgt dem Verhalten anderer Unternehmen' },
          { de: 'Anchoring Bias – das Team orientiert sich zu stark an der ersten Information' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Der Action Bias beschreibt die Tendenz, unter Druck „irgendetwas" zu tun, statt strategisch abzuwägen. In Krisensituationen kann vorschnelles Handeln die Lage verschlimmern, z. B. durch das Streisand-Effekt-Risiko bei unnötigen Dementis.',
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
      {
        id: 'verify-q7',
        question: {
          de: 'Welcher Ansatz ist für die Faktenprüfung in der Unternehmenskommunikation am effektivsten, wenn Behauptungen über die eigene Organisation kursieren?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Dreistufiges Verfahren: Interne Faktenlage klären, unabhängige Quellen prüfen, dokumentierte Gegendarstellung vorbereiten' },
          { de: 'Sofort auf Social Media dementieren' },
          { de: 'Nur intern kommunizieren und die Behauptungen ignorieren' },
          { de: 'Ausschließlich die Rechtsabteilung einschalten' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Professionelle Faktenprüfung in Organisationen erfordert ein systematisches Vorgehen: Zuerst intern die Fakten klären, dann mit externen Quellen abgleichen und schließlich eine belastbare Gegendarstellung vorbereiten. Schnellschüsse ohne Faktencheck können die Glaubwürdigkeit beschädigen.',
        },
        points: 10,
      },
      {
        id: 'verify-q8',
        question: {
          de: 'Welches Monitoring-Tool-Setup ist für Kommunikationsprofis am sinnvollsten, um Desinformation frühzeitig zu erkennen?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Kombination aus Social-Listening-Tools, Google Alerts und spezialisierten Plattformen wie CrowdTangle oder Brandwatch' },
          { de: 'Ausschließlich Google-Suche und manuelle Überprüfung' },
          { de: 'Nur die eigenen Social-Media-Kanäle beobachten' },
          { de: 'Auf Hinweise von Journalisten warten' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Ein umfassendes Monitoring erfordert mehrere Tools: Social-Listening für Echtzeitüberwachung, Alerts für Medienbeobachtung und spezialisierte Plattformen zur Analyse von Verbreitungsmustern. Nur so können Kommunikationsteams frühzeitig auf entstehende Desinformationskampagnen reagieren.',
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
      {
        id: 'prac-q6',
        question: {
          de: 'Als Pressesprecher:in entdeckst du einen viralen Tweet mit einem gefälschten Zitat deines CEO. Der Tweet hat bereits 50.000 Shares. Was ist deine erste Maßnahme?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Reichweite und Verbreitungsmuster dokumentieren, dann eine faktenbasierte Richtigstellung mit dem Originalzitat vorbereiten' },
          { de: 'Sofort einen wütenden Gegentweet posten und den Urheber angreifen' },
          { de: 'Abwarten, bis sich die Aufregung von selbst legt' },
          { de: 'Den Tweet melden und hoffen, dass die Plattform ihn löscht' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Professionelle Krisenkommunikation erfordert zunächst Situationsbewertung: Wie weit hat sich die Falschinformation verbreitet? Dann eine ruhige, faktenbasierte Richtigstellung mit nachprüfbaren Belegen. Emotionale Gegenangriffe verstärken oft nur die Aufmerksamkeit für die Falschinformation.',
        },
        points: 15,
      },
      {
        id: 'prac-q7',
        question: {
          de: 'Dein Unternehmen wird in einem Desinformationsnarrativ als Umweltverschmutzer dargestellt. Die Vorwürfe sind falsch, aber emotional aufgeladen. Wie gehst du als Kommunikationsprofi vor?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Transparente Kommunikation mit überprüfbaren Daten, proaktive Ansprache wichtiger Stakeholder und Zusammenarbeit mit unabhängigen Experten' },
          { de: 'Eine groß angelegte Werbekampagne starten, die das grüne Image betont' },
          { de: 'Die Kritiker verklagen und öffentlich diskreditieren' },
          { de: 'Nichts tun, weil jede Reaktion das Narrativ verstärkt' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Bei emotional aufgeladenen Falschdarstellungen braucht es eine Kombination aus Fakten, Transparenz und Drittvalidierung. Unabhängige Experten verleihen der Gegendarstellung Glaubwürdigkeit. Wichtige Stakeholder (Investoren, Partner, Mitarbeitende) brauchen proaktive Information.',
        },
        points: 15,
      },
    ],
  },

  'crisis-response': {
    id: 'crisis-response-quiz',
    moduleId: 'crisis-response',
    timeLimit: 600, // 10 minutes
    passingScore: 75,
    questions: [
      {
        id: 'crisis-q1',
        question: {
          de: 'Ein kleines Desinformationsnarrativ über Ihr Unternehmen kursiert in einer Nischen-Community mit 2.000 Followern. Noch hat kein Mainstream-Medium berichtet. Was tun Sie?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Beobachten und dokumentieren, aber NICHT öffentlich reagieren – das Amplifikationsrisiko ist zu hoch' },
          { de: 'Sofort eine Pressemitteilung herausgeben, um dem Narrativ zuvorzukommen' },
          { de: 'Die Community direkt konfrontieren und die Falschinformation dementieren' },
          { de: 'Die Rechtsabteilung mit einer Abmahnung beauftragen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Wenn Desinformation noch in einer kleinen Nische zirkuliert, kann eine öffentliche Reaktion das Narrativ erst einem Massenpublikum bekannt machen (Streisand-Effekt). Strategisches Monitoring ohne Amplifikation ist hier die richtige Wahl. Intern vorbereiten, extern abwarten.',
        },
        points: 10,
      },
      {
        id: 'crisis-q2',
        question: {
          de: 'Welche Reaktionsstrategie ist bei einer nachweislich falschen, aber weit verbreiteten Behauptung über Ihr Unternehmen am wirksamsten?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Counter-Narrative: Eine eigene, positive Geschichte erzählen, die das falsche Narrativ durch Fakten und Kontext ersetzt' },
          { de: 'Einfaches Dementi: Die Behauptung kategorisch abstreiten' },
          { de: 'Diminish-Strategie: Die Bedeutung der Behauptung herunterspielen' },
          { de: 'Alle drei Strategien sind immer gleich wirksam' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Forschung zeigt: Einfache Dementis können das falsche Narrativ durch Wiederholung sogar verstärken. Counter-Narratives sind wirksamer, weil sie eine alternative Erzählung bieten, statt nur zu widersprechen. Die Wahl der Strategie hängt jedoch vom Kontext ab – bei eindeutigen Faktenlagen kann auch ein klares Dementi angemessen sein.',
        },
        points: 10,
      },
      {
        id: 'crisis-q3',
        question: {
          de: 'Während einer Desinformationskrise fordern Investoren und Medien gleichzeitig Stellungnahmen. Welche Stakeholder-Kommunikation hat Priorität?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Parallele, aber differenzierte Kommunikation: Investoren brauchen Fakten und Geschäftsauswirkungen, Medien brauchen klare Statements und Belege' },
          { de: 'Zuerst die Medien bedienen, dann die Investoren' },
          { de: 'Ein einheitliches Statement für alle Stakeholder verwenden' },
          { de: 'Zuerst die Investoren beruhigen und die Medien auf später vertrösten' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Verschiedene Stakeholder haben unterschiedliche Informationsbedürfnisse. Investoren interessieren sich für Geschäftsauswirkungen und Risikomanagement, Medien für klare Fakten und Zitate. Ein-Größe-passt-alle-Kommunikation wird keiner Gruppe gerecht und kann die Krise verschärfen.',
        },
        points: 10,
      },
      {
        id: 'crisis-q4',
        question: {
          de: 'Eine Falschmeldung über Ihr Unternehmen verbreitet sich rasant. Sie haben noch nicht alle Fakten intern bestätigt. Was tun Sie?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Ein Holding-Statement veröffentlichen, das Kenntnis der Situation zeigt und eine vollständige Stellungnahme ankündigt' },
          { de: 'Schnell reagieren und alle verfügbaren Informationen sofort veröffentlichen, auch unbestätigte' },
          { de: 'Schweigen, bis alle Fakten zu 100% bestätigt sind' },
          { de: 'Die Falschmeldung einfach kopieren und ein "Falsch!" darunterschreiben' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Das Holding-Statement ist der Goldstandard bei der Abwägung zwischen Geschwindigkeit und Genauigkeit. Es zeigt Handlungsfähigkeit, ohne unbestätigte Informationen zu verbreiten. Formulierung: "Uns ist die Behauptung bekannt. Wir prüfen die Sachlage und werden zeitnah umfassend Stellung nehmen."',
        },
        points: 10,
      },
      {
        id: 'crisis-q5',
        question: {
          de: 'Ihr Kommunikationsteam erwägt, ein Desinformationsnetzwerk öffentlich zu enttarnen, das Ihr Unternehmen angreift. Welches ethische Dilemma besteht?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Die Enttarnung könnte als Einschüchterung wirken und unschuldige Personen treffen, die Inhalte unwissentlich geteilt haben' },
          { de: 'Es gibt kein ethisches Dilemma – Desinformationsverbreiter verdienen keine Rücksicht' },
          { de: 'Das einzige Problem sind mögliche rechtliche Kosten' },
          { de: 'Die Enttarnung ist immer die beste Strategie' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Counter-Desinformation birgt eigene ethische Risiken: Nicht alle, die Falschinformationen teilen, tun dies böswillig. Öffentliche Enttarnung kann als Machtmissbrauch wahrgenommen werden, besonders wenn Privatpersonen betroffen sind. Kommunikationsprofis müssen Verhältnismäßigkeit, Datenschutz und die Unterscheidung zwischen bewussten Akteuren und unwissenden Verbreitern beachten.',
        },
        points: 10,
      },
      {
        id: 'crisis-q6',
        question: {
          de: 'Welche Metriken sind am aussagekräftigsten, um die Wirkung einer Desinformationskampagne gegen Ihre Organisation zu bewerten?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Kombination aus Reichweite, Sentiment-Analyse, Medienübernahme-Rate und Auswirkung auf Vertrauensumfragen' },
          { de: 'Ausschließlich die Anzahl der Social-Media-Shares' },
          { de: 'Nur die Anzahl der Medienberichte' },
          { de: 'Allein der Aktienkurs als Indikator' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Die Wirkung von Desinformation ist mehrdimensional: Reichweite zeigt die Verbreitung, Sentiment-Analyse die emotionale Tonalität, Medienübernahme-Rate ob Mainstream-Medien das Narrativ aufgreifen, und Vertrauensumfragen die reale Auswirkung auf die Reputation. Nur eine Kombination ergibt ein vollständiges Bild.',
        },
        points: 10,
      },
      {
        id: 'crisis-q7',
        question: {
          de: 'Während einer externen Desinformationskrise beginnen Mitarbeitende, die Falschinformationen intern zu diskutieren und in privaten Social-Media-Posts zu teilen. Was hat Priorität?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Sofortige, transparente interne Kommunikation mit Fakten, klaren Sprachregelungen und Ansprechpartnern für Rückfragen' },
          { de: 'Mitarbeitende anweisen, nicht über die Krise zu sprechen' },
          { de: 'Abwarten, bis die externe Krise gelöst ist, dann intern kommunizieren' },
          { de: 'Nur das Management informieren und den Rest des Teams außen vor lassen' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Mitarbeitende sind wichtige Multiplikatoren – sie können die Krise verschärfen oder entschärfen. Transparente interne Kommunikation mit klaren Fakten gibt Mitarbeitenden Sicherheit und verhindert, dass sie unbeabsichtigt Desinformation weiterverbreiten. Redeverbote erzeugen nur Misstrauen.',
        },
        points: 10,
      },
      {
        id: 'crisis-q8',
        question: {
          de: 'Nach einer überstandenen Desinformationskrise: Welche Maßnahme stärkt die Resilienz Ihrer Organisation am nachhaltigsten?',
        },
        type: 'multiple-choice',
        options: [
          { de: 'Systematische Nachbereitung mit Lessons Learned, Aufbau eines Frühwarnsystems und regelmäßige Krisenübungen für das Kommunikationsteam' },
          { de: 'Möglichst schnell vergessen und zum Tagesgeschäft zurückkehren' },
          { de: 'Ein einmaliges Krisenhandbuch erstellen und abheften' },
          { de: 'Ausschließlich in bessere Social-Media-Überwachungstools investieren' },
        ],
        correctAnswer: 0,
        explanation: {
          de: 'Post-Krisen-Resilienz erfordert einen ganzheitlichen Ansatz: Systematische Auswertung (Was lief gut/schlecht?), Aufbau eines Frühwarnsystems für zukünftige Kampagnen und regelmäßige Übungen, damit das Team im Ernstfall schnell und souverän reagieren kann. Technik allein reicht nicht – es braucht auch trainierte Menschen und erprobte Prozesse.',
        },
        points: 10,
      },
    ],
  },
};
