// Welle R4: 3 Übungen für endowment_effect (Endowment-Effekt / Besitztumseffekt).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4EndowmentEffect: Exercise[] = [
  {
    id: 'w4-endowment_effect-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Vertriebsmitarbeiterin hier ein?',
      en: 'Which technique is the sales rep using here?',
    },
    scenario: {
      de: 'Preisgespräch nach dem kostenlosen Testmonat einer Newsroom-Software: Das PR-Team hat alle Pressekontakte importiert, Verteiler gepflegt und eigene Ansichten eingerichtet. Die Vertriebsmitarbeiterin eröffnet den Videocall mit einem Rundgang durch „Ihren Newsroom" und legt erst danach das Preisblatt auf den Tisch: „Das alles müssten Sie nur hergeben, wenn Sie sich dagegen entscheiden."',
      en: 'Pricing call after the free trial month of a newsroom software: the PR team has imported all press contacts, curated distribution lists, and set up custom views. The sales rep opens the video call with a tour of "your newsroom" and only then puts the price sheet on the table: "The only way you lose all this is by deciding against it."',
    },
    options: [
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Default-/Status-quo-Effekt', en: 'Default / status quo effect' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Endowment-Effekt: Bloßer Besitz — auch vorläufiger — erhöht den empfundenen Wert; für das Hergeben verlangen Menschen mehr, als sie für den Erwerb zahlen würden. Genau dieses Besitzgefühl hat der Testmonat planvoll aufgebaut: Das Team hat den Zugang mit eigenen Kontakten und Ansichten gefüllt, und die Vertriebsmitarbeiterin bepreist nun das Hergeben („Ihren Newsroom") statt den Erwerb. Legitim einsetzen: Eine Testphase, in der Kundinnen das Produkt real erleben, ist seriöses Handwerk — professionell bleibt sie, wenn Export und Ausstieg jederzeit einfach möglich sind und der Kauf als Neuentscheidung verhandelt wird. Erkennen und kontern: Stell dir die Gegenfrage „Würden wir das Tool heute zu diesem Preis neu kaufen?" und lass die eingerichteten Daten exportieren, bevor du entscheidest. Verlustaversion wirkt plausibel, weil das drohende Hergeben schwer wiegt — sie bezeichnet aber die allgemeine Asymmetrie, dass Verluste stärker wirken als gleich große Gewinne; der Endowment-Effekt ist der spezifische Hebel, dass hier erst gezielt Besitz erzeugt wurde, der das Gut überhaupt so wertvoll erscheinen lässt. Reziprozität läge nahe, weil der Gratismonat wie ein Geschenk wirkt, das zur Gegenleistung verpflichtet — hier arbeitet aber nicht Dankbarkeit, sondern die überhöhte Bewertung des Besessenen. Der Default-/Status-quo-Effekt würde greifen, wenn die Verlängerung voreingestellt wäre und Nichtstun genügte — hier steht eine aktive Kaufentscheidung an.',
      en: 'Endowment effect: mere possession — even temporary — inflates perceived value; people demand more to give something up than they would pay to acquire it. That sense of ownership is exactly what the trial month was designed to build: the team filled the account with its own contacts and views, and the sales rep now prices the giving-up ("your newsroom") rather than the purchase. Used legitimately: a trial phase in which customers genuinely experience the product is honest craft — it stays professional when export and exit are easy at any time and the purchase is negotiated as a fresh decision. To spot and counter it: ask yourself "would we buy this tool today at this price?" and have the configured data exported before you decide. Loss aversion looks plausible because the threatened giving-up weighs heavily — but it names the general asymmetry that losses loom larger than equivalent gains; the endowment effect is the specific lever that ownership was deliberately manufactured first, which is what makes the good seem so valuable at all. Reciprocity seems close because the free month feels like a gift that obliges a return favour — but the force at work here is not gratitude, it is the inflated valuation of what is possessed. The default / status quo effect would apply if renewal were pre-set and doing nothing sufficed — here an active purchase decision is required.',
    },
    points: 10,
    primaryTechniqueId: 'endowment_effect',
    relatedTechniques: ['endowment_effect', 'loss_aversion', 'reciprocity', 'default_status_quo'],
  },
  {
    id: 'w4-endowment_effect-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Die Testphase eures Media-Intelligence-Tools läuft aus; dein Team hat Dashboards und Suchprofile mit erheblichem Aufwand eingerichtet. Der Anbieter ruft für die Verlängerung deutlich mehr auf als marktüblich — das Angebot verweist prominent auf „alles, was Sie sich bereits aufgebaut haben". Im Team heißt es: „Das können wir jetzt unmöglich wieder aufgeben."',
      en: 'You head corporate communications. The trial of your media intelligence tool is expiring; your team has invested serious effort in setting up dashboards and search profiles. The vendor quotes a renewal price well above market — the offer prominently points to "everything you have already built". Your team says: "We cannot possibly give all this up now."',
    },
    options: [
      {
        de: 'Ich löse die Entscheidung vom Besitzgefühl: Ich lasse Profile und Daten exportieren, hole zwei Vergleichsangebote ein und stelle die Frage: „Würden wir dieses Tool heute zu diesem Preis neu kaufen?" — verlängert wird nur, wenn die Antwort Ja ist.',
        en: 'I detach the decision from the sense of ownership: I have profiles and data exported, obtain two competing quotes, and ask: "Would we buy this tool today at this price?" — we renew only if the answer is yes.',
      },
      {
        de: 'Ich verlängere: Die eingerichteten Dashboards und die eingespielten Abläufe sind zu wertvoll, um sie aufzugeben — der Aufpreis ist der Preis für das, was wir uns aufgebaut haben.',
        en: 'I renew: the configured dashboards and established workflows are too valuable to give up — the premium is the price of what we have built.',
      },
      {
        de: 'Ich verhandle einen Rabatt auf den aufgerufenen Verlängerungspreis — Hauptsache, wir behalten, was wir eingerichtet haben.',
        en: 'I negotiate a discount on the quoted renewal price — the main thing is that we keep what we have set up.',
      },
      {
        de: 'Ich kündige grundsätzlich: Wer Testphasen anbietet, will nur Besitzgefühle erzeugen — auf solche Anbieter lasse ich mich nicht mehr ein.',
        en: 'I cancel on principle: vendors who offer trials are just out to manufacture feelings of ownership — I no longer deal with them.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Anbieter setzt auf den Endowment-Effekt: Die Testphase hat Besitzgefühl erzeugt, und das Angebot bepreist das Behalten statt den Erwerb — deshalb wirkt der überhöhte Preis wie der natürliche Preis des Nicht-Verlierens. Die beste Option neutralisiert genau diesen Hebel: Export nimmt der Entscheidung die gefühlte Unumkehrbarkeit, Vergleichsangebote stellen den Marktpreis wieder her, und die Neukauf-Frage ersetzt die Besitzperspektive durch die Erwerbsperspektive. Legitim einsetzen: Auch du darfst für eigene Angebote Testphasen und Personalisierung nutzen — professionell bleibt es, wenn Ausstieg und Datenmitnahme einfach sind und der Preis dem Neukunden-Preis standhält. Erkennen und kontern: Werde aufmerksam, sobald ein Angebot mit dem argumentiert, was du „schon aufgebaut" hast, statt mit dem, was es ab heute leistet. Die Verlängerungs-Option wirkt plausibel, weil eingerichtete Abläufe realen Wert haben — sie zahlt aber ungeprüft die Besitzprämie und verwechselt den investierten Aufwand mit dem künftigen Nutzen. Der Rabatt-Weg wirkt wie kluges Verhandeln, bleibt aber im Rahmen des Anbieters gefangen: Verhandelt wird ums Behalten, nicht ums Kaufen — der überhöhte Aufruf bleibt der Bezugspunkt. Die Grundsatz-Kündigung überkorrigiert: Testphasen sind ein legitimes Instrument; das Problem ist nicht das Ausprobieren, sondern eine Entscheidung aus dem Besitzgefühl heraus.',
      en: 'The vendor is running the endowment effect: the trial manufactured a sense of ownership, and the offer prices keeping rather than acquiring — which is why the inflated quote feels like the natural price of not losing. The best option neutralises exactly that lever: exporting removes the felt irreversibility, competing quotes restore the market price, and the fresh-purchase question replaces the ownership perspective with the acquisition perspective. Used legitimately: you too may use trials and personalisation for your own offerings — it stays professional when exit and data portability are easy and the price holds up against what a new customer would pay. To spot and counter it: take notice whenever an offer argues from what you have "already built" instead of what it delivers from today onward. The renew option looks plausible because established workflows do have real value — but it pays the ownership premium unexamined and confuses effort invested with value ahead. The discount route feels like smart negotiating but stays trapped in the vendor\'s frame: you are negotiating over keeping, not over buying — the inflated quote remains the reference point. Cancelling on principle overcorrects: trials are a legitimate instrument; the problem is not trying things out, it is deciding from the feeling of ownership.',
    },
    points: 10,
    primaryTechniqueId: 'endowment_effect',
    relatedTechniques: ['endowment_effect', 'loss_aversion', 'anchoring'],
  },
  {
    id: 'w4-endowment_effect-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster nutzt die Projektleiterin?',
      en: 'Which pattern is the project lead using?',
    },
    scenario: {
      de: 'Videokonferenz zur Messeplanung: Die Projektleiterin des Messebauers zeigt dem Kommunikationsleiter die Standvisualisierung — der Premium-Platz am Halleneingang ist „für Sie bereits eingeplant", das Rendering trägt schon sein Firmenlogo. Über den Aufpreis gegenüber dem Standardplatz will sie „im nächsten Termin" sprechen.',
      en: 'Video call on trade-fair planning: the exhibit builder\'s project lead shows the head of communications the booth visualisation — the premium spot at the hall entrance is "already planned in for you", and the rendering carries his company logo. The surcharge over the standard spot is to be discussed "at the next meeting".',
    },
    options: [
      { de: 'Endowment-Effekt (Besitztumseffekt)', en: 'Endowment effect' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Endowment-Effekt: Vormerkung („für Sie bereits eingeplant") und das Rendering mit dem eigenen Logo erzeugen Besitzgefühl, bevor der Preis überhaupt auf dem Tisch liegt. Wenn der Aufpreis im nächsten Termin kommt, verhandelt der Kommunikationsleiter gefühlt nicht mehr über eine Zubuchung, sondern über die Aufgabe von etwas Eigenem — und dafür verlangt der Kopf einen höheren Preis. Legitim einsetzen: Optionen mit dem Kundenlogo zu visualisieren ist normales Handwerk — professionell bleibt es, wenn beide Varianten gleichwertig gezeigt werden und die Preise von Anfang an daneben stehen. Erkennen und kontern: Achte auf Sprache, die Besitz vor dem Vertrag vorwegnimmt, und hol den Preis in denselben Termin — entschieden wird zwischen zwei Angeboten, nicht über das Hergeben „deines" Platzes. Verknappung wirkt plausibel, weil Premium-Plätze auf Messen tatsächlich begrenzt sind — sie würde aber mit Verfügbarkeit argumentieren („nur noch ein Platz frei"), wovon hier keine Rede ist; der Hebel ist die vorweggenommene Zuteilung. Verlustaversion liegt nahe, weil das spätere Aufgeben schwer wiegt — sie ist aber die allgemeine Asymmetrie zwischen Verlust und Gewinn; das spezifische Muster hier ist, dass zuerst gezielt Quasi-Besitz geschaffen wird, den es dann zu „verlieren" gäbe.',
      en: 'Endowment effect: the pre-reservation ("already planned in for you") and the rendering with his own logo create a sense of ownership before the price is even on the table. When the surcharge arrives at the next meeting, the head of communications is no longer negotiating an upgrade, but — in feel — the surrender of something of his own, and the mind demands a higher price for that. Used legitimately: visualising options with the client\'s logo is ordinary craft — it stays professional when both variants are shown on equal footing with prices alongside from the start. To spot and counter it: watch for language that presumes ownership before any contract, and pull the price into the same meeting — the decision is between two offers, not about giving up "your" spot. Scarcity looks plausible because premium spots at trade fairs genuinely are limited — but it would argue from availability ("only one spot left"), which is nowhere in play here; the lever is the pre-emptive allocation. Loss aversion seems close because the later giving-up weighs heavily — but that is the general asymmetry between loss and gain; the specific pattern here is that quasi-ownership is deliberately created first, so that there is something to "lose" at all.',
    },
    points: 10,
    primaryTechniqueId: 'endowment_effect',
    relatedTechniques: ['endowment_effect', 'scarcity', 'loss_aversion'],
  },
];
