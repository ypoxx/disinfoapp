// Welle R4: 3 Übungen für identity_provenance_deception (Identitäts- und Herkunftstäuschung).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const w4IdentityProvenanceDeception: Exercise[] = [
  {
    id: 'w4-identity_provenance_deception-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster beschreibt die Analystin?',
      en: 'Which pattern is the analyst describing?',
    },
    scenario: {
      de: 'Jour fixe Issues-Monitoring bei einem Netzbetreiber im Genehmigungsverfahren. Die Monitoring-Analystin → dich als Leiter Public Affairs: Ein neues „Fachportal Energiewende" publiziert seit Wochen kritische Analysen zu eurem Trassenprojekt — mit Autorenprofilen, Porträtfotos und dem Selbstanspruch „unabhängige Fachredaktion". Ihre Recherche: Die Autorennamen tauchen sonst nirgends auf, das Impressum führt zu einer Briefkastenfirma, und die Domain wurde von der Agentur eines konkurrierenden Konsortiums registriert.',
      en: 'Regular issues-monitoring check-in at a grid operator in the middle of a permitting process. The monitoring analyst briefs you, the head of public affairs: a new "Energy Transition Journal" has been publishing critical analyses of your transmission project for weeks — complete with author profiles, headshots, and the tagline "independent trade newsroom". Her research: the author names appear nowhere else, the legal notice leads to a shell company, and the domain was registered by the agency of a rival consortium.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic media' },
      { de: 'Social Proof', en: 'Social proof' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Themensetzung (Agenda Setting)', en: 'Agenda setting' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Identitäts- und Herkunftstäuschung: Das Portal borgt sich das Vertrauen, das unabhängigem Fachjournalismus entgegengebracht wird — die Täuschung liegt nicht im Inhalt der Artikel, sondern darin, wer dahintersteht und woher sie stammen. Legitim einsetzen: Eigenmedien sind ein Standardinstrument, solange der Absender erkennbar ist — ein Corporate Newsroom unter eurem Namen darf pointiert Position beziehen, ein als unabhängig getarntes Portal nicht. Erkennen und kontern: Prüfe bei neuen „unabhängigen" Quellen Impressum, Domain-Registrierung und ob die Autoren außerhalb des Portals existieren — führt die Spur zum Absender der Botschaft, dokumentierst du die Belege und machst die Herkunft gegenüber Redaktionen und Stakeholdern transparent. Synthetische Medien wirken plausibel, weil Profile und Fotos generiert sein könnten — die Technik bezeichnet aber KI-erzeugte Medieninhalte selbst (Deepfakes, KI-Bilder); hier trägt die getarnte Absenderschaft die Täuschung, egal wie die Texte entstanden sind. Social Proof liegt nahe, weil der stetige Artikelstrom Fachkonsens suggeriert — er würde aber über Menge und Zustimmung vieler Stimmen wirken, nicht über die gefälschte Identität einer einzelnen Quelle. Themensetzung passt scheinbar, weil das Portal das Thema dauerhaft bespielt — sie beschreibt jedoch, welche Themen Aufmerksamkeit bekommen, nicht die Täuschung darüber, wer sie setzt.',
      en: 'Identity and provenance deception: the portal borrows the trust granted to independent trade journalism — the deception lies not in the articles\' content but in who is behind them and where they come from. Used legitimately: owned media is a standard instrument as long as the sender is visible — a corporate newsroom under your own name may argue its case sharply; a portal disguised as independent may not. To recognise and counter it: for any new "independent" source, check the legal notice, the domain registration, and whether the authors exist outside the portal — if the trail leads to the message\'s sender, document the evidence and make the provenance transparent to newsrooms and stakeholders. Synthetic media looks plausible because the profiles and photos could be generated — but that technique refers to AI-produced media content itself (deepfakes, AI images); here the disguised authorship carries the deception, however the texts were produced. Social proof seems close because the steady stream of articles suggests expert consensus — but it would work through the volume and agreement of many voices, not through the faked identity of a single source. Agenda setting fits on the surface because the portal keeps the topic alive — but it describes which topics receive attention, not deception about who is setting them.',
    },
    points: 10,
    primaryTechniqueId: 'identity_provenance_deception',
    relatedTechniques: ['identity_provenance_deception', 'synthetic_media', 'social_proof', 'agenda_setting'],
  },
  {
    id: 'w4-identity_provenance_deception-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Jahres-Pitch um das Kommunikationsbudget eines Herstellers. Der Geschäftsführer einer Content-Agentur → dich als Leiterin Unternehmenskommunikation, unter vier Augen nach der Präsentation: „Wir betreiben ein Netz von zwölf Branchenportalen mit eigener Optik und eigenen Redaktionsnamen. Garantierte Platzierungen, redaktionelle Anmutung, keine Werbekennzeichnung — Ihre Themen laufen dort als unabhängige Berichterstattung."',
      en: 'Annual pitch for a manufacturer\'s communications budget. After the presentation, the managing director of a content agency takes you, the head of corporate communications, aside: "We run a network of twelve trade portals with their own look and their own newsroom names. Guaranteed placements, editorial feel, no ad labeling — your topics run there as independent coverage."',
    },
    options: [
      {
        de: 'Ich nehme das Angebot an — garantierte Platzierungen sind planbar, und die redaktionelle Anmutung verschafft unseren Themen mehr Glaubwürdigkeit als jede Anzeige.',
        en: 'I take the offer — guaranteed placements give us predictability, and the editorial feel lends our topics more credibility than any ad could.',
      },
      {
        de: 'Ich lehne ab und ziehe die Grenze: Portale, die als unabhängige Redaktionen auftreten, aber vom Dienstleister betrieben werden, täuschen über die Herkunft — ich bestehe auf gekennzeichneten Formaten oder echter redaktioneller Arbeit und halte die Entscheidung schriftlich fest.',
        en: 'I decline and draw the line: portals that pose as independent newsrooms while being run by the vendor deceive about provenance — I insist on labeled formats or genuine editorial coverage and put the decision on record.',
      },
      {
        de: 'Ich nutze das Netz nur für unkritische Produktthemen und halte Finanz- und Krisenkommunikation heraus — so bleibt das Reputationsrisiko begrenzt.',
        en: 'I use the network only for uncontroversial product topics and keep financial and crisis communications out — that keeps the reputational risk contained.',
      },
      {
        de: 'Ich fordere zunächst Reichweiten- und Engagement-Daten der zwölf Portale an — ob sich das Angebot lohnt, ist am Ende eine Performance-Frage.',
        en: 'I first request reach and engagement data for the twelve portals — whether the offer is worth it is ultimately a performance question.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Das Angebot verkauft geliehenes Vertrauen: Leser bewerten Inhalte anders, wenn sie sie für unabhängige Berichterstattung halten — genau diese Herkunftstäuschung ist der Kern des Deals, nicht die Platzierung an sich. Legitim einsetzen: Bezahlte Platzierungen und Eigenmedien sind Standardinstrumente, solange der Absender erkennbar bleibt — Sponsored-Kennzeichnung, Gastbeitrag unter Firmenabsender, Corporate Newsroom; die richtige Option ersetzt die Täuschung durch genau diese Transparenz. Erkennen und kontern: Wenn ein Dienstleister „redaktionelle Anmutung ohne Kennzeichnung" als Leistungsmerkmal anbietet, benenne das Muster, lehne schriftlich ab und dokumentiere die Entscheidung — fliegt die Konstruktion auf, fällt sie auf deine Marke zurück und kollidiert je nach Markt mit Kennzeichnungspflichten. Die Annahme-Option wirkt plausibel, weil Planbarkeit und Glaubwürdigkeit legitime Ziele sind — sie kauft beides aber ausgerechnet mit dem Täuschungselement ein, das den Wert der Platzierung ausmacht. „Nur unkritische Themen" klingt nach Risikomanagement, ändert an der Täuschung selbst jedoch nichts — es begrenzt nur, wo ihre Aufdeckung wehtun würde. Die Performance-Nachfrage klingt nach Sorgfalt, prüft aber die falsche Frage: Reichweite macht eine getarnte Herkunft nicht legitimer, sie vergrößert nur den Schaden bei Aufdeckung.',
      en: 'The offer sells borrowed trust: readers evaluate content differently when they believe it is independent coverage — that provenance deception is the core of the deal, not the placement itself. Used legitimately: paid placements and owned media are standard instruments as long as the sender stays visible — sponsored labeling, bylined guest articles under the company\'s name, a corporate newsroom; the correct option replaces the deception with exactly that transparency. To recognise and counter it: when a vendor pitches "editorial feel without labeling" as a feature, name the pattern, decline in writing, and document the decision — if the setup is exposed, it lands on your brand and, depending on the market, collides with disclosure requirements. Accepting looks plausible because predictability and credibility are legitimate goals — but it buys both with precisely the deceptive element that gives the placement its value. "Only uncontroversial topics" sounds like risk management, yet changes nothing about the deception itself — it merely limits where exposure would hurt. Asking for performance data sounds diligent but tests the wrong question: reach does not make a disguised origin more legitimate, it only scales the damage on exposure.',
    },
    points: 10,
    primaryTechniqueId: 'identity_provenance_deception',
    relatedTechniques: ['identity_provenance_deception', 'social_proof'],
  },
  {
    id: 'w4-identity_provenance_deception-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster nutzt der Account?',
      en: 'Which pattern is the account using?',
    },
    scenario: {
      de: 'Social-Media-Monitoring am Morgen: Die Werkstudentin → dich als Sprecher eines Logistikkonzerns: Ein Account mit gekauftem Verifikationshaken trägt Logo und Namen eines bekannten Wirtschaftsmediums — das Handle weicht in einem Zeichen vom Original ab — und verbreitet ein angebliches „Exklusiv" über Stellenabbau bei eurem wichtigsten Kunden. Auf der Website des Mediums: nichts.',
      en: 'Morning social media monitoring: the student assistant on the monitoring desk briefs you, the spokesperson of a logistics group: an account with a purchased verification badge carries the logo and name of a well-known business outlet — its handle differs from the original by one character — and is spreading a supposed "exclusive" about job cuts at your most important client. On the outlet\'s website: nothing.',
    },
    options: [
      { de: 'Autorität', en: 'Authority' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Synthetische Medien', en: 'Synthetic media' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Identitäts- und Herkunftstäuschung: Der Account kapert die Identität eines realen Mediums — gekaufter Haken, kopiertes Logo und ein fast identisches Handle sind gefälschte Echtheitssignale, die die Gegenprüfung ersetzen sollen. Legitim einsetzen: Vertrauen in den Absender baust du über echte, verifizierte Kanäle und konsistente Absenderkennung auf — und schützt es, indem ihr naheliegende Handle-Varianten eurer eigenen Accounts vorsorglich selbst registriert. Erkennen und kontern: Gleiche das Handle Zeichen für Zeichen mit dem hinterlegten Original ab und prüfe die Primärquelle — hier die Website des Mediums —, bevor du intern eskalierst oder den Kunden informierst. Autorität wirkt plausibel, weil sich der Account die Glaubwürdigkeit des Wirtschaftsmediums leiht — die Technik Autorität beruft sich aber auf eine echte oder korrekt zitierte Instanz; hier ist die Instanz selbst gefälscht. Synthetische Medien liegen nahe, weil ein Fake-Account nach KI-Werkzeugen klingt — die Technik bezeichnet jedoch generierte Medieninhalte wie Deepfakes; für diese Täuschung genügen kopiertes Logo, gekaufter Haken und ein abgewandeltes Handle.',
      en: 'Identity and provenance deception: the account hijacks the identity of a real outlet — a purchased badge, a copied logo, and a near-identical handle are forged authenticity signals designed to replace verification. Used legitimately: you build sender trust through genuine, verified channels and consistent sender branding — and protect it by preemptively registering the obvious handle variants of your own accounts. To recognise and counter it: compare the handle character by character against the original you have on file and check the primary source — here, the outlet\'s website — before you escalate internally or brief the client. Authority looks plausible because the account borrows the business outlet\'s credibility — but the authority technique invokes a real or accurately quoted institution; here the institution itself is faked. Synthetic media seems close because a fake account sounds like AI tooling — but that technique refers to generated media content such as deepfakes; this deception needs nothing more than a copied logo, a purchased badge, and an altered handle.',
    },
    points: 10,
    primaryTechniqueId: 'identity_provenance_deception',
    relatedTechniques: ['identity_provenance_deception', 'authority', 'synthetic_media'],
  },
];
