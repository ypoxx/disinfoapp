import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ThumbsUp,
  Share2,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  X,
  Flag,
  Search,
  ExternalLink,
  Brain,
} from 'lucide-react';
import { TechniqueTagList } from '@/components/techniques/TechniqueTag';
import { Link } from 'react-router-dom';
import { simulatorPosts } from '@/data/simulator/posts';

interface SimulatorProps {
  onComplete?: (score: number) => void;
}

export function SocialMediaSimulator({ onComplete }: SimulatorProps) {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [selectedPosts, setSelectedPosts] = useState<{
    [key: string]: 'disinfo' | 'legit';
  }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRedFlags, setShowRedFlags] = useState(false);
  const [showTechniques, setShowTechniques] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentPost = simulatorPosts[currentPostIndex];
  const isAnswered = selectedPosts[currentPost.id] !== undefined;

  const handleAnswer = (answer: 'disinfo' | 'legit') => {
    setSelectedPosts((prev) => ({
      ...prev,
      [currentPost.id]: answer,
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    setShowRedFlags(false);
    setShowTechniques(false);

    if (currentPostIndex < simulatorPosts.length - 1) {
      setCurrentPostIndex((prev) => prev + 1);
    } else {
      // Calculate score
      const correct = Object.entries(selectedPosts).filter(([postId, answer]) => {
        const post = simulatorPosts.find((p) => p.id === postId);
        if (!post) return false;
        return (answer === 'disinfo' && post.isDisinfo) || (answer === 'legit' && !post.isDisinfo);
      }).length;

      const score = Math.round((correct / simulatorPosts.length) * 100);
      setCompleted(true);
      onComplete?.(score);
    }
  };

  const handleRestart = () => {
    setCurrentPostIndex(0);
    setSelectedPosts({});
    setShowExplanation(false);
    setShowRedFlags(false);
    setShowTechniques(false);
    setCompleted(false);
  };

  const getCorrectAnswers = () => {
    return Object.entries(selectedPosts).filter(([postId, answer]) => {
      const post = simulatorPosts.find((p) => p.id === postId);
      if (!post) return false;
      return (answer === 'disinfo' && post.isDisinfo) || (answer === 'legit' && !post.isDisinfo);
    }).length;
  };

  if (completed) {
    const correct = getCorrectAnswers();
    const score = Math.round((correct / simulatorPosts.length) * 100);

    // Count unique techniques encountered
    const encounteredTechniques = new Set<string>();
    simulatorPosts.forEach((post) => {
      if (selectedPosts[post.id]) {
        post.techniques.forEach((t) => encounteredTechniques.add(t));
      }
    });

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8 bg-card rounded-lg border text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Simulation abgeschlossen!</h2>
        <div className="text-6xl font-bold mb-4 text-primary">{score}%</div>
        <p className="text-lg mb-2">
          Du hast {correct} von {simulatorPosts.length} Posts richtig eingeschätzt.
        </p>
        <p className="text-muted-foreground mb-4">
          {score >= 80
            ? '🎉 Ausgezeichnet! Du kannst Desinformation gut erkennen.'
            : score >= 60
            ? '👍 Gut gemacht! Mit etwas Übung wirst du noch besser.'
            : '💪 Nicht aufgeben! Probiere die Lernmodule aus, um deine Fähigkeiten zu verbessern.'}
        </p>

        {/* Techniques Summary */}
        <div className="mb-8 p-4 bg-muted/50 rounded-lg text-left">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Entdeckte Techniken</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Du hast {encounteredTechniques.size} verschiedene Manipulations-Techniken kennengelernt!
          </p>
          <Link
            to="/techniques"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Brain className="h-4 w-4" />
            Alle Techniken im Explorer ansehen →
          </Link>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Nochmal spielen
          </button>
          <Link
            to="/techniques"
            className="flex-1 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
          >
            <Brain className="h-5 w-5" />
            Techniken lernen
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>
            Post {currentPostIndex + 1} von {simulatorPosts.length}
          </span>
          <span>{getCorrectAnswers()} richtig</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentPostIndex + 1) / simulatorPosts.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Social Media Post */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPost.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-card rounded-lg border overflow-hidden mb-6"
        >
          {/* Post Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{currentPost.authorImage}</div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{currentPost.author}</span>
                  {currentPost.verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                </div>
                <span className="text-sm text-muted-foreground">{currentPost.timestamp}</span>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Flag className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="p-4">
            <p className="whitespace-pre-wrap">{currentPost.content}</p>
            {currentPost.image && (
              <div className="mt-4 bg-muted rounded-lg h-64 flex items-center justify-center">
                <span className="text-muted-foreground">📷 Bild</span>
              </div>
            )}
          </div>

          {/* Post Stats */}
          <div className="px-4 py-2 border-t border-b flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              {currentPost.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              {currentPost.shares.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              {currentPost.comments.toLocaleString()}
            </span>
          </div>

          {/* Actions */}
          <div className="p-4 flex gap-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ThumbsUp className="h-5 w-5" />
              <span>Gefällt mir</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-5 w-5" />
              <span>Kommentieren</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Share2 className="h-5 w-5" />
              <span>Teilen</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Analysis Tools */}
      {!isAnswered && (
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Analyse-Werkzeuge
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setShowRedFlags(!showRedFlags)}
              className="w-full text-left px-4 py-2 bg-background hover:bg-accent rounded-lg transition-colors flex items-center justify-between"
            >
              <span>🔍 Red Flags anzeigen</span>
              {showRedFlags ? <X className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            </button>
            {showRedFlags && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-4 py-3 bg-background rounded-lg"
              >
                {currentPost.redFlags.length > 0 ? (
                  <ul className="space-y-2">
                    {currentPost.redFlags.map((flag, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Keine offensichtlichen Red Flags gefunden
                  </p>
                )}
              </motion.div>
            )}

            <button
              onClick={() => setShowTechniques(!showTechniques)}
              className="w-full text-left px-4 py-2 bg-background hover:bg-accent rounded-lg transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Verwendete Techniken ({currentPost.techniques.length})
              </span>
              {showTechniques ? <X className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            </button>
            {showTechniques && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-4 py-3 bg-background rounded-lg"
              >
                {currentPost.techniques.length > 0 ? (
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Dieser Post nutzt folgende Persuasions-Techniken:
                    </p>
                    <TechniqueTagList techniqueIds={currentPost.techniques} showLinks={true} />
                  </div>
                ) : (
                  <p className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Keine Manipulations-Techniken erkannt
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Answer Buttons */}
      {!isAnswered ? (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => handleAnswer('disinfo')}
            className="px-6 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <AlertTriangle className="h-5 w-5" />
            Desinformation
          </button>
          <button
            onClick={() => handleAnswer('legit')}
            className="px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            Seriös
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6"
            >
              {/* Result */}
              <div
                className={`p-4 rounded-lg mb-4 ${
                  (selectedPosts[currentPost.id] === 'disinfo' && currentPost.isDisinfo) ||
                  (selectedPosts[currentPost.id] === 'legit' && !currentPost.isDisinfo)
                    ? 'bg-green-500/10 border border-green-500'
                    : 'bg-red-500/10 border border-red-500'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {(selectedPosts[currentPost.id] === 'disinfo' && currentPost.isDisinfo) ||
                  (selectedPosts[currentPost.id] === 'legit' && !currentPost.isDisinfo) ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        Richtig!
                      </span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500" />
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        Falsch!
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm">
                  Dieser Post ist{' '}
                  <strong>{currentPost.isDisinfo ? 'Desinformation' : 'seriös'}</strong>.
                </p>
              </div>

              {/* Explanation */}
              <div className="p-4 bg-muted rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Erklärung:</h4>
                <p className="text-sm">{currentPost.explanation}</p>
              </div>

              {/* Techniques Used */}
              {currentPost.techniques.length > 0 && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                      Verwendete Manipulations-Techniken
                    </h4>
                  </div>
                  <TechniqueTagList techniqueIds={currentPost.techniques} showLinks={true} />
                  <p className="mt-3 text-xs text-muted-foreground">
                    💡 Klicke auf eine Technik, um mehr darüber zu erfahren
                  </p>
                </div>
              )}

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                {currentPostIndex < simulatorPosts.length - 1
                  ? 'Nächster Post'
                  : 'Ergebnis anzeigen'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
