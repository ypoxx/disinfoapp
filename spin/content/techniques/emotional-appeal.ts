import type { Technique } from '../types';

export const emotionalAppeal: Technique =   {
    id: 'emotional_appeal',
    name: {
      de: 'Emotionale Appelle',
      en: 'Emotional Appeal',
      hu: 'Érzelmi apelláció',
      pl: 'Apel emocjonalny',
      sk: 'Emocionálny apel',
      hr: 'Emocionalni apel',
      el: 'Συναισθηματική έκκληση',
      mk: 'Емоционален апел',
      cnr: 'Emocionalni apel',
    },
    description: {
      de: 'Ansprache von Emotionen (Angst, Wut, Mitgefühl, Freude) statt rationaler Argumentation. Emotionen können logisches Denken überschreiben.',
      en: 'Addressing emotions (fear, anger, compassion, joy) instead of rational argumentation. Emotions can override logical thinking.',
      hu: 'Érzelmekre (félelem, düh, együttérzés, öröm) apellálás racionális érvelés helyett. Az érzelmek felülírhatják a logikus gondolkodást.',
      pl: 'Odwoływanie się do emocji (strach, gniew, współczucie, radość) zamiast racjonalnej argumentacji. Emocje mogą przesłonić logiczne myślenie.',
      sk: 'Apelovanie na emócie (strach, hnev, súcit, radosť) namiesto racionálnej argumentácie. Emócie môžu potlačiť logické myslenie.',
      hr: 'Obraćanje emocijama (strah, ljutnja, suosjećanje, radost) umjesto racionalne argumentacije. Emocije mogu nadvladati logičko razmišljanje.',
      el: 'Απεύθυνση στα συναισθήματα (φόβος, θυμός, συμπόνια, χαρά) αντί της λογικής επιχειρηματολογίας. Τα συναισθήματα μπορούν να υπερισχύσουν της λογικής σκέψης.',
      mk: 'Обраќање кон емоциите (страв, гнев, сочувство, радост) наместо рационална аргументација. Емоциите можат да го надминат логичкото размислување.',
      cnr: 'Obraćanje emocijama (strah, ljutnja, saosjećanje, radost) umjesto racionalne argumentacije. Emocije mogu nadvladati logičko razmišljanje.',
    },
    category: 'emotional_manipulation',
    difficulty: 'beginner',
    effectiveness: 'very_high',
    examples: [
      'Angstappelle: "Denken Sie an Ihre Kinder!"',
      'Wut: "Diese Elite raubt uns unsere Rechte!"',
      'Mitgefühl: Bilder leidender Menschen',
      'Nostalgie: "Früher war alles besser"',
    ],
    evidence: {
      studies: [
        'Petty & Cacioppo (1986) - Elaboration Likelihood Model',
        'Nabi (2002) - Discrete Emotions and Persuasion',
        'Dillard & Peck (2000) - Affect and Persuasion',
      ],
      findings: 'Emotionale Appelle sind sehr effektiv, besonders bei niedriger kognitiver Verarbeitung. Angst und Wut sind besonders wirksam.',
      uncertainty: {
        confidence: 0.91,
        sampleSize: '150+ Studien, N>22,000',
        evidenceQuality: 'high',
      },
    },
    relatedTechniques: ['framing', 'priming', 'narrative_persuasion'],
    warningNeurons: [
      'Starke emotionale Sprache und Bilder',
      'Appell an Urängste',
      'Fehlende sachliche Argumentation',
      'Dramatisierung und Übertreibung',
    ],
    taxonomyGroups: ['emotional_manipulation', 'persuasion_techniques'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/%22Remember_Dec._7th%22_-_NARA_-_513580.jpg/480px-%22Remember_Dec._7th%22_-_NARA_-_513580.jpg',
      alt: 'Remember Dec. 7th - WWII Propaganda Poster mit emotionalem Appell',
      credit: 'U.S. National Archives / Wikimedia Commons (Public Domain)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%22Remember_Dec._7th%22_-_NARA_-_513580.jpg',
      context: 'Emotionale Appelle umgehen rationales Denken durch Aktivierung von Angst und Wut',
    },
  };
