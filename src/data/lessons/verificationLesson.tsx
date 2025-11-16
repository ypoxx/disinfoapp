import { LessonContent } from '@/types/lessons';

export const verificationLessonContent: LessonContent = {
  moduleId: 'verification',
  steps: [
    {
      id: 'intro',
      title: 'Einführung: Faktencheck im digitalen Zeitalter',
      sections: [
        {
          id: 'intro-1',
          title: 'Warum Faktencheck essentiell ist',
          type: 'info',
          content: (
            <>
              <p>
                In einer Welt, in der jeder Inhalte publizieren kann, ist <strong>Faktencheck</strong> keine optionale Fähigkeit mehr – sie ist lebensnotwendig für informierte Bürger.
              </p>
              <p className="mt-4">
                <strong>Was du lernen wirst:</strong>
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Systematische Methoden zur Überprüfung von Informationen</li>
                <li>Wie du Quellen bewertest und einordnest</li>
                <li>Tools und Techniken für effektiven Faktencheck</li>
                <li>Umgang mit Bildern, Videos und statistischen Behauptungen</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'source-evaluation',
      title: 'Quellenbewertung',
      sections: [
        {
          id: 'craap-test',
          title: 'Der CRAAP-Test für Quellen',
          type: 'tip',
          content: (
            <>
              <p>
                Der <strong>CRAAP-Test</strong> ist eine bewährte Methode zur Bewertung von Informationsquellen. CRAAP steht für:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3">
                  <p className="font-semibold">C - Currency (Aktualität)</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Wann wurde die Information veröffentlicht?</li>
                    <li>Wurde sie aktualisiert?</li>
                    <li>Ist Aktualität für dein Thema wichtig?</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3">
                  <p className="font-semibold">R - Relevance (Relevanz)</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Passt die Information zu deiner Fragestellung?</li>
                    <li>Ist sie zu einfach oder zu komplex?</li>
                    <li>Hast du mehrere Quellen gecheckt?</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3">
                  <p className="font-semibold">A - Authority (Autorität)</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Wer ist der Autor/Publisher?</li>
                    <li>Was sind ihre Qualifikationen?</li>
                    <li>Gibt es Kontaktinformationen?</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-3">
                  <p className="font-semibold">A - Accuracy (Genauigkeit)</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Wo kommt die Information her?</li>
                    <li>Gibt es Belege/Referenzen?</li>
                    <li>Wurde sie begutachtet?</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3">
                  <p className="font-semibold">P - Purpose (Zweck)</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Warum existiert diese Information?</li>
                    <li>Informieren, verkaufen, unterhalten, überzeugen?</li>
                    <li>Gibt es offensichtliche Vorurteile?</li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'red-flags',
          title: 'Warnsignale unzuverlässiger Quellen',
          type: 'warning',
          content: (
            <>
              <p className="font-semibold">Achte auf diese Red Flags:</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>Fehlende Autorenangabe</strong> - Wer schreibt anonym und warum?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>Keine Quellen/Belege</strong> - Behauptungen ohne Nachweise
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>Emotionale/reißerische Sprache</strong> - Manipulation statt Information
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>Verdächtige URL</strong> - Rechtschreibfehler, ungewöhnliche Endungen (.co statt .com)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>Nur eine Quelle berichtet</strong> - Warum ignorieren alle anderen Medien diese "große Story"?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-red-500">🚩</span>
                  <div>
                    <strong>"Zu gut um wahr zu sein"</strong> - Wenn etwas perfekt in dein Weltbild passt, sei extra vorsichtig
                  </div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: 'verification-tools',
      title: 'Faktencheck-Tools und Techniken',
      sections: [
        {
          id: 'reverse-image-search',
          title: 'Rückwärts-Bildersuche',
          type: 'tip',
          content: (
            <>
              <p>
                <strong>Bilder</strong> sind oft der Schlüssel zu Desinformation. Mit Rückwärts-Bildersuche findest du heraus:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Wann und wo ein Bild ursprünglich erschien</li>
                <li>Ob der Kontext geändert wurde</li>
                <li>Ob das Bild manipuliert wurde</li>
              </ul>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">So geht's:</p>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Rechtsklick auf Bild → "In Google nach Bild suchen"</li>
                  <li>Oder: Bild auf images.google.com hochladen</li>
                  <li>Alternative Tools: TinEye, Yandex Bilder</li>
                </ol>
              </div>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 text-sm italic">
                  Ein Foto von "aktuellen Protesten" wird viral. Rückwärtssuche zeigt: Das Bild ist 5 Jahre alt und stammt aus einem anderen Land.
                </p>
              </div>
            </>
          ),
        },
        {
          id: 'fact-check-websites',
          title: 'Professionelle Faktencheck-Websites',
          type: 'tip',
          content: (
            <>
              <p>
                Es gibt spezialisierte Organisationen, die professionellen Faktencheck betreiben:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="font-semibold">International:</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li><strong>Snopes.com</strong> - Pionier des Faktenchecks</li>
                    <li><strong>FactCheck.org</strong> - Politischer Faktencheck</li>
                    <li><strong>PolitiFact</strong> - Truth-O-Meter für Politik</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="font-semibold">Deutschsprachig:</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li><strong>Correctiv.org</strong> - Investigativer Journalismus</li>
                    <li><strong>Mimikama</strong> - Spezialisiert auf Social Media</li>
                    <li><strong>ARD Faktenfinder</strong> - Öffentlich-rechtlicher Faktencheck</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Tipp: Suche nach "[Behauptung] + Faktencheck" oder "[Behauptung] + debunked"
              </p>
            </>
          ),
        },
        {
          id: 'lateral-reading',
          title: 'Laterales Lesen',
          type: 'tip',
          content: (
            <>
              <p>
                <strong>Laterales Lesen</strong> bedeutet: Verlasse die ursprüngliche Quelle und recherchiere anderswo, WAS über diese Quelle gesagt wird.
              </p>
              <div className="mt-4 rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
                <p className="font-semibold">Statt nur die Quelle selbst zu lesen:</p>
                <ol className="mt-2 list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Öffne einen neuen Tab</strong> und suche nach der Organisation/dem Autor
                  </li>
                  <li>
                    <strong>Lies Wikipedia-Einträge</strong> über die Quelle
                  </li>
                  <li>
                    <strong>Suche nach "[Quelle] + bias" oder "[Quelle] + reliability"</strong>
                  </li>
                  <li>
                    <strong>Prüfe, wer die Organisation finanziert</strong>
                  </li>
                </ol>
              </div>
              <p className="mt-4">
                Experten verbringen mehr Zeit AUSSERHALB einer Quelle als darin, um ihre Glaubwürdigkeit zu bewerten!
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: 'statistics',
      title: 'Statistiken kritisch bewerten',
      sections: [
        {
          id: 'misleading-stats',
          title: 'Irreführende Statistiken',
          type: 'warning',
          content: (
            <>
              <p>
                "Es gibt drei Arten von Lügen: Lügen, verdammte Lügen und Statistiken" - Mark Twain
              </p>
              <p className="mt-4">
                <strong>Häufige Tricks mit Statistiken:</strong>
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3">
                  <p className="font-semibold">Irreführende Grafiken</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li>Y-Achse beginnt nicht bei 0 (übertreibt Unterschiede)</li>
                    <li>Fehlende Beschriftungen oder Maßeinheiten</li>
                    <li>3D-Grafiken verzerren Proportionen</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-3">
                  <p className="font-semibold">Korrelation ≠ Kausalität</p>
                  <p className="mt-1 text-sm">
                    "Länder mit mehr Störchen haben höhere Geburtenraten!" – Beide korrelieren mit ländlichen Gebieten, aber Störche bringen keine Babys.
                  </p>
                </div>
                <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3">
                  <p className="font-semibold">Kleine Stichproben</p>
                  <p className="mt-1 text-sm">
                    "100% der Befragten stimmen zu!" – wenn nur 2 Personen befragt wurden
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3">
                  <p className="font-semibold">Prozent vs. Prozentpunkte</p>
                  <p className="mt-1 text-sm">
                    Von 2% auf 3% ist eine Steigerung von 1 Prozentpunkt, aber 50 Prozent relativ!
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'critical-questions',
          title: 'Kritische Fragen an Statistiken',
          type: 'tip',
          content: (
            <>
              <p className="font-semibold">Frage immer:</p>
              <ol className="mt-2 list-decimal pl-6 space-y-2">
                <li>
                  <strong>Wer hat die Studie durchgeführt?</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Hat die Organisation ein Interesse am Ergebnis?
                  </span>
                </li>
                <li>
                  <strong>Wie groß war die Stichprobe?</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Mindestens 1000 Teilnehmer für repräsentative Umfragen
                  </span>
                </li>
                <li>
                  <strong>Wie wurde die Frage gestellt?</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Suggestivfragen beeinflussen Antworten massiv
                  </span>
                </li>
                <li>
                  <strong>Wurden Gegenstudien erwähnt?</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Cherry Picking: Nur günstige Studien zitieren
                  </span>
                </li>
                <li>
                  <strong>Ist die Statistik peer-reviewed?</strong><br/>
                  <span className="text-sm text-muted-foreground">
                    Wissenschaftliche Überprüfung ist Qualitätsmerkmal
                  </span>
                </li>
              </ol>
            </>
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: 'Zusammenfassung: Dein Faktencheck-Toolkit',
      sections: [
        {
          id: 'checklist',
          title: 'Die 10-Punkte Faktencheck-Checkliste',
          type: 'tip',
          content: (
            <>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Prüfe die Quelle:</strong> CRAAP-Test anwenden
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Suche lateral:</strong> Was sagen andere über diese Quelle?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Rückwärts-Bildersuche:</strong> Bei jedem verdächtigen Foto
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Checke Faktencheck-Sites:</strong> Hat jemand das schon geprüft?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Suche nach Primärquellen:</strong> Gehe zur Original-Information
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Kreuzreferenzierung:</strong> Berichten mehrere seriöse Quellen dasselbe?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Prüfe das Datum:</strong> Ist die Info aktuell und im richtigen Kontext?
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Bewerte Statistiken kritisch:</strong> Stichprobengröße, Methodik, Interessenkonflikte
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Achte auf emotionale Manipulation:</strong> Starke Emotionen = erhöhte Skepsis
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong>Bei Unsicherheit: Nicht teilen!</strong> Lieber einen Post weniger als Desinformation verbreiten
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <p className="text-center font-semibold">
                  Mit diesen Tools bist du gewappnet! Teste dein Wissen im Faktencheck-Quiz.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ],
};
