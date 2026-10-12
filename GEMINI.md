# DIRECTIVA DE INGENIERÍA Y SKILLS: CIX NOVALAB PRODUCT OPS SHOWCASE

**Proyecto:** Centro de InnovaCXión del BCP (CIX) / NovaLab Operational Showcase  
**Documento:** `GEMINI.md` / `DIRECTIVA-SKILLS.md`  
**Estado:** Activa / Vinculante  
**Propósito:** Definir de manera explícita y obligatoria las habilidades (skills), estándares técnicos, librerías y patrones de implementación que deben regir el desarrollo de la interfaz interactiva y visual del caso.

---

## 1. OBJETIVO DEL PROYECTO
Construir una aplicación web interactiva, moderna y con calidad de agencia de diseño de clase mundial (*Awwwards / Stripe / Apple-grade*) que comunique el diagnóstico operativo y la propuesta de solución de Product Operations para NovaLab (CIX BCP), basada en los datos del caso y los benchmarks del cuaderno de NotebookLM.

La experiencia debe sustituir el formato estático de diapositivas por una narrativa digital inmersiva impulsada por **Scrollytelling**, visualización de datos de alto impacto, micro-interacciones táctiles y componentes híbridos (shell claro con telemetría en alto contraste) regidos por `DESIGN.md`.

---

## 2. MATRIZ DE SKILLS OBLIGATORIAS Y CASOS DE USO

Cada habilidad seleccionada cumple un rol operativo y arquitectónico indispensable en la plataforma:

| Skill | Categoría | Propósito en el Showcase | Implementación Técnica |
| :--- | :--- | :--- | :--- |
| **`gsap-scrolltrigger-storytelling`** | Scrollytelling & Core Narrative | Controlar la secuencia guiada por scroll con fijación de escena (*sticky pinning*). El usuario avanza y el producto/etapas reaccionan progresivamente. | GSAP `ScrollTrigger.create({ pin: true, scrub: 1 })` mapeado a etiquetas de tiempo. |
| **`cinematic-gsap-lenis-motion-system`** | Motor de Movimiento | Proporcionar desplazamiento suave (*smooth scrolling*) ininterrumpido y orquestación de entradas escalonadas (*stagger*). | Lenis Smooth Scroll sincronizado con el `ScrollTrigger.update` de GSAP. |
| **`scroll-progress-timeline`** | Navegación de Progreso | Barra y riel de progreso interactivo que refleja el avance por el ciclo anual (T1 → T4) y las 7 fases del experimento. | Indicador SVG/CSS reactivo con cálculo de porcentaje en viewport y checkpoints activos. |
| **`slides` / Visual Data Architecture** | Visualización de Datos & Métricas | Representación gráfica impecable de los KPIs del caso (desplome de throughput, cuellos de botella y benchmarks). | Integración de gráficos (Recharts / Chart.js estilizados) con tipografía monospace y tooltips custom. |
| **`number-details`** | Telemetría & Data Detail | Formato visual de alta densidad para números clave (`44/60 EXP`, `57 DÍAS`, `61% RETRABAJO`) con animación count-up. | Contadores animados al entrar al viewport (`IntersectionObserver` o GSAP tween). |
| **`beam-glow-states`** | Micro-Animación de Flujos | Haces de luz viajera sobre bordes (*border-beam*) para ilustrar el viaje del experimento a través de los silos y el bloqueo en Aprobaciones. | Animación CSS/SVG de trazo de borde con gradiente de estado (azul → ámbar/rojo de bloqueo). |
| **`emil-design-eng`** & **`animation-systems`** | Polish & Micro-Interacciones | Físicas de resorte premium (`stiffness: 100, damping: 20`), feedback táctil en clics de tabs y modales fluidos. | Transiciones vía `transform` y `opacity`, micro-elevaciones de `-1px` en hover y compresión en active. |
| **`masked-reveal`** | Tipografía Cinemática | Revelación de citas textuales de impacto (ej. Director de NovaLab, Líder de Pymes) palabra por palabra al scrollear. | Máscara de desbordamiento (`overflow: hidden`) y revelación progresiva con GSAP. |
| **`glass-dark-ui`** & **`beautiful-shadows`** | Tratamiento de Superficie | Construcción de tarjetas neomórficas translúcidas con desenfoque de fondo y sombras multicapa suaves sin bordes duros. | `backdrop-filter: blur(16px)`, `box-shadow` refinado y bordes de `1px solid rgba(...)` definidos en `DESIGN.md`. |
| **`no-ai-design-slop`** | Calidad & Anti-Slop | Calidad estricta: veto a gradientes violeta genéricos, veto a negro `#000000` puro, cero emojis y respeto estricto del branding CIX BCP. | Regla de verificación activa antes de cada commit o entrega. |

