/**
 * TYPE DEFINITIONS
 *
 * These describe the shape of our data. TypeScript uses them to catch mistakes
 * before the code runs — like a spell checker but for data structures.
 */

export interface Signal {
  title: string;
  description: string;
  nodes: string[];
  nodeNames: string[];
  source: string;
  view: "builder" | "strategic" | "both";
}

export interface Brief {
  date: string;
  scanTime: string;
  signalsTotal: number;
  signalsNotable: number;
  signalsSignificant: number;
  signalsBreakthrough: number;
  nodesUpdated: number;
  breakthrough: Signal[];
  significant: Signal[];
  notable: Signal[];
}

export interface ForceChain {
  id: string;
  title: string;
  origin: string;
  targets: string[];
  mechanism: string;
  direction: string;
  strength: string;
  lag: string;
  status: string;
  dateIdentified: string;
}

export interface Convergence {
  id: string;
  title: string;
  confidence: string;
  predictedOutcome: string;
  timeline: string;
  forces: Array<{ description: string; origin: string; strength: string }>;
  invalidation: string;
}

export interface Bottleneck {
  id: string;
  title: string;
  type: string;
  status: string;
  blocks: string[];
  attackers: number;
  looseningSignals: number;
  summary: string;
}

export interface VelocityMetric {
  id: string;
  metric: string;
  currentValue: string;
  date: string;
  velocity: string;
  acceleration: string;
  category: string;
}

export interface Prediction {
  id: string;
  title: string;
  confidence: string;
  checkDate: string;
  basedOn: string;
}

export interface RadarNode {
  id: string;
  name: string;
  status: string;
  currentState: string;
  lastUpdated: string;
}

export interface RippleChain {
  title: string;
  mechanism: string;
  direction: string;
  strength: string;
  targets: string[];
}

export interface RippleConvergence {
  title: string;
  confidence: string;
  predictedOutcome: string;
  timeline: string;
}

export interface RippleBottleneck {
  title: string;
  status: string;
  summary: string;
}

export interface RipplePrediction {
  title: string;
  confidence: string;
  checkDate: string;
}

export interface Ripple {
  chains: RippleChain[];
  convergences: RippleConvergence[];
  bottlenecks: RippleBottleneck[];
  predictions: RipplePrediction[];
}

export interface RadarData {
  lastUpdated: string;
  brief: Brief;
  forceChains: ForceChain[];
  convergences: Convergence[];
  bottlenecks: Bottleneck[];
  velocity: VelocityMetric[];
  predictions: Prediction[];
  nodes: RadarNode[];
  nodeNames: Record<string, string>;
  ripples: {
    significant: Record<number, Ripple>;
    notable: Record<number, Ripple>;
  };
}

export type ViewFilter = "all" | "builder" | "strategic";
