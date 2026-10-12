# PLAN DE IMPLEMENTACIÓN: PÁGINA 1 — "DATOS"
**Proyecto:** Centro de InnovaCXión del BCP (CIX) / NovaLab Operational Showcase  
**Documento:** `PLAN-IMPLEMENTACION-PAGINA-1.md`  
**Objetivo:** Guía técnica y secuencia paso a paso para construir la arquitectura base de la aplicación y la Página 1 ("DATOS"), asegurando 60 FPS, fidelity visual de acuerdo a `DESIGN.md` y cumplimiento estricto del `PRD-PAGINA-1-DATOS.md`.

---

## 1. STACK TECNOLÓGICO Y DEPENDENCIAS

*   **Entorno & Bundler:** React 19 / 18 + Vite (TypeScript para robustez y tipado de datos).
*   **Estilos:** Tailwind CSS con configuración extendida de colores y tokens de `DESIGN.md`.
*   **Motor de Animación:**
    *   `gsap` + `@gsap/shockingly` o plugins oficiales (`ScrollTrigger`).
    *   `lenis` (`@studio-freight/lenis` o `lenis/react`) para smooth scrolling cinemático.
*   **Visualización de Datos:**
    *   `lucide-react` para iconografía técnica minimalista.
    *   Componentes visuales y gráficos SVG reactivos / `recharts` altamente estilizados con tipografía monospace.
*   **Tipografía Web:**
    *   `Outfit` (Display y títulos).
    *   `Geist Sans` / `Satoshi` (Body).
    *   `JetBrains Mono` (Telemetría y números del caso).

---

## 2. FASES DE EJECUCIÓN PASO A PASO

### FASE 1: Inicialización del Proyecto y Configuración Base
1.  **Scaffolding con Vite:**
    *   Crear proyecto React + TypeScript en la raíz o subdirectorio limpio.
    *   Instalar dependencias clave: `tailwindcss`, `@tailwindcss/vite` (o `postcss`/`autoprefixer`), `gsap`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`.
2.  **Configuración de Tokens (`tailwind.config.js` e `index.css`):**
    *   Inyectar fuentes desde Google Fonts (`Outfit`, `JetBrains Mono`, `Geist`).
    *   Mapear paleta del `DESIGN.md`:
        *   `bg-canvas`: `#F8FAFC`
        *   `brand-deep`: `#080B1A`
        *   `brand-surface`: `#111836`
        *   `accent-indigo`: `#3B49DF`
        *   `accent-amber`: `#FEA900` / `#F59E0B`
        *   `signal-critical`: `#E11D48`
        *   `signal-success`: `#10B981`
3.  **Setup de Lenis Smooth Scroll:**
    *   Crear el wrapper `SmoothScrollProvider` que sincronice el tick de Lenis con `gsap.ticker.add(...)` para evitar tirones en `ScrollTrigger`.

---

### FASE 2: Shell Global y Upper Bar de Navegación
1.  **Componente `UpperNavBar`:**
    *   Barra flotante con `backdrop-filter: blur(16px)` y fijación `fixed top-0`.
    *   Logotipo CIX BCP oficial renderizado desde `/assets/cix-logo.png`.
    *   Tabs de las 4 páginas con indicador activo píldora en `[01 DATOS]`.
    *   Chip de telemetría viva: `● CASO REAL BCP: 44 EXP / 46 DÍAS PROM`.

---

### FASE 3: Cinematic Hero con Frase de Deming
1.  **Componente `HeroSection`:**
    *   Lienzo oscuro en `#080B1A` con altura mínima de `min-h-screen`.
    *   **Partículas de datos flotantes (`ambient-section-particles`):** Canvas ligero o SVG con partículas tenues de deriva lenta.
    *   **Efecto `masked-reveal`:**
        *   Contenedor con `overflow: hidden`.
        *   Frase *"En Dios confiamos, todos los demás traigan datos"* separada por palabras con span animados desde `y: 100%` a `0%` mediante timeline de GSAP.
        *   Firma de W. Edwards Deming y badge institucional CIX.
    *   **Tarjeta Glass Flotante de Telemetría:**
        *   Meta 60 EXP vs Real 44 EXP.
        *   Déficit operativo `-26.7%` animado con contador dinámico.

