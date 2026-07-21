import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: sunk_cost_escalation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const sunkCostEscalation: Technique = {
  id: 'sunk_cost_escalation',
  name: {
    de: 'Sunk-Cost-Effekt / Eskalation des Commitments',
    en: 'Sunk cost / escalation of commitment',
  },
  description: {
    de: 'Das Festhalten an einem Vorhaben oder das Nachlegen, weil bereits Ressourcen investiert wurden, die nicht zurückzuholen sind — obwohl allein die künftigen Kosten und Nutzen zählen dürften. Manipulativ genutzt, um einen Ausstieg als Verschwendung des bisher Investierten erscheinen zu lassen.',
    en: 'Sticking with — or pouring more into — a course of action because resources already spent cannot be recovered, even though only future costs and benefits should count. Used manipulatively to make quitting look like wasting everything invested so far.',
  },
  category: 'cognitive_bias',
  difficulty: 'intermediate',
  effectiveness: 'high',
  examples: [
    'Budgetreview einer laufenden Kampagne: Vor der Marketingleiterin verteidigt der Etatdirektor der Agentur die messbar schwächelnde Influencer-Kampagne: „Die gebuchte Media über 400.000 Euro ist längst bezahlt — das Geld ist so oder so weg. Wenn wir jetzt stoppen, war die ganze Summe umsonst; legen wir lieber noch einen sechsstelligen Betrag nach, dann rechnet sich das Investment doch noch." Die aktuellen Abverkaufszahlen sprechen klar für einen Abbruch.',
    'Rückgewinnungs-Call eines SaaS-Anbieters: Der Customer-Success-Manager hält der kündigungswilligen Content-Managerin entgegen: „In zwei Jahren haben Sie Ihr komplettes Redaktionsarchiv, alle Templates und Workflows bei uns aufgebaut — diese Aufbauarbeit jetzt wegzuwerfen wäre schade; bleiben Sie noch ein Jahr, dann rechnet es sich." Der Wechsel wäre technisch problemlos möglich.',
    'Aufsichtsratssitzung zum konzerneigenen Nachrichtenportal: Das Portal verfehlt seit drei Jahren jede Reichweitenprognose. Der Vorstandssprecher wirbt für eine weitere Finanzierungsrunde: „Wir stecken zu tief drin, um jetzt aufzugeben — nach zwölf Millionen Anschubfinanzierung wäre ein Ausstieg das Eingeständnis, dass alles umsonst war."',
  ],
  evidence: {
    studies: [
      'Arkes & Blumer (1985) - The Psychology of Sunk Cost',
      'Roth et al. (2015) - On the sunk-cost effect in economic decision-making: a meta-analytic review',
    ],
    findings: 'Arkes & Blumer (1985) zeigen experimentell, dass bereits getätigte, nicht erstattbare Ausgaben die Bereitschaft erhöhen, an einem Vorhaben festzuhalten, obwohl rational nur die künftigen Kosten und Nutzen zählen dürften. Die Meta-Analyse von Roth et al. (2015) bestätigt den Effekt als robust und replizierbar, findet seine Stärke aber deutlich abhängig von der Verantwortlichkeit für die Erstinvestition, vom Framing und von der Domäne. Die Befunde stammen überwiegend aus westlichen Labor- und Entscheidungsstudien; die Übertragung auf konkrete Praxiskontexte bleibt kontextabhängig (moderate Evidenz).',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Meta-Analyse mehrerer Experimente (Roth et al. 2015)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['consistency', 'sludge', 'loss_aversion'],
  warningNeurons: [
    'Das Hauptargument fürs Weitermachen ist das bereits Investierte („wir haben schon so viel reingesteckt"), nicht die künftige Wirkung',
    'Bereits ausgegebene, nicht erstattbare Ressourcen — Geld, Zeit, Aufbauarbeit — werden in die Entscheidung über die Zukunft eingerechnet',
    '„Jetzt aufzugeben hieße, dass alles umsonst war" — der Abbruch wird als Eingeständnis eines Fehlers gerahmt',
    'Je schlechter es läuft, desto höher der vorgeschlagene Einsatz („noch eine Runde, dann rechnet es sich")',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
