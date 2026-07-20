// Backfill: 3 Übungen für ai_persuasion (KI-gestützte Persuasion).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier: moderate (Evidenzqualität moderate, Konfidenz 0.76) → keine
// starken Wirkbehauptungen, Effekt nur mit Quelle und Konfidenzangabe.
// Abgrenzung: KI erzeugt und optimiert die Persuasion selbst (nicht Live-Dialog
// = interactive_ai_persuasion, nicht Datenauswahl je Person = microtargeting,
// nicht Auswahlarchitektur = nudging).
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
      de: 'Reaktivierungs-Kampagne eines B2B-Software-Anbieters an inaktive Testnutzer: Statt die E-Mails selbst zu texten, gibt das Growth-Team einem KI-System nur das Ziel vor — mehr Reaktivierungen. Das System schreibt Betreffzeilen und Mailtexte selbst, erzeugt in jedem Durchlauf Dutzende Varianten und optimiert sie über ein Verhaltensvorhersage-Modell laufend auf die Klick- und Reaktivierungsrate. Kein Mensch formuliert oder redigiert die Botschaften noch; die Maschine erzeugt die Überzeugungsarbeit und verbessert sie in Echtzeit über die gesamte Empfängerliste.',
      en: 'A B2B software vendor runs a re-activation campaign to dormant trial users: instead of writing the emails themselves, the growth team gives an AI system only the goal — more re-activations. The system writes the subject lines and body copy itself, spins up dozens of variants each run, and continuously optimises them toward the click and re-activation rate via a behaviour-prediction model. No human drafts or edits the messages any longer; the machine generates the persuasion and improves it in real time across the entire recipient list.',
    },
    options: [
      { de: 'Interaktive KI-Persuasion', en: 'Interactive AI persuasion' },
      { de: 'Microtargeting', en: 'Microtargeting' },
      { de: 'KI-gestützte Persuasion', en: 'AI-Powered Persuasion' },
      { de: 'Nudging', en: 'Nudging' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'KI-gestützte Persuasion: Der Hebel ist nicht ein einzelner cleverer Text, sondern dass ein KI-System die Überzeugungsarbeit selbst übernimmt — es schreibt die Botschaften, erzeugt laufend neue Varianten und optimiert sie über ein Verhaltensvorhersage-Modell in Echtzeit auf die Zielmetrik, skaliert über die ganze Empfängerliste. Erkennbar wird die Technik gerade daran, dass niemand mehr von Hand formuliert oder redigiert: Die Maschine generiert und verbessert die Persuasion im geschlossenen Kreislauf. Der Mechanismus wirkt, weil ein System, das aus vielen Reaktionen lernt, Formulierungen schneller und breiter testet und anpasst, als ein Team es könnte — unter Studienbedingungen hält solche algorithmische Persuasion mit menschlichen Profis mit oder übertrifft sie (Matz et al. 2017; moderate Evidenz, abhängig von Datenlage und Modellgüte). So nutzt du das professionell: Lass die KI Entwürfe und Varianten liefern, aber halte die Zielgröße sinnvoll begrenzt und jede erzeugte Sachaussage von einem Menschen geprüft — Tempo und Reichweite gewinnst du, ohne die Wahrheit an die Klickrate abzutreten. Daran erkennst du es und so entschärfst du es: Frag bei auffällig glatten, perfekt konvertierenden Kampagnen, ob hinter den Aussagen noch ein verantwortlicher Mensch steht und worauf das System eigentlich optimiert; verlangsame die Entscheidung und prüf die Behauptungen unabhängig. Interaktive KI-Persuasion wäre es, wenn ein Bot im Live-Dialog auf die Einwände einer einzelnen Person reagierte und sein nächstes Argument Zug um Zug darauf zuschnitte — hier gibt es kein Gespräch, sondern eine im Hintergrund optimierte Massenaussendung. Microtargeting würde einzelne Empfänger über ihre Profildaten auswählen und die Ansprache auf ihre persönliche Schwachstelle legen — hier steuert kein Personenprofil die Auswahl, sondern die Maschine erzeugt und optimiert den Inhalt auf eine Metrik. Nudging läge vor, wenn die Auswahlarchitektur (Voreinstellung, Platzierung) das Verhalten lenkte — hier lenkt der maschinell erzeugte und optimierte Text, nicht das Interface.',
      en: 'AI-powered persuasion: the lever is not one clever piece of copy but the fact that an AI system takes over the persuasion work itself — it writes the messages, keeps generating new variants and optimises them toward the target metric in real time via a behaviour-prediction model, scaled across the whole recipient list. The technique gives itself away precisely because no one drafts or edits by hand any more: the machine generates and improves the persuasion in a closed loop. The mechanism works because a system that learns from many responses tests and adapts wording faster and more broadly than a team could — under study conditions such algorithmic persuasion matches or outperforms human professionals (Matz et al. 2017; moderate evidence, depending on data quality and model accuracy). Used legitimately: let the AI supply drafts and variants, but keep the objective sensibly bounded and every factual claim it generates checked by a human — you win speed and reach without ceding the truth to the click-through rate. To spot and counter it: when a campaign is suspiciously smooth and converts perfectly, ask whether a responsible human still stands behind the statements and what the system is actually optimising for; slow the decision down and verify the claims independently. Interactive AI persuasion would be a bot reacting in live dialogue to a single person\'s objections and re-tailoring its next argument turn by turn — here there is no conversation, but a mass send optimised in the background. Microtargeting would select individual recipients via their profile data and aim the message at their personal weak spot — here no person-level profile drives the selection; the machine generates and optimises the content toward a metric. Nudging would be at play if the choice architecture (a default, a placement) steered behaviour — here it is the machine-generated, machine-optimised text that steers, not the interface.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'interactive_ai_persuasion', 'microtargeting', 'nudging'],
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
      en: 'As head of communications at a consumer-finance brand you are sitting in a vendor pitch. The vendor promises an AI persuasion platform: you give it one metric — loan applications — and the system then generates and optimises all campaign copy across email and web fully automatically. It writes the statements about terms and benefits itself and keeps tuning them toward the conversion rate via a prediction model. "No editing, no braking — the model finds on its own what converts best."',
    },
    options: [
      {
        de: 'Ich lasse die KI Entwürfe und Varianten erzeugen, verlange aber ein menschliches Freizeichnen jeder Sachaussage zu Konditionen, eine begrenzte statt reine Abschluss-Zielgröße samt Leitplanken und eine protokollierte, prüfbare Optimierung — Tempo und Reichweite bleiben, die ungeprüfte Behauptungsmaschine nicht.',
        en: 'I let the AI generate drafts and variants, but I require a human sign-off on every factual claim about terms, a bounded objective with guardrails instead of pure conversion, and a logged, auditable optimisation — the speed and reach stay, the unchecked claim-machine does not.',
      },
      {
        de: 'Ich gebe grünes Licht: Es ist nur schnelleres A/B-Testing, der Markt belohnt die Abschlussquote, und je freier das Modell optimiert, desto besser für uns.',
        en: 'I give it the green light: it is just faster A/B testing, the market rewards the conversion rate, and the more freely the model optimises, the better for us.',
      },
      {
        de: 'Ich lehne jeden KI-erzeugten Text grundsätzlich ab: Sobald eine Maschine überzeugende Botschaften schreibt, ist das Manipulation, egal mit welchen Kontrollen.',
        en: 'I reject any AI-generated copy on principle: the moment a machine writes persuasive messages it is manipulation, whatever the controls.',
      },
      {
        de: 'Ich lasse das System vollautomatisch laufen, ergänze aber unter jeder Mail den Hinweis „Text KI-generiert" — damit ist die Sorgfaltspflicht formal abgehakt.',
        en: 'I let the system run fully automatically but add a "copy AI-generated" note under every email — that formally ticks the due-diligence box.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Anbieter beschreibt KI-gestützte Persuasion in ihrer riskanten Zuspitzung: Eine Maschine erzeugt und optimiert die gesamte Überzeugungsarbeit selbst und schraubt sie ungebremst auf eine einzige Kennzahl — bei einem Finanzprodukt heißt das, dass ein Modell ohne menschliche Kontrolle Aussagen über Konditionen formuliert und allein danach auswählt, was konvertiert. Der professionelle Trennstrich verläuft nicht bei „KI ja/nein", sondern bei zwei Dingen: Wahrheit und Zielgröße. Die beste Option behält den Nutzen der Skalierung und entzieht der Technik ihr Gefahrenpotenzial — ein Mensch zeichnet jede Sachaussage frei, das Optimierungsziel ist begrenzt und mit Leitplanken versehen, und der Lauf ist protokolliert und prüfbar. Option 2 klingt plausibel, weil „schnelleres A/B-Testing" harmlos wirkt — doch eine reine Abschluss-Optimierung ohne Wahrheitsprüfung erzeugt bei einem Kreditprodukt genau die überzogenen oder irreführenden Aussagen, die aufsichtsrechtlich und für die Marke am teuersten werden. Option 3 überkorrigiert: KI-Entwürfe unter menschlicher Prüfung sind legitimes Handwerk; das Problem ist die ungeprüfte, allein metrikgetriebene Ausführung, nicht die Textgenerierung an sich. Option 4 ist ein Feigenblatt: Ein Hinweis „KI-generiert" macht die Herkunft transparent, kontrolliert aber weder die erzeugten Behauptungen noch die Zielgröße — die eigentliche Sorgfalt bleibt aus.',
      en: 'The vendor is describing AI-powered persuasion in its risky form: a machine that generates and optimises the entire persuasion effort itself and drives it unbraked toward a single metric — for a financial product that means a model, without human control, phrasing statements about terms and selecting purely for what converts. The professional dividing line does not run at "AI yes/no" but at two things: truth and objective. The best option keeps the benefit of scale and strips the technique of its danger — a human signs off every factual claim, the optimisation target is bounded and guard-railed, and the run is logged and auditable. Option 2 sounds plausible because "faster A/B testing" seems harmless — but pure conversion optimisation with no truth check produces, for a credit product, exactly the overblown or misleading claims that become most expensive with regulators and for the brand. Option 3 overcorrects: AI drafts under human review are legitimate craft; the problem is the unchecked, metric-only execution, not text generation as such. Option 4 is a fig leaf: an "AI-generated" note makes the provenance transparent but controls neither the generated claims nor the objective — the actual diligence is still missing.',
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
      de: 'Performance-Marketing einer Direktvertriebsmarke für Nahrungsergänzung: Ein KI-Content-Motor bekommt als Auftrag nur die Zielgröße — abgeschlossene Käufe. Er erzeugt eigenständig Tausende Anzeigen- und Landingpage-Texte, prognostiziert über ein Verhaltensmodell, welche davon konvertieren, spielt die stärksten aus und schreibt und optimiert das ganze System in Echtzeit weiter. Es gibt keinen Chat mit den Nutzern und keine zugekauften Personenprofile; die Maschine erzeugt und verbessert die Überzeugungstexte selbst und skaliert, was das Modell als wirksamsten Zug vorhersagt.',
      en: 'Performance marketing at a direct-to-consumer supplement brand: an AI content engine is given only the objective — completed purchases. It autonomously produces thousands of ad and landing-page texts, forecasts via a behaviour model which of them convert, serves the strongest, and keeps writing and optimising the whole system in real time. There is no chat with users and no purchased personal profiles; the machine generates and improves the persuasive copy itself and scales whatever the model predicts to be the most effective move.',
    },
    options: [
      {
        de: 'die Argumente live im Chat an jeden einzelnen Einwand der Nutzerin anpasst, während sie schreibt (Interaktive KI-Persuasion)',
        en: 'adapts its arguments live in chat to each individual objection the user raises as she types (interactive AI persuasion)',
      },
      {
        de: 'die Überzeugungstexte selbst erzeugt und über ein Verhaltensvorhersage-Modell in Echtzeit und skaliert auf die Zielmetrik optimiert (KI-gestützte Persuasion)',
        en: 'generates the persuasive copy itself and optimises it toward the target metric in real time and at scale via a behaviour-prediction model (AI-powered persuasion)',
      },
      {
        de: 'jede Person über zugekaufte Profildaten identifiziert und die Ansprache genau auf ihre individuelle Schwachstelle zuschneidet (Microtargeting)',
        en: 'identifies each person via purchased profile data and tailors the approach precisely to their individual weak spot (microtargeting)',
      },
      {
        de: 'die Auswahlarchitektur der Seite so gestaltet, dass die vorausgewählte Option zum Kauf führt (Nudging)',
        en: 'designs the page\'s choice architecture so that the pre-selected option leads to the purchase (nudging)',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'KI-gestützte Persuasion: Das Besondere ist die Kombination aus Erzeugung und Optimierung durch die Maschine selbst — sie schreibt die Texte, sagt über ein Verhaltensmodell deren Wirkung voraus und verbessert den ganzen Bestand in Echtzeit auf die Zielmetrik, und das über beliebig viele Ausspielungen hinweg. Genau diese selbstverbessernde Schleife bei voller Skalierung ist der Kern, der die Technik von ihren Nachbarn trennt: Nicht ein Mensch, der klüger textet, und nicht ein einzelnes Gespräch, sondern ein System, das Persuasion produziert und laufend gegen Daten nachschärft. So nutzt du das professionell: Der Automatisierungsvorteil ist real — nutz ihn mit einer begrenzten Zielgröße, einem menschlichen Wahrheits-Check der erzeugten Aussagen und einem unabhängigen Vergleichsmaßstab, der zeigt, ob das Modell überzeugt oder nur überredet. Daran erkennst du es und so entschärfst du es: Stutzig macht, wenn eine Kampagne unmenschlich schnell besser wird und niemand mehr sagen kann, warum ein bestimmter Text läuft; drossle das Tempo, prüf die Zielfunktion und miss die Ergebnisse an einer Quelle außerhalb des Systems. Interaktive KI-Persuasion (Option 1) bräuchte ein Live-Gespräch, in dem der Bot auf Einwände reagiert — hier gibt es keinen Chat, sondern eine im Hintergrund optimierte Ausspielung. Microtargeting (Option 3) würde einzelne Personen über Profildaten auswählen und auf ihre Schwachstelle zielen — hier fehlen zugekaufte Profile; die Maschine optimiert erzeugten Inhalt auf eine Metrik, statt Personen zu selektieren. Nudging (Option 4) läge in der Gestaltung der Auswahlarchitektur — Voreinstellung, Platzierung —, nicht in maschinell erzeugtem und optimiertem Überzeugungstext.',
      en: 'AI-powered persuasion: what stands out is the combination of generation and optimisation by the machine itself — it writes the copy, predicts its effect via a behaviour model, and improves the whole stock in real time toward the target metric, across any number of impressions. This self-improving loop at full scale is the core that separates the technique from its neighbours: not a human writing more cleverly, and not a single conversation, but a system that produces persuasion and keeps sharpening it against data. Used legitimately: the automation advantage is real — use it with a bounded objective, a human truth-check on the generated statements, and an independent benchmark that shows whether the model persuades or merely pushes. To spot and counter it: be wary when a campaign improves inhumanly fast and no one can any longer say why a given text works; throttle the pace, inspect the objective function, and measure the results against a source outside the system. Interactive AI persuasion (option 1) would need a live conversation in which the bot reacts to objections — here there is no chat, only a send optimised in the background. Microtargeting (option 3) would select individuals via profile data and aim at their weak spot — here there are no purchased profiles; the machine optimises generated content toward a metric rather than selecting people. Nudging (option 4) would live in the design of the choice architecture — a default, a placement — not in machine-generated and machine-optimised persuasive copy.',
    },
    points: 10,
    primaryTechniqueId: 'ai_persuasion',
    relatedTechniques: ['ai_persuasion', 'interactive_ai_persuasion', 'microtargeting', 'nudging'],
  },
];
