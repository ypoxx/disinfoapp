import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Award, Info } from 'lucide-react';
import { SocialMediaSimulator } from '@/components/simulator/SocialMediaSimulator';
import { useProgressStore } from '@/stores/progressStore';

export function SimulatorPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const { addXP } = useProgressStore();

  const handleComplete = (score: number) => {
    // Award XP based on score
    const xpEarned = Math.round((score / 100) * 150);
    addXP(xpEarned);
  };

  if (!hasStarted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Smartphone className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Social Media Simulator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Teste deine Fähigkeiten in einer realistischen Social-Media-Umgebung
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Realistische Posts</h3>
              <p className="text-sm text-muted-foreground">
                Echte Beispiele von Desinformation und seriösen Quellen
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-semibold mb-2">Analyse-Tools</h3>
              <p className="text-sm text-muted-foreground">
                Nutze Werkzeuge, um Red Flags zu identifizieren
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold mb-2">Sofortiges Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Lerne aus detaillierten Erklärungen zu jedem Post
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-muted/50 rounded-lg p-6 border">
            <div className="flex items-start gap-3 mb-4">
              <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">So funktioniert's:</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">1.</span>
                    <span>
                      Du siehst verschiedene Social-Media-Posts, die entweder Desinformation oder
                      seriöse Inhalte enthalten
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">2.</span>
                    <span>
                      Nutze die Analyse-Tools, um Red Flags zu identifizieren und den Post zu
                      bewerten
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">3.</span>
                    <span>
                      Entscheide, ob der Post Desinformation ist oder von einer seriösen Quelle
                      stammt
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">4.</span>
                    <span>
                      Erhalte sofortiges Feedback mit detaillierten Erklärungen zu deiner Antwort
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-lg">Belohnungen</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Verdiene bis zu 150 XP basierend auf deiner Leistung:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-background/50 rounded-lg p-3 text-center">
                <div className="font-bold text-lg text-green-500">100%</div>
                <div className="text-muted-foreground">150 XP</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3 text-center">
                <div className="font-bold text-lg text-blue-500">80%+</div>
                <div className="text-muted-foreground">120 XP</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3 text-center">
                <div className="font-bold text-lg text-yellow-500">60%+</div>
                <div className="text-muted-foreground">90 XP</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3 text-center">
                <div className="font-bold text-lg text-orange-500">&lt;60%</div>
                <div className="text-muted-foreground">Noch üben!</div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Simulation starten
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button
          onClick={() => setHasStarted(false)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Zurück zur Übersicht
        </button>
      </div>
      <SocialMediaSimulator onComplete={handleComplete} />
    </div>
  );
}
