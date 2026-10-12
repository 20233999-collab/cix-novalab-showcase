# BITÁCORA DE CONTEXTO & DECISIONES TÉCNICAS: CIX NOVALAB PRODUCT OPS SHOWCASE

**Archivo:** `CONTEXTO.md`  
**Proyecto:** Centro de InnovaCXión del BCP (CIX) / NovaLab Operational Showcase  
**Estado:** Activo / Histórico Oficial Consolidado (Las 4 Páginas Completas)  
**Última actualización:** 2026-10-12  

---

## 1. RESUMEN EJECUTIVO
Durante las sesiones recientes de desarrollo se completó con éxito la implementación total de la plataforma interactiva de presentación para el caso de Practicante de Product Operations en NovaLab (Centro de InnovaCXión del BCP).

La aplicación cuenta ahora con sus **4 páginas estratégicas completas, interactivas, libres de errores de TypeScript (`noUnusedLocals`) y verificadas en tiempo real**:
1. **PÁGINA 1: "01. DATOS" (La Realidad Numérica del Desplome):** Diagnóstico cuantitativo, balanza interactiva Pareto 80/20, amnesia de T1-T4, explosión del cycle time (38 a 57 días), cuello de botella físico de aprobaciones, anatomía de la entrada defectuosa y conclusiones con la cita de W. Edwards Deming.
2. **PÁGINA 2: "02. ¿POR QUÉ?" (Anatomía del Cuello de Botella y Silos):** Diagnóstico cualitativo con testimonios fanned en abanico sobre degradado naranja CIX, 3 sesgos cognitivos modelados en loop interactivo por cada problema prioritario, y la **Cadena Causal de los 5 Porqués**.
3. **PÁGINA 3: "03. BENCHMARKS" (Cómo lo Resuelven los Líderes Globales):** Radar orbital de 6 hubs, Matriz Bento comparativa NovaLab vs Global, Eje 1 (Fast-Track de Capital One y BBVA), Eje 2 (nuFormer de Nubank y 2-in-a-Box de DBS Bank), Eje 3 (Spotify Confidence, Salt Machine y Guardrails interactivos), Eje 4 (Airbnb Knowledge Repo y RAG Brain) y Ecoclustering Tecnológico en 4 capas.
4. **PÁGINA 4: "04. LA PROPUESTA" (El Motor To-Be de Product Operations):** Suite operativa de NovaLab BCP con metas 2025 (+47% throughput, <24h carril verde), el MVP Principal (Smart Intake y Experiment Canvas interactivo con calculadora MDE y catálogo legal preaprobado), Gobernanza Fast-Track (cascada vs concurrencia sincrónica), Product Ops Command Center (telemetría y guardrails 24/7), Roadmap de 16 semanas en 4 MVPs evolutivos y Pitch Ejecutivo de cierre.

Además, **se integraron todas las imágenes 3D e isométricas directamente en el lienzo visual de la web**, eliminando marcos duros y cajas rígidas mediante máscaras alfa radiales (`css-alpha-masking`), degradados perimetrales difusos y halos ambientales de fondo.

---

## 2. EVOLUCIÓN DETALLADA Y DECISIONES DE DISEÑO

### 2.1 Página 2: "¿Por Qué?" (Ciencias del Comportamiento & Los 5 Porqués)
* **Arquitectura de Testimonios Fanned:** Siguiendo la referencia de `/inspo/testimonios.png`, se construyó una interacción de tarjetas superpuestas en abanico con degradado naranja cálido (`#FEA900` a ámbar oscuro) y citas textuales de los líderes de laboratorios (Director de NovaLab, Líder de Pymes, Líder de Pagos, Analista de Riesgos).
* **Modelado de Sesgos Cognitivos en Loop:** Para cada uno de los 3 problemas prioritarios se retiraron descripciones genéricas y se incluyeron las definiciones científicas de los sesgos y modelos de comportamiento (Sesgo del Optimismo, Falacia de Planificación, Efecto Dunning-Kruger, Ley de Parkinson, Efecto Silo, Amnesia Organizacional) con gráficos SVG animados en loop.
* **Cadena de Causalidad (Los 5 Porqués):** Visualización interactiva en árbol que rastrea desde el síntoma macro (44/60 experimentos) hasta la causa raíz última (operación en cascada secuencial sobre un proceso de innovación ágil).

