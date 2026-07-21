import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: sneaking).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const sneaking: Technique = {
  id: 'sneaking',
  name: {
    de: 'Sneaking (Verschleiern)',
    en: 'Sneaking',
  },
  description: {
    de: 'Dark Pattern, bei dem entscheidungsrelevante Angaben — Kosten, Posten, Vertragsbedingungen — zurückgehalten oder unbemerkt in die Transaktion geschoben werden, sodass sie erst nach der Entscheidung sichtbar werden: versteckte Gebühren, untergeschobene Warenkorb-Posten, nicht offengelegte Abos.',
    en: 'A dark pattern that withholds decision-relevant information — costs, items, contract terms — or slips it into the transaction unnoticed, so it only surfaces after the decision has been made: hidden fees, items sneaked into the basket, undisclosed subscriptions.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Rechnungsfreigabe in der Unternehmenskommunikation: Die Leiterin prüft die erste Rechnung des neuen Medienbeobachtungs-Dienstes und findet eine „Einrichtungspauschale" von 890 Euro — im Angebot, das der Vertrieb im Pitch-Call präsentiert hatte, tauchte dieser Posten an keiner Stelle auf.',
    'Online-Buchung eines Messestand-Pakets im Anbieterportal des Veranstalters: Erst die Bestellbestätigung zeigt dem Eventmanager einen zusätzlichen Posten „Standreinigung Premium" für 240 Euro — im gesamten Bestellprozess gab es dafür weder ein Auswahlfeld noch einen Hinweis, der Posten wurde dem Warenkorb unbemerkt untergeschoben.',
    'Buchung eines einmaligen Versands über ein Presseverteiler-Portal: Der PR-Referent zahlt für „1 Aussendung" — erst aus der Auftragsbestätigung geht hervor, dass mit dem Kauf ein monatlich verlängerndes Abo aktiviert wurde.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Sneaking (Verschleiern) ist in den einschlägigen Dark-Pattern-Taxonomien als eigenständiges Muster etabliert: Gray et al. (2018) beschreiben es konzeptionell, Mathur et al. (2019) weisen Varianten wie versteckte Kosten, untergeschobene Warenkorb-Posten und nicht offengelegte Abos in einem Crawl von rund 11.000 Shopping-Websites empirisch nach. Belegt sind damit vor allem Existenz und Verbreitung des Musters; wie stark es Entscheidungen tatsächlich verändert, ist kontextabhängig und kaum direkt gemessen (geringe Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Feldstudie: Crawl von ~11.000 Shopping-Websites (Mathur et al. 2019)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['drip_pricing', 'subscription_trap_obstruction'],
  warningNeurons: [
    'Endbetrag oder Postenliste in Bestätigung oder Rechnung weichen von dem ab, was im letzten Bestellschritt angezeigt wurde',
    'Posten im Warenkorb oder Auftrag, die niemand aktiv ausgewählt hat („Schutzpaket", „Service-Option")',
    'Laufzeit, Verlängerung oder Zusatzbedingungen stehen erst in der Bestätigungs-Mail oder hinter einem AGB-Link — nicht im Entscheidungsweg',
    'Ein als einmalig deklarierter Kauf erzeugt wiederkehrende Buchungen oder ein Konto mit Abo-Status',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
