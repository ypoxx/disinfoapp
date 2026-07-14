import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/design/components/button';
import { QuizOption } from '@/design/components/quiz-option';
import { SegmentProgress } from '@/design/components/segment-progress';
import { Card } from '@/design/components/card';
import { t as tContent } from '@content/types';

interface QuizResult {
  score: number;
  answers: { techniqueId: string; correct: boolean }[];
  skipped?: boolean;
}

interface DiagnosticQuizProps {
  onComplete: (result: QuizResult) => void;
}

/**
 * 3-question diagnostic quiz to assess the user's starting level.
 * Uses hardcoded questions from the technique database for instant start.
 */
const diagnosticQuestions = [
  {
    question: {
      de: 'Ein Online-Shop zeigt "Nur noch 2 Stück verfügbar!" an. Welche Technik wird hier eingesetzt?',
      en: 'An online shop shows "Only 2 left in stock!". Which technique is being used?',
    },
    options: [
      { de: 'Anchoring', en: 'Anchoring' },
      { de: 'Verknappung (Scarcity)', en: 'Scarcity' },
      { de: 'Social Proof', en: 'Social Proof' },
      { de: 'Framing', en: 'Framing' },
    ],
    correctAnswer: 1,
    explanation: {
      de: 'Richtig! Verknappung erzeugt Dringlichkeit durch begrenzte Verfügbarkeit. Der Käufer soll schnell handeln, bevor das Produkt "weg" ist.',
      en: 'Correct! Scarcity creates urgency through limited availability. The buyer should act fast before the product is "gone".',
    },
    techniqueId: 'scarcity',
  },
  {
    question: {
      de: 'Ein Politiker sagt: "Entweder wir senken die Steuern, oder die Wirtschaft bricht zusammen." Was ist das?',
      en: 'A politician says: "Either we cut taxes, or the economy will collapse." What is this?',
    },
    options: [
      { de: 'Emotionaler Appell', en: 'Emotional Appeal' },
      { de: 'Ad Hominem', en: 'Ad Hominem' },
      { de: 'Falsche Dichotomie', en: 'False Dichotomy' },
      { de: 'Priming', en: 'Priming' },
    ],
    correctAnswer: 2,
    explanation: {
      de: 'Das ist eine falsche Dichotomie: Es werden nur zwei Optionen präsentiert, obwohl es viele Zwischenlösungen gibt.',
      en: 'This is a false dichotomy: only two options are presented, although many intermediate solutions exist.',
    },
    techniqueId: 'false_dichotomy',
  },
  {
    question: {
      de: '"9 von 10 Zahnärzten empfehlen diese Zahnpasta." Welche Techniken werden hier kombiniert?',
      en: '"9 out of 10 dentists recommend this toothpaste." Which techniques are combined here?',
    },
    options: [
      { de: 'Framing + Nudging', en: 'Framing + Nudging' },
      { de: 'Social Proof + Autorität', en: 'Social Proof + Authority' },
      { de: 'Wiederholung + Priming', en: 'Repetition + Priming' },
      { de: 'Reziprozität + Sympathie', en: 'Reciprocity + Liking' },
    ],
    correctAnswer: 1,
    explanation: {
      de: 'Hier wirken Social Proof ("9 von 10") und Autorität ("Zahnärzte") zusammen. Die Masse und die Experten sind sich einig — ein starkes Überzeugungsduo.',
      en: 'Social proof ("9 out of 10") and authority ("dentists") work together here. The crowd and the experts agree — a powerful persuasion duo.',
    },
    techniqueId: 'social_proof',
  },
];

export function DiagnosticQuiz({ onComplete }: DiagnosticQuizProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const reduce = !!useReducedMotion();

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ techniqueId: string; correct: boolean }[]>([]);

  const question = diagnosticQuestions[currentQ];

  const handleSelect = useCallback((idx: number) => {
    if (showFeedback) return;
    setSelectedAnswer(idx);
    setShowFeedback(true);
  }, [showFeedback]);

  const handleNext = () => {
    const correct = selectedAnswer === question.correctAnswer;
    const newScore = score + (correct ? 1 : 0);
    const newAnswers = [...answers, { techniqueId: question.techniqueId, correct }];

    if (currentQ + 1 >= diagnosticQuestions.length) {
      onComplete({ score: newScore, answers: newAnswers });
    } else {
      setScore(newScore);
      setAnswers(newAnswers);
      setCurrentQ(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleSkip = () => {
    onComplete({ score: 0, answers: [], skipped: true });
  };

  const feedbackText = showFeedback
    ? `${selectedAnswer === question.correctAnswer ? t('common.correct') : t('common.incorrect')}. ${tContent(question.explanation, lang)}`
    : '';

  return (
    <div className="min-h-svh flex flex-col px-4 py-6 max-w-md mx-auto w-full">
      {/* Header */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <p className="mono-label text-[var(--color-text-muted)]">
            {t('onboarding.diagnosticTitle')} · {currentQ + 1}/{diagnosticQuestions.length}
          </p>
          <button
            onClick={handleSkip}
            className="mono-label text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors min-h-[2.75rem] px-2 -mr-2"
          >
            {t('onboarding.skip')}
          </button>
        </div>
        <SegmentProgress
          total={diagnosticQuestions.length}
          done={currentQ + (showFeedback ? 1 : 0)}
          active={currentQ}
        />
      </div>

      <div aria-live="polite" className="sr-only">{feedbackText}</div>

      {/* Question */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={reduce ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -48, transition: { duration: 0.1 } }}
            transition={{ duration: 0.3, ease: [0.9, 0, 0.1, 1] }}
            className="space-y-4"
          >
            <h2 className="type-display text-lg">
              {tContent(question.question, lang)}
            </h2>

            <div className="space-y-2">
              {question.options.map((opt, i) => {
                let state: 'default' | 'selected' | 'correct' | 'incorrect' | 'dimmed' = 'default';
                if (showFeedback) {
                  if (i === question.correctAnswer) state = 'correct';
                  else if (i === selectedAnswer) state = 'incorrect';
                  else state = 'dimmed';
                } else if (i === selectedAnswer) {
                  state = 'selected';
                }

                return (
                  <QuizOption
                    key={i}
                    index={i}
                    label={tContent(opt, lang)}
                    state={state}
                    tag={t('practice.verdictTag')}
                    onClick={() => handleSelect(i)}
                    disabled={showFeedback}
                  />
                );
              })}
            </div>

            {showFeedback && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.9, 0, 0.1, 1] }}
              >
                <Card variant="inverse" padding="md">
                  <p className="mono-label text-[var(--color-signal)] mb-2">{t('practice.explanation')}</p>
                  <p className="text-sm leading-relaxed">{tContent(question.explanation, lang)}</p>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      {showFeedback && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.9, 0, 0.1, 1] }}
          className="pt-4 pb-safe"
        >
          <Button size="lg" variant="inverse" onClick={handleNext} className="w-full">
            {currentQ + 1 >= diagnosticQuestions.length ? t('onboarding.viewResult') : t('common.next')}
            <ArrowRight size={18} aria-hidden />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
