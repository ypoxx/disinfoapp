import { LessonContent } from '@/types/lessons';

export const psychologyLessonContent: LessonContent = {
  moduleId: 'psychology',
  steps: [
    {
      id: 'intro',
      title: 'Einführung: Die Psychologie hinter Desinformation',
      sections: [
        {
          id: 'intro-1',
          title: 'Warum fallen wir auf Desinformation herein?',
          type: 'info',
          content: (
            <>
              <p>
                Desinformation ist so wirksam, weil sie menschliche <strong>psychologische Schwachstellen</strong> ausnutzt. Unser Gehirn nutzt mentale Abkürzungen, um schnell Entscheidungen zu treffen – und genau diese Abkürzungen können manipuliert werden.
              </p>
              <p className="mt-4">
                <strong>In diesem Modul lernst du:</strong>
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Kognitive Verzerrungen (Cognitive Biases), die uns anfällig machen</li>
                <li>Wie Emotionen unsere Informationsverarbeitung beeinflussen</li>
                <li>Der Einfluss von sozialen Beweisen und Gruppendruck</li>
                <li>Wie du dich psychologisch gegen Manipulation schützt</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'cognitive-biases',
      title: 'Kognitive Verzerrungen',
      sections: [
        {
          id: 'confirmation-bias',
          title: 'Bestätigungsfehler (Confirmation Bias)',
          type: 'warning',
          content: (
            <>
              <p>
                Der <strong>Bestätigungsfehler</strong> ist unsere Tendenz, Informationen so zu interpretieren, dass sie unsere bestehenden Überzeugungen bestätigen.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2">
                  Wenn du glaubst, dass eine politische Partei korrupt ist, wirst du eher Nachrichten bemerken und glauben, die dies bestätigen – auch wenn sie falsch sind.
                </p>
              </div>
              <p className="mt-4 font-semibold">Wie Desinformation dies ausnutzt:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Falsche Informationen werden so gestaltet, dass sie bestehende Vorurteile ansprechen</li>
                <li>Menschen teilen Inhalte, die ihre Meinung bestätigen, ohne sie zu prüfen</li>
                <li>Echokammern verstärken diesen Effekt</li>
              </ul>
            </>
          ),
        },
        {
          id: 'availability-bias',
          title: 'Verfügbarkeitsheuristik',
          type: 'warning',
          content: (
            <>
              <p>
                Wir überschätzen die Wahrscheinlichkeit von Ereignissen, die wir leicht erinnern können – oft weil sie kürzlich passiert sind oder emotional beeindruckend waren.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2">
                  Nach einem Hai-Angriff in den Nachrichten haben viele Menschen Angst vorm Schwimmen im Meer – obwohl die Wahrscheinlichkeit extrem gering ist. Autofahren ist viel gefährlicher, fühlt sich aber sicherer an.
                </p>
              </div>
              <p className="mt-4 font-semibold">Manipulation durch Desinformation:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Seltene, dramatische Ereignisse werden überrepräsentiert</li>
                <li>Emotionale, schockierende Geschichten bleiben besser im Gedächtnis</li>
                <li>Wiederholte Falschmeldungen werden als "wahr" empfunden, weil sie vertraut sind</li>
              </ul>
            </>
          ),
        },
        {
          id: 'anchoring-bias',
          title: 'Ankereffekt',
          type: 'warning',
          content: (
            <>
              <p>
                Die erste Information, die wir erhalten, dient als "Anker" für alle nachfolgenden Urteile – selbst wenn diese Information willkürlich oder falsch ist.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Experiment:</p>
                <p className="mt-2">
                  Menschen wurden gefragt, ob Gandhi älter oder jünger als 140 Jahre wurde. Danach sollten sie sein tatsächliches Alter schätzen. Diese Gruppe schätzte höher als eine Kontrollgruppe – der absurde "Anker" von 140 Jahren hatte Einfluss!
                </p>
              </div>
              <p className="mt-4 font-semibold">Verwendung in Desinformation:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>"First Mover Advantage" – wer zuerst eine Story verbreitet, setzt den Anker</li>
                <li>Spätere Korrekturen haben weniger Einfluss</li>
                <li>Übertriebene Anfangszahlen beeinflussen spätere Wahrnehmung</li>
              </ul>
            </>
          ),
        },
        {
          id: 'dunning-kruger',
          title: 'Dunning-Kruger-Effekt',
          type: 'info',
          content: (
            <>
              <p>
                Menschen mit wenig Wissen in einem Bereich überschätzen oft ihre Kompetenz, während Experten ihre Fähigkeiten eher unterschätzen.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Das Problem:</p>
                <p className="mt-2">
                  "Ein bisschen Wissen ist gefährlich" – Menschen, die ein YouTube-Video gesehen haben, halten sich für Experten und verbreiten Desinformation mit großer Überzeugung.
                </p>
              </div>
              <p className="mt-4 font-semibold">Warum das gefährlich ist:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Überzeugte, aber unwissende Menschen wirken glaubwürdig</li>
                <li>Echte Experten drücken sich differenzierter aus (wirken unsicherer)</li>
                <li>Komplexe Themen werden zu stark vereinfacht</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'emotional-triggers',
      title: 'Emotionale Trigger',
      sections: [
        {
          id: 'fear-response',
          title: 'Die Macht der Angst',
          type: 'warning',
          content: (
            <>
              <p>
                Angst aktiviert unser <strong>limbisches System</strong> und reduziert die Aktivität im präfrontalen Kortex – dem Teil des Gehirns, der für rationales Denken zuständig ist.
              </p>
              <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
                <p className="font-semibold">Neurologische Reaktion:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Kampf-oder-Flucht-Reaktion wird aktiviert</li>
                  <li>Schnelle Entscheidungen statt sorgfältiger Analyse</li>
                  <li>Erhöhte Aufmerksamkeit für Bedrohungen</li>
                  <li>Reduzierte kritische Denkfähigkeit</li>
                </ul>
              </div>
              <p className="mt-4">
                Deshalb funktionieren angstbasierte Desinformations-Kampagnen so gut: Sie umgehen unsere rationalen Filter.
              </p>
            </>
          ),
        },
        {
          id: 'moral-outrage',
          title: 'Moralische Empörung',
          type: 'warning',
          content: (
            <>
              <p>
                Inhalte, die moralische Empörung auslösen, werden am häufigsten geteilt – bis zu 20% mehr pro moralisch-emotionalem Wort!
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Warum moralische Empörung viral geht:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Aktiviert soziale Identität ("Wir gegen die")</li>
                  <li>Gibt das Gefühl, auf der "richtigen Seite" zu stehen</li>
                  <li>Drängt zum Handeln (Teilen als "moralische Pflicht")</li>
                  <li>Reduziert Notwendigkeit zum Faktencheck</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'emotional-protection',
          title: 'Emotionale Immunität aufbauen',
          type: 'tip',
          content: (
            <>
              <p className="font-semibold">Strategien zum Schutz:</p>
              <ol className="mt-2 list-decimal pl-6 space-y-3">
                <li>
                  <strong>Erkenne deine Emotionen:</strong> "Warum macht mich das wütend/ängstlich?"
                </li>
                <li>
                  <strong>Pausiere vor dem Teilen:</strong> 24-Stunden-Regel für emotionale Inhalte
                </li>
                <li>
                  <strong>Suche nach der entgegengesetzten Perspektive:</strong> Welche Argumente sprechen dagegen?
                </li>
                <li>
                  <strong>Atme bewusst:</strong> Physische Beruhigung hilft beim rationalen Denken
                </li>
                <li>
                  <strong>Frage nach Beweisen:</strong> Gerade wenn etwas "offensichtlich wahr" erscheint
                </li>
              </ol>
            </>
          ),
        },
      ],
    },
    {
      id: 'social-proof',
      title: 'Sozialer Beweis und Gruppendruck',
      sections: [
        {
          id: 'social-proof-definition',
          title: 'Was ist sozialer Beweis?',
          type: 'info',
          content: (
            <>
              <p>
                <strong>Sozialer Beweis</strong> (Social Proof) ist unsere Tendenz, das Verhalten anderer zu imitieren, besonders in unsicheren Situationen.
              </p>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">Klassisches Experiment:</p>
                <p className="mt-2">
                  Wenn mehrere Schauspieler in einer Fußgängerzone nach oben schauen, tun dies auch vorbeigehende Menschen – obwohl dort nichts zu sehen ist.
                </p>
              </div>
              <p className="mt-4">
                Online manifestiert sich dies durch:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Likes und Shares als Qualitätssignal</li>
                <li>"Tausende können nicht irren"-Mentalität</li>
                <li>Viraler Spread verstärkt Glaubwürdigkeit</li>
              </ul>
            </>
          ),
        },
        {
          id: 'bandwagon-effect',
          title: 'Mitläufereffekt (Bandwagon Effect)',
          type: 'warning',
          content: (
            <>
              <p>
                Je mehr Menschen etwas glauben oder tun, desto wahrscheinlicher schließen wir uns an – unabhängig von Fakten.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Manipulation durch künstliche Popularität:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Bot-Netzwerke erzeugen fake Engagement</li>
                  <li>Gekaufte Likes und Followers</li>
                  <li>Koordinierte Kampagnen täuschen organische Bewegungen vor</li>
                  <li>Trending-Manipulation</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'in-group-bias',
          title: 'Eigengruppen-Bevorzugung',
          type: 'warning',
          content: (
            <>
              <p>
                Wir vertrauen Informationen von Menschen, die wir als "wie uns" wahrnehmen, viel mehr – auch wenn diese Menschen keine Expertise haben.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Desinformations-Strategie:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Bots und Trolle imitieren "normale Leute" aus der Zielgruppe</li>
                  <li>Falschinformationen werden durch "Gleichgesinnte" verbreitet</li>
                  <li>Kritiker werden als "Fremdgruppe" dargestellt</li>
                  <li>"Wir gegen die"-Narrative verstärken unkritische Akzeptanz</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          id: 'social-resistance',
          title: 'Widerstand gegen sozialen Druck',
          type: 'tip',
          content: (
            <>
              <p className="font-semibold">So bleibst du unabhängig:</p>
              <ol className="mt-2 list-decimal pl-6 space-y-2">
                <li>
                  <strong>Hinterfrage Popularität:</strong> Viele Likes ≠ Wahrheit
                </li>
                <li>
                  <strong>Erkenne künstliches Engagement:</strong> Bot-Muster lernen
                </li>
                <li>
                  <strong>Bewerte Quellen, nicht Gruppenzugehörigkeit:</strong> Auch "die eigene Seite" kann falsch liegen
                </li>
                <li>
                  <strong>Kultiviere intellektuelle Demut:</strong> "Ich könnte falsch liegen"
                </li>
                <li>
                  <strong>Suche aktiv nach Gegenbeweisen:</strong> Bestätigungsfehler bekämpfen
                </li>
              </ol>
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
          title: 'Psychologische Verteidigungsstrategien',
          type: 'info',
          content: (
            <>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Kognitive Verzerrungen erkennen</p>
                  <p className="text-sm">
                    Bestätigungsfehler, Verfügbarkeitsheuristik, Ankereffekt – kenne deine Schwachstellen
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Emotionen als Warnsignal</p>
                  <p className="text-sm">
                    Starke Angst oder Wut? Pause machen und kritisch prüfen
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Sozialer Beweis ist manipulierbar</p>
                  <p className="text-sm">
                    Popularität ≠ Wahrheit. Bots und gekaufte Likes sind real
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Proaktive Strategien anwenden</p>
                  <p className="text-sm">
                    Pausieren, gegenteilige Perspektiven suchen, Beweise fordern
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <p className="text-center font-semibold">
                  Psychologisches Wissen ist deine stärkste Verteidigung! Teste dein Verständnis im Quiz.
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ],
};
