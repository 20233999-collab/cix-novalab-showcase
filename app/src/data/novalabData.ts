// Datos oficiales 100% auditados del Caso BCP / NovaLab

export interface QuarterlyData {
  quarter: string;
  periodLabel: string;
  launched: number;
  goal: number;
  cycleTimeDays: number;
  conclusiveCount: number;
  conclusivePct: number;
  documentedCount: number;
  documentedPct: number;
}

export const QUARTERLY_DATA: QuarterlyData[] = [
  {
    quarter: "T1",
    periodLabel: "Primer Trimestre",
    launched: 14,
    goal: 15,
    cycleTimeDays: 38,
    conclusiveCount: 9,
    conclusivePct: 64,
    documentedCount: 7,
    documentedPct: 50,
  },
  {
    quarter: "T2",
    periodLabel: "Segundo Trimestre",
    launched: 12,
    goal: 15,
    cycleTimeDays: 44,
    conclusiveCount: 7,
    conclusivePct: 58,
    documentedCount: 5,
    documentedPct: 42,
  },
  {
    quarter: "T3",
    periodLabel: "Tercer Trimestre",
    launched: 10,
    goal: 15,
    cycleTimeDays: 51,
    conclusiveCount: 5,
    conclusivePct: 50,
    documentedCount: 3,
    documentedPct: 30,
  },
  {
    quarter: "T4",
    periodLabel: "Cuarto Trimestre",
    launched: 8,
    goal: 15,
    cycleTimeDays: 57,
    conclusiveCount: 4,
    conclusivePct: 50,
    documentedCount: 2,
    documentedPct: 25,
  },
];

export interface LabPerformance {
  id: string;
  name: string;
  category: string;
  launched: number;
  cycleTimeAvg: number;
  observedCount: number;
  observedPct: number;
  conclusiveCount: number;
  conclusivePct: number;
  documentedCount: number;
  documentedPct: number;
  isBenchmark: boolean;
  benchmarkBadge?: string;
  notes: string;
}

export const LABS_DATA: LabPerformance[] = [
  {
    id: "pagos",
    name: "Pagos",
    category: "Wallets & Checkout",
    launched: 14,
    cycleTimeAvg: 36,
    observedCount: 4,
    observedPct: 29,
    conclusiveCount: 11,
    conclusivePct: 79,
    documentedCount: 10,
    documentedPct: 71,
    isBenchmark: true,
    benchmarkBadge: "Benchmark Aislado",
    notes: "Crearon plantilla interna preventiva. Tasa de retrabajo 2.7x menor que el promedio.",
  },
  {
    id: "inversiones",
    name: "Inversiones",
    category: "Wealth & Savings",
    launched: 11,
    cycleTimeAvg: 49,
    observedCount: 8,
    observedPct: 73,
    conclusiveCount: 5,
    conclusivePct: 45,
    documentedCount: 3,
    documentedPct: 27,
    isBenchmark: false,
    notes: "Métricas definidas sobre la marcha. 73% de experimentos observados por control.",
  },
  {
    id: "pymes",
    name: "Pymes",
    category: "Business Banking",
    launched: 10,
    cycleTimeAvg: 52,
    observedCount: 8,
    observedPct: 80,
    conclusiveCount: 4,
    conclusivePct: 40,
    documentedCount: 2,
    documentedPct: 20,
    isBenchmark: false,
    notes: "80% de tasa de retrabajo. Solo 20% de aprendizajes registrados.",
  },
  {
    id: "seguros",
    name: "Seguros",
    category: "Protection & Insurtech",
    launched: 9,
    cycleTimeAvg: 51,
    observedCount: 7,
    observedPct: 78,
    conclusiveCount: 5,
    conclusivePct: 56,
    documentedCount: 2,
    documentedPct: 22,
    isBenchmark: false,
    notes: "Duplicación de pruebas con Pymes por falta de visibilidad transversal.",
  },
];

export const MACRO_METRICS = {
  totalLaunched: 44,
  goalCommitted: 60,
  deficitPct: 26.7, // (60 - 44) / 60
  throughputDropPct: 42.8, // (14 - 8) / 14
  cycleTimeT1: 38,
  cycleTimeT4: 57,
  cycleTimeIncreasePct: 50.0, // (57 - 38) / 38
  cycleTimeAnnualAvg: 46,
  backlogChokeIdeas: 23,
  observedTotalPct: 61, // 27 / 44
  unobservedDaysAvg: 8,
  observedDaysAvg: 20,
  approvalDelayIncreasePct: 150, // (20 - 8) / 8
  conclusiveAnnualAvgPct: 57, // 25 / 44
  documentedAnnualAvgPct: 39, // 17 / 44
};
