// Backfill: 3 Übungen für ai_persuasion (KI-gestützte Persuasion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Technik ai_persuasion: evidenceQuality moderate, Konfidenz 0.76 → kein
// Frontier-Tier; Wirkaussagen nur mit Quelle und Konfidenzangabe.
// Positive Signatur der Technik: die Maschine ERZEUGT die Persuasion selbst
// und OPTIMIERT sie über ein Verhaltensvorhersage-Modell in Echtzeit und
// über die Skala — nicht Live-Dialog (interactive_ai_persuasion), nicht
// Personendossier je Person (microtargeting), nicht Übervertrauen des Teams
// (automation_bias_overreliance), nicht vorgetäuschte Menge
// (coordinated_inauthentic_amplification).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillAiPersuasion: Exercise[] = [
  {
    id: 'backfill-ai_persuasion-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik setzt das Growth-Team hier ein?',
      en: 'Which technique is the growth team using here?',
    },
    scenario: {
      de: 'Reaktivierungs-Kampagne eines B2B-Software-Anbieters an inaktive Testnutzer: Statt die E-Mails selbst zu texten, gibt das Growth-Team einem KI-System nur die Zielgröße vor — mehr Reaktivierungen. Das System schreibt Betreffzeilen und Mailtexte eigenständig, erzeugt pro Durchlauf Dutzende Varianten und schärft sie über ein Verhaltensvorhersage-Modell laufend auf die Klick- und Reaktivierungsrate nach. Welcher Empfänger welche Variante bekommt, entscheidet das Modell selbst und spielt jedem die Version aus, die bei ähnlich reagierenden Nutzern zuletzt am besten konvertiert hat. Kein Mensch formuliert oder redigiert die Botschaften noch; die Maschine erzeugt die Überzeugungsarbeit und verbessert sie in Echtzeit über die gesamte Empfängerliste.',
      en: 'A B2B software vendor runs a re-activation campaign to dormant trial users: instead of writing the emails themselves, the growth team gives an AI system only the objective — more re-activations. The system writes the subject lines and body copy on its own, spins up dozens of variants each run, and keeps sharpening them toward the click and re-activation rate via a behaviour-prediction model. Which recipient gets which variant is decided by the model itself, serving each person the version that converted best among similarly reacting users. No human drafts or edits the messages any longer; the machine produces the persuasion and improves it in real time across the entire recipient list.',
    },
    options: [
      { de: 'Interaktive KI-Persuasion', en: 'Interactive AI persuasion' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'KI-gestützte Persuasion', en: 'AI-Powered Persuasion' },
      { de: 'Automation Bias (Übervertrauen in Systeme)', en: 'Automation Bias (Over-Reliance)' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'KI-gestützte Persuasion: Der Hebel ist nicht ein einzelner cleverer Text, sondern dass ein KI-System die Überzeugungsarbeit selbst übernimmt — es schreibt die Botschaften, erzeugt laufend neue Varianten und schärft sie über ein Verhaltensvorhersage-Modell in Echtzeit auf die Zielmetrik nach, skaliert über die gesamte Empfängerliste. Der Mechanismus trägt, weil ein System, das aus vielen Reaktionen lernt, Formulierungen schneller und breiter testet und anpasst, als ein Team es je könnte; unter Studienbedingungen hält solche algorithmische Persuasion mit menschlichen Profis mit oder übertrifft sie (Matz et al. 2017; moderate Evidenz, abhängig von Datenlage und Modellgüte). So nutzt du das professionell: Lass die KI Varianten und Entwürfe liefern, doch die Verantwortung für jede Sachaussage bleibt bei einem Menschen — und wäge ab, worauf du optimieren lässt, denn eine reine Klickrate belohnt Zuspitzung, nicht Wahrheit. Daran erkennst du es und so entschärfst du es: Wird eine Kampagne auffällig glatt und trifft sie zu perfekt, dann frag, wer für die einzelnen Aussagen noch geradesteht, wenn kein Mensch mehr formuliert — ohne einen benannten Verantwortlichen für den Inhalt gib der Aussendung keine Reichweite. Microtargeting (Option 2) wäre es, wenn ein Dossier über die einzelne Person — ihre Daten, ihre wunde Stelle — die Ansprache steuerte; hier weiß die Maschine nichts über den einzelnen Empfänger, sie spielt ihm nur die Variante aus, die bei ähnlich reagierenden Nutzern am besten konvertiert hat: Konversions-Optimierung, kein Personenwissen. Interaktive KI-Persuasion (Option 1) bräuchte ein Live-Gespräch, in dem der Bot Zug um Zug auf die Einwände eines Gegenübers eingeht; hier gibt es kein Gespräch, sondern eine im Hintergrund optimierte Aussendung. Automation Bias (Option 4) beschreibt etwas anderes — nicht die Technik, die auf die Empfänger zielt, sondern die Schwäche des Teams, das der Maschine blind vertraut; dass niemand mehr redigiert, ist hier ein Warnzeichen, aber die eingesetzte Technik ist die maschinelle Erzeugung und Optimierung der Persuasion selbst.',
      en: 'AI-powered persuasion: the lever is not one clever piece of copy but that an AI system takes over the persuasion work itself — it writes the messages, keeps generating fresh variants and, via a behaviour-prediction model, tunes them toward the target metric in real time, scaled across the entire recipient list. The mechanism holds because a system that learns from many responses tests and adapts wording faster and more broadly than any team could; under study conditions such algorithmic persuasion matches or outperforms human professionals (Matz et al. 2017; moderate evidence, depending on data quality and model accuracy). Used legitimately: let the AI supply variants and drafts, but ownership of every factual claim stays with a human — and weigh what you let it optimise for, because a bare click rate rewards overstatement, not truth. To spot and counter it: when a campaign turns suspiciously smooth and lands a little too perfectly, ask who still stands behind each individual claim once no human is writing them — give the send no reach until someone is named as accountable for the content. Microtargeting (option 2) would mean a dossier on the individual — their data, their sore spot — steering the message; here the machine knows nothing about the single recipient, it merely serves them the variant that converted best among similarly reacting users: conversion optimisation, not knowledge of the person. Interactive AI persuasion (option 1) would need a live conversation in which the bot answers a counterpart\'s objections turn by turn; here there is no conversation, only a send optimised in the background. Automation bias (option 4) names something else — not the technique aimed at the recipients but the weakness of a team that trusts the machine blindly; the fact that no one edits any more is a warning sign here, yet the technique in use is the machine-driven generation and optimisation of the persuasion itself.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'interactive_ai_persuasion', 'microtargeting', 'automation_bias_overreliance'],
  },
  {
    id: 'backfill-ai_persuasion-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Kommunikationsleiterin einer Konsumfinanz-Marke sitzt du im Vendor-Pitch. Der Anbieter verspricht eine KI-Persuasionsplattform: Ihr gebt eine Kennzahl vor — Kreditanträge —, und das System erzeugt und optimiert danach den gesamten Kampagnentext über E-Mail und Web vollautomatisch. Es formuliert die Aussagen zu Konditionen und Vorteilen selbst und schraubt sie über ein Vorhersagemodell laufend auf die Abschlussquote. „Kein Redigieren, kein Bremsen — das Modell findet allein, was am besten konvertiert."',
      en: 'As head of communications at a consumer-finance brand you are sitting in a vendor pitch. The vendor promises an AI persuasion platform: you give it one metric — loan applications — and the system then generates and optimises all campaign copy across email and web fully automatically. It writes the statements about terms and benefits itself and keeps tuning them toward the conversion rate via a prediction model. "No editing, no brakes — the model finds on its own what converts best."',
    },
    options: [
      {
        de: 'Ich lasse die KI Entwürfe und Varianten erzeugen, verlange aber ein menschliches Freizeichnen jeder Konditionenaussage, eine an Aufsichtsvorgaben gebundene statt reine Abschluss-Zielgröße und einen protokollierten, prüfbaren Optimierungslauf — der Skalierungsvorteil bleibt, die ungeprüfte Behauptungsmaschine nicht.',
        en: 'I let the AI generate drafts and variants, but I require a human sign-off on every statement about terms, an objective tied to regulatory requirements rather than pure conversion, and a logged, auditable optimisation run — the scaling advantage stays, the unchecked claim-machine does not.',
      },
      {
        de: 'Ich gebe grünes Licht, lasse mir vorab die Guardrail-Dokumentation zeigen: Im Kern ist es schnelleres A/B-Testing, der Markt belohnt die Abschlussquote, und je freier das Modell optimiert, desto sauberer trennt es für uns die Gewinner von den Verlierern.',
        en: 'I give it the green light and ask to see the guardrail documentation first: at heart it is faster A/B testing, the market rewards the conversion rate, and the more freely the model optimises, the more cleanly it sorts winners from losers for us.',
      },
      {
        de: 'Ich lehne KI-erzeugten Text grundsätzlich ab und bestehe auf rein manueller Produktion im Vier-Augen-Prinzip: Sobald eine Maschine überzeugende Aussagen formuliert, ist die Grenze zur Manipulation überschritten, gleich welche Kontrollen man nachrüstet.',
        en: 'I reject AI-generated copy on principle and insist on purely manual production under a four-eyes rule: the moment a machine phrases persuasive statements, the line to manipulation is crossed, whatever controls you bolt on afterwards.',
      },
      {
        de: 'Ich lasse das System vollautomatisch laufen, setze unter jede Mail ein sichtbares „Text KI-generiert" und archiviere alle Varianten revisionssicher — damit ist die Transparenz- und Sorgfaltspflicht formal wie dokumentarisch abgehakt.',
        en: 'I let the system run fully automatically, put a visible "copy AI-generated" note under every email, and archive all variants tamper-proof — that ticks the transparency and due-diligence box, formally and on the record.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Anbieter beschreibt KI-gestützte Persuasion in ihrer riskanten Zuspitzung: Eine Maschine erzeugt und optimiert die gesamte Überzeugungsarbeit selbst und treibt sie ungebremst auf eine einzige Kennzahl zu — bei einem Finanzprodukt heißt das, dass ein Modell ohne menschliche Kontrolle Aussagen über Konditionen formuliert und allein danach auswählt, was konvertiert. Der professionelle Trennstrich liegt nicht bei „KI ja/nein", sondern bei zwei Dingen: Wahrheit und Zielgröße. So nutzt du das professionell: Der Skalierungsvorteil bleibt dir, wenn die Zielgröße an Aufsichtsvorgaben hängt statt an der nackten Abschlussquote, ein Mensch jede Konditionenaussage freizeichnet und der Lauf protokolliert und prüfbar ist — genau das leistet die erste Option. Daran erkennst du es und so entschärfst du es: Wenn dir jemand „kein Redigieren, kein Bremsen" verkauft, verlang die Zielfunktion und das Prüfprotokoll, bevor du zusagst; ohne Audit-Spur und Wahrheits-Freizeichnung steht am Ende die Marke, nicht der Anbieter, für die erzeugten Behauptungen gerade. Option 2 klingt plausibel, weil „schnelleres A/B-Testing" harmlos wirkt und die Guardrail-Dokumentation Seriosität suggeriert — doch eine reine Abschluss-Optimierung ohne Wahrheitsprüfung erzeugt bei einem Kreditprodukt genau die überzogenen Aussagen, die aufsichtsrechtlich und für die Reputation am teuersten werden. Option 3 überkorrigiert: KI-Entwürfe unter menschlicher Prüfung sind legitimes Handwerk, und ein Vier-Augen-Prinzip auf rein manuellem Text verschenkt den Skalierungsnutzen, ohne das eigentliche Problem — die ungeprüfte, allein metrikgetriebene Ausführung — zu treffen. Option 4 ist ein Feigenblatt: Ein sichtbarer „KI-generiert"-Hinweis und ein revisionssicheres Archiv machen die Herkunft transparent, kontrollieren aber weder die erzeugten Behauptungen noch die Zielgröße — die inhaltliche Sorgfalt bleibt aus.',
      en: 'The vendor is describing AI-powered persuasion at its risky extreme: a machine that generates and optimises the entire persuasion effort itself and drives it, unchecked, toward a single metric — for a financial product that means a model, with no human in the loop, phrasing statements about terms and selecting purely for what converts. The professional line is not drawn at "AI yes/no" but at two things: truth and objective. Used legitimately: the scaling advantage stays yours when the objective is tied to regulatory requirements rather than the bare conversion rate, a human signs off every statement about terms, and the run is logged and auditable — which is exactly what the first option does. To spot and counter it: when someone sells you "no editing, no brakes", demand the objective function and the review log before you agree; without an audit trail and a truth sign-off it is the brand, not the vendor, that answers for the generated claims. Option 2 sounds plausible because "faster A/B testing" feels harmless and the guardrail documentation lends an air of rigour — but pure conversion optimisation with no truth check produces, for a credit product, exactly the overblown claims that cost most with regulators and reputation. Option 3 overcorrects: AI drafts under human review are legitimate craft, and a four-eyes rule on purely manual copy throws away the scaling benefit without touching the real problem — the unchecked, metric-only execution. Option 4 is a fig leaf: a visible "AI-generated" note and a tamper-proof archive make the provenance transparent but control neither the generated claims nor the objective — the substantive diligence is still missing.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'interactive_ai_persuasion', 'microtargeting'],
  },
  {
    id: 'backfill-ai_persuasion-3',
    type: 'fill-blank',
    difficulty: 'expert',
    question: {
      de: 'Ergänze: Die Kampagne wirkt so stark, weil das KI-System ___.',
      en: 'Complete the sentence: the campaign works so strongly because the AI system ___.',
    },
    scenario: {
      de: 'Performance-Marketing einer Direktvertriebsmarke für Nahrungsergänzung: Der Performance-Lead der Marke gibt einem KI-Content-Motor als einzige Vorgabe die Zielgröße — abgeschlossene Käufe bei Erstbesuchern der Landingpages. Der Motor erzeugt eigenständig Tausende Anzeigen- und Landingpage-Texte, prognostiziert über ein Verhaltensmodell, welche davon konvertieren, spielt die stärksten den kalten Zielgruppen aus und schreibt und optimiert den ganzen Bestand in Echtzeit weiter. Je mehr Reaktionen einlaufen, desto treffsicherer wird die Vorhersage; die Maschine erzeugt und verbessert die Überzeugungstexte selbst und skaliert, was das Modell als wirksamsten Zug vorhersagt.',
      en: 'Performance marketing at a direct-to-consumer supplement brand: the brand\'s performance lead gives an AI content engine one instruction only — the objective, completed purchases from first-time visitors to the landing pages. The engine autonomously produces thousands of ad and landing-page texts, forecasts via a behaviour model which of them convert, serves the strongest to the cold audiences, and keeps writing and optimising the whole stock in real time. The more responses come in, the sharper the prediction gets; the machine generates and improves the persuasive copy itself and scales whatever the model predicts to be the most effective move.',
    },
    options: [
      {
        de: 'seine Argumente im laufenden Gespräch an jeden einzelnen Einwand der Nutzerin anpasst und sein nächstes Wort aus ihrer letzten Antwort ableitet',
        en: 'adapts its arguments in the running conversation to each individual objection the user raises and derives its next line from her last reply',
      },
      {
        de: 'in einer geschlossenen Schleife sowohl textet als auch nachbessert — nicht ein Mensch, sondern die vorhergesagte Reaktion entscheidet fortlaufend, welche Fassung in die Breite geht',
        en: 'runs a closed loop that both writes and refines its own pitch — it is the predicted response, not a human editor, that keeps deciding which version goes wide',
      },
      {
        de: 'jede Person über detaillierte, hinterlegte Profildaten identifiziert und die Ansprache gezielt auf ihre individuelle Schwachstelle legt',
        en: 'identifies each person via detailed stored profile data and aims the message squarely at their individual weak spot',
      },
      {
        de: 'dieselbe Botschaft nur immer häufiger ausspielt, bis sie allein durch die schiere Wiederholung vertraut und dadurch überzeugender wirkt',
        en: 'merely serves the same message ever more often until sheer repetition makes it familiar and thereby more convincing',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'KI-gestützte Persuasion: Das Signatur-Merkmal ist die geschlossene Schleife aus Erzeugung und Optimierung in der Maschine selbst — sie schreibt die Texte, sagt über ein Verhaltensmodell deren Wirkung voraus, spielt die stärksten aus und schärft den ganzen Bestand mit jeder neuen Reaktion nach, über beliebig viele Ausspielungen hinweg. Genau diese sich selbst verbessernde Schleife bei voller Skalierung trennt die Technik von ihren Nachbarn: kein Mensch, der klüger textet, und kein einzelnes Gespräch, sondern ein System, das Persuasion produziert und laufend gegen Daten nachzieht. So nutzt du das professionell: Den Automatisierungsvorsprung holst du dir, indem du jede Gewinner-Variante an einer Quelle außerhalb des Systems gegenprüfst — halte eine Kontrollgruppe frei und sieh nach, ob die Variante wirklich überzeugt oder nur überredet, also ob sie noch stimmt, wenn man sie ohne den Konversionsdruck liest. Daran erkennst du es und so entschärfst du es: Stutzig macht, wenn eine Kampagne in unmöglichem Tempo besser wird und niemand mehr sagen kann, warum gerade dieser Text läuft; nimm das Tempo raus und gleich die Ergebnisse an einem Maßstab ab, den das Modell nicht selbst erzeugt hat. Ein Live-Gespräch, in dem sich die Argumente aus den Antworten der Nutzerin ergäben (Option 1), findet hier nicht statt — es gibt kein Gegenüber, nur ausgespielte, gegen Daten nachgeschärfte Texte. Ein Personendossier, das die Ansprache aus dem speist, was man über die Einzelne weiß (Option 3), fehlt ebenfalls — die Treffsicherheit stammt aus der Vorhersage der Textwirkung, nicht aus Wissen über die Person. Und bloße Wiederholung, die dieselbe Botschaft nur so oft ausspielt, bis sie vertraut wirkt (Option 4), trifft es nicht — hier zählt nicht die Frequenz einer festen Botschaft, sondern dass der Motor laufend neue, stärkere Varianten erzeugt und die schwachen aussortiert.',
      en: 'AI-powered persuasion: the signature is the closed loop of generation and optimisation inside the machine itself — it writes the copy, predicts its effect via a behaviour model, serves the strongest, and sharpens the whole stock with every fresh response, across any number of impressions. It is precisely this self-improving loop at full scale that separates the technique from its neighbours: not a human writing more cleverly, and not a single conversation, but a system that produces persuasion and keeps pulling it toward the data. Used legitimately: you claim the automation edge by cross-checking every winning variant against a source outside the system — hold out a control group and see whether the variant genuinely persuades or merely talks people into it, that is, whether it still holds up when read without the pressure to convert. To spot and counter it: be wary when a campaign improves at an impossible pace and no one can any longer say why this particular text works; take the speed out and compare the results against a yardstick the model did not produce itself. A live conversation in which the arguments grow out of the user\'s own replies (option 1) is not what happens here — there is no counterpart, only served copy sharpened against data. A dossier on the person that feeds the message from what is known about the individual (option 3) is likewise absent — the accuracy comes from predicting how the text will land, not from knowledge of the person. And mere repetition — serving the same message often enough that it starts to feel familiar (option 4) — misses it too: what counts here is not the frequency of one fixed message but that the engine keeps generating fresh, stronger variants and weeding out the weak ones.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'interactive_ai_persuasion', 'microtargeting', 'repetition'],
  },
];
