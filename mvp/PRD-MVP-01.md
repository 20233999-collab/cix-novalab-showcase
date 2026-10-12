# PRD — MVP 01: SMART CANVAS CIX (AI-POWERED INTAKE SIMULATOR)

**Proyecto:** Centro de InnovaCXión BCP (CIX) / NovaLab Product Ops Showcase  
**Documento:** `mvp/PRD-MVP-01.md`  
**Fase de Implementación:** FASE 1 (Semanas 1–4) — Estandarización de Entrada & Calidad desde la Fuente  
**Naturaleza:** Simulador Interactivo Minimalista (Click-through / Presentation Tool)  
**Objetivo Operativo:** Demostrar cómo se erradica el 80% de observaciones y retrabajos (causas Pareto: 34% muestra, 24% métricas, 22% copy legal) antes de enviar a Riesgos y Legal.

---

## 1. PRINCIPIOS DE DISEÑO & EXPERIENCIA (STORYTELLING EN VIVO)
* **Texto Ultra Reducido:** La interfaz no tiene manuales ni explicaciones densas. Contiene indicadores de estado, números limpios, switches y badges. El usuario (expositor) narra la historia verbalmente.
* **Fidelidad CIX BCP:** 
  * Fondo Deep Navy (`#080B1A` / `#0D1126`).
  * Acentos funcionales: Clementine Gold (`#FEA900`), Indigo CIX (`#3B49DF`), Verde Validación (`#10B981`) y Alerta Escarlata (`#D92107`).
  * Tipografía: `JetBrains Mono` para códigos/métricas y sans geométrica para labels.
* **Zero Backend / 100% Interactivo:** Estados simulados en memoria (React state) que reaccionan a clics y micro-interacciones inmediatas.

---

## 2. ARQUITECTURA DE PANTALLAS DEL SIMULADOR

El MVP 01 se navega como un flujo interactivo lineal o mediante un selector de pasos superior (Stepper `01 → 02 → 03 → 04`):

```
[01. DASHBOARD] ──► [02. AUDIO INTAKE] ──► [03. SPLIT CANVAS + IA] ──► [04. ONE-PAGER READY]
   (Bento Labs)         (Voz a Texto)         (Alertas & Gating)          (Fast-Track Sent)
```

---

### PANTALLA 1: DASHBOARD & DISPARADOR (Inicio Limpio)
* **Propósito:** Mostrar el punto de partida del PM en NovaLab.
* **Componentes UI:**
  * **Header Minimal:** Selector de Lab activo (Dropdown tipo píldora: *Lab Inversiones* [seleccionado por ser el de mayor fricción, 78% rechazo], *Lab Pagos*, *Lab Pymes*, *Lab Seguros*).
  * **Status Bar:** Badge `Gating Rule: ACTIVA` · `Ficha Anterior: Concluida ✓`.
  * **Call to Action Central:** Botón protagonista con micro-glow:  
    `[ + NUEVO EXPERIMENTO // AI ASSISTED ]`
  * **Mini Bento de Fondo:** 2 tarjetas de telemetría pasiva (*Experimentos en curso: 3*, *Tasa histórica de retrabajo: 61%*).

---

### PANTALLA 2: INTAKE AUDITIVO (Fricción Cero)
* **Propósito:** Demostrar que el PM no tiene que rellenar un formulario aburrido desde cero, sino hablar de su experimento.
* **Componentes UI:**
  * **Visual Central:** Botón de Micrófono circular interactivo con onda de sonido animada (*breathing pulse* Índigo/Clementine).
  * **Prompt minimal:** `"Dicta tu experimento o pulsa 'Simular Audio'"`
  * **Acción de Simulación:** Al pulsar el micro o el botón `[ Escuchar Caso: Inversión Jóvenes ]`:
    * Se transcribe automáticamente en una caja terminal limpia:
      > *"Queremos probar un botón de inversión rápida en la app para jóvenes de 18 a 25 años. Vamos a mandar un push notification la próxima semana..."*
  * **CTA de Transición:** Botón reactivo `[ PROCESAR CON CO-PILOTO IA ⚡ ]`.

---

### PANTALLA 3: EL EXPERIMENT CANVAS DIVIDIDO (El Núcleo del MVP)
* **Propósito:** Mostrar la detección de vacíos críticos (Muestra y Métricas) y el bloqueo automático (*Gating*).
* **Layout:** Split-Screen equilibrado (50% Canvas / 50% Asistente Normativo).

