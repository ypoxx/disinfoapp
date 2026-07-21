import type { SeziertischCase } from './types';

/**
 * Seziertisch — "Fall der Woche". Realistic communication pieces to dissect.
 * Each case is hand-crafted; the options mix genuinely present techniques with
 * plausible-but-absent distractors so marking "everything" does not win.
 * Techniques referenced here all exist in the catalogue.
 */
export const seziertischCases: SeziertischCase[] = [
  {
    id: 'case-databreach',
    format: 'crisis_statement',
    title: {
      de: 'Krisenstatement nach einem Datenleck',
      en: 'Crisis statement after a data breach',
    },
    piece: {
      de: 'Statement der NordCloud AG\n\n„Uns ist bekannt geworden, dass im Zusammenhang mit einem Vorfall bei einem externen Dienstleister Daten betroffen sein könnten. Zum jetzigen Zeitpunkt liegen uns keine Hinweise auf einen Missbrauch vor. Die Sicherheit unserer Kundinnen und Kunden hat für uns oberste Priorität — kein anderer Anbieter investiert so konsequent in Datenschutz wie wir. Millionen von Nutzern vertrauen uns täglich ihre Daten an. Wir haben umgehend eine forensische Untersuchung eingeleitet und informieren betroffene Personen, sobald gesicherte Erkenntnisse vorliegen. Ein eigens eingerichtetes Kontaktformular finden Sie auf unserer Website."',
      en: 'Statement by NordCloud AG\n\n"It has come to our attention that data may have been affected in connection with an incident at an external service provider. At this point in time we have no indication of any misuse. The security of our customers is our top priority — no other provider invests in data protection as rigorously as we do. Millions of users entrust us with their data every day. We have immediately launched a forensic investigation and will inform affected individuals as soon as verified findings are available. A dedicated contact form is available on our website."',
    },
    options: [
      {
        label: { de: 'Paltering (technisch wahr, irreführend)', en: 'Paltering (technically true, misleading)' },
        techniqueId: 'paltering_half_truth',
        present: true,
        note: {
          de: '„Keine Hinweise auf Missbrauch … zum jetzigen Zeitpunkt" ist wörtlich wahr, legt aber Entwarnung nahe, obwohl die Untersuchung gerade erst beginnt — der Eindruck entsteht durch das, was offenbleibt.',
          en: '"No indication of misuse … at this point in time" is literally true but suggests reassurance while the investigation is only just starting — the impression comes from what is left open.',
        },
      },
      {
        label: { de: 'Verantwortung abschieben (externer Dienstleister)', en: 'Deflecting responsibility (external provider)' },
        techniqueId: 'scapegoating_othering',
        present: true,
        note: {
          de: 'Der Vorfall wird sofort einem „externen Dienstleister" zugeschrieben — das lenkt die Verantwortung nach außen, bevor die Untersuchung überhaupt begonnen hat.',
          en: 'The incident is immediately attributed to an "external service provider" — shifting responsibility outward before the investigation has even begun.',
        },
      },
      {
        label: { de: 'Geborgte Autorität / Selbstlob ohne Beleg', en: 'Borrowed authority / unbacked self-praise' },
        techniqueId: 'authority',
        present: true,
        note: {
          de: '„Kein anderer Anbieter investiert so konsequent" ist eine Bestleistungs-Behauptung ohne jeden Beleg — sie soll Kompetenz signalisieren, genau wenn diese in Frage steht.',
          en: '"No other provider invests as rigorously" is a superlative claim with no evidence — meant to signal competence exactly when it is in doubt.',
        },
      },
      {
        label: { de: 'Social Proof („Millionen vertrauen uns")', en: 'Social proof ("millions trust us")' },
        techniqueId: 'social_proof',
        present: true,
        note: {
          de: '„Millionen von Nutzern vertrauen uns täglich" nutzt die Masse als Vertrauensbeweis — die Zahl der Nutzer sagt jedoch nichts über die Sicherheit der Daten aus.',
          en: '"Millions of users entrust us every day" uses the crowd as proof of trust — but the number of users says nothing about the security of the data.',
        },
      },
      {
        label: { de: 'Künstliche Dringlichkeit / Countdown', en: 'Artificial urgency / countdown' },
        techniqueId: 'fake_urgency_countdown',
        present: false,
        note: {
          de: 'Nicht enthalten: Das Statement setzt keine Frist und drängt zu keiner schnellen Handlung — im Gegenteil, es verzögert konkrete Aussagen. Ein häufiger Reflex, hier aber nicht das Muster.',
          en: 'Not present: the statement sets no deadline and pushes no quick action — if anything it defers concrete statements. A common reflex, but not the pattern here.',
        },
      },
      {
        label: { de: 'Transparenter nächster Schritt (legitim)', en: 'Transparent next step (legitimate)' },
        techniqueId: undefined,
        present: false,
        note: {
          de: 'Keine Technik, sondern sauberes Handwerk: Forensik einleiten, Betroffene informieren, ein Kontaktformular bereitstellen. Genau das gehört in ein Krisenstatement — es ist der legitime Kern, den die anderen Elemente überlagern.',
          en: 'Not a technique but clean craft: launch forensics, inform those affected, provide a contact form. This belongs in a crisis statement — the legitimate core that the other elements overlay.',
        },
      },
    ],
    summary: {
      de: 'Ein Lehrstück gemischter Kommunikation: Ein legitimer Handlungskern (Untersuchung, Information, Kontakt) ist umhüllt von vier Überzeugungshebeln — Paltering, Verantwortungsverlagerung, geborgter Autorität und Social Proof. Als Profi trennst du beim Redigieren beides: Der Handlungskern bleibt, die vier Hebel schwächen die Glaubwürdigkeit, sobald jemand genauer liest.',
      en: 'A case study in mixed communication: a legitimate core of action (investigation, notification, contact) wrapped in four persuasion levers — paltering, deflection, borrowed authority, and social proof. As a professional, you separate the two when editing: keep the core, drop the levers, which erode credibility the moment someone reads closely.',
    },
  },
  {
    id: 'case-thoughtleader',
    format: 'linkedin_post',
    title: {
      de: 'LinkedIn-Thought-Leadership-Post',
      en: 'LinkedIn thought-leadership post',
    },
    piece: {
      de: 'Post einer Beraterin (12.400 Follower)\n\n„Gestern im Aufzug: Ein junger Kollege scrollte durch Stellenanzeigen — während der Arbeitszeit. Kein Einzelfall. Die ganze Generation hat verlernt, was Loyalität bedeutet.\n\nStudien zeigen längst, wohin das führt. Als ich anfing, blieb man zehn Jahre in einer Firma. Heute? Achtzehn Monate.\n\nEntweder Unternehmen investieren jetzt in echte Bindung — oder sie verlieren den Anschluss. So einfach ist das.\n\n#Leadership #Zukunft"',
      en: 'Post by a consultant (12,400 followers)\n\n"Yesterday in the elevator: a young colleague was scrolling through job ads — during working hours. Not an isolated case. The whole generation has forgotten what loyalty means.\n\nStudies have long shown where this leads. When I started, you stayed ten years at a company. Today? Eighteen months.\n\nEither companies invest in real retention now — or they fall behind. It\'s that simple.\n\n#Leadership #Future"',
    },
    options: [
      {
        label: { de: 'Voreilige Verallgemeinerung (Einzelfall → „ganze Generation")', en: 'Hasty generalization (one case → "whole generation")' },
        techniqueId: 'hasty_generalization',
        present: true,
        note: {
          de: 'Eine Aufzug-Anekdote trägt die Aussage über eine „ganze Generation" — ein einzelner Fall wird zur Regel erklärt, ausdrücklich als „kein Einzelfall" abgesichert.',
          en: 'One elevator anecdote carries a claim about a "whole generation" — a single case declared the rule, explicitly hedged as "not an isolated case".',
        },
      },
      {
        label: { de: 'Vage Autoritätsberufung („Studien zeigen")', en: 'Vague appeal to authority ("studies show")' },
        techniqueId: 'authority',
        present: true,
        note: {
          de: '„Studien zeigen längst" beruft sich auf Forschung, ohne eine einzige zu nennen — die Autorität der Wissenschaft wird geliehen, ohne dass man sie prüfen kann.',
          en: '"Studies have long shown" invokes research without naming a single one — the authority of science is borrowed with nothing to check.',
        },
      },
      {
        label: { de: 'Falsches Dilemma („Entweder … oder …")', en: 'False dilemma ("either … or …")' },
        techniqueId: 'false_dichotomy',
        present: true,
        note: {
          de: '„Entweder investieren — oder den Anschluss verlieren. So einfach ist das." verengt ein komplexes Feld künstlich auf zwei Optionen und schließt jede Zwischenlösung aus.',
          en: '"Either invest — or fall behind. It\'s that simple." artificially narrows a complex field to two options and rules out any middle ground.',
        },
      },
      {
        label: { de: 'Ankereffekt (10 Jahre vs. 18 Monate)', en: 'Anchoring (10 years vs. 18 months)' },
        techniqueId: 'anchoring',
        present: true,
        note: {
          de: 'Die Gegenüberstellung „zehn Jahre" früher gegen „achtzehn Monate" heute setzt einen dramatischen Kontrastanker — die runden Zahlen wirken als Beleg, obwohl keine Quelle sie stützt.',
          en: 'The contrast of "ten years" then against "eighteen months" now sets a dramatic anchor — the round numbers feel like evidence though no source backs them.',
        },
      },
      {
        label: { de: 'Deepfake / synthetische Medien', en: 'Deepfake / synthetic media' },
        techniqueId: 'synthetic_media',
        present: false,
        note: {
          de: 'Nicht enthalten: Der Post enthält kein manipuliertes Bild- oder Videomaterial. Der Distraktor prüft, ob du „digital" reflexhaft mit „synthetischen Medien" gleichsetzt.',
          en: 'Not present: the post contains no manipulated image or video. This distractor checks whether you reflexively equate "digital" with "synthetic media".',
        },
      },
    ],
    summary: {
      de: 'Ein typischer Meinungspost, der wie gesunder Menschenverstand klingt und dabei vier Muster stapelt: Anekdote-als-Beweis, vage Studienberufung, falsches Dilemma und einen Kontrastanker. Keines ist für sich „Lüge" — zusammen erzeugen sie Gewissheit, wo Daten fehlen. Genau solche Posts schreibst du als Profi überzeugender UND ehrlicher, wenn du die Anekdote als Aufhänger kennzeichnest und die Zahlen belegst.',
      en: 'A typical opinion post that sounds like common sense while stacking four patterns: anecdote-as-proof, vague appeal to studies, false dilemma, and a contrast anchor. None is a "lie" on its own — together they manufacture certainty where data is missing. As a professional you write such posts both more persuasively AND more honestly by flagging the anecdote as a hook and backing the numbers.',
    },
  },
];

export function getCaseById(id: string): SeziertischCase | undefined {
  return seziertischCases.find((c) => c.id === id);
}

/** Deterministic "case of the week" pick from a week index (no Date in module scope) */
export function caseForWeek(weekIndex: number): SeziertischCase {
  return seziertischCases[weekIndex % seziertischCases.length];
}

/** Current epoch-week index. Wall-clock dependent by design (weekly rotation). */
export function currentWeekIndex(): number {
  return Math.floor(Date.now() / (7 * 86_400_000));
}
