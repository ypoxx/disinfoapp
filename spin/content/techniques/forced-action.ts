import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: forced_action).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const forcedAction: Technique = {
  id: 'forced_action',
  name: {
    de: 'Forced Action (Erzwungene Handlung)',
    en: 'Forced Action',
  },
  description: {
    de: 'Dark Pattern, das eine unerwünschte, oft sachfremde Handlung zur zwingenden Vorbedingung macht: Wer die eigentlich gewünschte Funktion nutzen will — lesen, herunterladen, fortfahren —, muss zuvor etwas tun, das er nicht tun wollte: ein Konto anlegen, Daten preisgeben, eine App installieren, öffentlich teilen. Anders als beim Verschleiern liegt der Zwang offen; die Manipulation steckt nicht im Versteck, sondern darin, dass es keinen Weg am Tor vorbei gibt.',
    en: 'A dark pattern that turns an unwanted, often unrelated action into a mandatory precondition: to use the function you actually came for — reading, downloading, continuing — you must first do something you did not want to do: create an account, hand over data, install an app, share publicly. Unlike sneaking, the coercion is out in the open; the manipulation lies not in concealment but in leaving no way around the gate.',
  },
  category: 'dark_patterns',
  difficulty: 'beginner',
  effectiveness: 'moderate',
  examples: [
    'Recherche vor einem Fachbeitrag: Die Kommunikationsmanagerin will von der Website eines Analystenhauses eine einzelne Branchenstudie als PDF laden — der Button „Studie herunterladen" öffnet jedoch eine Pflichtregistrierung mit Firmenname, Position und Telefonnummer; einen Gast- oder Direkt-Download gibt es nicht, ohne vollständiges Konto kein Dokument.',
    'Freischaltung einer Webinar-Aufzeichnung im Portal eines SaaS-Anbieters: Der PR-Referent findet die Aufzeichnung erst dann abspielbar, nachdem er das Webinar über einen vorgefertigten Beitrag öffentlich auf seinem LinkedIn-Profil geteilt hat — einen anderen Weg zur Aufzeichnung bietet die Seite nicht.',
    'Pressemeldung auf dem Smartphone: Der Wirtschaftsjournalist öffnet den Link zur vollständigen Mitteilung, doch die mobile Seite zeigt nur den ersten Absatz und blendet darüber „Zum Weiterlesen App installieren" ein — die Meldung im Browser zu Ende zu lesen, ist nicht vorgesehen.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Forced Action ist in den einschlägigen Dark-Pattern-Taxonomien als eigenständiges Muster etabliert: Gray et al. (2018) führen „Forced Action" als eine von fünf Kernstrategien, Mathur et al. (2019) ordnen verwandte Formen wie die erzwungene Registrierung (Forced Enrollment) empirisch ein. Belegt sind damit vor allem Existenz, Abgrenzung und Verbreitung des Musters; wie stark der Zwang Entscheidungen tatsächlich verschiebt, ist kaum direkt gemessen und dürfte stark vom Kontext und von der Wichtigkeit des blockierten Ziels abhängen (geringe Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomien und Prävalenzbefunde (Gray et al. 2018; Mathur et al. 2019); keine Effektstärken',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['consent_and_privacy_dark_patterns', 'sneaking', 'sludge'],
  warningNeurons: [
    'Zwischen dir und dem eigentlichen Ziel steht eine Pflichthandlung, die mit dem Ziel nichts zu tun hat (Konto, Telefonnummer, App-Installation, öffentliches Teilen)',
    'Es gibt keinen Vorbei-Weg: kein Gast-Zugang, kein „ohne Konto fortfahren", kein Abbruch ohne Verzicht auf das Ziel',
    'Die verlangte Handlung nützt vor allem dem Anbieter (Lead, Reichweite, Datenprofil), nicht deiner eigentlichen Aufgabe',
    'Der Zwang wird offen kommuniziert („um fortzufahren, …") — zu prüfen bleibt nur, ob er sachlich nötig oder bloß aufgezwungen ist',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