#### Columna Izquierda (Canvas Estructurado):
1. **Hipótesis & Segmento:** Pre-llenado en verde (`18-25 años · Push notification · Inversión app`).
2. **Tamaño de Muestra (34% causa de rechazo):**
   * *Estado Inicial:* Vacío / Borde ámbar con tag `MDE No Definido`.
   * *Control interactivo:* Slider o botón rápido `[ Calcular MDE Automático ]` ➔ Asigna muestra con significancia estadística `95%` y pasa a verde.
3. **Métrica Primaria (24% causa de rechazo):**
   * *Estado Inicial:* Resaltado en **Rojo Escarlata** `[ ⚠️ SIN KPI PRIMARIO ]`.
   * *Control interactivo:* Selector rápido de 1 clic: `[ + Tasa de Conversión a Inversión (%)]`.
4. **Copy & Disclaimers Legales (22% causa de rechazo):**
   * *Estado Inicial:* Advertencia `Texto pendiente de validación legal`.
   * *Dropdown Inteligente:* Desplegable con 3 cláusulas preaprobadas por Legal BCP.
   * *Acción:* Al seleccionar `Cláusula Legal Preaprobada #03 (Campaña Inversión Joven)`, el campo se sella en **Verde Esmeralda** con badge `Zero-Touch Legal ✓`.

#### Columna Derecha (Auditoría en Tiempo Real & Gating):
* **Score de Calidad de Entrada:** Indicador radial o barra de progreso animada que sube de `40%` ➔ `75%` ➔ `100%` conforme el usuario interactúa con la izquierda.
* **Card de Advertencia Activa:**
  * *Texto dinámico corto:* `"2 campos críticos incompletos. El 58% de rechazos históricos ocurren aquí."`
* **Botón de Envío Inferior (Gating Mecánico):**
  * *Estado Inicial:* **BLOQUEADO (Gris opaco + Icono Candado cerrado + label: "GATING ACTIVO // 2 CAMPOS FALTANTES")**. Clic no permitido.
  * *Estado Final (cuando los campos están resueltos):* Transición fluida a **Verde Esmeralda brillante + Candado abierto + label: "EXPEDIENTE BLINDADO // ENVIAR A REVISIÓN"**.

---

### PANTALLA 4: ONE-PAGER READY & SALIDA FAST-TRACK
* **Propósito:** Mostrar la victoria operativa: un expediente de 1 página listo para aprobación en carril rápido.
* **Componentes UI:**
  * **Modal o Vista de Hoja Técnica (One-Pager):** Tarjeta glassmorphism compacta con estructura limpia:
    * *ID:* `EXP-2026-INV-012`
    * *Lab:* `Inversiones (CIX)`
    * *Riesgo Calculado:* `Verde / Bajo Impacto (Green Lane Candidate)`
    * *Sellos de Validación:* `[Muestra Validada ✓]` · `[Métricas Definidas ✓]` · `[Legal Preaprobado ✓]`
  * **Acción de Éxito:** Badge animado `"ENVIADO A REVISIÓN SINCRÓNICA"` con estimación de resolución: `< 48 Horas` (vs 20 días anteriores).
  * **Botón de Reset / Nueva Prueba:** Para reiniciar la demo durante la exposición.

---

## 3. ESPECIFICACIÓN DE CONTROLES DE PRESENTACIÓN (SPEAKER HELPERS)
Para que tú tengas control total durante tu exposición:
1. **Píldoras de Acceso Rápido:** En la barra superior, botones pequeños `[Paso 1]` `[Paso 2]` `[Paso 3]` `[Paso 4]` para saltar a cualquier pantalla al instante si el evaluador hace una pregunta.
2. **Botón "Completar Rápido" (Auto-Solve):** En la Pantalla 3, un botón discreto de prueba `[ Resolver Faltantes ⚡ ]` que llena métricas, muestra y legal con un solo clic, permitiéndote mostrar el desbloqueo del botón de gating en 2 segundos si tienes poco tiempo.

---

## 4. ENTREGABLE TÉCNICO EN `mvp/`
* **Directorio:** Crearemos la app del MVP dentro de `mvp/` (estructura standalone o montada sobre el tooling existente).
* **Stack sugerido:** React + Vite + Tailwind + Framer Motion (para que sea ultra liviana, rápida de correr y visualmente idéntica al estándar CIX).
