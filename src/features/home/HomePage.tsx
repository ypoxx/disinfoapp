import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Target, Users, Lightbulb, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { DailyChallengeCard } from '@/components/challenges/DailyChallengeCard';

export function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Desinformation Erkennen',
      description: 'Lerne die Merkmale und Taktiken von Falschinformationen zu identifizieren',
    },
    {
      icon: Brain,
      title: 'Kritisches Denken',
      description: 'Entwickle Fähigkeiten zur Analyse und Bewertung von Informationen',
    },
    {
      icon: Target,
      title: 'Praktische Übungen',
      description: 'Übe mit realen Beispielen in einer sicheren Lernumgebung',
    },
    {
      icon: Users,
      title: 'Gemeinsam Lernen',
      description: 'Tausche dich mit anderen aus und lerne voneinander',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Erkenne Desinformation.
          <br />
          <span className="text-primary">Schütze die Wahrheit.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Lerne in interaktiven Modulen, wie du Fake News erkennst, Fakten checkst und kritisch mit
          Informationen umgehst. Werde zum Experten im Kampf gegen Desinformation.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/modules"
            className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Jetzt Starten
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/progress"
            className="inline-flex items-center rounded-lg border border-input bg-background px-6 py-3 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Mein Fortschritt
          </Link>
        </div>
      </motion.div>

      {/* Daily Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12"
      >
        <DailyChallengeCard />
      </motion.div>

      {/* New Learning Tools */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-12"
      >
        <h2 className="mb-6 text-2xl font-bold">Neue Lernwerkzeuge</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Technique Quiz Card */}
          <Link to="/quiz" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-lg border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-md transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/20 p-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Technik-Quiz</h3>
                  <p className="text-sm text-muted-foreground">Teste dein Wissen</p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Identifiziere Manipulationstechniken in realistischen Szenarien. 10 Fragen mit sofortigem Feedback und detaillierten Erklärungen.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    10 Fragen
                  </span>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    Bis zu 200 XP
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

          {/* Technique Explorer Card */}
          <Link to="/techniques" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-6 shadow-md transition-all hover:border-purple-500/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Technik-Explorer</h3>
                  <p className="text-sm text-muted-foreground">Entdecke alle Techniken</p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Erkunde 28 Persuasions- und Manipulationstechniken mit wissenschaftlichen Erkenntnissen, Beispielen und Gegenmaßnahmen.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-600">
                    28 Techniken
                  </span>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-600">
                    12 Gegenmaßnahmen
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

          {/* Discover Feed Card */}
          <Link to="/discover" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-lg border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-orange-500/5 p-6 shadow-md transition-all hover:border-pink-500/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-pink-500/20 p-3">
                  <Sparkles className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Entdecken</h3>
                  <p className="text-sm text-muted-foreground">TikTok-Style lernen</p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Wische durch Manipulationstechniken wie auf TikTok. Schnell, visuell und unterhaltsam - perfekt für unterwegs.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-600">
                    Vollbild
                  </span>
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-600">
                    Mobile-First
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-pink-600 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
          >
            <feature.icon className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 rounded-lg bg-primary/5 p-8"
      >
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">5</div>
            <div className="text-muted-foreground">Lernmodule</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">28</div>
            <div className="text-muted-foreground">Manipulations-Techniken</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Kostenlos</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
