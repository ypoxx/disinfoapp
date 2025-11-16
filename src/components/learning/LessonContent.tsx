import { motion } from 'framer-motion';
import { Card } from '@/components/shared/UIComponents';
import { Accordion } from '@/components/shared/Interactive';
import { BookOpen, Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { LessonSection } from '@/types/lessons';

interface LessonContentProps {
  sections: LessonSection[];
  showAsAccordion?: boolean;
}

export function LessonContent({ sections, showAsAccordion = false }: LessonContentProps) {
  const getSectionIcon = (type?: string) => {
    switch (type) {
      case 'info':
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'tip':
        return <Lightbulb className="h-5 w-5 text-green-500" />;
      case 'example':
        return <CheckCircle2 className="h-5 w-5 text-purple-500" />;
      default:
        return null;
    }
  };

  const getSectionBorderColor = (type?: string) => {
    switch (type) {
      case 'info':
        return 'border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/10';
      case 'warning':
        return 'border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10';
      case 'tip':
        return 'border-l-4 border-l-green-500 bg-green-50 dark:bg-green-900/10';
      case 'example':
        return 'border-l-4 border-l-purple-500 bg-purple-50 dark:bg-purple-900/10';
      default:
        return '';
    }
  };

  if (showAsAccordion) {
    return (
      <div>
        {sections.map((section, index) => (
          <Accordion key={section.id} title={section.title} defaultOpen={index === 0}>
            <div className={`rounded-r-lg p-4 ${getSectionBorderColor(section.type)}`}>
              {getSectionIcon(section.type) && (
                <div className="mb-3 flex items-center">
                  {getSectionIcon(section.type)}
                  <span className="ml-2 font-semibold">{section.type?.toUpperCase()}</span>
                </div>
              )}
              <div className="prose dark:prose-invert max-w-none">{section.content}</div>
            </div>
          </Accordion>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={getSectionBorderColor(section.type)}>
            <div className="mb-4 flex items-center">
              {getSectionIcon(section.type)}
              <h3 className={`text-xl font-bold ${getSectionIcon(section.type) ? 'ml-3' : ''}`}>
                {section.title}
              </h3>
            </div>
            <div className="prose dark:prose-invert max-w-none">{section.content}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

interface MediaContentProps {
  type: 'image' | 'video' | 'embed';
  src: string;
  alt?: string;
  caption?: string;
}

export function MediaContent({ type, src, alt, caption }: MediaContentProps) {
  return (
    <div className="my-6">
      {type === 'image' && (
        <figure>
          <img src={src} alt={alt} className="w-full rounded-lg shadow-lg" loading="lazy" />
          {caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      )}

      {type === 'video' && (
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
          <video src={src} controls className="h-full w-full">
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
          {caption && (
            <p className="mt-2 text-center text-sm text-muted-foreground">{caption}</p>
          )}
        </div>
      )}

      {type === 'embed' && (
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={src}
            title={alt}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {caption && (
            <p className="mt-2 text-center text-sm text-muted-foreground">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}
