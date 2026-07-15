import type { Exercise } from '../../types';

// microtargeting — Phase 2 content batch.
export const microtargetingExercises: Exercise[] = [
  {
    id: 'mt-new-1',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welche Technik steckt hinter diesem Vorgehen?',
      en: 'Which technique is behind this approach?',
    },
    scenario: {
      de: 'Eine Kampagne erzeugt aus detaillierten persönlichen Daten (Alter, Wohnort, Surfverhalten, Interessen) tausende Anzeigenvarianten und spielt jeder eng zugeschnittenen Nutzergruppe genau die Version aus, die zu ihrem persönlichen Profil passt.',
      en: 'A campaign uses detailed personal data (age, location, browsing behaviour, interests) to generate thousands of ad variants, and serves each narrowly defined user group exactly the version that matches their personal profile.',
    },
    options: [
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Sozialer Beweis', en: 'Social proof' },
      { de: 'Knappheit', en: 'Scarcity' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Microtargeting nutzt detaillierte persönliche Daten, um Botschaften individuell auf einzelne Zielgruppen — bis hin zur Einzelperson — zuzuschneiden. Der verräterische Hinweis ist die datengetriebene Personalisierung „pro Profil": Jede Gruppe bekommt eine andere Botschaft, weil ihre Daten das nahelegen. Legitim ist das, wenn die Daten einwilligungsbasiert erhoben wurden und die Segmente transparent und nicht-sensibel sind; manipulativ wird es, wenn es gezielt individuelle Schwächen oder Ängste ausnutzt. Sozialer Beweis würde auf das Verhalten der Mehrheit verweisen, Knappheit auf ein künstlich begrenztes Angebot, Framing auf die unterschiedliche Darstellung ein und derselben Information — keiner dieser Hebel erklärt, warum hier jede Gruppe aufgrund ihrer Daten eine eigene Botschaft erhält.',
      en: 'Microtargeting uses detailed personal data to tailor messages to individual audiences — down to the single person. The tell-tale sign is data-driven personalization "per profile": each group gets a different message because their data suggests it. It is legitimate when the data was gathered with consent and the segments are transparent and non-sensitive; it turns manipulative when it deliberately exploits individual weaknesses or fears. Social proof would point to what the majority does, scarcity to an artificially limited supply, framing to presenting one and the same piece of information differently — none of these levers explains why each group here receives its own message based on its data.',
    },
    points: 5,
    timeLimit: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting'],
  },
  {
    id: 'mt-new-2',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik wird hier hauptsächlich eingesetzt?',
      en: 'Which technique is primarily being used here?',
    },
    scenario: {
      de: 'Für eine Recruiting-Kampagne wertet ein Tool das Online-Verhalten potenzieller Bewerber aus und teilt sie in Mikro-Segmente ein. Wer laut Datenprofil Wert auf Sicherheit legt, sieht eine Anzeige über Jobstabilität; wer als karriereorientiert eingestuft wird, sieht dieselbe Stelle mit Fokus auf Aufstiegschancen.',
      en: 'For a recruiting campaign, a tool analyses the online behaviour of potential applicants and sorts them into micro-segments. Those whose data profile suggests they value security see an ad about job stability; those classified as career-driven see the same role framed around advancement opportunities.',
    },
    options: [
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der bestimmende Mechanismus ist Microtargeting: Das Publikum wird anhand abgeleiteter Datenprofile in Mikro-Segmente zerlegt, und jedem Segment wird die Variante zugeordnet, von der die Daten die stärkste Wirkung erwarten lassen. Framing ist der verlockende Fast-Treffer — es beschreibt zwar, WIE sich die einzelnen Anzeigen unterscheiden (Stabilität vs. Aufstieg), aber nicht die Profilierung, die entscheidet, WER welche Version sieht; Framing allein braucht keine persönlichen Daten. Nudging verändert die Entscheidungsarchitektur für alle gleich, ohne individuelle Datenprofile. Ein emotionaler Appell spricht Gefühle pauschal an, nicht profilgenau. Grenze: legitim, wenn die Segmente aus einwilligungsbasierten, nicht-sensiblen Daten entstehen; manipulativ, sobald die Profile sensible Merkmale ableiten oder gezielt Schwächen ansteuern.',
      en: 'The defining mechanism is microtargeting: the audience is broken into micro-segments from inferred data profiles, and each segment is matched to the variant the data predicts will resonate most. Framing is the tempting near-miss — it describes HOW the individual ads differ (stability vs. advancement) but not the profiling that decides WHO sees which version; framing on its own needs no personal data. Nudging reshapes the choice architecture identically for everyone, without individual data profiles. An emotional appeal targets feelings in bulk, not per profile. Boundary: legitimate when the segments are built from consented, non-sensitive data; manipulative the moment the profiles infer sensitive traits or deliberately aim at weaknesses.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'framing'],
  },
  {
    id: 'mt-new-3',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welche Technik dominiert dieses Vorgehen?',
      en: 'Which technique dominates this approach?',
    },
    scenario: {
      de: 'Ein SaaS-Anbieter verschickt keine einheitliche Rückgewinnungs-Mail an kündigende Kunden. Stattdessen liest das System für jeden Nutzer das Klickverhalten und die Stimmung früherer Support-Tickets aus. Konten, die als „budgetängstlich" eingestuft werden, erhalten eine Botschaft, die den drohenden Verlust gespeicherter Projekte und mögliche Mehrkosten betont; als souverän eingestufte Power-User bekommen dieselbe Aktion mit Fokus auf neue Profi-Funktionen.',
      en: 'A SaaS provider does not send a uniform win-back email to churning customers. Instead, for each user the system reads click behaviour and the sentiment of past support tickets. Accounts classified as "budget-anxious" receive a message stressing the looming loss of saved projects and possible extra costs; power users classified as confident get the same offer framed around new pro features.',
    },
    options: [
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'Emotionaler Appell', en: 'Emotional appeal' },
      { de: 'Nudging', en: 'Nudging' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der verlockende Fast-Treffer ist der emotionale Appell — bei der „budgetängstlichen" Gruppe wird klar mit der Verlustangst gespielt. Doch ein emotionaler Appell allein ist ein Massenhebel; was diesen Fall zu Microtargeting macht, ist die individuelle Profilierung aus Verhaltens- und Stimmungsdaten und das gezielte Zuordnen genau des Auslösers, der die persönliche Schwachstelle jedes Einzelnen trifft. Verschiedene Menschen erhalten aufgrund ihres Datenprofils verschiedene emotionale oder rationale Trigger — dieses datengetriebene, individualisierte Ausnutzen einer persönlichen Schwäche ist die Signatur von Microtargeting. Nudging würde die Auswahl für alle gleich umbauen; Framing beschreibt nur die Formulierung der einzelnen Nachricht, nicht die Profilierungsmaschine dahinter. Grenze: kündigende Kunden zu profilieren, um ihnen relevante, ehrliche Hilfe zu schicken, ist legitimes CRM; die Angst einer Einzelperson abzuleiten, um sie auszunutzen, kippt ins Manipulative — und wirft mit Verhaltens- und Stimmungsprofilen zusätzlich Datenschutzfragen auf.',
      en: 'The tempting near-miss is the emotional appeal — the "budget-anxious" group is plainly played on through loss aversion. But an emotional appeal on its own is a mass lever; what makes this case microtargeting is the individual profiling from behavioural and sentiment data and the deliberate matching of exactly the trigger that hits each person\'s specific weakness. Different people receive different emotional or rational triggers based on their data profile — this data-driven, individualized exploitation of a personal weakness is the signature of microtargeting. Nudging would rebuild the choice the same way for everyone; framing merely describes the wording of the individual message, not the profiling engine behind it. Boundary: profiling churning customers to send them relevant, honest help is legitimate CRM; inferring an individual\'s anxiety in order to exploit it tips into manipulation — and, with behavioural and sentiment profiling, additionally raises data-protection questions.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'emotional_appeal'],
  },
  {
    id: 'mt-new-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Weil die Kampagne aus ___ individuelle Sorgenprofile ableitet und jedem Empfänger genau die Botschaft zeigt, die seine persönliche Angst trifft, spricht sie jeden anders an.',
      en: 'Complete the sentence: Because the campaign derives individual worry profiles from ___ and shows each recipient exactly the message that hits their personal fear, it addresses everyone differently.',
    },
    scenario: {
      de: 'Ein Versicherer bewirbt eine Zusatzpolice und spielt jedem Nutzer eine andere Anzeige aus, je nachdem, welche Sorge sein Profil nahelegt.',
      en: 'An insurer promotes a supplementary policy and serves each user a different ad depending on which worry their profile suggests.',
    },
    options: [
      { de: 'detaillierten persönlichen Daten und Verhaltensprofilen', en: 'detailed personal data and behavioural profiles' },
      { de: 'einer künstlich begrenzten Verfügbarkeit', en: 'an artificially limited availability' },
      { de: 'dem sichtbaren Verhalten der Mehrheit', en: 'the visible behaviour of the majority' },
      { de: 'einer immer gleichen, oft wiederholten Kernbotschaft', en: 'a single, frequently repeated core message' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus von Microtargeting ist genau das: aus detaillierten persönlichen Daten — verhaltensbezogen, demografisch, psychografisch — individuelle Profile ableiten und jedem Profil eine maßgeschneiderte Botschaft zuordnen, die seine abgeleitete Schwachstelle trifft. Knappheit bräuchte eine Behauptung begrenzter Verfügbarkeit, sozialer Beweis einen Verweis auf das Mehrheitsverhalten, Repetition dieselbe, immer wiederholte Kernbotschaft — keiner dieser Hebel erzeugt die personengenaue Differenzierung aus persönlichen Daten, die den Fall kennzeichnet. Grenze: legitim, wenn die Daten einwilligungsbasiert und nicht-sensibel sind; manipulativ, wenn die Profile individuelle Ängste ableiten und ausnutzen.',
      en: 'The mechanism of microtargeting is exactly this: derive individual profiles from detailed personal data — behavioural, demographic, psychographic — and match each profile a tailored message that hits its inferred weakness. Scarcity would need a claim of limited availability, social proof a reference to majority behaviour, repetition the same core message hammered again and again — none of these levers produces the per-person differentiation from personal data that defines this case. Boundary: legitimate when the data is consented and non-sensitive; manipulative when the profiles infer and exploit individual fears.',
    },
    points: 10,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'digital_influence'],
  },
  {
    id: 'mt-new-5',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Wie gehst du als verantwortliche Kommunikationsprofi damit um?',
      en: 'As the responsible communications professional, how do you handle this?',
    },
    scenario: {
      de: 'Du verantwortest das digitale Marketing einer Bio-Lebensmittelmarke. Das Data-Team schlägt vor, einen zugekauften Datensatz zu nutzen, der Nutzer nach abgeleiteten Gesundheitsängsten und medizinnahem Surfverhalten sortiert, um Anzeigen gezielt Menschen mit bestimmten gesundheitlichen Sorgen auszuspielen.',
      en: 'You are responsible for the digital marketing of an organic-food brand. The data team proposes using a purchased dataset that sorts users by inferred health anxieties and medically adjacent browsing, in order to serve ads specifically to people with particular health worries.',
    },
    options: [
      {
        de: 'Ich lehne das Targeting auf abgeleitete Gesundheitsmerkmale ab und beschränke uns auf einwilligungsbasierte First-Party-Daten und transparente, nicht-sensible Segmente — denn das Ausspielen auf sensible Gesundheitsprofile ohne ausdrückliche Einwilligung verstößt gegen die DSGVO und würde bei Bekanntwerden Vertrauen und Reputation stärker beschädigen, als der kurzfristige Werbeeffekt bringt.',
        en: 'I decline to target on inferred health traits and limit us to consented first-party data and transparent, non-sensitive segments — because serving ads against sensitive health profiles without explicit consent breaches the GDPR and, if it came to light, would damage trust and reputation more than the short-term ad lift is worth.',
      },
      {
        de: 'Ich setze den Datensatz ein — Microtargeting auf konkrete Gesundheitsängste konvertiert am besten, und Wirksamkeit zählt.',
        en: 'I use the dataset — microtargeting on specific health fears converts best, and effectiveness is what counts.',
      },
      {
        de: 'Ich nutze den Datensatz, entferne aber die Marke aus den Anzeigen, damit sich die Ansprache nicht zu uns zurückverfolgen lässt.',
        en: 'I use the dataset but strip the brand from the ads so the targeting cannot be traced back to us.',
      },
      {
        de: 'Ich spiele nur den ängstlichsten 5 % aus, weil ein kleineres Segment das rechtliche Risiko verringert.',
        en: 'I serve only the most anxious 5%, since a smaller segment reduces the legal risk.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist manipulatives Microtargeting im Lehrbuch: Er nutzt eine abgeleitete individuelle Schwachstelle (Gesundheitsangst) auf Basis von Daten, die die Nutzer nie wissentlich gegeben haben. Abgeleitete Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO; ihre Verarbeitung fürs Anzeigen-Targeting ohne ausdrückliche Einwilligung ist unzulässig — unabhängig von der Conversion-Rate. Option 0 ist Best Practice: das sensible Targeting ablehnen, auf einwilligungsbasierte First-Party-Daten und transparente Segmente zurückgehen, und den Second-Order-Effekt (Vertrauens- und Reputationsschaden bei Aufdeckung) mitdenken. Option 1 optimiert die Wirksamkeit und ignoriert Rechtslage wie Backlash. Option 2 legt mit dem Verschleiern des Absenders eine zusätzliche Täuschungsschicht darüber und heilt die unzulässige Verarbeitung nicht. Option 3 verschätzt sich beim Risiko: Die Verengung auf die verletzlichsten Personen erhöht den Schaden und die Exponierung, statt sie zu senken. Grenze: Microtargeting ist legitim mit einwilligungsbasierten, nicht-sensiblen Daten und ehrlichen Angeboten; es überschreitet die Linie, sobald es eine sensible persönliche Schwachstelle profiliert und ausnutzt.',
      en: 'The proposal is textbook manipulative microtargeting: it exploits an inferred individual weakness (health anxiety) using data the users never knowingly gave. Inferred health data is special-category data under GDPR Art. 9; processing it for ad targeting without explicit consent is unlawful — regardless of the conversion rate. Option 0 is best practice: refuse the sensitive targeting, fall back to consented first-party data and transparent segments, and weigh the second-order effect (trust and reputation damage on exposure). Option 1 optimizes effectiveness while ignoring both legality and the backlash. Option 2 layers a deceptive step on top by hiding the sponsor and does nothing to cure the unlawful processing. Option 3 misjudges the risk: narrowing to the most vulnerable individuals raises the harm and the exposure rather than lowering them. Boundary: microtargeting is legitimate with consented, non-sensitive data and honest offers; it crosses the line the moment it profiles and exploits a sensitive personal vulnerability.',
    },
    points: 15,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'emotional_appeal'],
  },
  {
    id: 'mt-new-6',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Dein Team plant eine datengetriebene Kampagne. Ein Baustein überschreitet die ethische und rechtliche Grenze von legitimer Personalisierung hin zum Ausnutzen einer Schwachstelle. Welcher?',
      en: 'Your team is planning a data-driven campaign. One component crosses the ethical and legal line from legitimate personalization into exploiting a vulnerability. Which one?',
    },
    scenario: {
      de: 'Geplante Bausteine der Kampagne:',
      en: 'Planned components of the campaign:',
    },
    options: [
      {
        de: 'Den Newsletter-Verteiler nach den Produktkategorien segmentieren, die die Abonnenten bei der Anmeldung selbst ausgewählt haben, und die Betreffzeilen pro Segment anpassen.',
        en: 'Segment the newsletter list by the product categories subscribers chose themselves at sign-up, and tailor subject lines per segment.',
      },
      {
        de: 'Zwei Anzeigenmotive über die Standard-Altersgruppen der Werbeplattform gegeneinander testen (A/B-Test).',
        en: 'A/B-test two ad creatives against the ad platform\'s standard age brackets.',
      },
      {
        de: 'Anhand aggregierter, anonymisierter Regionaltrends entscheiden, welche Region welche Saisonaktion sieht.',
        en: 'Use aggregated, anonymized regional trends to decide which region sees which seasonal promotion.',
      },
      {
        de: 'Eine zugekaufte Liste von Personen nutzen, die als „finanziell unter Druck" eingestuft sind, und ihnen pünktlich zum Zahltag hochverzinste Ratenkauf-Angebote ausspielen.',
        en: 'Use a purchased list of individuals flagged as "financially stressed" and serve them high-interest instalment offers timed to payday.',
      },
    ],
    correctAnswers: [3],
    explanation: {
      de: 'Legitime Personalisierung und legitimes Microtargeting sind einwilligungsbasiert, transparent, verhältnismäßig und nutzen keine Schwachstelle aus: selbst gewählte Newsletter-Segmente, A/B-Tests über Standard-Zielgruppen und aggregiertes, anonymisiertes Regional-Targeting personalisieren, ohne Einzelpersonen gegen eine Schwäche zu profilieren. Baustein 4 überschreitet die Grenze: Er kauft ein Profil individueller finanzieller Not zu — abgeleitete sensible Daten — und legt ein teures Angebot genau auf diese Schwachstelle und den Zahltag. Das ist manipulatives Microtargeting und höchstwahrscheinlich unzulässig (Verhaltens- bzw. Profilbildung nach DSGVO sowie Risiko unlauterer Geschäftspraktiken). Prüffragen: Ist das Targeting einwilligungsbasiert, transparent, verhältnismäßig und frei vom Ausnutzen einer abgeleiteten persönlichen Schwäche?',
      en: 'Legitimate personalization and legitimate microtargeting are consent-based, transparent, proportionate and do not exploit a vulnerability: self-selected newsletter segments, A/B tests over standard audiences, and aggregated, anonymized regional targeting all personalize without profiling individuals against a weakness. Component 4 crosses the line: it buys in a profile of individual financial distress — inferred sensitive data — and drops a costly offer onto exactly that vulnerability, timed to payday. That is manipulative microtargeting and most likely unlawful (behavioural/profiling under the GDPR, plus unfair-commercial-practice exposure). The test: is the targeting consent-based, transparent, proportionate, and free of exploiting an inferred personal weakness?',
    },
    points: 15,
    primaryTechniqueId: 'microtargeting',
    relatedTechniques: ['microtargeting', 'digital_influence'],
  },
];
