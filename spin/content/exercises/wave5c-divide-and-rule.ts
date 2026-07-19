// Welle 5c: 3 Übungen für divide_and_rule (Teile und herrsche).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cDivideAndRule: Exercise[] = [
  {
    id: 'wave5c-divide_and_rule-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der Werksleiter hier ein?',
      en: 'Which technique is the plant manager using here?',
    },
    scenario: {
      de: 'Montage- und Logistikteam hatten in einer gemeinsamen Mail mehr Personal von der Werksleitung gefordert. Kurz darauf schreibt der Werksleiter beiden Teams getrennt: der Montage, die Logistik habe die Forderung „hinter dem Rücken abgeschwächt"; der Logistik, die Montage wolle sie „bei der Schichtplanung ausbooten". Beide Teams beginnen, sich gegenseitig zu misstrauen — die gemeinsame Forderung an die Leitung kommt nicht mehr zustande.',
      en: 'The assembly and logistics teams had jointly emailed plant management demanding more staff. Shortly after, the plant manager writes to each team separately: he tells assembly that logistics "watered the demand down behind their backs", and tells logistics that assembly wants to "cut them out of the shift planning". The two teams start to distrust each other — the joint demand to management never materialises.',
    },
    options: [
      { de: 'Divide and Rule (Teile und herrsche)', en: 'Divide and Rule' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Atomisierung / Vereinzelung', en: 'Societal atomisation' },
      { de: 'Unity- / Identitäts-Appell (Wir-gegen-die)', en: 'Unity / identity appeal (us-versus-them)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Divide and Rule: Der Werksleiter — die Instanz, gegen die sich die gemeinsame Forderung richtet — schürt getrennt Misstrauen zwischen zwei annähernd gleich starken Untergruppen, damit ihre Koalition zerfällt und niemand ihm geschlossen gegenübertritt. Kennzeichen sind die getrennten Kanäle mit gegensätzlicher Botschaft und der Nutznießer, der von der Spaltung profitiert. Legitim einsetzen: Getrennt mit verschiedenen Stakeholdern zu sprechen und echte Interessenunterschiede offen zu benennen ist normales Stakeholder-Management — professionell bleibt es, solange du keine Feindbilder zwischen ihnen erfindest und ihnen den direkten Austausch nicht abschneidest. Erkennen und kontern: Bring die beiden Seiten zusammen und lass sie abgleichen, wer wem was wirklich gesagt hat — sobald die getrennten Erzählungen aufeinandertreffen, bricht die Spaltung in sich zusammen. Scapegoating würde beide Teams gemeinsam gegen einen dritten Schuldigen aufbringen; hier gibt es keinen benannten Außenfeind, sondern zwei Verbündete werden gegeneinander gewendet. Atomisierung zielt darauf, Einzelne aus allen Bindungen zu lösen und zu vereinzeln — hier bleiben die Gruppen intern intakt, nur ihr Bündnis miteinander wird verhindert. Ein Unity- / Identitäts-Appell würde eine Gruppe um ein gemeinsames „Wir" scharen, meist gegen ein „Die" — hier wird gerade kein gemeinsames Wir gestiftet, sondern ein bestehendes Bündnis zwischen zwei Verbündeten aufgebrochen, während der Nutznießer außen vor bleibt.',
      en: 'Divide and Rule: the plant manager — the very party the joint demand is aimed at — separately stokes distrust between two roughly equal subgroups so their coalition collapses and no one confronts him as a bloc. The tells are the separate channels carrying opposite messages and the beneficiary who profits from the split. Used legitimately: talking to different stakeholders separately and naming real differences of interest openly is ordinary stakeholder management — it stays professional as long as you manufacture no enemies between them and never cut off their direct exchange. To spot and counter it: bring the two sides together and let them compare who actually said what to whom — the moment the separate narratives meet, the split falls apart. Scapegoating would turn both teams jointly against a third culprit; here there is no named outside enemy, instead two allies are turned against each other. Atomisation aims to detach individuals from all bonds and isolate them — here the groups stay internally intact, only their alliance with each other is prevented. A unity / identity appeal would rally a group around a shared "us", usually against a "them" — here no shared "us" is forged; instead an existing alliance between two allies is broken open, with the beneficiary staying outside it.',
    },
    points: 10,
    primaryTechniqueId: 'divide_and_rule',
    relatedTechniques: ['divide_and_rule', 'scapegoating_othering', 'unity_identity'],
  },
  {
    id: 'wave5c-divide_and_rule-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die interne Kommunikation. Dir fällt auf, dass die Bereichsleitung dem Vertrieb und dem Service jeweils getrennt signalisiert, das andere Team torpediere das gemeinsame Bonusmodell — obwohl beide dasselbe eingefordert hatten. Die beiden Teams reden schon nicht mehr miteinander und beginnen, sich gegenseitig zu misstrauen.',
      en: 'You lead internal communications. You notice that the division head is separately signalling to sales and to service that the other team is torpedoing their shared bonus scheme — even though both had asked for the same thing. The two teams have stopped talking and are starting to distrust each other.',
    },
    options: [
      {
        de: 'Ich bringe beide Teams an einen Tisch: Ich mache die gemeinsame Ausgangsforderung und die tatsächliche Faktenlage für beide gleichzeitig sichtbar, sodass Vertrieb und Service direkt abgleichen können, wer was wirklich gesagt hat — die getrennten Kanäle, von denen die Spaltung lebt, fallen damit weg.',
        en: 'I bring both teams to one table: I make the original shared demand and the actual facts visible to both at once, so sales and service can compare directly who really said what — removing the separate channels the split feeds on.',
      },
      {
        de: 'Ich kläre es erst im Vier-Augen-Gespräch mit dem Team, das mir näher steht, und stärke ihm den Rücken — die andere Seite kommt später dran.',
        en: 'I sort it out first in a one-on-one with the team I am closer to and back them up — the other side can wait.',
      },
      {
        de: 'Ich halte mich raus: Die Bonusfrage ist Sache der Bereichsleitung, und getrennte Gespräche mit einzelnen Teams sind ihr gutes Recht.',
        en: 'I stay out of it: the bonus question is the division head\'s business, and separate talks with individual teams are her prerogative.',
      },
      {
        de: 'Ich stelle die Bereichsleitung in der nächsten Townhall offen als Strippenzieherin bloß, damit alle sehen, wer hier in Wahrheit spaltet.',
        en: 'I openly expose the division head as the puppet-master at the next town hall, so everyone sees who is really splitting the teams.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Muster ist Divide and Rule: Die Instanz, gegen die sich die gemeinsame Bonusforderung richtet, hält Vertrieb und Service über getrennte Kanäle mit gegensätzlichen Botschaften auf Abstand, damit ihre Koalition zerfällt. Die beste Option nimmt der Technik ihre Grundlage — den fehlenden direkten Austausch: Du führst beide Seiten zusammen und legst die gemeinsame Ausgangslage und die Fakten offen, sodass sich die widersprüchlichen Erzählungen nicht länger halten. Legitim einsetzen: Getrennte Gespräche mit einzelnen Stakeholdern sind normal — der Unterschied ist, ob dabei echte Interessen benannt oder Feindbilder zwischen Verbündeten erfunden werden. Erkennen und kontern: Sobald zwei Gruppen mit gemeinsamer Sache plötzlich übereinander statt miteinander reden, stell den direkten Kanal wieder her und lass sie die Behauptungen abgleichen. Erst die eine Seite im Vier-Augen-Gespräch zu stärken vertieft genau die Spaltung, die du entschärfen willst. Sich rauszuhalten überlässt der getrennten Bearbeitung das Feld — das Muster wirkt weiter. Die Bereichsleitung öffentlich bloßzustellen wirkt entschlossen, ersetzt aber nur den einen Konflikt durch einen neuen und macht sie zum Sündenbock, statt die beiden Teams wieder zusammenzuführen.',
      en: 'The pattern is Divide and Rule: the party the joint bonus demand is aimed at keeps sales and service apart through separate channels carrying opposite messages, so their coalition collapses. The best option removes the technique\'s foundation — the missing direct exchange: you bring both sides together and put the shared starting point and the facts on the table, so the contradictory narratives no longer hold. Used legitimately: separate talks with individual stakeholders are normal — the difference is whether real interests are named or one side is cast as the other\'s enemy. To spot and counter it: the moment two groups with a common cause suddenly talk about each other instead of to each other, restore the direct channel and let them compare the claims. Backing one side first in a one-on-one deepens exactly the split you want to defuse. Staying out of it lets the separate back-channels keep doing their work — the pattern keeps working. Publicly exposing the division head looks decisive but merely swaps one conflict for another and turns her into a scapegoat, instead of reuniting the two teams.',
    },
    points: 10,
    primaryTechniqueId: 'divide_and_rule',
    relatedTechniques: ['divide_and_rule', 'scapegoating_othering'],
  },
  {
    id: 'wave5c-divide_and_rule-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Verbandsinterne Hintergrundrunde: Der Vorsitzende streut gegenüber den mittelständischen Mitgliedern, die Großkonzerne im Verband wollten sie bei der neuen Beitragsordnung überstimmen — und sagt den Großkonzernen umgekehrt, der Mittelstand plane eine Blockade. So verhandelt er mit beiden Lagern einzeln und verhindert, dass sie sich gegen seine eigene Beitragsvorlage verbünden.',
      en: 'Association background briefing: the chair tells the small and mid-sized members that the large corporates in the association mean to outvote them on the new dues rules — and tells the large corporates, conversely, that the mid-sized bloc is planning to obstruct. He thus negotiates with both camps one at a time and prevents them from allying against his own dues proposal.',
    },
    options: [
      { de: 'Divide and Rule (Teile und herrsche)', en: 'Divide and Rule' },
      { de: 'Scapegoating / Othering (Sündenbock)', en: 'Scapegoating / Othering' },
      { de: 'Atomisierung / Vereinzelung', en: 'Societal atomisation' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Divide and Rule: Der Vorsitzende — dessen eigene Beitragsvorlage zur Debatte steht — hält zwei annähernd gleich starke Lager über getrennte Erzählungen auf Abstand, damit sie sich nicht gegen ihn verbünden. Entscheidend ist, dass der Nutznießer selbst die Spaltung betreibt und beide Seiten getrennt bearbeitet. Erkennen und kontern: Frag, wer von der Spaltung profitiert, und stell den direkten Draht zwischen den Lagern her — sobald Mittelstand und Großkonzerne ihre gegensätzlich erzählten Versionen abgleichen, bricht das Muster zusammen. Legitim einsetzen: Getrennt mit beiden Lagern zu sprechen und reale Interessengegensätze offen zu benennen ist zulässig — solange du keine Feindbilder erfindest und den direkten Austausch nicht kappst. Scapegoating würde beide Lager gemeinsam gegen einen dritten Schuldigen aufbringen; hier gibt es keinen benannten Außenfeind, sondern zwei potenzielle Verbündete werden gegeneinander gewendet. Atomisierung würde Einzelne aus ihren Bindungen lösen und vereinzeln — hier bleiben die beiden Lager intern intakt, verhindert wird nur ihr Bündnis miteinander.',
      en: 'Divide and Rule: the chair — whose own dues proposal is on the table — keeps two roughly equal camps apart through separate narratives so they cannot ally against him. What is decisive is that the beneficiary himself drives the split and works each side separately. To spot and counter it: ask who profits from the split, and restore the direct line between the camps — the moment the mid-sized and the large members compare the opposing versions each side was told, the pattern collapses. Used legitimately: talking to both camps separately and naming real conflicts of interest openly is fair — as long as you cast neither side as the other\'s enemy and do not sever the direct exchange. Scapegoating would turn both camps jointly against a third culprit; here there is no named outside enemy, instead two potential allies are turned against each other. Atomisation would detach individuals from their bonds and isolate them — here the two camps stay internally intact, only their alliance with each other is prevented.',
    },
    points: 10,
    primaryTechniqueId: 'divide_and_rule',
    relatedTechniques: ['divide_and_rule', 'scapegoating_othering'],
  },
];
