# PRODUCT REQUIREMENTS DOCUMENT (PRD) — PÁGINA 1: "DATOS"
**Proyecto:** Centro de InnovaCXión del BCP (CIX) / NovaLab Operational Showcase  
**Documento:** `PRD-PAGINA-1-DATOS.md`  
**Vista / Página:** 01 — "DATOS" (La Realidad Numérica del Desplome Operativo)  
**Estado:** Actualizado & Vinculante  
**Fuentes de Verdad:** `Caso - Practicante Product Ops.pdf` y `diagn_stico_completo_novalab_bcp.md`.

---

## 1. OBJETIVO Y VISIÓN DE LA PÁGINA

### 1.1 Propósito Estratégico
Presentar la radiografía cuantitativa incontestable de NovaLab en su último año operativo, utilizando **únicamente los datos oficiales suministrados por el BCP**. La página transforma las tablas estáticas del caso en una experiencia interactiva, cinemática y de alto impacto visual que evidencia la crisis de velocidad, cumplimiento y calidad científica, preparando el terreno narrativo para la Página 2 ("¿POR QUÉ?").

### 1.2 Reglas de Oro de Diseño e Interacción
*   **Transiciones Fluidas Sin Cortes Bruscos (Regla Absoluta):** **El fondo JAMÁS debe cortarse bruscamente entre secciones.** Todo cambio de ambiente o superficie debe resolverse mediante degradados orgánicos continuos (`linear-gradient` de transición suave entre Deep Abyssal Navy `#080B1A` y fondos subsecuentes), o continuar en el mismo lienzo unificado.
*   **100% Data-Driven & Anti-Ficción:** Solo se exponen números, porcentajes y métricas oficiales de las Tablas 1, 2 y 3 del caso BCP.
*   **Predominio Visual:** Más micro-gráficos, contadores de telemetría animados, comparadores interactivos y visualizaciones de flujo que texto estático.
*   **Tono:** Rigor analítico de Product Operations, sobriedad ejecutiva y calidad de agencia (*Apple/Stripe grade*).

---

## 2. ARQUITECTURA DE COMPONENTES Y SKILLS APLICADAS

| Componente | Skill Asignada | Rol e Implementación Visual |
| :--- | :--- | :--- |
| **Tubelight Navigation Bar** | `glass-dark-ui` + `emil-design-eng` | Barra flotante translúcida (`fixed top-4 z-50`) con entrada demorada a los 3s, logo CIX BCP, selector de 4 páginas y efecto lámpara reactivo en Clementine Gold (`#FEA900`). |
| **Hero Cinemático Puro (100vh)** | `glow-horizon` + `emil-design-eng` | Arco cóncavo CIX Horizon sobre fondo Deep Navy `#080B1A`, badge `CIX // MIGUEL AMPUERO`, titular de Deming con loop activo en *"traigan datos."* (shimmer + breathing pulse). |
| **Bento Bar de Telemetría** | `number-details` + `beam-glow-states` | 4 tarjetas de alto impacto con textos en blanco brillante, entrada lenta escalonada (`stagger: 0.22s`) y loops continuos (beam sweep, segundero giratorio, pulso radar crítico y capas flotantes). |
| **Indicador de Scroll ("Diagnóstico")** | `animation-systems` + `scroll-progress-timeline` | Cápsula interactiva con punto ámbar viajero (`y: [0, 14, 0]`) que invita de forma natural a la siguiente sección. |
| **Frase de Transición de Diagnóstico** | `masked-reveal` | Titular fluido sin cortes: *"Un problema bien planteado es un problema **casi resuelto.***" con loop activo. |
| **Scrollytelling Trimestral T1→T4** | `gsap-scrolltrigger-storytelling` | Storytelling guiado por scroll con transición en degradado que recorre la caída de throughput, cycle time, backlog choke y calidad. |
| **Matriz Comparativa de Labs (Tabla 3)** | `beautiful-shadows` + `emil-design-eng` | Matriz interactiva de laboratorios (Pagos como benchmark vs Inversiones, Pymes, Seguros) con filtros dinámicos. |
| **Gateway de Transición a Pág 2** | `beam-glow-states` | Cierre envolvente con degradado de salida y CTA hacia `"02. ¿POR QUÉ?"`. |

---

## 3. FLUJO Y RECORRIDO DE LA PÁGINA (PÁGINA 1)

