// Welle R5b: 3 Übungen für mental_accounting (Mental Accounting).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bMentalAccounting: Exercise[] = [
  {
    id: 'wave5b-mental_accounting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster nutzt die E-Mail hier?',
      en: 'Which pattern is the email using here?',
    },
    scenario: {
      de: 'Loyalty-Mailing eines Onlinehändlers an Bestandskunden: Die CRM-Managerin verschickt eine E-Mail mit dem Betreff „Ihre 40 Euro Cashback sind da". Im Text heißt es: „Das ist Bonusgeld — geben Sie es für etwas aus, das Sie sich vom normalen Budget nie gönnen würden." Der gutgeschriebene Betrag stammt aus früheren Einkäufen der Kundin.',
      en: 'Loyalty mailing from an online retailer to existing customers: the CRM manager sends an email with the subject line "Your 40 euros cashback is here". The body reads: "This is bonus money — spend it on something you would never treat yourself to from your normal budget." The credited amount comes from the customer\'s own earlier purchases.',
    },
    options: [
      { de: 'Verlustaversion (Loss Aversion)', en: 'Loss aversion' },
      { de: 'Mental Accounting', en: 'Mental accounting' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Mental Accounting: Das Cashback sind ganz normale Euro, doch das Etikett „Bonusgeld" schiebt sie in ein mentales Extra-Konto, aus dem lockerer und für Wünsche ausgegeben wird, die aus dem „normalen Budget" nie genehmigt würden — obwohl der Betrag aus den eigenen früheren Einkäufen der Kundin stammt. Legitim einsetzen: Willst du eine Prämie wertig positionieren, darfst du sie als eigenständige Belohnung inszenieren — fair bleibt es, solange du nicht suggerierst, es handle sich um „geschenktes" Geld ohne Gegenwert. Erkennen und kontern: Frag dich bei jedem „Bonus"- oder „Extra"-Label, ob du den Betrag genauso ausgeben würdest, wenn er schlicht auf deinem Gehaltskonto läge — ein Euro bleibt ein Euro, egal welches Etikett darauf klebt. Verlustaversion wirkt plausibel, weil Prämien oft mit einer Verfallsfrist kommen — hier fehlt aber jede Drohung, etwas zu verlieren; es geht allein um die lockere Verwendung eines separat verbuchten Guthabens. Framing ist der Oberbegriff für „anders darstellen" und deshalb nie falsch genug — die präzise Antwort ist Mental Accounting, weil das Geld einem bestimmten Konto zugeordnet und darüber neu bewertet wird. Der Endowment-Effekt beträfe die Überbewertung von etwas, das man bereits besitzt — die Kundin besitzt das Guthaben zwar, doch der Hebel ist nicht „es gehört mir, also ist es mir mehr wert", sondern „es liegt auf dem Spaßkonto, also gebe ich es leichter aus".',
      en: 'Mental accounting: the cashback is perfectly ordinary money, but the "bonus money" label pushes it into a mental extra-account that gets spent more freely, on wants that would never clear the "normal budget" — even though the sum comes from the customer\'s own earlier purchases. Used legitimately: if you want to position a reward as something special, you may stage it as a reward in its own right — it stays fair as long as you don\'t imply it is "gifted" money with no cost behind it. To spot and counter it: whenever you meet a "bonus" or "extra" label, ask whether you would spend the amount the same way if it simply sat in your salary account — a euro stays a euro, whatever label is stuck on it. Loss aversion looks plausible because rewards often carry an expiry date — but here there is no threat of losing anything; it is purely about spending a separately booked balance more loosely. Framing is the umbrella term for "presenting differently" and therefore never quite wrong enough — the precise answer is mental accounting, because the money is assigned to a specific account and re-valued through it. The endowment effect would be about overvaluing something you already own — the customer does own the balance, but the lever is not "it\'s mine, so it\'s worth more to me", it is "it sits in the fun account, so I spend it more easily".',
    },
    points: 10,
    primaryTechniqueId: 'mental_accounting',
    relatedTechniques: ['mental_accounting', 'loss_aversion', 'framing', 'endowment_effect'],
  },
  {
    id: 'wave5b-mental_accounting-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation und verantwortest das Kampagnenbudget. Eure Agentur bietet im Jour fixe einen kostenpflichtigen Upsell an — ein zusätzliches Influencer-Paket. Der Kundenberater wirbt: „Das nehmt ihr einfach aus dem Restbudget der Sommerkampagne, das verfällt Ende des Quartals ohnehin — also im Grunde kein echter Zusatzaufwand für euch." Der Betrag entspricht rund einem Fünftel eures Jahresmedienbudgets.',
      en: 'You run corporate communications and own the campaign budget. In the weekly check-in, your agency pitches a paid upsell — an extra influencer package. The account manager argues: "Just take it from the leftover budget of the summer campaign, that expires at the end of the quarter anyway — so really no extra spend for you." The amount is about a fifth of your annual media budget.',
    },
    options: [
      {
        de: 'Ich bewerte den Upsell unabhängig vom Topf: Ein Euro Restbudget ist derselbe Euro wie ein neu beantragter. Ich prüfe Paket, Reichweite und Preis, als müsste ich die Ausgabe frisch begründen — „verfällt sonst" ist kein Nutzen, sondern nur ein Etikett.',
        en: 'I judge the upsell independently of the pot: a euro of leftover budget is the same euro as a freshly requested one. I assess the package, reach and price as if I had to justify the spend from scratch — "it expires otherwise" is not a benefit, just a label.',
      },
      {
        de: 'Ich sage zu: Das Restbudget ist ohnehin dieser Kampagne zugeordnet und verfällt sonst. Genutztes Budget ist besser als verfallenes, und einen Beleg für neuen Bedarf muss ich so nicht führen.',
        en: 'I say yes: the leftover budget is earmarked for this campaign anyway and would otherwise lapse. Used budget beats lapsed budget, and this way I don\'t have to document a fresh need.',
      },
      {
        de: 'Ich verschiebe den Posten ins nächste Jahresbudget, damit er die laufende Sommerkampagne nicht belastet — dort fällt die Summe zwischen den größeren Positionen weniger auf.',
        en: 'I move the item into next year\'s budget so it doesn\'t weigh on the current summer campaign — there the sum stands out less among the bigger line items.',
      },
      {
        de: 'Ich lehne ab und sperre künftig grundsätzlich jedes Angebot, das aus Restmitteln finanziert werden soll — solche Vorschläge sind erfahrungsgemäß immer nur Budgetabschöpfung.',
        en: 'I decline and, going forward, block any offer meant to be funded from leftover money on principle — such proposals are, in my experience, always just budget-skimming.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Berater nutzt Mental Accounting: Das „Restbudget" wird als eigenes Konto behandelt, dessen Euro weniger wehtun als frisch beantragte — verstärkt durch das „verfällt ohnehin", das die Ausgabe als folgenlos erscheinen lässt. Tatsächlich ist Geld fungibel: Ein Fünftel des Jahresmedienbudgets bleibt derselbe Betrag, egal aus welchem Topf er fließt. Die beste Option löst genau diese Kontenlogik auf und bewertet den Upsell allein nach Gegenwert, als müsste er neu begründet werden. Legitim einsetzen: Restmittel gezielt einzusetzen ist sinnvoll — aber nur, wenn das Paket den Preis auch dann wert wäre, wenn du ihn frisch beantragen müsstest. Erkennen und kontern: Frag bei jedem Ausgabenvorschlag, ob du zustimmen würdest, wenn das Geld aus dem „teuren" Kerntopf käme — verschiebt sich dein Urteil je nach Konto, wirkt das Muster. Die Zusage wirkt plausibel, weil „verfällt sonst" nach kluger Mittelnutzung klingt — doch das ist der Kern der Falle: Der drohende Verfall ist kein Gegenwert, und die Kontozuordnung ersetzt die Nutzenprüfung. Der Posten ins nächste Jahr zu verschieben ist selbst Mental Accounting in Reinform — du löst das Problem nicht, du buchst es nur auf ein Konto um, wo es kleiner aussieht. Das grundsätzliche Sperren überkorrigiert: Restmittel einzusetzen ist legitim, das Problem ist nur die Kontenlogik statt der Nutzenprüfung — eine Pauschalregel verschenkt sinnvolle Spielräume, ohne dein Budget besser zu schützen als die Frage nach dem echten Gegenwert.',
      en: 'The account manager is using mental accounting: the "leftover budget" is treated as its own account whose euros hurt less than freshly requested ones — reinforced by "expires anyway", which makes the spend look consequence-free. In reality money is fungible: a fifth of the annual media budget is the same amount regardless of which pot it flows from. The best option dissolves exactly this account logic and judges the upsell on its value alone, as if it had to be justified anew. Used legitimately: deliberately spending leftover funds makes sense — but only if the package would be worth the price even if you had to request it from scratch. To spot and counter it: for any spending proposal, ask whether you would agree if the money came from the "expensive" core pot — if your judgment shifts with the account, the pattern is at work. Saying yes looks plausible because "expires otherwise" sounds like smart use of funds — but that is the heart of the trap: the looming expiry is not a benefit, and the account assignment replaces the value test. Moving the item into next year is mental accounting in its purest form — you don\'t solve the problem, you just rebook it to an account where it looks smaller. Blocking such offers on principle overcorrects: spending leftover funds is legitimate, the problem is the account logic replacing the value test — a blanket rule wastes sensible flexibility without protecting your budget any better than asking about real value does.',
    },
    points: 10,
    primaryTechniqueId: 'mental_accounting',
    relatedTechniques: ['mental_accounting', 'loss_aversion', 'framing'],
  },
  {
    id: 'wave5b-mental_accounting-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster nutzt der Spot?',
      en: 'Which pattern is the spot using?',
    },
    scenario: {
      de: 'Fundraising-Kampagne einer Hilfsorganisation: Die Kampagnenleiterin gibt das Social-Video frei. Die Sprecherin nennt die Patenschaftssumme offen — „rund 330 Euro im Jahr, mit denen Sie einem Kind den Schulplatz sichern" — und rät dann: „Verbuchen Sie das nicht neben Ihren Fixkosten wie Miete und Strom, sondern auf dem Konto, aus dem Ihr Coffee to go und Ihr Streaming-Abo laufen. Neben diesen kleinen Freuden tut der Betrag kaum weh."',
      en: 'Fundraising campaign of an aid organisation: the campaign lead signs off the social video. The voiceover states the sponsorship sum openly — "about 330 euros a year, with which you secure a school place for a child" — and then advises: "Don\'t file this next to your fixed costs like rent and electricity, but in the account your coffee to go and your streaming subscription come out of. Next to those small pleasures the amount barely hurts."',
    },
    options: [
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Emotionaler Appell (Emotional Appeal)', en: 'Emotional appeal' },
      { de: 'Mental Accounting', en: 'Mental accounting' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Mental Accounting: Die Fördersumme wird offen genannt — die Verharmlosung leistet nicht das Verstecken der Zahl, sondern ihre Kontozuordnung. Die Sprecherin weist den Betrag ausdrücklich einem bestimmten Konto zu: weg von den „Fixkosten", hin zum Konto der kleinen Alltagsfreuden. Dort, neben Coffee to go und Streaming, wirken 330 Euro folgenlos, obwohl sie auf jedem Konto 330 Euro bleiben. Legitim einsetzen: Eine Ausgabe in einen anschaulichen Vergleich zu setzen ist zulässig — fair bleibt es, wenn du die volle Summe nennst und die Einordnung dem Gegenüber überlässt, statt ihm das „richtige" Konto vorzuschreiben. Erkennen und kontern: Frag dich, ob du dieselbe Ausgabe genauso schnell zusagen würdest, läge sie neben Miete und Strom statt neben dem Kaffee — verschiebt sich dein Urteil allein mit dem Konto, greift das Muster. Der Ankereffekt liegt nahe, weil ein Kaffeepreis als Vergleichsgröße auftaucht — doch er dient hier nicht als Zahlenanker, an dem sich dein Urteil über die Höhe ausrichtet; er verschiebt die Ausgabe in ein kleines Konto, und genau das ist der feine Unterschied zu Mental Accounting. Der emotionale Appell („einem Kind den Schulplatz sichern") ist echt vorhanden und zieht — aber er ist die Verpackung des Spendenziels, nicht der Mechanismus, der die 330 Euro klein rechnet; das Kleinrechnen leistet die Kontozuordnung. Nudging klingt passend, weil es um verhaltensökonomisch gefärbte Beeinflussung geht — doch Nudging meint das Gestalten der Entscheidungsarchitektur (Voreinstellungen, Reihenfolge, Hürden); hier verändert die Sprecherin keine Auswahlumgebung, sie legt dir nur nahe, den Betrag mental anders zu verbuchen.',
      en: 'Mental accounting: the sponsorship sum is named openly — the playing-down is done not by hiding the figure but by assigning it to an account. The voiceover explicitly slots the amount into a specific account: away from "fixed costs", over to the account of small everyday pleasures. There, next to coffee to go and streaming, 330 euros feel consequence-free, even though they stay 330 euros in any account. Used legitimately: setting a cost against a vivid comparison is fine — it stays fair when you state the full sum and leave the categorisation to the other person, rather than prescribing the "right" account. To spot and counter it: ask whether you would agree to the same spend just as quickly if it sat next to rent and electricity instead of the coffee — if your judgment shifts with the account alone, the pattern is at work. Anchoring seems close because a coffee price appears as a comparison — but here it is not a number-anchor your judgment of the amount aligns to; it shifts the spend into a small account, and that is the fine difference from mental accounting. The emotional appeal ("secure a school place for a child") is genuinely present and pulls — but it is the wrapping of the donation goal, not the mechanism that talks the 330 euros small; the talking-small is done by the account assignment. Nudging sounds fitting because it is behaviourally tinged influence — but nudging means shaping the choice architecture (defaults, ordering, friction); here the voiceover alters no choice environment, it merely suggests you book the amount to a different mental account.',
    },
    points: 10,
    primaryTechniqueId: 'mental_accounting',
    relatedTechniques: ['mental_accounting', 'anchoring', 'emotional_appeal', 'nudging'],
  },
];
