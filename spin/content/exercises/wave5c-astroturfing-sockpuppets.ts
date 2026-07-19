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
      de: 'Kommentarspalten und Leserbriefe einer Regionalzeitung zu einem umstrittenen Bauprojekt: Über zwei Wochen melden sich ein Dutzend scheinbar unabhängige „besorgte Anwohner" mit eigenen Namen und Alltagsgeschichten und loben das Projekt. Eine Recherche zeigt: Alle Profile wurden von der Agentur des Bauträgers angelegt und aus einem gemeinsamen Redaktionsplan gesteuert; echte Anwohner stecken nicht dahinter.',
      en: 'A regional paper\'s comment sections and letters to the editor about a contested construction project: over two weeks, a dozen seemingly independent "concerned residents" show up under their own names with everyday stories, praising the project. Reporting reveals that all the profiles were created by the developer\'s agency and run from a shared content calendar; no real residents are behind them.',
    },
    options: [
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / sock puppets' },
      { de: 'Koordinierte unauthentische Verstärkung', en: 'Coordinated inauthentic amplification' },
      { de: 'Falscher sozialer Beweis (Fake Social Proof)', en: 'Fake social proof' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity/provenance deception' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Astroturfing: Ein einzelner Akteur betreibt verdeckt mehrere Schein-Identitäten (Sockpuppets), die als unabhängige Bürger auftreten und so künstlichen Graswurzel-Konsens vortäuschen. Der Hebel ist sozialer Beweis — „so viele normale Leute finden das gut" —, während die gemeinsame Trägerschaft verborgen bleibt. Legitim ist nur das transparente Pendant: echte Fürsprache mit Klarnamen und offengelegter Kooperation, keine erfundenen Anwohner. Erkennen und kontern: Prüfe, ob die Stimmen wirklich unabhängig sind (Account-Historie, Timing, gleichförmige Sprache) und frage öffentlich nach Trägerschaft und Finanzierung der „Initiative". Koordinierte unauthentische Verstärkung wirkt ähnlich, meint aber das abgestimmte Hochspielen bereits vorhandener Inhalte (Teilen, Liken, Trending) — hier werden dagegen eigenständig neue Bürgerstimmen erfunden. Falscher sozialer Beweis bezeichnet fabrizierte Popularitätssignale allgemein (erfundene Zahlen, gefälschte Testimonials); Astroturfing ist der Spezialfall mit mehreren verdeckt gesteuerten Personen. Identitäts- und Herkunftstäuschung fälscht die Identität oder Quelle einer einzelnen Stimme, nicht ein ganzes Ensemble scheinbar unabhängiger Personen.',
      en: 'Astroturfing: a single actor covertly runs multiple fake identities (sock puppets) that pose as independent citizens, manufacturing a fake grassroots consensus. The lever is social proof — "so many ordinary people like this" — while the shared party behind them stays hidden. Only the transparent counterpart is legitimate: genuine advocacy under real names with disclosed sponsorship, not invented residents. To spot and counter it, check whether the voices are truly independent (account history, timing, uniform phrasing) and ask publicly who runs and funds the "initiative". Coordinated inauthentic amplification looks similar but means orchestrated boosting of content that already exists (sharing, liking, trending) — here, new citizen voices are being invented from scratch. Fake social proof denotes fabricated popularity signals in general (made-up numbers, faked testimonials); astroturfing is the special case using several covertly steered personas. Identity/provenance deception falsifies the identity or source of a single voice, not a whole ensemble of seemingly independent people.',
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
        de: 'Ich vergebe den Auftrag an einen externen Dienstleister weiter, damit die Konten nicht auf die Agentur oder den Kunden zurückzuführen sind.',
        en: 'I subcontract the job to an outside vendor so the accounts cannot be traced back to the agency or the client.',
      },
      {
        de: 'Ich lege die Profile an, lasse sie aber betont ausgewogen posten (auch mal Kritik), damit sie glaubwürdig wie echte Anwohner wirken.',
        en: 'I create the profiles but have them post in a deliberately balanced way (including occasional criticism) so they read like genuine residents.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Auftrag ist lehrbuchhaftes Astroturfing: erfundene, verdeckt gesteuerte Identitäten, die unabhängigen Bürgerkonsens vortäuschen. Die beste Option ersetzt die Täuschung durch ihr legitimes Pendant — sichtbare, echte Fürsprache mit offengelegter Trägerschaft — und macht das Risiko explizit: In mehreren Ländern ist verdeckte kommerzielle Kommunikation unzulässig, und fällt die Steuerung auf, trifft der Vertrauensverlust Kunde und Agentur zugleich. Ein versteckter Hinweis in der Bio wirkt plausibel, weil er nach „Offenlegung" klingt — verborgene Kennzeichnung ist aber keine, die Bürgerstimmen bleiben erfunden. Das Weitervergeben an einen Dienstleister verschleiert die Steuerung nur noch besser und verschärft das Problem, statt es zu lösen. Und „ausgewogen" posten zu lassen macht die Fälschung lediglich schwerer erkennbar — die Identitäten sind weiterhin frei erfunden. Sobald mehrere scheinbar unabhängige Stimmen dieselbe verborgene Hand haben, ist die Grenze überschritten.',
      en: 'The request is textbook astroturfing: invented, covertly steered identities faking independent citizen consensus. The best option replaces the deception with its legitimate counterpart — visible, genuine advocacy with disclosed sponsorship — and makes the risk explicit: covert commercial communication is unlawful in several jurisdictions, and if the steering surfaces, the loss of trust hits client and agency alike. A hidden note in the bio seems plausible because it sounds like "disclosure" — but concealed labelling is not disclosure, and the citizen voices are still fabricated. Subcontracting the job only hides the control better and deepens the problem instead of solving it. And having the profiles post "in a balanced way" merely makes the fake harder to detect — the identities remain wholly invented. The moment several seemingly independent voices share one hidden hand, the line is crossed.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets'],
  },
  {
    id: 'wave5c-astroturfing_sockpuppets-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Dieses Vorgehen heißt ___.',
      en: 'Complete the sentence: this pattern is called ___.',
    },
    scenario: {
      de: 'App-Store-Bewertungen einer Fitness-App: Innerhalb weniger Tage erscheinen sechzig Fünf-Sterne-Rezensionen von scheinbar unabhängigen Nutzerinnen, jede mit individuellem Text. Eine Prüfung ergibt: Alle Konten wurden von einer beauftragten Agentur betrieben, die Auftraggeberin wird nirgends genannt.',
      en: 'App-store reviews of a fitness app: within days, sixty five-star reviews appear from seemingly independent users, each with its own wording. A review shows that all the accounts were run by a hired agency; the client is named nowhere.',
    },
    options: [
      {
        de: 'Astroturfing / Sockpuppets — verdeckt gesteuerte Schein-Identitäten täuschen unabhängige Unterstützung vor',
        en: 'astroturfing / sock puppets — covertly steered fake identities simulate independent support',
      },
      {
        de: 'Falscher sozialer Beweis (Fake Social Proof) — fabrizierte Popularitätssignale ohne mehrere gesteuerte Personen',
        en: 'fake social proof — fabricated popularity signals without multiple steered personas',
      },
      {
        de: 'Koordinierte unauthentische Verstärkung — abgestimmtes Hochspielen bereits vorhandener Inhalte',
        en: 'coordinated inauthentic amplification — orchestrated boosting of pre-existing content',
      },
      {
        de: 'Getarnte Werbung (Schleichwerbung) — bezahlte Botschaft im Gewand redaktioneller Inhalte',
        en: 'disguised advertising — a paid message dressed up as editorial content',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Astroturfing: Sechzig „unabhängige" Rezensentinnen, in Wahrheit ein Ensemble verdeckt gesteuerter Sockpuppets einer einzigen Auftraggeberin — künstlicher Konsens über sozialen Beweis. Erkennbar wird es an Timing (Bewertungswelle in wenigen Tagen), fehlender Account-Historie und der nicht offengelegten Trägerschaft; kontern lässt es sich, indem du Verifizierung verlangst und die Plattform-Meldewege nutzt. Das legitime Pendant sind echte Kundenstimmen, die als solche gekennzeichnet und nicht erfunden sind. Falscher sozialer Beweis liegt nahe, meint aber fabrizierte Popularität allgemein (etwa erfundene Downloadzahlen) — hier ist das Kennzeichen gerade die Vielzahl gesteuerter Einzelpersonen. Koordinierte unauthentische Verstärkung würde vorhandene Beiträge hochspielen, nicht sechzig eigene Rezensionen erfinden. Getarnte Werbung tarnt eine einzelne bezahlte Botschaft als redaktionellen Inhalt; hier geht es nicht um ein getarntes Format, sondern um vorgetäuschte unabhängige Personen.',
      en: 'Astroturfing: sixty "independent" reviewers that are in fact an ensemble of covertly steered sock puppets serving a single client — manufactured consensus via social proof. It shows in the timing (a wave of ratings within days), the missing account history, and the undisclosed sponsorship; you counter it by demanding verification and using the platform\'s reporting channels. The legitimate counterpart is genuine customer voices, labelled as such and not invented. Fake social proof is close but means fabricated popularity in general (say, invented download counts) — here the hallmark is precisely the many steered individuals. Coordinated inauthentic amplification would boost existing posts, not invent sixty original reviews. Disguised advertising cloaks a single paid message as editorial content; this is not a cloaked format but faked independent people.',
    },
    points: 10,
    primaryTechniqueId: 'astroturfing_sockpuppets',
    relatedTechniques: ['astroturfing_sockpuppets', 'social_proof'],
  },
];