### 2.2 Página 3: "Benchmarks Globales" (Inspiración en Líderes Fintech y Tech)
* **Renders 3D Isométricos Generados:**
  - `benchmark-radar-hero.png`: Red global conectando Singapur (DBS), São Paulo (Nubank), Madrid (BBVA), Estocolmo (Spotify) y Nueva York (Capital One).
  - `fast-track-lanes.png`: Autopista de triaje de 3 carriles (Verde, Amarillo, Rojo).
  - `knowledge-rag-brain.png`: Grafo neural con tarjetas de experimentos indexadas y vectorizadas.
* **Simuladores Interactivos:**
  - *Fast-Track Simulator:* Asignación automática de carril según el tipo de experimento y cálculo de reducción de tiempo de 20 días a <24h.
  - *Spotify Guardrails Simulator:* Control dinámico de degradación de latencia y quejas con activación visual del Kill-Switch automático ante violaciones de umbral (>5%).
  - *RAG Semantic Search Mockup (BCP Brain):* Buscador en lenguaje natural con consultas instantáneas y citas directas de hipótesis pasadas.
  - *Ecoclustering Tecnológico de 4 Capas:* Intake, Triaje, Telemetría y Memoria Organizacional.

### 2.3 Página 4: "La Propuesta" (El Motor To-Be de Product Operations)
* **Hero 3D Suite Operativa (`proposal-suite-hero.png`):** Centro de comando de NovaLab BCP y HUD de metas proyectadas (65+ exp/año, <24h aprobación, <10% retrabajo, 100% documentación).
* **El MVP Principal (Fase 1) · Smart Experiment Canvas:**
  - *Calculadora MDE en Tiempo Real:* Sliders de tráfico mensual, tasa base de conversión y MDE que calculan el tamaño de muestra requerido y días de corrida, resolviendo el 34% de rechazos de Riesgos.
  - *Catálogo Legal Preaprobado:* Selector de cláusulas estandarizadas por la Asesoría Legal (Plazo Fijo, Crédito Pyme, Yape), eliminando el 22% de observaciones de copys.
  - *Simulador de Regla de Gating:* Bloqueo algorítmico forzoso si el laboratorio tiene fichas de aprendizaje pendientes del experimento anterior.
* **Gobernanza Fast-Track & Concurrencia (Fase 2):** Los 3 carriles de aprobación y comparativa visual detallada del flujo en cascada por correo (20 días hábiles) vs. el Comité Concurrente Sincrónico semanal de 30 minutos (<5 días hábiles).
* **Product Ops Command Center (Fase 3):** Torre de control de telemetría en vivo conectada con Snowflake/Datadog con selector de los 4 laboratorios y monitoreo de Guardrails nominales.
* **Roadmap de 16 Semanas en 4 MVPs Evolutivos (Estrategia Incremental):**
  - Desglose mes a mes (Mes 1: Entrada, Mes 2: Fast-Track, Mes 3: Telemetría, Mes 4: Repositorio RAG).
  - Permite sustentar al Director que el banco obtiene *Quick Wins* en los primeros 30 días con herramientas existentes (Jira Service Management) sin requerir compras de software pesadas.
* **Pitch Ejecutivo & Cierre Institucional:** Guion de sustentación verbal para la entrevista/presentación del practicante y botón de retorno al inicio.

