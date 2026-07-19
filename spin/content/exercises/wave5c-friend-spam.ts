// Welle 5c: 3 Übungen für friend_spam (Friend Spam).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// evidenceTier 'weak' → keine starken Wirkbehauptungen. Kein seriousMode.
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5cFriendSpam: Exercise[] = [
  {
    id: 'wave5c-friend_spam-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welche Technik liegt hier vor?',
      en: 'Which technique is at work here?',
    },
    scenario: {
      de: 'Produkt-Review einer Sprachlern-App: Als Kommunikationsberaterin gehst du den Onboarding-Flow durch. Direkt nach der Registrierung erscheint ein großer Button „Freunde einladen" — tippt der Nutzer darauf, lädt die App unbemerkt sein gesamtes Adressbuch hoch und verschickt an jeden Kontakt eine E-Mail „Tom lernt jetzt mit LinguaGo — mach mit!", abgesendet in Toms Namen. Einen Schritt, in dem Tom die Empfänger sieht oder auswählt, gibt es nicht.',
      en: 'A product review of a language-learning app: as a comms consultant you walk through the onboarding flow. Right after sign-up a large "Invite friends" button appears — tap it, and the app silently uploads the user\'s entire address book and sends every contact an email reading "Tom is now learning with LinguaGo — join in!", sent in Tom\'s name. There is no step in which Tom sees or selects the recipients.',
    },
    options: [
      { de: 'Friend Spam', en: 'Friend Spam' },
      { de: 'Consent- und Privacy-Dark-Patterns (die Zugriffs-Einwilligung wird erschlichen)', en: 'Consent and privacy dark patterns (the access consent is tricked out of the user)' },
      { de: 'Identitäts- und Herkunftstäuschung (der wahre Absender wird verschleiert)', en: 'Identity and provenance deception (the true sender is disguised)' },
      { de: 'Sneaking / Verschleiern (ein untergeschobener Posten in einer Transaktion)', en: 'Sneaking (a slipped-in item within a transaction)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Friend Spam: Die App erntet das komplette Adressbuch und verschickt in Toms Namen Einladungen an alle Kontakte, ohne dass er die Empfänger sieht oder bestätigt. Das Muster zapft fremde Kontaktnetze an, weil eine Einladung, die scheinbar von einem echten Bekannten stammt, mehr Vertrauen genießt als eine anonyme Werbe-Mail. Legitim wird derselbe Import-Flow, sobald die Zustimmung ausdrücklich ist, der Nutzer Empfänger und Einladungstext vorab sieht und einzeln auswählt und nichts ungefragt in seinem Namen rausgeht. Erkennen und kontern: Prüfe im Onboarding, ob nach dem Kontakt-Import ein Vorschau- und Auswahlschritt kommt und ob „Ablehnen" gleichwertig sichtbar ist — fehlt beides, gib den Flow nicht frei und verlange eine Bestätigung pro Empfänger. Consent- und Privacy-Dark-Patterns wären der Nachbar, wenn es nur darum ginge, die Zugriffs-Einwilligung zu erschleichen; hier ist der definierende Akt aber der Massenversand in fremdem Namen, nicht der Consent-Trick allein. Identitäts- und Herkunftstäuschung meint, dass der wahre Absender verschleiert wird — Toms Name steht hier sogar korrekt drauf, das Problem ist, dass nicht er den Versand veranlasst hat. Sneaking verschleiert einen einzelnen untergeschobenen Posten in einer Transaktion; Friend Spam geht darüber hinaus und betreibt den aktiven Versand an das gesamte Kontaktnetz.',
      en: 'Friend Spam: the app harvests the entire address book and sends invitations to every contact in Tom\'s name, without him seeing or confirming the recipients. The pattern taps into other people\'s contact networks because an invitation that appears to come from a real acquaintance is trusted more than an anonymous marketing email. The same import flow becomes legitimate once consent is explicit, the user previews and individually selects recipients and message, and nothing goes out in their name unbidden. To spot and counter it: check in the onboarding whether a preview-and-select step follows the contact import and whether "decline" is equally visible — if both are missing, do not sign off on the flow and demand a per-recipient confirmation. Consent and privacy dark patterns would be the neighbour if the issue were only tricking the access consent out of the user; here the defining act is the mass send in someone else\'s name, not the consent trick alone. Identity and provenance deception means the true sender is disguised — Tom\'s name is even shown correctly here; the problem is that he did not initiate the send. Sneaking disguises a single slipped-in item within a transaction; Friend Spam goes further and actively broadcasts to the entire contact network.',
    },
    points: 10,
    primaryTechniqueId: 'friend_spam',
    relatedTechniques: ['friend_spam', 'consent_and_privacy_dark_patterns', 'identity_provenance_deception', 'sneaking'],
  },
  {
    id: 'wave5c-friend_spam-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Als Growth- und Brand-Lead eines SaaS-Startups sitzt du im Feature-Review. Der Wachstums-Verantwortliche schlägt für die Registrierung vor: ein prominenter Button „Kontakte importieren", der das Adressbuch hochlädt und automatisch an alle eine Einladung im Namen des neuen Nutzers verschickt — „Überspringen" nur als grauer Link daneben. Er verspricht sich davon deutlich mehr Anmeldungen.',
      en: 'As growth and brand lead of a SaaS startup, you are in a feature review. The growth owner proposes for sign-up: a prominent "Import contacts" button that uploads the address book and automatically sends everyone an invitation in the new user\'s name — with "skip" only as a grey link beside it. He expects a marked lift in sign-ups.',
    },
    options: [
      {
        de: 'Ich lehne den automatischen Versand ab und baue den Flow um: ausdrückliche, gleichwertig sichtbare Zustimmung, danach ein Vorschau-Schritt, in dem der Nutzer Empfänger und Einladungstext sieht und einzeln auswählt, und kein Versand ohne diese Bestätigung — dazu weise ich auf das rechtliche Risiko hin, unaufgefordert Nachrichten im Namen Dritter an deren Kontakte zu schicken.',
        en: 'I reject the automatic send and rebuild the flow: explicit, equally visible consent, then a preview step where the user sees and individually selects recipients and message, and no send without that confirmation — and I flag the legal risk of firing off unsolicited messages in someone else\'s name to their contacts.',
      },
      {
        de: 'Ich stimme zu, blende nach dem Import aber kurz einen Hinweis „Einladungen werden gesendet" ein — damit ist es ja transparent.',
        en: 'I agree, but after the import I briefly show a "invitations are being sent" notice — that makes it transparent.',
      },
      {
        de: 'Ich lasse den Auto-Versand, beschränke ihn aber auf die ersten 20 Kontakte — kleiner ist er weniger auffällig und wirkt harmloser.',
        en: 'I keep the auto-send but cap it at the first 20 contacts — smaller is less conspicuous and feels more harmless.',
      },
      {
        de: 'Ich verbiete jeden Kontakt-Import grundsätzlich — sobald eine App das Adressbuch liest, ist es Friend Spam.',
        en: 'I ban any contact import on principle — the moment an app reads the address book, it is Friend Spam.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist Friend Spam: Das Adressbuch wird geerntet und die App verschickt automatisch Einladungen im Namen des Nutzers an dessen Kontakte, ohne dass er die Empfänger sieht oder bestätigt. Der Hebel ist das erschlichene Vertrauen der Empfänger in einen scheinbar bekannten Absender. Die beste Option ersetzt den Trick durch sein legitimes Pendant — ausdrückliche Einwilligung plus ein Vorschau- und Auswahlschritt — und benennt das Risiko: Nachrichten unaufgefordert im Namen Dritter zu versenden, gilt in mehreren Rechtsordnungen als unzulässige Werbung und beschädigt, wenn es auffällt, unmittelbar die Marke. Ein kurzer Hinweis „Einladungen werden gesendet" klingt nach Transparenz, kommt aber erst nach dem Versand und lässt dem Nutzer keine Wahl mehr — das entlastet nicht. Den Auto-Versand auf 20 Kontakte zu begrenzen ändert nichts am Kern: Es gehen weiterhin unbestätigte Nachrichten in fremdem Namen raus, nur weniger; das ist Feigenblatt statt Lösung. Jeden Kontakt-Import pauschal zu verbieten überkorrigiert — ein Import mit ausdrücklicher Zustimmung und Empfänger-Auswahl ist legitim; das Problem ist der ungefragte Versand, nicht der Import an sich.',
      en: 'The proposal is Friend Spam: the address book is harvested and the app automatically sends invitations in the user\'s name to their contacts, without him seeing or confirming the recipients. The lever is the borrowed trust recipients place in a seemingly familiar sender. The best option replaces the trick with its legitimate counterpart — explicit consent plus a preview-and-select step — and names the risk: sending unsolicited messages in someone else\'s name counts as unlawful advertising in several jurisdictions and, once exposed, damages the brand directly. A brief "invitations are being sent" notice sounds like transparency, but it comes only after the send and leaves the user no choice — that is no relief. Capping the auto-send at 20 contacts changes nothing at the core: unconfirmed messages still go out in someone else\'s name, just fewer of them; that is a fig leaf, not a fix. Banning every contact import wholesale overcorrects — an import with explicit consent and recipient selection is legitimate; the problem is the unbidden send, not the import as such.',
    },
    points: 10,
    primaryTechniqueId: 'friend_spam',
    relatedTechniques: ['friend_spam', 'consent_and_privacy_dark_patterns'],
  },
  {
    id: 'wave5c-friend_spam-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Support-Analyse nach Nutzerbeschwerden: Eine Meditations-App hat beim Onboarding das Adressbuch der Nutzer ausgelesen und an alle gespeicherten Nummern eine SMS „Klaus empfiehlt dir CalmMind" geschickt — abgesendet im Namen der Nutzer, die davon nichts wussten. Jetzt beschweren sich deren Kontakte über die ungefragte Nachricht.',
      en: 'Support analysis after user complaints: during onboarding a meditation app read out the users\' address books and texted every saved number "Klaus recommends CalmMind to you" — sent in the users\' names, who knew nothing about it. Now their contacts are complaining about the unsolicited message.',
    },
    options: [
      { de: 'Friend Spam', en: 'Friend Spam' },
      { de: 'Identitäts- und Herkunftstäuschung (der Absender einer Nachricht wird verschleiert)', en: 'Identity and provenance deception (the sender of a message is disguised)' },
      { de: 'Coordinated Inauthentic Amplification (ein Netzwerk unechter Accounts verstärkt eine Botschaft)', en: 'Coordinated Inauthentic Amplification (a network of fake accounts amplifies a message)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Friend Spam: Die App erntet das Adressbuch und verschickt im Namen der ahnungslosen Nutzer Empfehlungen an deren gespeicherte Kontakte. Der Hebel ist das geliehene Vertrauen — die Empfänger reagieren, weil die Nachricht scheinbar von einem echten Bekannten kommt. Erkennen und kontern: Achte auf die Kombination aus Adressbuch-Zugriff plus automatisch versendeten Nachrichten in fremdem Namen ohne Vorschau- oder Auswahlschritt; als Betroffener meldest du die App und widerrufst den Kontaktzugriff in den Systemeinstellungen. Legitim wäre dieselbe Empfehlung nur mit ausdrücklicher Zustimmung und sichtbarer Empfängerauswahl. Identitäts- und Herkunftstäuschung meint, dass der wahre Absender verschleiert wird — hier steht der Name der Nutzer sogar korrekt drauf, sie haben den Versand nur nicht veranlasst. Coordinated Inauthentic Amplification nutzt ein Netzwerk unechter Accounts, um eine Botschaft breit zu verstärken; hier gibt es keine erfundenen Accounts, sondern echte Adressbücher, die für Versand in fremdem Namen missbraucht werden.',
      en: 'Friend Spam: the app harvests the address book and sends recommendations to the unwitting users\' saved contacts in the users\' names. The lever is borrowed trust — recipients respond because the message seems to come from a real acquaintance. To spot and counter it: watch for the combination of address-book access plus automatically sent messages in someone else\'s name with no preview or select step; if you are affected, report the app and revoke contact access in the system settings. The same recommendation would be legitimate only with explicit consent and a visible recipient selection. Identity and provenance deception means the true sender is disguised — here the users\' names are even shown correctly; they simply did not initiate the send. Coordinated Inauthentic Amplification uses a network of fake accounts to broadly amplify a message; here there are no invented accounts, but real address books abused to send in other people\'s names.',
    },
    points: 10,
    primaryTechniqueId: 'friend_spam',
    relatedTechniques: ['friend_spam', 'identity_provenance_deception', 'coordinated_inauthentic_amplification'],
  },
];
