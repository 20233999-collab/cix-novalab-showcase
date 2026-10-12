import { useState } from "react";
import { Database, HelpCircle, Globe, Lightbulb } from "lucide-react";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";
import { HeroSectionDatos } from "./components/page1-datos/HeroSectionDatos";
import { ParetoPrincipleSection } from "./components/page1-datos/ParetoPrincipleSection";
import { QuarterlyTimelineSection } from "./components/page1-datos/QuarterlyTimelineSection";
import { ApprovalsBottleneckSection } from "./components/page1-datos/ApprovalsBottleneckSection";
import { DefectiveInputParetoSection } from "./components/page1-datos/DefectiveInputParetoSection";
import { NarrativeBridgeParetoToP3 } from "./components/page1-datos/NarrativeBridgeParetoToP3";
import { NarrativeBridgeP3ToP2 } from "./components/page1-datos/NarrativeBridgeP3ToP2";
import { NarrativeBridgeP2ToP1 } from "./components/page1-datos/NarrativeBridgeP2ToP1";
import { ParetoRecapMatrixSection } from "./components/page1-datos/ParetoRecapMatrixSection";
import { HeroSectionPorQue } from "./components/page2-por-que/HeroSectionPorQue";
import { QualitativeProblem1Section } from "./components/page2-por-que/QualitativeProblem1Section";
import { QualitativeProblem2Section } from "./components/page2-por-que/QualitativeProblem2Section";
import { QualitativeProblem3Section } from "./components/page2-por-que/QualitativeProblem3Section";
import { CausalChainFiveWhysSection } from "./components/page2-por-que/CausalChainFiveWhysSection";
import { HeroSectionBenchmarks } from "./components/page3-benchmarks/HeroSectionBenchmarks";
import { BenchmarkMatrixComparisonSection } from "./components/page3-benchmarks/BenchmarkMatrixComparisonSection";
import { FastTrackComplianceSection } from "./components/page3-benchmarks/FastTrackComplianceSection";
import { NubankDbsProductOpsSection } from "./components/page3-benchmarks/NubankDbsProductOpsSection";
import { SpotifyConfidenceSection } from "./components/page3-benchmarks/SpotifyConfidenceSection";
import { AirbnbKnowledgeRAGSection } from "./components/page3-benchmarks/AirbnbKnowledgeRAGSection";
import { TechEcoclusteringSection } from "./components/page3-benchmarks/TechEcoclusteringSection";
import { BenchmarkRoadmapGatewaySection } from "./components/page3-benchmarks/BenchmarkRoadmapGatewaySection";
import { HeroSectionPropuesta } from "./components/page4-propuesta/HeroSectionPropuesta";
import { SmartExperimentCanvasSection } from "./components/page4-propuesta/SmartExperimentCanvasSection";
import { FastTrackGovernanceSection } from "./components/page4-propuesta/FastTrackGovernanceSection";
import { ProductOpsControlCenterSection } from "./components/page4-propuesta/ProductOpsControlCenterSection";
import { RoadmapMvpEvolutionSection } from "./components/page4-propuesta/RoadmapMvpEvolutionSection";
import { ExecutivePitchCloseSection } from "./components/page4-propuesta/ExecutivePitchCloseSection";