### 2.4 Integración Orgánica de Imágenes (Anti-Box & Gradient Bleed)
* **Requerimiento del usuario:** Quitar los marcos y bordes duros de tarjeta a las imágenes y lograr que se fundan directamente con el lienzo de la web.
* **Técnica aplicada:**
  1. Uso de `css-alpha-masking` con máscara radial elíptica en CSS:
     `[mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]`
     `[-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]`
  2. Capas de velos degradados perimetrales verticales (`from-[#080B1A] via-transparent`) y horizontales (`from-[#080B1A]/80 via-transparent to-[#080B1A]/80`).
  3. Resplandor difuso trasero (*ambient halo glow*) en gradiente azul CIX (`#002A8F`) y dorado (`#FEA900`) con `blur-3xl`, otorgando sensación de elemento holográfico flotante en el espacio.
  4. Eliminación de bordes duros y contenedores envolventes rígidos en `proposal-suite-hero.png`, `benchmark-radar-hero.png`, `fast-track-lanes.png` y `knowledge-rag-brain.png`.

---

## 3. MATRIZ DE PROBLEMAS TÉCNICOS Y SOLUCIONES

| # | Problema / Error | Causa Raíz | Solución Técnica Exacta |
| :--- | :--- | :--- | :--- |
| **1** | `TS6133: 'Sparkles', 'Terminal', 'CheckCircle2', 'Users', 'Zap', 'Play', 'Clock' declared but never read` | Múltiples componentes de la Página 3 importaban íconos de `lucide-react` no utilizados, violando `noUnusedLocals` en `tsconfig.json`. | Se depuraron y limpiaron exhaustivamente los imports en `HeroSectionBenchmarks`, `FastTrackComplianceSection`, `NubankDbsProductOpsSection`, `SpotifyConfidenceSection`, `TechEcoclusteringSection` y `BenchmarkRoadmapGatewaySection`. |
| **2** | `TS6133: 'Rocket', 'Sparkles', 'Users', 'ArrowRight', 'Gauge', 'Flame', 'Target', 'TrendingUp' declared but never read` en componentes de Página 4 | Imports remanentes de prototipado no referenciados en JSX de Página 4. | Se retiraron todos los identificadores sin uso en `ExecutivePitchCloseSection`, `FastTrackGovernanceSection`, `ProductOpsControlCenterSection`, `RoadmapMvpEvolutionSection` y `SmartExperimentCanvasSection`. |
| **3** | La imagen generada por el subagente se guardaba en el directorio brain pero no se mostraba en la app | El subagente `image-generator` solo escribe en la carpeta de la conversación (`/brain/<id>/...`) y no directamente en `app/public/assets/`. | Se copió mediante script shell validado a `app/public/assets/proposal-suite-hero.png` y se verificó su existencia y tamaño con `ls -la`. |
| **4** | Error en `browser_click` de Playwright: `Invalid input: expected string, received undefined` | La herramienta `browser_click` espera el parámetro `{ target: string }` y se envió `{ selector: string }`. | Se corrigió la llamada enviando `{ target: 'text="03. BENCHMARKS"' }` y `{ target: 'text="04. LA PROPUESTA"' }`. |
| **5** | Imágenes aparecían contenidas en cajas rígidas con bordes cuadrados | Las etiquetas `<img>` estaban envueltas en contenedores `rounded-3xl border border-white/10 bg-black/40` que rompían la inmersión cinemática. | Se aplicaron máscaras alfa radiales, velos de degradado perimetral y halos de resplandor trasero, liberando las imágenes de sus cajas. |

---

## 4. ESTADO ACTUAL Y VERIFICACIÓN

* **Compilación:** `npm run build` ejecutado en `/app` con **código de salida 0 en 1.72s**. Cero errores TypeScript.
* **Servidor de Desarrollo:** Activo y corriendo en background en `http://127.0.0.1:5173/`.
* **Navegación Tubelight:** Funcional y verificada para las 4 pestañas:
  - `01. DATOS`
  - `02. ¿POR QUÉ?`
  - `03. BENCHMARKS`
  - `04. LA PROPUESTA`
* **Estándar Visual:** Respeto estricto del branding CIX BCP (Fondo `#080B1A`, Clementine Gold `#FEA900`, CIX Deep Blue `#002A8F`), tipografías geométricas y mono de alta densidad, y anti-slop verificado.
