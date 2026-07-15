import type { Exercise } from '../../types';

// consistency — Phase 2 content batch.
export const consistencyExercises: Exercise[] = [
  {
    id: 'cs-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechnik steckt hinter diesem zweistufigen Vorgehen?',
      en: 'Which persuasion technique is behind this two-step approach?',
    },
    scenario: {
      de: 'Die CSR-Abteilung bittet Mitarbeitende zunächst nur, eine kleine Karte zu unterschreiben: „Ich unterstütze saubere Meere." Wochen später kommt sie auf genau diese Personen zurück: „Du hast doch schon zugesagt — jetzt spende bitte monatlich für unser Meeresschutz-Projekt."',
      en: 'The CSR team first asks employees to sign nothing more than a small card: “I support clean oceans.” Weeks later it comes back to exactly those people: “You already said yes — now please donate monthly to our ocean-protection project.”',
    },
    options: [
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Knappheit', en: 'Scarcity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Commitment & Konsistenz: Eine winzige, freiwillige Erst-Zusage erzeugt Konsistenzdruck, sodass die spätere, viel größere Bitte wie der logische nächste Schritt wirkt (Foot-in-the-door). Der Cue ist explizit: „Du hast doch schon zugesagt." Legitim bleibt das, wenn die erste Zusage frei und ehrlich zustande kam und die zweite Bitte offen benannt wird; manipulativ wird es, wenn die Mini-Zusage nur als Türöffner konstruiert ist, um später Druck aufzubauen. Reziprozität bräuchte eine vorherige Gabe (hier wird nichts geschenkt), Sozialer Beweis einen Verweis auf das Verhalten anderer, Knappheit eine künstliche Verknappung — nichts davon liegt vor.',
      en: 'Commitment & consistency: a tiny, voluntary first pledge creates consistency pressure, so the later, much larger request feels like the logical next step (foot-in-the-door). The cue is explicit: “You already said yes.” It stays legitimate when the first pledge was freely and honestly made and the second ask is named openly; it turns manipulative when the mini-pledge is engineered purely as a door-opener to build pressure later. Reciprocity would need a prior gift (nothing is given here), social proof a reference to what others do, scarcity an artificial shortage — none of which is present.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency'],
  },
  {
    id: 'cs-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik erklärt vor allem, warum die Unterzeichnenden später deutlich mehr leisten?',
      en: 'Which technique best explains why the signers later contribute markedly more?',
    },
    scenario: {
      de: 'Ein Corporate-Volunteering-Programm lässt neue Teilnehmende am ersten Tag einen kurzen Satz selbst formulieren und unterschreiben: „Ich bin jemand, der etwas an die Gemeinschaft zurückgibt." Monate später leisten genau diese Unterzeichnenden weit mehr freiwillige Stunden als eine vergleichbare Gruppe ohne diesen Schritt — sie handeln passend zu dem Selbstbild, das sie schriftlich festgehalten haben.',
      en: 'A corporate-volunteering program has new participants write and sign a short sentence themselves on day one: “I am someone who gives back to the community.” Months later, exactly these signers put in far more volunteer hours than a comparable group without the step — they act to match the self-image they committed to in writing.',
    },
    options: [
      { de: 'Commitment & Konsistenz', en: 'Commitment & consistency' },
      { de: 'Reziprozität', en: 'Reciprocity' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Hebel ist Commitment & Konsistenz in seiner identitätsbasierten Form: Wer eine selbst formulierte Aussage über die eigene Person freiwillig und schriftlich festhält, richtet späteres Verhalten daran aus, um zum eigenen Selbstbild konsistent zu bleiben. Legitim ist das, wenn die Aussage frei gewählt und wahr ist; manipulativ, wenn eine Identität gezielt vorgeschrieben wird, um unbezahlten Mehreinsatz herauszuholen. Reziprozität würde voraussetzen, dass die Organisation zuerst etwas gibt; Sozialer Beweis einen Verweis auf das Verhalten anderer (hier fehlt er). Priming ist der verführerische Near-Miss — doch ein Prime wirkt kurzfristig und unbewusst über einen beiläufigen Reiz, während hier eine bewusst und schriftlich getroffene Selbstaussage das Verhalten über Monate trägt; genau diese Dauerhaftigkeit und Bewusstheit machen es zu Konsistenz, nicht zu Priming. Treiber ist allein die eigene, zuvor getroffene Zusage — also Konsistenz.',
      en: 'The lever is commitment & consistency in its identity-based form: someone who voluntarily puts a self-authored statement about who they are in writing aligns later behavior with it to stay consistent with that self-image. This is legitimate when the statement is freely chosen and true; manipulative when an identity is scripted specifically to extract unpaid extra effort. Reciprocity would require the organization to give something first; social proof a reference to what others do (absent here). Priming is the tempting near-miss — but a prime works briefly and unconsciously through an incidental cue, whereas here a consciously, deliberately signed self-statement drives behavior over months; that durability and awareness are exactly what make it consistency, not priming. The driver is purely the person’s own prior commitment — i.e. consistency.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency'],
  },
  {
    id: 'cs-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik trägt die Kundschaft hier über den Preissprung hinweg?',
      en: 'Which technique carries customers over the price jump here?',
    },
    scenario: {
      de: 'Ein SaaS-Anbieter lässt Interessenten mündlich zu einem beworbenen günstigen Einstiegstarif „Ja" sagen und startet sofort das Onboarding samt Vertragsformularen. Erst als die Kundschaft bereits zugesagt und die ersten Schritte erledigt hat, „stellt sich heraus", dass der Einstiegstarif für ihre Teamgröße gar nicht gilt und der reale Preis spürbar höher liegt. Die meisten bleiben trotzdem dabei.',
      en: 'A SaaS vendor gets prospects to say “yes” verbally to an advertised low intro rate and immediately starts onboarding, contract forms and all. Only after the customer has already committed and completed the first steps does it “turn out” that the intro rate does not apply to their team size and the real price is noticeably higher. Most stay anyway.',
    },
    options: [
      { de: 'Commitment & Konsistenz (Low-Ball)', en: 'Commitment & consistency (low-ball)' },
      { de: 'Ankereffekt (Anchoring)', en: 'Anchoring' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Reziprozität', en: 'Reciprocity' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist die Low-Ball-Prozedur, ein Konsistenz-Mechanismus: Zuerst wird eine aktive, freiwillige Zusage eingeholt; nachdem die Person „Ja" gesagt und bereits Aufwand investiert hat, bleibt sie ihrer Entscheidung treu — selbst wenn die attraktive Bedingung nachträglich wegfällt. Legitim ist es, eine echte Entscheidung zu verbindlich zu machen; manipulativ und rechtlich riskant, wenn der Lockpreis bewusst als Köder gesetzt und dann entzogen wird (Bait-and-Switch, verbraucherrechtliche Angriffsfläche). Anchoring ist der verführerische Near-Miss — aber Anchoring braucht gar keine eingeholte Zusage, nur einen Referenzwert, an dem eine andere Zahl günstig wirkt; hier wird der niedrige Preis entzogen, und es ist die vorherige Zusage, nicht ein nachwirkender Zahlenanker, die die Kundschaft trägt. Knappheit bräuchte eine Verknappungsbehauptung, Reziprozität eine vorherige Gabe — beides fehlt.',
      en: 'This is the low-ball procedure, a consistency mechanism: an active, voluntary commitment is obtained first; once the person has said “yes” and invested effort, they stay true to the decision even after the attractive condition is withdrawn. It is legitimate to firm up a genuine decision; manipulative and legally risky when the bait price is set deliberately and then removed (bait-and-switch, consumer-protection exposure). Anchoring is the tempting near-miss — but anchoring needs no obtained commitment, only a reference value against which another number looks cheap; here the low price is withdrawn, and it is the prior commitment, not a lingering numeric anchor, that carries the customer. Scarcity would need a limited-supply claim, reciprocity a prior gift — both are absent.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'anchoring'],
  },
  {
    id: 'cs-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Indem die Kampagne zuerst nur ein winziges „Ja" einholt, baut sie eine Kette von ___ auf, die die spätere, viel größere Bitte wie den natürlichen nächsten Schritt wirken lässt.',
      en: 'Complete the sentence: By first securing only a tiny “yes”, the campaign builds a chain of ___ that makes the later, much larger request feel like the natural next step.',
    },
    scenario: {
      de: 'Die Karriereseite eines Unternehmens bittet Besucher zunächst nur: „Sag uns in 30 Sekunden eine Sache, die dir an einem Arbeitgeber wichtig ist." Wer diese Kleinigkeit erledigt hat, füllt anschließend deutlich häufiger die lange Bewerbung vollständig aus.',
      en: 'A company’s careers page first asks visitors only: “Tell us in 30 seconds one thing that matters to you in an employer.” Those who complete this small step then go on to fill out the long application in full far more often.',
    },
    options: [
      { de: 'selbst gemachten Zusagen, denen man treu bleiben will (Commitment & Konsistenz)', en: 'self-made commitments one wants to stay true to (commitment & consistency)' },
      { de: 'Verpflichtungen, eine Gefälligkeit zu erwidern (Reziprozität)', en: 'obligations to return a favor (reciprocity)' },
      { de: 'Anpassungen an das Verhalten der Mehrheit (Sozialer Beweis)', en: 'adjustments to what the majority does (social proof)' },
      { de: 'Reaktionen auf ein knappes, ablaufendes Angebot (Knappheit)', en: 'reactions to a scarce, expiring offer (scarcity)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das ist Foot-in-the-door im Kern von Commitment & Konsistenz: Das kleine erste „Ja" aktiviert das Bedürfnis, zur eigenen vorherigen Handlung konsistent zu bleiben, und jeder Schritt macht den nächsten leichter. Legitim, solange jeder Schritt transparent und freiwillig ist; manipulativ, wenn das Mikro-„Ja" allein als Hebel konstruiert ist und die Folgeschritte es ausnutzen. Reziprozität bräuchte eine vorherige Gabe, Sozialer Beweis einen Verweis auf andere, Knappheit ein knappes, ablaufendes Angebot — nichts davon ist hier der Mechanismus; es geht rein um Selbstkonsistenz nach einer kleinen Zusage.',
      en: 'This is foot-in-the-door at the heart of commitment & consistency: the small first “yes” activates the drive to stay consistent with one’s own prior action, and each step makes the next easier. Legitimate as long as every step is transparent and voluntary; manipulative when the micro-“yes” is engineered purely as a lever and the follow-up steps exploit it. Reciprocity would need a prior gift, social proof a reference to others, scarcity a limited, expiring offer — none is the mechanism here; this is purely self-consistency after a small commitment.',
    },
    points: 10,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency'],
  },
  {
    id: 'cs-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Du verantwortest die Kommunikation eines Abo-Dienstes mit hoher Kündigungsquote und willst Commitment & Konsistenz professionell und sauber einsetzen. Welches Vorgehen bleibt auf der richtigen Seite der Grenze?',
      en: 'You run comms for a subscription service with high churn and want to use commitment & consistency professionally and cleanly. Which approach stays on the right side of the line?',
    },
    options: [
      {
        de: 'Neue Nutzer beim Onboarding freiwillig ihr eigenes Ziel notieren lassen („Was willst du mit dem Dienst erreichen?") und dieses selbstgesetzte Ziel später hilfreich in Erinnerung rufen — jederzeit einseh- und änderbar.',
        en: 'During onboarding, let new users voluntarily note their own goal (“What do you want to achieve with the service?”) and later helpfully remind them of that self-set goal — visible and editable at any time.',
      },
      {
        de: 'Mit „jederzeit kündbar" werben, die Kündigung nach dem Abschluss aber hinter einem mehrstufigen Halte-Flow verstecken, der mit „Aber du hast doch gesagt, dir sei das wichtig" arbeitet.',
        en: 'Advertise “cancel anytime”, then after signup hide cancellation behind a multi-step retention flow that leans on “but you said this mattered to you.”',
      },
      {
        de: 'Nutzer ungefragt mit einem öffentlichen Profil-Badge „Treues Mitglied seit 2024" versehen, damit sich Kündigen inkonsistent anfühlt.',
        en: 'Give users an unrequested public profile badge “Loyal member since 2024” so that quitting feels inconsistent.',
      },
      {
        de: 'Support-Mitarbeitende schwankenden Kunden sagen lassen: „Leute wie du kündigen nicht — du bist nicht der Typ, der aufgibt."',
        en: 'Have support reps tell wavering customers: “People like you don’t quit — you’re not the type to give up.”',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Option 0 nutzt Konsistenz sauber: Die Zusage ist selbst formuliert, freiwillig, transparent und jederzeit änderbar, und die spätere Ansprache erinnert nur — sie unterstützt das eigene Ziel des Nutzers. Option 1 ist ein Low-Ball plus Dark Pattern: Die attraktive Bedingung „jederzeit kündbar" wird nach der Zusage unterlaufen, mit verbraucherrechtlicher Angriffsfläche. Option 2 fabriziert eine öffentliche Verpflichtung, die der Nutzer nie gewählt hat — unfreiwillig und intransparent, also keine echte Selbstverpflichtung, sondern ein Dark Pattern. Option 3 instrumentalisiert Identität und Druck; das erzeugt typischerweise Reaktanz (Bumerang-Effekt) und beschädigt Vertrauen. Die Grenze: Eine legitime Selbstverpflichtung ist frei getroffen, wahr, verhältnismäßig und widerrufbar.',
      en: 'Option 0 uses consistency cleanly: the commitment is self-authored, voluntary, transparent and editable at any time, and the later messaging only reminds — it supports the user’s own goal. Option 1 is a low-ball plus a dark pattern: the attractive “cancel anytime” term is undermined after commitment, carrying consumer-protection exposure. Option 2 manufactures a public commitment the user never chose — involuntary and non-transparent, so it is not a genuine self-commitment but a dark pattern. Option 3 weaponizes identity and pressure; that typically triggers reactance (a boomerang effect) and erodes trust. The boundary: a legitimate self-commitment is freely made, truthful, proportionate and revocable.',
    },
    points: 15,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'dark_patterns'],
  },
  {
    id: 'cs-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team entwirft ein „commitment-basiertes" Kundenbindungsprogramm. Ein Baustein überschreitet die ethische bzw. rechtliche Grenze. Welcher?',
      en: 'Your team is designing a “commitment-based” customer-loyalty program. One component crosses the ethical/legal line. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine des Programms:',
      en: 'Planned components of the program:',
    },
    options: [
      {
        de: 'Beim Onboarding wählen Kunden freiwillig ihren wichtigsten Grund für die Marke und halten ihn fest — jederzeit änderbar.',
        en: 'During onboarding, customers voluntarily pick and note their main reason for choosing the brand — editable at any time.',
      },
      {
        de: 'Eine freundliche Erinnerung greift genau das vom Kunden selbst gesetzte Ziel auf und bietet Hilfe an, es zu erreichen.',
        en: 'A friendly reminder picks up exactly the goal the customer set themselves and offers help to reach it.',
      },
      {
        de: 'Kunden können sich optional in eine öffentliche Testimonial-Wand eintragen — klar freiwillig und leicht wieder entfernbar.',
        en: 'Customers can optionally join a public testimonial wall — clearly voluntary and easy to remove again.',
      },
      {
        de: 'Beim Checkout ist ein Kästchen vorangekreuzt, das unter dem echten Namen des Kunden ein „Ich gelobe lebenslange Treue" in dessen soziales Netzwerk postet — und das Entfernen ist bewusst umständlich gestaltet.',
        en: 'At checkout, a pre-ticked box publishes an “I pledge lifelong loyalty” statement under the customer’s real name to their social network — and unticking it is deliberately made cumbersome.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime Konsistenz baut auf Selbstverpflichtungen, die frei getroffen, verhältnismäßig, transparent und widerrufbar sind — die Bausteine 0 bis 2 erfüllen das alle. Baustein 3 fabriziert eine öffentliche Verpflichtung: vorangekreuzt (nicht gewählt), unter dem echten Namen des Kunden (Reputationsrisiko) und bewusst schwer zu entfernen (Dark Pattern). Er erzeugt eine Verpflichtung, die der Kunde nie frei eingegangen ist und nicht leicht rückgängig machen kann — und überschreitet damit die ethische Grenze sowie, über vorangekreuzte Opt-ins und das Veröffentlichen personenbezogener Aussagen, sehr wahrscheinlich verbraucher- und einwilligungsrechtliche Vorgaben. Prüffrage: Ist die Verpflichtung freiwillig, transparent, verhältnismäßig und widerrufbar?',
      en: 'Legitimate consistency builds on self-commitments that are freely made, proportionate, transparent and revocable — components 0 to 2 all satisfy that. Component 3 fabricates a public commitment: pre-ticked (not chosen), under the customer’s real name (reputational exposure), and deliberately hard to remove (dark pattern). It manufactures a commitment the customer never freely entered and cannot easily undo — crossing the ethical line and, via pre-ticked opt-ins and the publishing of personal statements, very likely consumer-protection and consent law too. Test question: is the commitment voluntary, transparent, proportionate and revocable?',
    },
    points: 15,
    primaryTechniqueId: 'consistency',
    relatedTechniques: ['consistency', 'dark_patterns'],
  },
];
