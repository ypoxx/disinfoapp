import type { Exercise } from '../types';

export const spotTheFlags: Exercise[] = [
  {
    id: 'sf-1',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Post? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this post? (Multiple choice)',
    },
    scenario: {
      de: '⚠️ SCHOCKIEREND: Geheime Dokumente BEWEISEN, dass die Regierung uns belogen hat! Die Mainstream-Medien WEIGERN sich, darüber zu berichten! TEILE diesen Post, bevor er ZENSIERT wird! 🚨',
      en: '⚠️ SHOCKING: Secret documents PROVE the government has been lying to us! The mainstream media REFUSE to report on it! SHARE this post before it gets CENSORED! 🚨',
    },
    options: [
      {
        de: 'Emotionale/reißerische Sprache (SCHOCKIEREND, BEWEISEN)',
        en: 'Emotional/sensationalist language (SHOCKING, PROVE)',
      },
      {
        de: 'Anti-Medien-Narrativ ("Mainstream-Medien weigern sich")',
        en: 'Anti-media narrative ("mainstream media refuse")',
      },
      {
        de: 'Dringlichkeitsappell ("bevor er zensiert wird")',
        en: 'Urgency appeal ("before it gets censored")',
      },
      {
        de: 'Keine konkreten Quellenangaben',
        en: 'No concrete source references',
      },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind Überzeugungstechniken! Dieser Post kombiniert emotionale Manipulation, Verschwörungsnarrative, künstliche Dringlichkeit und fehlende Belege — ein Lehrbuchbeispiel für manipulative Kommunikation.',
      en: 'All four are persuasion techniques! This post combines emotional manipulation, conspiracy narratives, artificial urgency, and lack of evidence — a textbook example of manipulative communication.',
    },
    points: 20,
    relatedTechniques: ['emotional_appeal', 'scarcity', 'reactance_theory'],
  },
  {
    id: 'sf-2',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Pressemitteilung? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this press release? (Multiple choice)',
    },
    scenario: {
      de: 'Pressemitteilung: "CleanTech Solutions GmbH ist Marktführer bei grüner Technologie. Laut einer von uns beauftragten Studie sind 95% der Kunden zufrieden. Im Vergleich zu vor 5 Jahren haben wir den CO2-Ausstoß um 60% reduziert."',
      en: 'Press release: "CleanTech Solutions GmbH is the market leader in green technology. According to a study we commissioned, 95% of customers are satisfied. Compared to 5 years ago, we have reduced CO2 emissions by 60%."',
    },
    options: [
      {
        de: 'Selbstbeauftragte Studie (Interessenkonflikt)',
        en: 'Self-commissioned study (conflict of interest)',
      },
      {
        de: 'Unklarer Vergleichszeitraum für CO2-Reduktion',
        en: 'Unclear comparison period for CO2 reduction',
      },
      {
        de: 'Keine unabhängige Bestätigung für "Marktführer"-Claim',
        en: 'No independent verification for "market leader" claim',
      },
      {
        de: 'Sachlicher Ton ohne emotionale Sprache',
        en: 'Neutral tone without emotional language',
      },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Die ersten drei sind Überzeugungstechniken: Selbstbeauftragte Studien haben einen Interessenkonflikt, "vor 5 Jahren" ist vage (warum genau dieser Zeitraum?), und "Marktführer" wird ohne Definition oder Beleg behauptet. Der sachliche Ton (Option 4) ist keine Überzeugungstechnik.',
      en: 'The first three are persuasion techniques: Self-commissioned studies carry a conflict of interest, "5 years ago" is vague (why that specific period?), and "market leader" is claimed without definition or evidence. The neutral tone (option 4) is not a persuasion technique.',
    },
    points: 20,
    relatedTechniques: ['authority', 'framing', 'anchoring'],
  },
  {
    id: 'sf-3',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem LinkedIn-Post? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this LinkedIn post? (Multiple choice)',
    },
    scenario: {
      de: 'LinkedIn-Post von einem "Change Management Berater": "Ich habe gerade gehört, dass Firma XYZ massive Entlassungen plant. Ein Freund in der Personalabteilung hat mir das vertraulich bestätigt. Wer dort arbeitet, sollte sich schon mal umsehen. #XYZEntlassungen #InsiderWissen"',
      en: 'LinkedIn post from a "change management consultant": "I just heard that Company XYZ is planning massive layoffs. A friend in HR confirmed this to me confidentially. Anyone working there should start looking around. #XYZLayoffs #InsiderKnowledge"',
    },
    options: [
      {
        de: 'Unverifizierbarer "Insider" als Quelle',
        en: 'Unverifiable "insider" as a source',
      },
      {
        de: 'Hashtag-Kampagne deutet auf Agenda hin',
        en: 'Hashtag campaign suggests an agenda',
      },
      {
        de: 'Potenzielle Marktmanipulation (Aktienkurs)',
        en: 'Potential market manipulation (stock price)',
      },
      {
        de: 'Vertrauliche Information wird öffentlich geteilt',
        en: 'Confidential information being shared publicly',
      },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier sind problematisch: Anonyme "Insider"-Quellen sind nicht verifizierbar, gezielte Hashtags können koordinierte Kampagnen starten, unbelegte Entlassungsgerüchte können Aktienkurse beeinflussen (Marktmanipulation), und das Teilen "vertraulicher" Informationen ist ethisch fragwürdig.',
      en: 'All four are problematic: Anonymous "insider" sources are unverifiable, targeted hashtags can launch coordinated campaigns, unsubstantiated layoff rumors can influence stock prices (market manipulation), and sharing "confidential" information is ethically questionable.',
    },
    points: 20,
    relatedTechniques: ['authority', 'social_proof', 'digital_influence'],
  },
  // --- New exercises for uncovered techniques ---
  {
    id: 'sf-4',
    type: 'spot-the-flag',
    difficulty: 'beginner',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Instagram-Post? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this Instagram post? (Multiple choice)',
    },
    scenario: {
      de: 'Influencerin (@LifestyleLisa, 800k Follower): "Ich LIEBE dieses neue Serum von GlowCorp! 💕 Es hat mein Hautbild komplett verändert. Wisch nach rechts für meinen exklusiven 20%-Rabattcode! Nur noch bis Freitag gültig! PS: Die Firma hat mir das Produkt geschenkt, aber meine Meinung ist 100% ehrlich!"',
      en: 'Influencer (@LifestyleLisa, 800k followers): "I LOVE this new serum from GlowCorp! 💕 It completely transformed my skin. Swipe right for my exclusive 20% discount code! Only valid until Friday! PS: The company gifted me this product, but my opinion is 100% honest!"',
    },
    options: [
      { de: 'Liking-Effekt (beliebte Influencerin als Empfehlerin)', en: 'Liking effect (popular influencer as endorser)' },
      { de: 'Reziprozität (Geschenk → positive Bewertung)', en: 'Reciprocity (gift → positive review)' },
      { de: 'Künstliche Knappheit ("nur bis Freitag")', en: 'Artificial scarcity ("only until Friday")' },
      { de: 'Sachliche Produktbewertung basierend auf Inhaltsstoffen', en: 'Factual product review based on ingredients' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Techniken: (1) Liking — die beliebte Influencerin überträgt Sympathie auf das Produkt. (2) Reziprozität — trotz "ehrlicher Meinung" erzeugt das Geschenk unbewusste Verpflichtung. (3) Knappheit — der zeitlich begrenzte Code erzeugt Kaufdruck. Option 4 ist keine Manipulation — sachliche Bewertungen wären ein Positivsignal.',
      en: 'Three techniques: (1) Liking — the popular influencer transfers sympathy to the product. (2) Reciprocity — despite "honest opinion," the gift creates unconscious obligation. (3) Scarcity — the time-limited code creates purchase pressure. Option 4 is not manipulation — factual reviews would be a positive sign.',
    },
    points: 20,
    relatedTechniques: ['liking', 'reciprocity', 'scarcity'],
  },
  {
    id: 'sf-5',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem politischen Debattenbeitrag? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this political debate contribution? (Multiple choice)',
    },
    scenario: {
      de: 'Politiker in einer TV-Debatte: "Mein Gegner, der ja bekanntlich seine Steuererklärung dreimal korrigieren musste, behauptet, er wolle die Wirtschaft regulieren. In Wahrheit will er alle Unternehmen verstaatlichen und unsere Freiheit abschaffen!"',
      en: 'Politician in a TV debate: "My opponent, who famously had to correct his tax return three times, claims he wants to regulate the economy. In reality, he wants to nationalize all businesses and abolish our freedom!"',
    },
    options: [
      { de: 'Ad Hominem (persönlicher Angriff über Steuererklärung)', en: 'Ad hominem (personal attack about tax return)' },
      { de: 'Strohmann (Regulierung → Verstaatlichung)', en: 'Straw man (regulation → nationalization)' },
      { de: 'Falsche Dichotomie (Regulierung = Freiheitsverlust)', en: 'False dichotomy (regulation = loss of freedom)' },
      { de: 'Sachliche Kritik an der Wirtschaftspolitik', en: 'Factual criticism of economic policy' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Dreifach-Manipulation: (1) Ad Hominem — die Steuerkorrektur ist irrelevant für Wirtschaftspolitik. (2) Strohmann — "regulieren" wird zu "verstaatlichen" verzerrt. (3) Falsche Dichotomie — Regulierung wird mit dem Verlust aller Freiheit gleichgesetzt. Option 4 fehlt komplett — es gibt keine sachliche Auseinandersetzung.',
      en: 'Triple manipulation: (1) Ad hominem — the tax correction is irrelevant to economic policy. (2) Straw man — "regulate" is distorted to "nationalize." (3) False dichotomy — regulation is equated with the loss of all freedom. Option 4 is completely absent — there is no factual engagement.',
    },
    points: 20,
    relatedTechniques: ['ad_hominem', 'straw_man', 'false_dichotomy'],
  },
  {
    id: 'sf-6',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Werbeanzeige? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this advertisement? (Multiple choice)',
    },
    scenario: {
      de: 'Werbung für ein Nahrungsergänzungsmittel: "NeuroBoost — klinisch getestet! 9 von 10 Kunden berichten von mehr Energie. Mit rein natürlichen Inhaltsstoffen. Jetzt testen — risikofrei! Unser SPIEGEL-Bestseller-Autor Dr. Weber empfiehlt es."',
      en: 'Ad for a dietary supplement: "NeuroBoost — clinically tested! 9 out of 10 customers report more energy. With purely natural ingredients. Try it now — risk-free! Our SPIEGEL bestselling author Dr. Weber recommends it."',
    },
    options: [
      { de: 'Äquivokation ("klinisch getestet" ≠ klinisch bewiesen)', en: 'Equivocation ("clinically tested" ≠ clinically proven)' },
      { de: 'Sozialer Beweis ("9 von 10 Kunden")', en: 'Social proof ("9 out of 10 customers")' },
      { de: 'Falsche Autorität (Bestseller-Autor ≠ medizinischer Experte)', en: 'False authority (bestselling author ≠ medical expert)' },
      { de: 'Transparente Angabe der Inhaltsstoffe', en: 'Transparent disclosure of ingredients' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Techniken: (1) Äquivokation — "getestet" suggeriert Wirksamkeit, ohne sie zu belegen. (2) Social Proof — "9 von 10" klingt beeindruckend, aber wer sind diese Kunden? Wie groß war die Stichprobe? (3) Falsche Autorität — ein Bestseller-Autor ist keine medizinische Fachautorität. Option 4 wäre positiv, ist hier aber nicht gegeben.',
      en: 'Three techniques: (1) Equivocation — "tested" suggests efficacy without proving it. (2) Social proof — "9 out of 10" sounds impressive, but who are these customers? How large was the sample? (3) False authority — a bestselling author is not a medical expert. Option 4 would be positive but is not present here.',
    },
    points: 20,
    relatedTechniques: ['equivocation', 'social_proof', 'authority'],
  },
  {
    id: 'sf-7',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Verkaufs-Webinar? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this sales webinar? (Multiple choice)',
    },
    scenario: {
      de: 'Webinar-Moderator: "Ich weiß, dass Sie alle hart arbeiten und trotzdem das Gefühl haben, nicht voranzukommen. Das ist frustrierend, oder? Viele von Ihnen suchen nach einem Ausweg. Und genau DAS ist der Grund, warum Sie JETZT HANDELN sollten. Mein Premium-Kurs — normalerweise 2.997€ — ist nur HEUTE für 497€ verfügbar. Nur noch 7 Plätze!"',
      en: 'Webinar host: "I know you all work hard and still feel like you\'re not getting ahead. That\'s frustrating, right? Many of you are looking for a way out. And THAT is exactly why you should ACT NOW. My premium course — normally €2,997 — is available TODAY ONLY for €497. Only 7 spots left!"',
    },
    options: [
      { de: 'Pacing & Leading (erst Mitfühlen, dann Lenken)', en: 'Pacing & leading (first empathize, then direct)' },
      { de: 'Embedded Commands ("JETZT HANDELN")', en: 'Embedded commands ("ACT NOW")' },
      { de: 'Anchoring (2.997€ als Anker für 497€)', en: 'Anchoring (€2,997 as anchor for €497)' },
      { de: 'Künstliche Knappheit ("nur 7 Plätze")', en: 'Artificial scarcity ("only 7 spots")' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier! (1) Pacing & Leading — "Ich weiß, dass Sie frustriert sind" spiegelt die Realität, bevor zum Kauf gelenkt wird. (2) Embedded Commands — "JETZT HANDELN" ist eine versteckte Anweisung. (3) Anchoring — der "Normalpreis" 2.997€ lässt 497€ wie ein Schnäppchen erscheinen. (4) Knappheit — "nur 7 Plätze" erzeugt FOMO.',
      en: 'All four! (1) Pacing & leading — "I know you\'re frustrated" mirrors reality before steering toward the purchase. (2) Embedded commands — "ACT NOW" is a hidden directive. (3) Anchoring — the "normal price" of €2,997 makes €497 seem like a bargain. (4) Scarcity — "only 7 spots" creates FOMO.',
    },
    points: 20,
    relatedTechniques: ['pacing_and_leading', 'embedded_commands', 'anchoring', 'scarcity'],
  },
  {
    id: 'sf-8',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Wahlkampf-Strategie? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this campaign strategy? (Multiple choice)',
    },
    scenario: {
      de: 'Ein Wahlkampfteam veröffentlicht auf verschiedenen Plattformen unterschiedliche Botschaften: Auf TikTok Videos zu Klimaschutz, auf Facebook Anzeigen zu Renten, auf lokalen Nachrichtenseiten Werbung gegen Kriminalität. Dazu werden gezielt Bot-Accounts eingesetzt, die die Beiträge als "echte Bürger" kommentieren.',
      en: 'A campaign team publishes different messages on different platforms: TikTok videos on climate protection, Facebook ads on pensions, ads against crime on local news sites. Additionally, bot accounts are deployed to comment on posts as "real citizens."',
    },
    options: [
      { de: 'Microtargeting (plattformspezifische Zielgruppenansprache)', en: 'Microtargeting (platform-specific audience targeting)' },
      { de: 'Digitale Einflussnahme (Bot-Accounts als "echte Bürger")', en: 'Digital influence (bot accounts as "real citizens")' },
      { de: 'Konsistente, transparente Kommunikation', en: 'Consistent, transparent communication' },
      { de: 'Sozialer Beweis (falsche "Bürger"-Kommentare)', en: 'Social proof (fake "citizen" comments)' },
    ],
    correctAnswers: [0, 1, 3],
    explanation: {
      de: 'Drei Techniken: (1) Microtargeting — verschiedene Zielgruppen erhalten verschiedene Botschaften. (2) Digitale Einflussnahme — Bot-Netzwerke simulieren Graswurzelbewegungen (Astroturfing). (3) Falscher Social Proof — Fake-Kommentare erzeugen den Eindruck breiter Zustimmung. Option 3 ist das Gegenteil — die Kommunikation ist weder konsistent noch transparent.',
      en: 'Three techniques: (1) Microtargeting — different audiences receive different messages. (2) Digital influence — bot networks simulate grassroots movements (astroturfing). (3) False social proof — fake comments create the impression of broad agreement. Option 3 is the opposite — the communication is neither consistent nor transparent.',
    },
    points: 20,
    relatedTechniques: ['microtargeting', 'digital_influence', 'social_proof'],
  },
  {
    id: 'sf-9',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Online-Shop-Design? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this online shop design? (Multiple choice)',
    },
    scenario: {
      de: 'Ein Online-Shop zeigt: (1) Durchgestrichener "Original-Preis" von 199€, daneben der "Sale-Preis" 49€. (2) Pop-up: "Sarah aus München hat gerade dieses Produkt gekauft!" (3) Countdown-Timer: "Angebot endet in 02:34:12". (4) Der "Kaufen"-Button ist groß und grün, der "Mehr Infos"-Link ist klein und grau.',
      en: 'An online shop shows: (1) Crossed-out "original price" of €199, next to the "sale price" €49. (2) Pop-up: "Sarah from Munich just bought this product!" (3) Countdown timer: "Offer ends in 02:34:12". (4) The "Buy" button is large and green, the "More Info" link is small and grey.',
    },
    options: [
      { de: 'Anchoring (199€ als Preisanker)', en: 'Anchoring (€199 as price anchor)' },
      { de: 'Dark Patterns (asymmetrisches Button-Design)', en: 'Dark patterns (asymmetric button design)' },
      { de: 'Falsche Knappheit (Countdown-Timer)', en: 'False scarcity (countdown timer)' },
      { de: 'Falscher Social Proof (Fake-Kaufbenachrichtigung)', en: 'False social proof (fake purchase notification)' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier: (1) Anchoring — der überhöhte Ursprungspreis lässt den Sale-Preis als Schnäppchen erscheinen. (2) Dark Patterns — das asymmetrische Design drängt zum Kauf, nicht zur Information. (3) Falsche Knappheit — der Countdown erzeugt künstliche Dringlichkeit. (4) Falscher Social Proof — "Sarah aus München" ist vermutlich generiert.',
      en: 'All four: (1) Anchoring — the inflated original price makes the sale price appear as a bargain. (2) Dark patterns — the asymmetric design pushes toward buying, not toward information. (3) False scarcity — the countdown creates artificial urgency. (4) False social proof — "Sarah from Munich" is likely generated.',
    },
    points: 20,
    relatedTechniques: ['anchoring', 'dark_patterns', 'scarcity', 'social_proof'],
  },
  {
    id: 'sf-10',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in diesem Nachrichtenartikel? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this news article? (Multiple choice)',
    },
    scenario: {
      de: 'Überschrift: "ALARMIERENDE Studie: Handystrahlung könnte gefährlich sein!" Dazu ein bearbeitetes Bild, das ein Handy mit rot glühender Strahlung zeigt. Im Artikel: "Manche Experten vermuten...", "Es könnte sein, dass...", "Studien deuten darauf hin..." Keine einzige konkrete Studie wird zitiert.',
      en: 'Headline: "ALARMING study: Cell phone radiation could be dangerous!" Accompanied by an edited image showing a phone with red-glowing radiation. In the article: "Some experts suspect...", "It could be that...", "Studies suggest..." Not a single specific study is cited.',
    },
    options: [
      { de: 'Visuelle Manipulation (bearbeitetes Bild mit roter "Strahlung")', en: 'Visual manipulation (edited image with red "radiation")' },
      { de: 'Äquivokation (vage Sprache: "könnte", "vermuten", "deuten")', en: 'Equivocation (vague language: "could", "suspect", "suggest")' },
      { de: 'Emotionaler Appell ("ALARMIERENDE")', en: 'Emotional appeal ("ALARMING")' },
      { de: 'Konkrete Quellenangaben und Peer-Review', en: 'Concrete source citations and peer review' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Techniken: (1) Visuelle Manipulation — das bearbeitete Bild suggeriert Gefahr, die physikalisch so nicht existiert. (2) Äquivokation — durch Hedge-Wörter ("könnte", "vermuten") wird nichts Konkretes behauptet, aber Angst geschürt. (3) Emotionaler Appell — "ALARMIERENDE" triggert Angst. Option 4 fehlt komplett — es gibt keine Quellen.',
      en: 'Three techniques: (1) Visual manipulation — the edited image suggests danger that does not physically exist this way. (2) Equivocation — through hedge words ("could", "suspect"), nothing concrete is claimed, but fear is stoked. (3) Emotional appeal — "ALARMING" triggers fear. Option 4 is completely absent — there are no sources.',
    },
    points: 20,
    relatedTechniques: ['visual_manipulation', 'equivocation', 'emotional_appeal'],
  },
  {
    id: 'sf-11',
    type: 'spot-the-flag',
    difficulty: 'advanced',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Spendenkampagne? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this donation campaign? (Multiple choice)',
    },
    scenario: {
      de: '"Kleine Aisha (7) aus Syrien hat alles verloren. Ohne Ihre Hilfe wird sie den Winter nicht überleben. Bereits 50.000 Menschen haben gespendet. Sie haben letztes Jahr 20€ gegeben — können Sie dieses Jahr 30€ geben? Jede Spende zählt — handeln Sie JETZT."',
      en: '"Little Aisha (7) from Syria has lost everything. Without your help, she won\'t survive the winter. Already 50,000 people have donated. You gave €20 last year — can you give €30 this year? Every donation counts — act NOW."',
    },
    options: [
      { de: 'Narrative Überzeugung (persönliche Geschichte von Aisha)', en: 'Narrative persuasion (personal story of Aisha)' },
      { de: 'Konsistenz ("letztes Jahr 20€ → dieses Jahr 30€")', en: 'Consistency ("€20 last year → €30 this year")' },
      { de: 'Sozialer Beweis ("50.000 haben gespendet")', en: 'Social proof ("50,000 have donated")' },
      { de: 'Konkrete, nachprüfbare Mittelverwendung', en: 'Concrete, verifiable use of funds' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Techniken: (1) Narrative Überzeugung — die persönliche Geschichte von Aisha erzeugt emotionale Verbindung und Dringlichkeit. (2) Konsistenz — die Erinnerung an die letzte Spende plus Steigerung nutzt den Wunsch nach konsistentem Verhalten. (3) Social Proof — die hohe Spenderzahl normalisiert das Spenden. Option 4 fehlt — wohin das Geld genau geht, wird nicht erklärt.',
      en: 'Three techniques: (1) Narrative persuasion — Aisha\'s personal story creates emotional connection and urgency. (2) Consistency — the reminder of last year\'s donation plus increase leverages the desire for consistent behavior. (3) Social proof — the high donor count normalizes giving. Option 4 is missing — where exactly the money goes is not explained.',
    },
    points: 20,
    relatedTechniques: ['narrative_persuasion', 'consistency', 'social_proof'],
  },
  {
    id: 'sf-12',
    type: 'spot-the-flag',
    difficulty: 'expert',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Produktbewertung? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this product review? (Multiple choice)',
    },
    scenario: {
      de: 'Amazon-Bewertung (5 Sterne): "Ich war skeptisch, aber dieses Produkt hat mein Leben verändert! Bestelle es am besten SOFORT — es war letzte Woche ausverkauft und könnte es wieder sein. Der Verkäufer hat mir nach meiner Beschwerde kostenlos ein zweites Exemplar geschickt, also gebe ich gerne 5 Sterne." (Analyse: Bewertung wurde 3 Stunden nach Kauf geschrieben, Textmuster ähnelt 200 anderen Bewertungen desselben Verkäufers)',
      en: 'Amazon review (5 stars): "I was skeptical, but this product changed my life! Better order IMMEDIATELY — it was sold out last week and could be again. The seller sent me a free second copy after my complaint, so I\'m happy to give 5 stars." (Analysis: Review was written 3 hours after purchase, text pattern matches 200 other reviews from the same seller)',
    },
    options: [
      { de: 'KI-generierte Bewertung (Textmuster, unrealistischer Zeitrahmen)', en: 'AI-generated review (text pattern, unrealistic timeframe)' },
      { de: 'Reziprozität (Gratis-Exemplar → 5 Sterne)', en: 'Reciprocity (free copy → 5 stars)' },
      { de: 'Künstliche Knappheit ("letzte Woche ausverkauft")', en: 'Artificial scarcity ("sold out last week")' },
      { de: 'Embedded Command ("bestelle es am besten SOFORT")', en: 'Embedded command ("better order IMMEDIATELY")' },
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: {
      de: 'Alle vier: (1) KI-Verdacht — 200 ähnliche Bewertungen und 3 Stunden nach Kauf deuten auf generierte Inhalte. (2) Reziprozität — das kostenlose Exemplar verpflichtet zur positiven Bewertung. (3) Knappheit — "ausverkauft" erzeugt FOMO. (4) Embedded Command — "SOFORT bestellen" ist eine versteckte Handlungsaufforderung.',
      en: 'All four: (1) AI suspicion — 200 similar reviews and 3 hours after purchase suggest generated content. (2) Reciprocity — the free copy obligates a positive review. (3) Scarcity — "sold out" creates FOMO. (4) Embedded command — "order IMMEDIATELY" is a hidden call to action.',
    },
    points: 20,
    relatedTechniques: ['ai_persuasion', 'reciprocity', 'scarcity', 'embedded_commands'],
  },
  {
    id: 'sf-13',
    type: 'spot-the-flag',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Überzeugungstechniken stecken in dieser Infografik? (Mehrfachauswahl)',
      en: 'Which persuasion techniques are used in this infographic? (Multiple choice)',
    },
    scenario: {
      de: 'Eine Infografik eines Wirtschaftsverbands zeigt: Ein Balkendiagramm, das bei 95% statt 0% beginnt (winzige Unterschiede wirken riesig). Überschrift: "DRASTISCHER Rückgang der Branchengewinne!" Unterschrift: "Unsere 500 Mitgliedsunternehmen bestätigen den Trend." Die Y-Achse zeigt einen Rückgang von 97,2% auf 96,8%.',
      en: 'An infographic from an industry association shows: A bar chart starting at 95% instead of 0% (tiny differences look massive). Headline: "DRASTIC decline in industry profits!" Caption: "Our 500 member companies confirm the trend." The Y-axis shows a decline from 97.2% to 96.8%.',
    },
    options: [
      { de: 'Visuelle Manipulation (abgeschnittene Y-Achse)', en: 'Visual manipulation (truncated Y-axis)' },
      { de: 'Framing ("DRASTISCHER Rückgang" für 0,4 Prozentpunkte)', en: 'Framing ("DRASTIC decline" for 0.4 percentage points)' },
      { de: 'Sozialer Beweis ("500 Mitgliedsunternehmen")', en: 'Social proof ("500 member companies")' },
      { de: 'Korrekte statistische Darstellung', en: 'Correct statistical presentation' },
    ],
    correctAnswers: [0, 1, 2],
    explanation: {
      de: 'Drei Techniken: (1) Visuelle Manipulation — die abgeschnittene Y-Achse lässt einen minimalen Unterschied (0,4%) dramatisch erscheinen. (2) Framing — "DRASTISCH" für eine statistisch kaum relevante Veränderung. (3) Social Proof — die 500 Unternehmen sollen Glaubwürdigkeit erzeugen. Option 4 ist falsch — die Darstellung ist statistisch irreführend.',
      en: 'Three techniques: (1) Visual manipulation — the truncated Y-axis makes a minimal difference (0.4%) appear dramatic. (2) Framing — "DRASTIC" for a statistically barely relevant change. (3) Social proof — the 500 companies are meant to create credibility. Option 4 is wrong — the presentation is statistically misleading.',
    },
    points: 20,
    relatedTechniques: ['visual_manipulation', 'framing', 'social_proof'],
  },
];
