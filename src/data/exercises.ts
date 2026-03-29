import type { MicroExercise } from '@/types';

export const microExercises: MicroExercise[] = [
  // ============================================================================
  // QUICK-CHECK: Ist das Desinformation? (10-Sekunden-Timer)
  // ============================================================================
  {
    id: 'qc-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: '🔴 EILMELDUNG: Studie beweist - 5G-Strahlung verursacht Krebs! Die Regierung verschweigt die Wahrheit! TEILEN bevor es gelöscht wird!!!',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Desinformation: Unbelegte Behauptung, Verschwörungsnarrativ ("Regierung verschweigt"), Dringlichkeits-Appell ("bevor es gelöscht wird"), emotionale Sprache.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'qc-2',
    type: 'quick-check',
    difficulty: 'beginner',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Robert Koch-Institut (@raborki): Aktuelle Influenza-Zahlen für KW 12: 3.421 laborbestätigte Fälle. Trend rückläufig. Detaillierter Wochenbericht: rki.de/influenza',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Seriöser Post: Offizielle Institution, konkrete Zahlen, Quellenangabe, sachlicher Ton, keine emotionale Sprache.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Neue Analyse zeigt: Das Unternehmen XY hat seine CO2-Bilanz um 40% geschönt. Drei unabhängige Gutachter bestätigen die Diskrepanz. Vollständiger Bericht mit Methodik: envirotrust.org/report-2024',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Wahrscheinlich seriös: Konkrete Zahlen, mehrere unabhängige Quellen, vollständiger Bericht mit Methodik verlinkt. Natürlich sollte man die Quelle "envirotrust.org" noch lateral prüfen.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'qc-4',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Ein Insider bei der Firma ABC packt aus: "Die neuen Produkte sind gesundheitsschädlich!" Über 50.000 haben schon geteilt. Die Mainstream-Medien berichten nicht darüber - fragt euch warum!',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Warnsignale: Anonyme Quelle ("ein Insider"), Social-Proof-Manipulation ("50.000 haben geteilt"), Anti-Medien-Narrativ, keine konkreten Belege, emotionaler Appell.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['social_proof', 'reactance_theory', 'authority'],
  },
  {
    id: 'qc-5',
    type: 'quick-check',
    difficulty: 'advanced',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'Laut einer Erhebung des Meinungsforschungsinstituts Infratest dimap im Auftrag der ARD sind 62% der Befragten mit der Arbeit der Bundesregierung unzufrieden. Die Befragung wurde am 15.3. unter 1.204 Wahlberechtigten durchgeführt.',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [1],
    explanation: {
      de: 'Seriös: Renommiertes Institut, klarer Auftraggeber, konkrete Stichprobengröße und Datum, sachliche Darstellung. Professionelle Kommunikatoren sollten solche Umfragen einordnen können.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: [],
  },
  {
    id: 'qc-6',
    type: 'quick-check',
    difficulty: 'advanced',
    question: { de: 'Ist dieser Post Desinformation?' },
    scenario: {
      de: 'BREAKING: CEO von TechCorp in geheimes Treffen mit Lobbyisten verwickelt! Exklusive Fotos beweisen alles. Die Aktie wird morgen einbrechen - noch schnell verkaufen! #TechCorpSkandal',
    },
    options: [{ de: 'Desinformation' }, { de: 'Seriös' }],
    correctAnswers: [0],
    explanation: {
      de: 'Klassische Marktmanipulation durch Desinformation: Vage Behauptungen ("geheimes Treffen"), unbelegte "Beweise", Handlungsaufforderung zum Aktienverkauf, Hashtag-Kampagne zur Viralität.',
    },
    points: 5,
    timeLimit: 10,
    relatedTechniques: ['scarcity', 'emotional_appeal', 'framing'],
  },

  // ============================================================================
  // TECHNIQUE-MATCH: Welche Technik wird hier eingesetzt?
  // ============================================================================
  {
    id: 'tm-1',
    type: 'technique-match',
    difficulty: 'beginner',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Nur noch 3 Plätze frei! Melden Sie sich JETZT an, bevor es zu spät ist! Dieses Angebot gibt es nur heute!"',
    },
    options: [
      { de: 'Knappheit (Scarcity)' },
      { de: 'Sozialer Beweis' },
      { de: 'Framing' },
      { de: 'Autoritätsargument' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Künstliche Knappheit erzeugt Dringlichkeit und Angst, etwas zu verpassen (FOMO). Kommunikatoren sollten dieses Muster erkennen - es wird oft in Desinformationskampagnen eingesetzt.',
    },
    points: 10,
    relatedTechniques: ['scarcity'],
  },
  {
    id: 'tm-2',
    type: 'technique-match',
    difficulty: 'beginner',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Führende Wissenschaftler der Harvard University haben bestätigt, dass..." (ohne Quellenangabe oder Studienname)',
    },
    options: [
      { de: 'Autoritätsargument (falsche Autorität)' },
      { de: 'Emotionaler Appell' },
      { de: 'Wiederholung' },
      { de: 'Nudging' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Autoritätsreferenz: Ein prestigeträchtiger Name wird ohne konkrete Quellenangabe benutzt. Kommunikatoren sollten immer die Primärquelle prüfen.',
    },
    points: 10,
    relatedTechniques: ['authority'],
  },
  {
    id: 'tm-3',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: 'Pressemitteilung: "Unser Produkt wurde bereits von über 2 Millionen zufriedenen Kunden gewählt. Schließen Sie sich der wachsenden Gemeinschaft an!"',
    },
    options: [
      { de: 'Sozialer Beweis (Social Proof)' },
      { de: 'Knappheit' },
      { de: 'Priming' },
      { de: 'Ad Hominem' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Social Proof nutzt die menschliche Tendenz, sich an der Mehrheit zu orientieren. In der PR ist diese Technik allgegenwärtig - die Grenze zur Manipulation ist fließend.',
    },
    points: 10,
    relatedTechniques: ['social_proof'],
  },
  {
    id: 'tm-4',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: '"Entweder wir stoppen die Immigration sofort, oder unsere Kultur geht unter. Es gibt keinen Mittelweg."',
    },
    options: [
      { de: 'Falsche Dichotomie' },
      { de: 'Anchoring' },
      { de: 'Reziprozität' },
      { de: 'Pacing & Leading' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Falsche Dichotomie reduziert komplexe Themen auf zwei Extremoptionen. In der politischen Kommunikation ein häufiges Mittel - für Kommunikatoren ist es wichtig, die ausgeblendeten Alternativen aufzuzeigen.',
    },
    points: 10,
    relatedTechniques: ['false_dichotomy'],
  },
  {
    id: 'tm-5',
    type: 'technique-match',
    difficulty: 'advanced',
    question: { de: 'Welche Überzeugungstechnik wird hier hauptsächlich eingesetzt?' },
    scenario: {
      de: 'Ein Nachrichtenportal titelt: "Dramatischer Anstieg: Beschwerden über Firma X verdoppelt!" (Im Kleingedruckten: von 3 auf 6 Beschwerden)',
    },
    options: [
      { de: 'Framing (durch relative Zahlen)' },
      { de: 'Dark Patterns' },
      { de: 'Synthetic Media' },
      { de: 'Liking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Framing durch relative statt absolute Zahlen: "Verdoppelt" klingt dramatisch, aber von 3 auf 6 ist praktisch bedeutungslos. Kommunikatoren müssen Statistiken immer im Kontext lesen.',
    },
    points: 10,
    relatedTechniques: ['framing', 'anchoring'],
  },

  // ============================================================================
  // RESPONSE-CHOICE: Wie sollte ein Kommunikator reagieren?
  // ============================================================================
  {
    id: 'rc-1',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ihr Unternehmen wird in einem viralen Tweet falsch beschuldigt, Kundendaten verkauft zu haben. Der Tweet hat 15.000 Retweets. Was tun Sie?',
    },
    options: [
      { de: 'Schnell mit Fakten antworten, dabei sachlich bleiben und Belege liefern' },
      { de: 'Den Tweet ignorieren - Aufmerksamkeit verstärkt nur die Reichweite' },
      { de: 'Sofort rechtliche Schritte androhen' },
      { de: 'Einen emotionalen Gegenpost veröffentlichen' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei 15.000 Retweets ist Ignorieren keine Option mehr - die Falschinformation verbreitet sich bereits. Eine sachliche, faktenbasierte Antwort mit Belegen (z.B. Link zum Datenschutzbericht) ist die beste Strategie. Rechtliche Drohungen wirken defensiv und emotionale Gegenreaktionen eskalieren.',
    },
    points: 15,
    relatedTechniques: ['framing', 'emotional_appeal'],
  },
  {
    id: 'rc-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Faktencheck-Portal veröffentlicht eine fehlerhafte Analyse über Ihre Organisation. Was ist der beste erste Schritt?',
    },
    options: [
      { de: 'Das Portal direkt kontaktieren und eine Korrektur mit Belegen einfordern' },
      { de: 'Eine Gegendarstellung auf Social Media posten' },
      { de: 'Die eigenen Mitarbeiter mobilisieren, um negative Kommentare zu schreiben' },
      { de: 'Abwarten, ob jemand den Fehler bemerkt' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seriöse Faktencheck-Portale haben Korrekturprozesse. Der direkte, professionelle Kontakt mit konkreten Belegen ist am effektivsten. Mitarbeiter zu mobilisieren wäre Astroturfing - genau das, was wir bekämpfen.',
    },
    points: 15,
    relatedTechniques: ['authority'],
  },
  {
    id: 'rc-3',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Sie entdecken, dass mehrere Social-Media-Accounts koordiniert Falschinformationen über Ihren Kunden verbreiten. Die Accounts sehen authentisch aus. Was ist Ihre Strategie?',
    },
    options: [
      { de: 'Beweise dokumentieren, bei der Plattform melden, parallel ein transparentes Statement vorbereiten' },
      { de: 'Jeden einzelnen Account öffentlich als Fake entlarven' },
      { de: 'Eigene koordinierte Gegenaccounts erstellen' },
      { de: 'Nur intern informieren und abwarten' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Professionelles Vorgehen: (1) Beweissicherung (Screenshots, Zeitstempel), (2) Plattform-Meldung, (3) Transparentes Statement über die Kampagne. Gegenaccounts zu erstellen wäre unethisch. Öffentliches Entlarven kann kontraproduktiv sein (Streisand-Effekt).',
    },
    points: 15,
    relatedTechniques: ['social_proof', 'digital_influence'],
  },
  {
    id: 'rc-4',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Ein Deepfake-Video zeigt Ihren CEO bei einer angeblichen Bestechungsübergabe. Das Video verbreitet sich schnell. Was hat höchste Priorität?',
    },
    options: [
      { de: 'Sofort ein offizielles Dementi mit Alibibibeweis veröffentlichen und Forensik-Analyse beauftragen' },
      { de: 'Das Video auf allen Plattformen melden lassen' },
      { de: 'Eine Pressekonferenz für morgen einberufen' },
      { de: 'Die Polizei informieren und sonst nichts tun' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Deepfakes zählt Geschwindigkeit. Jede Stunde ohne Dementi festigt die Falschdarstellung. Ein schnelles offizielles Statement mit konkretem Alibibibeweis (z.B. "CEO war zu diesem Zeitpunkt in Meeting X") plus forensische Analyse des Videos ist die beste Kombination.',
    },
    points: 15,
    relatedTechniques: ['synthetic_media', 'visual_manipulation'],
  },
  {
    id: 'rc-5',
    type: 'response-choice',
    difficulty: 'expert',
    question: {
      de: 'Ihre Organisation plant ein kontroverses Projekt. Sie wissen, dass Gegner bald eine Desinformationskampagne starten werden. Was tun Sie präventiv?',
    },
    options: [
      { de: 'Prebunking: Proaktiv transparente Informationen veröffentlichen, bevor die Kampagne startet' },
      { de: 'Abwarten und nur reagieren, wenn die Kampagne tatsächlich startet' },
      { de: 'Die Gegner vorsorglich diskreditieren' },
      { de: 'Das Projekt geheim halten, so lange es geht' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Prebunking (auch "Inoculation") ist die effektivste Prävention: Menschen werden widerstandsfähiger gegen Manipulation, wenn sie vorher über die zu erwartenden Techniken informiert werden. Die Forschung zeigt, dass proaktive Transparenz wirksamer ist als reaktive Korrekturen.',
    },
    points: 15,
    relatedTechniques: ['narrative_persuasion', 'framing'],
  },

  // ============================================================================
  // SPOT-THE-FLAG: Finde die Red Flags
  // ============================================================================
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welche Red Flags hat dieser Post? (Mehrfachauswahl)',
    },
    scenario: {
      de: '⚠️ SCHOCKIEREND: Geheime Dokumente BEWEISEN, dass die Regierung uns belogen hat! Die Mainstream-Medien WEIGERN sich, darüber zu berichten! TEILE diesen Post, bevor er ZENSIERT wird! 🚨',
    },
    options: [
      { de: 'Emotionale/reißerische Sprache (SCHOCKIEREND, BEWEISEN)' },
      { de: 'Anti-Medien-Narrativ ("Mainstream-Medien weigern sich")' },
      { de: 'Dringlichkeitsappell ("bevor er zensiert wird")' },
      { de: 'Keine konkreten Quellenangaben' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind Red Flags! Dieser Post kombiniert emotionale Manipulation, Verschwörungsnarrative, künstliche Dringlichkeit und fehlende Belege - ein Lehrbuchbeispiel für Desinformation.',
    },
    points: 20,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'sf-2',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Red Flags hat diese Pressemitteilung? (Mehrfachauswahl)',
    },
    scenario: {
      de: 'Pressemitteilung: "CleanTech Solutions GmbH ist Marktführer bei grüner Technologie. Laut einer von uns beauftragten Studie sind 95% der Kunden zufrieden. Im Vergleich zu vor 5 Jahren haben wir den CO2-Ausstoß um 60% reduziert."',
    },
    options: [
      { de: 'Selbstbeauftragte Studie (Interessenkonflikt)' },
      { de: 'Unklarer Vergleichszeitraum für CO2-Reduktion' },
      { de: 'Keine unabhängige Bestätigung für "Marktführer"-Claim' },
      { de: 'Sachlicher Ton ohne emotionale Sprache' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Die ersten drei sind Red Flags: Selbstbeauftragte Studien haben einen Interessenkonflikt, "vor 5 Jahren" ist vage (warum genau dieser Zeitraum?), und "Marktführer" wird ohne Definition oder Beleg behauptet. Der sachliche Ton (Option 4) ist kein Red Flag.',
    },
    points: 20,
    relatedTechniques: ['authority', 'framing', 'anchoring'],
  },
  {
    id: 'sf-3',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Red Flags hat dieser LinkedIn-Post? (Mehrfachauswahl)',
    },
    scenario: {
      de: 'LinkedIn-Post von einem "Change Management Berater": "Ich habe gerade gehört, dass Firma XYZ massive Entlassungen plant. Ein Freund in der Personalabteilung hat mir das vertraulich bestätigt. Wer dort arbeitet, sollte sich schon mal umsehen. #XYZEntlassungen #InsiderWissen"',
    },
    options: [
      { de: 'Unverifizierbarer "Insider" als Quelle' },
      { de: 'Hashtag-Kampagne deutet auf Agenda hin' },
      { de: 'Potenzielle Marktmanipulation (Aktienkurs)' },
      { de: 'Vertrauliche Information wird öffentlich geteilt' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind problematisch: Anonyme "Insider"-Quellen sind nicht verifizierbar, gezielte Hashtags können koordinierte Kampagnen starten, unbelegte Entlassungsgerüchte können Aktienkurse beeinflussen (Marktmanipulation), und das Teilen "vertraulicher" Informationen ist ethisch fragwürdig.',
    },
    points: 20,
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },

  // ============================================================================
  // FILL-BLANK: Vervollständige die Richtigstellung
  // ============================================================================
  {
    id: 'fb-1',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ein viraler Post behauptet: "Firma X hat 500 Arbeitsplätze ins Ausland verlagert!" In Wahrheit wurden 50 Stellen in ein Joint Venture überführt. Welche Richtigstellung ist am effektivsten?',
    },
    options: [
      { de: '50 Stellen wurden im Rahmen eines Joint Ventures mit [Partner] neu strukturiert. Alle Mitarbeiter erhielten Angebote. Details: [Link]' },
      { de: 'Das ist falsch! Wir haben keine 500 Arbeitsplätze verlagert!' },
      { de: 'Wir kommentieren Gerüchte grundsätzlich nicht.' },
      { de: 'Der Post enthält Falschinformationen und wir behalten uns rechtliche Schritte vor.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Richtigstellung: (1) Nennt die korrekten Zahlen, (2) erklärt den Kontext, (3) zeigt, dass Mitarbeiter berücksichtigt wurden, (4) bietet Belege via Link. Die anderen Optionen sind defensiv, aggressiv oder uninformativ.',
    },
    points: 15,
    relatedTechniques: ['framing', 'narrative_persuasion'],
  },
  {
    id: 'fb-2',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ein manipuliertes Zitat Ihres CEOs verbreitet sich: "Umweltschutz ist mir egal, Profit zählt." Das echte Zitat war differenzierter. Wie reagieren Sie am besten?',
    },
    options: [
      { de: 'Das vollständige Originalzitat veröffentlichen mit Video/Transkript-Link, sachlich den Kontext erklären' },
      { de: 'Den CEO ein neues Statement zum Umweltschutz abgeben lassen' },
      { de: 'Auf Twitter alle Verbreiter des falschen Zitats markieren und korrigieren' },
      { de: 'Eine Pressemitteilung mit dem Titel "CEO-Zitat wurde gefälscht" herausgeben' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Primärquelle (Originalvideo/Transkript) ist der stärkste Beweis. Ein neues Statement wirkt wie Schadensbegrenzung. Einzelne Verbreiter zu korrigieren skaliert nicht. "Zitat wurde gefälscht" wiederholt das Falsche (familiarity backfire effect).',
    },
    points: 15,
    relatedTechniques: ['framing', 'visual_manipulation'],
  },
  {
    id: 'fb-3',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Mehrere Accounts behaupten: "Die neue Fabrik von Firma Z verseucht das Grundwasser!" Ihre Umweltgutachten zeigen das Gegenteil. Welche Kommunikationsstrategie ist am wirksamsten?',
    },
    options: [
      { de: 'Proaktiv die Umweltgutachten veröffentlichen, lokale Stakeholder einladen, und unabhängige Experten zu Wort kommen lassen' },
      { de: 'Eine Anzeigenkampagne mit dem Slogan "Wir sind sauber!" starten' },
      { de: 'Die Accounts als koordinierte Kampagne entlarven' },
      { de: 'Nur die lokale Presse informieren und hoffen, dass es nicht eskaliert' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparenz + unabhängige Stimmen + lokales Engagement ist die stärkste Kombination. Anzeigenkampagnen wirken als Greenwashing. Das Entlarven kann als Angriff gewertet werden. Nur lokale Presse reicht bei viraler Verbreitung nicht aus.',
    },
    points: 15,
    relatedTechniques: ['authority', 'social_proof', 'narrative_persuasion'],
  },
];
