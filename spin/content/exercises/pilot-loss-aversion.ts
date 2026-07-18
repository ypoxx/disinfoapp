// Pilotwelle R3: 3 Übungen für loss_aversion (Verlustaversion).
// Nicht in index.ts registriert — Registrierung erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const pilotLossAversion: Exercise[] = [
  {
    id: 'p3-loss_aversion-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik trägt die Argumentation?',
      en: 'Which technique is doing the work in this argument?',
    },
    scenario: {
      de: 'Budgetrunde per Videokonferenz, du vertrittst die Unternehmenskommunikation. Der Leiter Public Affairs verteidigt die Verlängerung des Medien-Monitoring-Vertrags ausschließlich so: "Wenn wir jetzt kündigen, verlieren wir fünf Jahre aufgebaute Datenhistorie, unsere Frühwarnfähigkeit und den eingespielten Draht zum Dienstleister." Was die Verlängerung an neuem Nutzen bringt, kommt in seiner Argumentation nicht vor — nur, was beim Ausstieg wegfiele.',
      en: 'Budget round via video call; you represent corporate communications. The head of public affairs makes his entire case for renewing the media monitoring contract like this: "If we cancel now, we lose five years of accumulated data history, our early-warning capability, and the working relationship with the vendor built up over years." What the renewal would add in new value never comes up — only what an exit would take away.',
    },
    options: [
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Framing', en: 'Framing' },
      { de: 'Emotionale Appelle', en: 'Emotional appeal' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Verlustaversion: Verluste wiegen subjektiv schwerer als gleich große Gewinne — deshalb argumentiert der Leiter Public Affairs ausschließlich mit dem, was beim Ausstieg wegfiele, statt den Nutzen der Verlängerung zu rechnen. Legitim einsetzen: Reale Verlustrisiken einer Entscheidung dürfen benannt werden — professionell wird es, wenn daneben auch die Gewinnseite und die Gesamtbilanz stehen. Erkennen und kontern: Die Gegenrechnung einfordern ("Was kostet die Verlängerung, was bringt sie — unabhängig davon, was wir aufgebaut haben?"), damit der Besitzstand nicht die Bilanz ersetzt. Verknappung wirkt plausibel, weil das „Wenn wir jetzt kündigen" wie Frist-Druck klingt — Verknappung bezeichnet aber begrenzte Verfügbarkeit eines Guts (Stückzahl, Frist), nicht das Gewicht drohender Verluste am eigenen Bestand. Framing liegt nahe, weil die Darstellung einseitig gewählt ist — Framing ist jedoch der Oberbegriff für Deutungssteuerung durch Wortwahl und Perspektive; hier arbeitet gezielt der spezifische Hebel, dass Verluste schwerer wiegen als Gewinne. Emotionale Appelle passen scheinbar, weil das Szenario Sorge auslöst — der Kern ist aber keine Gefühlsansprache, sondern eine kognitive Asymmetrie in der Bewertung von Verlust und Gewinn.',
      en: 'Loss aversion: losses loom larger than equivalent gains — which is why the head of public affairs argues solely from what an exit would take away instead of costing out what the renewal adds. Used legitimately: real loss risks of a decision may be named — it becomes professional when the gain side and the overall balance sit next to them. To recognise and counter it: demand the counter-calculation ("what does the renewal cost, what does it deliver — regardless of what we have built up?") so that what has been accumulated does not stand in for the balance sheet. Scarcity looks plausible because "if we cancel now" reads like deadline pressure — but scarcity denotes limited availability of a good (units, deadlines), not the weight of threatened losses to what you already own. Framing seems close because the presentation is one-sidedly chosen — but framing is the umbrella term for steering interpretation through wording and perspective; here the specific lever at work is that losses weigh more than gains. Emotional appeal fits on the surface because the scenario stirs worry — but the core is not an appeal to feeling; it is a cognitive asymmetry in how loss and gain are valued.',
    },
    points: 10,
    primaryTechniqueId: 'loss_aversion',
    relatedTechniques: ['loss_aversion', 'scarcity', 'framing', 'emotional_appeal'],
  },
  {
    id: 'p3-loss_aversion-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du verantwortest die interne Kommunikation zur Einführung eines neuen Intranets. Die Umstiegsquote ist niedrig. Der Projektleiter schlägt für den nächsten Newsletter vor: "Schreib, dass alle, die nicht bis Monatsende wechseln, ihre gespeicherten Dokumente verlieren — Verlustangst zieht besser als jede Feature-Liste." Tatsächlich gehen keine Dokumente verloren; sie werden automatisch migriert.',
      en: 'You own internal communications for the rollout of a new intranet. Adoption is low. The project lead suggests for the next newsletter: "Write that everyone who has not switched by month\'s end will lose their stored documents — fear of loss beats any feature list." In reality, no documents are lost; they are migrated automatically.',
    },
    options: [
      {
        de: 'Ich übernehme die Formulierung — Verlustbotschaften wirken nachweislich stärker als Vorteilsargumente, und die Umstiegsquote ist das vereinbarte Projektziel.',
        en: 'I use his wording — loss messages demonstrably outperform benefit arguments, and the adoption rate is the agreed project goal.',
      },
      {
        de: 'Ich nutze den Hebel, aber ehrlich: Ich benenne, was zum Stichtag tatsächlich wegfällt — etwa Support und Updates für das alte System —, stelle die Vorteile daneben und stelle klar, dass alle Dokumente automatisch migriert werden.',
        en: 'I use the lever, but honestly: I name what actually goes away at the cut-off — say, support and updates for the old system — put the benefits next to it, and make clear that all documents are migrated automatically.',
      },
      {
        de: 'Ich schwäche die Formulierung ab zu "Ihre Dokumente könnten verloren gehen" — das ist kein Versprechen, hält aber den Handlungsdruck hoch.',
        en: 'I soften the wording to "your documents could be lost" — that is not a promise, but it keeps the pressure to act high.',
      },
      {
        de: 'Ich streiche jedes Verlustargument aus der Kampagne — wer mit drohenden Verlusten kommuniziert, arbeitet grundsätzlich manipulativ.',
        en: 'I cut every loss argument from the campaign — communicating with threatened losses is inherently manipulative.',
      },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Der Vorschlag nutzt Verlustaversion mit einem erfundenen Verlust: Weil drohende Verluste schwerer wiegen als gleich große Gewinne, würde die Falschbehauptung tatsächlich Druck erzeugen — sie fliegt aber spätestens nach der Migration auf und kostet die Glaubwürdigkeit der internen Kommunikation weit über dieses Projekt hinaus. Legitim einsetzen: Der Hebel ist erlaubt, wenn der Verlust real ist — Support-Ende, auslaufende Updates, Doppelpflege-Aufwand — und die Gewinnseite daneben steht; genau das leistet die richtige Option. Erkennen und kontern: Bei jeder Verlustbotschaft prüfen, ob der Verlust tatsächlich eintritt und ob die spiegelbildliche Gewinnrechnung fehlt. Die Option, die Formulierung zu übernehmen, wirkt plausibel, weil der zugrunde liegende Effekt real ist — seine Stärke ist aber kontextabhängig und keineswegs garantiert, und vor allem heilt Wirksamkeit keine Falschaussage; das wäre Täuschung, keine Technik. Die abgeschwächte Variante ("könnten verloren gehen") wirkt wie ein vorsichtiger Kompromiss, ist aber eine Halbwahrheit: Sie hält die falsche Verlusterwartung am Leben und versteckt die Irreführung nur hinter einem "könnte". Die Option, jedes Verlustargument zu streichen, überkorrigiert: Reale Verluste zu verschweigen wäre selbst unvollständig — nicht der Verlustbezug ist das Problem, sondern der erfundene Verlust.',
      en: 'The suggestion runs loss aversion on a fabricated loss: because threatened losses weigh more than equivalent gains, the false claim would indeed create pressure — but it unravels the moment the migration completes and costs internal comms its credibility well beyond this project. Used legitimately: the lever is fine when the loss is real — end of support, expiring updates, the cost of maintaining two systems — with the gain side alongside; that is exactly what the correct option does. To recognise and counter it: for any loss message, check whether the loss will actually occur and whether the mirror-image gain calculation is missing. The option to run his wording looks plausible because the underlying effect is real — but its strength is context-dependent rather than guaranteed, and above all effectiveness does not cure a false statement; that would be deception, not technique. The softened variant ("could be lost") feels like a cautious compromise but is a half-truth: it keeps the false loss expectation alive and merely hides the deception behind a hedge. The option to cut every loss argument overcorrects: withholding real losses would itself be incomplete — the problem is not referring to losses, it is inventing one.',
    },
    points: 10,
    primaryTechniqueId: 'loss_aversion',
    relatedTechniques: ['loss_aversion', 'paltering_half_truth', 'emotional_appeal'],
  },
  {
    id: 'p3-loss_aversion-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Welches Muster nutzt der Newsletter?',
      en: 'Which pattern is the newsletter using?',
    },
    scenario: {
      de: 'Mitglieder-Newsletter eines Berufsverbands an alle, die ihre Mitgliedschaft noch nicht verlängert haben: "Mit dem Austritt geben Sie Ihren über Jahre aufgebauten Eintrag im Expertenverzeichnis auf — und den akkreditierten Presseausweis, den Sie Jahr für Jahr verlängert haben."',
      en: 'A professional association\'s newsletter to members who have not yet renewed: "By leaving, you give up the expert directory listing you have built up over years — and the accredited press card you have renewed year after year."',
    },
    options: [
      { de: 'Verlustaversion', en: 'Loss aversion' },
      { de: 'Verknappung', en: 'Scarcity' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Verlustaversion: Der Newsletter argumentiert nicht mit dem Nutzen der Mitgliedschaft, sondern mit dem, was beim Austritt verloren ginge — und macht den über Jahre aufgebauten Besitzstand (Verzeichniseintrag, Presseausweis) unmittelbar vor der Entscheidung sichtbar. Weil Verluste schwerer wiegen als gleich große Gewinne, wirkt das oft stärker als eine reine Vorteilsliste — wobei der Effekt vom Kontext abhängt und nicht in jeder Situation trägt. Legitim einsetzen: Wer real wegfallende Leistungen vor einer Kündigung transparent benennt, informiert — professionell bleibt es, wenn daneben auch steht, was die Mitgliedschaft kostet und bringt. Erkennen und kontern: Die Frage umdrehen — "Würde ich heute neu eintreten?" — statt vom Verlust des Bestehenden her zu entscheiden. Verknappung wirkt plausibel, weil eine Verlängerungsfrist im Raum steht — sie würde aber mit begrenzter Verfügbarkeit arbeiten ("nur noch wenige Plätze", "Angebot endet"), nicht mit dem Gewicht des eigenen Besitzstands. Framing liegt nahe, weil die Darstellung erkennbar gewählt ist — Framing bezeichnet aber die Deutungssteuerung durch Wortwahl und Perspektive im Allgemeinen; hier arbeitet der spezifische Hebel, dass drohender Verlust des Aufgebauten schwerer wiegt als der spiegelbildliche Gewinn.',
      en: 'Loss aversion: the newsletter does not argue from the value of membership but from what leaving would take away — and it surfaces the assets built up over years (directory listing, press card) right before the decision. Because losses weigh more than equivalent gains, this often works harder than a plain list of benefits — though the effect is context-dependent, not a given. Used legitimately: transparently naming services that genuinely lapse on cancellation is information — it stays professional when what membership costs and delivers stands alongside. To recognise and counter it: flip the question — "would I join today?" — instead of deciding from the loss of what you hold. Scarcity looks plausible because a renewal deadline is implicitly in play — but scarcity would work with limited availability ("only a few spots left", "offer ends"), not with the weight of what you have built up. Framing seems close because the presentation is clearly chosen — but framing denotes steering interpretation through wording and perspective in general; here the specific lever is that the threatened loss of what you have built outweighs the mirror-image gain.',
    },
    points: 10,
    primaryTechniqueId: 'loss_aversion',
    relatedTechniques: ['loss_aversion', 'scarcity', 'framing'],
  },
];
