import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5c) (Taxonomie 21.0.1, Knoten: friend_spam).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein
 * seriousMode. Es gilt Overlay-Schutz.
 */
export const friendSpam: Technique = {
  id: 'friend_spam',
  name: {
    de: 'Friend Spam',
    en: 'Friend Spam',
  },
  description: {
    de: 'Eine App erntet das Adressbuch des Nutzers und verschickt in seinem Namen Einladungen oder Nachrichten an dessen Kontakte — meist nach einem beschönigten oder übergangenen Einwilligungsschritt und ohne dass der Nutzer die Empfänger einzeln sieht oder bestätigt.',
    en: 'An app harvests the user\'s address book and sends invitations or messages to their contacts in the user\'s name — usually after a glossed-over or skipped consent step, and without the user seeing or confirming the recipients one by one.',
  },
  category: 'dark_patterns',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Onboarding einer Fitness-App: Beim ersten Start tippt die Nutzerin auf den grün hervorgehobenen Button „Freunde finden"; die App lädt daraufhin ihr komplettes Adressbuch hoch und verschickt sofort an jeden Kontakt eine E-Mail „Sina hat dich zu FitBuddy eingeladen" — einen Schritt, in dem Sina die Empfänger sieht oder auswählt, gab es nicht.',
    'Business-Networking-App auf dem Smartphone eines Vertrieblers: Nach dem Login fragt ein Dialog „Kontakte synchronisieren, um Kollegen zu finden?", mit „Überspringen" nur als blassem Text darunter. Wer zustimmt, dessen gesamtes Firmen-Adressbuch wird importiert, und jedem Eintrag geht eine Vernetzungs-Einladung im Namen des Vertrieblers zu.',
    'Mobile-Game im Freundeskreis: Um ein Extra-Leben freizuschalten, bestätigt der Spieler das Pop-up „Lade Freunde ein"; im Hintergrund verschickt das Spiel SMS- und WhatsApp-Einladungen an seine gespeicherten Nummern — signiert mit seinem Namen, ohne dass er sieht, wer angeschrieben wird.',
  ],
  evidence: {
    studies: [
      'Gray et al. (2018) - The Dark (Patterns) Side of UX Design',
      'Mathur et al. (2019) - Dark Patterns at Scale'
    ],
    findings: 'Friend Spam ist als „Social Pyramid"-/„Forced Enrollment"-Variante ein in Dark-Pattern-Taxonomien benanntes und in Prävalenz-Studien dokumentiertes Muster (Gray et al. 2018; Mathur et al. 2019). Die Belege sind taxonomischer und prävalenzbasierter Art — sie zeigen, dass es das Muster gibt und wie verbreitet es ist, nicht wie stark es das Verhalten der Empfänger verändert. Dieser Verhaltenseffekt ist kontextabhängig und weitgehend ungetestet (schwache Evidenz).',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Taxonomie- und Prävalenzstudien (keine Wirkungsmessung)',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['consent_and_privacy_dark_patterns', 'identity_provenance_deception', 'sneaking'],
  warningNeurons: [
    'Ein auffällig platzierter „Freunde finden"/„Kontakte importieren"-Button ohne gleichwertig sichtbare Ablehnen-Option',
    'Zugriff auf das gesamte Adressbuch wird verlangt, obwohl die Kernfunktion ihn nicht braucht',
    'Nach dem Import fehlt ein Vorschau- und Auswahlschritt, in dem der Nutzer Empfänger und Nachrichtentext sieht',
    'Einladungen gehen im Namen des Nutzers raus, ohne dass er den Versand pro Empfänger bestätigt hat',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
