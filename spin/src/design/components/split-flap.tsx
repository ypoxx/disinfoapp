import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useReducedMotion } from 'framer-motion';

interface SplitFlapProps {
  /** Target value (integer, e.g. Mastery Rating 0-100) */
  value: number;
  /** Minimum number of digits (pads with leading zeros removed → use 2 for 0-99) */
  digits?: number;
  size?: 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
}

const sizeClasses = {
  md: 'text-[2.5rem] w-[2.1rem]',
  lg: 'text-[4.5rem] w-[3.6rem]',
};

/**
 * Split-flap departure board digits (Space Mono) — the Poster Logic hero
 * numeral. Counts up mechanically through intermediate values; each digit
 * change flips like a station board flap. Reduced motion renders statically.
 */
export function SplitFlap({ value, digits = 2, size = 'lg', className = '', ...aria }: SplitFlapProps) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const from = started.current ? display : 0;
    started.current = true;
    const controls = animate(from, value, {
      duration: 1.4,
      ease: [0.9, 0, 0.1, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduceMotion]);

  const chars = String(Math.max(0, display)).padStart(digits, '0').split('');

  return (
    <div className={`flex gap-1 ${className}`} role="img" {...aria}>
      {chars.map((char, i) => (
        <span
          key={i}
          className={`
            relative inline-flex items-center justify-center overflow-hidden
            bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]
            mono-num font-bold leading-none rounded-[var(--radius-md)]
            ${sizeClasses[size]} aspect-[3/4]
          `.trim()}
          style={{ perspective: 300 }}
        >
          {/* horizontal split line */}
          <span className="absolute left-0 right-0 top-1/2 h-px bg-[var(--color-bg)] opacity-40 z-10" />
          {/* side hinges */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-2 bg-[var(--color-bg)] opacity-40 z-10" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-2 bg-[var(--color-bg)] opacity-40 z-10" />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={char}
              initial={reduceMotion ? false : { rotateX: -85, opacity: 0.4 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { rotateX: 85, opacity: 0 }}
              transition={{ duration: 0.14, ease: 'linear' }}
              style={{ transformOrigin: 'center center', backfaceVisibility: 'hidden' }}
              className="block"
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </div>
  );
}
