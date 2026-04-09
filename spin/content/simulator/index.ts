import type { SimulatorPost } from '../types';
import { simulatorPosts as basePosts } from './posts';
import { corporatePosts } from './posts-corporate';
import { politicalPosts } from './posts-political';
import { digitalPosts } from './posts-digital';

/** All simulator posts combined (58 total) */
export const allSimulatorPosts: SimulatorPost[] = [
  ...basePosts,
  ...corporatePosts,
  ...politicalPosts,
  ...digitalPosts,
];

export { basePosts, corporatePosts, politicalPosts, digitalPosts };
