import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { modules } from '@/data/modules';
import { quizzes } from '@/data/quizzes';
import { basicsLessonContent } from '@/data/lessons/basicsLesson';
import { tacticsLessonContent } from '@/data/lessons/tacticsLesson';
import { psychologyLessonContent } from '@/data/lessons/psychologyLesson';
import { verificationLessonContent } from '@/data/lessons/verificationLesson';
import { LessonContent } from '@/components/learning/LessonContent';
import { LessonNavigation } from '@/components/learning/LessonNavigation';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { QuizResults } from '@/components/quiz/QuizResults';
import { Button, Card } from '@/components/shared/UIComponents';
import { useProgressStore } from '@/stores/progressStore';
import { useAchievementStore } from '@/stores/achievementStore';

type ViewState = 'intro' | 'lesson' | 'quiz' | 'results';

export function QuizPage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [viewState, setViewState] = useState<ViewState>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimeSpent, setQuizTimeSpent] = useState(0);

  const { completeModule, addXP, updateStreak, xp, streak, modulesCompleted, totalTimeSpent } = useProgressStore();
  const { checkAchievements, updateProgress } = useAchievementStore();

  const module = modules.find((m) => m.id === moduleId);
  const quiz = moduleId ? quizzes[moduleId] : undefined;

  // Get lesson content
  const getLessonContent = () => {
    switch (moduleId) {
      case 'basics':
        return basicsLessonContent;
      case 'tactics':
        return tacticsLessonContent;
      case 'psychology':
        return psychologyLessonContent;
      case 'verification':
        return verificationLessonContent;
      default:
        return null;
    }
  };

  const lessonContent = getLessonContent();

  useEffect(() => {
    if (!module || !lessonContent) {
      navigate('/modules');
    }
  }, [module, lessonContent, navigate]);

  if (!module || !lessonContent || !quiz) {
    return null;
  }

  const handleStartLesson = () => {
    setViewState('lesson');
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < lessonContent.steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStartQuiz = () => {
    setViewState('quiz');
  };

  const handleQuizComplete = (score: number, timeSpent: number) => {
    setQuizScore(score);
    setQuizTimeSpent(timeSpent);
    setViewState('results');

    // Calculate XP
    const baseXP = module.points;
    const bonusXP = score >= 90 ? Math.floor(baseXP * 0.5) : 0;
    const totalXP = baseXP + bonusXP;

    // Update progress
    if (score >= quiz.passingScore && moduleId) {
      completeModule(moduleId, score, timeSpent);
      addXP(totalXP);
      updateStreak();

      // Check for achievements
      setTimeout(() => {
        const newXP = xp + totalXP;
        const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
        const newModulesCompleted = modulesCompleted + 1;
        const newTotalTimeSpent = totalTimeSpent + timeSpent;

        checkAchievements({
          modulesCompleted: newModulesCompleted,
          xp: newXP,
          streak: streak.current,
          totalTimeSpent: newTotalTimeSpent,
          level: newLevel,
        });

        // Check perfectionist achievement
        if (score === 100) {
          updateProgress('perfectionist', 1);
        }

        // Check speed learner
        if (timeSpent < 600) { // 10 minutes
          updateProgress('speed-learner', 1);
        }
      }, 500);
    } else if (quiz.passingScore && moduleId) {
      // Failed quiz - check comeback kid achievement on retry
      updateProgress('comeback-kid', 0);
    }
  };

  const handleRetry = () => {
    setViewState('quiz');
    setQuizScore(0);
    setQuizTimeSpent(0);
    // Unlock comeback kid achievement for retrying after failure
    updateProgress('comeback-kid', 1);
  };

  const currentLessonStep = lessonContent.steps[currentStep];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Button
        onClick={() => navigate('/modules')}
        variant="ghost"
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Zurück zu den Modulen
      </Button>

      {/* Module Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="mb-2 text-4xl font-bold">{module.name.de}</h1>
        <p className="text-lg text-muted-foreground">{module.description.de}</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Intro View */}
        {viewState === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card>
              <div className="text-center">
                <BookOpen className="mx-auto mb-4 h-16 w-16 text-primary" />
                <h2 className="mb-4 text-2xl font-bold">Bereit zu lernen?</h2>
                <p className="mb-6 text-muted-foreground">
                  Dieses Modul besteht aus {lessonContent.steps.length} Lerneinheiten, gefolgt von
                  einem Quiz mit {quiz.questions.length} Fragen.
                </p>
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold">{lessonContent.steps.length}</div>
                    <div className="text-sm text-muted-foreground">Lerneinheiten</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold">{quiz.questions.length}</div>
                    <div className="text-sm text-muted-foreground">Quiz-Fragen</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold">{module.points} XP</div>
                    <div className="text-sm text-muted-foreground">Zu verdienen</div>
                  </div>
                </div>
                <Button onClick={handleStartLesson} size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Lektion starten
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Lesson View */}
        {viewState === 'lesson' && (
          <motion.div
            key="lesson"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card className="mb-6">
              <h2 className="mb-6 text-2xl font-bold">{currentLessonStep.title}</h2>
              <LessonContent sections={currentLessonStep.sections} />
            </Card>

            <Card>
              <LessonNavigation
                currentStep={currentStep}
                totalSteps={lessonContent.steps.length}
                onPrevious={handlePreviousStep}
                onNext={handleNextStep}
                onComplete={handleStartQuiz}
                isLastStep={currentStep === lessonContent.steps.length - 1}
              />
            </Card>
          </motion.div>
        )}

        {/* Quiz View */}
        {viewState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuizEngine
              questions={quiz.questions}
              onComplete={handleQuizComplete}
              timeLimit={quiz.timeLimit}
            />
          </motion.div>
        )}

        {/* Results View */}
        {viewState === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuizResults
              score={quizScore}
              totalQuestions={quiz.questions.length}
              timeSpent={quizTimeSpent}
              xpEarned={quizScore >= quiz.passingScore ? module.points : 0}
              onRetry={quizScore < quiz.passingScore ? handleRetry : undefined}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
