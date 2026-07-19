// Welle 5c: 3 Übungen für nagging (Nagging / Drängeln).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cNagging: Exercise[] = [
  {
    id: 'wave5c-nagging-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt das Tool hier ein?',
      en: 'Which pattern is the tool using here?',
    },
    scenario: {
      de: 'CRM-Tool im Vertrieb der Kommunikationsagentur: Beim Log-in der Account-Managerin legt sich jedes Mal der Dialog „Jetzt die KI-Assistenz aktivieren?" über den Bildschirm. Wählt sie „Später", ist er beim nächsten Log-in wieder da, danach nach jeder angelegten Notiz — ein „Nein, danke" ohne Wiederkehr gibt es nicht, kein Rabatt und keine ablaufende Frist locken. Nach Tagen aktiviert sie die Funktion, nur damit die Einblendung endlich verschwindet.',
      en: 'CRM tool in a communications agency’s sales team: every time the account manager logs in, the dialog "Activate the AI assistant now?" covers the screen. If she picks "Later", it is back at the next log-in, then after every note she creates — there is no "No, thanks" that makes it stay gone, no discount and no expiring deadline. After days she activates the feature just to make the prompt finally disappear.',
    },
    options: [
      { de: 'Sludge / Bad Friction', en: 'Sludge / bad friction' },
      { de: 'Nagging (Drängeln)', en: 'Nagging' },
      { de: 'Confirmshaming (Scham-Opt-out)', en: 'Confirmshaming' },
      { de: 'Fake Urgency / Countdown', en: 'Fake urgency / countdown' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Nagging: Dieselbe Aufforderung kehrt nach jeder Ablehnung unverändert zurück und unterbricht die Arbeit so lange, bis das Ja allein die Störung beenden soll — kein neues Argument, keine Frist, kein Rabatt, nur die Wiederholung zehrt den Widerstand auf. Legitim einsetzen: Ein einmaliges Opt-in im richtigen Moment (nach dem ersten erkennbaren Nutzen) mit einem Nein, das für die Session oder dauerhaft respektiert wird, ist professionell — der Maßstab lautet: einmal fragen, Ablehnung gilt. Erkennen und kontern: Prüf, ob ein Nein dauerhaft trägt oder nur bis zum nächsten Aufruf; kehrt dieselbe Frage unverändert wieder, dokumentiere die Zahl der Einblendungen, verweise intern auf genervte Nutzer, Deinstallations- und Abmelderaten und dräng auf eine echte „Nicht mehr fragen"-Option. Sludge wirkt plausibel, weil auch dort etwas nervt — es beschreibt aber Reibung, die dich von deinem eigenen Ziel abhält (etwa Kündigen); hier arbeitest du weiter, du wirst nur zu einem fremden Ziel gedrängt. Confirmshaming liegt nahe, weil beide zum Ja schieben — es tut das aber über beschämende Ablehn-Formulierungen („Nein, ich spare lieber nicht"); hier ist der Text neutral, es zählt allein die Wiederkehr. Fake Urgency passt scheinbar wegen des Drucks — dort erzeugt jedoch eine (oft erfundene) Frist oder ein Countdown den Druck; hier gibt es keine Zeitlinie, nur Hartnäckigkeit.',
      en: 'Nagging: the same request returns unchanged after every refusal and keeps interrupting the work until the yes exists only to stop the disruption — no new argument, no deadline, no discount, only the repetition wears down resistance. Used legitimately: a single opt-in at the right moment (after the first tangible benefit) with a "no" that is respected for the session or for good is professional — the yardstick is ask once, and a refusal holds. To spot and counter it: check whether a "no" sticks or only lasts until the next launch; if the same question returns unchanged, log the number of prompts, point internally to annoyed users and to uninstall and unsubscribe rates, and insist on a genuine "don’t ask again" option. Sludge looks plausible because it, too, is irritating — but it describes friction that keeps you from your own goal (say, cancelling); here you keep working, you are merely pushed toward someone else’s goal. Confirmshaming seems close because both nudge toward yes — but it does so through shaming refusal wording ("No, I’d rather not save money"); here the copy is neutral and only the recurrence counts. Fake urgency appears to fit because of the pressure — but there a (often invented) deadline or countdown creates it; here there is no timeline, only persistence.',
    },
    points: 10,
    primaryTechniqueId: 'nagging',
    relatedTechniques: ['nagging', 'sludge', 'consent_and_privacy_dark_patterns', 'dark_patterns'],
  },
  {
    id: 'wave5c-nagging-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Sprint-Planning für eine Newsletter-App, du verantwortest Nutzerkommunikation und Marke: Der Growth-Kollege schlägt vor, das Opt-in für Push-Benachrichtigungen bei jedem App-Start erneut einzublenden, bis die Nutzer:in zustimmt — „ein Ablehnen setzt es einfach bis morgen zurück, das hebt die Opt-in-Rate spürbar".',
      en: 'Sprint planning for a newsletter app; you own user communications and the brand: the growth colleague proposes re-showing the push-notification opt-in at every app launch until the user agrees — "a refusal just resets it until tomorrow, that lifts the opt-in rate noticeably".',
    },
    options: [
      {
        de: 'Ich widerspreche und halte das Prinzip fest: Wir fragen einmal im richtigen Moment — nach dem ersten erkennbaren Nutzen — und ein Nein gilt dauerhaft. Ein durch Wiederholung erzwungenes Opt-in bläht die Kennzahl auf, produziert aber genervte Nutzer, hohe Abmelde- und Deinstallationsraten und Ein-Stern-Bewertungen, die auf die Marke zurückschlagen; erzwungene Einwilligung steht in der EU zudem rechtlich auf dünnem Eis.',
        en: 'I push back and put the principle on record: we ask once at the right moment — after the first tangible benefit — and a "no" holds for good. An opt-in forced through repetition inflates the metric but produces annoyed users, high unsubscribe and uninstall rates, and one-star reviews that rebound onto the brand; forced consent is also on thin legal ice in the EU.',
      },
      {
        de: 'Ich trage den Vorschlag mit: Eine höhere Opt-in-Rate ist ein klares Quartalsziel, der Dialog lässt sich ja jederzeit wegtippen, und irgendwann sagt fast jede:r Ja.',
        en: 'I go along with it: a higher opt-in rate is a clear quarterly goal, the dialog can be dismissed any time, and eventually almost everyone says yes.',
      },
      {
        de: 'Ich schlage vor, das wiederkehrende Fenster freundlicher zu texten und mit einem Vorteil-Hinweis zu versehen — dann stört die Wiederholung weniger und wir behalten die höhere Rate.',
        en: 'I suggest wording the recurring prompt more warmly and adding a benefit note — then the repetition bothers people less and we keep the higher rate.',
      },
      {
        de: 'Ich lasse den Opt-in-Dialog ersatzlos streichen und verbiete jede Push-Aufforderung — nur so entgehen wir jedem Drängel-Vorwurf vollständig.',
        en: 'I have the opt-in dialog removed entirely and ban any push prompt — only that fully spares us any accusation of nagging.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist Nagging in Reinform: Dieselbe Frage kehrt bei jedem Start zurück, ein Nein trägt nur bis morgen, und die höhere Rate entsteht dadurch, dass Nutzer:innen zur Beendigung der Störung zustimmen — nicht aus Interesse. Die beste Option benennt den Maßstab (einmal fragen, Ablehnung gilt), bietet die verhältnismäßige Alternative und argumentiert über Risiko statt Moral: Eine aufgeblähte Opt-in-Zahl verdeckt genervte Nutzer, und Abmeldungen, Deinstallationen und Store-Bewertungen holen die Marke ein. Legitim einsetzen: Ein Reminder ist in Ordnung, wenn er an einen echten Nutzenmoment gekoppelt ist und ein Nein dauerhaft respektiert — guter Reminder dient der Nutzerin, schlechter nur der Kennzahl. Erkennen und kontern: Frag im Team „Trägt ein Nein dauerhaft?" und zähl, wie oft dieselbe Aufforderung wiederkehrt; klafft beides auseinander, ist das dein Signal. Der Mitträger-Weg wirkt plausibel, weil die Opt-in-Rate ein echtes Ziel ist — aber die erzwungene Einwilligung ist genau der Schaden des Musters, nicht sein Erfolg. Der Text-und-Vorteil-Weg behandelt ein Prozessproblem als Formulierungsproblem: Der freundlichste Ton nimmt der Wiederholung nichts, das Nein trägt weiter nicht. Die Komplett-Streichung überkorrigiert: Ein einmaliges, respektvolles Opt-in ist legitim und sinnvoll — das Problem ist die erzwungene Wiederkehr, nicht die Frage an sich.',
      en: 'The proposal is nagging in its purest form: the same question returns at every launch, a "no" only lasts until tomorrow, and the higher rate comes from users agreeing to end the disruption — not from interest. The best option names the yardstick (ask once, a refusal holds), offers the proportionate alternative, and argues through risk rather than morality: an inflated opt-in count masks annoyed users, and unsubscribes, uninstalls, and store reviews catch up with the brand. Used legitimately: a reminder is fine when tied to a genuine moment of benefit and a "no" is respected for good — a good reminder serves the user, a bad one only the metric. To spot and counter it: ask the team "does a no hold for good?" and count how often the same prompt returns; when the two diverge, that is your signal. Going along looks plausible because the opt-in rate is a real goal — but coerced consent is exactly the harm of the pattern, not its success. The reword-and-benefit route treats a process problem as a wording problem: the warmest tone takes nothing away from the repetition, and the "no" still does not hold. Removing it entirely overcorrects: a single, respectful opt-in is legitimate and useful — the problem is the forced recurrence, not the question itself.',
    },
    points: 10,
    primaryTechniqueId: 'nagging',
    relatedTechniques: ['nagging', 'consent_and_privacy_dark_patterns', 'dark_patterns'],
  },
  {
    id: 'wave5c-nagging-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Betriebssystem-Update auf den Redaktionsrechnern: Nach jedem Hochfahren zeigt der Redakteurin das Fenster „Jetzt neu starten und aktualisieren?". Wählt sie „Heute Abend erinnern", kommt es eine Stunde später wieder, danach im 30-Minuten-Takt — dieselbe Frage, ohne Frist und ohne Zusatzargument, bis sie den Neustart auslöst, um die Unterbrechungen zu beenden.',
      en: 'Operating-system update on the editorial machines: after every boot, the editor sees the window "Restart and update now?". If she picks "Remind me tonight", it returns an hour later, then every 30 minutes — the same question, with no deadline and no added argument, until she triggers the restart to stop the interruptions.',
    },
    options: [
      { de: 'Nagging (Drängeln)', en: 'Nagging' },
      { de: 'Sludge / Bad Friction', en: 'Sludge / bad friction' },
      { de: 'Fake Urgency / Countdown', en: 'Fake urgency / countdown' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nagging: Dieselbe Aufforderung unterbricht in immer kürzeren Abständen, ein „Später" verschiebt sie nur, und der Neustart erfolgt am Ende allein, um die Störung zu beenden — es zählt die Wiederholung, nicht ein Argument. Legitim einsetzen: Ein sicherheitskritisches Update darf erinnern, wenn die Erinnerung an einen sinnvollen Moment gekoppelt ist und ein Aufschub verlässlich trägt; einmal fragen, Wahl respektieren. Erkennen und kontern: Achte darauf, ob ein „Später" hält oder nur bis zur nächsten Runde gilt; plan den Neustart aktiv zu einem selbstgewählten Zeitpunkt ein, statt dich in den Rhythmus des Fensters drängen zu lassen. Sludge wirkt plausibel, weil beides nervt — es beschreibt aber Reibung gegen dein eigenes Ziel; hier wirst du zu einem fremden Ziel gedrängt, während du eigentlich weiterarbeiten willst. Fake Urgency liegt nahe wegen des Drucks — dort erzeugt aber eine Frist oder ein Countdown den Druck; hier fehlt jede Zeitlinie, es wirkt allein die Hartnäckigkeit.',
      en: 'Nagging: the same prompt interrupts at ever-shorter intervals, a "later" only postpones it, and the restart finally happens just to end the disruption — it is the repetition that counts, not an argument. Used legitimately: a security-critical update may remind you when the reminder is tied to a sensible moment and a deferral reliably holds; ask once, respect the choice. To spot and counter it: watch whether a "later" sticks or only lasts until the next round; actively schedule the restart at a time you choose instead of being pushed into the window’s rhythm. Sludge looks plausible because both are irritating — but it describes friction against your own goal; here you are pushed toward someone else’s goal while you actually want to keep working. Fake urgency seems close because of the pressure — but there a deadline or countdown creates it; here there is no timeline at all, only the persistence works.',
    },
    points: 10,
    primaryTechniqueId: 'nagging',
    relatedTechniques: ['nagging', 'sludge', 'dark_patterns'],
  },
];
