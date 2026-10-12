import React, { useState } from "react";
import { ArrowUpDown, Sparkles } from "lucide-react";
import { LABS_DATA } from "../../data/novalabData";

type SortField = "launched" | "cycleTimeAvg" | "observedPct" | "conclusivePct" | "documentedPct";

export const LabsComparisonMatrix: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>("observedPct");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [selectedLabId, setSelectedLabId] = useState<string>("pagos");

  const sortedLabs = [...LABS_DATA].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    return sortAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // Descendente por defecto para métricas de volumen/porcentaje
    }
  };

  const selectedLab = LABS_DATA.find((l) => l.id === selectedLabId) || LABS_DATA[0];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
      
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#3B49DF] uppercase px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 inline-block mb-3">
            TABLA 3 · RENDIMIENTO POR LABORATORIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-display">
            La Gran Brecha Entre Laboratorios
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
            La crisis de velocidad y aprobaciones no impacta a todos por igual. El Laboratorio de Pagos opera como una anomalía de alta eficiencia mientras el resto sufre tasas de rechazo de hasta el 80%.
          </p>
        </div>

        {/* Badge de resumen */}
        <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-100 border border-slate-200 w-fit text-xs font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-700">4 Laboratorios · 44 Experimentos Auditados</span>
        </div>
      </div>

      {/* Tabla Interactiva Responsive */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Laboratorio</th>
                <th className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-[#3B49DF]" onClick={() => handleSort("launched")}>
                  <div className="flex items-center justify-end gap-1">
                    <span>Lanzados</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-[#3B49DF]" onClick={() => handleSort("cycleTimeAvg")}>
                  <div className="flex items-center justify-end gap-1">
                    <span>Tiempo Prom.</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-[#3B49DF]" onClick={() => handleSort("observedPct")}>
                  <div className="flex items-center justify-end gap-1">
                    <span>Observados %</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-[#3B49DF]" onClick={() => handleSort("conclusivePct")}>
                  <div className="flex items-center justify-end gap-1">
                    <span>Concluyentes</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold text-right cursor-pointer hover:text-[#3B49DF]" onClick={() => handleSort("documentedPct")}>
                  <div className="flex items-center justify-end gap-1">
                    <span>Documentados</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {sortedLabs.map((lab) => {
                const isSelected = selectedLabId === lab.id;

                return (
                  <tr
                    key={lab.id}
                    onClick={() => setSelectedLabId(lab.id)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-indigo-50/60"
                        : "hover:bg-slate-50/70"
                    }`}
                  >
                    {/* Nombre y categoría */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${lab.isBenchmark ? "bg-emerald-500 shadow-sm shadow-emerald-500/50" : "bg-rose-500"}`} />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 font-display text-base">
                              {lab.name}
                            </span>
                            {lab.benchmarkBadge && (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                                {lab.benchmarkBadge}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400 font-mono">
                            {lab.category}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Lanzados */}
                    <td className="py-4 px-4 text-right font-mono font-bold text-slate-800">
                      {lab.launched} <span className="text-xs font-normal text-slate-400">EXP</span>
                    </td>

                    {/* Tiempo Promedio */}
                    <td className="py-4 px-4 text-right font-mono">
                      <span className={`font-bold ${lab.cycleTimeAvg <= 36 ? "text-emerald-600 font-extrabold" : "text-slate-800"}`}>
                        {lab.cycleTimeAvg} días
                      </span>
                    </td>

                    {/* Observados % */}
                    <td className="py-4 px-4 text-right font-mono">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
                          lab.observedPct <= 30
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {lab.observedPct}% ({lab.observedCount})
                      </span>
                    </td>

                    {/* Concluyentes */}
                    <td className="py-4 px-4 text-right font-mono text-slate-700">
                      <span className="font-semibold">{lab.conclusivePct}%</span>{" "}
                      <span className="text-xs text-slate-400">({lab.conclusiveCount})</span>
                    </td>

                    {/* Documentados */}
                    <td className="py-4 px-6 text-right font-mono">
                      <span className={`font-semibold ${lab.documentedPct > 50 ? "text-indigo-600 font-bold" : "text-slate-500"}`}>
                        {lab.documentedPct}%
                      </span>{" "}
                      <span className="text-xs text-slate-400">({lab.documentedCount})</span>
                    </td>
                  </tr>
                );
              })}

              {/* Fila Total NovaLab */}
              <tr className="bg-slate-900 text-white font-mono text-xs border-t-2 border-slate-950">
                <td className="py-4 px-6 font-bold uppercase tracking-wider text-slate-300">
                  TOTAL PROMEDIO NOVALAB
                </td>
                <td className="py-4 px-4 text-right font-bold text-white text-sm">
                  44 EXP
                </td>
                <td className="py-4 px-4 text-right font-bold text-[#FEA900]">
                  46 días
                </td>
                <td className="py-4 px-4 text-right font-bold text-rose-400">
                  61% (27)
                </td>
                <td className="py-4 px-4 text-right font-bold text-slate-300">
                  57% (25)
                </td>
                <td className="py-4 px-6 text-right font-bold text-slate-300">
                  39% (17)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tarjeta de Detalle del Laboratorio Seleccionado */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#3B49DF]" />
            <span className="text-xs font-mono font-bold uppercase text-slate-800">
              Diagnóstico Operativo: Laboratorio de {selectedLab.name}
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {selectedLab.notes}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Observaciones</span>
            <span className={`text-base font-mono font-extrabold ${selectedLab.observedPct <= 30 ? "text-emerald-600" : "text-rose-600"}`}>
              {selectedLab.observedPct}% ({selectedLab.observedCount} de {selectedLab.launched})
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};
