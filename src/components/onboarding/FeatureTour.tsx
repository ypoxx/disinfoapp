import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle } from 'lucide-react';
import { useOnboardingStore } from '@/stores/onboardingStore';
import { Button } from '@/components/shared/UIComponents';
import { useNavigate } from 'react-router-dom';

const tourSteps = [
  {
    target: 'home',
    title: 'Startseite',
    description: 'Hier siehst du einen Überblick über deine Fortschritte und wichtige Aktionen.',
    position: 'center' as const,
  },
  {
    target: 'discover',
    title: 'Discover Feed',
    description: 'Entdecke alle 28 Techniken in einem TikTok-Style Feed. Swipe durch und lerne!',
    position: 'bottom' as const,
    route: '/discover',
  },
  {
    target: 'quiz',
    title: 'Quiz',
    description: 'Teste dein Wissen mit adaptiven Quizzes, die auf deine Schwächen fokussieren.',
    position: 'bottom' as const,
    route: '/quiz',
  },
  {
    target: 'simulator',
    title: 'Social Media Simulator',
    description: 'Übe mit realistischen Posts und lerne, Manipulationstechniken zu identifizieren.',
    position: 'bottom' as const,
    route: '/simulator',
  },
  {
    target: 'progress',
    title: 'Fortschritt',
    description: 'Verfolge deine Lernreise, sieh deine Statistiken und erhalte personalisierte Empfehlungen.',
    position: 'bottom' as const,
    route: '/progress',
  },
];

export function FeatureTour() {
  const { showTour, currentStep, endTour, setCurrentStep, completeOnboarding } =
    useOnboardingStore();
  const navigate = useNavigate();

  if (!showTour || currentStep === null) return null;

  const step = tourSteps[currentStep];
  const isLastStep = currentStep === tourSteps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      completeOnboarding();
      endTour();
    } else {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      if (tourSteps[nextStep].route) {
        navigate(tourSteps[nextStep].route!);
      }
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    endTour();
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      if (tourSteps[prevStep].route) {
        navigate(tourSteps[prevStep].route!);
      }
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={handleSkip}
      />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed bottom-8 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-xl border-2 border-primary bg-white p-6 shadow-2xl dark:bg-gray-800">
          {/* Close Button */}
          <button
            onClick={handleSkip}
            className="absolute right-2 top-2 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Tour beenden"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                {currentStep + 1}/{tourSteps.length}
              </span>
              <h3 className="font-bold">{step.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 h-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                size="sm"
                className="flex-1"
              >
                Zurück
              </Button>
            )}
            <Button
              onClick={handleNext}
              size="sm"
              className="flex-1 gap-2"
            >
              {isLastStep ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Fertig
                </>
              ) : (
                <>
                  Weiter
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
