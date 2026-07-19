import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5b) (Taxonomie 21.0.1, Knoten: parasocial_manipulation).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const parasocialManipulation: Technique = {
  id: 'parasocial_manipulation',
  name: {
    de: 'Parasoziale Manipulation',
    en: 'Parasocial Manipulation',
  },
  description: {
    de: 'Ausnutzen einer einseitigen, gefühlt persönlichen Bindung, die ein Publikum zu Medienpersonen, Influencer:innen oder künstlichen Gesprächspartnern aufbaut — die inszenierte Nähe wird zum Hebel für Vertrauen, Kaufentscheidungen oder Loyalität, obwohl die Beziehung nie wechselseitig war.',
    en: 'Exploiting the one-sided but seemingly personal bond an audience forms with a media figure, influencer, or artificial conversational agent — the staged sense of closeness becomes the lever for trust, purchases, or loyalty, even though the relationship was never mutual.',
  },
  category: 'social_dynamics',
  difficulty: 'advanced',
  effectiveness: 'moderate',
  examples: [
    'Unboxing-Video einer Reise-Influencerin → an ihre Stammzuschauer, die ihr seit dem ersten Kanaljahr folgen: Sie hält einen gesponserten Koffer in die Kamera und sagt „Ihr seid von Anfang an dabei, deshalb zeige ich euch das zuerst — ich reise nur noch mit dem hier." Kein Preisvergleich, kein Testkriterium; die Kaufempfehlung ruht allein auf der jahrelangen gefühlten Verbundenheit.',
    'Solo-Podcast zu Persönlichkeitsentwicklung → der Host an seine Stammhörer, die ihn seit sechs Jahren jede Woche im Ohr haben, am Ende der Folge: „Ihr kennt mich, wir sind hier jede Woche zusammen durchgegangen — deshalb sage ich es genau euch: Ich nehme dieses Präparat, nehmt es auch." Keine Studie, kein Wirknachweis, kein geltend gemachtes Fachwissen; die Empfehlung trägt allein die über sechs Jahre gewachsene, gefühlt persönliche Vertrautheit, nicht ein prüfbares Argument.',
    'Mitglieder-Livestream eines unabhängigen Nachrichten-Kanals → der Host an seine Stammzuschauer, Spendenaufruf am Sendungsende: „Wir sehen uns hier jeden Abend, ihr seid längst mein engster Kreis." Anschließend legt er ein kostenpflichtiges Abo als Freundschaftsdienst nahe, sodass die über Jahre gewachsene gefühlte Vertrautheit die Zahlungsbereitschaft trägt, nicht das inhaltliche Argument.',
  ],
  evidence: {
    studies: [
      'Han et al. (2024) - Meta-analysis of social media influencer impact: Key antecedents and theoretical foundations'
    ],
    findings: 'Han et al. (2024) bündeln die Influencer-Marketing-Forschung: Parasoziale Interaktion korreliert mit Vertrauen und Kaufabsicht, ist als Wirkpfad aber sekundär — die wahrgenommene Glaubwürdigkeit der Quelle trägt robuster. Die Befunde sind überwiegend korrelativ und attitudinal (Einstellung, nicht Verhalten); die Übertragung auf KI-Companions und auf tatsächliches Handeln ist offen. Insgesamt schwache, kontextabhängige Evidenz (geringe Konfidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Meta-Analyse (Influencer-Marketing); überwiegend korrelative Studien, WEIRD-Stichproben',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['liking'],
  warningNeurons: [
    'Eine öffentliche oder automatisierte Botschaft an viele wird als vertrauliche Nachricht an dich persönlich inszeniert („nur euch/dir sage ich das")',
    'Die gemeinsame „Geschichte" oder Dauer der Beziehung wird betont, kurz bevor etwas verkauft, verlängert oder erbeten wird („wir kennen uns seit Jahren")',
    'Nähe- und Vertrautheitssignale einer prinzipiell einseitigen Beziehung (Follower, Abonnent, App-Nutzer), die nie erwidert wurde',
    'Der Handlungsimpuls stützt sich auf die gefühlte persönliche Bindung, nicht auf ein prüfbares Argument oder Produktmerkmal',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
