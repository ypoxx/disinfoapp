import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave6) (Taxonomie 21.0.1, Knoten: networked_harassment).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 * Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
 * Elemente; die Erklärungen fokussieren auf Erkennen und Schutz der Betroffenen.
 * Evidenz-Tier weak: keine quantifizierten Wirkbehauptungen.
 */
export const networkedHarassment: Technique = {
  id: 'networked_harassment',
  name: {
    de: 'Koordinierte Online-Belästigung (Networked Harassment)',
    en: 'Networked Harassment',
  },
  description: {
    de: 'Ein reichweitenstarker Akteur markiert eine einzelne Person öffentlich als Normverstoß und liefert seiner Anhängerschaft die Zielkoordinaten; das Publikum bestraft die Zielperson daraufhin aus eigenem Antrieb mit einer Welle von Beschimpfungen, Meldungen und Druck. Die Belästigung ist moralisch gerahmt und wirkt als Gruppendisziplinierung — sie soll die Zielperson einschüchtern und zum Schweigen bringen, während der Auslöser deniabel bleibt („ich habe nur darauf hingewiesen").',
    en: 'A high-reach actor publicly flags one individual as a norm violator and hands their followers the target\'s coordinates; the audience then punishes the target of its own accord with a wave of abuse, mass-reporting, and pressure. The harassment is morally framed and works as group discipline — meant to intimidate the target into silence — while the instigator retains deniability ("I only pointed it out").',
  },
  category: 'coercive_control',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Auf X postet ein Speaker mit großer Followerschaft nach einer Branchentagung den Screenshot einer nüchternen Wortmeldung einer Nachwuchs-Kommunikatorin und rahmt sie als Verrat an den Werten der Branche: „Seht euch an, wer so etwas sagt." Innerhalb von Stunden überziehen Hunderte seiner Follower — echte, empörte Accounts — ihr Profil eigenständig mit Beschimpfungen, Rücktrittsforderungen und Nachrichten an ihren Arbeitgeber, bis sie ihren Account stilllegt.',
    'Auf LinkedIn teilt eine reichweitenstarke Meinungsführerin den Beitrag eines mittelständischen Marketingleiters, markiert ihn namentlich und kommentiert, so jemand gehöre „an den Pranger". Ihre Community greift den Aufruf aus geteilter Empörung selbst auf: Dutzende kommentieren abwertend unter seinen Beiträgen, schreiben seine Kund:innen an und bewerten sein Unternehmen massenhaft schlecht — nicht von ihr organisiert, sondern als spontaner Pile-on.',
    'In einem gut besuchten Community-Forum markiert ein anerkannter Fachautor die Aussage einer PR-Beraterin als Tabubruch und fordert seine Leserschaft auf, „Haltung zu zeigen". Zahlreiche Mitglieder fluten daraufhin aus eigenem Antrieb ihr Postfach und ihre öffentlichen Kanäle mit herabsetzenden Nachrichten, bis sie sich aus der Debatte zurückzieht.',
  ],
  evidence: {
    studies: [
      'Marwick (2021) - Morally Motivated Networked Harassment as Normative Reinforcement (Social Media + Society)'
    ],
    findings: 'Marwick (2021) beschreibt vernetzte Belästigung als konzeptuelles Modell: Ein Netzwerkknoten markiert einen (angeblichen) Normverstoß, und das Publikum bestraft die Zielperson eigenständig — die Belästigung wirkt so als normative Verstärkung innerhalb der Gruppe. Die Herleitung ist qualitativ-theoretisch; eine quantifizierte Wirkungs- oder Häufigkeitsrate liegt nicht vor. Der Eintrag beschreibt ein wiedererkennbares Muster, keine Technik mit gesichertem Wirkungsnachweis (niedrige Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Konzeptuelles/qualitatives Modell; kein quantifizierter Wirkungsnachweis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['scapegoating_othering', 'proxy_attack'],
  warningNeurons: [
    'Ein reichweitenstarker Account markiert eine einzelne Person als Normverstoß und liefert die Zielkoordinaten mit — Name, Screenshot, Handle, Arbeitgeber',
    'Der Angriff kommt als Welle vieler eigenständiger, echter Accounts kurz nach dem Signal eines Meinungsführers, moralisch aufgeladen („Haltung zeigen", „an den Pranger")',
    'Der Auslöser bleibt deniabel: „Ich habe doch nur darauf hingewiesen" — den Pile-on führen andere aus',
    'Ziel ist nicht die Sachdebatte, sondern Einschüchterung und Rückzug der Zielperson (Account-Stilllegung, Schweigen)',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
  seriousMode: true,
};
