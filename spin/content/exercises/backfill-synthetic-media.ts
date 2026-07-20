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
      de: 'Krisenmorgen in der Konzernkommunikation eines Logistikers: In den sozialen Netzen verbreitet sich ein fotorealistisches Bild, das das zentrale Verteilzentrum lichterloh in Flammen zeigt, Rauchsäule über der bekannten Hallenfront, Feuerwehr im Anschnitt. Kunden fragen nach Lieferausfällen, ein Börsendienst greift es auf. Die Betriebsleiterin bestätigt: Es hat nie gebrannt, die Halle steht unversehrt. Das Bild ist kein aus dem Zusammenhang gerissenes Archivfoto eines anderen Brandes — es zeigt ein Ereignis, das es nie gab, komplett von einem Bildgenerator erzeugt, samt erfundener Feuerwehrleute.',
      en: 'A crisis morning in the corporate communications of a logistics firm: a photorealistic image is spreading on social media showing the central distribution hub ablaze, a plume of smoke over the familiar warehouse frontage, fire crews in the frame. Customers are asking about delivery outages, a market-data service picks it up. The site manager confirms: there was never a fire, the building stands intact. The image is not an archive photo of some other fire wrenched out of context — it depicts an event that never happened, generated entirely by an image model, including invented firefighters.',
    },
    options: [
      { de: 'Synthetische Medien', en: 'Synthetic media' },
      { de: 'Dekontextualisierung (Cheapfakes)', en: 'Decontextualization (cheapfakes)' },
      { de: 'Visuelle Manipulation', en: 'Visual manipulation' },
      { de: 'Voice Cloning / Vishing', en: 'Voice cloning / vishing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Synthetische Medien: Ein Bildgenerator erzeugt hier ein Ereignis, das nie stattfand, in fotorealistischer Qualität — der Hebel ist die Fabrikation selbst, nicht die Umdeutung von etwas Echtem. Fotorealismus trägt die stille Annahme „so etwas kann man nicht einfach erfinden", und genau diese Annahme kippt. Legitim einsetzen: Generierte Bilder sind sauber, wenn sie erkennbar illustrativ sind und als KI-generiert gekennzeichnet werden — etwa als Symbolbild oder in der Konzeptphase einer Kampagne, nie als Beleg für ein reales Geschehen. Erkennen und kontern: Behandle jedes dramatische Bild ohne unabhängige Quelle als unbestätigt, mach eine Rückwärtssuche, prüfe Herkunfts- und Echtheitssignale (C2PA/Content Credentials) und lass die eigene Lage vor Ort bestätigen, bevor du reagierst. Dekontextualisierung wäre ein echtes Foto eines anderen Brandes, das als aktuell ausgegeben wird — hier existiert überhaupt kein Originalereignis. Visuelle Manipulation verzerrte ein echtes Bild in Ausschnitt, Skala oder Farbe; hier ist nichts verzerrt, sondern alles erfunden. Voice Cloning / Vishing täuscht über eine geklonte Stimme im direkten Kontakt — der Kanal hier ist ein Bild, keine Audiospur.',
      en: 'Synthetic media: an image model here fabricates an event that never took place, in photorealistic quality — the lever is the fabrication itself, not the reframing of something real. Photorealism carries the quiet assumption "you cannot simply invent something like this", and that assumption is exactly what fails. Used legitimately: generated images are clean when they are recognisably illustrative and labelled as AI-generated — as a symbolic visual or in a campaign concept phase, never as evidence of a real occurrence. To spot and counter it: treat any dramatic image without an independent source as unconfirmed, run a reverse search, check provenance and authenticity signals (C2PA / Content Credentials), and have your own on-site situation confirmed before you react. Decontextualization would be a genuine photo of a different fire passed off as current — here no original event exists at all. Visual manipulation would distort a real image in crop, scale or colour; here nothing is distorted, everything is invented. Voice cloning / vishing deceives through a cloned voice in live contact — the channel here is an image, not an audio track.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'decontextualization_cheapfakes', 'visual_manipulation', 'voice_cloning_vishing'],
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
      de: 'Du leitest die Unternehmenskommunikation eines Pharmaunternehmens. Am Abend kursiert ein 40-Sekunden-Video: Deine Vorstandsvorsitzende räumt darin, gestochen scharf und mit ihrer Stimme, angeblich verschwiegene Nebenwirkungen eines Präparats ein. Sie hat das nie gesagt — das Video ist ein KI-generierter Deepfake, Lippen und Mimik synthetisch. Es läuft bereits bei Reichweiten-Accounts, erste Journalisten fragen an. In 30 Minuten schließt die US-Börse.',
      en: 'You head corporate communications at a pharmaceutical company. In the evening a 40-second video is circulating: in it, your CEO — pin-sharp and in her own voice — supposedly admits to concealed side effects of a drug. She never said this — the video is an AI-generated deepfake, lips and expression synthetic. It is already running on high-reach accounts, and the first journalists are asking. The US market closes in 30 minutes.',
    },
    options: [
      {
        de: 'Ich veröffentliche unverzüglich über die verifizierten Eigenkanäle ein authentifiziertes Dementi mit Prüfnachweis (Herkunfts- und Echtheitsdaten, forensische Einstufung), informiere Redaktionen, Börsenaufsicht und Plattformen mit Belegen und lasse den Ursprung des Clips forensisch sichern.',
        en: 'I immediately publish an authenticated denial with proof on our verified owned channels (provenance and authenticity data, forensic classification), notify newsrooms, the market regulator and the platforms with evidence, and have the clip\'s origin forensically preserved.',
      },
      {
        de: 'Ich lasse selbst schnell einen kurzen Gegen-Clip erzeugen, in dem die Vorstandsvorsitzende die Vorwürfe entkräftet — Bild gegen Bild wirkt am schnellsten.',
        en: 'I quickly have a short counter-clip generated in which the CEO refutes the allegations — image against image works fastest.',
      },
      {
        de: 'Ich setze einen knappen Post ab, dass das Video „nicht echt" sei, verzichte aber auf Details und Belege, um dem Clip keine zusätzliche Reichweite zu geben.',
        en: 'I put out a brief post saying the video is "not real", but skip details and evidence so as not to give the clip extra reach.',
      },
      {
        de: 'Ich warte ab: Deepfakes werden meist rasch als solche erkannt, ein vorschnelles Dementi würde das Video nur größer machen.',
        en: 'I hold off: deepfakes are usually spotted quickly for what they are, and a hasty denial would only make the video bigger.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Mechanismus: Ein Deepfake kapert das vertrauteste Echtheitssignal — das bewegte Gesicht und die Stimme einer bekannten Person — und lässt sie sagen, was sie nie gesagt hat. Genau weil „das habe ich mit eigenen Augen gesehen" so schwer wiegt, reicht ein bloßes Wort-gegen-Wort nicht; du musst Prüfbarkeit liefern. Die beste Antwort kombiniert Tempo mit Substanz: authentifizierte Eigenkanäle, überprüfbare Herkunfts- und Forensikbelege, aktive Information von Redaktionen, Aufsicht und Plattformen und die forensische Sicherung des Ursprungs für spätere Klärung. Legitim einsetzen: Synthetische Avatare der eigenen Führung sind vertretbar, wenn sie mit Einwilligung und sichtbarer Kennzeichnung entstehen, etwa für lokalisierte Botschaften — nie ohne Offenlegung. Option 2 wirkt schlagkräftig, normalisiert aber genau die Waffe, die dich angreift: Ein selbst generierter Clip untergräbt deine Glaubwürdigkeit und macht künftig jedes echte Video deiner Chefin bestreitbar. Option 3 klingt medienklug, aber ein belegloses „nicht echt" steht als eine Behauptung neben einer scheinbar sichtbaren — ohne Prüfnachweis gewinnt das Bild. Option 4 überschätzt die Selbstheilung des Netzes: Unter Zeitdruck von Markt und Presse ist Schweigen die teuerste Option, der Schaden entsteht in den Minuten, in denen du wartest.',
      en: 'The mechanism: a deepfake hijacks the most trusted authenticity signal — the moving face and voice of a known person — and makes them say what they never said. Precisely because "I saw it with my own eyes" carries such weight, a mere word-against-word will not do; you have to supply verifiability. The best answer combines speed with substance: authenticated owned channels, checkable provenance and forensic evidence, active notification of newsrooms, the regulator and the platforms, and forensic preservation of the origin for later clarification. Used legitimately: synthetic avatars of your own leadership are defensible when produced with consent and visible labelling, for instance for localised messages — never without disclosure. Option 2 feels forceful but normalises the very weapon attacking you: a self-generated clip undermines your credibility and makes every genuine video of your CEO deniable in future. Option 3 sounds media-savvy, but an evidence-free "not real" stands as one claim beside a seemingly visible one — without proof, the image wins. Option 4 overrates the network\'s self-correction: under pressure from market and press, silence is the most expensive option, and the damage accrues in the minutes you spend waiting.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'voice_cloning_vishing', 'identity_provenance_deception'],
  },
  {
    id: 'backfill-synthetic_media-3',
    type: 'fill-blank',
    difficulty: 'beginner',
    question: {
      de: 'Ergänze: Die Pressestelle hat es hier mit ___ zu tun.',
      en: 'Complete the sentence: The press office is dealing with ___.',
    },
    scenario: {
      de: 'Ein Blogger konfrontiert die Pressestelle eines Getränkeherstellers mit einem „Testbericht" eines etablierten Verbrauchermagazins, der dem Produkt einen Schadstofffund attestiert — samt Redaktions-Logo, Autorenzeile und Layout des Magazins. Die Redaktion des echten Magazins erklärt auf Rückfrage: Diesen Beitrag gibt es nicht, Autorin und Testreihe sind frei erfunden, Text und Aufmachung wirken wie in Sekunden von einem Sprachmodell erzeugt. Keine reale Ausgabe wurde umgeschrieben — der ganze Artikel ist Neuware aus dem Generator.',
      en: 'A blogger confronts the press office of a beverage maker with a "test report" from an established consumer magazine attesting a contaminant finding in the product — complete with the magazine\'s masthead, byline and layout. On enquiry, the real magazine\'s editors state: this article does not exist, the author and the test series are pure invention, and the text and design look generated in seconds by a language model. No real issue was rewritten — the entire article is fresh output from the generator.',
    },
    options: [
      {
        de: 'synthetischen Medien: einem vollständig KI-generierten „Artikel" samt Autorin und Testreihe, die es nie gab (Synthetische Medien)',
        en: 'synthetic media: a fully AI-generated "article", complete with an author and a test series that never existed (synthetic media)',
      },
      {
        de: 'einem echten Testbericht des Magazins, aus dem gezielt nur die negativsten Sätze zitiert werden (Cherry-Picking)',
        en: 'a genuine magazine test report from which only the most negative sentences are selectively quoted (cherry-picking)',
      },
      {
        de: 'einem echten, aber älteren Rückruf-Artikel des Magazins, der als aktueller Test ausgegeben wird (Dekontextualisierung)',
        en: 'a genuine but older recall article from the magazine passed off as a current test (decontextualization)',
      },
      {
        de: 'einer erfundenen Flut positiver wie negativer Nutzerkommentare unter dem Beitrag, die eine Marktstimmung vortäuscht (Gefälschter Social Proof)',
        en: 'a fabricated flood of positive and negative user comments under the piece, faking a market mood (fake social proof)',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Synthetische Medien: Nicht nur Bild und Ton, auch Text lässt sich fabrizieren — ein Sprachmodell erzeugt in Sekunden einen kompletten Artikel samt Autorenzeile und Magazin-Layout, ohne dass je eine reale Vorlage existierte. Der Hebel ist die geborgte Autorität einer bekannten Redaktion, die dem erfundenen Befund Gewicht verleiht. Legitim einsetzen: Generative Textwerkzeuge gehören längst zum Handwerk — sauber bleibt es mit menschlicher Prüfung, Faktenkontrolle und, wo nötig, offener Kennzeichnung; nie als vorgetäuschter Fremdbeleg. Erkennen und kontern: Geh an die Quelle, nicht an die Kopie — frag beim genannten Medium nach der Originalpublikation (Ausgabe, URL, Autorin), lass dir die Fundstelle zeigen und behandle einen Beleg ohne auffindbaren Ursprung als unbelegt. Cherry-Picking bräuchte einen echten Bericht, aus dem selektiv zitiert wird — hier existiert kein Original. Dekontextualisierung setzte einen echten, älteren Beitrag in einen falschen Rahmen; auch das verlangt reales Ausgangsmaterial, das hier fehlt. Gefälschter Social Proof zielt auf vorgetäuschte Zustimmung vieler in Kommentaren oder Bewertungen — hier ist nicht die Reaktion erfunden, sondern der Artikel selbst.',
      en: 'Synthetic media: not only image and audio but text too can be fabricated — a language model produces a complete article in seconds, byline and magazine layout included, without any real original ever existing. The lever is the borrowed authority of a known editorial brand, lending weight to the invented finding. Used legitimately: generative text tools have long been part of the craft — it stays clean with human review, fact-checking and, where needed, open labelling; never as a faked third-party source. To spot and counter it: go to the source, not the copy — ask the named outlet for the original publication (issue, URL, author), have the reference shown to you, and treat any source with no locatable origin as unsubstantiated. Cherry-picking would need a genuine report to quote selectively — here no original exists. Decontextualization would place a real, older piece in a false frame; that too requires real source material, which is absent here. Fake social proof targets faked mass approval in comments or ratings — here it is not the reaction that is invented but the article itself.',
    },
    points: 10,
    primaryTechniqueId: 'synthetic_media',
    relatedTechniques: ['synthetic_media', 'cherry_picking', 'decontextualization_cheapfakes', 'fake_social_proof'],
  },
];
