// Welle 5c: 3 Übungen für forced_action (Forced Action / Erzwungene Handlung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cForcedAction: Exercise[] = [
  {
    id: 'wave5c-forced_action-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster zeigt das Download-Center?',
      en: 'Which pattern is the download centre using?',
    },
    scenario: {
      de: 'Abnahme des neuen Download-Centers: Im Review-Call führt der Projektleiter der Digitalagentur der Leiterin Unternehmenskommunikation den Weg zum Jahresbericht-PDF vor. Der Button „Bericht herunterladen" öffnet ein Pflichtformular — ohne Anlegen eines Kontos mit Name, Firma und Telefonnummer startet kein Download, einen Gast-Download gibt es nicht. Vorangekreuzt ist nichts, alle Felder sind sichtbar beschriftet. „Steigert die qualifizierten Leads", sagt der Projektleiter.',
      en: 'Sign-off on the new download centre: in the review call, the digital agency\'s project lead walks the head of corporate communications through the path to the annual-report PDF. The button "Download report" opens a mandatory form — no download starts without creating an account with name, company and phone number, and there is no guest download. Nothing is pre-ticked, every field is clearly labelled. "It lifts the qualified leads," the project lead says.',
    },
    options: [
      { de: 'Forced Action (Erzwungene Handlung)', en: 'Forced Action' },
      { de: 'Consent- und Privacy-Dark-Patterns', en: 'Consent and privacy dark patterns' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Sludge', en: 'Sludge' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Forced Action: Zwischen der Besucherin und dem eigentlichen Ziel — dem PDF — steht eine sachfremde Pflichthandlung, die vollständige Kontoanlage samt Telefonnummer, und es gibt keinen Weg daran vorbei. Der Zwang liegt offen, nichts ist versteckt; genau das macht das Muster aus: Wer die Funktion will, muss erst etwas tun, das er nicht tun wollte. Legitim einsetzen: Ein Download darf ein Lead-Formular haben — professionell bleibt es, wenn du nur abfragst, was der Versand wirklich braucht (die E-Mail-Adresse), und einen Weg zum Dokument ohne Vollregistrierung offen hältst; das schont die Absprungrate und liefert Leads, die auf echtem Interesse beruhen. Erkennen und kontern: Frag bei jedem Gate — auch dem eigenen — ob es einen Vorbei-Weg gibt (Gast-Zugang, „ohne Konto fortfahren") und ob die verlangte Handlung dem Nutzer dient oder nur dem Anbieter; fehlt der Ausweg, benenne es in der Abnahme als Reibungs- und Reputationsrisiko. Consent- und Privacy-Dark-Patterns liegen nahe, weil Daten abgefragt werden — sie manipulieren aber die Einwilligungs-Entscheidung über Struktur (vorangekreuzte Häkchen, ungleiche Ja/Nein-Wege); hier ist nichts vorangekreuzt, der Hebel ist die harte Pflicht-Registrierung, nicht die getrickste Einwilligung. Sneaking beschreibt untergeschobene oder verschwiegene Posten — hier wird nichts versteckt, der Zwang wird offen angesagt. Sludge meint schädliche Prozessreibung, die vom Ziel abbringen soll — Forced Action ist mehr als Reibung: eine absolute Vorbedingung, an der es keinen Weg vorbei gibt.',
      en: 'Forced Action: between the visitor and the thing she actually wants — the PDF — sits an unrelated mandatory action, full account creation with a phone number, and there is no way around it. The coercion is out in the open, nothing is hidden; that is exactly what defines the pattern: to get the function, you must first do something you did not want to do. Used legitimately: a download may carry a lead form — it stays professional if you ask only for what delivery genuinely needs (the email address) and keep a path to the document that does not require full registration; that protects your bounce rate and yields leads based on real interest. To spot and counter it: with every gate — including your own — ask whether there is a way past it (guest access, "continue without an account") and whether the required action serves the user or only the provider; if the exit is missing, flag it in sign-off as a friction and reputational risk. Consent and privacy dark patterns look close because data is being collected — but they manipulate the consent decision through structure (pre-ticked boxes, unequal yes/no paths); here nothing is pre-ticked, the lever is the hard mandatory registration, not tricked consent. Sneaking describes items slipped in or withheld — here nothing is hidden, the coercion is announced openly. Sludge means harmful process friction meant to wear you down — Forced Action is more than friction: an absolute precondition with no way past it.',
    },
    points: 10,
    primaryTechniqueId: 'forced_action',
    relatedTechniques: ['forced_action', 'consent_and_privacy_dark_patterns', 'sneaking', 'sludge'],
  },
  {
    id: 'wave5c-forced_action-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die Unternehmenskommunikation. Für die neue Webinar-Reihe schlägt der Growth-Manager vor: Die Aufzeichnung soll erst abspielbar werden, nachdem die Teilnehmer:innen das Webinar über einen vorgefertigten Beitrag öffentlich auf LinkedIn geteilt haben — „organische Reichweite zum Nulltarif", einen anderen Weg zur Aufzeichnung soll es nicht geben. Er bittet um deine Freigabe.',
      en: 'You head corporate communications. For the new webinar series, the growth manager proposes that the recording should only become playable after participants have shared the webinar publicly on LinkedIn via a ready-made post — "organic reach at zero cost", with no other path to the recording. He asks for your sign-off.',
    },
    options: [
      {
        de: 'Ich lasse die Aufzeichnung frei zugänglich machen und das Teilen zur echten Option: ein sichtbarer, aber optionaler Teilen-Button, dazu ein kleiner Anreiz fürs freiwillige Weitergeben. Ein erzwungenes öffentliches Posting im Namen der Teilnehmer ist Forced Action — es beschädigt genau die Reichweite, die es erzeugen soll, weil erzwungene Beiträge als unauthentisch gelesen werden und auf den Absender zurückfallen.',
        en: 'I have the recording made freely accessible and turn sharing into a real option: a visible but optional share button, plus a small incentive for sharing voluntarily. A forced public post in participants\' names is Forced Action — it damages the very reach it is meant to create, because coerced posts read as inauthentic and rebound on the sender.',
      },
      {
        de: 'Ich gebe frei: Reichweite ist knapp, und wer die Aufzeichnung wirklich will, verkraftet den einen Klick zum Teilen — das macht die halbe Branche so.',
        en: 'I sign off: reach is scarce, and anyone who really wants the recording can handle the one click to share — half the industry does it this way.',
      },
      {
        de: 'Ich behalte den Zwang, formuliere aber den vorgefertigten Beitrag neutral und ergänze einen Link zur Datenschutzerklärung — dann ist das erzwungene Teilen wenigstens transparent.',
        en: 'I keep the requirement but word the ready-made post neutrally and add a link to the privacy policy — then the forced share is at least transparent.',
      },
      {
        de: 'Ich mache den Teilen-Button einfach kleiner und weniger auffällig, damit sich niemand gedrängt fühlt.',
        en: 'I simply make the share button smaller and less prominent so nobody feels pushed.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag macht das öffentliche Teilen zur zwingenden Vorbedingung für ein anderes Ziel, die Aufzeichnung — das ist Forced Action: eine sachfremde Handlung als hartes Tor, an dem es keinen Weg vorbei gibt. Die beste Option trennt Leistung und Werbehandlung und macht das Teilen zu einer echten, freiwilligen Wahl: Das kostet ein paar erzwungene Posts, liefert aber Reichweite, die als glaubwürdig durchgeht, und schützt die Marke vor dem Vorwurf, Nutzer für Reichweite zu instrumentalisieren. Legitim einsetzen: Fürs Teilen werben ist erlaubt — biete einen sichtbaren Button und einen echten Anreiz, aber lass den Weg zum eigentlichen Ziel offen. Erkennen und kontern: Prüf bei jedem Gate, ob es einen Weg zum Ziel ohne die verlangte Zusatzhandlung gibt; fehlt er, ist es Forced Action, egal wie verbreitet das in der Branche ist. Die Freigabe wirkt plausibel, weil Reichweite knapp ist und „ein Klick" harmlos klingt — erzwungene Posts erzeugen aber Reaktanz und wirken unecht, der Flurschaden landet beim Absender. Der neutrale Text plus Datenschutz-Link wirkt wie ein sauberer Kompromiss, verwechselt aber das Problem: Transparenz heilt eine getrickste Einwilligung, nicht einen harten Zwang — das erzwungene Teilen bleibt erzwungen. Den Button kleiner zu machen behandelt eine Sicht-Frage (Nudging über visuelles Gewicht), lässt das eigentliche Tor aber stehen: Solange es keinen anderen Weg zur Aufzeichnung gibt, bleibt es Forced Action.',
      en: 'The proposal makes public sharing a mandatory precondition for a different goal, the recording — that is Forced Action: an unrelated action as a hard gate with no way past it. The best option separates deliverable from promotional action and turns sharing into a real, voluntary choice: it costs a few coerced posts but yields reach that reads as credible and protects the brand from the charge of instrumentalising users for reach. Used legitimately: advocating for a share is fine — offer a visible button and a genuine incentive, but keep the path to the actual goal open. To spot and counter it: with every gate, check whether there is a route to the goal without the extra required action; if there is not, it is Forced Action, however common it may be in the industry. Signing off looks plausible because reach is scarce and "one click" sounds harmless — but forced posts breed reactance and read as inauthentic, and the fallout lands on the sender. The neutral wording plus privacy link feels like a clean compromise but misreads the problem: transparency heals tricked consent, not a hard requirement — the forced share stays forced. Shrinking the button addresses a visual matter (nudging via visual weight) but leaves the gate itself in place: as long as there is no other path to the recording, it remains Forced Action.',
    },
    points: 10,
    primaryTechniqueId: 'forced_action',
    relatedTechniques: ['forced_action', 'consent_and_privacy_dark_patterns', 'nudging'],
  },
  {
    id: 'wave5c-forced_action-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Pressemeldung auf dem Smartphone: Der Wirtschaftsjournalist öffnet den Link zur vollständigen Mitteilung eines Herstellers, doch die mobile Seite zeigt nur den ersten Absatz und blendet darüber „Zum Weiterlesen App installieren" ein. Die Meldung im Browser zu Ende zu lesen, ist nicht vorgesehen — ohne App keine vollständige Mitteilung.',
      en: 'Press release on a smartphone: the business journalist opens the link to a manufacturer\'s full statement, but the mobile page shows only the first paragraph and overlays it with "Install the app to read on". Finishing the statement in the browser is not an option — no app, no full statement.',
    },
    options: [
      { de: 'Forced Action (Erzwungene Handlung)', en: 'Forced Action' },
      { de: 'Sludge', en: 'Sludge' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Forced Action: Zwischen dem Journalisten und seinem Ziel — dem vollständigen Text — steht eine sachfremde Pflichthandlung, die App-Installation, und einen Weg daran vorbei gibt es nicht. Der Zwang liegt offen; das Muster lebt nicht vom Verstecken, sondern davon, dass es kein Vorbei am Tor gibt. Legitim einsetzen: Eine App bewerben ist erlaubt — biete sie als Zusatzangebot an, aber halte den vollständigen Text im Browser zugänglich; gerade für Presseinhalte ist ein installationsfreier Weg professioneller Standard und Bedingung dafür, dass die Meldung überhaupt zitiert wird. Erkennen und kontern: Prüf, ob es das Ziel auch ohne die verlangte Zusatzhandlung gibt — fehlt der Vorbei-Weg (hier: Weiterlesen im Browser), ist es Forced Action; für eigene Kanäle heißt das, Presse- und Kerninhalte niemals hinter eine App oder Registrierung zu zwingen. Sludge liegt nahe, weil das App-Overlay bremst — Sludge meint aber schädliche Reibung, die vom Ziel abbringen soll; hier ist es kein zäher Weg, sondern eine harte Vorbedingung ohne Alternative. Sneaking wirkt plausibel, weil etwas zurückgehalten wird — beim Verschleiern wird es aber heimlich untergeschoben oder verschwiegen; hier wird der Zwang offen angesagt: „Zum Weiterlesen App installieren."',
      en: 'Forced Action: between the journalist and his goal — the full text — sits an unrelated mandatory action, installing the app, and there is no way around it. The coercion is out in the open; the pattern lives not on concealment but on there being no route past the gate. Used legitimately: promoting an app is fine — offer it as an add-on, but keep the full text accessible in the browser; for press content in particular, an install-free route is professional standard and the precondition for the statement being quotable at all. To spot and counter it: check whether the goal is reachable without the extra required action — if the way past is missing (here: reading on in the browser), it is Forced Action; for your own channels that means never forcing press and core content behind an app or registration. Sludge looks close because the app overlay slows you down — but sludge means harmful friction meant to wear you off the goal; here it is not a sluggish path but a hard precondition with no alternative. Sneaking looks plausible because something is withheld — but sneaking slips it in covertly or stays silent about it; here the coercion is announced openly: "Install the app to read on."',
    },
    points: 10,
    primaryTechniqueId: 'forced_action',
    relatedTechniques: ['forced_action', 'sludge', 'sneaking'],
  },
];
