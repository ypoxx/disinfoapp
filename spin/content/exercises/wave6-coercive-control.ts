// Welle R6: 3 Übungen für coercive_control (Coercive Control / Zwang und Kontrolle).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Serious-Mode (Zwang & Kontrolle): nüchterner Ton, keine spielerischen
// Elemente; Übungen prüfen NUR Erkennen und Schutz der Betroffenen, nie die
// Anwendung und nie die Täterperspektive. Evidenz-Tier weak: keine
// quantifizierten Wirkbehauptungen, Fokus auf Muster erkennen und schützen.
// relatedTechniques nur mit in content/techniques/index.ts registrierten IDs
// (plus der Subjekt-ID coercive_control, die von der Hauptsession registriert
// wird); Distraktoren erscheinen als Options-Label, nicht als ID.
// Registrierung in index.ts erfolgt durch die Hauptsession (hier NICHT registriert).

import type { Exercise } from '../types';

export const wave6CoerciveControl: Exercise[] = [
  {
    id: 'wave6-coercive_control-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster erkennst du hier?',
      en: 'Which pattern do you recognize here?',
    },
    scenario: {
      de: 'Beratungsgespräch in einer betrieblichen Sozialberatung: Eine Mitarbeiterin schildert, ihr Partner gebe ihr vor, welche Kolleg:innen sie treffen dürfe, lese Konto und Nachrichten mit, verlange nach jedem Feierabend Rechenschaft über jede Minute und reagiere auf Abweichung mit tagelangem Schweigen. Einzeln, sagt sie, wirke nichts davon dramatisch — zusammen habe sie seit Monaten kaum noch eigenen Spielraum.',
      en: 'A session at an in-house employee assistance service: a staff member describes how her partner dictates which colleagues she may meet, monitors her bank account and reads her messages, demands an account of every minute after work, and responds to any deviation with days of silence. Individually, she says, none of it looks dramatic — together it has left her with almost no room of her own for months.',
    },
    options: [
      { de: 'Coercive Control (Zwang und Kontrolle)', en: 'Coercive Control' },
      { de: 'Gaslighting (das Realitätsempfinden gezielt untergraben)', en: 'Gaslighting (deliberately undermining someone\'s sense of reality)' },
      { de: 'Zersetzung (verdeckt orchestrierte Zermürbungskampagne)', en: 'Zersetzung (a covertly orchestrated attrition campaign)' },
      { de: 'Stalking (aufdringliche Überwachung und Nachstellung)', en: 'Stalking (intrusive surveillance and pursuit)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Coercive Control: Der Kern ist nicht ein einzelner Übergriff, sondern ein anhaltendes Regime — ein Geflecht aus Regeln (welche Kontakte, welche Uhrzeiten), lückenloser Überwachung (Konto, Nachrichten) und Sanktionen bei Abweichung, das die Autonomie der Betroffenen Stück für Stück auflöst. Genau das macht das Muster erkennbar: Jede Episode wirkt „für sich harmlos", die Summe schnürt den Handlungsspielraum zu. Schutzhinweis: Der Hebel ist Isolation und Kontrolle — halte den Kontakt der Betroffenen nach außen aktiv, verweise früh auf spezialisierte Hilfe (Fachberatungsstelle, Hilfetelefon Gewalt gegen Frauen) und unterstütze eine Sicherheits- und Beweissicherung außerhalb der Reichweite der kontrollierenden Person; dränge nicht zu vorschnellen Schritten, denn Zuspitzungen bergen für Betroffene das höchste Risiko. Erkennen: Achte auf das dichte Alltagsregelwerk, die als „Fürsorge" gerahmte Überwachung und die fortschreitende Abschneidung von Freundinnen, Familie und Kolleg:innen. Gaslighting lag nahe, weil auch hier Druck ausgeübt wird — dort geht es aber gezielt darum, das Realitätsempfinden zu untergraben („du bildest dir das ein"); hier bleibt die Betroffene bei klarem Blick, ihr wird der Spielraum genommen, nicht die Erinnerung. Zersetzung wirkte plausibel, weil auch sie zermürbt — sie ist aber eine verdeckt orchestrierte Kampagne aus vielen, oft institutionellen Einzelmaßnahmen, während hier eine Person im direkten Nahverhältnis ein offenes Kontrollregime führt. Stalking lag nahe, weil auch hier lückenlos überwacht wird — Stalking meint aber das wiederholte, aufdringliche Nachstellen und Beobachten einer Zielperson, oft aus Distanz oder nach einer Trennung; hier steht die Überwachung im Dienst eines umfassenden Kontrollregimes im laufenden Nahverhältnis, das mit Regeln, Sanktionen und Isolation weit über bloßes Beobachten hinausgeht.',
      en: 'Coercive Control: the core is not a single assault but a sustained regime — a web of rules (which contacts, which hours), constant surveillance (account, messages), and sanctions for deviation that dissolves the affected person\'s autonomy step by step. That is exactly what makes the pattern recognizable: each episode looks "harmless on its own", but the sum closes off her room to act. Protective note: the lever is isolation and control — keep the affected person\'s outward contacts active, point early to specialized help (a domestic-violence advice centre or helpline), and support securing safety and evidence beyond the controlling person\'s reach; do not push for hasty steps, since escalation carries the highest risk for those affected. To spot it: watch for the dense everyday rulebook, the surveillance framed as "care", and the progressive cutting-off from friends, family, and colleagues. Gaslighting was close because pressure is applied here too — but there the aim is to undermine the sense of reality ("you\'re imagining it"); here the affected person sees clearly, it is her room to act that is taken, not her memory. Zersetzung seemed plausible because it also wears a person down — but it is a covertly orchestrated campaign of many, often institutional measures, whereas here one person in a close relationship runs an overt regime of control. Stalking was close because there is constant surveillance here too — but stalking means the repeated, intrusive pursuit and watching of a target, often from a distance or after a separation; here the surveillance serves a comprehensive regime of control within an ongoing close relationship that, with its rules, sanctions, and isolation, goes far beyond mere watching.',
    },
    points: 10,
    primaryTechniqueId: 'coercive_control',
    relatedTechniques: ['coercive_control'],
  },
  {
    id: 'wave6-coercive_control-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Du berätst in einer Fachstelle: Eine Ratsuchende erzählt, ihr Mann kontrolliere seit Monaten ihre Ausgaben, ihre Wege per Standortfreigabe und ihre Kontakte, verlange nach jedem Termin Rechenschaft und mache ihr bei „Ungehorsam" das Leben schwer. Sie ist erschöpft, zweifelt, ob das „schlimm genug" ist, um etwas zu sagen, und hat Angst, dass eine Konfrontation die Lage verschärft.',
      en: 'You are advising at a specialist support service: a woman seeking help says her husband has for months controlled her spending, her movements via location sharing, and her contacts, demands an account after every appointment, and makes life hard for her whenever she is "disobedient". She is exhausted, unsure whether it is "bad enough" to say anything, and afraid that a confrontation would make things worse.',
    },
    options: [
      {
        de: 'Ich bestätige ihre Wahrnehmung und benenne das Muster als Zwang und Kontrolle: Es zählt das anhaltende Regime, nicht der einzelne Vorfall. Wir besprechen einen Sicherheitsplan, sichern Belege außerhalb seiner Reichweite, halten ihr Netz zu Freundinnen und Familie aktiv und binden auf ihren Wunsch spezialisierte Stellen (Hilfetelefon, Frauenberatung) ein — in ihrem Tempo, ohne sie zu drängen.',
        en: 'I validate her perception and name the pattern as coercive control: what counts is the sustained regime, not the single incident. We talk through a safety plan, secure evidence beyond his reach, keep her network of friends and family active, and — if she wants — bring in specialist services (a helpline, women\'s counselling) at her pace, without pushing her.',
      },
      {
        de: 'Ich rate ihr, ihn noch heute zur Rede zu stellen und ihm klar zu sagen, dass sie sein Verhalten als Kontrolle durchschaut hat — je direkter die Konfrontation, desto schneller sei das Thema geklärt.',
        en: 'I advise her to confront him this very day and tell him plainly that she has seen through his behaviour as control — the more direct the confrontation, the sooner the matter is settled.',
      },
      {
        de: 'Ich sage ihr, solange keine Gewalt im Spiel ist, sei das wohl eher ein Beziehungskonflikt über Eifersucht; sie solle abwarten, ob es sich von selbst legt.',
        en: 'I tell her that as long as there is no violence, this is probably more of a relationship conflict about jealousy; she should wait and see whether it settles on its own.',
      },
      {
        de: 'Ich empfehle ihr, sofort und heimlich auszuziehen — je schneller sie den gemeinsamen Haushalt verlässt, desto eher ist sie aus seiner Reichweite.',
        en: 'I recommend she move out at once and in secret — the sooner she leaves the shared household, the sooner she is out of his reach.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Deine beste Reaktion tut zweierlei zugleich: Du bestätigst die Wahrnehmung der Betroffenen — Zwang und Kontrolle zielt darauf, dass sie das Muster verharmlost und sich isoliert fühlt — und du schützt konkret: Sicherheitsplanung, Beweissicherung außerhalb seiner Reichweite, ein intaktes eigenes Netz und der Zugang zu spezialisierter Hilfe, alles im Tempo der Betroffenen. Schutzhinweis: Bei Coercive Control ist der Schaden das Regime als Ganzes, nicht der einzelne Vorfall; „schlimm genug" ist es, sobald Autonomie systematisch beschnitten wird. Erkennen: Achte auf anhaltende Regeln, auf Überwachung als „Fürsorge", auf Sanktionen bei Abweichung und auf wachsende Isolation. Zur Konfrontations-Option: Der Impuls ist verständlich, aber wenn du zur direkten Konfrontation rätst, kannst du die Lage zuspitzen — für Betroffene ist gerade die Phase des Widerstands oder Verlassens die gefährlichste; Schutz gelingt über Planung und Unterstützung, nicht über einen Schlagabtausch. Zur Verharmlosungs-Option: „Nur Eifersucht, keine Gewalt" übersieht, dass Kontrolle auch ohne körperliche Gewalt gravierend und in manchen Rechtsordnungen strafbar ist — wenn du wegsiehst, lässt du die Betroffene allein. Zur Sofort-Ausziehen-Option: Sie klingt entschlossen, überspringt aber Sicherheit, Situation und den Willen der Betroffenen; ein überstürzter, heimlicher Bruch ohne Plan kann das Risiko erhöhen statt senken.',
      en: 'Your best response does two things at once: you validate the affected person\'s perception — coercive control is designed to make her minimize the pattern and feel isolated — and you protect her concretely: safety planning, securing evidence beyond his reach, an intact personal network, and access to specialist help, all at her pace. Protective note: with coercive control the harm is the regime as a whole, not the single incident; it is "bad enough" the moment autonomy is systematically curtailed. To spot it: watch for sustained rules, surveillance framed as "care", sanctions for deviation, and growing isolation. On the confrontation option: the impulse is understandable, but if you advise a direct confrontation you can escalate things — for those affected, the phase of resistance or leaving is precisely the most dangerous; protection works through planning and support, not a showdown. On the minimizing option: "just jealousy, no violence" overlooks that control without physical violence can be serious and, in some jurisdictions, a criminal offence — if you look away, you leave her alone. On the move-out-at-once option: it sounds decisive but skips over her safety, her situation, and her own wishes; a rushed, secret break without a plan can raise the risk rather than lower it.',
    },
    points: 10,
    primaryTechniqueId: 'coercive_control',
    relatedTechniques: ['coercive_control'],
  },
  {
    id: 'wave6-coercive_control-3',
    type: 'quick-check',
    difficulty: 'intermediate',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Fallbesprechung in einer Fortbildung für Hausärzt:innen: Ein Patient berichtet über seine Frau, sie kontrolliere seit über einem Jahr sein Konto, gebe ihm feste Zeiten und Wege vor, verlange nach jedem Kontakt zu Freunden eine Erklärung und entziehe ihm bei Widerspruch Auto- und Wohnungsschlüssel. Jede Regel wirke einzeln nachvollziehbar; zusammen habe er kaum noch eine freie Entscheidung.',
      en: 'A case discussion in a training for family doctors: a patient reports that for over a year his wife has controlled his bank account, set fixed times and routes for him, demanded an explanation after every contact with friends, and withheld the car and house keys whenever he objects. Each rule seems reasonable on its own; together he has almost no freedom of choice left.',
    },
    options: [
      { de: 'Coercive Control (Zwang und Kontrolle)', en: 'Coercive Control' },
      { de: 'Gaslighting (das Realitätsempfinden gezielt untergraben)', en: 'Gaslighting (deliberately undermining the sense of reality)' },
      { de: 'Ökonomische Gewalt (finanzielle Kontrolle über die betroffene Person)', en: 'Economic abuse (financial control over the affected person)' },
      { de: 'Stalking (aufdringliche Überwachung und Nachstellung)', en: 'Stalking (intrusive surveillance and pursuit)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Begriff dafür ist Coercive Control (Zwang und Kontrolle): ein anhaltendes Regime, in dem eine Person die Autonomie einer anderen über Regeln, Überwachung, Isolation und Sanktionen beschneidet. Als Begriff beschreibt Coercive Control genau diese Verschiebung vom Einzelvorfall zum dauerhaften Kontrollmuster — klinisch beschrieben und in mehreren Rechtsordnungen als Straftatbestand verankert, ohne dass daraus ein bezifferter Wirkungsgrad folgt. Das Beispiel zeigt zudem, dass Betroffene jeden Geschlechts sein können. Schutzhinweis: Nimm das Muster ernst, auch wenn jede Regel „für sich" plausibel klingt; halte den Kontakt nach außen aktiv und verweise auf spezialisierte Beratung — Isolation ist der eigentliche Hebel. Erkennen: dichtes Alltagsregelwerk, Überwachung als „Fürsorge", Sanktionen (hier: Schlüsselentzug) bei Widerspruch. Gaslighting lag nahe, weil auch hier eine Person massiv Einfluss nimmt — dort zielt der Druck aber darauf, dem Gegenüber die eigene Wahrnehmung auszureden; hier zweifelt der Patient nicht an der Realität, er beschreibt die Regeln genau, allein sein Entscheidungsspielraum ist verschwunden. Ökonomische Gewalt wirkte plausibel, weil die Kontrolle über Konto und Schlüssel im Vordergrund steht — sie ist aber nur ein Ausschnitt: Coercive Control umfasst darüber hinaus Zeit- und Wegevorgaben, Rechenschaftspflicht und Isolation, also das ganze Regelregime und nicht nur den finanziellen Hebel. Stalking wirkte plausibel, weil das Kontrollieren des Kontos und das Vorgeben der Wege nach Beobachtung aussehen — doch Stalking beschreibt das aufdringliche Verfolgen meist aus der Distanz oder nach einer Trennung, also von außen; hier lebt die kontrollierende Person mit dem Betroffenen zusammen und steuert ihn von innen über ein dichtes Regelwerk, nicht bloß über Beobachtung.',
      en: 'The term for this is coercive control: a sustained regime in which one person curtails another\'s autonomy through rules, surveillance, isolation, and sanctions. As a term, coercive control names exactly this shift from the single incident to an ongoing pattern of control — clinically described and enshrined as a criminal offence in several jurisdictions, without that implying any quantified effect size. The example also shows that those affected can be of any gender. Protective note: take the pattern seriously even when each rule sounds plausible "on its own"; keep outward contact active and point to specialist counselling — isolation is the real lever. To spot it: a dense everyday rulebook, surveillance framed as "care", sanctions (here: withholding keys) for objecting. Gaslighting was close because one person exerts massive influence here too — but there the pressure aims to talk someone out of their own perception; here the patient does not doubt reality, he describes the rules precisely, and only his room to decide has disappeared. Economic abuse seemed plausible because the control over account and keys stands out — but it is only one facet: coercive control also covers the rules on times and routes, the duty to account, and isolation, that is the whole regime of rules and not just the financial lever. Stalking seemed plausible because controlling the account and dictating the routes looks like watching — but stalking describes intrusive pursuit mostly from a distance or after a separation, that is, from the outside; here the controlling person lives with him and steers him from within through a dense set of rules, not merely by watching.',
    },
    points: 10,
    primaryTechniqueId: 'coercive_control',
    relatedTechniques: ['coercive_control'],
  },
];
