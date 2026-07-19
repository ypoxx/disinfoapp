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
      en: 'Sign-off on the new download centre: in the review call, the digital agency\'s project lead walks the head of corporate communications through the path to the annual-report PDF. The button "Download report" opens a mandatory form — no download starts without creating an account with name, company and phone number, and there is no guest download. Nothing is pre-ticked, every field is clearly labelled. "It boosts qualified leads," the project lead says.',
    },
    options: [
      { de: 'Forced Action (Erzwungene Handlung)', en: 'Forced Action' },
      { de: 'Consent- und Privacy-Dark-Patterns', en: 'Consent and privacy dark patterns' },
      { de: 'Sneaking (Verschleiern)', en: 'Sneaking' },
      { de: 'Sludge', en: 'Sludge' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Forced Action: Zwischen der Besucherin und dem eigentlichen Ziel — dem PDF — steht eine sachfremde Pflichthandlung, die vollständige Kontoanlage samt Telefonnummer, und es gibt keinen Weg daran vorbei. Der Zwang liegt offen, nichts ist versteckt; genau das macht das Muster aus: Wer die Funktion will, muss erst etwas tun, das er nicht tun wollte. Legitim einsetzen: Ein Download darf ein Lead-Formular haben — professionell bleibt es, wenn du nur abfragst, was der Versand wirklich braucht (die E-Mail-Adresse), und einen Weg zum Dokument ohne Vollregistrierung offen hältst; so bleibt die Hürde niedrig, und die Kontakte, die du gewinnst, geben ihre Daten freiwillig her statt unter Zwang. Erkennen und kontern: Frag bei jedem Gate — auch dem eigenen — ob es einen Vorbei-Weg gibt (Gast-Zugang, „ohne Konto fortfahren") und ob die verlangte Handlung dem Nutzer dient oder nur dem Anbieter; fehlt der Ausweg, benenne es in der Abnahme als Reibungs- und Reputationsrisiko. Consent- und Privacy-Dark-Patterns liegen nahe, weil Daten abgefragt werden — sie manipulieren aber die Einwilligungs-Entscheidung über Struktur (vorangekreuzte Häkchen, ungleiche Ja/Nein-Wege); hier ist nichts vorangekreuzt, der Hebel ist die harte Pflicht-Registrierung, nicht die getrickste Einwilligung. Sneaking beschreibt untergeschobene oder verschwiegene Posten — hier wird nichts versteckt, der Zwang wird offen angesagt. Sludge meint schädliche Prozessreibung, die vom Ziel abbringen soll — Forced Action ist mehr als Reibung: eine absolute Vorbedingung, an der es keinen Weg vorbei gibt.',
      en: 'Forced Action: between the visitor and the thing she actually wants — the PDF — sits an unrelated mandatory action, full account creation with a phone number, and there is no way around it. The coercion is out in the open, nothing is hidden; that is exactly what defines the pattern: to get the function, you must first do something you did not want to do. Used legitimately: a download may carry a lead form — it stays professional if you ask only for what delivery genuinely needs (the email address) and keep a path to the document that does not require full registration; that keeps the barrier low, and the contacts you gain hand over their details voluntarily rather than under compulsion. To spot and counter it: with every gate — including your own — ask whether there is a way past it (guest access, "continue without an account") and whether the required action serves the user or only the provider; if the exit is missing, flag it in sign-off as a friction and reputational risk. Consent and privacy dark patterns look close because data is being collected — but they manipulate the consent decision through structure (pre-ticked boxes, unequal yes/no paths); here nothing is pre-ticked, the lever is the hard mandatory registration, not tricked consent. Sneaking describes items slipped in or withheld — here nothing is hidden, the coercion is announced openly. Sludge means harmful process friction meant to wear you down — Forced Action is more than friction: an absolute precondition with no way past it.',
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
        de: 'Ich mache die Aufzeichnung frei zugänglich und stelle das Teilen daneben als echte Wahl: ein sichtbarer, aber optionaler Teilen-Button mit vorbereitetem Beitrag, dazu ein kleiner Dank fürs freiwillige Weitergeben. Wer die Aufzeichnung will, kommt ohne Vorbedingung heran — wer teilt, tut es aus eigenem Antrieb.',
        en: 'I make the recording freely accessible and put sharing next to it as a real choice: a visible but optional share button with a ready-made post, plus a small thank-you for sharing voluntarily. Anyone who wants the recording reaches it without a precondition — anyone who shares does so of their own accord.',
      },
      {
        de: 'Ich gebe frei: Reichweite ist knapp, und wer die Aufzeichnung wirklich will, verkraftet den einen Klick zum Teilen. Das macht die halbe Branche so — so falsch kann es also nicht sein.',
        en: 'I sign off: reach is scarce, and anyone who really wants the recording can handle the one click to share. Half the industry does it this way — so it cannot be all that wrong.',
      },
      {
        de: 'Ich behalte die Teilen-Pflicht, formuliere aber den vorgefertigten Beitrag neutral und ergänze einen Link zur Datenschutzerklärung. Dann ist das erzwungene Teilen wenigstens offen und sauber dokumentiert.',
        en: 'I keep the sharing requirement but word the ready-made post neutrally and add a link to the privacy policy. Then the forced share is at least out in the open and cleanly documented.',
      },
      {
        de: 'Ich gebe die Aufzeichnung sofort frei, lasse den vorbereiteten Beitrag aber automatisch im Namen der Teilnehmer:innen posten — mit einem kleinen Opt-out-Häkchen für alle, die das nicht wollen. So bekommen wir die Reichweite, ohne dass jemand extra klicken muss.',
        en: 'I release the recording right away but have the ready-made post go out automatically in the participants\' names — with a small opt-out checkbox for anyone who does not want it. That way we get the reach without anyone having to click anything.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag macht das öffentliche Teilen zur zwingenden Vorbedingung für ein anderes Ziel, die Aufzeichnung — das ist Forced Action: eine sachfremde Handlung als hartes Tor, an dem es keinen Weg vorbei gibt. Die beste Option trennt die Leistung von der Werbehandlung und hält den Weg zur Aufzeichnung frei; das Teilen wird zur echten, freiwilligen Wahl, statt Teilnehmer:innen für Reichweite zu instrumentalisieren. Legitim einsetzen: Fürs Teilen zu werben ist erlaubt — biete einen sichtbaren Button und einen echten Anreiz, aber lass den Weg zum eigentlichen Ziel offen. Erkennen und kontern: Prüf bei jedem Gate, ob es einen Weg zum Ziel ohne die verlangte Zusatzhandlung gibt; fehlt er, ist es Forced Action, so verbreitet die Praxis auch sein mag. Die schnelle Freigabe mit dem Verweis auf die Branche wirkt plausibel, weil Reichweite knapp ist und „ein Klick" harmlos klingt — nur wird ein Tor nicht dadurch legitim, dass viele es aufstellen; die Vorbedingung bleibt eine Vorbedingung. Der neutrale Text plus Datenschutz-Link wirkt wie ein sauberer Kompromiss, verwechselt aber die Ebene: Transparenz adressiert eine getrickste Einwilligung, nicht einen harten Zwang — das erzwungene Teilen bleibt erzwungen. Das automatische Posten mit Opt-out klingt großzügig, weil niemand mehr klicken muss — es schiebt den Teilnehmer:innen aber einen öffentlichen Beitrag in ihrem Namen unter, den sie nie aktiv gewählt haben, und versteckt den Zwang hinter einer Voreinstellung, statt ihn aufzulösen.',
      en: 'The proposal makes public sharing a mandatory precondition for a different goal, the recording — that is Forced Action: an unrelated action as a hard gate with no way past it. The best option separates the deliverable from the promotional action and keeps the path to the recording open; sharing becomes a real, voluntary choice rather than a way to instrumentalise participants for reach. Used legitimately: advocating a share is fine — offer a visible button and a genuine incentive, but keep the path to the actual goal open. To spot and counter it: with every gate, check whether there is a route to the goal without the extra required action; if there is not, it is Forced Action, however common the practice may be. Signing off with a nod to the industry looks plausible because reach is scarce and "one click" sounds harmless — but a gate does not become legitimate just because many people put one up; the precondition stays a precondition. The neutral wording plus privacy link feels like a clean compromise but misreads the level: transparency addresses tricked consent, not a hard requirement — the forced share stays forced. Auto-posting with an opt-out sounds generous because nobody has to click any more — but it slips a public post in the participants\' names into their feed that they never actively chose, hiding the coercion behind a default instead of removing it.',
    },
    points: 10,
    primaryTechniqueId: 'forced_action',
    relatedTechniques: ['forced_action', 'consent_and_privacy_dark_patterns', 'sneaking'],
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
      de: 'Fachartikel auf einem Branchenportal: Die Redakteurin einer Verbandszeitschrift klickt auf eine Analyse, die sie zitieren möchte — doch der Text bricht nach dem ersten Absatz ab, darüber liegt „Zum Weiterlesen Newsletter abonnieren". Erst wer seine E-Mail einträgt und den Bestätigungslink im Double-Opt-in anklickt, schaltet den Artikel frei; einen anderen Weg zum vollständigen Text gibt es nicht.',
      en: 'Trade article on an industry portal: the editor of an association magazine clicks on an analysis she wants to cite — but the text cuts off after the first paragraph, overlaid with "Subscribe to the newsletter to read on". Only entering your email and clicking the confirmation link in the double opt-in unlocks the article; there is no other route to the full text.',
    },
    options: [
      { de: 'Forced Action (Erzwungene Handlung)', en: 'Forced Action' },
      { de: 'Sludge', en: 'Sludge' },
      { de: 'Nagging (dranghaftes Nachfassen)', en: 'Nagging' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Forced Action: Zwischen der Redakteurin und ihrem Ziel — dem vollständigen Text — steht eine sachfremde Pflichthandlung, das Newsletter-Abo samt Double-Opt-in-Bestätigung, und einen Weg daran vorbei gibt es nicht. Der Zwang liegt offen; das Muster lebt nicht vom Verstecken, sondern davon, dass es kein Vorbei am Tor gibt. Legitim einsetzen: Einen Newsletter bewerben ist erlaubt — biete ihn als sichtbares Zusatzangebot an, aber halte den vollständigen Text auch ohne Abo zugänglich; gerade für Fach- und Presseinhalte ist ein hürdenfreier Lesezugang professioneller Standard — damit Redaktionen den Text ohne Anmeldung übernehmen können. Erkennen und kontern: Prüf, ob es das Ziel auch ohne die verlangte Zusatzhandlung gibt — fehlt der Vorbei-Weg (hier: Weiterlesen ohne Abo), ist es Forced Action; für eigene Kanäle heißt das, Kern- und Presseinhalte niemals hinter ein Abo oder eine Registrierung zu zwingen. Sludge liegt nahe, weil das Abo-Tor bremst — Sludge meint aber schädliche Reibung, die dich zermürben soll, bis du dein Ziel aufgibst; hier ist es kein zäher Weg, sondern eine harte Vorbedingung ohne Alternative. Nagging wirkt plausibel, weil Abo-Aufforderungen oft wiederkehren — Nagging meint aber die wiederholte, wegklickbare Aufforderung, die dich drängt, ohne dich zu blockieren; hier ist das Tor keine Bitte, die du abweisen kannst, sondern eine harte Schranke ohne „ohne Abo weiterlesen". Genau das kippt die dranghafte Aufforderung in eine erzwungene Handlung.',
      en: 'Forced Action: between the editor and her goal — the full text — sits an unrelated mandatory action, subscribing to the newsletter and confirming the double opt-in, and there is no way around it. The coercion is out in the open; the pattern lives not on concealment but on there being no route past the gate. Used legitimately: promoting a newsletter is fine — offer it as a visible add-on, but keep the full text accessible without a subscription; for trade and press content in particular, hurdle-free reading access is professional standard — so newsrooms can pick up the text without signing up. To spot and counter it: check whether the goal is reachable without the extra required action — if the way past is missing (here: reading on without subscribing), it is Forced Action; for your own channels that means never forcing core and press content behind a subscription or registration. Sludge looks close because the subscription gate slows you down — but sludge means harmful friction meant to wear you down until you give up your goal; here it is not a sluggish path but a hard precondition with no alternative. Nagging looks plausible because subscription prompts often recur — but nagging means the repeated, dismissible prompt that pushes you without blocking you; here the gate is not a request you can wave away but a hard barrier with no "read on without subscribing". That is exactly what tips a naggy prompt over into a forced action.',
    },
    points: 10,
    primaryTechniqueId: 'forced_action',
    relatedTechniques: ['forced_action', 'sludge', 'nagging'],
  },
];