```
[00:00 - INICIO PURO 100vh]
  ├─ Fondo Abisal #080B1A + Halo Cóncavo CIX Horizon
  ├─ Badge: CIX // MIGUEL AMPUERO
  ├─ Frase: "En Dios confiamos, todos los demás [traigan datos.]" (Loop Shimmer + Breathing Pulse)
  ├─ [A los 3 Segundos]: Descenso suave del Tubelight Navbar desde arriba
  └─ Indicador inferior: "Explorar Auditoría" ↓
          │
      (Scroll)
          ▼
[ETAPA 2: TELEMETRÍA CRÍTICA EN VIVO]
  ├─ 4 Tarjetas Bento con textos en blanco puro de alto contraste:
  │   ├─ Card 1: 44/60 EXP (-26.7% | Barra animada con destello)
  │   ├─ Card 2: 57 Días Cycle Time (+50% | Reloj segundero giratorio + glow ámbar)
  │   ├─ Card 3: 61% Retrabajos (CRÍTICO | Pulso radar rojo + ShieldAlert)
  │   └─ Card 4: 23 Ideas Estancadas (Floating layers animadas)
          │
      (Scroll)
          ▼
[ETAPA 3: INDICADOR DE SCROLL INTERACTIVO]
  └─ Rótulo "Diagnóstico" + Cápsula con punto ámbar viajero en loop
          │
      (Scroll)
          ▼
[ETAPA 4: FRASE DE TRANSICIÓN OPERATIVA (Fluida, sin cortes de fondo)]
  └─ "Un problema bien planteado es un problema [casi resuelto.]" (Loop en Clementine Gold)
          │
  (Transición suave en degradado: de Abyssal Navy a Lienzo de Auditoría)
          ▼
[ETAPA 5: SCROLLYTELLING TRIMESTRAL T1 -> T4 (Tabla 1 Oficial)]
  ├─ Throughput Collapse: 14 -> 12 -> 10 -> 8 experimentos (-42.8%)
  ├─ Cycle Time Spiral: 38 -> 44 -> 51 -> 57 días hábiles (+50%)
  ├─ Backlog Choke: 23 ideas congeladas (2.9 trimestres de retraso)
  └─ Rigor & Documentación: 64% -> 50% concluyentes / 50% -> 25% documentados
          │
      (Scroll)
          ▼
[ETAPA 6: MATRIZ INTERACTIVA DE LABORATORIOS (Tabla 3 Oficial)]
  ├─ Comparativa: Pagos (36 días / 29% rechazo) vs Inversiones, Pymes, Seguros (50+ días / 78% rechazo)
  └─ Filtros y micro-interacciones de hover
          │
      (Scroll)
          ▼
[ETAPA 7: GATEWAY HACIA PÁGINA 2]
  └─ CTA hacia "02. ¿POR QUÉ? (Anatomía del Cuello de Botella y Silos)"
```

---

## 4. ESPECIFICACIÓN DETALLADA DE LAS SECCIONES PENDIENTES DE MODIFICAR

### SECCIÓN 5: SCROLLYTELLING TRIMESTRAL T1 -> T4 (Enriquecimiento Visual)
*   **Requisito de Fondo:** Transición en degradado suave desde `#080B1A` hacia la superficie de auditoría. Prohibidas las líneas de división duras.
*   **Visualización Dinámica:**
    *   **Paso 1 (Throughput):** Barras interactivas con la meta de 15 experimentos vs la realidad trimestral (14 $\rightarrow$ 12 $\rightarrow$ 10 $\rightarrow$ 8).
    *   **Paso 2 (Cycle Time):** Curva de aceleración del tiempo de ciclo (38 $\rightarrow$ 57 días) con alerta de "casi 3 meses de calendario por experimento".
    *   **Paso 3 (Backlog Choke):** Representación visual de las 23 fichas estancadas en espera.
    *   **Paso 4 (Calidad & Amnesia):** Fuga de documentación (de 50% a 25%) y pérdida de conclusiones accionables.

### SECCIÓN 6: MATRIZ INTERACTIVA DE LABORATORIOS (Tabla 3 Oficial)
*   **Benchmark Pagos:** Fila destacada en verde esmeralda (`#10B981`) como silo de alta eficiencia (36 días, 29% observaciones).
*   **Colapso Silos Tradicionales:** Pymes (80% observaciones / 52 días), Inversiones (73% observaciones / 49 días), Seguros (78% observaciones / 51 días) destacados en rojo carmesí.

---

## 5. CRITERIOS DE ACEPTACIÓN Y QA ANTI-SLOP
1.  **Fidelidad Numérica Absoluta:** Coincidencia exacta con las Tablas 1, 2 y 3 del caso BCP.
2.  **Continuidad de Fondo:** Cero cortes duros visuales; transiciones siempre resueltas con degradados o lienzos compartidos.
3.  **Rendimiento:** 60 FPS garantizados, uso exclusivo de `transform` y `opacity` en animaciones continuas.
4.  **Tipografía:** Display en `Plus Jakarta Sans` / `Outfit`, números en `JetBrains Mono`. Veto estricto a `Inter`.