---

## 3. ARQUITECTURA DE CONTENIDO: LAS 4 PÁGINAS DE PRESENTACIÓN

El showcase funciona como una plataforma interactiva de presentación de 4 vistas/páginas principales, cada una con su **Upper Bar de Navegación reactivo** y un **Hero de alto impacto animado**:

### PÁGINA 1: "DATOS" (La Realidad Numérica del Desplome)
*   **Hero Animado:** Visualización orbital o canvas interactivo con el desplome de velocidad en NovaLab (44/60 experimentos, caída de throughput).
*   **Sección 1 (Throughput Collapse):** Gráficos dinámicos interactivos de la caída trimestre a trimestre (T1: 14 → T4: 8, -42.8%).
*   **Sección 2 (Cycle Time Spiral):** Visualización del tiempo de ciclo que explotó de 38 a 57 días hábiles (+50%).
*   **Sección 3 (Backlog Choke):** Contador y visualización física de 23 ideas de negocio estancadas en espera.
*   **Sección 4 (Conclusividad en Caída):** Métrica de calidad analítica (de 64% a 50% de experimentos concluyentes).

### PÁGINA 2: "¿POR QUÉ?" (Anatomía del Cuello de Botella y Silos)
*   **Hero Animado:** Pipeline interactivo con haz de luz viajero (`beam-glow-states`) que se estrella y bloquea en la etapa de Aprobaciones.
*   **Sección 1 (Value Stream Map - Scrollytelling Pinned):** Recorrido interactivo fijado por scroll por las 7 etapas de NovaLab, destacando el 61% de tasa de retrabajo.
*   **Sección 2 (The 4 Reject Causes Breakdown):** Gráfico interactivo/dona radial de causas de rechazo (34% muestra, 24% métricas, 22% textos, 15% datos).
*   **Sección 3 (La Cascada Secuencial Correo vs Concurrencia):** Demostración interactiva de la pérdida de tiempo (8 días sin observaciones vs 20 días con observaciones, +150%).
*   **Sección 4 (Silos vs Benchmark Interno):** Comparador interactivo: Silo de Pagos (29% rechazo / 36 días) vs Inversiones, Pymes y Seguros (78% rechazo / 50 días).
*   **Sección 5 (Amnesia Institucional):** Caída de la documentación del 50% al 25% y testimonios interactivos de duplicidad de experimentos.

### PÁGINA 3: "EN OTROS EQUIPOS..." (Benchmarks Globales de Referencia)
*   **Hero Animado:** Radar interactivo de madurez operativa y benchmarks de innovación fintech mundial.
*   **Sección 1 (DBS Bank - GANDALF & ALAN):** Caso interactivo de la banca singapurense, plataforma de datos ADA y cómo escalaron IA y agilidad.
*   **Sección 2 (Nubank - Product Ops Scaling):** Cómo estructura Product Operations la experimentación sin burocracia usando nuFormer.
*   **Sección 3 (Spotify - Experimentation Platform Confidence):** Backstage, cultura de aprendizaje y experimentación masiva con guardrails.
*   **Sección 4 (Capital One & BBVA - Compliance-by-Design):** Automatización de controles regulatorios y DORA en pipelines de innovación.

