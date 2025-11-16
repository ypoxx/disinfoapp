import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, Play, Pause } from 'lucide-react';
import { PersuasionTechnique, TechniqueRelationship } from '@/types/persuasion';
import {
  createGraphLayout,
  simulationStep,
  GraphLayout,
  GraphNode,
  GraphEdge,
  getRelationshipColor,
  getCategoryColor,
  applyZoom,
  inverseZoom,
  getConnectedNodes,
} from '@/utils/graphLayout';

interface TechniqueGraphProps {
  techniques: PersuasionTechnique[];
  relationships: TechniqueRelationship[];
  selectedTechniqueId?: string;
  onSelectTechnique?: (technique: PersuasionTechnique) => void;
}

export function TechniqueGraph({
  techniques,
  relationships,
  selectedTechniqueId,
  onSelectTechnique,
}: TechniqueGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<GraphLayout | null>(null);
  const animationRef = useRef<number>();

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [isSimulationRunning, setIsSimulationRunning] = useState(true);
  const [draggedNode, setDraggedNode] = useState<GraphNode | null>(null);

  // Initialize graph layout
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    layoutRef.current = createGraphLayout(techniques, relationships, width, height);

    // Run initial simulation for better layout
    if (layoutRef.current) {
      for (let i = 0; i < 100; i++) {
        simulationStep(layoutRef.current);
      }
    }
  }, [techniques, relationships]);

  // Animation loop
  useEffect(() => {
    if (!isSimulationRunning || !layoutRef.current) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      if (layoutRef.current) {
        simulationStep(layoutRef.current);
        draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSimulationRunning, scale, translate, hoveredNode, selectedTechniqueId]);

  // Drawing function
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const layout = layoutRef.current;
    if (!canvas || !layout) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context state
    ctx.save();

    // Apply zoom and pan
    ctx.translate(translate.x, translate.y);
    ctx.scale(scale, scale);

    // Get connected nodes for highlighting
    const connectedNodes = selectedTechniqueId
      ? getConnectedNodes(selectedTechniqueId, layout.edges)
      : new Set<string>();

    // Draw edges
    layout.edges.forEach((edge) => {
      const source = layout.nodes.get(edge.source);
      const target = layout.nodes.get(edge.target);
      if (!source || !target) return;

      const isHighlighted =
        selectedTechniqueId &&
        (edge.source === selectedTechniqueId || edge.target === selectedTechniqueId);

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.strokeStyle = isHighlighted
        ? getRelationshipColor(edge.type)
        : 'rgba(107, 114, 128, 0.2)';
      ctx.lineWidth = isHighlighted ? 2 : 1;
      ctx.stroke();

      // Draw arrow for directed edges
      if (isHighlighted) {
        const angle = Math.atan2(target.y - source.y, target.x - source.x);
        const arrowSize = 8;
        const distance = Math.sqrt(
          Math.pow(target.x - source.x, 2) + Math.pow(target.y - source.y, 2),
        );
        const arrowPos = {
          x: source.x + ((target.x - source.x) * (distance - 20)) / distance,
          y: source.y + ((target.y - source.y) * (distance - 20)) / distance,
        };

        ctx.beginPath();
        ctx.moveTo(arrowPos.x, arrowPos.y);
        ctx.lineTo(
          arrowPos.x - arrowSize * Math.cos(angle - Math.PI / 6),
          arrowPos.y - arrowSize * Math.sin(angle - Math.PI / 6),
        );
        ctx.lineTo(
          arrowPos.x - arrowSize * Math.cos(angle + Math.PI / 6),
          arrowPos.y - arrowSize * Math.sin(angle + Math.PI / 6),
        );
        ctx.closePath();
        ctx.fillStyle = getRelationshipColor(edge.type);
        ctx.fill();
      }
    });

    // Draw nodes
    layout.nodes.forEach((node) => {
      const isSelected = node.id === selectedTechniqueId;
      const isConnected = connectedNodes.has(node.id);
      const isHovered = hoveredNode?.id === node.id;

      // Node size
      const baseRadius = 8;
      const radius = isSelected ? baseRadius * 1.5 : isHovered ? baseRadius * 1.3 : baseRadius;

      // Node color
      const color = getCategoryColor(node.category);

      // Draw node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);

      if (isSelected) {
        ctx.fillStyle = color;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
      } else if (isConnected || isHovered) {
        ctx.fillStyle = color;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
      } else {
        ctx.fillStyle = selectedTechniqueId ? `${color}40` : color;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
      }

      ctx.fill();
      ctx.stroke();

      // Draw label for selected or hovered nodes
      if (isSelected || isHovered) {
        ctx.font = '12px sans-serif';
        ctx.fillStyle = 'hsl(var(--foreground))';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(node.label, node.x, node.y - radius - 5);
      }
    });

    // Restore context state
    ctx.restore();
  }, [scale, translate, hoveredNode, selectedTechniqueId]);

  // Handle mouse move for hover
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const layout = layoutRef.current;
      if (!canvas || !layout) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Handle panning
      if (isDragging && !draggedNode) {
        setTranslate({
          x: mouseX - dragStart.x,
          y: mouseY - dragStart.y,
        });
        return;
      }

      // Handle node dragging
      if (draggedNode) {
        const graphCoords = inverseZoom(mouseX, mouseY, scale, translate.x, translate.y);
        draggedNode.fx = graphCoords.x;
        draggedNode.fy = graphCoords.y;
        draw();
        return;
      }

      // Check for hovered node
      const graphCoords = inverseZoom(mouseX, mouseY, scale, translate.x, translate.y);

      let found = false;
      layout.nodes.forEach((node) => {
        const dx = node.x - graphCoords.x;
        const dy = node.y - graphCoords.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          setHoveredNode(node);
          found = true;
        }
      });

      if (!found) {
        setHoveredNode(null);
      }
    },
    [isDragging, dragStart, scale, translate, draggedNode, draw],
  );

  // Handle mouse down for dragging
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const layout = layoutRef.current;
      if (!canvas || !layout) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const graphCoords = inverseZoom(mouseX, mouseY, scale, translate.x, translate.y);

      // Check if clicking on a node
      let clickedNode: GraphNode | null = null;
      layout.nodes.forEach((node) => {
        const dx = node.x - graphCoords.x;
        const dy = node.y - graphCoords.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          clickedNode = node;
        }
      });

      if (clickedNode) {
        // Start dragging node
        setDraggedNode(clickedNode);
        clickedNode.fx = clickedNode.x;
        clickedNode.fy = clickedNode.y;
      } else {
        // Start panning
        setIsDragging(true);
        setDragStart({
          x: mouseX - translate.x,
          y: mouseY - translate.y,
        });
      }
    },
    [scale, translate],
  );

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    if (draggedNode) {
      // Release node
      delete draggedNode.fx;
      delete draggedNode.fy;
      setDraggedNode(null);
    }
  }, [draggedNode]);

  // Handle click on node
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (isDragging || draggedNode) return;

      const canvas = canvasRef.current;
      const layout = layoutRef.current;
      if (!canvas || !layout) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const graphCoords = inverseZoom(mouseX, mouseY, scale, translate.x, translate.y);

      // Find clicked node
      layout.nodes.forEach((node) => {
        const dx = node.x - graphCoords.x;
        const dy = node.y - graphCoords.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15 && onSelectTechnique) {
          onSelectTechnique(node.data);
        }
      });
    },
    [isDragging, draggedNode, scale, translate, onSelectTechnique],
  );

  // Zoom controls
  const handleZoomIn = () => setScale((s) => Math.min(s * 1.2, 4));
  const handleZoomOut = () => setScale((s) => Math.max(s / 1.2, 0.25));
  const handleResetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  // Toggle simulation
  const toggleSimulation = () => setIsSimulationRunning((s) => !s);

  // Resize canvas to match container
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      draw();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [draw]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        onMouseLeave={handleMouseUp}
      />

      {/* Controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomIn}
          className="rounded-lg bg-background/90 p-2 shadow-lg backdrop-blur-sm hover:bg-background"
          title="Vergrößern"
        >
          <ZoomIn className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomOut}
          className="rounded-lg bg-background/90 p-2 shadow-lg backdrop-blur-sm hover:bg-background"
          title="Verkleinern"
        >
          <ZoomOut className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResetZoom}
          className="rounded-lg bg-background/90 p-2 shadow-lg backdrop-blur-sm hover:bg-background"
          title="Zurücksetzen"
        >
          <Maximize2 className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSimulation}
          className="rounded-lg bg-background/90 p-2 shadow-lg backdrop-blur-sm hover:bg-background"
          title={isSimulationRunning ? 'Pausieren' : 'Fortsetzen'}
        >
          {isSimulationRunning ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </motion.button>
      </div>

      {/* Hover tooltip */}
      {hoveredNode && !draggedNode && (
        <div className="pointer-events-none absolute left-4 top-4 rounded-lg bg-popover p-3 text-popover-foreground shadow-lg">
          <div className="font-semibold">{hoveredNode.label}</div>
          <div className="text-xs text-muted-foreground">
            {hoveredNode.category.replace('_', ' ')}
          </div>
          <div className="mt-1 text-xs">Klicken für Details</div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 rounded-lg bg-background/90 p-3 shadow-lg backdrop-blur-sm">
        <div className="mb-2 text-sm font-semibold">Kategorien</div>
        <div className="space-y-1">
          {[
            { category: 'cognitive_bias', label: 'Kognitive Verzerrungen' },
            { category: 'social_dynamics', label: 'Soziale Dynamik' },
            { category: 'logical_fallacy', label: 'Logische Fehlschlüsse' },
            { category: 'emotional_manipulation', label: 'Emotionale Manipulation' },
            { category: 'nlp', label: 'NLP' },
            { category: 'digital_influence', label: 'Digitale Beeinflussung' },
          ].map((item) => (
            <div key={item.category} className="flex items-center gap-2 text-xs">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getCategoryColor(item.category) }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
