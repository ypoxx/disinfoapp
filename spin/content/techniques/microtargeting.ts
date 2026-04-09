import type { Technique } from '../types';

export const microtargeting: Technique =   {
    id: 'microtargeting',
    name: {
      de: 'Microtargeting',
      en: 'Microtargeting',
      hu: 'Mikrocélzás',
      pl: 'Mikrotargetowanie',
      sk: 'Mikrocielenie',
      hr: 'Mikrociljanje',
      el: 'Μικροστόχευση',
      mk: 'Микронасочување',
      cnr: 'Mikrociljanje',
    },
    description: {
      de: 'Nutzung detaillierter persönlicher Daten zur Erstellung hochgradig personalisierter Botschaften, die auf individuelle Schwachstellen abzielen.',
      en: 'Use of detailed personal data to create highly personalized messages that target individual vulnerabilities.',
      hu: 'Részletes személyes adatok felhasználása erősen személyre szabott üzenetek létrehozására, amelyek egyéni sebezhetőségeket céloznak meg.',
      pl: 'Wykorzystanie szczegółowych danych osobowych do tworzenia wysoce spersonalizowanych wiadomości, które celują w indywidualne słabości.',
      sk: 'Využitie podrobných osobných údajov na vytvorenie vysoko personalizovaných správ zameraných na individuálne zraniteľnosti.',
      hr: 'Korištenje detaljnih osobnih podataka za stvaranje visoko personaliziranih poruka koje ciljaju pojedinačne ranjivosti.',
      el: 'Χρήση λεπτομερών προσωπικών δεδομένων για τη δημιουργία εξαιρετικά εξατομικευμένων μηνυμάτων που στοχεύουν ατομικές ευπάθειες.',
      mk: 'Користење на детални лични податоци за создавање високо персонализирани пораки што таргетираат индивидуални ранливости.',
      cnr: 'Korišćenje detaljnih ličnih podataka za stvaranje visoko personalizovanih poruka koje ciljaju pojedinačne ranjivosti.',
    },
    category: 'digital_influence',
    difficulty: 'expert',
    effectiveness: 'very_high',
    examples: [
      'Cambridge Analytica Skandal: psychografisches Profiling',
      'Personalisierte politische Werbung basierend auf Facebook-Daten',
      'Individualisierte Produktwerbung basierend auf Browsing-Verhalten',
      'Dynamische Preisgestaltung basierend auf Nutzerprofil',
    ],
    evidence: {
      studies: [
        'Matz et al. (2017) - Psychological Targeting',
        'Kosinski et al. (2013) - Digital Footprints',
        'Tufekci (2014) - Engineering the Public',
      ],
      findings: 'Microtargeting kann Persuasion signifikant erhöhen. Effektivität hängt von Datenqualität und Modellgenauigkeit ab.',
      uncertainty: {
        confidence: 0.73,
        sampleSize: '25+ Studien, N>50,000',
        evidenceQuality: 'moderate',
      },
    },
    relatedTechniques: ['digital_influence', 'framing', 'emotional_appeal'],
    warningNeurons: [
      'Ungewöhnlich relevante Werbung',
      'Botschaften, die persönliche Details kennen',
      'Exakte Ansprache von Ängsten oder Wünschen',
      'Verdächtig passende Angebote',
    ],
    taxonomyGroups: ['digital_techniques', 'data_exploitation'],
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Facebook%27s_estimates_on_users_affected_by_Cambridge_Analytica.svg/640px-Facebook%27s_estimates_on_users_affected_by_Cambridge_Analytica.svg.png',
      alt: 'Cambridge Analytica Skandal - Betroffene Facebook-Nutzer nach Ländern',
      credit: 'Wikimedia Commons (CC-BY-SA)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Facebook%27s_estimates_on_users_affected_by_Cambridge_Analytica.svg',
      context: 'Cambridge Analytica nutzte psychografisches Profiling für personalisierte politische Werbung',
    },
  };
