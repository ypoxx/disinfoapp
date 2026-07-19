// Welle R4: 3 Übungen für sludge (Sludge / Bad Friction).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4Sludge: Exercise[] = [
  {
    id: 'w4-sludge-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt der Anbieter hier ein?',
      en: 'Which pattern is the vendor using here?',
    },
    scenario: {
      de: 'SLA-Gutschrift nach CMS-Ausfall: Während der Bilanzpressekonferenz war das Newsroom-CMS zwei Stunden offline; der Vertrag sieht dafür eine Gutschrift vor. Die Leiterin Unternehmenskommunikation lässt den Anspruch geltend machen — und stellt fest: Zusätzliche Lizenzen kauft man im Kundenkonto mit zwei Klicks, die Gutschrift dagegen verlangt ein Support-Ticket in der Kategorie „Sonstiges", Serverprotokolle als Nachweis und ein gegengezeichnetes PDF. Nach vier Wochen kommt die Bitte, alles neu einzureichen, weil ein Feld gefehlt habe. Kündigen will hier niemand — es geht nur darum, das zugesagte Geld zu bekommen.',
      en: 'SLA credit after a CMS outage: during the annual results press conference, the newsroom CMS was down for two hours; the contract provides for a service credit. The head of corporate communications has the claim filed — and discovers that buying additional licences takes two clicks in the customer account, while the credit requires a support ticket filed under "Other", server logs as proof, and a countersigned PDF. Four weeks later comes a request to resubmit everything because one field was missing. Nobody wants to cancel — the only goal is to collect the money the contract promises.',
    },
    options: [
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Sludge / Bad Friction', en: 'Sludge / bad friction' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Sludge: Der Anbieter macht den Weg zum vertraglich zugesagten Anspruch mühsamer als den Weg zum Kauf — jede Hürde wirkt einzeln vertretbar (Nachweis, Formular, Rückfrage), in Summe erledigt die Reibung die Ablehnung, ohne dass je jemand Nein sagen muss; von jedem aufgegebenen Antrag profitiert der Anbieter. Legitim einsetzen: Reibung ist in eigenen Prozessen dort professionell, wo sie die Gegenseite schützt — eine Bestätigungsstufe vor unumkehrbaren Schritten, ein verhältnismäßiger Nachweis gegen Missbrauch; der Maßstab lautet: Der Weg zum Anspruch ist so kurz wie der Weg zum Abschluss. Erkennen und kontern: Zähl die Schritte in beide Richtungen — kaufen versus zurückfordern — und wenn sie auseinanderklaffen, dokumentiere jeden Kontakt, mach den Anspruch schriftlich mit Verweis auf die Vertragsklausel geltend und setz eine Frist; auf zermürbende Einzelrückfragen antwortest du gebündelt und eskalierst zum Account Management. Der Subscription Trap wirkt plausibel, weil auch dort der Anbieter blockiert — das Muster bezeichnet aber den künstlich erschwerten Ausstieg aus einem Vertrag; hier will niemand kündigen, es geht um eine Leistung innerhalb der laufenden Beziehung. Der Default-/Status-quo-Effekt liegt nahe, weil am Ende das Nichtstun gewinnt — er arbeitet aber mit Voreinstellungen, die ohne Zutun greifen, nicht mit einem beschwerlichen Weg, der aktives Wollen aufzehrt. Sneaking passt scheinbar, weil etwas im Verborgenen schiefläuft — dort werden aber Posten oder Bedingungen unbemerkt untergeschoben; hier ist der Anspruch bekannt und unstrittig, nur der Weg dorthin ist verbaut.',
      en: 'Sludge: the vendor makes the path to a contractually promised entitlement harder than the path to a purchase — each hurdle looks defensible on its own (proof, form, follow-up query), but in aggregate the friction does the rejecting without anyone ever having to say no; the vendor profits from every abandoned claim. Used legitimately: friction is professional in your own processes where it protects the other side — a confirmation step before irreversible actions, a proportionate proof requirement against fraud; the yardstick is that the path to a claim is as short as the path to the sale. To spot and counter it: count the steps in both directions — buying versus claiming back — and when they diverge, document every contact, assert the claim in writing citing the contract clause, and set a deadline; answer wearying piecemeal queries in one bundle and escalate to account management. The subscription trap looks plausible because there, too, the vendor obstructs — but that pattern names the artificially obstructed exit from a contract; nobody here wants to cancel, this is about a benefit within the ongoing relationship. The default / status quo effect seems close because inaction wins in the end — but it works through presets that take effect without any action, not through an arduous path that grinds down active intent. Sneaking appears to fit because something is going wrong out of sight — but sneaking slips items or terms in unnoticed; here the entitlement is known and undisputed, only the road to it is blocked.',
    },
    points: 10,
    primaryTechniqueId: 'sludge',
    relatedTechniques: ['sludge', 'subscription_trap_obstruction', 'default_status_quo', 'sneaking'],
  },
  {
    id: 'w4-sludge-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Krisenstab nach dem Rückruf einer Produktserie: Das Unternehmen hat öffentlich unkomplizierte Erstattungen zugesagt; du verantwortest die Kommunikation. Im Abstimmungscall schlägt der Leiter Kundenservice vor, Erstattungsanträge nur als Papierformular mit Originalkassenbon per Post anzunehmen — „das senkt die Quote erfahrungsgemäß um die Hälfte, ohne dass wir irgendwem Nein sagen müssen". Der Onlineshop nimmt Bestellungen weiterhin mit einem Klick an.',
      en: 'Crisis team after a product line recall: the company has publicly promised hassle-free refunds; you own communications. On the alignment call, the head of customer service proposes accepting refund requests only as a paper form with the original receipt, sent by post — "in our experience that halves the claim rate without us having to say no to anyone". Meanwhile the online shop keeps taking orders with one click.',
    },
    options: [
      {
        de: 'Ich widerspreche im Call und halte das Prinzip fest: Der Erstattungsweg muss so einfach sein wie der Bestellweg — ein Online-Formular mit Foto des Kassenbons genügt. Die zugesagte Kulanz wirkt als Krisenmaßnahme nur, wenn sie einlösbar ist; eine über Hürden gedrückte Quote holt uns als zweite Berichterstattungswelle ein und ruft Verbraucherschützer und Aufsicht auf den Plan.',
        en: 'I push back on the call and put the principle on record: the refund path must be as easy as the order path — an online form with a photo of the receipt is enough. The promised goodwill only works as a crisis measure if it can actually be redeemed; a claim rate suppressed through hurdles comes back as a second wave of coverage and draws consumer advocates and regulators.',
      },
      {
        de: 'Ich trage den Vorschlag mit: Die Zusage ist damit formal erfüllt, ein Postweg ist rechtlich zulässig, und eine niedrigere Erstattungsquote schont das Budget für die eigentliche Krisenarbeit.',
        en: 'I go along with the proposal: it formally honours the promise, a postal channel is legally permissible, and a lower refund rate protects the budget for the actual crisis work.',
      },
      {
        de: 'Ich schlage vor, das Papierformular zu behalten, es aber freundlich zu texten und mit einer FAQ-Seite zu begleiten — dann fühlt sich der Weg leichter an, ohne dass wir die Quote gefährden.',
        en: 'I suggest keeping the paper form but writing it in a friendly tone and adding an FAQ page — that way the process feels easier without putting the claim rate at risk.',
      },
      {
        de: 'Ich eskaliere an die Geschäftsführung mit der Forderung, sämtliche Prüfschritte zu streichen und jede Erstattung sofort ohne Nachweis auszuzahlen — nur null Reibung ist in der Krise glaubwürdig.',
        en: 'I escalate to the executive board demanding that all verification steps be dropped and every refund be paid out instantly with no proof — in a crisis, only zero friction is credible.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist Sludge in Reinform: Die Erstattung wird nicht verweigert, sondern hinter Medienbruch, Papierform und Originalbeleg gelegt — die Absicht, „die Quote zu halbieren", spricht der Kundenservice sogar aus; jede Hürde wirkt einzeln vertretbar, in Summe erledigt die Reibung das Neinsagen. Die beste Option benennt den Maßstab (Anspruchsweg so einfach wie Bestellweg), bietet eine verhältnismäßige Alternative und argumentiert professionell über Risiko: Eine öffentlich zugesagte, aber schwer einlösbare Kulanz ist ein Reputationsrisiko mit Ansage — und erschwerte Rechtsdurchsetzung steht bei Aufsichtsbehörden ausdrücklich im Fokus. Legitim einsetzen: Ein Nachweis gegen Missbrauch ist in Ordnung, wenn er verhältnismäßig bleibt — Foto statt Original, online statt Postweg; gute Reibung schützt die Kundin, schlechte Reibung schützt nur die Quote. Erkennen und kontern: Frag bei jedem Prozessschritt „Wem nützt diese Hürde?" und vergleich die Klickwege hinein und heraus — klaffen sie auseinander, ist das dein Signal. Der Mitträger-Weg wirkt plausibel, weil Rechtmäßigkeit und Budgetdisziplin echte Güter sind — aber „rechtlich zulässig" ist nicht der Maßstab einer öffentlich zugesagten Kulanz, und die gesparte Quote ist genau der Schaden, den das Muster anrichtet. Der Text-und-FAQ-Weg wirkt professionell, behandelt aber ein Prozessproblem als Formulierungsproblem: Der freundlichste Ton senkt keine einzige Hürde, die Quote bleibt planvoll gedrückt. Die Eskalation überkorrigiert: Verhältnismäßige Prüfschritte sind legitime Reibung gegen Missbrauch — das Problem ist die Asymmetrie zwischen Bestell- und Erstattungsweg, nicht jede Reibung an sich.',
      en: 'The proposal is sludge in its purest form: the refund is not denied but placed behind a channel switch, paper form, and original receipt — the head of customer service even states the intent to "halve the rate"; each hurdle looks defensible on its own, and in aggregate the friction does the saying-no. The best option names the yardstick (the claim path as easy as the order path), offers a proportionate alternative, and argues professionally through risk: goodwill that is publicly promised but hard to redeem is a reputational risk waiting to happen — and obstructed redress is an explicit focus of regulators. Used legitimately: a proof requirement against fraud is fine as long as it stays proportionate — a photo instead of an original, online instead of post; good friction protects the customer, bad friction only protects the claim rate. To spot and counter it: for every process step, ask "who benefits from this hurdle?" and compare the click paths in and out — when they diverge, that is your signal. Going along looks plausible because legality and budget discipline are real goods — but "legally permissible" is not the standard for publicly promised goodwill, and the saved claim rate is precisely the harm the pattern causes. The copy-and-FAQ route feels professional but treats a process problem as a wording problem: the friendliest tone lowers not a single hurdle, and the rate stays deliberately suppressed. The escalation overcorrects: proportionate verification is legitimate friction against fraud — the problem is the asymmetry between ordering and claiming, not friction as such.',
    },
    points: 10,
    primaryTechniqueId: 'sludge',
    relatedTechniques: ['sludge', 'subscription_trap_obstruction', 'dark_patterns'],
  },
  {
    id: 'w4-sludge-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Mailwechsel mit dem Kundenservice einer Bilddatenbank: Die Bildredakteurin eines Corporate-Newsrooms will eine doppelt abgebuchte Jahresrechnung zurückholen — das Abo selbst möchte sie behalten. Neue Lizenzpakete lassen sich im Konto per Klick dazubuchen; für die Rückbuchung verlangt der Anbieter ein ausgefülltes Formular, eine Bankbestätigung im Original per Post und nennt sechs Wochen Bearbeitungszeit.',
      en: 'Email exchange with the customer service of a stock photo platform: the picture editor of a corporate newsroom wants to recover an annual invoice that was debited twice — she wants to keep the subscription itself. New licence packages can be added in the account with one click; for the chargeback, the provider demands a completed form, an original bank confirmation by post, and quotes six weeks of processing time.',
    },
    options: [
      { de: 'Sludge / Bad Friction', en: 'Sludge / bad friction' },
      { de: 'Subscription Trap / Obstruction (Roach Motel)', en: 'Subscription trap / obstruction (roach motel)' },
      { de: 'Drip Pricing', en: 'Drip pricing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Sludge: Der Weg zum unstrittigen Anspruch — das doppelt abgebuchte Geld zurück — ist mit Formular, Postweg und Wartezeit verbaut, während der Weg zu neuen Ausgaben ein Klick bleibt; die Reibung setzt darauf, dass ein Teil der Berechtigten aufgibt. Legitim einsetzen: In eigenen Prozessen darf Reibung dort stehen, wo sie schützt — etwa eine Rückfrage vor einer unumkehrbaren Löschung; für Erstattungen gilt der Maßstab, dass sie so einfach laufen wie die Abbuchung. Erkennen und kontern: Vergleich die Schrittzahl in beide Richtungen; klafft sie auseinander, fordere den Betrag schriftlich mit Frist zurück und behalte die Rückbuchung über die eigene Bank als zweiten Weg im Blick. Der Subscription Trap wirkt plausibel, weil ein Abo im Spiel ist und der Anbieter mauert — das Muster meint aber den erschwerten Ausstieg aus dem Vertrag; hier will die Redakteurin ausdrücklich bleiben, blockiert ist die Erstattung. Drip Pricing liegt nahe, weil es ebenfalls ums Geld geht — dort tröpfeln aber Pflichtkosten während des Kaufprozesses nach; hier kommt nichts hinzu, es wird nur der Rückweg verbaut.',
      en: 'Sludge: the path to an undisputed entitlement — getting back the double-debited money — is blocked with a form, a postal channel, and a waiting period, while the path to new spending remains one click; the friction bets on a share of rightful claimants giving up. Used legitimately: in your own processes, friction may stand where it protects — say, a confirmation before an irreversible deletion; for refunds, the yardstick is that they run as easily as the debit did. To spot and counter it: compare the number of steps in both directions; when they diverge, demand the amount back in writing with a deadline and keep a chargeback via your own bank in view as a second route. The subscription trap looks plausible because a subscription is involved and the provider stonewalls — but that pattern means the obstructed exit from the contract; here the editor explicitly wants to stay, and it is the refund that is blocked. Drip pricing seems close because money is at stake too — but there, mandatory costs trickle in during the purchase flow; here nothing is added, only the way back is barricaded.',
    },
    points: 10,
    primaryTechniqueId: 'sludge',
    relatedTechniques: ['sludge', 'subscription_trap_obstruction', 'drip_pricing'],
  },
];
