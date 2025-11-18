import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  AlertTriangle,
  CheckCircle,
  Brain,
  Zap,
  Info,
  Lightbulb,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Button, Card } from '@/components/shared/UIComponents';
import { Alert } from '@/components/shared/Alert';
import { TechniqueTagList } from '@/components/techniques/TechniqueTag';
import { analyzeText, type AnalysisResult } from '@/services/claudeApi';
import {
  canMakeRequest,
  getRemainingRequests,
  incrementUsage,
  getTimeUntilReset,
  getDailyLimit,
} from '@/utils/rateLimiter';

const EXAMPLE_TEXTS = [
  {
    title: 'Nachrichtenartikel',
    text: 'SKANDAL: Politiker verschweigt wichtige Informationen! ALLE müssen das wissen! Teilt diesen Beitrag, bevor er gelöscht wird!',
  },
  {
    title: 'Social Media Post',
    text: 'Laut einer neuen Studie der Universität Oxford verbessert regelmäßiges Lesen die kognitiven Fähigkeiten um durchschnittlich 15%. Die Forscher empfehlen mindestens 30 Minuten täglich.',
  },
  {
    title: 'Werbung',
    text: 'Nur heute! 90% Rabatt! Wenn du JETZT nicht zugreifst, verpasst du die Chance deines Lebens! Alle erfolgreichen Menschen nutzen dieses Produkt!',
  },
];

export function CheckerPage() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const remaining = getRemainingRequests();
  const canAnalyze = canMakeRequest() && text.trim().length > 10;

  const handleAnalyze = async () => {
    if (!canAnalyze) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeText(text);
      setResult(analysis);
      incrementUsage();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExampleClick = (exampleText: string) => {
    setText(exampleText);
    setResult(null);
    setError(null);
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-red-600 dark:text-red-400';
    if (score >= 40) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Hohe Manipulation';
    if (score >= 40) return 'Mittlere Manipulation';
    return 'Geringe Manipulation';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <Brain className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">AI Desinformations-Checker</h1>
        </div>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Analysiere Texte mit KI und erkenne Manipulationstechniken. Der Checker nutzt Claude AI,
          um Persuasions-Techniken zu identifizieren und zu bewerten.
        </p>
      </motion.div>

      {/* Usage Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">
                  Verbleibende Analysen: {remaining} / {getDailyLimit()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Reset in {getTimeUntilReset()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Täglich limitiert
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Input */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <h2 className="mb-4 text-xl font-bold">Text zur Analyse</h2>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Füge hier einen Text ein (max. 2000 Zeichen)..."
                className="mb-4 min-h-[200px] w-full rounded-lg border-2 border-border bg-background p-4 font-mono text-sm focus:border-primary focus:outline-none"
                maxLength={2000}
                disabled={isAnalyzing}
              />

              <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>{text.length} / 2000 Zeichen</span>
                {text.length > 0 && (
                  <button
                    onClick={handleClear}
                    className="text-primary hover:underline"
                    disabled={isAnalyzing}
                  >
                    Löschen
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAnalyze}
                  disabled={!canAnalyze || isAnalyzing}
                  size="lg"
                  className="flex-1"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Analysiere...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Text analysieren
                    </>
                  )}
                </Button>
              </div>

              {!canMakeRequest() && (
                <Alert
                  type="warning"
                  title="Tageslimit erreicht"
                  message={`Du hast heute bereits ${getDailyLimit()} Analysen durchgeführt. Bitte versuche es morgen wieder.`}
                  className="mt-4"
                />
              )}

              {error && (
                <Alert type="error" title="Fehler" message={error} className="mt-4" />
              )}
            </Card>
          </motion.div>
        </div>

        {/* Right Column: Examples */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <h3 className="mb-4 font-bold">Beispiele ausprobieren</h3>
              <div className="space-y-3">
                {EXAMPLE_TEXTS.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example.text)}
                    disabled={isAnalyzing}
                    className="w-full rounded-lg border-2 border-border bg-muted/50 p-3 text-left transition-all hover:border-primary hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <div className="mb-1 font-semibold">{example.title}</div>
                    <div className="line-clamp-2 text-sm text-muted-foreground">
                      {example.text}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <div className="mb-2 flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-100">
                  <Info className="h-4 w-4" />
                  Hinweis
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Die Analyse nutzt Claude AI und ist auf {getDailyLimit()} Anfragen pro Tag
                  limitiert, um API-Kosten zu begrenzen.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6"
          >
            <Card>
              <h2 className="mb-6 text-2xl font-bold">Analyse-Ergebnis</h2>

              {/* Score */}
              <div className="mb-6">
                <div className="mb-2 text-sm font-semibold text-muted-foreground">
                  Manipulations-Score
                </div>
                <div className="flex items-center gap-4">
                  <div className={`text-6xl font-bold ${getScoreColor(result.score)}`}>
                    {result.score}%
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${getScoreColor(result.score)}`}>
                      {getScoreLabel(result.score)}
                    </div>
                    <div className="h-3 w-64 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className={`h-full ${
                          result.score >= 70
                            ? 'bg-red-500'
                            : result.score >= 40
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${result.score}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 rounded-lg bg-muted/50 p-4">
                <h3 className="mb-2 font-bold">Zusammenfassung</h3>
                <p className="text-muted-foreground">{result.summary}</p>
              </div>

              {/* Detected Techniques */}
              {result.techniques.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 flex items-center gap-2 font-bold">
                    <Brain className="h-5 w-5 text-primary" />
                    Erkannte Techniken ({result.techniques.length})
                  </h3>
                  <div className="space-y-3">
                    {result.techniques.map((technique, index) => (
                      <div
                        key={index}
                        className="rounded-lg border-2 border-border bg-background p-4"
                      >
                        <div className="mb-2 flex items-start justify-between">
                          <div className="font-semibold">{technique.name}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <TrendingUp className="h-4 w-4" />
                            {technique.confidence}% sicher
                          </div>
                        </div>
                        <div className="mb-2 rounded bg-muted p-2 text-sm font-mono">
                          "{technique.evidence}"
                        </div>
                        <div className="mt-2">
                          <TechniqueTagList techniqueIds={[technique.id]} showLinks={true} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Red Flags */}
              {result.redFlags.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 flex items-center gap-2 font-bold">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    Red Flags ({result.redFlags.length})
                  </h3>
                  <ul className="space-y-2">
                    {result.redFlags.map((flag, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20"
                      >
                        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600" />
                        <span className="text-sm">{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <div>
                  <h3 className="mb-3 flex items-center gap-2 font-bold">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    Empfehlungen ({result.recommendations.length})
                  </h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
