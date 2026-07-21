// Welle 5a: 3 Übungen für composition_division (Komposition/Division).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen, begrifflich geerdet.
// Kein seriousMode. Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5aCompositionDivision: Exercise[] = [
  {
    id: 'wave5a-composition_division-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt der CFO hier ein?',
      en: 'Which technique is the CFO using here?',
    },
    scenario: {
      de: 'Analystencall zum Jahresergebnis: Auf die kritische Nachfrage einer Aktienanalystin zur schwächelnden Sparte Industrie antwortet der CFO: „Der Konzern hat insgesamt ein Rekordjahr abgeliefert — dann ist auch die Sparte Industrie gut aufgestellt, da mache ich mir keine Sorgen." Belege zur Sparte selbst nennt er nicht; er leitet ihren Zustand allein aus der Gesamtzahl ab.',
      en: 'Analyst call on the full-year results: pressed by an equity analyst on the underperforming Industrial division, the CFO replies: "The group delivered a record year overall — so the Industrial division is in good shape too, I\'m not worried there." He gives no evidence about the division itself; he infers its state purely from the group figure.',
    },
    options: [
      { de: 'Komposition/Division', en: 'Composition/Division' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Rosinenpickerei (Cherry Picking)', en: 'Cherry picking' },
      { de: 'Repräsentativitätsheuristik', en: 'Representativeness heuristic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Komposition/Division — hier die Division: Der CFO überträgt eine Eigenschaft des Ganzen (der Konzern als Rekordjahr) unzulässig auf ein Einzelteil (die Sparte Industrie). Der Hebel: Es klingt naheliegend, dass sich ein starkes Gesamtergebnis in jedem Teil wiederfindet — tatsächlich kann ein Rekordkonzern eine schwache Sparte gerade quersubventionieren. Legitim einsetzen: Vom Ganzen aufs Teil zu schließen ist zulässig, wenn die Eigenschaft nachweislich gleichmäßig verteilt ist; professionell wird es, wenn du den Schluss ausdrücklich an Sparten-Zahlen bindest statt an den Konzern-Titel. Erkennen und kontern: Du erkennst das Muster am Sprung „das Ganze ist X, also das Teil auch" ohne Beleg auf Teil-Ebene — frag gezielt nach den isolierten Kennzahlen der Sparte („Wie steht die Sparte für sich, unabhängig vom Konzernschnitt?"). Voreilige Verallgemeinerung läge vor, wenn er von wenigen Einzelfällen auf eine allgemeine Regel schlösse — hier gibt es keine Stichprobe, sondern einen Teil-Ganzes-Kurzschluss. Rosinenpickerei bräuchte mehrere vorliegende Zahlen, aus denen er die günstigen herausgriffe und die ungünstigen verschwiege; er wählt aber nichts aus, sondern überträgt die eine Gesamtzahl. Die Repräsentativitätsheuristik beschriebe ein Urteil nach Ähnlichkeit zu einem Prototyp — auch das trifft den Teil-Ganzes-Schluss nicht.',
      en: 'Composition/Division — here division: the CFO illicitly transfers a property of the whole (the group had a record year) onto one part (the Industrial division). The lever: it feels intuitive that a strong overall result shows up in every part — yet a record group can be cross-subsidising exactly that weak division. Used legitimately: reasoning from whole to part is valid when the property is demonstrably evenly distributed; it stays professional when you tie the inference to the division\'s own figures rather than the group\'s headline. To spot and counter it: you recognise the pattern by the leap "the whole is X, so the part is too" with no evidence at part level — ask specifically for the division\'s standalone numbers ("how does the division stand on its own, apart from the group average?"). Hasty generalization would apply if he inferred a general rule from a few individual cases — here there is no sample, but a part–whole short-circuit. Cherry picking would need several available figures from which he picked the favourable ones and buried the rest; he selects nothing, he transfers the single group figure. The representativeness heuristic would describe a judgement by resemblance to a prototype — that too misses the part–whole inference.',
    },
    points: 10,
    primaryTechniqueId: 'composition_division',
    relatedTechniques: ['composition_division', 'hasty_generalization', 'cherry_picking', 'representativeness_heuristic'],
  },
  {
    id: 'wave5a-composition_division-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Angebotsprüfung im Einkauf: Ein Dienstleister verteidigt im Termin mit dir die hohe Gesamtsumme seines Angebots so: „Prüfen Sie die Positionen einzeln — jede ist marktüblich und fair kalkuliert. Ein Angebot aus lauter fairen Einzelpreisen kann in Summe nicht überteuert sein." Er drängt auf eine schnelle Freigabe.',
      en: 'Reviewing a bid in procurement: in your meeting a service provider defends the high total of his offer like this: "Check the line items one by one — each is at market rate and fairly costed. An offer made up of nothing but fair unit prices can\'t be overpriced in total." He pushes for a quick sign-off.',
    },
    options: [
      {
        de: 'Ich löse den Teil-Ganzes-Kurzschluss auf: Ich bestätige, dass die Einzelpreise fair sein mögen, prüfe die Gesamtsumme aber als eigene Größe — gegen Budget, Benchmark und den tatsächlichen Bedarf am Gesamtpaket, statt sie als bloße Addition „lauter günstiger" Posten durchzuwinken.',
        en: 'I break the part–whole short-circuit: I grant that the unit prices may be fair, but I assess the total as its own quantity — against budget, benchmark and the actual need for the full package — instead of waving it through as a mere sum of "all cheap" items.',
      },
      {
        de: 'Ich gebe das Angebot frei — wenn jede einzelne Position marktüblich ist, ist die Gesamtsumme zwangsläufig angemessen.',
        en: 'I approve the bid — if every single line item is at market rate, the total is necessarily reasonable.',
      },
      {
        de: 'Ich lehne pauschal ab, weil ein früheres Angebot genau dieses Dienstleisters am Ende zu teuer war.',
        en: 'I reject it across the board, because one earlier offer from exactly this provider turned out too expensive in the end.',
      },
      {
        de: 'Ich picke mir die zwei teuersten Positionen heraus, verhandle nur die herunter und übernehme den Rest der Summe ungeprüft.',
        en: 'I pick out the two most expensive line items, negotiate only those down, and take the rest of the total as read.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Argument des Dienstleisters ist eine Komposition: Aus „jeder Posten ist günstig/fair" wird geschlossen, das Ganze sei es auch — dabei entsteht die überhöhte Summe gerade aus der Menge fairer Posten. Die beste Option trennt die Ebenen: Du lässt die Einzelpreise gelten, behandelst die Gesamtsumme aber als eigenständige Größe und misst sie an Budget, Benchmark und Bedarf. Legitim einsetzen: Von den Teilen aufs Ganze zu schließen ist sauber, wenn die Eigenschaft aggregierbar ist und du die Summe explizit nachrechnest — nicht, wenn „lauter günstig" die Prüfung der Summe ersetzt. Erkennen und kontern: Achte auf Formeln wie „ein Paket aus lauter …" und rechne das Ganze getrennt nach. Sofort freizugeben handelt genau nach dem Fehlschluss und verwechselt faire Einzelpreise mit einer angemessenen Summe. Pauschal wegen eines einzigen früheren Angebots abzulehnen wirkt vorsichtig, ist aber eine voreilige Verallgemeinerung aus einem Fall — sie prüft das aktuelle Angebot gar nicht. Nur die zwei teuersten Posten herunterzuhandeln greift zu kurz: Es behandelt Einzelpositionen, lässt aber offen, ob die Gesamtsumme insgesamt zum Bedarf passt — der eigentliche Punkt bleibt ungeprüft.',
      en: 'The provider\'s argument is composition: from "every item is cheap/fair" he concludes the whole is too — yet the inflated total arises precisely from the quantity of fair items. The best option separates the levels: you let the unit prices stand but treat the total as its own quantity, measured against budget, benchmark and need. Used legitimately: reasoning from parts to whole is sound when the property is aggregable and you actually recompute the sum — not when "all cheap" replaces checking the total. To spot and counter it: watch for phrasings like "a package made up of nothing but …" and compute the whole separately. Approving at once acts on exactly the fallacy and mistakes fair unit prices for a reasonable total. Rejecting across the board over one earlier offer looks cautious but is a hasty generalization from a single case — it never assesses the current bid at all. Only negotiating the two priciest items down falls short: it handles individual lines but leaves open whether the total as a whole fits the need — the actual point stays untested.',
    },
    points: 10,
    primaryTechniqueId: 'composition_division',
    relatedTechniques: ['composition_division', 'hasty_generalization', 'cherry_picking'],
  },
  {
    id: 'wave5a-composition_division-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Namensbeitrag einer Beraterin auf LinkedIn: „Für dieses Mandat haben wir die drei renommiertesten Einzelexperten der Branche zusammengezogen — ein Team aus lauter Koryphäen liefert damit garantiert das beste Ergebnis am Markt." Wie gut die drei als Gruppe zusammenarbeiten, erwähnt sie nicht.',
      en: 'Bylined LinkedIn post by a consultant: "For this engagement we pulled together the three most renowned individual experts in the field — a team made up of nothing but luminaries is therefore guaranteed to deliver the best result on the market." How well the three actually work together as a group goes unmentioned.',
    },
    options: [
      { de: 'Komposition/Division', en: 'Composition/Division' },
      { de: 'Voreilige Verallgemeinerung (Hasty Generalization)', en: 'Hasty generalization' },
      { de: 'Halo-Effekt', en: 'Halo effect' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Komposition/Division — hier die Komposition: Aus „jedes Einzelteil ist erstklassig" (drei Spitzenexperten) wird geschlossen, das Ganze (das Team) sei zwangsläufig erstklassig. Der Hebel: Es klingt selbstverständlich, dass sich Spitzenqualität der Teile im Ganzen fortsetzt — Teamleistung ist aber eine emergente Eigenschaft, die von Zusammenspiel und Rollen abhängt, nicht bloß von der Summe der Einzelklassen. Legitim einsetzen: Auf Einzelqualität zu verweisen ist in Ordnung, wenn du sie als Zutat, nicht als Garantie darstellst und das Zusammenspiel getrennt belegst. Erkennen und kontern: Die Signalformel „ein Team aus lauter …" ist das Warnsignal; frag nach der Leistung der Gruppe als Gruppe, nicht nach den Meriten der Einzelnen. Voreilige Verallgemeinerung wäre der Schluss von wenigen Fällen auf eine allgemeine Regel — hier geht es nicht um zu wenige Beispiele, sondern um die Übertragung einer Eigenschaft von den Teilen aufs Ganze. Der Halo-Effekt beschriebe, dass ein starker Gesamteindruck ein Einzelurteil überstrahlt (Ganzes → Teil, in der Wahrnehmung) — hier läuft der Schluss umgekehrt von den Teilen auf das Ganze und ist ausdrücklich als Argument formuliert, nicht als diffuser Eindruck.',
      en: 'Composition/Division — here composition: from "every part is first-rate" (three top experts) it is concluded that the whole (the team) must be first-rate too. The lever: it sounds self-evident that top quality of the parts carries into the whole — but team performance is an emergent property, dependent on interplay and roles, not merely the sum of individual calibre. Used legitimately: pointing to individual quality is fine when you present it as an ingredient, not a guarantee, and evidence the interplay separately. To spot and counter it: the signal phrase "a team made up of nothing but …" is the warning sign; ask for the group\'s performance as a group, not the merits of the individuals. Hasty generalization would be inferring a general rule from a few cases — the issue here is not too few examples but the transfer of a property from the parts to the whole. The halo effect would describe a strong overall impression outshining a single judgement (whole → part, in perception) — here the inference runs the other way, from parts to whole, and is stated explicitly as an argument rather than a diffuse impression.',
    },
    points: 10,
    primaryTechniqueId: 'composition_division',
    relatedTechniques: ['composition_division', 'hasty_generalization'],
  },
];
