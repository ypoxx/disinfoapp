import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizQuestion } from '@/types';
import { Button, Card, ProgressBar } from '@/components/shared/UIComponents';
import { Alert } from '@/components/shared/Alert';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { shuffleWithMapping } from '@/utils/arrayUtils';

interface QuizEngineProps {
  questions: QuizQuestion[];
  onComplete: (score: number, timeSpent: number) => void;
  timeLimit?: number; // in seconds
}

interface ShuffledQuestion {
  shuffledOptions?: { de: string }[];
  indexMapping?: number[]; // Maps shuffled index to original index
}

export function QuizEngine({ questions, onComplete, timeLimit }: QuizEngineProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | number)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Shuffle options for multiple-choice questions (but not true/false)
  const shuffledQuestions = useMemo<ShuffledQuestion[]>(() => {
    return questions.map((question) => {
      if (question.type === 'multiple-choice' && question.options && question.options.length > 0) {
        const { shuffled, indexMapping } = shuffleWithMapping(question.options);
        return {
          shuffledOptions: shuffled,
          indexMapping,
        };
      }
      return {};
    });
  }, [questions]);

  const currentShuffled = shuffledQuestions[currentQuestionIndex];
  const displayOptions =
    currentQuestion.type === 'multiple-choice'
      ? currentShuffled.shuffledOptions || currentQuestion.options
      : currentQuestion.options;

  // Timer
  useEffect(() => {
    if (!timeLimit || showFeedback) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === undefined || prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit, showFeedback, currentQuestionIndex]);

  const handleTimeUp = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const score = calculateScore();
    onComplete(score, timeSpent);
  };

  const handleAnswer = (shuffledAnswer: string | number) => {
    // For multiple-choice, map shuffled index back to original index
    let originalAnswer = shuffledAnswer;
    if (
      currentQuestion.type === 'multiple-choice' &&
      typeof shuffledAnswer === 'number' &&
      currentShuffled.indexMapping
    ) {
      originalAnswer = currentShuffled.indexMapping[shuffledAnswer];
    }

    const correct = originalAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = originalAnswer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setIsCorrect(false);

    if (isLastQuestion) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const score = calculateScore();
      onComplete(score, timeSpent);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const formatTime = (seconds: number | undefined) => {
    if (seconds === undefined) return '';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Frage {currentQuestionIndex + 1} von {questions.length}
          </h2>
          {timeLimit && timeRemaining !== undefined && (
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <Clock className="h-5 w-5" />
              <span className={timeRemaining < 30 ? 'text-destructive' : ''}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          )}
        </div>
        <ProgressBar value={currentQuestionIndex + 1} max={questions.length} />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <h3 className="mb-6 text-xl font-semibold">{currentQuestion.question.de}</h3>

            {/* Answer Options */}
            {currentQuestion.type === 'multiple-choice' && displayOptions && (
              <div className="space-y-3">
                {displayOptions.map((option, shuffledIndex) => {
                  // Map back to find if this is the correct answer
                  const originalIndex = currentShuffled.indexMapping
                    ? currentShuffled.indexMapping[shuffledIndex]
                    : shuffledIndex;
                  const isCorrectAnswer = originalIndex === currentQuestion.correctAnswer;
                  const isUserAnswer = answers[currentQuestionIndex] === originalIndex;

                  return (
                    <button
                      key={shuffledIndex}
                      onClick={() => !showFeedback && handleAnswer(shuffledIndex)}
                      disabled={showFeedback}
                      className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                        showFeedback && isCorrectAnswer
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : showFeedback && isUserAnswer
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-border hover:border-primary hover:bg-accent'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.de}</span>
                        {showFeedback && isCorrectAnswer && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                        {showFeedback && isUserAnswer && !isCorrectAnswer && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* True/False */}
            {currentQuestion.type === 'true-false' && (
              <div className="space-y-3">
                {['Richtig', 'Falsch'].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showFeedback && handleAnswer(index === 0 ? 'true' : 'false')}
                    disabled={showFeedback}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                      showFeedback &&
                      (index === 0 ? 'true' : 'false') === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : showFeedback &&
                            answers[currentQuestionIndex] === (index === 0 ? 'true' : 'false')
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-border hover:border-primary hover:bg-accent'
                    } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{option}</span>
                      {showFeedback &&
                        (index === 0 ? 'true' : 'false') === currentQuestion.correctAnswer && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                      {showFeedback &&
                        answers[currentQuestionIndex] === (index === 0 ? 'true' : 'false') &&
                        (index === 0 ? 'true' : 'false') !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Text Input */}
            {currentQuestion.type === 'text-input' && (
              <div>
                <input
                  type="text"
                  placeholder="Ihre Antwort..."
                  disabled={showFeedback}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !showFeedback) {
                      handleAnswer(e.currentTarget.value);
                    }
                  }}
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                {!showFeedback && (
                  <Button
                    onClick={() => {
                      const input = document.querySelector('input') as HTMLInputElement;
                      handleAnswer(input.value);
                    }}
                    className="mt-3"
                  >
                    Antwort überprüfen
                  </Button>
                )}
              </div>
            )}

            {/* Feedback */}
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Alert
                  type={isCorrect ? 'success' : 'error'}
                  title={isCorrect ? 'Richtig!' : 'Leider falsch'}
                  message={currentQuestion.explanation.de}
                />
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleNext}>
                    {isLastQuestion ? 'Quiz abschließen' : 'Nächste Frage'}
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
