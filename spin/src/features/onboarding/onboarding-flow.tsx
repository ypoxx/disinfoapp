import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/design/components/button';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { WelcomeScreen } from './welcome-screen';
import { DiagnosticQuiz } from './diagnostic-quiz';

type Step = 'welcome' | 'quiz' | 'result';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>('welcome');
  const [score, setScore] = useState(0);

  const totalQuestions = 3;

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setStep('result');
  };

  if (step === 'welcome') {
    return <WelcomeScreen onStart={() => setStep('quiz')} />;
  }

  if (step === 'quiz') {
    return <DiagnosticQuiz onComplete={handleQuizComplete} />;
  }

  // Result screen
  const accuracy = Math.round((score / totalQuestions) * 100);
  const level = score === 3 ? 'Fortgeschritten' : score >= 1 ? 'Einsteiger mit Grundwissen' : 'Einsteiger';

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
            {score}/{totalQuestions} richtig
          </h2>
          <p className="text-[var(--color-accent)] font-medium">{level}</p>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)]">
          {score === 3
            ? 'Du kennst dich bereits gut aus. SPIN wird dich mit fortgeschrittenen Techniken und Spaced Repetition auf Expertenniveau bringen.'
            : score >= 1
              ? 'Gute Basis! SPIN wird dir helfen, alle 27 Techniken systematisch zu meistern — in nur wenigen Minuten am Tag.'
              : 'Perfekter Startpunkt! SPIN führt dich Schritt für Schritt durch alle Überzeugungstechniken, die Kommunikatoren kennen sollten.'}
        </p>

        <Button size="lg" onClick={onComplete} className="w-full">
          {t('today.startSession')}
        </Button>
      </motion.div>
    </div>
  );
}
