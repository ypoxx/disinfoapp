import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: ikea_effect).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const ikeaEffect: Technique = {
  id: 'ikea_effect',
  name: {
    de: 'IKEA-Effekt',
    en: 'IKEA Effect',
  },
  description: {
    de: 'Was man selbst mitgebaut, zusammengesetzt oder erarbeitet hat, wird höher bewertet als ein gleichwertiges fertiges Ergebnis — die investierte eigene Arbeit, nicht der Besitz allein, treibt die Aufwertung. Co-Creation, Konfiguratoren und Mitmach-Workshops nutzen diesen Hebel, indem sie die Zielperson vor der Entscheidung selbst Hand anlegen lassen.',
    en: 'People place a higher value on things they helped build, assemble, or work out themselves than on an equivalent ready-made result — it is the labour they put in, not ownership alone, that drives the mark-up. Co-creation, configurators, and hands-on workshops exploit this by getting the other side to do some of the work before the decision is on the table.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Strategie-Workshop einer Kommunikationsberatung: Statt ein fertiges Botschaftshaus zu liefern, lässt die Beraterin das Inhouse-Kommunikationsteam die Kernbotschaften über zwei Tage selbst am Whiteboard erarbeiten. In der Entscheidungsrunde Wochen später verteidigt das Team sein selbst gebautes Framework gegen einen extern zugelieferten, nachweislich schärferen Entwurf — nicht weil er besser wäre, sondern weil sie es mit eigener Hand gebaut haben.',
    'Kick-off zur Werte-Neufassung eines Maschinenbauers: Die Leiterin Interne Kommunikation lässt die Belegschaft die neuen Unternehmenswerte in moderierten Schreibwerkstätten selbst formulieren, statt sie von der Agentur ausformulieren zu lassen. In der Rollout-Umfrage tragen die Mitarbeitenden gerade die selbst mitgeschriebenen Leitsätze auffällig stärker mit — die eigene Schreibarbeit, nicht der Textfeinschliff, treibt die Zustimmung.',
    'Produktlaunch eines Müsli-Start-ups: Im Online-Konfigurator stellt sich die Kundin ihre Mischung Zutat für Zutat selbst zusammen und benennt sie. In der Kaufbefragung bewertet sie genau diese selbst komponierte Mischung höher und will mehr dafür zahlen als für eine fertig kuratierte Hausmischung derselben Zusammensetzung — die eigene Zusammenbau-Arbeit hebt den Wert.',
  ],
  evidence: {
    studies: [
      'Norton et al. (2012) - The IKEA Effect: When Labor Leads to Love'
    ],
    findings: 'Norton, Mochon & Ariely (2012) fanden in mehreren Experimenten, dass Teilnehmende selbst zusammengebaute Objekte (IKEA-Boxen, Origami, Lego) höher bewerteten und mehr dafür zahlen wollten als identische, fremdgefertigte Stücke — vorausgesetzt, die Montage gelang. Der Effekt ist plausibel, beruht aber auf einer schmalen Basis vorwiegend westlicher Laborstichproben (WEIRD); Größe und Robustheit hängen stark vom Kontext ab. Als schwach abgesicherter Befund taugt er zur Deutung, nicht als verlässliches Wirkversprechen.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Wenige Laborexperimente (Norton et al. 2012)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['endowment_effect', 'sunk_cost_escalation', 'consistency'],
  warningNeurons: [
    'Du wirst eingeladen, das Ergebnis selbst mitzubauen — Workshop, Konfigurator, Baukasten — kurz bevor darüber entschieden oder es gekauft wird',
    'Der wahrgenommene Wert eines Vorschlags steigt mit der Menge eigener Arbeit, die darin steckt, nicht mit seiner nachweisbaren Qualität',
    'Ein selbst erarbeitetes Ergebnis wird gegen eine objektiv stärkere, aber „fremde" Alternative verteidigt',
    'Der Anbieter betont durchgehend den Selbstbau-Anteil („von Ihnen selbst konfiguriert", „gemeinsam entwickelt") statt das fertige Ergebnis',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
