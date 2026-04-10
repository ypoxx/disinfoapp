import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/design/components/button';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { WelcomeScreen } from './welcome-screen';
import { DiagnosticQuiz } from './diagnostic-quiz';

type Step = 'welcome' | 'quiz' | 'result';

interface QuizResult {
  score: number;
  answers: { techniqueId: string; correct: boolean }[];
}

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { t } = useTranslation();
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

  // Result screen
  const { score } = result;
  const accuracy = Math.round((score / totalQuestions) * 100);
  const levelKey = score === totalQuestions ? 'advanced' : score >= 1 ? 'intermediate' : 'beginner';

  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6 max-w-sm"
      >
        <MasteryMeter value={accuracy} />

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            {t('onboarding.result.title', { score, total: totalQuestions })}
          </h2>
          <p className="text-[var(--color-accent)] font-medium">
            {t(`onboarding.result.level.${levelKey}`)}
          </p>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)]">
          {t(`onboarding.result.message.${levelKey}`)}
        </p>

        <Button size="lg" onClick={onComplete} className="w-full">
          {t('onboarding.result.continue')}
        </Button>
      </motion.div>
    </div>
  );
}
