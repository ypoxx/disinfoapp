import { WelcomeScreen } from './welcome-screen';

interface OnboardingFlowProps {
  onComplete: () => void;
}

/**
 * Onboarding is a single welcome screen. There is deliberately NO visible
 * diagnostic quiz or score screen: the first practice sessions calibrate the
 * level silently (adaptive introduction pace + difficulty band, see
 * engine/session-builder). A plain-language note about the adaptive
 * behaviour lives in the profile settings.
 */
export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  return <WelcomeScreen onStart={onComplete} />;
}
