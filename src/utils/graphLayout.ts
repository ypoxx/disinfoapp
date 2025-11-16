import { PersuasionTechnique, TechniqueRelationship } from '@/types/persuasion';

export interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number; // velocity x
  vy: number; // velocity y
  fx?: number; // fixed x (for dragging)
  fy?: number; // fixed y (for dragging)
  category: string;
  data: PersuasionTechnique;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: string;
  strength: number;
  data: TechniqueRelationship;
}

export interface GraphLayout {
  nodes: Map<string, GraphNode>;
  edges: GraphEdge[];
  width: number;
  height: number;
}

/**
 * Create a graph layout from techniques and relationships
 */
export function createGraphLayout(
  techniques: PersuasionTechnique[],
  relationships: TechniqueRelationship[],
  width: number,
  height: number,
): GraphLayout {
  const nodes = new Map<string, GraphNode>();

  // Initialize nodes with random positions
  techniques.forEach((technique) => {
    nodes.set(technique.id, {
      id: technique.id,
      label: technique.name.de,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      category: technique.category,
      data: technique,
    });
  });

  // Create edges
  const edges: GraphEdge[] = relationships.map((rel) => ({
    source: rel.source,
    target: rel.target,
    type: rel.type,
    strength: rel.strength,
    data: rel,
  }));

  return {
    nodes,
    edges,
    width,
    height,
  };
}

/**
 * Force-directed layout simulation step
 * Based on a simplified version of D3's force simulation
 */
export function simulationStep(
  layout: GraphLayout,
  options: {
    chargeStrength?: number;
    linkDistance?: number;
    linkStrength?: number;
    centerStrength?: number;
    velocityDecay?: number;
  } = {},
): void {
  const {
    chargeStrength = -300,
    linkDistance = 100,
    linkStrength = 0.1,
    centerStrength = 0.05,
    velocityDecay = 0.4,
  } = options;

  const centerX = layout.width / 2;
  const centerY = layout.height / 2;

  // Apply forces to each node
  layout.nodes.forEach((node) => {
    if (node.fx !== undefined && node.fy !== undefined) {
      // Node is fixed (being dragged)
      node.x = node.fx;
      node.y = node.fy;
      return;
    }

    // Center force - pull nodes toward center
    const dx = centerX - node.x;
    const dy = centerY - node.y;
    node.vx += dx * centerStrength;
    node.vy += dy * centerStrength;

    // Charge force - repel all nodes from each other
    layout.nodes.forEach((other) => {
      if (node.id === other.id) return;

      const dx = other.x - node.x;
      const dy = other.y - node.y;
      const distanceSquared = dx * dx + dy * dy;
      const distance = Math.sqrt(distanceSquared);

      if (distance < 1) return; // Avoid division by zero

      // Apply repulsive force
      const force = (chargeStrength / distanceSquared) * 100;
      node.vx -= (dx / distance) * force;
      node.vy -= (dy / distance) * force;
    });
  });

  // Link force - attract connected nodes
  layout.edges.forEach((edge) => {
    const source = layout.nodes.get(edge.source);
    const target = layout.nodes.get(edge.target);

    if (!source || !target) return;

    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 1) return;

    // Calculate force based on desired link distance
    const force = ((distance - linkDistance) / distance) * linkStrength * edge.strength;

    const fx = dx * force;
    const fy = dy * force;

    if (source.fx === undefined && source.fy === undefined) {
      source.vx += fx;
      source.vy += fy;
    }

    if (target.fx === undefined && target.fy === undefined) {
      target.vx -= fx;
      target.vy -= fy;
    }
  });

  // Update positions and apply velocity decay
  layout.nodes.forEach((node) => {
    if (node.fx !== undefined && node.fy !== undefined) {
      return; // Don't update fixed nodes
    }

    node.vx *= velocityDecay;
    node.vy *= velocityDecay;

    node.x += node.vx;
    node.y += node.vy;

    // Keep nodes within bounds with padding
    const padding = 50;
    node.x = Math.max(padding, Math.min(layout.width - padding, node.x));
    node.y = Math.max(padding, Math.min(layout.height - padding, node.y));
  });
}

/**
 * Run the simulation for a number of iterations
 */
export function runSimulation(
  layout: GraphLayout,
  iterations: number = 100,
  options?: Parameters<typeof simulationStep>[1],
): void {
  for (let i = 0; i < iterations; i++) {
    simulationStep(layout, options);
  }
}

/**
 * Get the relationship type color
 */
export function getRelationshipColor(type: string): string {
  const colors: Record<string, string> = {
    complementary: '#3b82f6', // blue
    enhancement: '#10b981', // green
    sequential: '#f59e0b', // orange
    reinforcement: '#8b5cf6', // purple
    causal: '#ef4444', // red
    similar: '#06b6d4', // cyan
    amplification: '#ec4899', // pink
    subtype: '#6366f1', // indigo
    subset: '#14b8a6', // teal
    contrast: '#f97316', // orange-red
    precision: '#84cc16', // lime
    trigger: '#f43f5e', // rose
  };

  return colors[type] || '#6b7280'; // default gray
}

/**
 * Get category color for nodes
 */
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    cognitive_bias: '#3b82f6', // blue
    social_dynamics: '#10b981', // green
    logical_fallacy: '#ef4444', // red
    emotional_manipulation: '#f59e0b', // orange
    nlp: '#8b5cf6', // purple
    digital_influence: '#06b6d4', // cyan
  };

  return colors[category] || '#6b7280'; // default gray
}

/**
 * Calculate zoom transform
 */
export function applyZoom(
  x: number,
  y: number,
  scale: number,
  translateX: number,
  translateY: number,
): { x: number; y: number } {
  return {
    x: x * scale + translateX,
    y: y * scale + translateY,
  };
}

/**
 * Calculate inverse zoom transform (screen to graph coordinates)
 */
export function inverseZoom(
  screenX: number,
  screenY: number,
  scale: number,
  translateX: number,
  translateY: number,
): { x: number; y: number } {
  return {
    x: (screenX - translateX) / scale,
    y: (screenY - translateY) / scale,
  };
}

/**
 * Find connected nodes
 */
export function getConnectedNodes(nodeId: string, edges: GraphEdge[]): Set<string> {
  const connected = new Set<string>();

  edges.forEach((edge) => {
    if (edge.source === nodeId) {
      connected.add(edge.target);
    } else if (edge.target === nodeId) {
      connected.add(edge.source);
    }
  });

  return connected;
}

/**
 * Calculate node degree (number of connections)
 */
export function getNodeDegree(nodeId: string, edges: GraphEdge[]): number {
  return edges.filter((edge) => edge.source === nodeId || edge.target === nodeId).length;
}
