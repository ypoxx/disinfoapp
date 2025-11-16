import { motion } from 'framer-motion';
import { Clock, TrendingUp, Award, Target } from 'lucide-react';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { buildLearningTimeline, LearningTimelineEvent } from '@/utils/dashboardUtils';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';

function getEventIcon(eventType: LearningTimelineEvent['eventType']) {
  switch (eventType) {
    case 'first_encounter':
      return Target;
    case 'mastery_gained':
      return Award;
    case 'practice':
      return TrendingUp;
    default:
      return Clock;
  }
}

function getEventColor(eventType: LearningTimelineEvent['eventType']) {
  switch (eventType) {
    case 'first_encounter':
      return 'text-blue-500';
    case 'mastery_gained':
      return 'text-yellow-500';
    case 'practice':
      return 'text-primary';
    default:
      return 'text-muted-foreground';
  }
}

function getEventLabel(eventType: LearningTimelineEvent['eventType']) {
  switch (eventType) {
    case 'first_encounter':
      return 'Erste Begegnung';
    case 'mastery_gained':
      return 'Gemeistert';
    case 'practice':
      return 'Geübt';
    default:
      return 'Aktivität';
  }
}

export function LearningTimeline() {
  const knowledgeState = useKnowledgeStore();
  const timeline = buildLearningTimeline(knowledgeState);

  if (timeline.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
        <Clock className="mb-4 h-12 w-12 text-muted-foreground/50" />
        <h3 className="mb-2 text-lg font-semibold">Noch keine Aktivität</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Beginne mit dem Lernen, um deine Fortschritte hier zu sehen.
        </p>
        <Link
          to="/quiz"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Quiz starten
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Letzte Aktivitäten</h3>
        <span className="text-sm text-muted-foreground">
          {timeline.length} Ereignisse
        </span>
      </div>

      <div className="relative space-y-4">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

        {timeline.map((event, index) => {
          const Icon = getEventIcon(event.eventType);
          const colorClass = getEventColor(event.eventType);
          const label = getEventLabel(event.eventType);

          return (
            <motion.div
              key={`${event.techniqueId}-${event.eventType}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative flex gap-4 pl-12"
            >
              {/* Icon */}
              <div
                className={`absolute left-0 rounded-full border-4 border-background bg-card p-2 ${colorClass}`}
              >
                <Icon className="h-4 w-4" />
              </div>

              {/* Content */}
              <Link
                to={`/techniques?id=${event.techniqueId}`}
                className="group flex-1"
              >
                <div className="rounded-lg border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium group-hover:text-primary">
                        {event.techniqueName}
                      </h4>
                      <p className={`text-sm ${colorClass}`}>{label}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {event.masteryLevel}%
                      </div>
                      <div className="text-xs text-muted-foreground">Mastery</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {formatDistanceToNow(event.date, {
                      addSuffix: true,
                      locale: de,
                    })}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Show more hint */}
      {timeline.length >= 20 && (
        <div className="pt-4 text-center text-sm text-muted-foreground">
          Zeige die letzten 20 Aktivitäten
        </div>
      )}
    </div>
  );
}