export function App() {
  const [activeTab, setActiveTab] = useState<string>("datos");

  const navItems: NavItem[] = [
    { id: "datos", name: "01. DATOS", icon: Database },
    { id: "por-que", name: "02. ¿POR QUÉ?", icon: HelpCircle },
    { id: "otros-equipos", name: "03. BENCHMARKS", icon: Globe },
    { id: "propuesta", name: "04. LA PROPUESTA", icon: Lightbulb },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#080B1A] text-white relative flex flex-col justify-between">
        
        {/* Tubelight Navigation Bar */}
        <NavBar items={navItems} activeTab={activeTab} onTabChange={handleTabChange} />

        {/* CONTENIDO DE LA PÁGINA 1: DATOS */}
        {activeTab === "datos" ? (
          <main className="w-full">
            {/* 1. Hero Cinemático + Transición Fluida + Telemetría Macro + Frase Diagnóstico */}
            <HeroSectionDatos />

            {/* 2. Sección Naranja de Alto Impacto: Principio de Pareto (80/20) con Balanza Interactiva */}
            <ParetoPrincipleSection />

            {/* PUENTE NARRATIVO 1: De Pareto al Síntoma en el final del ciclo */}
            <NarrativeBridgeParetoToP3 />

            {/* 3. Diagnóstico 1: Amnesia Institucional y Fuga de Aprendizajes (Problema 3) */}
            <QuarterlyTimelineSection />

            {/* PUENTE NARRATIVO 2: De la Amnesia al Cuello de Botella Físico */}
            <NarrativeBridgeP3ToP2 />

            {/* 4. Diagnóstico 2: Cuello de Botella en Aprobaciones y Flujo en Cascada (Problema 2) */}
            <ApprovalsBottleneckSection />

            {/* PUENTE NARRATIVO 3: El Clímax / "El cuello de botella no nace en el control..." */}
            <NarrativeBridgeP2ToP1 />

            {/* 5. EL CLÍMAX - Diagnóstico 1 (Palanca Pareto): Ausencia de Estandarización y Entrada Defectuosa (Problema 1) */}
            <DefectiveInputParetoSection />

            {/* 6. CONCLUSIONES & RECAPITULACIÓN PARETO 80/20 + FRASE DE DEMING + CTA A "¿POR QUÉ?" */}
            <ParetoRecapMatrixSection onNavigateToNextPage={() => handleTabChange("por-que")} />
          </main>
        ) : activeTab === "por-que" ? (
          <main className="w-full">
            {/* 1. Hero Cinemático: Ciencias del Comportamiento & Radar de Sesgos */}
            <HeroSectionPorQue />

            {/* 2. PROBLEMA 1 (LA PALANCA PARETO): Evidencia Cualitativa, Falla Estructural y Smart Intake */}
            <QualitativeProblem1Section />

            {/* 3. PROBLEMA 2: Cuello de Botella en Aprobaciones y Flujo en Cascada */}
            <QualitativeProblem2Section />

            {/* 4. PROBLEMA 3: Amnesia Institucional y Fuga de Aprendizajes */}
            <QualitativeProblem3Section />

            {/* 5. DIAGNÓSTICO PROFUNDO: Cadena de Causalidad (Los 5 Porqués) + Gateway a Benchmarks */}
            <CausalChainFiveWhysSection onNavigateToPage3={() => handleTabChange("otros-equipos")} />
          </main>
        ) : activeTab === "otros-equipos" ? (
          <main className="w-full">
            {/* 1. Hero Cinemático: Radar Global de 6 Hubs */}
            <HeroSectionBenchmarks />

            {/* 2. Matriz Comparativa: NovaLab vs Estándar Global */}
            <BenchmarkMatrixComparisonSection />

            {/* 3. EJE 1: Fast-Track & Compliance-as-Code (Capital One & BBVA) */}
            <FastTrackComplianceSection />

            {/* 4. EJE 2: Product Operations & El Fin de los Silos (Nubank & DBS Bank) */}
            <NubankDbsProductOpsSection />

            {/* 5. EJE 3: Spotify Confidence (Salt Machine, Learning Rate & Guardrails) */}
            <SpotifyConfidenceSection />

            {/* 6. EJE 4: Airbnb Knowledge Repo & RAG (Memoria Viva & Gating) */}
            <AirbnbKnowledgeRAGSection />

            {/* 7. ECOCLUSTERING TECNOLÓGICO: Las 4 Capas de Arquitectura To-Be */}
            <TechEcoclusteringSection />

            {/* 8. GATEWAY ESTRATÉGICO A PÁGINA 4 */}
            <BenchmarkRoadmapGatewaySection onNavigateToPropuesta={() => handleTabChange("propuesta")} />
          </main>
        ) : (
          <main className="w-full">
            {/* 1. Hero Cinemático: Command Suite 3D & Telemetría de Metas 2025 */}
            <HeroSectionPropuesta onExploreCanvas={() => {
              const el = document.getElementById("smart-canvas-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }} />

            {/* 2. EL MVP PRINCIPAL (Fase 1): Smart Intake & Experiment Canvas con Calculadora MDE */}
            <div id="smart-canvas-section">
              <SmartExperimentCanvasSection />
            </div>

            {/* 3. GOBERNANZA ÁGIL (Fase 2): Fast-Track & Comité Concurrente Sincrónico */}
            <FastTrackGovernanceSection />

            {/* 4. OPERACIÓN & TELEMETRÍA (Fase 3): Product Ops Command Center */}
            <ProductOpsControlCenterSection />

            {/* 5. HOJA DE RUTA DEL PRACTICANTE (16 Semanas / 4 MVPs Evolutivos) */}
            <RoadmapMvpEvolutionSection />

            {/* 6. PITCH EJECUTIVO & CIERRE INSTITUCIONAL */}
            <ExecutivePitchCloseSection onBackToStart={() => handleTabChange("datos")} />
          </main>
        )}

        {/* Footer Institucional CIX BCP */}
        <footer className="border-t border-white/[0.08] py-10 px-6 bg-[#050711] text-center text-xs text-slate-500 font-mono">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/cix-logo.png" alt="CIX Logo" className="h-5 w-auto" />
              <span className="text-slate-400">Centro de InnovaCXión del BCP · Caso Practicante Product Ops</span>
            </div>
            <span>Auditado con datos oficiales del caso · NovaLab Showcase</span>
          </div>
        </footer>

      </div>
    </SmoothScroll>
  );
}

export default App;
