import type { Technique } from '../types';

/**
 * REDAKTIONELL GEPRÜFT (wave5a) (Taxonomie 21.0.1, Knoten: fear_uncertainty_doubt).
 * Redaktionelle Felder (examples, warningNeurons, difficulty) gefüllt und
 * geprüft. Es gilt Overlay-Schutz.
 */
export const fearUncertaintyDoubt: Technique = {
  id: 'fear_uncertainty_doubt',
  name: {
    de: 'Fear, Uncertainty and Doubt (FUD)',
    en: 'Fear, Uncertainty and Doubt (FUD)',
  },
  description: {
    de: 'Strategisch erzeugte oder verstärkte Unsicherheit: Statt eine Behauptung zu belegen, wird Zweifel an der Sicherheit, Verlässlichkeit oder Zukunft einer Option, eines Wettbewerbers oder einer Entscheidung gesät — oft über unfalsifizierbare „Wer weiß, ob…"-Formeln —, damit das Publikum zögert, aufschiebt oder ablehnt.',
    en: 'Strategically manufactured or amplified uncertainty: instead of proving a claim, it seeds doubt about the safety, reliability, or future of an option, a competitor, or a decision — often through unfalsifiable "who knows whether…" framing — so the audience hesitates, defers, or rejects.',
  },
  category: 'emotional_manipulation',
  difficulty: 'intermediate',
  effectiveness: 'moderate',
  examples: [
    'Evaluierungstermin beim Mittelständler: Ein Wettbewerber mit günstigerer Cloud-Plattform liegt vorn. Der Vertriebsleiter des etablierten Anbieters sagt zum IT-Leiter: „Bei einem so jungen Anbieter kann Ihnen heute niemand garantieren, dass es die Plattform in drei Jahren noch gibt — und wenn nicht, wer migriert dann Ihre Daten? Wollen Sie dieses Risiko wirklich eingehen?" Konkrete Belege für eine Gefahr nennt er nicht.',
    'Hintergrundgespräch eines Branchenverbands zu einem geplanten technischen Standard: Der Verbandssprecher sagt der Fachjournalistin: „Ob die Versorgungssicherheit unter den neuen Vorgaben stabil bleibt, kann heute seriös niemand garantieren." Eine überprüfbare Prognose oder Datenlage legt er nicht vor — die offene Zweifelsfrage soll das Vorhaben ausbremsen.',
    'Lenkungsausschuss zur Ablösung eines Altsystems: Ein Bereichsleiter, der am alten System hängt, sagt in die Runde: „Niemand kann uns garantieren, dass die Migration ohne Datenverlust läuft. Wollen wir dieses Restrisiko wirklich der ganzen Firma zumuten?" Er benennt kein konkretes, prüfbares Risiko — die diffuse Unsicherheit soll die Entscheidung kippen.',
  ],
  evidence: {
    studies: [
      'Tannenbaum et al. (2015) - Appealing to fear: A meta-analysis of fear appeal effectiveness and theories'
    ],
    findings: 'Tannenbaum et al. (2015) belegen in einer Meta-Analyse, dass Angstappelle Einstellung und Verhalten im Mittel messbar, aber nur schwach verschieben (d ≈ 0,27) — und am ehesten dann, wenn zugleich ein konkreter, machbarer Handlungsweg angeboten wird. Dieser Befund stützt den allgemeinen Angst-Mechanismus, nicht das FUD-spezifische strategische Säen von Unsicherheit und Zweifel; für dessen eigenständige Wirkung fehlt belastbare Effektliteratur. Die Konfidenz ist entsprechend niedrig: FUD ist hier als wiedererkennbares Muster beschrieben, nicht als Technik mit gesichertem Wirkungsnachweis.',
    uncertainty: {
      confidence: 0.4,
      sampleSize: 'Meta-Analyse zu Angstappellen allgemein; kein FUD-spezifischer Effektnachweis',
      evidenceQuality: 'low',
    },
  },
  relatedTechniques: ['emotional_appeal', 'scarcity', 'scapegoating_othering', 'availability_heuristic'],
  warningNeurons: [
    'Unfalsifizierbare Zweifels-Formeln statt konkreter Belege („Wer weiß, ob…", „Niemand kann garantieren, dass…", „Restrisiko")',
    'Rhetorische Fragen, die Unsicherheit erzeugen, aber keine überprüfbare Behauptung aufstellen',
    'Das Risiko wird an eine Alternative, einen Wettbewerber oder eine Entscheidung gehängt, ohne die eigene Option positiv zu belegen',
    'Erwünscht ist Zögern, Aufschieben oder Ablehnen — nicht eine prüfbare Aussage, an der man den Zweifel widerlegen könnte',
  ],
  taxonomyGroups: [],
  evidenceTier: 'weak',
};
