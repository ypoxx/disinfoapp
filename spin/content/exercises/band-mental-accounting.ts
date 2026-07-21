import type { Exercise } from '../types';

/**
 * Band-Übung (BEGINNER) zu Mental Accounting (mental_accounting) — komplementär zum
 * intermediate-Band der wave5b-Übungen und des früheren intermediate band-Items.
 * Bewusst blatant: der Cue steht offen im Zitat ("geschenktes Geld", "nicht Ihr
 * echtes Budget"), in <10s lösbar, 3 Optionen. Eigenes Sujet (Cashback-Guthaben
 * am Checkout) — keine Dublette zu technique.examples (Steuerrückerstattung,
 * Digitalisierungstopf, Kursgewinne) und zur Jubiläumsrücklage-Fassung.
 * NICHT in exercises/index.ts registriert — Registrierung durch die Hauptsession.
 */
export const bandMentalAccounting: Exercise[] = [
  {
    id: 'band-mental_accounting-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt in der Empfehlung?',
      en: 'Which technique is in the pitch?',
    },
    scenario: {
      de: 'Im Checkout eines Online-Shops empfiehlt ein Verkaufs-Chatbot der Kundin das teurere Premium-Modell: „Zahlen Sie den Aufpreis doch einfach mit Ihrem Cashback-Guthaben — das ist ja geschenktes Geld, kein Griff in Ihr echtes Budget. So tut der Aufpreis gar nicht weh."',
      en: 'At an online shop\'s checkout, a sales chatbot recommends the pricier premium model to the customer: "Just put the extra toward it with your cashback balance — that\'s free money, not a dip into your real budget. That way the upgrade won\'t hurt at all."',
    },
    options: [
      { de: 'Mental Accounting (mentale Buchführung)', en: 'Mental accounting' },
      { de: 'Framing (Bezugsrahmen setzen)', en: 'Framing' },
      { de: 'Verlustaversion (Verluste wiegen schwerer als gleich große Gewinne)', en: 'Loss aversion (losses loom larger than equivalent gains)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Mental Accounting (mentale Buchführung): Der Hebel wirkt, weil wir Geld nicht als eine Menge behandeln, sondern gedanklich getrennten Konten zuordnen und je nach Konto anders bewerten — obwohl ein Euro überall gleich viel wert ist. Das Cashback-Guthaben wird zum Sonderkonto „geschenktes Geld" erklärt, aus dem sich der Aufpreis leichter ausgeben lässt als aus dem „echten Budget". Legitim einsetzen: Ein separates Rücklagen- oder Bonus-Konto kann beim Sparen helfen, solange dir klar bleibt, dass jeder Euro gleich zählt. Erkennen und kontern: Frag dich, ob derselbe Betrag aus deinem Hauptkonto genauso locker säße — wenn nein, wirkt gerade eine Konto-Etikettierung, und du rechnest die Ausgabe bewusst gegen dein Gesamtbudget. Framing läge nahe, weil ein günstig klingender Bezugsrahmen gesetzt wird — Framing schöbe aber einen ganzen Blickwinkel nach vorn („nachhaltig", „zukunftssicher"); hier bleibt die Sache dieselbe, nur das Konto, aus dem gezahlt wird, wird umetikettiert. Verlustaversion wirkte plausibel, weil „tut gar nicht weh" den Schmerz eines Verlusts anspricht — sie beschreibt aber, dass ein Verlust schwerer wiegt als ein gleich großer Gewinn; hier wird kein Verlust gegen einen Gewinn abgewogen, sondern derselbe Betrag je nach Konto unterschiedlich verbucht.',
      en: 'Mental accounting: the lever works because we treat money not as one pool but sort it into separate mental accounts and value each differently — even though a euro is worth the same wherever it sits. The cashback balance is declared a special "free money" account from which the upgrade feels easier to spend than from the "real budget". Used legitimately: a separate reserve or bonus account can help you save, as long as you stay clear that every euro counts the same. To spot and counter it: ask whether the same amount would sit as easily coming from your main account — if not, an account label is doing the work, and you deliberately weigh the spend against your total budget. Framing is tempting because a favourable frame is set — but framing would push a whole angle to the front ("sustainable", "future-proof"); here the thing stays the same and only the account it is paid from gets relabelled. Loss aversion looks plausible because "won\'t hurt at all" speaks to the pain of a loss — but loss aversion means a loss weighs more than an equal-sized gain; here no loss is weighed against a gain, the same amount is simply booked differently depending on the account.',
    },
    points: 10,
    primaryTechniqueId: 'mental_accounting',
    relatedTechniques: ['mental_accounting', 'framing', 'loss_aversion'],
  },
];
