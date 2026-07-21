// Welle R6: 3 Übungen für gaslighting (Gaslighting).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie
// die Anwendung. Evidenz-Tier weak: keine Wirkbehauptungen.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6Gaslighting: Exercise[] = [
  {
    id: 'wave6-gaslighting-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Vier-Augen-Feedback nach einer verpatzten Freigabe: Der Abteilungsleiter erklärt seiner Referentin, die Freigabe-Mail, auf die sie sich beruft, habe er „nie geschrieben" — sie „phantasiere sich Absprachen zusammen" und irre sich in letzter Zeit auffällig oft; sie solle sich fragen, ob sie den Überblick über ihre eigenen Vorgänge überhaupt noch habe. Die Mail liegt unverändert in ihrem Postfach.',
      en: 'One-on-one feedback after a botched sign-off: the department head tells his associate that the approval email she cites is one he "never wrote" — she is "inventing agreements" and has been getting things wrong suspiciously often lately; she should ask herself whether she still has any grip on her own files at all. The email sits unchanged in her inbox.',
    },
    options: [
      { de: 'Gaslighting', en: 'Gaslighting' },
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Ad Hominem (Diskreditierung der Person)', en: 'Ad hominem (discrediting the person)' },
      { de: 'Zersetzung (Decomposition)', en: 'Zersetzung (decomposition)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gaslighting: Der Kern ist nicht das Bestreiten einer einzelnen Mail, sondern dass die Wahrnehmung der Referentin systematisch als unzuverlässig hingestellt wird — belegte Fakten werden geleugnet und der Zweifel wird verallgemeinert („du irrst dich auffällig oft", „hast du überhaupt noch den Überblick"), bis sie an der eigenen Erinnerung zweifelt. Schutzhinweis: Sichere Belege außerhalb der Reichweite der anderen Person (E-Mails weiterleiten, Protokolle und Notizen zeitnah festhalten) und hol dir eine unabhängige Zweitwahrnehmung von Mitwissenden — deine Dokumentation ist der Ankerpunkt, den diese Taktik auflösen will. Erkennen und kontern: Trenne die konkrete Sachfrage („Liegt die Mail vor?") von der Charakterunterstellung („Du irrst dich ständig"); bleib bei der belegbaren Ebene, zieh eine dritte Person hinzu und dokumentiere Gespräche schriftlich. DARVO lag nahe, weil auch hier geleugnet wird — dort kippt die Person aber unter Vorwurf ins Gegenteil und macht die Betroffene zur eigentlichen Täterin; hier gibt es keine Rollenumkehr, sondern die gezielte Untergrabung ihrer Realitätssicht. Ad Hominem wirkte plausibel, weil die Person hier tatsächlich angegriffen und ihre Verlässlichkeit diskreditiert wird — ein Ad Hominem entwertet die Person aber, um ein einzelnes Argument vom Tisch zu wischen; hier geht es nicht ums Gewinnen einer Sachdebatte, sondern darum, ihre Wahrnehmung und Erinnerung dauerhaft zu untergraben, bis sie sich selbst nicht mehr traut. Zersetzung wirkte plausibel, weil auch sie Selbstzweifel sät — sie ist aber eine verdeckt orchestrierte Kampagne aus vielen Einzelmaßnahmen (oft institutionell), während hier eine Person im direkten Gespräch die Wahrnehmung der anderen leugnet.',
      en: 'Gaslighting: the core is not denying a single email but systematically framing the associate\'s perception as unreliable — documented facts are denied and the doubt is generalized ("you get things wrong suspiciously often", "do you still have any grip at all") until she doubts her own memory. Protective note: secure your evidence beyond the other person\'s reach (forward emails, log minutes and notes promptly) and get an independent second read from people who were there — your documentation is the anchor this tactic tries to dissolve. To spot and counter it: separate the concrete factual question ("Does the email exist?") from the character claim ("You are always wrong"); stay on the verifiable level, bring in a third party, and record conversations in writing. DARVO was close because there is denial here too — but in DARVO the person, once accused, flips it around and recasts the affected party as the real offender; here there is no role reversal, just the deliberate undermining of her sense of reality. Ad hominem seemed plausible because the person here is indeed attacked and her reliability discredited — but an ad hominem devalues the person in order to sweep a single argument aside; here it is not about winning a factual debate but about persistently undermining her perception and memory until she no longer trusts herself. Zersetzung seemed plausible because it also sows self-doubt — but it is a covertly orchestrated campaign of many separate measures (often institutional), whereas here one person is denying another\'s perception in a direct conversation.',
    },
    points: 10,
    primaryTechniqueId: 'gaslighting',
    relatedTechniques: ['gaslighting', 'darvo', 'ad_hominem', 'zersetzung_decomposition'],
  },
  {
    id: 'wave6-gaslighting-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Eine Nachwuchsredakteurin sucht dich als erfahrene Kollegin auf: Ihr Ressortleiter bestreite regelmäßig Zusagen, die per Team-Chat belegt sind, nenne sie dann „vergesslich" und „überempfindlich" und tue frühere Beschlüsse als „nie so besprochen" ab. Sie traut inzwischen ihren eigenen Notizen nicht mehr und fragt dich, ob sie sich das alles vielleicht nur einbilde.',
      en: 'A junior editor comes to you as a senior colleague: her section head regularly denies commitments that are documented in the team chat, then calls her "forgetful" and "oversensitive" and waves off earlier decisions as "never discussed that way". By now she no longer trusts her own notes and asks you whether she might just be imagining all of it.',
    },
    options: [
      {
        de: 'Ich bestätige ihre Wahrnehmung und benenne das Muster: Belegte Absprachen werden geleugnet und ihr Gedächtnis pauschal in Zweifel gezogen. Wir sichern die Chat-Verläufe und ihre Notizen, halten künftige Zusagen schriftlich fest, und ich verweise sie auf die formalen Wege (Personalstelle, Betriebsrat) — und darauf, sich nicht isolieren zu lassen.',
        en: 'I validate her perception and name the pattern: documented agreements are being denied and her memory is being cast into doubt wholesale. We secure the chat histories and her notes, put future commitments in writing, and I point her to the formal channels (HR, works council) — and to not letting herself be isolated.',
      },
      {
        de: 'Ich rate ihr, künftig einfach sorgfältiger zu sein — vielleicht hat sie das eine oder andere doch falsch erinnert; sie soll ihre Notizen lieber zweimal prüfen, bevor sie sich beschwert.',
        en: 'I advise her to just be more careful from now on — maybe she did misremember a thing or two; she should double-check her notes before she complains.',
      },
      {
        de: 'Ich empfehle ihr, den Ressortleiter im nächsten Meeting offen als Manipulator zu benennen und ihm vor dem Team seine Widersprüche um die Ohren zu hauen.',
        en: 'I recommend she openly call the section head a manipulator in the next meeting and throw his contradictions in his face in front of the team.',
      },
      {
        de: 'Ich sage ihr, das klinge nach einer persönlichen Unstimmigkeit zwischen zwei Charakteren; da halte ich mich besser raus und rate ihr, es auszusitzen.',
        en: 'I tell her this sounds like a personality clash between two characters; I had better stay out of it and advise her to just wait it out.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Reaktion behandelt zwei Dinge zugleich: Sie bestätigt die Wahrnehmung der Betroffenen (Gaslighting zielt genau darauf, dass sie ihr misstraut) und sie schützt handfest — Belege sichern, künftig schriftlich festhalten, formale Wege und Mitwissende einbeziehen, Isolation vermeiden. Schutzhinweis: Bei Gaslighting ist die eigene Dokumentation der Ankerpunkt; wer sie sichert und eine unabhängige Zweitwahrnehmung hinzuzieht, entzieht der Taktik die Grundlage. Erkennen: Warnzeichen sind das Leugnen belegter Absprachen, die Verallgemeinerung des Zweifels („vergesslich", „überempfindlich") und das wachsende Misstrauen gegen die eigene Erinnerung trotz Belegen. Zur sorgfältiger-sein-Option: Sie klingt vernünftig, macht dich aber zur Verbündeten der Manipulation — sie verlagert das Problem auf die Betroffene und verstärkt genau den Selbstzweifel, den das Muster erzeugt. Zur offenen Konfrontation vor dem Team: Der Impuls ist verständlich, doch ein Etikett wie „Manipulator" ohne gesicherte Belege und in ungeschütztem Rahmen eskaliert die Lage und kann die Betroffene angreifbar machen; erst dokumentieren und formale Wege nutzen. Zur Raushalten-Option: „Persönliche Unstimmigkeit" verharmlost ein Muster mit realem Schaden und lässt die Betroffene allein — Wegsehen ist hier keine Neutralität, sondern Rückzug der Unterstützung.',
      en: 'The best response handles two things at once: it validates the affected person\'s perception (gaslighting is designed precisely to make her distrust it) and it protects her concretely — secure the evidence, document in writing going forward, involve formal channels and witnesses, avoid isolation. Protective note: with gaslighting your own documentation is the anchor point; securing it and getting an independent second read removes the ground the tactic stands on. To spot it: the warning signs are denial of documented agreements, the generalizing of doubt ("forgetful", "oversensitive"), and growing distrust of one\'s own memory despite evidence. On the "be more careful" option: it sounds reasonable but makes you an ally of the manipulation — it shifts the problem onto the target and reinforces exactly the self-doubt the pattern produces. On open confrontation in front of the team: the impulse is understandable, but a label like "manipulator" without secured evidence and in an unprotected setting escalates things and can leave the target exposed; document first and use formal channels. On the "stay out of it" option: "a personality clash" trivializes a pattern with real harm and leaves the target alone — looking away here is not neutrality but the withdrawal of support.',
    },
    points: 10,
    primaryTechniqueId: 'gaslighting',
    relatedTechniques: ['gaslighting', 'darvo'],
  },
  {
    id: 'wave6-gaslighting-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fallbesprechung in einer Führungskräfte-Schulung zu fairem Feedback: Ein Vorgesetzter bestreitet gegenüber einem Mitarbeiter wieder und wieder Zusagen, die per Chat belegt sind, nennt ihn „vergesslich" und „überempfindlich" und deutet an, er verwechsle ständig Gespräche — bis der Mitarbeiter seinen eigenen Notizen nicht mehr traut und sich fragt, ob er sich die Absprachen nur eingebildet hat.',
      en: 'Case discussion in a leadership training on fair feedback: a manager repeatedly denies commitments to an employee that are documented in chat, calls him "forgetful" and "oversensitive", and hints that he is always mixing up conversations — until the employee no longer trusts his own notes and wonders whether he only imagined the agreements.',
    },
    options: [
      { de: 'Gaslighting', en: 'Gaslighting' },
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (Deny, Attack, Reverse Victim and Offender)' },
      { de: 'Zersetzung (Decomposition)', en: 'Zersetzung (decomposition)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gaslighting: Das Muster besteht darin, belegte Ereignisse zu leugnen und den Zweifel zu verallgemeinern („vergesslich", „überempfindlich", „du verwechselst ständig"), bis die Betroffene die eigene Wahrnehmung und Erinnerung nicht mehr für verlässlich hält. Als Begriff beschreibt Gaslighting genau diese systematische Untergrabung der Realitätssicht — das Konstrukt ist klinisch belegt, ohne dass daraus ein bezifferter Wirkungsgrad folgt. Schutzhinweis: Die eigene Dokumentation ist der Ankerpunkt; sichere Chat-Verläufe und Notizen außerhalb der Reichweite der anderen Person und hol dir eine unabhängige Zweitwahrnehmung. Erkennen: Achte auf das Leugnen von Belegtem, die pauschale Abwertung deines Gedächtnisses und das Gefühl, nach Gesprächen unsicherer zu sein, obwohl Belege vorliegen. DARVO lag nahe, weil auch geleugnet wird — dort dreht die Person den Vorwurf jedoch um und macht die Betroffene zur eigentlichen Täterin; hier bleibt es beim Untergraben ihrer Wahrnehmung, ohne Rollenumkehr. Zersetzung wirkte plausibel, weil auch sie Selbstzweifel erzeugt — sie ist aber eine verdeckt gesteuerte Kampagne aus vielen Maßnahmen, während hier eine Person im direkten Austausch die Erinnerung der anderen leugnet.',
      en: 'Gaslighting: the pattern consists of denying documented events and generalizing the doubt ("forgetful", "oversensitive", "you always mix things up") until the affected person no longer trusts their own perception and memory. As a term, gaslighting names exactly this systematic undermining of one\'s sense of reality — the construct is clinically established without that implying any quantified effect size. Protective note: your own documentation is the anchor point; secure chat histories and notes beyond the other person\'s reach and get an independent second read. To spot it: watch for the denial of documented facts, the blanket devaluing of your memory, and the sense of feeling less certain after conversations even though evidence exists. DARVO was close because there is denial too — but there the person turns the accusation around and casts the affected party as the real offender; here it stays at undermining their perception, with no role reversal. Zersetzung seemed plausible because it also produces self-doubt — but it is a covertly steered campaign of many measures, whereas here one person is denying another\'s memory in direct exchange.',
    },
    points: 10,
    primaryTechniqueId: 'gaslighting',
    relatedTechniques: ['gaslighting', 'darvo', 'zersetzung_decomposition'],
  },
];
