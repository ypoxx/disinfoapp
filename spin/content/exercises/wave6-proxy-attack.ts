// Welle R6: 3 Übungen für proxy_attack (Proxy-Angriff — Angriff durch Stellvertreter).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung und nie die Täterperspektive. Evidenz-Tier frontier: als
// Begriffswissen gelehrt, keine bezifferten Wirkbehauptungen; mindestens eine
// Übung prüft Begriffswissen ("Wie heißt dieses Muster?").
// relatedTechniques nur mit der Subjekt-ID proxy_attack (von der Hauptsession
// registriert); Distraktoren erscheinen als Options-Label, nicht als ID. Die
// Distraktoren sind verwechselbare Nachbarn aus derselben Familie "verborgene
// Urheberschaft"; die Abgrenzung gelingt strukturell (Delegation einer realen
// Handlung an einen genuin handelnden Dritten), nicht über Oberflächen-Tags.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6ProxyAttack: Exercise[] = [
  {
    id: 'wave6-proxy_attack-1',
    type: 'technique-match',
    difficulty: 'advanced',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Recherche einer Wirtschaftsredaktion: Kurz vor einer Regulierungsentscheidung veröffentlicht ein etabliertes, unter eigenem Namen bekanntes Prüfinstitut ein vernichtendes Gutachten über ein einzelnes Unternehmen und reicht zeitgleich eine förmliche Beschwerde bei der Aufsicht ein. Das Institut existiert wirklich und tritt sichtbar als es selbst auf — verdeckt beauftragt und bezahlt wird es jedoch von einem direkten Wettbewerber, der öffentlich beteuert, mit dem Vorgang nichts zu tun zu haben.',
      en: 'A business desk investigation: shortly before a regulatory decision, an established, well-known testing institute publishes a damning assessment of a single company and, at the same time, files a formal complaint with the regulator. The institute is real and visibly acts as itself — yet it has been covertly commissioned and paid by a direct competitor, who publicly insists it has nothing to do with the matter.',
    },
    options: [
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / Sock Puppets' },
      { de: 'Proxy-Angriff (Angriff durch Stellvertreter)', en: 'Proxy Attack (Attack by Proxy)' },
      { de: 'Schwarze, graue und weiße Propaganda', en: 'Black, Grey and White Propaganda' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and Provenance Deception' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Proxy-Angriff: Ein verdeckter Interessent — hier der Wettbewerber — lässt die feindselige Handlung von einem realen, eigenständig handelnden Dritten (dem Prüfinstitut) ausführen und bleibt selbst verborgen und abstreitbar (plausible deniability). Der Begriff benennt genau diese Delegation eines Angriffs an eine abstreitbare Stellvertretung; die Grundlage ist definitorisch-historisch (von Senger 1991, „mit geliehenem Messer töten"), ein bezifferter Wirkungsgrad folgt daraus nicht. Schutzhinweis: Der Hebel ist die verborgene Urheberschaft, nicht der sichtbare Dritte — schütze das angegriffene Unternehmen, indem du die Sachvorwürfe nüchtern prüfst und getrennt davon Auftrag und Finanzierung des Instituts belegbar offenlegst, statt den sichtbaren Boten zu bekämpfen. Erkennen und kontern: Frag, wem der Angriff nützt, wer den Dritten beauftragt und bezahlt, und ob der Begünstigte sich auffällig auf „unabhängige" Kritik zurückzieht; dokumentiere die Belege für die verdeckte Trägerschaft. Astroturfing lag nahe, meint aber ein Ensemble erfundener, verdeckt kontrollierter Einzelidentitäten, die unabhängigen Bürgerkonsens vortäuschen — hier ist es ein einzelner, realer Akteur, der einen echten Angriff tatsächlich ausführt, keine vorgetäuschte Basisbewegung. Schwarze, graue und weiße Propaganda verschleiert oder fälscht die Quelle einer an ein Publikum gerichteten Botschaft — hier wird keine Botschaft umetikettiert, sondern eine reale Handlung (Gutachten, Beschwerde) an einen genuin handelnden Dritten delegiert. Identitäts- und Herkunftstäuschung würde die Identität oder Herkunft des Akteurs selbst fälschen — das Institut ist aber echt und handelt als es selbst; verborgen ist allein der Auftraggeber, und genau diese Delegation macht es zum Proxy-Angriff.',
      en: 'Proxy attack: a hidden interested party — here the competitor — has the hostile action carried out by a real, independently acting third party (the testing institute) while staying concealed and deniable (plausible deniability). The term names exactly this delegation of an attack to a deniable stand-in; the basis is definitional and historical (von Senger 1991, "killing with a borrowed knife") and does not imply any quantified effect. Protective note: the lever is the hidden authorship, not the visible third party — protect the attacked company by examining the substantive allegations soberly and, separately, working with evidence to establish who commissioned and paid the institute, rather than fighting the visible messenger. To spot and counter it: ask who benefits from the attack, who commissions and pays the third party, and whether the beneficiary conspicuously retreats behind "independent" criticism; document the evidence of the covert sponsorship. Astroturfing was close but means an ensemble of invented, covertly controlled individual identities faking independent citizen consensus — here it is a single, real actor who actually carries out a genuine attack, not a fabricated grassroots movement. Black, grey and white propaganda conceals or falsifies the source of a message aimed at an audience — here no message is relabelled; a real action (an assessment, a complaint) is delegated to a genuinely acting third party. Identity and provenance deception would falsify the actor\'s own identity or origin — but the institute is real and acts as itself; only the client is hidden, and that very delegation is what makes it a proxy attack.',
    },
    points: 10,
    primaryTechniqueId: 'proxy_attack',
    relatedTechniques: ['proxy_attack'],
  },
  {
    id: 'wave6-proxy_attack-2',
    type: 'response-choice',
    difficulty: 'advanced',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du berätst die Kommunikationschefin eines Unternehmens, das seit Wochen von einer scheinbar unabhängigen Verbraucherschutz-Gruppe attackiert wird — mit Beschwerden bei Behörden und zugespielten Vorwürfen an Journalisten. Mehrere Indizien deuten auf einen Wettbewerber als verdeckten Auftraggeber; dieser weist jede Verbindung von sich und verweist auf die „unabhängige Kritik". Die betroffene Kommunikationschefin fragt dich, wie sie vorgehen soll.',
      en: 'You are advising the head of communications of a company that has been under attack for weeks by a seemingly independent consumer watchdog group — with complaints to authorities and allegations leaked to journalists. Several indications point to a competitor as the covert instigator; the competitor denies any link and points to the "independent criticism". The head of communications asks you how to proceed.',
    },
    options: [
      {
        de: 'Ich konzentriere alles auf die Sachebene: Jeden einzelnen Vorwurf lasse ich schnell und belegt widerlegen, damit die Kritik ins Leere läuft. Die Frage, wer hinter der Gruppe steht, lasse ich bewusst außen vor — was uns operativ schadet, ist der Inhalt der Vorwürfe, nicht deren Herkunft.',
        en: 'I focus everything on the substance: I have each individual allegation rebutted quickly and with evidence so the criticism runs dry. I deliberately leave aside the question of who is behind the group — what harms us operationally is the content of the allegations, not their origin.',
      },
      {
        de: 'Ich benenne den Wettbewerber umgehend öffentlich als heimlichen Drahtzieher, noch bevor die Finanzierungsspur gesichert ist — so gehe ich sofort in die Offensive. Der Reputationsdruck auf ihn zwingt die Gruppe in die Defensive und beendet die Kampagne schneller als jede stille Prüfung.',
        en: 'I name the competitor publicly as the secret backer without delay, before the funding trail is secured — that way I go on the offensive at once. The reputational pressure on him forces the group onto the back foot and ends the campaign faster than any quiet investigation.',
      },
      {
        de: 'Ich trenne zwei Ebenen, die der Angriff bewusst vermischt: Die konkreten Vorwürfe lasse ich nüchtern prüfen und dort, wo sie stichhaltig sind, sauber beantworten. Parallel arbeite ich belegbar an der Offenlegung von Auftrag und Finanzierung der Gruppe, denn der eigentliche Hebel ist die verborgene Urheberschaft hinter dem sichtbaren Dritten.',
        en: 'I separate two levels the attack deliberately blends: I have the concrete allegations examined soberly and, where they hold up, answered cleanly. In parallel I work, with evidence, to disclose who commissions and funds the group, because the real lever is the hidden authorship behind the visible third party.',
      },
      {
        de: 'Ich rate zur Zurückhaltung: Jede Reaktion verleiht der Gruppe zusätzliches Gewicht und verlängert die Aufmerksamkeit. Wir reagieren gar nicht, verzichten auf eigene Recherche zur Trägerschaft und warten ab, bis die Kampagne von selbst an Schwung verliert.',
        en: 'I advise restraint: any response gives the group extra weight and prolongs the attention. We do not react at all, forgo our own inquiry into the sponsorship, and wait until the campaign loses momentum on its own.',
      },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Die beste Reaktion trennt zwei Ebenen, die der Proxy-Angriff bewusst vermischt: die Sachvorwürfe des Dritten und die verborgene Urheberschaft dahinter. Mechanismus: Der verdeckte Auftraggeber bleibt abstreitbar, weil die Handlung an eine scheinbar unabhängige Stellvertretung delegiert ist; genau diese Verdeckung ist der Hebel, nicht der sichtbare Bote. Schutzhinweis: Prüfe und beantworte die Vorwürfe sachlich, und arbeite getrennt und belegbar an der Offenlegung von Auftrag und Finanzierung — so schützt du das angegriffene Unternehmen, ohne dich an der Fassade abzuarbeiten. Zur reinen Sachwiderlegung: Nur den Inhalt zu kontern lässt den Mechanismus intakt — die verborgene Trägerschaft, die den Angriff überhaupt glaubwürdig und wiederholbar macht, bleibt unberührt. Zur sofortigen Bloßstellung: Den Wettbewerber ohne gesicherte Belege öffentlich zum Drahtzieher zu erklären, ist rechtlich riskant und spielt der Gegenseite in die Hände, die dann als zu Unrecht Beschuldigte auftreten kann. Zur Zurückhaltung: Eine abstreitbare Kampagne läuft ungehindert weiter, wenn niemand die Trägerfrage stellt; Schweigen schützt die Betroffenen nicht, sondern überlässt Behörden und Medien allein der Version des Dritten.',
      en: 'The best response separates two levels that a proxy attack deliberately blends: the third party\'s substantive allegations and the hidden authorship behind them. Mechanism: the covert instigator stays deniable because the action is delegated to a seemingly independent stand-in; that concealment is the lever, not the visible messenger. Protective note: examine and answer the allegations factually, and separately work, with evidence, to disclose who commissions and funds the group — that protects the attacked company without exhausting yourself on the facade. On rebutting the substance only: countering only the content leaves the mechanism intact — the hidden sponsorship, which makes the attack credible and repeatable in the first place, remains untouched. On the immediate exposure: publicly declaring the competitor the mastermind without secured evidence is legally risky and plays into the other side\'s hands, letting them pose as the wrongly accused. On the restraint option: a deniable campaign runs on unhindered when no one raises the sponsorship question; silence does not protect those affected but leaves authorities and media with only the third party\'s version.',
    },
    points: 10,
    primaryTechniqueId: 'proxy_attack',
    relatedTechniques: ['proxy_attack'],
  },
  {
    id: 'wave6-proxy_attack-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Interne Schulung zu fairen Verfahren, Fallbeispiel: Ein Abteilungsleiter geht eine unbequeme Mitarbeiterin nie selbst an. Über gezielte Andeutungen bringt er zwei ihm ergebene Kollegen dazu, wiederholt formale Beschwerden gegen sie einzureichen. Nach außen wirkt es wie unabhängige Kritik von mehreren Seiten; er selbst bleibt aus der Schusslinie und kann jede Verantwortung von sich weisen.',
      en: 'An internal training session on fair procedures, case example: a department head never confronts an inconvenient team member himself. Through pointed hints he gets two colleagues loyal to him to file formal complaints against her repeatedly. To outsiders it looks like independent criticism from several sides; he himself stays out of the line of fire and can wave off any responsibility.',
    },
    options: [
      { de: 'Astroturfing / Sockpuppets', en: 'Astroturfing / Sock Puppets' },
      { de: 'Identitäts- und Herkunftstäuschung', en: 'Identity and Provenance Deception' },
      { de: 'Proxy-Angriff (Angriff durch Stellvertreter)', en: 'Proxy Attack (Attack by Proxy)' },
      { de: 'Schwarze, graue und weiße Propaganda', en: 'Black, Grey and White Propaganda' },
    ],
    correctAnswers: [2],
    explanation: {
      de: 'Proxy-Angriff: Der Abteilungsleiter delegiert die belastende Handlung an abstreitbare Stellvertreter — die ihm ergebenen Kollegen — und bleibt selbst verborgen und unangreifbar (plausible deniability). Als Begriff benennt der Proxy-Angriff genau diese Delegation eines Angriffs an einen scheinbar unabhängigen Dritten; die Grundlage ist definitorisch-historisch (von Senger 1991), ein bezifferter Wirkungsgrad folgt daraus nicht. Schutzhinweis: In einem fairen Verfahren zählt, wer die Beschwerden veranlasst, nicht nur, wer sie einreicht — prüfe Herkunft, Timing und Interessenlage der scheinbar unabhängigen Kritik, schütze die Betroffene vor der verschleierten Kampagne und dokumentiere die Hinweise auf den verdeckten Urheber. Astroturfing lag nahe, weil der Eindruck „Kritik von mehreren Seiten" nach vorgetäuschtem Basiskonsens aussieht — es meint aber ein Ensemble erfundener, verdeckt kontrollierter Einzelidentitäten; hier handeln zwei reale Kollegen, und das Kennzeichen ist die abstreitbare Delegation, nicht die vorgetäuschte Menge. Identitäts- und Herkunftstäuschung würde die Identität der Kritiker selbst fälschen — die Kollegen sind aber echt und reichen tatsächlich ein; verborgen ist nur, dass ein Urheber sie lenkt. Schwarze, graue und weiße Propaganda verschleiert die Quelle einer an ein Publikum gerichteten Botschaft; hier geht es nicht um umetikettierte Botschaften, sondern um eine an genuin handelnde Stellvertreter delegierte Handlung.',
      en: 'Proxy attack: the department head delegates the damaging action to deniable stand-ins — the loyal colleagues — while staying concealed and unassailable (plausible deniability). As a term, proxy attack names exactly this delegation of an attack to a seemingly independent third party; the basis is definitional and historical (von Senger 1991) and does not imply any quantified effect. Protective note: in a fair procedure what matters is who prompts the complaints, not only who files them — check the origin, timing and interests behind the seemingly independent criticism, protect the affected person from the disguised campaign, and document the indications pointing to the covert instigator. Astroturfing was close because the impression of "criticism from several sides" looks like faked grassroots consensus — but it means an ensemble of invented, covertly controlled individual identities; here two real colleagues act, and the hallmark is the deniable delegation, not a fabricated crowd. Identity and provenance deception would falsify the critics\' own identity — but the colleagues are real and genuinely file the complaints; what is hidden is only that an instigator directs them. Black, grey and white propaganda conceals the source of a message aimed at an audience; here it is not about relabelled messaging but about an action delegated to genuinely acting stand-ins.',
    },
    points: 10,
    primaryTechniqueId: 'proxy_attack',
    relatedTechniques: ['proxy_attack'],
  },
];
