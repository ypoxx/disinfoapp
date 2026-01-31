import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Target, Users, Lightbulb, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DailyChallengeCard } from '@/components/challenges/DailyChallengeCard';

export function HomePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'home.features.recognize.title',
      descriptionKey: 'home.features.recognize.description',
    },
    {
      icon: Brain,
      titleKey: 'home.features.thinking.title',
      descriptionKey: 'home.features.thinking.description',
    },
    {
      icon: Target,
      titleKey: 'home.features.practice.title',
      descriptionKey: 'home.features.practice.description',
    },
    {
      icon: Users,
      titleKey: 'home.features.community.title',
      descriptionKey: 'home.features.community.description',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 shadow-lg"
        >
          <Shield className="h-10 w-10 text-primary" />
        </motion.div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t('home.hero.title1')}
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('home.hero.title2')}
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/modules"
            className="group inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-hovered hover:shadow-xl hover:-translate-y-0.5"
          >
            {t('home.cta.start')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/progress"
            className="inline-flex items-center rounded-lg border-2 border-border bg-background px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-primary hover:bg-accent hover:text-accent-foreground"
          >
            {t('home.cta.myProgress')}
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
        className="mt-16"
      >
        <h2 className="mb-8 text-2xl font-bold">{t('home.newTools.title')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Technique Quiz Card */}
          <Link to="/quiz" className="group">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 shadow-md transition-all hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-primary/20 p-3 transition-transform group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('home.newTools.quiz.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.newTools.quiz.subtitle')}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {t('home.newTools.quiz.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {t('home.newTools.quiz.questions')}
                  </span>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {t('home.newTools.quiz.xp')}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

          {/* Technique Explorer Card */}
          <Link to="/techniques" className="group">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-6 shadow-md transition-all hover:border-purple-500/40 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-purple-500/20 p-3 transition-transform group-hover:scale-110">
                  <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('home.newTools.explorer.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.newTools.explorer.subtitle')}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {t('home.newTools.explorer.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                    {t('home.newTools.explorer.techniques')}
                  </span>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                    {t('home.newTools.explorer.countermeasures')}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

          {/* Discover Feed Card */}
          <Link to="/discover" className="group md:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-orange-500/5 to-transparent p-6 shadow-md transition-all hover:border-pink-500/40 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-pink-500/20 p-3 transition-transform group-hover:scale-110">
                  <Sparkles className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('home.newTools.discover.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.newTools.discover.subtitle')}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {t('home.newTools.discover.description')}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-600 dark:text-pink-400">
                    {t('home.newTools.discover.swipe')}
                  </span>
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-600 dark:text-pink-400">
                    {t('home.newTools.discover.fullscreen')}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-pink-600 dark:text-pink-400 transition-transform group-hover:translate-x-1" />
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
        className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.titleKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-transform group-hover:scale-110">
              <feature.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{t(feature.titleKey)}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{t(feature.descriptionKey)}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 shadow-inner"
      >
        <div className="grid gap-8 text-center md:grid-cols-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="mb-2 text-5xl font-bold text-primary">5</div>
            <div className="text-sm font-medium text-muted-foreground">{t('home.stats.modules')}</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="mb-2 text-5xl font-bold text-primary">28</div>
            <div className="text-sm font-medium text-muted-foreground">{t('home.stats.techniques')}</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="mb-2 text-5xl font-bold text-primary">100%</div>
            <div className="text-sm font-medium text-muted-foreground">{t('home.stats.free')}</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
