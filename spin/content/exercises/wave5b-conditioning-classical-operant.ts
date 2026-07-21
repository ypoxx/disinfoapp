// Welle 5b: 3 Übungen für conditioning_classical_operant (Konditionierung, klassisch/operant).
// Redaktionell erstellt nach Sprachcharta (docs/sprachcharta.md).
// Registrierung in index.ts erfolgt durch die Hauptsession.

import type { Exercise } from '../types';

export const wave5bConditioningClassicalOperant: Exercise[] = [
  {
    id: 'wave5b-conditioning_classical_operant-1',
    type: 'technique-match',
    difficulty: 'intermediate',
    question: {
      de: 'Welches Muster setzt die Marke hier ein?',
      en: 'Which pattern is the brand using here?',
    },
    scenario: {
      de: 'B2B-Markenkampagne eines Automobilzulieferers, Steuerung durch die Brand-Managerin: Jede Anzeige, jedes Messe-Panel und jeder Newsletter koppelt das Logo über Monate mit denselben Bildern souveräner Ingenieurinnen und einem ruhigen Klangsignet — ein Produktvorteil wird bewusst nie genannt. Auf der Messe berichten Einkäufer, das Klangsignet am Stand löse schon ein Gefühl von Verlässlichkeit aus, bevor ein Wort gefallen ist.',
      en: 'A car-parts supplier\'s B2B brand campaign, run by the brand manager: every ad, trade-fair panel, and newsletter pairs the logo, month after month, with the same imagery of assured engineers and a calm audio signature — a product benefit is deliberately never mentioned. At the fair, buyers report that the audio signature at the booth already triggers a sense of reliability before a single word is spoken.',
    },
    options: [
      { de: 'Priming', en: 'Priming' },
      { de: 'Konditionierung (klassisch/operant)', en: 'Conditioning (classical/operant)' },
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
      { de: 'Liking / Sympathie', en: 'Liking' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Konditionierung (klassisch/operant): Hier baut die Marke über viele Wiederholungen eine neue Verknüpfung auf — das anfangs bedeutungsleere Klangsignet wird konsequent mit Bildern von Verlässlichkeit gekoppelt, bis der Ton allein das Gefühl auslöst. Das ist evaluative (klassische) Konditionierung im Lehrbuchsinne: nicht das Argument überzeugt, sondern die wiederholte Paarung. Legitim einsetzen: Ein konsistentes Marken-Signet, das ehrlich für die tatsächliche Leistung steht, ist saubere Markenführung — problematisch wird es, wenn die erzeugte Emotion an die Stelle eines fehlenden Sachversprechens tritt. Erkennen und kontern: Frag dich, ob dich ein Reiz überzeugt, den du nicht begründen kannst — trenn im Beschaffungsprozess das Gefühl („wirkt verlässlich“) bewusst vom Beleg (Prüfdaten, Referenzen) und triff die Entscheidung am Beleg. Priming wirkt plausibel, weil auch dort ein Reiz eine Assoziation aktiviert — Priming zündet aber eine bereits vorhandene Verknüpfung kurzfristig an; hier wird die Verknüpfung erst über Monate wiederholter Kopplung aufgebaut. Gamification / Variable Belohnungen liegt nahe, weil beides zum operanten Repertoire zählt — dieses Muster braucht aber eine Belohnung in unregelmäßigem Takt; hier fällt keine Belohnung, es wird ein Reiz mit einem Gefühl gepaart. Liking / Sympathie ist plausibel, weil sympathische Bilder im Spiel sind — Liking überträgt die Zuneigung zu einer bereits gemochten Quelle im Moment, während Konditionierung das gute Gefühl erst durch die stetige Wiederholung an ein neutrales Zeichen heftet.',
      en: 'Conditioning (classical/operant): across many repetitions the brand is building a new link — the initially meaningless audio signature is consistently paired with imagery of reliability until the sound alone triggers the feeling. This is textbook evaluative (classical) conditioning: it is not the argument that persuades but the repeated pairing. Used legitimately: a consistent brand signature that honestly stands for real performance is sound brand management — it turns problematic when the manufactured emotion stands in for a missing substantive promise. To spot and counter it: ask yourself whether a cue is persuading you that you cannot justify — in a procurement process, deliberately separate the feeling ("feels reliable") from the evidence (test data, references) and decide on the evidence. Priming looks plausible because there too a cue activates an association — but priming briefly ignites a link that already exists; here the link is built up over months of repeated pairing. Gamification / variable reward schedules suggests itself because both belong to the operant repertoire — but that pattern needs a reward on an irregular schedule; here no reward drops, a cue is paired with a feeling. Liking is plausible because likeable imagery is in play — but liking transfers affection for an already-liked source in the moment, whereas conditioning attaches the good feeling to a neutral sign only through steady repetition.',
    },
    points: 10,
    primaryTechniqueId: 'conditioning_classical_operant',
    relatedTechniques: ['conditioning_classical_operant', 'priming', 'gamification_variable_reward', 'liking'],
  },
  {
    id: 'wave5b-conditioning_classical_operant-2',
    type: 'response-choice',
    difficulty: 'intermediate',
    question: {
      de: 'Was tust du?',
      en: 'What do you do?',
    },
    scenario: {
      de: 'Community-Strategie eines Software-Anbieters, Abstimmung mit dem Social-Media-Team: Ein Kollege schlägt vor, ab sofort jeden lobenden Forumsbeitrag binnen Minuten mit Badge, Lob und Repost zu belohnen und kritische Threads bewusst unkommentiert zu lassen — „nach ein paar Wochen kippt der Ton von allein ins Positive". Die Teamleitung fragt dich nach deiner Empfehlung.',
      en: 'A software vendor\'s community strategy, alignment with the social-media team: a colleague proposes that from now on every praising forum post be rewarded within minutes with a badge, praise, and a repost, while critical threads are deliberately left uncommented — "after a few weeks the tone tips positive on its own". The team lead asks for your recommendation.',
    },
    options: [
      {
        de: 'Ich kopple Anerkennung an den Wert eines Beitrags, nicht an seine Tonlage: hilfreiche Lösungen, gute Fragen und fundierte Kritik werden gleichermaßen sichtbar gewürdigt. Kritische Threads beantworten wir zuerst — sie stumm zu lassen wäre verdecktes Wegtrainieren unbequemer Stimmen und beschädigt die Glaubwürdigkeit des Forums, sobald es auffällt.',
        en: 'I tie recognition to the value of a post, not its tone: helpful solutions, good questions, and well-founded criticism all get visible appreciation. Critical threads we answer first — leaving them silent would be covertly training away inconvenient voices and damages the forum\'s credibility the moment it is noticed.',
      },
      {
        de: 'Ich setze den Vorschlag um: Ein positiver Grundton senkt die Eskalationsquote, und was die Stimmung messbar hebt, nützt der Marke — kritische Threads binden ohnehin nur Ressourcen.',
        en: 'I adopt the proposal: a positive baseline tone lowers the escalation rate, and whatever measurably lifts sentiment benefits the brand — critical threads only tie up resources anyway.',
      },
      {
        de: 'Ich verbiete im Forum jede Form von Lob und Reaktion, damit niemand in seinem Verhalten beeinflusst wird — nur völlige Neutralität des Teams bleibt sauber.',
        en: 'I ban every form of praise and reaction in the forum so no one is influenced in their behaviour — only complete neutrality on the team stays clean.',
      },
      {
        de: 'Ich lasse das Belohnungsschema still mitlaufen, kommuniziere es aber nicht — sichtbar gemacht verliert es seine Wirkung, und solange niemand es bemerkt, entsteht kein Schaden.',
        en: 'I let the reward scheme run quietly but do not communicate it — made visible it loses its effect, and as long as no one notices, no harm is done.',
      },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Vorschlag ist operante Konditionierung im eigenen Kanal: Selektiv jede Lobmeldung sofort zu belohnen und Kritik durch Ausbleiben jeder Reaktion verkümmern zu lassen, formt über Verstärkung den Forumston — verdeckt und gegen die eigenen Nutzer gerichtet. Die beste Option koppelt Anerkennung an den inhaltlichen Wert statt an die Tonlage und beantwortet Kritik, statt sie wegzuignorieren. Legitim einsetzen: Sichtbare, prompte Anerkennung ist ein gutes Werkzeug — wenn sie transparent an Qualität geknüpft ist und nicht heimlich eine Meinung heranzüchtet. Erkennen und kontern: Frag bei jedem „Dann kippt der Ton von allein“-Plan, welches Verhalten hier eigentlich belohnt und welches wegtrainiert wird — und ob du das offen erklären könntest. Die Komplettübernahme wirkt plausibel, weil ein ruhiges Forum echten Wert hat — ein Ton, der durch weggeblendete Kritik entsteht, ist aber nur kosmetisch und fliegt auf, sobald Nutzer die Lücke bemerken. Die Totalablehnung überkorrigiert: Reaktion und Anerkennung sind legitime Community-Werkzeuge; das Problem ist die selektive, verdeckte Verstärkung nach Tonlage, nicht jede Reaktion an sich. Der stille Testlauf ist am gefährlichsten — ein verdecktes Verstärkungssystem gegen die eigene Community übersteht keine nachträgliche Offenlegung und kostet genau das Vertrauen, das ein Forum trägt.',
      en: 'The proposal is operant conditioning in your own channel: selectively rewarding every praise post at once and letting criticism wither through the absence of any response shapes the forum\'s tone through reinforcement — covertly, and aimed at your own users. The best option ties recognition to substantive value rather than tone and answers criticism instead of ignoring it away. Used legitimately: visible, prompt recognition is a good tool — when it is transparently tied to quality and not quietly breeding an opinion. To spot and counter it: for every "the tone will tip on its own" plan, ask which behaviour is actually being rewarded and which is being trained away — and whether you could explain it openly. Full adoption looks plausible because a calm forum has real value — but a tone produced by hiding criticism is merely cosmetic and unravels the moment users notice the gap. The blanket ban overcorrects: response and recognition are legitimate community tools; the problem is the selective, covert reinforcement by tone, not every response as such. The quiet trial run is the most dangerous — a covert reinforcement system aimed at your own community survives no later disclosure and costs exactly the trust a forum runs on.',
    },
    points: 10,
    primaryTechniqueId: 'conditioning_classical_operant',
    relatedTechniques: ['conditioning_classical_operant', 'gamification_variable_reward'],
  },
  {
    id: 'wave5b-conditioning_classical_operant-3',
    type: 'quick-check',
    difficulty: 'beginner',
    question: {
      de: 'Wie heißt dieses Muster?',
      en: 'What is this pattern called?',
    },
    scenario: {
      de: 'Health-App eines Krankenversicherers, aufgefallen einer Nutzerin: Jede abgeschlossene Trainingseinheit quittiert die App seit Monaten mit demselben aufsteigenden Erfolgssound. Inzwischen spürt die Nutzerin schon beim bloßen Öffnen der App und dem ersten Ton Vorfreude aufs Training — noch bevor sie irgendetwas getan hat.',
      en: 'A health insurer\'s app, noticed by a user: for months, every completed workout has been acknowledged by the app with the same rising success sound. By now the user feels anticipation for the workout just from opening the app and hearing that first tone — before she has done anything at all.',
    },
    options: [
      { de: 'Konditionierung (klassisch/operant)', en: 'Conditioning (classical/operant)' },
      { de: 'Priming', en: 'Priming' },
      { de: 'Gamification / Variable Belohnungen', en: 'Gamification / variable reward schedules' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Konditionierung (klassisch/operant): Ein anfangs neutraler Reiz — der Erfolgssound — wurde über Monate stets mit dem guten Gefühl des abgeschlossenen Trainings gekoppelt, bis der Ton allein die Vorfreude auslöst. Dass der Reiz die Reaktion nun ohne jede Handlung vorwegnimmt, ist das Kennzeichen klassischer Konditionierung. Legitim einsetzen: In eigenen Formaten darf ein konsistentes Erfolgssignal Freude machen — knüpf es ehrlich an ein echtes Ergebnis (abgeschlossene Einheit) und mach die Mechanik durchschaubar. Erkennen und kontern: Frag dich, ob dich das Ergebnis zieht oder nur der eingeübte Reiz — und leg dir vor, wann und warum du trainierst, statt dem Ton hinterherzugehen. Priming wirkt plausibel, weil auch dort ein Reiz eine Reaktion anstößt — Priming aktiviert aber eine bereits bestehende Assoziation kurzfristig; hier ist die Verknüpfung überhaupt erst durch monatelange Wiederholung entstanden. Gamification / Variable Belohnungen liegt nahe, weil eine App Erfolge quittiert — dieses Muster lebt aber vom unvorhersehbaren Belohnungstakt; hier ist der Sound jedes Mal derselbe, es geht um die gepaarte Emotion, nicht um Zufallsgewinn.',
      en: 'Conditioning (classical/operant): an initially neutral cue — the success sound — was paired for months with the good feeling of a completed workout, until the tone alone triggers the anticipation. That the cue now anticipates the response without any action is the hallmark of classical conditioning. Used legitimately: in your own formats a consistent success signal may bring joy — tie it honestly to a real outcome (a completed session) and keep the mechanic transparent. To spot and counter it: ask yourself whether the outcome is pulling you or just the trained cue — and decide in advance when and why you train instead of chasing the tone. Priming looks plausible because there too a cue prompts a response — but priming briefly activates an already existing association; here the link only came into being through months of repetition. Gamification / variable reward schedules suggests itself because an app is acknowledging achievements — but that pattern lives on an unpredictable reward schedule; here the sound is the same every time, and it is about the paired emotion, not a random prize.',
    },
    points: 10,
    primaryTechniqueId: 'conditioning_classical_operant',
    relatedTechniques: ['conditioning_classical_operant', 'priming', 'gamification_variable_reward'],
  },
];
