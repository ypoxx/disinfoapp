import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Target, Users } from 'lucide-react';
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
            <div className="mb-2 text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Interaktive Übungen</div>
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
