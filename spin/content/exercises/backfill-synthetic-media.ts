// Backfill: 3 Übungen für synthetic_media (Synthetische Medien).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// NICHT in index.ts registrieren (Vorgabe der Hauptsession).

import type { Exercise } from '../types';

export const backfillSyntheticMedia: Exercise[] = [
  {
    id: 'backfill-synthetic_media-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik steckt hinter dem kursierenden Bild?',
      en: 'Which technique is behind the circulating image?',
    },
    scenario: {
      de: 'Die Verbraucherkommunikation eines Lebensmittelherstellers bekommt Alarm aus dem Social-Media-Monitoring: In einer regionalen Facebook-Gruppe und per WhatsApp verbreitet sich ein „Warnpost" mit einem fotorealistischen Nahaufnahme-Bild — ein geöffnetes Glas der bekannten Hausmarke, darin gut sichtbar Schimmel und ein toter Käfer, ausgeleuchtet wie ein hastiger Handy-Schnappschuss beim Einkauf. Das QS-Labor zieht zur abgebildeten Chargennummer die Rückstellmuster: Die Charge ist einwandfrei, ein solches Glas hat das Werk nie verlassen. Das Bild bildet keine reale Aufnahme ab — Glas, Inhalt und selbst die Schnappschuss-Anmutung wurden komplett von einem Bildgenerator erzeugt.',
      en: 'The consumer-communications team at a food producer gets an alert from social-media monitoring: a "warning post" is spreading in a regional Facebook group and via WhatsApp, carrying a photorealistic close-up — an opened jar of the well-known house brand with mould and a dead beetle plainly visible inside, lit like a hurried phone snapshot taken while shopping. The QA lab pulls the retained samples for the batch code shown: the batch is flawless and no such jar ever left the plant. The picture depicts nothing real — jar, contents and even the snapshot look were produced whole by an image generator.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic media' },
      { de: 'Dekontextualisierung (Cheapfakes)', en: 'Decontextualization (cheapfakes)' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and provenance deception' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Synthetische Medien: Der Bildgenerator erzeugt eine Aufnahme, die es nie gab — Glas, Verunreinigung und Schnappschuss-Look sind fabriziert, und genau die fotorealistische Machart ist der Hebel. Fotorealismus trägt die stille Annahme „ein Foto zeigt etwas, das wirklich so war", und die kippt hier. So setzt du das professionell ein: Du nutzt generierte Bilder sauber, wenn du sie erkennbar illustrativ hältst und als KI-generiert kennzeichnest — als Symbolbild oder in der Konzeptphase einer Kampagne, nie als vermeintlichen Beleg für ein reales Vorkommnis. So entschärfst du es: Behandle jedes belastende Bild ohne unabhängige Quelle als unbestätigt, mach eine Rückwärts-Bildersuche, prüfe Herkunfts- und Echtheitssignale (C2PA/Content Credentials) und gleiche das Bild mit deiner eigenen, überprüfbaren Faktenlage ab (hier: Chargennummer und Rückstellmuster), bevor du reagierst. Dekontextualisierung wäre ein echtes Foto einer tatsächlichen Verunreinigung — von einem anderen Hersteller oder aus einer alten Meldung —, das als aktuell ausgegeben wird; hier existiert überhaupt keine reale Aufnahme. Identitäts- und Herkunftstäuschung läge vor, wenn der Hebel ein gekaperter Absender oder eine erfundene, seriös wirkende Prüfstelle wäre; hier trägt nicht eine vorgetäuschte Identität die Täuschung, sondern das fabrizierte Bild selbst. Visuelle Manipulation wäre die Retusche eines echten Fotos — ein reales Glas, dem Schimmel und Käfer nachträglich hineingerechnet werden; hier gibt es aber kein echtes Ausgangsfoto, das ganze Bild ist KI-erzeugt.',
      en: 'Synthetic media: the image generator produces a picture of something that never existed — the jar, the contamination and the snapshot look are all fabricated, and the photorealistic craft is precisely the lever. Photorealism carries the quiet assumption that "a photo shows something that really was that way", and here that assumption fails. Using it professionally: you keep generated images clean by making them recognisably illustrative and labelling them as AI-generated — as a symbolic visual or in a campaign concept phase, never as supposed evidence of a real occurrence. To defuse it: treat any incriminating image without an independent source as unconfirmed, run a reverse image search, check provenance and authenticity signals (C2PA / Content Credentials), and cross-check the image against your own verifiable facts (here: the batch code and the retained samples) before you react. Decontextualization would be a genuine photo of an actual contamination — from another producer or an old report — passed off as current; here no real photograph exists at all. Identity and provenance deception would be the case if the lever were a spoofed sender or an invented, credible-looking testing body; here it is not a faked identity that carries the deception but the fabricated image itself. Visual manipulation would be the retouching of a genuine photo — a real jar with mould and a beetle edited in afterwards; but here there is no real source photo at all, the whole image is AI-generated.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'decontextualization_cheapfakes', 'identity_provenance_deception', 'visual_manipulation'],
  },
  {
    id: 'backfill-synthetic_media-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation eines Pharmaunternehmens. Am Abend kursiert ein 40-Sekunden-Video: Darin räumt deine Vorstandsvorsitzende — gestochen scharf, in ihrer Stimme und Mimik — angeblich verschwiegene Nebenwirkungen eines Präparats ein. Diesen Auftritt hat sie nie gegeben; es existiert kein reales Filmmaterial dazu. Gesicht, Lippenbewegung und Stimme sind vollständig KI-synthetisiert, der Clip ist Bild für Bild aus dem Generator. Er läuft bereits bei Reichweiten-Accounts, erste Journalisten fragen an, in 30 Minuten schließt die US-Börse.',
      en: 'You head corporate communications at a pharmaceutical company. In the evening a 40-second video is circulating: in it your CEO — pin-sharp, in her own voice and expression — supposedly admits to concealed side effects of a drug. She never gave this appearance; no real footage of it exists. The face, the lip movement and the voice are entirely AI-synthesised, the clip generated frame by frame. It is already running on high-reach accounts, the first journalists are asking, and the US market closes in 30 minutes.',
    },
    options: [
      {
        de: 'Ich gehe sofort über die verifizierten Eigenkanäle mit einem authentifizierten Dementi live, lege den Prüfnachweis bei (Herkunftsdaten, forensische Einstufung als synthetisch), informiere Redaktionen, Börsenaufsicht und Plattformen mit denselben Belegen und lasse den Ursprung des Clips sichern.',
        en: 'I go live at once on our verified owned channels with an authenticated denial, attach the proof (provenance data, a forensic classification as synthetic), brief newsrooms, the market regulator and the platforms with the same evidence, and have the clip\'s origin preserved.',
      },
      {
        de: 'Ich lasse in der Agentur binnen einer Stunde einen KI-generierten Gegen-Clip erzeugen, in dem die Vorstandsvorsitzende die Vorwürfe ruhig Punkt für Punkt entkräftet, und spiele ihn über dieselben Reichweiten-Kanäle aus — einen Fake mit einem Fake zu kontern schlägt das Original in Tempo und Reichweite.',
        en: 'I have the agency produce an AI-generated counter-clip within the hour in which the CEO calmly refutes the allegations point by point, and push it out through the same high-reach channels — fighting a fake with a fake beats the original on speed and reach.',
      },
      {
        de: 'Ich setze über die Eigenkanäle eine knappe, ruhige Klarstellung ab, dass das Video nicht authentisch ist, verzichte aber bewusst auf Details, Bildmaterial und Verlinkungen — jede weitere Auseinandersetzung würde den Clip nur zusätzlich verbreiten und ihm Reichweite schenken.',
        en: 'I post a brief, calm clarification on our owned channels that the video is not authentic, but deliberately withhold details, imagery and links — engaging any further would only spread the clip and hand it extra reach.',
      },
      {
        de: 'Ich halte zunächst still und beobachte: Fälschungen dieser Art werden von Faktencheckern und der Netz-Community meist binnen Stunden als synthetisch entlarvt, und ein hektisches Dementi vor Handelsschluss würde dem Clip nur unnötig Gewicht und Aufmerksamkeit geben.',
        en: 'I hold off and watch for now: fakes like this are usually exposed as synthetic by fact-checkers and the online community within hours, and a frantic denial before the closing bell would only lend the clip undue weight and attention.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus: Ein Deepfake ist synthetisierte Wirklichkeit — Gesicht und Stimme einer bekannten Person werden Bild für Bild neu erzeugt und sagen, was nie gesagt wurde. Weil „ich habe es mit eigenen Augen gesehen" so schwer wiegt, reicht ein bloßes Wort-gegen-Wort nicht; du musst Prüfbarkeit liefern. Die beste Antwort verbindet Tempo mit Substanz: authentifizierte Eigenkanäle, überprüfbare Herkunfts- und Forensikbelege, aktive Information von Redaktionen, Aufsicht und Plattformen und die Sicherung des Ursprungs für die spätere Klärung. So nutzt du das seriös: Setzt du synthetische Avatare eurer Führung ein, dann nur mit deren Einwilligung und sichtbarer Kennzeichnung — etwa für lokalisierte Botschaften in mehreren Sprachen —, nie verdeckt. Option 2 wirkt schlagkräftig, normalisiert aber genau die Waffe, die dich angreift: Ein selbst generierter Clip beschädigt deine Glaubwürdigkeit und macht künftig jedes echte Video deiner Chefin bestreitbar („war bestimmt auch KI"). Option 3 klingt medienklug, aber ein belegloses „nicht authentisch" steht als bloße Behauptung neben einer scheinbar sichtbaren Realität — ohne Prüfnachweis gewinnt das Bild. Option 4 überschätzt die Selbstheilung des Netzes: Unter dem Zeitdruck von Markt und Presse entsteht der Schaden genau in den Minuten, in denen du wartest.',
      en: 'The mechanism: a deepfake is synthesised reality — the face and voice of a known person are generated anew, frame by frame, and made to say what was never said. Because "I saw it with my own eyes" carries such weight, a mere word-against-word will not do; you have to supply verifiability. The best answer combines speed with substance: authenticated owned channels, checkable provenance and forensic evidence, active notification of newsrooms, the regulator and the platforms, and preservation of the origin for later clarification. Using it responsibly: if you deploy synthetic avatars of your leadership, do so only with their consent and visible labelling — for instance for localised messages in several languages — never covertly. Option 2 feels forceful but normalises the very weapon attacking you: a self-generated clip damages your credibility and makes every genuine video of your CEO deniable in future ("that was probably AI too"). Option 3 sounds media-savvy, but an evidence-free "not authentic" stands as a bare claim beside a seemingly visible reality — without proof, the image wins. Option 4 overrates the network\'s self-correction: under pressure from market and press, the damage accrues in exactly the minutes you spend waiting.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'voice_cloning_vishing', 'identity_provenance_deception'],
  },
  {
    id: 'backfill-synthetic_media-3',
    type: 'fill-blank',
    difficulty: 'intermediate',
    question: {
      de: 'Ergänze: Die Pressestelle hat es hier mit ___ zu tun.',
      en: 'Complete the sentence: The press office is dealing with ___.',
    },
    scenario: {
      de: 'Die Pressestelle eines Nahrungsergänzungs-Herstellers wird von einem Gesundheits-Blogger mit einer „peer-reviewten Studie" konfrontiert, die dem meistverkauften Präparat einen gesundheitsschädlichen Effekt attestiert — als PDF mit Abstract, Methoden, Datentabellen und Literaturliste, aufgemacht wie ein Fachjournal-Beitrag. Die Prüfung zeigt: Der komplette Text samt Datentabellen und Quellenapparat wurde von einem Sprachmodell erzeugt, die zitierten Studien existieren nicht und die angegebene DOI führt ins Leere.',
      en: 'The press office of a dietary-supplement maker is confronted by a health blogger with a "peer-reviewed study" attributing a harmful health effect to its best-selling product — a PDF with an abstract, methods, data tables and a reference list, dressed up like a journal article. Checking it shows: the entire text, data tables and reference apparatus were produced by a language model, the cited studies do not exist, and the stated DOI leads nowhere.',
    },
    options: [
      {
        de: 'synthetischen Medien: einer vollständig KI-generierten „Studie" mit erfundenen Daten und Quellen, für die es keine reale Untersuchung gibt (Synthetische Medien)',
        en: 'synthetic media: a fully AI-generated "study" with invented data and sources, for which no real research exists (synthetic media)',
      },
      {
        de: 'einer echten, aber ungünstigen Studie, aus der gezielt nur die alarmierendsten Befunde herausgegriffen werden (Cherry-Picking)',
        en: 'a genuine but unfavourable study from which only the most alarming findings are selectively picked (cherry-picking)',
      },
      {
        de: 'einer echten, älteren Studie zu einem anderen Inhaltsstoff, die als aktueller Befund zum Präparat ausgegeben wird (Dekontextualisierung)',
        en: 'a genuine, older study on a different ingredient passed off as a current finding about the product (decontextualization)',
      },
      {
        de: 'einer wörtlich zutreffenden, aber irreführenden Einzelaussage über einen Laborwert, die einen falschen Gesamteindruck erzeugt (Paltering)',
        en: 'a literally accurate but misleading single claim about one lab value that creates a false overall impression (paltering)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Synthetische Medien: Nicht nur Bild und Ton, auch Text lässt sich fabrizieren — ein Sprachmodell liefert in Minuten eine komplette „Studie" samt Datentabellen, Methodenteil und Literaturliste, ohne dass je eine reale Untersuchung existierte. Der Hebel ist die geborgte Form der Wissenschaft: Layout, Fachsprache und ein Belegapparat verleihen dem erfundenen Befund Autorität. So arbeitest du sauber damit: Generative Textwerkzeuge gehören zu deinem Handwerk — du hältst es sauber, indem du jeden Output menschlich prüfst, Fakten und Quellen gegencheckst und, wo nötig, offen kennzeichnest; nie als vorgetäuschten Fremdbeleg. So kommst du dahinter: Geh an die Quelle, nicht an die Kopie — verlange Journal, Ausgabe, DOI und Autorenschaft, prüfe, ob die zitierten Studien real auffindbar sind, und behandle einen Beleg ohne nachvollziehbaren Ursprung als unbelegt. Cherry-Picking bräuchte eine echte Studie, aus der selektiv zitiert wird — hier gibt es kein Original. Dekontextualisierung setzte eine echte, ältere Untersuchung in einen falschen Rahmen; auch das verlangt reales Ausgangsmaterial, das hier fehlt. Paltering wäre eine wörtlich zutreffende Einzelaussage, die in die Irre führt — hier ist keine Aussage wahr-aber-schief, sondern die gesamte Studie erfunden.',
      en: 'Synthetic media: not only image and audio but text too can be fabricated — a language model delivers a complete "study" in minutes, data tables, methods section and reference list included, without any real research ever existing. The lever is the borrowed form of science: layout, technical language and a reference apparatus lend authority to the invented finding. Working with it cleanly: generative text tools are part of your craft — you keep it clean by reviewing every output yourself, fact- and source-checking, and labelling openly where needed; never as a faked third-party source. How you get to the bottom of it: go to the source, not the copy — demand the journal, issue, DOI and authorship, check whether the cited studies are actually findable, and treat any evidence with no traceable origin as unsubstantiated. Cherry-picking would need a real study to quote selectively — here there is no original. Decontextualization would place a genuine, older piece of research in a false frame; that too requires real source material, which is missing here. Paltering would be a literally accurate single statement that misleads — here no statement is true-but-skewed; the entire study is invented.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'cherry_picking', 'decontextualization_cheapfakes', 'paltering_half_truth'],
  },
];