---

### FASE 4: Scrollytelling Pinned — La Espiral del Desplome (Tabla 1)
1.  **Componente `QuarterlyTimelinePinned`:**
    *   Crear contenedor pinned con GSAP `ScrollTrigger.create({ pin: true, scrub: 1 })`.
    *   **Split Layout:**
        *   *Panel Izquierdo:* Riel vertical de checkpoints con los 4 trimestres (`T1`, `T2`, `T3`, `T4`) y barra de progreso que se llena al avanzar.
        *   *Escenario Derecho (Visual Canvas):* Muestra y transiciona secuencialmente entre los 4 estados:
            1.  **Paso 1 (Throughput):** Barras de lanzamientos trimestrales (14 → 12 → 10 → 8) vs línea de meta (15).
            2.  **Paso 2 (Cycle Time):** Curva de días de ciclo (38d → 44d → 51d → 57d hábiles) con alerta de retraso de 3 meses en T4.
            3.  **Paso 3 (Backlog Choke):** Rejilla visual de 23 fichas de ideas congeladas en inventario.
            4.  **Paso 4 (Calidad & Rigor):** Indicadores de declive: experimentos concluyentes (64% → 50%) y documentación (50% → 25%).

---

### FASE 5: Matriz Interactiva de Laboratorios (Tabla 3)
1.  **Componente `LabsComparisonMatrix`:**
    *   Tabla interactiva responsive con glassmorphism sobre fondo claro.
    *   Filas correspondientes a los 4 laboratorios oficiales: Pagos, Inversiones, Pymes, Seguros.
    *   Interactividad:
        *   Botones de ordenamiento por columnas (por tiempo de ciclo, por tasa de observaciones, por aprendizajes).
        *   Hover state dinámico: resalta Pagos con aura verde (`#10B981`) y badge de *"Benchmark Aislado: 36 días"*, mientras que Inversiones, Pymes y Seguros activan señales rojas del 73% al 80% de retrabajo.

---

### FASE 6: Gateway / Teaser hacia la Página 2
1.  **Componente `TransitionGateway`:**
    *   Tarjeta en deep navy con haz de luz viajero (`beam-glow-states`).
    *   Métrica detonante: `61% de retrabajos en aprobaciones (27 de 44 experimentos) disparando tiempos de 8 a 20 días`.
    *   Botón magnético de avance hacia la siguiente página: *"EXPLORAR ANATOMÍA DEL CUELLO DE BOTELLA: ¿POR QUÉ? →"*.

---

### FASE 7: Verificación, QA Anti-Slop y Performance
1.  **Pruebas de Rendimiento:**
    *   Verificar que `ScrollTrigger` corra a 60 FPS estables sin layout thrashing.
    *   Asegurar que todas las animaciones se ejecuten en `transform` y `opacity`.
2.  **Verificación de Datos:**
    *   Contrastar cada número contra `Caso - Practicante Product Ops.pdf`.
3.  **Verificación Visual con Playwright / Browser:**
    *   Tomar capturas de pantalla de la interfaz generada para certificar el acabado visual.

---

## 3. CHECKLIST DE EJECUCIÓN INMEDIATA

- [ ] Crear estructura de Vite + React + TypeScript + Tailwind CSS.
- [ ] Configurar fuentes de Google (`Outfit`, `JetBrains Mono`) y paleta del `DESIGN.md`.
- [ ] Configurar `Lenis` + `GSAP` + `ScrollTrigger`.
- [ ] Implementar `UpperNavBar` con logo CIX y telemetría.
- [ ] Implementar `HeroSection` con `masked-reveal` y Deming quote.
- [ ] Implementar `QuarterlyTimelinePinned` con los 4 pasos interactivos.
- [ ] Implementar `LabsComparisonMatrix` interactiva con Tabla 3.
- [ ] Implementar `TransitionGateway` con haz de luz.
- [ ] Probar en navegador y verificar visualmente.
