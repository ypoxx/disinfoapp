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
              <div className="mt-6 rounded-lg border-2 border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold text-blue-800 dark:text-blue-300">Warum Verification DIE Kernkompetenz für Kommunikatoren ist:</p>
                <p className="mt-2">
                  Für PR-Profis, Unternehmenskommunikatoren und Journalisten ist Faktencheck nicht nur Allgemeinbildung – er ist <strong>berufliche Pflicht</strong>. Im Kommunikationsalltag begegnen euch ständig Situationen, die schnelle und zuverlässige Verifizierung erfordern:
                </p>
                <ul className="mt-2 list-disc pl-6">
                  <li><strong>Pressemitteilungen prüfen:</strong> Bevor ihr Informationen weitergebt oder freigebt, müsst ihr Zahlen, Zitate und Fakten verifizieren – eure Glaubwürdigkeit steht auf dem Spiel.</li>
                  <li><strong>Gerüchte über Kunden oder die eigene Organisation entkräften:</strong> Wenn falsche Behauptungen kursieren, braucht ihr belastbare Gegenargumente und verifizierte Fakten für eine wirksame Krisenkommunikation.</li>
                  <li><strong>Social Listening:</strong> Im Social-Media-Monitoring tauchen täglich ungeprüfte Behauptungen auf. Wer sie frühzeitig erkennt und richtig einordnet, verhindert Reputationsschäden.</li>
                  <li><strong>Quellenprüfung für eigene Inhalte:</strong> Ob Blogpost, Newsletter oder Kundenpräsentation – jede nicht verifizierte Information kann zum Bumerang werden.</li>
                </ul>
              </div>
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
              <div className="mt-6 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4">
                <p className="font-semibold">CRAAP-Test im Unternehmenskontext: Negative Berichterstattung bewerten</p>
                <p className="mt-2">
                  Wenn Quellen negative Behauptungen über eure Organisation aufstellen, hilft der CRAAP-Test bei der systematischen Einordnung:
                </p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li><strong>Currency:</strong> Bezieht sich der Bericht auf aktuelle Ereignisse oder werden veraltete Vorfälle aufgewärmt?</li>
                  <li><strong>Relevance:</strong> Ist die Kritik substanziell oder wird ein Randthema aufgebauscht?</li>
                  <li><strong>Authority:</strong> Ist der Verfasser ein Branchenexperte, ein anonymer Account oder ein bekannter Aktivist mit Agenda?</li>
                  <li><strong>Accuracy:</strong> Lassen sich die Behauptungen durch interne Daten oder unabhängige Quellen bestätigen oder widerlegen?</li>
                  <li><strong>Purpose:</strong> Handelt es sich um investigativen Journalismus, Meinungsmache oder gezielte Kampagne eines Wettbewerbers?</li>
                </ul>
              </div>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Erstellt eine interne CRAAP-Bewertungsvorlage für euer Kommunikationsteam. Bei eingehenden Medienanfragen oder kritischen Social-Media-Posts könnt ihr so in wenigen Minuten systematisch einordnen, ob eine Reaktion nötig ist – und wenn ja, wie dringend. Dokumentiert eure Bewertungen, damit ihr im Krisenfall einen Audit-Trail habt.</p>
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
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Diese Red Flags gelten auch für Quellen, die <em>positive</em> Dinge über eure Organisation behaupten. Bevor ihr einen vermeintlich schmeichelhaften Artikel teilt oder in eure Pressemappe aufnehmt: Prüft, ob die Quelle seriös ist. Einen unseriösen Bericht zu teilen, nur weil er euch lobt, kann eure Glaubwürdigkeit langfristig beschädigen.</p>
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
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Nutzt Rückwärts-Bildersuche auch für eure eigenen PR-Bilder! Prüft regelmäßig, ob Bilder eurer Organisation in falschem Kontext verwendet werden. Ebenso wichtig: Bevor ihr Stock-Fotos oder nutzergenerierte Bilder in Kampagnen einsetzt, verifiziert deren Ursprung – ein Bild mit ungeklärten Rechten oder problematischer Vorgeschichte kann zum PR-Desaster werden.</p>
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
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Laterales Lesen ist besonders wertvoll, wenn ihr mit neuen Medienpartnern, Influencern oder Branchenexperten zusammenarbeiten wollt. Bevor ihr eine Kooperation eingeht oder ein Zitat übernehmt: Recherchiert den Hintergrund der Person oder Organisation in externen Quellen. So schützt ihr eure Marke vor ungewollten Assoziationen.</p>
              </div>
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
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Wenn ihr Statistiken in Pressemitteilungen, Reports oder Social-Media-Posts verwendet, stellt sicher, dass ihr die Primärquelle verlinkt und die Methodik versteht. Journalisten werden nachfragen – und nichts untergräbt eure Glaubwürdigkeit schneller als eine Statistik, die ihr selbst nicht erklären könnt. Legt euch ein internes Fact-Sheet an, das Quelle, Methodik und Einschränkungen jeder verwendeten Zahl dokumentiert.</p>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: 'monitoring-tools',
      title: 'Monitoring-Tools für Kommunikatoren',
      sections: [
        {
          id: 'social-listening',
          title: 'Social Listening und Medienbeobachtung',
          type: 'tip',
          content: (
            <>
              <p>
                Professionelle Kommunikatoren brauchen <strong>systematische Monitoring-Workflows</strong>, um Falschinformationen frühzeitig zu erkennen und gezielt darauf reagieren zu können.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3">
                  <p className="font-semibold">Social Listening Tools</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li><strong>Brandwatch / Talkwalker:</strong> Echtzeit-Monitoring von Marken-Erwähnungen über alle Social-Media-Plattformen hinweg</li>
                    <li><strong>Google Alerts:</strong> Kostenlose Benachrichtigungen bei neuen Erwähnungen eurer Organisation, Produkte oder Schlüsselbegriffe</li>
                    <li><strong>CrowdTangle (Meta):</strong> Analyse viraler Inhalte auf Facebook und Instagram – hilfreich, um Desinformationswellen frühzeitig zu erkennen</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3">
                  <p className="font-semibold">Reverse Image Search für PR-Bilder</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li><strong>Google Lens / TinEye:</strong> Regelmäßig prüfen, ob eure offiziellen Bilder in falschem Kontext verwendet werden</li>
                    <li><strong>InVID/WeVerify Plugin:</strong> Browser-Extension zur Analyse von Videos und Bildern – erkennt Manipulationen und findet Originalquellen</li>
                    <li><strong>FotoForensics:</strong> Detaillierte Bildanalyse zur Erkennung von Photoshop-Bearbeitungen und Metadaten-Prüfung</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-3">
                  <p className="font-semibold">Medienbeobachtung und Analyse</p>
                  <ul className="mt-1 text-sm list-disc pl-5">
                    <li><strong>Meltwater / Cision:</strong> Umfassende Medienbeobachtung über Print, Online, TV, Radio und Social Media</li>
                    <li><strong>Pressrelations / Landau Media:</strong> Deutschsprachige Medienbeobachtung mit Reichweitenanalyse</li>
                    <li><strong>DPA-Factchecking:</strong> Professioneller Faktencheck-Service für Redaktionen und Kommunikationsabteilungen</li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'verification-workflow',
          title: 'Verifikations-Workflow für Kommunikationsteams',
          type: 'tip',
          content: (
            <>
              <p>
                Ein strukturierter Workflow hilft eurem Team, bei kritischen Meldungen schnell und fundiert zu reagieren:
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">5-Schritte-Verifikations-Workflow:</p>
                <ol className="mt-2 list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Alert erhalten:</strong> Social-Listening-Tool meldet kritische Erwähnung oder ungewöhnlichen Anstieg der Mentions
                  </li>
                  <li>
                    <strong>Quelle bewerten:</strong> CRAAP-Test anwenden – Wer behauptet was, mit welcher Reichweite und welchem Hintergrund?
                  </li>
                  <li>
                    <strong>Fakten intern prüfen:</strong> Abgleich mit internen Daten, Rücksprache mit Fachabteilungen, Dokumentation sichten
                  </li>
                  <li>
                    <strong>Externe Verifizierung:</strong> Laterales Lesen, Rückwärts-Bildersuche, Faktencheck-Websites konsultieren
                  </li>
                  <li>
                    <strong>Reaktionsstrategie festlegen:</strong> Auf Basis der Verifizierung entscheiden – Richtigstellung, Statement, Monitoring fortsetzen oder bewusst ignorieren
                  </li>
                </ol>
              </div>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Haltet eine vorbereitete Eskalationsmatrix bereit: Wer im Team übernimmt bei welcher Schwere der Falschinformation die Federführung? Definiert klare Schwellenwerte (z.B. Reichweite, Tonalität, Medientyp), ab wann eine aktive Reaktion erfolgen muss. So vermeidet ihr hektische Ad-hoc-Entscheidungen im Krisenfall.</p>
              </div>
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
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">🎯 Praxis-Tipp für Kommunikatoren:</p>
                <p className="mt-2">Druckt diese Checkliste aus und hängt sie im Kommunikationsbüro auf – oder integriert sie als festen Bestandteil in euer Content-Freigabe-Verfahren. Jede Pressemitteilung, jeder Social-Media-Post und jede Stellungnahme sollte vor Veröffentlichung mindestens die wichtigsten Punkte dieser Liste durchlaufen.</p>
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
