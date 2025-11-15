import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export function QuizPage() {
  const { moduleId } = useParams();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold">Modul: {moduleId}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Quiz und interaktive Übungen werden hier implementiert.
        </p>

        <div className="rounded-lg border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            Diese Seite wird in Phase 2 mit Quiz-Funktionalität erweitert.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
