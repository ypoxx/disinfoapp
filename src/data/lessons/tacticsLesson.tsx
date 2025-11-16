import { LessonContent } from '@/types/lessons';

export const tacticsLessonContent: LessonContent = {
  moduleId: 'tactics',
  steps: [
    {
      id: 'intro',
      title: 'Einführung: Taktiken der Desinformation',
      sections: [
        {
          id: 'intro-1',
          title: 'Erkenne die Tricks',
          type: 'info',
          content: (
            <>
              <p>
                In diesem Modul lernst du die häufigsten <strong>Taktiken und Techniken</strong>,
                die zur Verbreitung von Desinformation eingesetzt werden.
              </p>
              <p className="mt-4">
                <strong>Was du lernen wirst:</strong>
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Emotionale Manipulation und wie sie funktioniert</li>
                <li>Technische Methoden wie Deepfakes und Bots</li>
                <li>Rhetorische Tricks und logische Fehlschlüsse</li>
                <li>Wie du diese Taktiken erkennst und dich schützt</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'emotional',
      title: 'Emotionale Manipulation',
      sections: [
        {
          id: 'emotion-fear',
          title: 'Angst als Waffe',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Angst</strong> ist eine der mächtigsten Emotionen für Desinformation:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Ängstliche Menschen denken weniger kritisch</li>
                <li>Angst motiviert zum schnellen Teilen ("Warnt andere!")</li>
                <li>Bedrohungsszenarien ziehen Aufmerksamkeit an</li>
              </ul>
              <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
                <p className="font-semibold">Typische Angsttaktiken:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>"Diese Krankheit wird uns alle töten!"</li>
                  <li>"Sie wollen uns unsere Freiheit nehmen!"</li>
                  <li>"In 24 Stunden ist es zu spät!"</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'emotion-anger',
          title: 'Wut und Empörung',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Wut</strong> führt zu impulsivem Verhalten:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Wütende Menschen teilen Inhalte ohne Faktencheck</li>
                <li>Empörung generiert Klicks und Engagement</li>
                <li>Polarisierung wird verstärkt ("Wir gegen die")</li>
              </ul>
              <div className="mt-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4">
                <p className="font-semibold">Erkennungszeichen:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Übertriebene, emotionale Sprache</li>
                  <li>GROSSBUCHSTABEN und viele Ausrufezeichen!!!</li>
                  <li>Absolute Aussagen ("ALLE sind...", "NIEMAND will...")</li>
                  <li>Klare Feindbilder</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'emotion-protect',
          title: 'Schutz vor emotionaler Manipulation',
          type: 'tip',
          content: (
            <>
              <p className="font-semibold">So schützt du dich:</p>
              <ol className="mt-2 list-decimal pl-6 space-y-2">
                <li>
                  <strong>Erkenne starke Emotionen:</strong> Wenn du Angst oder Wut spürst, halte
                  inne!
                </li>
                <li>
                  <strong>Atme durch:</strong> Nimm dir 30 Sekunden Zeit, bevor du etwas teilst
                </li>
                <li>
                  <strong>Frage dich:</strong> "Warum soll ich das fühlen? Wer profitiert davon?"
                </li>
                <li>
                  <strong>Prüfe Fakten:</strong> Besonders bei emotionalen Inhalten
                </li>
              </ol>
            </>
          ),
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technische Manipulation',
      sections: [
        {
          id: 'deepfakes',
          title: 'Deepfakes: KI-generierte Fälschungen',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Deepfakes</strong> sind mit künstlicher Intelligenz erstellte gefälschte
                Videos, Audios oder Bilder, die täuschend echt wirken.
              </p>
              <div className="mt-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4">
                <p className="font-semibold">Wie funktionieren Deepfakes?</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>KI analysiert echte Videos einer Person</li>
                  <li>Lernt Gesichtsbewegungen und Sprachmuster</li>
                  <li>Kann dann neue, gefälschte Inhalte erstellen</li>
                  <li>Wird immer schwerer zu erkennen</li>
                </ul>
              </div>
              <div className="mt-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-4">
                <p className="font-semibold">Warnsignale für Deepfakes:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Unnatürliche Augenbewegungen oder Blinzeln</li>
                  <li>Seltsame Schatten oder Beleuchtung im Gesicht</li>
                  <li>Audio passt nicht perfekt zu Lippenbewegungen</li>
                  <li>Unscharfe Bereiche um Gesicht oder Haare</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'bots',
          title: 'Bot-Netzwerke und Automatisierung',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Bots</strong> sind automatisierte Programme, die in sozialen Medien
                menschliche Nutzer imitieren:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Verbreiten Desinformation massenhaft</li>
                <li>Erzeugen den Eindruck breiter Unterstützung</li>
                <li>Manipulieren Trends und Hashtags</li>
                <li>Verstärken polarisierende Inhalte</li>
              </ul>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">Erkenne Bot-Accounts:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Kein Profilbild oder generisches Foto</li>
                  <li>Sehr viele Posts in kurzer Zeit</li>
                  <li>Repetitive oder identische Nachrichten</li>
                  <li>Account wurde kürzlich erstellt</li>
                  <li>Wenige oder keine echten Interaktionen</li>
                  <li>Folgen vielen, haben wenige Follower</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'astroturfing',
          title: 'Astroturfing: Gefälschte Graswurzelbewegungen',
          type: 'info',
          content: (
            <>
              <p>
                <strong>Astroturfing</strong> bezeichnet das Vortäuschen einer spontanen
                Graswurzelbewegung, die in Wirklichkeit organisiert und oft bezahlt ist.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Der Name:</p>
                <p className="mt-2">
                  "Astroturf" ist eine Marke für Kunstrasen. Astroturfing ist also "künstliches
                  Gras" statt echter Graswurzelbewegung!
                </p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Beispiele:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Bezahlte "Demonstranten" für politische Zwecke</li>
                  <li>Gefälschte Online-Bewertungen</li>
                  <li>Koordinierte Social-Media-Kampagnen</li>
                  <li>Scheinbar unabhängige Organisationen mit versteckten Geldgebern</li>
                </ul>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: 'rhetorical',
      title: 'Rhetorische Tricks',
      sections: [
        {
          id: 'cherry-picking',
          title: 'Cherry Picking: Selektive Faktenauswahl',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Cherry Picking</strong> bedeutet, nur die Fakten auszuwählen, die die
                eigene These stützen, während widersprechende Beweise ignoriert werden.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 italic">
                  "Die Kriminalität ist um 20% gestiegen!" – dabei werden die 10 Jahre davor
                  verschwiegen, in denen sie kontinuierlich gesunken ist.
                </p>
              </div>
              <p className="mt-4 font-semibold">So erkennst du Cherry Picking:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Fehlen von Kontext und Vergleichswerten</li>
                <li>Einzelne Datenpunkte statt Trends</li>
                <li>Auswahl eines spezifischen Zeitraums</li>
                <li>Fehlende Gesamtstatistiken</li>
              </ul>
            </>
          ),
        },
        {
          id: 'whataboutism',
          title: 'Whataboutism: Ablenken statt Argumentieren',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Whataboutism</strong> ist eine Ablenkungstaktik: Statt auf Kritik
                einzugehen, wird auf vermeintliche Probleme beim Kritiker hingewiesen.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel-Dialog:</p>
                <p className="mt-2">
                  <span className="font-semibold">Person A:</span> "Diese Regierung hat Korruptionsprobleme."
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Person B:</span> "Aber was ist mit der vorherigen
                  Regierung? Die war viel korrupter!"
                </p>
              </div>
              <p className="mt-4">
                Das Problem wird nicht gelöst oder diskutiert, sondern nur abgelenkt. Beide
                Probleme könnten real sein, aber keines wird angegangen.
              </p>
            </>
          ),
        },
        {
          id: 'false-dilemma',
          title: 'Falsche Dichotomien',
          type: 'warning',
          content: (
            <>
              <p>
                Eine <strong>falsche Dichotomie</strong> präsentiert zwei Optionen als die einzig
                möglichen, obwohl es weitere Alternativen gibt.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiele:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>"Entweder du bist für uns oder gegen uns!"</li>
                  <li>"Willst du Sicherheit oder Freiheit?"</li>
                  <li>"Entweder glaubst du der Wissenschaft ODER den Menschen!"</li>
                </ul>
              </div>
              <p className="mt-4 font-semibold">Die Realität ist meist komplexer:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Es gibt oft viele Optionen, nicht nur zwei</li>
                <li>Kompromisse und Mittelwege sind möglich</li>
                <li>Verschiedene Aspekte können gleichzeitig wahr sein</li>
              </ul>
            </>
          ),
        },
        {
          id: 'ad-hominem',
          title: 'Ad Hominem: Angriff auf die Person',
          type: 'warning',
          content: (
            <>
              <p>
                <strong>Ad Hominem</strong> bedeutet, die Person anzugreifen statt ihre Argumente
                zu widerlegen.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 italic">
                  "Du kannst nicht über Klimawandel sprechen, du fliegst ja selbst in den Urlaub!"
                </p>
                <p className="mt-2">
                  → Das Verhalten der Person sagt nichts über die Richtigkeit ihrer Argumente aus.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: 'context',
      title: 'Manipulation durch Kontext',
      sections: [
        {
          id: 'out-of-context',
          title: 'Aus dem Kontext gerissen',
          type: 'warning',
          content: (
            <>
              <p>
                Eine der häufigsten Taktiken: <strong>Wahre Informationen</strong> aus dem Kontext
                reißen, um eine falsche Narrative zu erzeugen.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
                  <p className="font-semibold">Falsch dargestellt:</p>
                  <p className="mt-2 italic">
                    "Wissenschaftler sagt: Impfungen wirken nicht!" – nur ein Satz aus einem Vortrag
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
                  <p className="font-semibold">Im Kontext:</p>
                  <p className="mt-2 italic">
                    "Wenn man Impfungen nicht richtig lagert, wirken sie nicht. Deshalb ist die
                    Kühlkette so wichtig."
                  </p>
                </div>
              </div>
              <p className="mt-4 font-semibold">Schütze dich:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Suche nach der Originalquelle</li>
                <li>Lies den vollständigen Artikel, nicht nur die Überschrift</li>
                <li>Prüfe, wann und wo etwas gesagt wurde</li>
                <li>Achte auf fehlenden Kontext in Zitaten</li>
              </ul>
            </>
          ),
        },
        {
          id: 'old-content',
          title: 'Alte Inhalte als neu präsentiert',
          type: 'warning',
          content: (
            <>
              <p>
                Alte Bilder, Videos oder Nachrichten werden als aktuell präsentiert, um eine
                falsche Geschichte zu erzählen.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 italic">
                  Ein Foto von Protesten aus 2015 wird 2024 geteilt mit dem Text "Gerade jetzt in
                  [Stadt]!"
                </p>
              </div>
              <p className="mt-4 font-semibold">Erkennungstipps:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Nutze die umgekehrte Bildersuche (Google, TinEye)</li>
                <li>Achte auf Datums- und Zeitangaben im Bild</li>
                <li>Prüfe Kleidung und Wetter (passt es zur Jahreszeit?)</li>
                <li>Suche nach dem Original-Upload</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: 'Zusammenfassung',
      sections: [
        {
          id: 'key-takeaways',
          title: 'Wichtigste Erkenntnisse',
          type: 'info',
          content: (
            <>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Emotionen sind mächtige Werkzeuge</p>
                  <p className="text-sm">Angst und Wut machen uns anfällig für Desinformation</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Technologie ermöglicht neue Fälschungen</p>
                  <p className="text-sm">Deepfakes und Bots werden immer ausgefeilter</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Rhetorische Tricks sind überall</p>
                  <p className="text-sm">
                    Cherry Picking, Whataboutism und falsche Dichotomien erkennen
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Kontext ist entscheidend</p>
                  <p className="text-sm">
                    Selbst wahre Informationen können irreführend sein, wenn der Kontext fehlt
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <p className="text-center font-semibold">
                  Jetzt weißt du, welche Taktiken verwendet werden. Teste dein Wissen im Quiz!
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ],
};
