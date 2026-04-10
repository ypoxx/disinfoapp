import type { Exercise } from '../types';

export const fillBlanks: Exercise[] = [
  {
    id: 'fb-1',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ein viraler Post behauptet: "Firma X hat 500 Arbeitsplätze ins Ausland verlagert!" In Wahrheit wurden 50 Stellen in ein Joint Venture überführt. Welche Richtigstellung ist am effektivsten?',
      en: 'A viral post claims: "Company X has relocated 500 jobs abroad!" In reality, 50 positions were transferred into a joint venture. Which correction is most effective?',
    },
    options: [
      {
        de: '50 Stellen wurden im Rahmen eines Joint Ventures mit [Partner] neu strukturiert. Alle Mitarbeiter erhielten Angebote. Details: [Link]',
        en: '50 positions were restructured as part of a joint venture with [Partner]. All employees received offers. Details: [Link]',
      },
      {
        de: 'Das ist falsch! Wir haben keine 500 Arbeitsplätze verlagert!',
        en: 'That is false! We did not relocate 500 jobs!',
      },
      {
        de: 'Wir kommentieren Gerüchte grundsätzlich nicht.',
        en: 'We do not comment on rumors as a matter of principle.',
      },
      {
        de: 'Der Post enthält Falschinformationen und wir behalten uns rechtliche Schritte vor.',
        en: 'The post contains misinformation and we reserve the right to take legal action.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Richtigstellung: (1) Nennt die korrekten Zahlen, (2) erklärt den Kontext, (3) zeigt, dass Mitarbeiter berücksichtigt wurden, (4) bietet Belege via Link. Die anderen Optionen sind defensiv, aggressiv oder uninformativ.',
      en: 'The best correction: (1) States the correct figures, (2) explains the context, (3) shows that employees were considered, (4) provides evidence via a link. The other options are defensive, aggressive, or uninformative.',
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
      en: 'A manipulated quote from your CEO is spreading: "I don\'t care about the environment, profit is all that matters." The real quote was more nuanced. What is your best response?',
    },
    options: [
      {
        de: 'Das vollständige Originalzitat veröffentlichen mit Video/Transkript-Link, sachlich den Kontext erklären',
        en: 'Publish the full original quote with a video/transcript link, and provide factual context',
      },
      {
        de: 'Den CEO ein neues Statement zum Umweltschutz abgeben lassen',
        en: 'Have the CEO issue a new statement on environmental protection',
      },
      {
        de: 'Auf Twitter alle Verbreiter des falschen Zitats markieren und korrigieren',
        en: 'Tag and correct every account spreading the false quote on Twitter',
      },
      {
        de: 'Eine Pressemitteilung mit dem Titel "CEO-Zitat wurde gefälscht" herausgeben',
        en: 'Issue a press release titled "CEO quote was fabricated"',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Primärquelle (Originalvideo/Transkript) ist der stärkste Beweis. Ein neues Statement wirkt wie Schadensbegrenzung. Einzelne Verbreiter zu korrigieren skaliert nicht. "Zitat wurde gefälscht" wiederholt das Falsche (familiarity backfire effect).',
      en: 'The primary source (original video/transcript) is the strongest evidence. A new statement looks like damage control. Correcting individual accounts does not scale. "Quote was fabricated" repeats the falsehood (familiarity backfire effect).',
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
      en: 'Multiple accounts claim: "Company Z\'s new factory is contaminating the groundwater!" Your environmental assessments show the opposite. Which communication strategy is most effective?',
    },
    options: [
      {
        de: 'Proaktiv die Umweltgutachten veröffentlichen, lokale Stakeholder einladen, und unabhängige Experten zu Wort kommen lassen',
        en: 'Proactively publish the environmental assessments, invite local stakeholders, and let independent experts speak',
      },
      {
        de: 'Eine Anzeigenkampagne mit dem Slogan "Wir sind sauber!" starten',
        en: 'Launch an ad campaign with the slogan "We are clean!"',
      },
      {
        de: 'Die Accounts als koordinierte Kampagne entlarven',
        en: 'Expose the accounts as a coordinated campaign',
      },
      {
        de: 'Nur die lokale Presse informieren und hoffen, dass es nicht eskaliert',
        en: 'Only inform the local press and hope it doesn\'t escalate',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparenz + unabhängige Stimmen + lokales Engagement ist die stärkste Kombination. Anzeigenkampagnen wirken als Greenwashing. Das Entlarven kann als Angriff gewertet werden. Nur lokale Presse reicht bei viraler Verbreitung nicht aus.',
      en: 'Transparency + independent voices + local engagement is the strongest combination. Ad campaigns come across as greenwashing. Exposing the accounts can be perceived as an attack. Local press alone is not enough when content has gone viral.',
    },
    points: 15,
    relatedTechniques: ['authority', 'social_proof', 'narrative_persuasion'],
  },
  // --- New exercises for uncovered techniques ---
  {
    id: 'fb-4',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Vor Ihrem Produktlaunch hat ein TV-Sender einen negativen Beitrag über Ihre Branche ausgestrahlt. Die Öffentlichkeit ist bereits negativ geprimt. Welche Kommunikationsstrategie ist am wirksamsten?',
      en: 'Before your product launch, a TV channel aired a negative report about your industry. The public is already negatively primed. Which communication strategy is most effective?',
    },
    options: [
      { de: 'Den Launch verschieben, bis die negative Stimmung abklingt', en: 'Postpone the launch until the negative sentiment fades' },
      { de: 'Den Launch mit eigenen, positiven Vorab-Berichten und transparenten Fakten vorbereiten — eigenes Priming setzen', en: 'Prepare the launch with positive pre-launch stories and transparent facts — set your own priming' },
      { de: 'Den TV-Sender für die Berichterstattung kritisieren', en: 'Criticize the TV channel for their reporting' },
      { de: 'Den Beitrag ignorieren und wie geplant launchen', en: 'Ignore the report and launch as planned' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Gegen negatives Priming hilft eigenes, positives Priming: Vorab-Berichte, Testimonials und transparente Daten setzen einen neuen Anker. Verschieben zeigt Unsicherheit, Kritik am Sender wirkt defensiv, Ignorieren überlässt dem Negativbeitrag die Deutungshoheit.',
      en: 'Against negative priming, your own positive priming helps: Pre-launch stories, testimonials, and transparent data set a new anchor. Postponing shows uncertainty, criticizing the channel looks defensive, ignoring leaves narrative control to the negative report.',
    },
    points: 15,
    relatedTechniques: ['priming'],
  },
  {
    id: 'fb-5',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ein beliebter lokaler Verein hat öffentlich gegen Ihr Unternehmen Position bezogen. Die Community steht emotional hinter dem Verein. Wie reagieren Sie am besten?',
      en: 'A popular local club has publicly taken a position against your company. The community stands emotionally behind the club. How do you best respond?',
    },
    options: [
      { de: 'Den Verein öffentlich kritisieren und Fehler in seiner Argumentation aufzeigen', en: 'Publicly criticize the club and point out flaws in its arguments' },
      { de: 'Den Verein als Partner gewinnen — Dialog anbieten, gemeinsame Interessen finden, lokales Engagement zeigen', en: 'Win the club as a partner — offer dialogue, find common interests, show local engagement' },
      { de: 'Eine eigene PR-Kampagne starten, die den Verein ignoriert', en: 'Launch your own PR campaign that ignores the club' },
      { de: 'Rechtliche Schritte gegen die Aussagen des Vereins prüfen', en: 'Consider legal action against the club\'s statements' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Gegen den Liking-Effekt kämpfen ist sinnlos — den Verein anzugreifen stärkt die Solidarität der Community. Besser: den Liking-Effekt durch Partnerschaft nutzen. Dialog und gemeinsames Engagement können den Verein vom Gegner zum Verbündeten machen.',
      en: 'Fighting the liking effect is futile — attacking the club strengthens community solidarity. Better: leverage the liking effect through partnership. Dialogue and joint engagement can turn the club from opponent to ally.',
    },
    points: 15,
    relatedTechniques: ['liking'],
  },
  {
    id: 'fb-6',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ihre Organisation hat ihre Haltung zu einem Thema geändert. Kritiker nutzen Ihre alten Statements, um Sie als inkonsequent darzustellen. Welche Richtigstellung funktioniert am besten?',
      en: 'Your organization changed its stance on an issue. Critics use your old statements to portray you as inconsistent. Which correction works best?',
    },
    options: [
      { de: 'Die alten Statements als "Zitatfälschung" bezeichnen', en: 'Call the old statements "quote fabrication"' },
      { de: '"Fakten ändern sich — wir passen unsere Haltung an neue Erkenntnisse an." Mit konkretem Zeitstrahl und neuen Daten erklären', en: '"Facts change — we adapt our position to new findings." Explain with a concrete timeline and new data' },
      { de: 'Das Thema wechseln und über aktuelle Erfolge sprechen', en: 'Change the topic and talk about current achievements' },
      { de: 'Die alten Statements einfach löschen', en: 'Simply delete the old statements' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Konsistenz-Vorwürfe mit intellektueller Ehrlichkeit begegnen: "Unsere Position hat sich basierend auf X weiterentwickelt" zeigt Lernfähigkeit statt Schwäche. Altes zu löschen oder abzustreiten untergräbt die Glaubwürdigkeit weiter.',
      en: 'Counter consistency accusations with intellectual honesty: "Our position evolved based on X" shows adaptability rather than weakness. Deleting or denying the past further undermines credibility.',
    },
    points: 15,
    relatedTechniques: ['consistency'],
  },
  {
    id: 'fb-7',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Eine falsche Behauptung über Ihr Produkt ("enthält schädliche Chemikalien") wurde bereits dreimal widerlegt, taucht aber alle paar Monate wieder auf und wird jedes Mal geglaubt. Welche Langzeitstrategie ist am wirksamsten?',
      en: 'A false claim about your product ("contains harmful chemicals") has been debunked three times, but resurfaces every few months and is believed each time. Which long-term strategy is most effective?',
    },
    options: [
      { de: 'Eine permanente, SEO-optimierte Faktencheck-Seite mit allen Laborberichten erstellen, die bei jeder Suchanfrage erscheint', en: 'Create a permanent, SEO-optimized fact-check page with all lab reports that appears for every search query' },
      { de: 'Jedes Mal ein neues Statement veröffentlichen', en: 'Publish a new statement each time' },
      { de: 'Die Behauptung juristisch verfolgen', en: 'Pursue the claim legally' },
      { de: 'Nicht mehr reagieren — die Leute werden es irgendwann vergessen', en: 'Stop responding — people will eventually forget' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Illusory Truth Effect bedeutet: Wiederholte Falschbehauptungen werden geglaubt, weil sie vertraut klingen. Die Gegenmaßnahme muss ebenso dauerhaft sein: Eine SEO-optimierte Seite erreicht Suchende genau dann, wenn sie nach dem Thema suchen.',
      en: 'The illusory truth effect means: Repeated false claims are believed because they sound familiar. The counter-measure must be equally permanent: An SEO-optimized page reaches searchers exactly when they look for the topic.',
    },
    points: 15,
    relatedTechniques: ['illusory_truth_effect', 'repetition'],
  },
  {
    id: 'fb-8',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Sie bemerken, dass ein Vendor in seiner Präsentation vor Ihrem Vorstand subtile Embedded Commands nutzt ("Sie werden ERKENNEN, dass eine SOFORTIGE ENTSCHEIDUNG der beste Weg ist"). Wie gehen Sie vor?',
      en: 'You notice a vendor using subtle embedded commands in their presentation to your board ("You will REALIZE that an IMMEDIATE DECISION is the best path forward"). How do you proceed?',
    },
    options: [
      { de: 'Die Technik sofort öffentlich im Meeting ansprechen', en: 'Immediately call out the technique publicly in the meeting' },
      { de: 'Eine Pause beantragen und den Vorstand unter vier Augen auf die Manipulationstechnik hinweisen, dann eine faktenbasierte Entscheidung fordern', en: 'Request a break and privately inform the board about the manipulation technique, then demand a fact-based decision' },
      { de: 'Nichts sagen und hoffen, dass der Vorstand es selbst bemerkt', en: 'Say nothing and hope the board notices on its own' },
      { de: 'Den Vendor sofort aus dem Meeting werfen', en: 'Immediately remove the vendor from the meeting' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Diskret aber effektiv: Eine Pause gibt dem Vorstand die Möglichkeit, die Technik zu erkennen, ohne den Vendor öffentlich bloßzustellen (was die Geschäftsbeziehung zerstören könnte). Danach eine faktenbasierte Entscheidung ohne Zeitdruck fordern.',
      en: 'Discreet but effective: A break gives the board the opportunity to recognize the technique without publicly embarrassing the vendor (which could destroy the business relationship). Then demand a fact-based decision without time pressure.',
    },
    points: 15,
    relatedTechniques: ['embedded_commands'],
  },
  {
    id: 'fb-9',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Ihre Unternehmens-App wird von Verbraucherschützern wegen Dark Patterns kritisiert (versteckter Abo-Button, schwer zu findende Kündigung). Wie kommunizieren Sie die Überarbeitung am besten?',
      en: 'Your company app is criticized by consumer advocates for dark patterns (hidden subscription button, hard-to-find cancellation). How do you best communicate the redesign?',
    },
    options: [
      { de: 'Ein transparentes Blog-Post mit Vorher/Nachher-Screenshots, einer Entschuldigung und einem klaren Zeitplan für die Verbesserungen', en: 'A transparent blog post with before/after screenshots, an apology, and a clear timeline for improvements' },
      { de: 'Die Änderungen still einführen, ohne die Kritik zu erwähnen', en: 'Quietly introduce the changes without mentioning the criticism' },
      { de: 'Die Kritiker als "unfair" bezeichnen und darauf hinweisen, dass die App legal ist', en: 'Call the critics "unfair" and point out that the app is legal' },
      { de: 'Eine neue Marketing-Kampagne starten, um vom Thema abzulenken', en: 'Launch a new marketing campaign to distract from the topic' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Transparente Selbstkorrektur ist die stärkste Antwort auf Dark-Pattern-Vorwürfe. Vorher/Nachher-Vergleiche zeigen konkrete Verbesserungen, die Entschuldigung zeigt Verantwortungsbewusstsein, der Zeitplan zeigt Verbindlichkeit.',
      en: 'Transparent self-correction is the strongest response to dark pattern accusations. Before/after comparisons show concrete improvements, the apology shows accountability, the timeline shows commitment.',
    },
    points: 15,
    relatedTechniques: ['dark_patterns'],
  },
  {
    id: 'fb-10',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Ein Deepfake-Audio mit der Stimme Ihres Vorstandsvorsitzenden kursiert, in dem er angeblich Insiderhandel gesteht. Die Aufnahme klingt täuschend echt. Wie reagieren Sie?',
      en: 'A deepfake audio with your CEO\'s voice is circulating, in which he allegedly confesses to insider trading. The recording sounds deceptively real. How do you respond?',
    },
    options: [
      { de: 'Innerhalb von 2 Stunden: Offizielles Dementi mit Alibibibeweis, Audio-Forensik beauftragen, BaFin proaktiv informieren', en: 'Within 2 hours: Official denial with alibi evidence, commission audio forensics, proactively inform financial regulators' },
      { de: 'Die Aufnahme ignorieren — sie wird sich als Fake herausstellen', en: 'Ignore the recording — it will turn out to be fake' },
      { de: 'Eine Pressekonferenz für den nächsten Tag einberufen', en: 'Schedule a press conference for the next day' },
      { de: 'Nur eine schriftliche Pressemitteilung herausgeben', en: 'Only issue a written press release' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Synthetic Media zählt Geschwindigkeit: Jede Stunde ohne Dementi festigt die Falschdarstellung. Alibibibeweise (CEO war zu dem Zeitpunkt in Meeting X), forensische Analyse UND proaktive Regulator-Information sind die Dreifachstrategie gegen Deepfake-Attacken auf Finanzebene.',
      en: 'With synthetic media, speed is critical: Every hour without denial reinforces the false narrative. Alibi evidence (CEO was in meeting X at that time), forensic analysis AND proactive regulator information form the triple strategy against deepfake attacks at the financial level.',
    },
    points: 15,
    relatedTechniques: ['synthetic_media'],
  },
  {
    id: 'fb-11',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ein Konkurrent behauptet in seiner Werbung: "Produkt X ist bis zu 99% wirksam!" Die Formulierung "bis zu" macht die Aussage praktisch bedeutungslos. Wie machen Sie Ihre Kunden darauf aufmerksam?',
      en: 'A competitor claims in its advertising: "Product X is up to 99% effective!" The phrase "up to" makes the statement practically meaningless. How do you make your customers aware?',
    },
    options: [
      { de: 'Eine sachliche Infografik erstellen: "Was \'bis zu 99%\' wirklich bedeutet" — mit realen Durchschnittswerten und Ihren eigenen, konkreten Daten daneben', en: 'Create a factual infographic: "What \'up to 99%\' really means" — with real average values and your own concrete data alongside' },
      { de: 'Den Konkurrenten öffentlich als Lügner bezeichnen', en: 'Publicly call the competitor a liar' },
      { de: 'Die gleiche vage Formulierung für Ihr eigenes Produkt verwenden', en: 'Use the same vague phrasing for your own product' },
      { de: 'Eine Beschwerde bei der Werbebehörde einreichen', en: 'File a complaint with the advertising authority' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Äquivokation mit Bildung begegnen: Kunden zeigen, wie vage Formulierungen ("bis zu") funktionieren, ist wirksamer als Angriffe. Die eigenen konkreten Daten danebenzustellen stärkt die Glaubwürdigkeit. Eine Beschwerde kann ergänzend sinnvoll sein, aber dauert Monate.',
      en: 'Counter equivocation with education: Showing customers how vague phrases ("up to") work is more effective than attacks. Presenting your own concrete data alongside strengthens credibility. A complaint can be supplementary but takes months.',
    },
    points: 15,
    relatedTechniques: ['equivocation'],
  },
  {
    id: 'fb-12',
    type: 'fill-blank',
    difficulty: 'advanced',
    question: {
      de: 'Mehrere manipulierte Fotos zeigen angebliche Umweltschäden durch Ihr Werk — in Wahrheit zeigen die Bilder eine ganz andere Fabrik in einem anderen Land. Die Fotos gehen viral. Was tun Sie?',
      en: 'Several manipulated photos allegedly show environmental damage from your plant — in reality, the images show a completely different factory in another country. The photos go viral. What do you do?',
    },
    options: [
      { de: 'Reverse-Image-Search-Ergebnisse veröffentlichen, die den wahren Ursprung zeigen, plus eigene, aktuelle Fotos des Werks mit Zeitstempel', en: 'Publish reverse image search results showing the true origin, plus your own current photos of the plant with timestamps' },
      { de: 'Eine allgemeine Stellungnahme veröffentlichen: "Die Bilder sind falsch"', en: 'Publish a general statement: "The images are false"' },
      { de: 'Eigene, geschönte Bilder des Werks verbreiten', en: 'Spread your own retouched images of the plant' },
      { de: 'Die Bilder ignorieren und auf Ihre Umweltzertifikate verweisen', en: 'Ignore the images and reference your environmental certificates' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Visuelle Manipulation mit visuellen Beweisen widerlegen: Reverse-Image-Search zeigt den wahren Ursprung. Eigene, mit Zeitstempel versehene Fotos sind die stärkste Gegenmaßnahme. "Die Bilder sind falsch" ohne Beweis wirkt unglaubwürdig.',
      en: 'Counter visual manipulation with visual evidence: Reverse image search shows the true origin. Your own timestamped photos are the strongest counter-measure. "The images are false" without evidence lacks credibility.',
    },
    points: 15,
    relatedTechniques: ['visual_manipulation', 'synthetic_media'],
  },
  {
    id: 'fb-13',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Ihr Team plant eine Kampagne zur Organspende-Bereitschaft. Wie setzen Sie Nudging ethisch ein, ohne manipulativ zu wirken?',
      en: 'Your team is planning a campaign to increase organ donation willingness. How do you use nudging ethically without being manipulative?',
    },
    options: [
      { de: 'Opt-out als Standard vorschlagen (Widerspruchslösung), transparent erklären warum, und einen einfachen Widerspruchsprozess sicherstellen', en: 'Propose opt-out as default (presumed consent), transparently explain why, and ensure a simple objection process' },
      { de: 'Schockierende Bilder von Patienten zeigen, die auf Organe warten', en: 'Show shocking images of patients waiting for organs' },
      { de: 'Soziale Ächtung von Nicht-Spendern fördern', en: 'Promote social shaming of non-donors' },
      { de: 'Fake-Statistiken über Organspende-Raten verbreiten', en: 'Spread fake statistics about organ donation rates' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ethisches Nudging: Opt-out-Defaults sind die wirksamste und ethisch vertretbarste Methode (Organspende steigt um bis zu 60% in Opt-out-Ländern). Entscheidend: Transparenz über den Default und einfacher Widerspruch. Schock, Ächtung und Fälschung sind manipulativ, nicht Nudging.',
      en: 'Ethical nudging: Opt-out defaults are the most effective and ethically justifiable method (organ donation increases by up to 60% in opt-out countries). Key: Transparency about the default and easy objection. Shock, shaming, and fabrication are manipulative, not nudging.',
    },
    points: 15,
    relatedTechniques: ['nudging'],
  },
];
