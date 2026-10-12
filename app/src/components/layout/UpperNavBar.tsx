import React from "react";
import { Activity } from "lucide-react";

interface UpperNavBarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const UpperNavBar: React.FC<UpperNavBarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "datos", label: "01. DATOS", highlight: true },
    { id: "por-que", label: "02. ¿POR QUÉ?", highlight: false },
    { id: "otros-equipos", label: "03. EN OTROS EQUIPOS...", highlight: false },
    { id: "propuesta", label: "04. LA PROPUESTA", highlight: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel-light rounded-2xl px-5 py-2.5 shadow-sm border border-slate-200/80">
        
        {/* Brand identity: CIX Logo + context badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/cix-logo.png" 
              alt="CIX BCP Logo" 
              className="h-7 w-auto object-contain"
            />
            <div className="h-4 w-[1px] bg-slate-300 hidden sm:block" />
            <span className="text-xs font-semibold tracking-tight text-slate-800 uppercase hidden sm:inline-block">
              NovaLab <span className="text-[#3B49DF]">Product Ops</span>
            </span>
          </div>
        </div>

        {/* 4 Pages segmented navigation pill */}
        <nav className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/60 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#080B1A] text-white shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Live operational audit telemetry chip */}
        <div className="hidden lg:flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            CASO REAL BCP: 44/60 EXP
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">
            <Activity className="w-3 h-3 text-[#3B49DF]" />
            46d PROM
          </div>
        </div>

      </div>
    </header>
  );
};
