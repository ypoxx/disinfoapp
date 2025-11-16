import { Button } from '@/components/shared/UIComponents';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LessonNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onComplete?: () => void;
  isLastStep?: boolean;
}

export function LessonNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onComplete,
  isLastStep = false,
}: LessonNavigationProps) {
  const canGoPrevious = currentStep > 0;
  const canGoNext = currentStep < totalSteps - 1;

  return (
    <div className="flex items-center justify-between border-t pt-6">
      <div>
        {canGoPrevious && onPrevious && (
          <Button onClick={onPrevious} variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentStep
                ? 'w-8 bg-primary'
                : index < currentStep
                  ? 'bg-primary/50'
                  : 'bg-secondary'
            }`}
          />
        ))}
      </div>

      <div>
        {isLastStep && onComplete ? (
          <Button onClick={onComplete} variant="primary">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Zum Quiz
          </Button>
        ) : canGoNext && onNext ? (
          <Button onClick={onNext} variant="primary">
            Weiter
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
