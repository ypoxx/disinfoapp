// Welle wave5b: 3 Übungen für nemawashi.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bNemawashi: Exercise[] = [
  {
    id: 'wave5b-nemawashi-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt die Personalchefin hier ein?',
      en: 'Which technique is the HR director using here?',
    },
    scenario: {
      de: 'Vor der Vorstandssitzung zur Standortverlagerung trifft die Personalchefin die vier wichtigsten Bereichsleiter einzeln zum Mittagessen, hört ihre Einwände, macht kleine Zugeständnisse und sichert sich jeweils ihr Ja. In der Sitzung selbst nickt das Gremium die Verlagerung ohne Debatte durch.',
      en: 'Before the board meeting on the site relocation, the HR director takes the four key division heads to lunch one by one, hears their objections, makes small concessions and secures each one\'s yes. In the meeting itself the board waves the relocation through without debate.',
    },
    options: [
      { de: 'Nemawashi (vorbereitende Konsensbildung)', en: 'Nemawashi (laying the groundwork for consensus)' },
      { de: 'Groupthink (Konsensdruck in der Gruppe)', en: 'Groupthink (in-group pressure toward consensus)' },
      { de: 'Social Proof (sozialer Beweis)', en: 'Social proof' },
      { de: 'Foot-in-the-door (Fuß in der Tür)', en: 'Foot-in-the-door' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nemawashi: Die Zustimmung wird einzeln und informell vor der formellen Entscheidung eingeholt, sodass die Sitzung nur noch bestätigt, was bereits abgestimmt ist. Der Hebel ist die Reihenfolge — wer vorab schon zugesagt hat, widerspricht im Plenum nicht mehr. Legitim eingesetzt ist das echte frühe Beteiligung: Bedenken früh hören, Reibung reduzieren, ohne die eigentliche Entscheidung vorwegzunehmen. Erkennen und kontern: Achte darauf, ob die formelle Sitzung nur noch abnickt; frag offen, welche Einwände es in den Vorgesprächen gab, und sorge dafür, dass die Entscheidung sichtbar im Plenum fällt. Groupthink wirkt ähnlich, meint aber den Konformitätsdruck innerhalb der Gruppe während der Diskussion, nicht die Einzelabstimmung davor. Social Proof würde auf das Verhalten einer vergleichbaren Mehrheit verweisen („die anderen Standorte machen das auch"); Foot-in-the-door würde beim selben Adressaten über eine kleine erste Zusage zu einer großen führen — hier geht es dagegen um das vorgelagerte Absichern des Konsenses über mehrere Personen.',
      en: 'Nemawashi: agreement is secured individually and informally before the formal decision, so the meeting only ratifies what is already settled. The lever is sequence — whoever has already said yes in private will not object in the room. Used legitimately this is genuine early involvement: hear concerns early, reduce friction, without pre-empting the actual decision. To spot and counter it: watch whether the formal meeting merely rubber-stamps; ask openly what objections came up in the pre-talks, and make sure the decision is visibly made in the plenary. Groupthink looks similar but means conformity pressure within the group during discussion, not the one-on-one alignment beforehand. Social proof would point to what a comparable majority does ("the other sites do it too"); foot-in-the-door would move the same person from a small first commitment to a large one — whereas this is about locking in consensus in advance across several people.',
    },
    points: 10,
    primaryTechniqueId: 'nemawashi',
    relatedTechniques: ['nemawashi', 'social_proof'],
  },
  {
    id: 'wave5b-nemawashi-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Kommunikation eines Mittelständlers. Vor der Betriebsversammlung zur neuen Homeoffice-Regelung bittet dich die Geschäftsführung, die Wortführer des Betriebsrats vorab einzeln „abzuholen", damit in der Versammlung „nichts mehr schiefgeht".',
      en: 'You head communications at a mid-sized company. Before the staff assembly on the new remote-work policy, management asks you to "square away" the works-council spokespeople individually beforehand, so that "nothing goes wrong" in the assembly.',
    },
    options: [
      {
        de: 'Ich führe die Vorgespräche transparent: Ich hole die echten Bedenken einzeln ein und trage sie ergebnisoffen in die Versammlung — Vorabstimmung ja, aber die Entscheidung fällt in der Versammlung, mit echter Möglichkeit zum Widerspruch.',
        en: 'I run the pre-talks transparently: I gather the genuine concerns individually and bring them into the assembly with the outcome genuinely open — pre-alignment yes, but the decision is made in the assembly, with a real chance to object.',
      },
      {
        de: 'Ich lege die Wortführer in den Einzelgesprächen mit gezielten Zugeständnissen auf ein Ja fest — nicht um ihre Einwände wirklich aufzunehmen, sondern damit in der Versammlung keine kritische Stimme mehr aufkommt und die Sache als erledigt gilt.',
        en: 'In the one-on-ones I pin the spokespeople to a yes with targeted concessions — not to genuinely take up their objections but to ensure no critical voice can surface in the assembly and the matter counts as settled.',
      },
      {
        de: 'Ich stelle den Wortführern vorab eine deutlich strengere Variante in Aussicht, damit die eigentliche Regelung im Termin als Entgegenkommen wirkt.',
        en: 'I float a markedly stricter version to the spokespeople beforehand, so the actual policy lands as a concession at the meeting.',
      },
      {
        de: 'Ich schicke die fertige Regelung vorab an alle Beschäftigten mit der Bitte, ihr im Termin zuzustimmen — dann ist die Sache schon vor der ersten Wortmeldung entschieden.',
        en: 'I email the finished policy to all staff in advance with a request to approve it at the meeting — that way the matter is decided before the first word is spoken.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel von Nemawashi ist die vorgelagerte Einzelabstimmung: Wer vorab zugesagt hat, widerspricht im Plenum nicht mehr. Sowohl Option 0 als auch Option 1 holen Zustimmung vorab ein — die Technik ist dieselbe; die Frage hier ist nicht „Was ist Nemawashi?", sondern „Wie wendest du es verantwortlich an?". Entscheidend ist die Absicht: Option 0 nutzt die Vorgespräche, um echte Bedenken zu hören, und lässt die Entscheidung ergebnisoffen in der Versammlung fallen — so bleibt Widerspruch bis zuletzt möglich. Option 1 dreht dieselbe Vorabstimmung ins Manipulative: Sie zielt nicht darauf, Einwände aufzunehmen, sondern sie mit Zugeständnissen stillzustellen, damit gar keine Aussprache mehr stattfindet — genau diese Unterdrückungsabsicht, nicht das bloße Vorab-Ja, macht sie falsch und beschädigt die Glaubwürdigkeit des Gremiums, sobald sie auffällt. Option 2 ist gar keine Vorabstimmung, sondern Door-in-the-face: Du ankerst mit einer harten Scheinvariante, damit die eigentliche Regelung als Zugeständnis wirkt. Option 3 sammelt Zustimmung schriftlich ein, bevor überhaupt diskutiert wurde — eine Schein-Beteiligung, die die Entscheidung schon vor der ersten Wortmeldung festzurrt.',
      en: 'The lever of nemawashi is pre-emptive one-on-one alignment: whoever has agreed beforehand no longer objects in the plenary. Both option 0 and option 1 secure agreement in advance — the technique is the same; the question here is not "What is nemawashi?" but "How do you apply it responsibly?". What decides it is the intent: option 0 uses the pre-talks to hear genuine concerns and lets the decision fall with the outcome open in the assembly — so objection stays possible to the last. Option 1 turns the same pre-alignment manipulative: it aims not to take up objections but to silence them with concessions so that no discussion happens at all — it is precisely this intent to suppress debate, not the mere prior yes, that makes it wrong and damages the body\'s credibility the moment it shows. Option 2 is not pre-alignment at all but door-in-the-face: you anchor with a harsh sham version so the actual policy feels like a concession. Option 3 collects agreement in writing before anything has been discussed — a staged participation that locks in the decision before the first word is spoken.',
    },
    points: 10,
    primaryTechniqueId: 'nemawashi',
    relatedTechniques: ['nemawashi', 'door_in_the_face'],
  },
  {
    id: 'wave5b-nemawashi-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Das ist Nemawashi und nicht bloß Social Proof, weil ___.',
      en: 'Complete the sentence: This is nemawashi and not merely social proof, because ___.',
    },
    scenario: {
      de: 'Vor der Gesellschafterversammlung eines Familienunternehmens besucht der geschäftsführende Gesellschafter die drei Miteigentümer einzeln zu Hause, bespricht die geplante Kapitalerhöhung und holt jeweils ihr Einverständnis ein. In der Versammlung wird der Beschluss einstimmig und ohne Aussprache gefasst.',
      en: 'Before the shareholders\' meeting of a family firm, the managing partner visits the three co-owners at home one by one, discusses the planned capital increase and obtains each one\'s consent. At the meeting the resolution is passed unanimously and without discussion.',
    },
    options: [
      {
        de: 'die Zustimmung einzeln und informell vor der formellen Entscheidung eingeholt wird, sodass die Sitzung sie nur noch bestätigt',
        en: 'agreement is obtained individually and informally before the formal decision, so the meeting only ratifies it',
      },
      {
        de: 'auf das Verhalten einer vergleichbaren Mehrheit verwiesen wird, um Zustimmung zu erzeugen',
        en: 'it points to the behaviour of a comparable majority to generate agreement',
      },
      {
        de: 'über viele kleine Vorab-Zusagen beim selben Adressaten schrittweise eine große Zusage erreicht wird',
        en: 'a large commitment is reached step by step through many small prior ones from the same person',
      },
      {
        de: 'der Gruppenkonsens den Einzelnen im Termin selbst zum Mitziehen drängt',
        en: 'the group consensus pressures the individual to go along in the meeting itself',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nemawashi: Die Signatur ist die vorgelagerte Einzelabstimmung — Zustimmung wird informell und Person für Person gesichert, bevor formell entschieden wird, sodass die Versammlung nur noch abnickt. Legitim ist das als echte frühe Beteiligung, wenn die Vorgespräche transparent sind und die Entscheidung sichtbar im Plenum fällt. Erkennen und kontern: Frag dich, ob die Zustimmung schon vor der Sitzung stand und ob es einen Weg gibt, Einwände noch offen einzubringen. Social Proof (die gewählte Antwort wirkt plausibel, weil beide Zustimmung erzeugen) verweist auf das Verhalten anderer als Beleg — hier gibt es aber keinen Verweis auf eine Mehrheit, sondern gezielte Einzelgespräche. Foot-in-the-door bräuchte eine Eskalation von klein zu groß beim selben Adressaten; Groupthink bräuchte den Konformitätsdruck während der Diskussion — beides passt nicht, denn die Einigung ist längst vor der Versammlung gefallen.',
      en: 'Nemawashi: the signature is pre-emptive one-on-one alignment — agreement is secured informally and person by person before the formal decision, so the meeting only nods it through. This is legitimate as genuine early involvement when the pre-talks are transparent and the decision is visibly made in the plenary. To spot and counter it: ask yourself whether the agreement was already in place before the meeting and whether there is any way to raise objections openly. Social proof (the chosen answer seems plausible because both create agreement) points to others\' behaviour as evidence — but here there is no reference to a majority, only targeted individual conversations. Foot-in-the-door would need an escalation from small to large with the same person; groupthink would need conformity pressure during discussion — neither fits, because the agreement was reached long before the meeting.',
    },
    points: 10,
    primaryTechniqueId: 'nemawashi',
    relatedTechniques: ['nemawashi', 'social_proof'],
  },
];
