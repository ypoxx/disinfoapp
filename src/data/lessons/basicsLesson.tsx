import { LessonContent } from '@/types/lessons';

export const basicsLessonContent: LessonContent = {
  moduleId: 'basics',
  steps: [
    {
      id: 'intro',
      title: 'Einführung: Warum Desinformation wichtig ist',
      sections: [
        {
          id: 'intro-1',
          title: 'Willkommen zum ersten Modul',
          type: 'info',
          content: (
            <>
              <p>
                Herzlich willkommen! In diesem Modul lernst du die Grundlagen über Desinformation
                – ein Phänomen, das in unserer digitalen Welt immer wichtiger wird.
              </p>
              <p className="mt-4">
                <strong>Was du lernen wirst:</strong>
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Was Desinformation ist und wie sie sich von anderen Begriffen unterscheidet</li>
                <li>Warum Desinformation gefährlich ist</li>
                <li>Wie Desinformation verbreitet wird</li>
                <li>Die psychologischen Mechanismen dahinter</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'definitions',
      title: 'Definitionen: Wichtige Begriffe',
      sections: [
        {
          id: 'def-disinfo',
          title: 'Desinformation',
          type: 'info',
          content: (
            <>
              <p className="text-lg font-semibold">
                Desinformation ist <span className="text-primary">absichtlich falsche</span> oder
                irreführende Information, die mit der Absicht verbreitet wird, zu täuschen oder zu
                manipulieren.
              </p>
              <p className="mt-4">
                Der Schlüssel liegt im Wort "absichtlich". Desinformation ist keine versehentliche
                Falschinformation, sondern wird gezielt eingesetzt, um:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Politische Meinungen zu beeinflussen</li>
                <li>Finanziellen Gewinn zu erzielen</li>
                <li>Soziale Spaltung zu fördern</li>
                <li>Verwirrung und Misstrauen zu säen</li>
              </ul>
            </>
          ),
        },
        {
          id: 'def-misinfo',
          title: 'Fehlinformation (Misinformation)',
          type: 'default',
          content: (
            <>
              <p>
                <strong>Fehlinformation</strong> ist falsche oder ungenaue Information, die ohne
                böswillige Absicht verbreitet wird. Die Person, die sie teilt, glaubt oft selbst,
                dass die Information wahr ist.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 italic">
                  Deine Tante teilt auf Facebook eine falsche Geschichte über ein Gesundheitsthema,
                  weil sie wirklich glaubt, dass sie anderen damit hilft. Das ist Fehlinformation.
                </p>
              </div>
            </>
          ),
        },
        {
          id: 'def-malinformation',
          title: 'Malinformation',
          type: 'default',
          content: (
            <>
              <p>
                <strong>Malinformation</strong> ist wahre Information, die absichtlich verwendet
                wird, um Schaden anzurichten – oft durch das Enthüllen privater Informationen oder
                das Aus-dem-Kontext-Reißen von Fakten.
              </p>
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="font-semibold">Beispiel:</p>
                <p className="mt-2 italic">
                  Ein alter, privater Chat wird veröffentlicht, um jemandem zu schaden, oder
                  Statistiken werden so präsentiert, dass sie eine falsche Schlussfolgerung nahelegen.
                </p>
              </div>
            </>
          ),
        },
        {
          id: 'def-comparison',
          title: 'Der Unterschied macht den Unterschied',
          type: 'tip',
          content: (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Begriff</th>
                      <th className="px-4 py-2 text-left font-semibold">Absicht</th>
                      <th className="px-4 py-2 text-left font-semibold">Wahrheitsgehalt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Desinformation</td>
                      <td className="px-4 py-2">Böswillig</td>
                      <td className="px-4 py-2">Falsch</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Fehlinformation</td>
                      <td className="px-4 py-2">Keine böse Absicht</td>
                      <td className="px-4 py-2">Falsch</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Malinformation</td>
                      <td className="px-4 py-2">Böswillig</td>
                      <td className="px-4 py-2">Wahr (aber schädlich verwendet)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
      ],
    },
    {
      id: 'why-dangerous',
      title: 'Warum ist Desinformation gefährlich?',
      sections: [
        {
          id: 'danger-democracy',
          title: 'Bedrohung für die Demokratie',
          type: 'warning',
          content: (
            <>
              <p>
                Desinformation untergräbt demokratische Prozesse, indem sie:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Das Vertrauen in Institutionen und Medien schwächt</li>
                <li>Wahlentscheidungen durch falsche Informationen beeinflusst</li>
                <li>Politische Polarisierung verstärkt</li>
                <li>Konstruktive Debatten unmöglich macht</li>
              </ul>
              <p className="mt-4">
                Wenn Menschen nicht mehr zwischen wahr und falsch unterscheiden können, wird
                rationale politische Entscheidungsfindung unmöglich.
              </p>
            </>
          ),
        },
        {
          id: 'danger-health',
          title: 'Gesundheitliche Risiken',
          type: 'warning',
          content: (
            <>
              <p>
                Gesundheitsbezogene Desinformation kann <strong>lebensbedrohlich</strong> sein:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Falsche Behandlungsmethoden können Menschen schaden</li>
                <li>Impfmythen gefährden die öffentliche Gesundheit</li>
                <li>Während Pandemien kann Desinformation tödlich sein</li>
              </ul>
              <div className="mt-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-4">
                <p className="font-semibold">Reales Beispiel:</p>
                <p className="mt-2">
                  Während der COVID-19-Pandemie führte Desinformation dazu, dass Menschen
                  gefährliche "Heilmittel" einnahmen oder sich nicht impfen ließen.
                </p>
              </div>
            </>
          ),
        },
        {
          id: 'danger-society',
          title: 'Soziale Spaltung',
          type: 'warning',
          content: (
            <>
              <p>
                Desinformation spaltet Gesellschaften:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Verstärkt Vorurteile und Stereotypen</li>
                <li>Schürt Hass zwischen Gruppen</li>
                <li>Zerstört den gesellschaftlichen Zusammenhalt</li>
                <li>Fördert Extremismus</li>
              </ul>
              <p className="mt-4">
                Oft wird Desinformation gezielt eingesetzt, um "uns gegen die anderen" zu
                positionieren und Konflikte zu verschärfen.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: 'echo-chambers',
      title: 'Echokammern und Filterblasen',
      sections: [
        {
          id: 'echo-definition',
          title: 'Was sind Echokammern?',
          type: 'info',
          content: (
            <>
              <p>
                Eine <strong>Echokammer</strong> ist eine Informationsumgebung, in der du
                hauptsächlich Meinungen und Informationen erhältst, die deine bestehenden
                Überzeugungen bestätigen.
              </p>
              <p className="mt-4">
                Stell dir vor, du bist in einem Raum, in dem alles, was du sagst, als Echo
                zurückkommt – aber nie eine andere Perspektive. Genau das passiert online!
              </p>
            </>
          ),
        },
        {
          id: 'filter-bubbles',
          title: 'Filterblasen in sozialen Medien',
          type: 'info',
          content: (
            <>
              <p>
                <strong>Filterblasen</strong> entstehen durch Algorithmen in sozialen Medien, die
                dir mehr von dem zeigen, was du bereits magst oder glaubst:
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>Algorithmen lernen deine Präferenzen</li>
                <li>Du siehst mehr Inhalte, die dir "gefallen"</li>
                <li>Gegensätzliche Meinungen werden ausgeblendet</li>
                <li>Deine Weltsicht wird enger, nicht breiter</li>
              </ul>
              <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <p className="font-semibold">Das Problem:</p>
                <p className="mt-2">
                  In einer Filterblase erscheinen extreme Meinungen normal, weil alle um dich herum
                  dasselbe denken. Desinformation wird verstärkt, weil kritische Stimmen fehlen.
                </p>
              </div>
            </>
          ),
        },
        {
          id: 'escape-bubble',
          title: 'Wie du Filterblasen durchbrichst',
          type: 'tip',
          content: (
            <>
              <p className="font-semibold">Praktische Tipps:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Folge bewusst auch Quellen mit anderen Perspektiven</li>
                <li>Nutze verschiedene Nachrichtenquellen</li>
                <li>Hinterfrage, warum dir bestimmte Inhalte angezeigt werden</li>
                <li>Lösche gelegentlich deinen Browserverlauf und Cookies</li>
                <li>Nutze verschiedene Suchmaschinen für Recherchen</li>
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
          title: 'Das Wichtigste auf einen Blick',
          type: 'info',
          content: (
            <>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Desinformation ist absichtlich falsch</p>
                  <p className="text-sm">Im Gegensatz zu versehentlicher Fehlinformation</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Desinformation ist gefährlich</p>
                  <p className="text-sm">
                    Sie bedroht Demokratie, Gesundheit und gesellschaftlichen Zusammenhalt
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Echokammern verstärken Desinformation</p>
                  <p className="text-sm">
                    Algorithmen zeigen uns mehr von dem, was wir bereits glauben
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="font-semibold">✓ Du kannst aktiv werden</p>
                  <p className="text-sm">
                    Durch bewusstes Medienverhalten kannst du Filterblasen durchbrechen
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <p className="text-center font-semibold">
                  Bereit für das Quiz? Teste dein Wissen über die Grundlagen der Desinformation!
                </p>
              </div>
            </>
          ),
        },
      ],
    },
  ],
};
