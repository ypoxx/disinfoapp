import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Brain, Target, TrendingUp, Zap } from 'lucide-react';
import { useOnboardingStore } from '@/stores/onboardingStore';
import { Button } from '@/components/shared/UIComponents';
import { useState } from 'react';

const welcomeSteps = [
  {
    icon: Sparkles,
    title: 'Willkommen bei DisinfoApp!',
    description:
      'Lerne, Desinformation und Manipulationstechniken zu erkennen. Werde zum Experten im kritischen Denken!',
    color: '#8b5cf6',
  },
  {
    icon: Brain,
    title: '28 Persuasionstechniken',
    description:
      'Entdecke wissenschaftlich fundierte Techniken von kognitiven Verzerrungen bis zu digitaler Manipulation.',
    color: '#3b82f6',
  },
  {
    icon: Target,
    title: 'Interaktives Lernen',
    description:
      'Übe mit realistischen Szenarien im Social Media Simulator. Quiz, Module und mehr!',
    color: '#f59e0b',
  },
  {
    icon: TrendingUp,
    title: 'Personalisiertes Training',
    description:
      'Unser adaptives System fokussiert auf deine Schwachstellen und hilft dir, schneller zu lernen.',
    color: '#10b981',
  },
];

export function WelcomeModal() {
  const { hasSeenWelcome, markWelcomeSeen, completeOnboarding, startTour } =
    useOnboardingStore();
  const [currentStep, setCurrentStep] = useState(0);

  if (hasSeenWelcome) return null;

  const isLastStep = currentStep === welcomeSteps.length - 1;
  const step = welcomeSteps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    if (isLastStep) {
      markWelcomeSeen();
      startTour();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    markWelcomeSeen();
    completeOnboarding();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={handleSkip}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Überspringen"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="mb-8 text-center">
            {/* Icon */}
            <motion.div
              key={currentStep}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full"
              style={{ backgroundColor: `${step.color}20` }}
            >
              <Icon className="h-12 w-12" style={{ color: step.color }} />
            </motion.div>

            {/* Title */}
            <motion.h2
              key={`title-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-2xl font-bold"
            >
              {step.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={`desc-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground"
            >
              {step.description}
            </motion.p>
          </div>

          {/* Progress Dots */}
          <div className="mb-6 flex justify-center gap-2">
            {welcomeSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8'
                    : 'w-2'
                } ${
                  index <= currentStep
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}
                aria-label={`Schritt ${index + 1}`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {!isLastStep && (
              <Button
                variant="outline"
                onClick={handleSkip}
                className="flex-1"
              >
                Überspringen
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="flex-1 gap-2"
            >
              {isLastStep ? (
                <>
                  <Zap className="h-4 w-4" />
                  Tour starten
                </>
              ) : (
                'Weiter'
              )}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
