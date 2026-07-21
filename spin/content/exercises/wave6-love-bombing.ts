// Welle 6: 3 Übungen für love_bombing.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, nur Erkennen/Schützen,
// nie Täterperspektive. Frontier-Tier: Begriffswissen statt Wirkversprechen.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave6LoveBombing: Exercise[] = [
  {
    id: 'wave6-love_bombing-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses relationale Muster?',
      en: 'What is this relational pattern called?',
    },
    scenario: {
      de: 'Eine Bekannte erzählt dir von ihrem neuen Kontakt aus einer Anlage-Community: Innerhalb weniger Tage schreibt er ihr im Minutentakt, nennt sie „Seelenverwandte", plant die gemeinsame Zukunft und wird spürbar gekränkt, sobald sie einmal Stunden nicht antwortet. Um Geld ging es bislang nie.',
      en: 'An acquaintance tells you about a new contact she met in an investment community: within a few days he messages her nonstop, calls her his "soulmate", is planning their shared future, and turns visibly hurt whenever she goes a few hours without replying. Money has never once come up.',
    },
    options: [
      { de: 'Love Bombing', en: 'Love bombing' },
      { de: 'Synthetische Intimität (Bindungsaufbau durch ein KI-System zur Nutzerbindung)', en: 'Synthetic intimacy (an AI system building a bond to retain the user)' },
      { de: 'Reziprozität (eine einzelne Gefälligkeit erzeugt eine Gegenleistungspflicht)', en: 'Reciprocity (a single favour creates an obligation to give back)' },
      { de: 'Gaslighting (das Realitätsempfinden der Zielperson gezielt untergraben)', en: 'Gaslighting (systematically undermining the target\'s sense of reality)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Love Bombing: überwältigende Zuwendung, Idealisierung und permanente Aufmerksamkeit in der Frühphase, die auf eine schnelle, exklusive Bindung zielt. Kennzeichnend ist das Missverhältnis von Intensität und Tempo zur kurzen Bekanntschaft — nicht ein einzelnes Geschenk. Weil die empirische Basis schmal ist, wird das Muster als Warn- und Erkennungssignal verstanden, nicht als belegter Automatismus. Schutz: Benenne das Tempo offen und ermutige deine Bekannte, das Kennenlernen bewusst zu entschleunigen und ihren Kontakt zu Dritten aktiv zu halten — die spätere Isolation ist der eigentliche Hebel. Synthetische Intimität beschreibt denselben Sog, geht aber von einem KI-System zur Nutzerbindung aus; hier steht ein Mensch dahinter. Reziprozität wäre eine einzelne Gefälligkeit, die eine Gegenleistung nahelegt — hier geht es um Flutung, nicht um eine offene Rechnung. Gaslighting untergräbt gezielt das Realitätsempfinden; das kann später hinzukommen, ist aber nicht dieser anfängliche Zuwendungs-Überschwang.',
      en: 'The term for this is love bombing: overwhelming affection, idealization, and relentless attention early on, aimed at forging a fast, exclusive bond. The tell is the mismatch between the intensity and pace and how brief the acquaintance is — not a single gift. Because the evidence base is thin, treat the pattern as a warning and recognition signal, not as a guaranteed mechanism. Protection: name the pace openly and encourage her to slow the courtship deliberately and keep her own network active — the later isolation is the real lever. Synthetic intimacy describes the same pull but originates from an AI system built to retain a user; here there is a person behind it. Reciprocity would be a single favour that invites a return — this is flooding, not an open ledger. Gaslighting deliberately undermines someone\'s sense of reality; that may follow later, but it is not this initial surge of affection.',
    },
    points: 10,
    primaryTechniqueId: 'love_bombing',
    relatedTechniques: ['love_bombing', 'synthetic_intimacy_retention', 'reciprocity'],
  },
  {
    id: 'wave6-love_bombing-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Eine Kollegin bittet dich um Rat: Ihre Schwester hat vor zwei Wochen jemanden kennengelernt, der sie seither mit Liebeserklärungen, teuren Geschenken und Nachrichten im Minutentakt überschüttet, sie bereits „Seelenverwandte" nennt, auf ein baldiges Zusammenziehen drängt und jedes Mal sichtlich gekränkt reagiert, wenn sie nicht sofort zurückschreibt. Die Schwester ist überwältigt und zugleich verunsichert von diesem Tempo.',
      en: 'A colleague asks you for advice: two weeks ago her sister met someone who has since showered her with declarations of love, expensive gifts, and messages by the minute, already calls her his "soulmate", is pushing to move in together soon, and turns visibly hurt every time she does not reply at once. Her sister is overwhelmed and at the same time unsettled by the pace.',
    },
    options: [
      {
        de: 'Ich nehme ihre Verliebtheit ernst, benenne aber ruhig das auffällige Tempo und die überwältigende Vereinnahmung als bekanntes Muster — und ermutige sie, das Kennenlernen zu entschleunigen und ihr eigenes Netz bewusst aktiv zu halten.',
        en: 'I take her feelings seriously, but calmly name the striking pace and the overwhelming rush of affection as a known pattern — and encourage her to slow the courtship and deliberately keep her own network active.',
      },
      {
        de: 'Ich rate ihrer Schwester, den Kontakt sofort und kommentarlos abzubrechen, damit gar kein Risiko entsteht.',
        en: 'I advise her sister to cut off contact immediately and without explanation, so that no risk can arise at all.',
      },
      {
        de: 'Ich beruhige die Kollegin: So viel Zuneigung so früh spricht für ernste Absichten — ihre Schwester sollte die Zweifel nicht zerreden.',
        en: 'I reassure the colleague: so much affection this early points to serious intentions — her sister should not talk herself out of it.',
      },
      {
        de: 'Ich empfehle, ihn mit einer Gegenbitte zu testen — eine Gefälligkeit, an der sich zeigt, ob es ihm wirklich um sie geht.',
        en: 'I suggest testing him with a favour in return — a request that reveals whether he truly cares about her.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das geschilderte Muster ist Love Bombing: überwältigende Zuwendung, Idealisierung („Seelenverwandte") und permanente Aufmerksamkeit stehen im klaren Missverhältnis zur erst zweiwöchigen Bekanntschaft — samt Drängen auf schnelle Verbindlichkeit und Kränkung bei jeder Antwortpause. Genau dieses Tempo, nicht ein einzelnes Geschenk, ist das Warnsignal. Die beste Reaktion nimmt die Gefühle der Schwester ernst, benennt das Tempo als Muster (nicht als Charakterurteil) und stärkt zwei Schutzfaktoren: Entschleunigung und ein intaktes eigenes Netz — denn die spätere Isolation von Freundinnen und Familie ist der eigentliche Hebel. Sofort und kommentarlos abzubrechen klingt entschlossen, überfordert die überwältigte Schwester aber und kann sie erst recht in die Arme des Kontakts treiben — Schutz gelingt über Tempo und Kontakt nach außen, nicht über einen Befehl. Die Zuneigung als gutes Zeichen zu deuten verwechselt Intensität mit Ernsthaftigkeit. Ihn mit einer Gegenbitte zu „testen" behandelt die Lage als Reziprozitäts-Spiel — es geht aber nicht um eine Gefälligkeit, sondern um Vereinnahmung; ein solcher Test schützt niemanden.',
      en: 'The pattern described is love bombing: overwhelming affection, idealization ("soulmate"), and relentless attention are clearly out of proportion to an acquaintance of only two weeks — together with pressure for fast commitment and hurt at every pause in replies. This pace, not any single gift, is the warning sign. The best response takes the sister\'s feelings seriously, names the pace as a pattern (not a verdict on her character), and reinforces two protective factors: slowing down and keeping her own network intact — because the later isolation from friends and family is the real lever. Cutting contact immediately and silently sounds decisive but overwhelms an already overwhelmed person and can drive her further into the contact\'s arms — protection works through pace and outward contact, not a command. Reading the affection as a good sign confuses intensity with sincerity. "Testing" him with a favour in return treats the situation as a reciprocity game — but this is not about a favour, it is about engulfment; such a test protects no one.',
    },
    points: 10,
    primaryTechniqueId: 'love_bombing',
    relatedTechniques: ['love_bombing', 'reciprocity'],
  },
  {
    id: 'wave6-love_bombing-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Das entscheidende Warnsignal ist hier ___.',
      en: 'Complete the sentence: The decisive warning sign here is ___.',
    },
    scenario: {
      de: 'Nach einem kostenlosen Achtsamkeits-Wochenende berichtet dein Neffe begeistert: Die Gruppe habe ihn vom ersten Abend an „wie Familie" aufgenommen, ihn mit Aufmerksamkeit und Lob überschüttet und ihm das Gefühl gegeben, endlich verstanden zu werden — wer zögere mitzumachen, bekomme zu hören, er habe nur „Angst vor echter Nähe".',
      en: 'After a free mindfulness weekend, your nephew reports enthusiastically: the group took him in "like family" from the very first evening, showered him with attention and praise, and made him feel finally understood — anyone who hesitates to commit is told they merely "fear real closeness".',
    },
    options: [
      {
        de: 'die überwältigende, sofortige Vereinnahmung durch eine noch fremde Gruppe, gekoppelt an die Umdeutung von Skepsis als persönliches Defizit (Love Bombing)',
        en: 'the overwhelming, instant embrace by a still-unfamiliar group, coupled with reframing scepticism as a personal shortcoming (love bombing)',
      },
      {
        de: 'die schrittweise Steigerung von einer kleinen Zusage zu immer größeren Verpflichtungen (Foot-in-the-Door)',
        en: 'the gradual escalation from a small commitment to ever larger obligations (foot-in-the-door)',
      },
      {
        de: 'die einseitige, aus der Ferne aufgebaute Nähe zu einer öffentlichen Person (parasoziale Bindung)',
        en: 'the one-sided closeness built up from a distance toward a public figure (parasocial bond)',
      },
      {
        de: 'das gezielte Untergraben seines Realitätsempfindens, bis er der Gruppe mehr glaubt als sich selbst (Gaslighting)',
        en: 'the deliberate undermining of his sense of reality until he trusts the group more than himself (gaslighting)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Love Bombing: Die sofortige, überwältigende Vereinnahmung durch eine noch fremde Gruppe steht im Missverhältnis zur kurzen Bekanntschaft — und das Umdeuten von Skepsis als „Angst vor Nähe" nimmt der Zielperson genau das Werkzeug, mit dem sie das Tempo prüfen könnte. So wird aus Zuwendung ein Türöffner für Bindung und spätere Kontrolle. Schutz: Ermutige deinen Neffen, das Tempo bewusst zu senken, Zusagen zu vertagen und seine Zweifel als legitime Information zu behandeln, nicht als Makel — und Kontakt außerhalb der Gruppe zu halten. Foot-in-the-Door wirkt verwandt, meint aber die Eskalation über eine anfänglich kleine Zusage; hier ist es der Zuwendungs-Überschwang von Anfang an. Eine parasoziale Bindung wäre einseitig und aus der Distanz zu einer öffentlichen Person — hier begegnet ihm eine reale Gruppe direkt. Gaslighting würde sein Realitätsempfinden gezielt untergraben; das Umdeuten der Skepsis ist ein erster Schritt in diese Richtung, aber das prägende Muster im ersten Weekend ist die überwältigende Vereinnahmung.',
      en: 'Love bombing: the instant, overwhelming embrace by a still-unfamiliar group is out of proportion to how brief the acquaintance is — and reframing scepticism as "fear of closeness" strips the target of the very tool they would use to test the pace. That is how affection becomes a gateway to bonding and later control. Protection: encourage your nephew to deliberately slow the pace, defer any commitments, treat his doubts as legitimate information rather than a flaw — and keep contact outside the group. Foot-in-the-door feels related but means escalation from an initially small commitment; here it is the surge of affection from the outset. A parasocial bond would be one-sided and from a distance toward a public figure — here a real group engages him directly. Gaslighting would deliberately undermine his sense of reality; reframing his scepticism is a first step in that direction, but the defining pattern of this first weekend is the overwhelming embrace.',
    },
    points: 10,
    primaryTechniqueId: 'love_bombing',
    relatedTechniques: ['love_bombing', 'foot_in_the_door', 'parasocial_manipulation'],
  },
];
