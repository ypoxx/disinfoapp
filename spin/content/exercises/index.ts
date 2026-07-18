export { quickChecks } from './quick-checks';
export { techniqueMatches } from './technique-matches';
export { responseChoices } from './response-choices';
export { spotTheFlags } from './spot-the-flags';
export { fillBlanks } from './fill-blanks';
export { quizBank } from './quiz-bank';
export { waveR2 } from './wave-r2';

import type { Exercise } from '../types';
import { quickChecks } from './quick-checks';
import { techniqueMatches } from './technique-matches';
import { responseChoices } from './response-choices';
import { spotTheFlags } from './spot-the-flags';
import { fillBlanks } from './fill-blanks';
import { quizBank } from './quiz-bank';
import { waveR2 } from './wave-r2';

/** All exercises combined into a single array */
export const exercises: Exercise[] = [
  ...quickChecks,
  ...techniqueMatches,
  ...responseChoices,
  ...spotTheFlags,
  ...fillBlanks,
  ...quizBank,
  ...waveR2,
];
