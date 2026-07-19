import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (Welle R4) (Taxonomie 21.0.1, Knoten: subscription_trap_obstruction).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const subscriptionTrapObstruction: Technique = {
  id: 'subscription_trap_obstruction',
  name: {
    de: 'Abo-Falle / Obstruction (Roach Motel)',
    en: 'Subscription Trap / Obstruction (Roach Motel)',
  },
  description: {
    de: 'Dark Pattern der Ausstiegs-Asymmetrie: Der Einstieg in ein Abo oder einen Dienst ist bewusst reibungslos gestaltet, der Ausstieg künstlich erschwert — versteckte Kündigungswege, Kanalwechsel (nur telefonisch, nur per Brief), Rückhalteschleifen oder automatische Verlängerung nach der Gratisphase (Forced Continuity). Die Konditionen können dabei völlig transparent sein; die Hürde liegt nicht in der Information, sondern im Weg hinaus.',
    en: 'A dark pattern built on exit asymmetry: signing up for a subscription or service is deliberately frictionless, while leaving it is artificially obstructed — hidden cancellation paths, forced channel switches (phone-only, letter-only), retention loops, or auto-renewal after a free trial (forced continuity). The terms themselves may be fully transparent; the barrier lies not in the information but in the way out.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'high',
  examples: [
    'Toolbudget-Review in der Pressestelle: Das Jahres-Abo des Social-Listening-Tools war seinerzeit im Website-Checkout in fünf Minuten abgeschlossen, Preis und Laufzeit standen dort korrekt — als die Kommunikationsleiterin zum Stichtag kündigen will, findet sie im Kundenkonto keinen Kündigungsbereich; die FAQ verweist auf eine Hotline, die Kündigungen „aus Sicherheitsgründen" nur telefonisch entgegennimmt, werktags 9 bis 13 Uhr.',
    'Testphase eines Presseverteiler-Portals: Der PR-Referent hatte den 30-Tage-Test mit einem Klick gestartet, die automatische Verlängerung stand transparent im Bestellprozess — der Kündigungslink im Konto führt jedoch durch vier Rückhalteseiten mit Rabattangeboten und endet in einem Formular mit „bis zu 14 Werktagen Bearbeitungszeit", länger als die verbleibende Testfrist.',
    'Vertragsende beim Webinar-Anbieter: Die Teamleiterin Interne Kommunikation will das online gebuchte Lizenzpaket fristgerecht beenden — der Chat-Support erklärt, Kündigungen liefen „ausschließlich über Ihren Customer Success Manager", dessen frühester freier Gesprächstermin nach Ablauf der Verlängerungsfrist liegt.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale',
      'Luguri et al. (2021) - Shining a Light on Dark Patterns'
    ],
    findings: 'Obstruction/„Roach Motel" ist in den Dark-Pattern-Taxonomien fest etabliert: Gray et al. (2018) führen es als eigenständige Strategie, Mathur et al. (2019) dokumentieren Varianten wie erschwerte Kündigung in einem großflächigen Crawl von Shopping-Websites. Luguri und Strahilevitz (2021) zeigen experimentell, dass aggressive Dark Patterns die Annahme unerwünschter Optionen deutlich erhöhen — die Effektgröße schwankt jedoch mit der Aggressivität, und aggressive Varianten erzeugen messbaren Backlash (moderate Evidenz). Regulierung adressiert das Muster zunehmend, etwa über Kündigungsbutton-Pflichten für Online-Verbraucherverträge.',
    uncertainty: {
      confidence: 0.65,
      sampleSize: 'Experiment (Luguri & Strahilevitz 2021); Crawl von ~11.000 Shopping-Websites (Mathur et al. 2019)',
      evidenceQuality: 'moderate',
    },
  },
  relatedTechniques: ['sludge', 'sneaking'],
  warningNeurons: [
    'Asymmetrie der Wege: Abschluss digital in wenigen Klicks, Kündigung nur über einen anderen, aufwendigeren Kanal (Telefon, Brief, „persönliches Gespräch")',
    'Im Kundenkonto sind Upgrade-Buttons prominent, ein Kündigungsbereich ist nicht auffindbar oder liegt hinter mehreren Menüebenen',
    'Rückhalteschleifen vor der Kündigung: gestaffelte Bestätigungsseiten, Rabattangebote, appellierende Texte („Wollen Sie wirklich…?")',
    'Bearbeitungszeiten oder Terminvergaben, die so liegen, dass Testphase oder Kündigungsfrist währenddessen ablaufen',
  ],
  taxonomyGroups: [],
  evidenceTier: 'moderate',
};
