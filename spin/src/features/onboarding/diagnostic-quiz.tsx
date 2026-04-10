import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/design/components/button';
import { QuizOption } from '@/design/components/quiz-option';
import { ProgressBar } from '@/design/components/progress-bar';
import { t as tContent } from '@content/types';

interface QuizResult {
  score: number;
  answers: { techniqueId: string; correct: boolean }[];
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

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ techniqueId: string; correct: boolean }[]>([]);

  const question = diagnosticQuestions[currentQ];
  const progress = ((currentQ) / diagnosticQuestions.length) * 100;

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
    onComplete({ score: 0, answers: [] });
  };

  return (
    <div className="min-h-svh flex flex-col px-4 py-6">
      {/* Header */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
            {t('onboarding.diagnosticTitle')}
          </p>
          <button
            onClick={handleSkip}
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            {t('onboarding.skip')}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <ProgressBar value={progress} />
          <span className="text-xs text-[var(--color-text-muted)] tabular-nums shrink-0">
            {currentQ + 1}/{diagnosticQuestions.length}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold leading-snug">
              {tContent(question.question, lang)}
            </h2>

            <div className="space-y-2">
              {question.options.map((opt, i) => {
                let state: 'default' | 'selected' | 'correct' | 'incorrect' = 'default';
                if (showFeedback) {
                  if (i === question.correctAnswer) state = 'correct';
                  else if (i === selectedAnswer) state = 'incorrect';
                } else if (i === selectedAnswer) {
                  state = 'selected';
                }

                return (
                  <QuizOption
                    key={i}
                    index={i}
                    label={tContent(opt, lang)}
                    state={state}
                    onClick={() => handleSelect(i)}
                    disabled={showFeedback}
                  />
                );
              })}
            </div>

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]"
              >
                <p className="text-sm">{tContent(question.explanation, lang)}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4 pb-safe"
        >
          <Button size="lg" onClick={handleNext} className="w-full">
            {currentQ + 1 >= diagnosticQuestions.length ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} /> {t('onboarding.viewResult')}
              </span>
            ) : (
              t('common.next')
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
