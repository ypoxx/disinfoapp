import { motion } from 'framer-motion';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { calculateCategoryStats, formatCategoryName } from '@/utils/dashboardUtils';
import { TechniqueCategory } from '@/types/persuasion';

interface RadarPoint {
  x: number;
  y: number;
  category: TechniqueCategory;
  value: number;
  label: string;
}

export function CategoryRadarChart() {
  const knowledgeState = useKnowledgeStore();
  const categoryStats = calculateCategoryStats(knowledgeState);

  const size = 400;
  const center = size / 2;
  const maxRadius = size / 2 - 60;
  const categories = categoryStats.length;

  // Calculate points for each category
  const points: RadarPoint[] = categoryStats.map((stat, index) => {
    const angle = (index * 2 * Math.PI) / categories - Math.PI / 2;
    const radius = (stat.averageMastery / 100) * maxRadius;

    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      category: stat.category,
      value: stat.averageMastery,
      label: formatCategoryName(stat.category),
    };
  });

  // Calculate label positions (at full radius)
  const labelPoints = categoryStats.map((stat, index) => {
    const angle = (index * 2 * Math.PI) / categories - Math.PI / 2;
    const labelRadius = maxRadius + 40;

    return {
      x: center + labelRadius * Math.cos(angle),
      y: center + labelRadius * Math.sin(angle),
      label: formatCategoryName(stat.category),
      value: stat.averageMastery,
    };
  });

  // Create path for the filled area
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // Create grid circles
  const gridCircles = [20, 40, 60, 80, 100];

  // Create grid lines from center to each category
  const gridLines = labelPoints.map((p) => ({
    x1: center,
    y1: center,
    x2: center + (maxRadius + 10) * Math.cos(Math.atan2(p.y - center, p.x - center)),
    y2: center + (maxRadius + 10) * Math.sin(Math.atan2(p.y - center, p.x - center)),
  }));

  return (
    <div className="flex flex-col items-center">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-lg"
      >
        {/* Background grid circles */}
        {gridCircles.map((percent) => (
          <circle
            key={percent}
            cx={center}
            cy={center}
            r={(percent / 100) * maxRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground/20"
          />
        ))}

        {/* Grid lines */}
        {gridLines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground/20"
          />
        ))}

        {/* Filled area */}
        <motion.path
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          d={pathData}
          fill="hsl(var(--primary))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />

        {/* Data points */}
        {points.map((point, index) => (
          <motion.g
            key={point.category}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="hsl(var(--primary))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
              className="cursor-pointer transition-all hover:r-8"
            />
            {/* Value label at point */}
            <text
              x={point.x}
              y={point.y - 12}
              textAnchor="middle"
              className="fill-foreground text-xs font-bold"
            >
              {point.value}%
            </text>
          </motion.g>
        ))}

        {/* Category labels */}
        {labelPoints.map((labelPoint, index) => {
          const textAnchor =
            labelPoint.x > center + 10
              ? 'start'
              : labelPoint.x < center - 10
              ? 'end'
              : 'middle';

          return (
            <motion.text
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor={textAnchor}
              className="fill-foreground text-sm font-medium"
            >
              {labelPoint.label}
            </motion.text>
          );
        })}

        {/* Center point */}
        <circle
          cx={center}
          cy={center}
          r="3"
          fill="currentColor"
          className="text-muted-foreground"
        />
      </svg>

      {/* Stats Summary */}
      <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-4 md:grid-cols-3">
        {categoryStats.map((stat) => (
          <div
            key={stat.category}
            className="rounded-lg border bg-card p-4 text-center"
          >
            <div className="mb-1 text-xs text-muted-foreground">
              {formatCategoryName(stat.category)}
            </div>
            <div className="text-2xl font-bold text-primary">
              {stat.averageMastery}%
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {stat.masteredTechniques}/{stat.totalTechniques} gemeistert
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
