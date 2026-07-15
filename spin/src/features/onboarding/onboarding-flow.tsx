import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/design/components/button';
import { SplitFlap } from '@/design/components/split-flap';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { WelcomeScreen } from './welcome-screen';
import { DiagnosticQuiz } from './diagnostic-quiz';

type Step = 'welcome' | 'quiz' | 'result';

interface QuizResult {
  score: number;
  answers: { techniqueId: string; correct: boolean }[];
  skipped?: boolean;
}

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { t } = useTranslation();
  const reduce = !!useReducedMotion();
  const [step, setStep] = useState<Step>('welcome');
  const [result, setResult] = useState<QuizResult>({ score: 0, answers: [] });
  const { recordEncounter } = useKnowledgeStore();

  const totalQuestions = 3;

  const handleQuizComplete = (quizResult: QuizResult) => {
    setResult(quizResult);
    // Seed knowledge store with diagnostic results
    for (const answer of quizResult.answers) {
      recordEncounter(answer.techniqueId, answer.correct);
    }
    setStep('result');
  };

  if (step === 'welcome') {
    return <WelcomeScreen onStart={() => setStep('quiz')} />;
  }

  if (step === 'quiz') {
    return <DiagnosticQuiz onComplete={handleQuizComplete} />;
  }

  // Result screen — honest about skipping (no fake "0/3")
  const { score, skipped } = result;
  const levelKey = skipped
    ? 'skipped'
    : score === totalQuestions
      ? 'advanced'
      : score >= 1
        ? 'intermediate'
        : 'beginner';

  return (
    <div className="min-h-svh flex flex-col justify-center px-6 py-8 max-w-md mx-auto w-full">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.9, 0, 0.1, 1] }}
        className="space-y-6"
      >
        {!skipped && (
          <div className="flex items-center gap-4">
            <SplitFlap value={score} digits={1} size="md" aria-label={`${score}/${totalQuestions}`} />
            <span className="type-display text-lg text-[var(--color-text-muted)]">/{totalQuestions}</span>
          </div>
        )}

        <div className="space-y-2">
          <h2 className="type-display text-xl">
            {skipped
              ? t('onboarding.result.skippedTitle')
              : t('onboarding.result.title', { score, total: totalQuestions })}
          </h2>
          <p className="mono-label text-[var(--color-accent-text)]">
            {t(`onboarding.result.level.${levelKey}`)}
          </p>
        </div>

        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
          {t(`onboarding.result.message.${levelKey}`)}
        </p>

        <Button size="lg" onClick={onComplete} className="w-full">
          {t('onboarding.result.continue')}
        </Button>
      </motion.div>
    </div>
  );
}
