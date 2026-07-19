import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: mental_accounting).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const mentalAccounting: Technique = {
  id: 'mental_accounting',
  name: {
    de: 'Mental Accounting',
    en: 'Mental Accounting',
  },
  description: {
    de: 'Geld wird nicht als eine einheitliche Menge behandelt, sondern gedanklich getrennten Konten zugeordnet (etwa „Lohn", „Bonus", „Rückerstattung") — und je nach Konto unterschiedlich bewertet und ausgegeben, obwohl ein Euro überall gleich viel wert ist.',
    en: 'People do not treat money as a single pool but sort it into separate mental accounts (e.g. "salary", "bonus", "refund") and value and spend each one differently — even though a euro is worth the same wherever it sits.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'E-Mail-Kampagne eines Reiseportals an Bestandskunden: Der Kampagnenmanager textet die Betreffzeile „Ihre Steuerrückerstattung ist da — gönnen Sie sich damit die Reise, die aus dem Haushaltsbudget nie drin wäre." Dieselben Euro werden als „Extra-Konto" etikettiert, das lockerer ausgegeben werden dürfe als reguläres Einkommen.',
    'Budgetplanungsgespräch: Der Bereichsleiter Vertrieb wirbt beim CFO dafür, das neue CRM-Tool „aus dem Digitalisierungstopf statt aus dem Vertriebsbudget" zu finanzieren — „im Vertriebsbudget wäre die Summe ein Großposten, im Digitalisierungstopf geht sie zwischen den anderen Positionen unter." Der identische Betrag wird je nach Konto anders gewichtet.',
    'Webinar einer Anlageplattform für Privatanleger: Die Moderatorin rät im Chat „Die Kursgewinne dieses Jahres sind quasi Spielgeld — reinvestieren Sie die ruhig offensiv, Ihr eingesetztes Kapital bleibt davon ja unberührt." Realisierte Gewinne werden als separates Konto behandelt, für das riskantere Ausgaben legitim erscheinen (House-Money-Effekt).',
  ],
  evidence: {
    studies: [
      'Thaler (1985) - Mental Accounting and Consumer Choice',
      'Thaler (1999) - Mental Accounting Matters',
    ],
    findings: 'Thaler (1985; 1999) beschreibt Mental Accounting als mehrfach dokumentiertes Muster: Menschen ordnen Geld gedanklich getrennten Konten zu und bewerten identische Beträge je nach Herkunft und Verwendungszweck unterschiedlich — etwa beim „House-Money-Effekt" oder beim leichteren Ausgeben von Sondereinkünften. Die Grundeffekte gelten als repliziert, doch Effektgröße und Robustheit hängen stark vom Kontext ab, und die Belege stammen überwiegend aus westlichen Stichproben (WEIRD). Das Muster ist real, seine Wirkung im Einzelfall aber schwer vorherzusagen (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Überwiegend Labor- und Feldstudien, WEIRD-Stichproben',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['loss_aversion', 'framing', 'endowment_effect', 'decoy_effect'],
  warningNeurons: [
    'Derselbe Geldbetrag wird je nach Herkunft anders eingeordnet — „Bonus", „Rückerstattung", „Spielgeld" statt schlicht „Geld"',
    'Ein Ausgabenvorschlag wird gezielt einem anderen Budgettopf zugeordnet, in dem die Summe kleiner oder folgenloser wirkt',
    'Eine Gesamtsumme wird in eine kleine Alltagseinheit umgerechnet („weniger als eine Tasse Kaffee am Tag"), statt als Jahres- oder Gesamtbetrag genannt',
    'Sondereinkünfte oder Gewinne werden als „extra" markiert, das man lockerer ausgeben dürfe als reguläres Einkommen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
