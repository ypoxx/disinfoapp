// Welle R6: 3 Übungen für kompromat_leverage (Kompromat / Druck über
// kompromittierendes Material).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen des Musters und Schutz der Betroffenen,
// nie die Anwendung und nie die Täterperspektive. Evidenz-Tier weak: keine
// quantifizierten Wirkbehauptungen, Fokus auf Muster erkennen und schützen.
// relatedTechniques nur mit in content/techniques/index.ts registrierten IDs
// (black_grey_white_propaganda) plus der Subjekt-ID kompromat_leverage, die von
// der Hauptsession registriert wird; Distraktoren erscheinen als Options-Label,
// nicht als ID.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6KompromatLeverage: Exercise[] = [
  {
    id: 'wave6-kompromat_leverage-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Vertrauliche Beratung einer Führungskraft: Eine Bereichsleiterin berichtet, ein externer Berater habe ihr kurz vor der Budgetabstimmung beiläufig gezeigt, dass er über private Nachrichten und ältere, heikle Aufnahmen von ihr verfüge. Er habe hinzugefügt, das bleibe „selbstverständlich unter ihnen", solange sie im Gremium seinen Vorschlag mittrage. Seither fühlt sie sich in ihrer Stimme nicht mehr frei.',
      en: 'A confidential advisory session with a senior manager: a department head reports that, shortly before the budget vote, an external consultant casually showed her that he holds private messages and older, sensitive images of her. He added that this would "of course stay between them" as long as she backed his proposal in the committee. Since then she no longer feels free in how she votes.',
    },
    options: [
      { de: 'Kompromat (Druck über kompromittierendes Material)', en: 'Kompromat (leverage through compromising material)' },
      { de: 'Zersetzung (verdeckt orchestrierte Zermürbung über viele Kleinvorfälle)', en: 'Zersetzung (a covertly orchestrated attrition campaign of many small incidents)' },
      { de: 'Schwarze/graue Propaganda (verdeckte Herkunft der Botschaft)', en: 'Black/grey propaganda (concealed source of the message)' },
      { de: 'DARVO (Leugnen, Angreifen, Täter-Opfer-Umkehr)', en: 'DARVO (deny, attack, reverse victim and offender)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Kompromat: Der Hebel ist konkretes belastendes Material — hier private Nachrichten und Aufnahmen —, dessen Veröffentlichung nicht verlangt, sondern in Aussicht gestellt wird („bleibt unter uns"), um eine Entscheidung zu erzwingen. Genau das macht das Muster erkennbar: Besitz von Material plus verdeckte Drohung plus zeitliche Kopplung an eine anstehende Abstimmung. Schutzhinweis: Der Ansatzpunkt ist die Drohung, nicht das mögliche Material. Halte die Andeutung nüchtern fest (Datum, Wortlaut, Kanal, Zeugen), rate der Betroffenen, nicht unter diesem Druck zu entscheiden, den Kontakt nicht allein zu führen und früh formale Stellen einzubinden (Rechtsberatung, Compliance, ggf. Strafverfolgung, Datenschutz); Nachgeben beendet den Druck erfahrungsgemäß nicht, sondern etabliert ihn. Erkennen: Achte auf das „ich verfüge über…", auf in Aussicht gestellte statt verlangte Veröffentlichung und auf das exakte Timing vor einer Entscheidung. Zersetzung lag nahe, weil auch dort Druck aus dem Hintergrund entsteht — dort zermürbt aber ein Bündel unauffälliger Kleinvorfälle (Gerüchte, Sabotage, Isolation) ohne ein einzelnes Druckmittel; hier hängt alles an einem konkreten Material. Schwarze/graue Propaganda wirkte plausibel, weil auch dort mit verdeckter Herkunft gearbeitet wird — sie verschleiert jedoch, wer eine Botschaft an ein Publikum sendet, während Kompromat eine einzelne Zielperson mit belastendem Material unter Druck setzt. DARVO passt nicht: Das ist ein Reaktionsmuster, mit dem eine zur Rede gestellte Person Vorwürfe leugnet, angreift und Täter und Opfer vertauscht — hier gibt es keine Konfrontation, die umgedreht wird, sondern eine vorgelagerte Drohung.',
      en: 'Kompromat: the lever is concrete incriminating material — here private messages and images — whose release is not demanded but held out in prospect ("stays between us") to force a decision. That is exactly what makes the pattern recognizable: possession of material plus a veiled threat plus timing tied to an upcoming vote. Protective note: the point of attack is the threat, not the possible material. Record the insinuation soberly (date, wording, channel, witnesses), advise the affected person not to decide under this pressure, not to handle the contact alone, and to involve formal channels early (legal advice, compliance, where relevant law enforcement, data protection); giving in does not, in experience, end the pressure but entrenches it. To spot it: watch for the "I have in my possession…", for release held out rather than demanded, and for the precise timing before a decision. Zersetzung was close because pressure also comes from the background there — but that wears a target down through a bundle of unremarkable small incidents (rumours, sabotage, isolation) with no single lever; here everything hinges on one concrete item of material. Black/grey propaganda seemed plausible because it too works with a concealed origin — but it disguises who is sending a message to an audience, whereas Kompromat pressures a single target with incriminating material. DARVO does not fit: that is a reactive pattern in which someone who is confronted denies the accusation, attacks, and reverses victim and offender — here there is no confrontation being turned around, but an up-front threat.',
    },
    points: 10,
    primaryTechniqueId: 'kompromat_leverage',
    relatedTechniques: ['kompromat_leverage', 'black_grey_white_propaganda'],
  },
  {
    id: 'wave6-kompromat_leverage-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du berätst in der Compliance-Stelle: Eine Kollegin sucht dich auf, weil ein Geschäftspartner ihr signalisiert hat, er halte private, teils aus dem Kontext gerissene Aufnahmen von ihr zurück — solange sie eine laufende interne Prüfung nicht weitertreibe. Sie überlegt, klein beizugeben, damit nichts an die Öffentlichkeit gerät.',
      en: 'You are advising at the compliance office: a colleague comes to you because a business partner has signalled that he is holding back private, partly out-of-context images of her — as long as she does not push an ongoing internal review any further. She is considering backing off so that nothing reaches the public.',
    },
    options: [
      {
        de: 'Ich nehme ihre Schilderung ernst und benenne das Muster: Der Hebel ist die Drohung, nicht das Material. Wir dokumentieren nüchtern (Datum, Wortlaut der Andeutung, Kanal, Zeugen), sie entscheidet nichts unter diesem Druck und führt den Kontakt nicht allein; auf ihren Wunsch binden wir früh formale Stellen ein (Rechtsberatung, Datenschutz, ggf. Strafverfolgung) und trennen die Prüfung sauber von ihrer Person.',
        en: 'I take her account seriously and name the pattern: the lever is the threat, not the material. We document soberly (date, wording of the insinuation, channel, witnesses), she decides nothing under this pressure and does not handle the contact alone; at her request we bring in formal channels early (legal advice, data protection, where relevant law enforcement) and keep the review cleanly separated from her as a person.',
      },
      {
        de: 'Ich rate ihr, dem Partner entgegenzukommen und die Prüfung ruhen zu lassen — solange das Material zurückgehalten wird, ist der Schaden ja abgewendet.',
        en: 'I advise her to accommodate the partner and let the review lapse — as long as the material is held back, the harm is averted anyway.',
      },
      {
        de: 'Ich empfehle ihr, selbst belastendes Material über den Partner zusammenzutragen, damit sie im Gegenzug ein eigenes Druckmittel in der Hand hat.',
        en: 'I recommend that she gather incriminating material about the partner herself, so that she has her own lever in return.',
      },
      {
        de: 'Ich sage ihr, sie solle vorerst nichts dokumentieren und niemanden einweihen, damit keine Spur entsteht, die die Sache später größer macht.',
        en: 'I tell her to document nothing for now and to let no one in on it, so that no trail arises that would make the matter bigger later.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Reaktion tut zweierlei: Sie bestätigt die Wahrnehmung der Betroffenen und richtet den Blick auf den eigentlichen Hebel — bei Kompromat wirkt nicht das Material, sondern die in Aussicht gestellte Veröffentlichung, die ihre Entscheidung steuern soll. Deshalb wird nüchtern dokumentiert, nichts unter Druck entschieden, der Kontakt nicht allein geführt und die Prüfung von ihrer Person getrennt; formale Stellen kommen im Tempo der Betroffenen hinzu. Schutzhinweis: Nachgeben wendet den Schaden nicht ab, sondern belegt die Wirksamkeit der Drohung und lädt die nächste ein. Erkennen: „ich halte zurück…", in Aussicht gestellte statt verlangte Veröffentlichung, Kopplung an eine laufende Prüfung. Die Entgegenkommen-Option klingt deeskalierend, macht die Betroffene aber dauerhaft steuerbar und opfert zugleich die Integrität der Prüfung — genau das ist das Ziel des Drucks. Selbst Gegenmaterial zu sammeln macht sie zur Akteurin derselben Methode, ist unlauter und rechtlich riskant; Schutz entsteht durch Belege, Sichtbarmachen und Unterstützung, nicht durch eigenen Rufschaden an anderen. Nichts zu dokumentieren wirkt vorsichtig, nimmt ihr aber genau den Ankerpunkt, den die Verdecktheit auflösen will — ohne Protokoll steht später Aussage gegen Aussage.',
      en: 'The best response does two things: it validates the affected person\'s perception and directs attention to the real lever — with Kompromat it is not the material that works but the prospect of release, meant to steer her decision. So we document soberly, decide nothing under pressure, do not handle the contact alone, and keep the review separated from her as a person; formal channels are brought in at her pace. Protective note: giving in does not avert the harm but proves the threat works and invites the next one. To spot it: "I am holding back…", release held out rather than demanded, coupling to an ongoing review. The accommodation option sounds de-escalating but makes the affected person permanently steerable and sacrifices the integrity of the review at the same time — which is exactly what the pressure is after. Gathering counter-material herself turns her into an agent of the same method, is dishonest, and is legally risky; protection comes from evidence, making the pattern visible, and support, not from damaging others\' reputations. Documenting nothing looks cautious but removes the very anchor point that the covertness tries to dissolve — without a record it later becomes one word against another.',
    },
    points: 10,
    primaryTechniqueId: 'kompromat_leverage',
    relatedTechniques: ['kompromat_leverage'],
  },
  {
    id: 'wave6-kompromat_leverage-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fallbesprechung in einer Fortbildung zur Kommunikationsberatung: Eine Pressesprecherin schildert, wie kurz vor einer heiklen Ausschusssitzung ein Lobbyist einer Abgeordneten wissen ließ, er besitze ältere, kompromittierende Fotos — und werde sie „für sich behalten", falls sie in seinem Sinne stimme. Das Bildmaterial tauchte nie auf; die Andeutung genügte, um ihr Abstimmungsverhalten zu beeinflussen.',
      en: 'A case discussion in a training on communications advising: a press officer describes how, shortly before a sensitive committee session, a lobbyist let a member of parliament know he possessed older, compromising photos — and would "keep them to himself" if she voted his way. The images never surfaced; the insinuation alone was enough to sway how she voted.',
    },
    options: [
      { de: 'Kompromat (Druck über kompromittierendes Material)', en: 'Kompromat (leverage through compromising material)' },
      { de: 'Zersetzung (Decomposition)', en: 'Zersetzung (decomposition)' },
      { de: 'Proxy Attack (Angriff durch Stellvertreter)', en: 'Proxy attack (attack through a stand-in)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Kompromat: gesammeltes belastendes Material — echt, selektiv zugeschnitten oder fabriziert —, dessen Veröffentlichung offen oder verdeckt angedroht wird, um eine Zielperson gefügig zu machen oder zu diskreditieren. Als Begriff beschreibt Kompromat genau diese Kopplung aus Besitz und in Aussicht gestellter Enthüllung; dass hier gar kein Foto auftaucht, ist typisch — die glaubhafte Andeutung reicht. Historisch aus post-sowjetischer informeller Politik und Wirtschaft dokumentiert (Ledeneva 2006), als qualitative Fallevidenz und nicht als bezifferter Wirkungsgrad. Schutzhinweis: Nimm die Andeutung ernst, dokumentiere sie nüchtern, entscheide nichts unter dem Druck und binde früh formale Stellen ein; der Ansatzpunkt ist die Drohung, nicht das mögliche Material. Erkennen: Besitzbehauptung, in Aussicht gestellte statt verlangte Veröffentlichung, Timing vor einer Entscheidung. Zersetzung lag nahe, weil auch dort verdeckt Druck aufgebaut wird — sie zermürbt aber über viele unauffällige Kleinvorfälle ohne ein einzelnes Druckmittel, während Kompromat an einem konkreten Material hängt. Proxy Attack wirkte plausibel, weil auch dort verdeckt vorgegangen wird — dort greift jedoch ein vorgeschobener Stellvertreter für einen unsichtbaren Auftraggeber an, während bei Kompromat der Hebel das kompromittierende Material selbst ist.',
      en: 'The term for this is Kompromat: gathered incriminating material — genuine, selectively edited, or fabricated — whose release is threatened openly or by implication in order to make a target compliant or to discredit them. As a term, Kompromat names exactly this coupling of possession and prospective revelation; that no photo actually surfaces here is typical — the credible insinuation is enough. Historically documented from post-Soviet informal politics and business (Ledeneva 2006), as qualitative case evidence and not as a quantified effect size. Protective note: take the insinuation seriously, document it soberly, decide nothing under the pressure, and involve formal channels early; the point of attack is the threat, not the possible material. To spot it: a claim of possession, release held out rather than demanded, timing before a decision. Zersetzung was close because pressure is also built up covertly there — but it wears a target down through many unremarkable small incidents with no single lever, whereas Kompromat hinges on one concrete item of material. Proxy attack seemed plausible because it too proceeds covertly — but there a front stand-in attacks on behalf of an invisible principal, whereas with Kompromat the lever is the compromising material itself.',
    },
    points: 10,
    primaryTechniqueId: 'kompromat_leverage',
    relatedTechniques: ['kompromat_leverage', 'black_grey_white_propaganda'],
  },
];
