// Welle 5c: 3 Übungen für astroturfing_sockpuppets.
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cAstroturfingSockpuppets: Exercise[] = [
  {
    id: 'wave5c-astroturfing_sockpuppets-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Kommentarspalten und Leserbriefe einer Regionalzeitung zu einem umstrittenen Bauprojekt: Über zwei Wochen melden sich ein Dutzend scheinbar unabhängige „besorgte Anwohner" mit je eigenem Namen und eigener Alltagsgeschichte und loben das Projekt — keine wortgleichen Posts, kein gegenseitiges Hochvoten, kein Trending-Schub, sondern lauter individuell klingende Einzelstimmen. Eine Recherche zeigt: Alle Profile wurden von der Agentur des Bauträgers angelegt und aus einem gemeinsamen Redaktionsplan gesteuert; echte Anwohner stecken nicht dahinter.',
      en: 'A regional paper\'s comment sections and letters to the editor about a contested construction project: over two weeks, a dozen seemingly independent "concerned residents" show up, each under their own name and with their own everyday story, praising the project — no near-identical posts, no mutual upvoting, no trending push, just a spread of individual-sounding voices. Reporting reveals that all the profiles were created by the developer\'s agency and run from a shared content calendar; no real residents are behind them.',
    },
    options: [
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / Sock Puppets' },
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated Inauthentic Amplification' },
      { de: 'Fake Social Proof', en: 'Fake Social Proof' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and Provenance Deception' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Astroturfing: Ein einzelner Akteur betreibt verdeckt mehrere Schein-Identitäten (Sockpuppets), die als unabhängige Bürger auftreten und so künstlichen Graswurzel-Konsens vortäuschen. Der Hebel ist Social Proof — „so viele normale Leute finden das gut" —, während die gemeinsame Trägerschaft verborgen bleibt. Legitim ist nur das transparente Pendant: echte Fürsprache mit Klarnamen und offengelegter Kooperation, keine erfundenen Anwohner. Erkennen und kontern: Prüfe, ob die Stimmen wirklich unabhängig sind (Account-Historie, Timing, Sprachmuster), und frage öffentlich nach Trägerschaft und Finanzierung der „Initiative". Coordinated Inauthentic Amplification ist der nächste Nachbar, zielt aber auf koordiniert erzeugte Reichweite und Ranking — typisch über getaktete, oft nahezu wortgleiche Aktivität und gegenseitiges Hochspielen; hier zählt gerade nicht die Reichweite, sondern die individuell erfundene Einzelstimme. Fake Social Proof bezeichnet fabrizierte Popularitätssignale allgemein (erfundene Zahlen, gefälschte Testimonials); Astroturfing ist der Spezialfall mit mehreren verdeckt gesteuerten Personen. Identitäts- und Herkunftstäuschung fälscht Identität oder Quelle einer einzelnen Stimme, nicht ein ganzes Ensemble scheinbar unabhängiger Personen.',
      en: 'Astroturfing: a single actor covertly runs multiple fake identities (sock puppets) that pose as independent citizens, manufacturing a fake grassroots consensus. The lever is social proof — "so many ordinary people like this" — while the shared party behind them stays hidden. Only the transparent counterpart is legitimate: genuine advocacy under real names with disclosed sponsorship, not invented residents. To spot and counter it, check whether the voices are truly independent (account history, timing, language patterns) and ask publicly who runs and funds the "initiative". Coordinated Inauthentic Amplification is the nearest neighbour but targets coordinated reach and ranking — typically through timed, often near-identical activity and mutual boosting; here reach is not the point, the individually invented voice is. Fake Social Proof denotes fabricated popularity signals in general (made-up numbers, faked testimonials); astroturfing is the special case using several covertly steered personas. Identity and Provenance Deception falsifies the identity or source of a single voice, not a whole ensemble of seemingly independent people.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets', 'social_proof', 'identity_provenance_deception'],
  },
  {
    id: 'wave5c-astroturfing_sockpuppets-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Beraterin einer PR-Agentur betreust du einen Mittelständler vor einer öffentlichen Bürgerbeteiligung. Der Geschäftsführer bittet dich, „für Stimmung zu sorgen": ein paar Dutzend Profile mit erfundenen Anwohnernamen in lokalen Foren, die das Projekt als spontane Bürgerstimmen unterstützen — die Verbindung zum Unternehmen soll niemand sehen.',
      en: 'As a consultant at a PR agency, you are advising a mid-sized company ahead of a public consultation. The CEO asks you to "create some momentum": a few dozen profiles with invented resident names in local forums, backing the project as spontaneous citizen voices — no one should see the link to the company.',
    },
    options: [
      {
        de: 'Ich lehne die Schein-Profile ab und schlage transparente Fürsprache vor: echte Unterstützer mit Klarnamen, offen ausgewiesene Trägerschaft und ein öffentliches Q&A — und benenne das rechtliche wie das Reputationsrisiko von Astroturfing.',
        en: 'I refuse the fake profiles and propose transparent advocacy instead: real supporters under their real names, clearly disclosed sponsorship, and a public Q&A — and I spell out the legal and reputational risk of astroturfing.',
      },
      {
        de: 'Ich lege die Profile an, verstecke aber in jeder Bio einen kleinen Hinweis auf das Unternehmen — dann ist die Verbindung formal ja offengelegt.',
        en: 'I create the profiles but bury a small company reference in each bio — that way the link is formally disclosed.',
      },
      {
        de: 'Ich starte nur einen kleinen Pilot mit fünf Profilen und lösche sie direkt nach der Beteiligung wieder — ein überschaubarer, zeitlich begrenzter Versuch.',
        en: 'I run just a small pilot with five profiles and delete them right after the consultation — a limited, time-boxed trial.',
      },
      {
        de: 'Ich lege die Profile an, lasse sie aber betont ausgewogen posten (auch mal Kritik), damit sie glaubwürdig wie echte Anwohner wirken.',
        en: 'I create the profiles but have them post in a deliberately balanced way (including occasional criticism) so they read like genuine residents.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Auftrag ist lehrbuchhaftes Astroturfing: erfundene, verdeckt gesteuerte Identitäten, die unabhängigen Bürgerkonsens vortäuschen. Die beste Option ersetzt die Täuschung durch ihr legitimes Pendant — sichtbare, echte Fürsprache mit offengelegter Trägerschaft — und macht das Risiko explizit: In mehreren Ländern ist verdeckte kommerzielle Kommunikation unzulässig, und fällt die Steuerung auf, trifft der Vertrauensverlust Kunde und Agentur zugleich. Erkennen und kontern: Prüf bei jeder scheinbar spontanen Unterstützungswelle selbst, wer die Konten betreibt und finanziert, und verlang Klarnamen und offengelegte Trägerschaft, bevor du sie für glaubwürdig hältst. Ein versteckter Hinweis in der Bio wirkt plausibel, weil er nach „Offenlegung" klingt — verborgene Kennzeichnung ist aber keine, die Bürgerstimmen bleiben erfunden. Ein „kleiner, befristeter Pilot" mit wenigen Profilen wirkt harmlos, weil Umfang und spätere Löschung Kontrolle suggerieren — die fünf Stimmen sind aber ebenso frei erfunden und verdeckt gesteuert wie fünfzig; die Täuschung entsteht nicht durch die Menge, sondern durch die vorgetäuschte Unabhängigkeit. Und „ausgewogen" posten zu lassen macht die Fälschung lediglich schwerer erkennbar — die Identitäten sind weiterhin frei erfunden. Sobald mehrere scheinbar unabhängige Stimmen dieselbe verborgene Hand haben, ist die Grenze überschritten.',
      en: 'The request is textbook astroturfing: invented, covertly steered identities faking independent citizen consensus. The best option replaces the deception with its legitimate counterpart — visible, genuine advocacy with disclosed sponsorship — and makes the risk explicit: covert commercial communication is unlawful in several jurisdictions, and if the steering surfaces, the loss of trust hits client and agency alike. To spot and counter it: with any seemingly spontaneous wave of support, check for yourself who runs the accounts and who funds them, and insist on real names and disclosed sponsorship before you treat them as credible. A hidden note in the bio seems plausible because it sounds like "disclosure" — but concealed labelling is not disclosure, and the citizen voices are still fabricated. A "small, time-boxed pilot" of a few profiles feels harmless because its limited size and later deletion suggest control — yet five voices are just as invented and covertly steered as fifty; the deception comes not from the volume but from the faked independence. And having the profiles post "in a balanced way" merely makes the fake harder to detect — the identities remain wholly invented. The moment several seemingly independent voices share one hidden hand, the line is crossed.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets'],
  },
  {
    id: 'wave5c-astroturfing_sockpuppets-3',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ergänze: Dieses Vorgehen heißt ___.',
      en: 'Complete the sentence: this pattern is called ___.',
    },
    scenario: {
      de: 'Nutzerforum und Community-Threads zu einer Fitness-App: Über wenige Tage tauchen sechzig scheinbar unabhängige Nutzerinnen auf, die die App in eigenen Erfahrungsberichten empfehlen — jedes Konto mit eigenem Profil, eigener Vorgeschichte und individuell formuliertem Text; nicht die Sternzahl oder ein aggregiertes Bewertungssignal steht im Vordergrund, sondern die vielen scheinbar eigenständigen Einzelpersonen. Eine Prüfung ergibt: Alle Konten wurden von einer beauftragten Agentur betrieben, die Auftraggeberin wird nirgends genannt.',
      en: 'User forum and community threads about a fitness app: over just a few days, sixty seemingly independent users show up recommending the app in their own experience posts — each account with its own profile, its own back-story, and individually worded text; it is not a star count or an aggregate rating signal that is at the centre but the many seemingly independent individuals. An investigation shows that all the accounts were run by a hired agency; the client is named nowhere.',
    },
    options: [
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / Sock Puppets' },
      { de: 'Fake Social Proof', en: 'Fake Social Proof' },
      { de: 'Coordinated Inauthentic Amplification', en: 'Coordinated Inauthentic Amplification' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and Provenance Deception' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Astroturfing: Sechzig „unabhängige" Fürsprecherinnen, in Wahrheit ein Ensemble verdeckt gesteuerter Sockpuppets einer einzigen Auftraggeberin — künstlicher Konsens über Social Proof. Erkennbar an Timing (Empfehlungswelle in wenigen Tagen), fehlender Account-Historie und nicht offengelegter Trägerschaft; kontern lässt es sich, indem du Verifizierung verlangst und die Meldewege der Plattform nutzt. Das legitime Pendant sind echte Kundenstimmen, als solche gekennzeichnet und nicht erfunden. Fake Social Proof liegt nahe, meint aber ein aggregiertes Popularitätssignal — eine Sternzahl, erfundene Downloadzahlen, ein Beliebtheitsranking; genau darum geht es hier nicht, das Kennzeichen ist die Vielzahl scheinbar eigenständiger, gesteuerter Einzelpersonen. Coordinated Inauthentic Amplification zielt auf koordiniert erzeugte Reichweite und Ranking (getaktete, oft nahezu wortgleiche Aktivität, gegenseitiges Hochspielen); hier sind es dagegen sechzig individuell formulierte, frei erfundene Einzelstimmen. Identitäts- und Herkunftstäuschung beschreibt die gefälschte Identität oder Quelle einer einzelnen Stimme — Astroturfing ist der Fall, in dem ein ganzes Ensemble solcher Schein-Identitäten unabhängigen Konsens vortäuscht.',
      en: 'Astroturfing: sixty "independent" advocates that are in fact an ensemble of covertly steered sock puppets serving a single client — manufactured consensus via social proof. It shows in the timing (a wave of recommendations within days), the missing account history, and the undisclosed sponsorship; you counter it by demanding verification and using the platform\'s reporting channels. The legitimate counterpart is genuine customer voices, labelled as such and not invented. Fake Social Proof is close but means an aggregate popularity signal — a star count, invented download numbers, a popularity ranking; that is precisely not the point here, the hallmark is the many seemingly independent, steered individuals. Coordinated Inauthentic Amplification targets coordinated reach and ranking (timed, often near-identical activity, mutual boosting); here, by contrast, there are sixty individually worded, wholly invented voices. Identity and Provenance Deception describes the faked identity or source of a single voice — astroturfing is the case where a whole ensemble of such fake identities fakes independent consensus.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets', 'social_proof', 'identity_provenance_deception'],
  },
];