### PÁGINA 4: "LA PROPUESTA" (El Motor To-Be de Product Operations)
*   **Hero Animado:** Showcase 3D/Glassmorphic de la nueva suite operativa de NovaLab CIX funcionando a máxima velocidad.
*   **Sección 1 (Fast-Track & Concurrencia: Green/Yellow/Red Lanes):** Simulador interactivo de aprobación: el usuario clasifica un experimento y ve el tiempo reducirse de 20 a 5 días.
*   **Sección 2 (Standard Experiment Canvas Interactivo):** Template modular universal que resuelve el 34% de muestra y 24% de métricas desde el día 1.
*   **Sección 3 (Knowledge Repository con RAG / BCP Brain):** Mockup interactivo del repositorio vivo con buscador semántico y prevención de experimentos duplicados.
*   **Sección 4 (Roadmap de Implementación del Practicante):** Timeline trimestral de despliegue, quick wins (30-60-90 días) y KPIs esperados (+40% throughput, -65% cycle time).

---

## 4. ESTÁNDARES TÉCNICOS Y REGLAS DE CODIFICACIÓN

1. **Framework y Estilo:**
   * React con Vite o Next.js / Tailwind CSS.
   * Tipografías: Display geométrica (`Outfit` / `Geist Sans`), lectura prosa (`Satoshi` / `Geist`) y números en `JetBrains Mono` / `Geist Mono`. **Prohibido `Inter`**.
2. **Rendimiento y Animación:**
   * Todas las animaciones continuas deben realizarse estrictamente sobre `transform` y `opacity` para aceleración por GPU.
   * Limpiar instancias de GSAP (`ScrollTrigger.kill()`) y listeners de Lenis al desmontar componentes.
3. **Diseño y Colores:**
   * Fidelidad absoluta a los valores hex y roles semánticos especificados en [DESIGN.md](file:///home/laptop/Documentos/cix-caso/DESIGN.md).

---

## 5. PROTOCOLO DE GESTIÓN DEL ARCHIVO DE CONTEXTO (`CONTEXTO.md`)

`CONTEXTO.md` es la bitácora viva y de alta fidelidad que registra las decisiones de diseño, la evolución de los componentes, los problemas técnicos encontrados y las soluciones implementadas en el proyecto.

### 5.1 Regla de Actualización Obligatoria (Solo bajo Solicitud Expresa)
*   **PROHIBICIÓN:** El asistente o agente de IA **NUNCA DEBE actualizar `CONTEXTO.md` de forma autónoma o automática** tras cada cambio menor o iteración de código.
*   **CONDICIÓN DE DISPARO:** El archivo `CONTEXTO.md` **SOLO se actualizará cuando el usuario lo solicite explícitamente** (ejemplo: *"crea/actualiza el contexto"*, *"guarda lo que hicimos en contexto"*).
*   **MOTIVO:** Prevenir saturación de archivos, evitar ruido innecesario en la memoria de trabajo y garantizar que el documento condense únicamente hitos consolidados y aprobados por el usuario.

### 5.2 Estructura y Contenido Requerido en cada Actualización
Cuando el usuario ordene actualizar `CONTEXTO.md`, el documento debe estructurarse obligatoriamente con las siguientes secciones:
1.  **Resumen Ejecutivo:** Alcance global del bloque de trabajo completado.
2.  **Evolución Detallada y Decisiones de Diseño:** Explicación precisa de qué componentes se crearon o modificaron, qué paleta o físicas se adoptaron y por qué.
3.  **Matriz de Problemas y Soluciones:** Tabla detallada de errores (TypeScript, Vite, layout, animaciones), causa raíz y la solución técnica exacta implementada.
4.  **Estado Actual y Próximos Pasos:** Verificación del estado del build (`npm run build`), estado del dev server y la siguiente fase o sección a abordar.

---
*Directiva aprobada y en vigor para el desarrollo del proyecto NovaLab Product Ops Showcase.*
