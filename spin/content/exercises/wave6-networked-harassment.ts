// Welle R6: 3 Übungen für networked_harassment (Koordinierte Online-Belästigung).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung und nie die Täterperspektive. Evidenz-Tier weak: keine
// quantifizierten Wirkbehauptungen, Fokus auf Muster erkennen und schützen.
// relatedTechniques nur mit der Subjekt-ID networked_harassment (von der
// Hauptsession registriert); Distraktoren erscheinen als Options-Label, nicht
// als ID. Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT
// registriert).

import type { Exercise } from '../types';

export const wave6NetworkedHarassment: Exercise[] = [
  {
    id: 'wave6-networked_harassment-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Vertrauliche Fallbesprechung im Comms-Team: Ein Speaker mit sechsstelliger Followerzahl hat nach einer Fachtagung den Screenshot einer nüchternen Wortmeldung eurer Nachwuchs-Kommunikatorin gepostet, sie namentlich markiert und als „Verrat an den Werten der Branche" gerahmt. Innerhalb weniger Stunden überziehen Hunderte seiner Follower — sichtbar echte, empörte Accounts — ihr Profil eigenständig mit Beschimpfungen, Rücktrittsforderungen und Nachrichten an euren Arbeitgeber. Der Speaker selbst schreibt nur: „Ich habe lediglich darauf hingewiesen."',
      en: 'A confidential case review in the comms team: a speaker with a six-figure following posted, after an industry conference, a screenshot of your junior communicator\'s measured remark, tagged her by name, and framed it as a "betrayal of the profession\'s values". Within hours hundreds of his followers — visibly real, outraged accounts — flood her profile of their own accord with abuse, calls to resign, and messages to your employer. The speaker himself only writes: "I merely pointed it out."',
    },
    options: [
      { de: 'Networked Harassment (koordinierte Online-Belästigung durch viele echte Akteure)', en: 'Networked harassment (coordinated online harassment by many real actors)' },
      { de: 'Proxy Attack (Angriff durch einen vorgeschobenen Stellvertreter)', en: 'Proxy attack (an attack carried out through a single planted proxy)' },
      { de: 'Coordinated Inauthentic Amplification (Verstärkung durch Fake- und Sockenpuppen-Accounts)', en: 'Coordinated inauthentic amplification (boosting via fake and sock-puppet accounts)' },
      { de: 'Scapegoating / Othering (eine Gruppe zum bedrohlichen Sündenbock erklären)', en: 'Scapegoating / othering (casting a group as a threatening scapegoat)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Networked Harassment: Der Mechanismus ist die moralisch gerahmte Weitergabe von Zielkoordinaten an ein großes Publikum — ein reichweitenstarker Knoten markiert einen (angeblichen) Normverstoß, und die Anhängerschaft bestraft die Zielperson aus eigenem Antrieb mit einer Welle von Angriffen. Erkennbar wird es an der Kombination: namentliche Markierung plus Empörungsrahmen, ein Schwarm vieler eigenständiger echter Accounts kurz nach dem Signal, und ein Auslöser, der deniabel bleibt („nur hingewiesen"). Schutzhinweis: Behandle es als das, was es ist — nicht als persönliches Versagen der Betroffenen. Drossle die Reichweite (Kommentare/Mentions moderieren oder stummschalten), dokumentiere die Welle für Meldewege und mögliche rechtliche Schritte, organisiere internen Rückhalt und dränge die Betroffene nicht, sich in die Empörungswelle hinein zu rechtfertigen oder ihren Account aus Panik zu löschen. Proxy Attack lag nahe, weil auch dort jemand die Ausführung des Angriffs auslagert — dort ist es aber ein einzelner vorgeschobener Stellvertreter, dessen Fäden verdeckt bleiben, während hier ein offen sichtbarer Aufruf einen ganzen Schwarm eigenständig handelnder Menschen auslöst. Coordinated Inauthentic Amplification passt nicht: Deren Kern sind Fake- und Sockenpuppen-Accounts — hier sind es echte, real empörte Menschen. Scapegoating konstruiert eine ganze Gruppe als Sündenbock; hier zielt der Schwarm auf eine einzelne, benannte Person, um sie zum Schweigen zu bringen.',
      en: 'Networked harassment: the mechanism is the morally framed handing-over of a target\'s coordinates to a large audience — a high-reach node flags an alleged norm violation and the following punishes the target of its own accord with a wave of attacks. You recognize it by the combination: naming and tagging plus an outrage frame, a swarm of many independent real accounts shortly after the signal, and an instigator who stays deniable ("only pointed it out"). Protective note: treat it as what it is — not as the target\'s personal failure. Throttle reach (moderate or mute comments/mentions), document the wave for reporting channels and possible legal steps, organize internal support, and do not push the target to justify herself into the outrage or to delete her account in panic. Proxy attack was close because there, too, someone outsources the execution of the attack — but there it is a single planted proxy whose strings stay hidden, whereas here an openly visible call sets off a whole swarm of people acting on their own. Coordinated inauthentic amplification does not fit: its core is fake and sock-puppet accounts — here they are real, genuinely outraged people. Scapegoating constructs a whole group as the scapegoat; here the swarm targets one named individual to silence her.',
    },
    points: 10,
    primaryTechniqueId: 'networked_harassment',
    relatedTechniques: ['networked_harassment'],
  },
  {
    id: 'wave6-networked_harassment-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du leitest die Unternehmenskommunikation. Ein Teammitglied ist seit dem Vormittag Ziel eines Pile-ons: Ein reichweitenstarker Account hat ihren Beitrag als Normbruch markiert, seither treffen im Minutentakt Beschimpfungen, Meldungen und Nachrichten an eure Adresse ein. Sie ist erschöpft und will „einfach alles löschen, damit Ruhe ist". Was tust du?',
      en: 'You lead corporate communications. Since this morning a team member has been the target of a pile-on: a high-reach account flagged her post as a norm violation, and abuse, mass-reports, and messages to your address have been arriving by the minute. She is exhausted and wants to "just delete everything so it stops". What do you do?',
    },
    options: [
      {
        de: 'Ich benenne das Muster als koordinierte Belästigung, nicht als ihr Versagen, und wir schützen konkret: Reichweite drosseln (Mentions/Kommentare moderieren oder stummschalten), die Welle für Meldewege und mögliche rechtliche Schritte dokumentieren, internen Rückhalt und eine abgestimmte Linie organisieren — und wir entscheiden über Löschen oder Schweigen bewusst, nicht aus Panik.',
        en: 'I name the pattern as coordinated harassment, not her failure, and we protect concretely: throttle reach (moderate or mute mentions/comments), document the wave for reporting channels and possible legal steps, organize internal support and an agreed line — and we decide about deleting or staying silent deliberately, not out of panic.',
      },
      {
        de: 'Ich mobilisiere sofort unsere eigene Community und prangere den Auslöser namentlich an, damit unsere Follower zurückschlagen und der Druck sich gegen ihn umkehrt.',
        en: 'I immediately mobilize our own community and call out the instigator by name so our followers hit back and the pressure turns against him.',
      },
      {
        de: 'Ich rate ihr, sich öffentlich zu entschuldigen und den Beitrag zu löschen; wenn sie einlenkt, verliert die Empörung ihren Anlass und die Sache ist schnell vorbei.',
        en: 'I advise her to apologize publicly and delete the post; if she gives in, the outrage loses its trigger and the matter is over quickly.',
      },
      {
        de: 'Ich sage ihr, das seien nur ein paar Trolle; am besten ignoriert sie es, dokumentiert nichts und wartet ab, bis sich die Aufmerksamkeit von selbst verläuft.',
        en: 'I tell her these are just a few trolls; better to ignore it, document nothing, and wait until the attention dies down on its own.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die beste Reaktion tut zweierlei zugleich: Sie ordnet den Vorfall richtig ein — koordinierte Belästigung zielt darauf, die Betroffene zu isolieren und ihr das Gefühl persönlichen Versagens zu geben — und sie schützt konkret: Reichweite drosseln, Beweise sichern, interner Rückhalt, und bewusste statt panische Entscheidungen. Schutzhinweis: Der Hebel ist Einschüchterung durch Masse; du entziehst ihm die Wirkung, indem du die Betroffene entlastest, statt sie in die Empörungswelle hinein zu schicken. Erkennen: namentliche Markierung durch einen reichweitenstarken Knoten, moralischer Rahmen, ein Schwarm eigenständiger echter Accounts, deniabler Auslöser. Zur Gegenschwarm-Option: Der Impuls ist verständlich, aber eine eigene Mobilisierung eskaliert nur, spiegelt genau die Technik und macht euch selbst zum Täter — Schutz ist keine Vergeltung. Zur Entschuldigungs-Option: Eine erzwungene Entschuldigung unter Druck belohnt den Pile-on, signalisiert Wirksamkeit und lädt zur Wiederholung ein; ob überhaupt etwas richtigzustellen ist, entscheidet man in Ruhe, nicht im Feuer. Zur Ignorieren-Option: „Nur ein paar Trolle" unterschätzt die koordinierte Dynamik und lässt die Betroffene allein; ohne Dokumentation fehlen später die Belege für Meldewege und rechtliche Schritte.',
      en: 'The best response does two things at once: it frames the incident correctly — coordinated harassment is designed to isolate the target and make her feel she has personally failed — and it protects concretely: throttle reach, secure evidence, internal support, and deliberate rather than panicked decisions. Protective note: the lever is intimidation through sheer numbers; you drain its effect by taking the pressure off the target rather than sending her into the outrage. To spot it: naming by a high-reach node, a moral frame, a swarm of independent real accounts, a deniable instigator. On the counter-swarm option: the impulse is understandable, but mobilizing your own side only escalates, mirrors the very technique, and makes you the aggressor — protection is not retaliation. On the apology option: a forced apology under pressure rewards the pile-on, signals that it works, and invites repetition; whether anything needs correcting is decided calmly, not under fire. On the ignore option: "just a few trolls" underestimates the coordinated dynamic and leaves the target alone; without documentation you later lack the evidence for reporting channels and legal steps.',
    },
    points: 10,
    primaryTechniqueId: 'networked_harassment',
    relatedTechniques: ['networked_harassment'],
  },
  {
    id: 'wave6-networked_harassment-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Medien-Monitoring für einen Kunden: Eine reichweitenstarke Kolumnistin zitiert den Post eines Fachverbandssprechers, markiert ihn namentlich und schreibt, so jemand gehöre „an den Pranger". Kurz darauf kommentieren Dutzende ihrer echten Leser:innen aus eigenem Antrieb abwertend unter seinen Beiträgen, schreiben seine Kontakte an und melden sein Profil massenhaft — bis er seine Kanäle stummschaltet. Die Kolumnistin selbst greift nicht weiter ein.',
      en: 'Media monitoring for a client: a high-reach columnist quotes a trade-association spokesperson\'s post, tags him by name, and writes that someone like that belongs "in the stocks". Shortly after, dozens of her real readers comment disparagingly under his posts of their own accord, message his contacts, and mass-report his profile — until he mutes his channels. The columnist herself does not step in further.',
    },
    options: [
      { de: 'Networked Harassment (koordinierte Online-Belästigung durch viele echte Akteure)', en: 'Networked harassment (coordinated online harassment by many real actors)' },
      { de: 'Astroturfing / Sockenpuppen (vorgetäuschte Basisbewegung aus Fake-Accounts)', en: 'Astroturfing / sock puppets (a faked grassroots movement of bogus accounts)' },
      { de: 'Proxy Attack (Angriff durch einen vorgeschobenen Stellvertreter)', en: 'Proxy attack (an attack through a single planted proxy)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Networked Harassment (koordinierte Online-Belästigung): Ein reichweitenstarker Knoten markiert einen (angeblichen) Normverstoß, und das eigene Publikum bestraft die Zielperson aus eigenem Antrieb mit einer Welle von Angriffen. Als Begriff beschreibt Networked Harassment genau diese Konstellation aus moralischem Signal, autonomem Schwarm und deniablem Auslöser — konzeptuell beschrieben (Marwick 2021), ohne dass daraus ein bezifferter Wirkungsgrad folgt. Schutzhinweis: Nimm das Muster ernst, ordne es als koordinierte Belästigung ein statt als Einzelmeinung, drossle die Reichweite und dokumentiere die Welle für Meldewege — Isolation und Masse sind der Hebel. Erkennen: namentliche Markierung, Empörungsrahmen, viele eigenständige echte Accounts kurz nach dem Signal. Astroturfing lag nahe, weil auch dort ein Schwarm auftritt — dessen Kern sind aber gefälschte, ferngesteuerte Accounts, die Authentizität nur simulieren, während hier real empörte Menschen handeln. Proxy Attack wirkte plausibel, weil auch dort jemand andere vorschickt — gemeint ist aber ein einzelner verdeckter Stellvertreter, nicht ein offen ausgelöster, breiter Schwarm.',
      en: 'The term for this is networked harassment: a high-reach node flags an alleged norm violation, and its own audience punishes the target of its own accord with a wave of attacks. As a term, networked harassment names exactly this constellation of a moral signal, an autonomous swarm, and a deniable instigator — described conceptually (Marwick 2021), without that implying any quantified effect size. Protective note: take the pattern seriously, classify it as coordinated harassment rather than a single opinion, throttle reach, and document the wave for reporting channels — isolation and sheer numbers are the lever. To spot it: naming and tagging, an outrage frame, many independent real accounts shortly after the signal. Astroturfing was close because a swarm appears there too — but its core is fabricated, remote-controlled accounts that only simulate authenticity, whereas here genuinely outraged people act. Proxy attack seemed plausible because someone sends others in there as well — but that means a single covert proxy, not an openly triggered, broad swarm.',
    },
    points: 10,
    primaryTechniqueId: 'networked_harassment',
    relatedTechniques: ['networked_harassment'],
  },
];
