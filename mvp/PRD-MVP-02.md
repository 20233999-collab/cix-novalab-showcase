# PRD — MVP 02: SMART ROUTING & FAST-TRACK (AI TRIAGE & GOBERNANZA CONCURRENTE)

**Proyecto:** Centro de InnovaCXión BCP (CIX) / NovaLab Product Ops Showcase  
**Documento:** `mvp/PRD-MVP-02.md`  
**Fase de Implementación:** FASE 2 (Semanas 5–8) — Rediseño de Gobernanza & Activación del Fast-Track  
**Naturaleza:** Simulador Interactivo Ultra Minimalista (Click-through / Presentation Tool)  
**Objetivo Operativo:** Demostrar cómo se reduce el tiempo de aprobación de **20 días a <24 horas** para el 70% de experimentos (Carril Verde) y a **<5 días** para casos complejos (War Room / Carril Rojo), liquidando el peloteo secuencial por correo.

---

## 1. PRINCIPIOS DE DISEÑO & EXPERIENCIA (STORYTELLING EN VIVO)
* **Texto Ultra Reducido:** Cero manuales. Interfaz dominada por códigos cromáticos funcionales:
  * 🟩 **Verde Esmeralda (`#10B981`):** *Green Lane* (<24h Auto-Approval / Zero-Touch).
  * 🟨 **Ámbar CIX (`#FEA900`):** *Yellow Lane* (Revisión asistida / Transparencia).
  * 🟥 **Escarlata BCP (`#E11D48`):** *Red Lane* (War Room sincrónico semanal / PII sensible).
* **Storytelling del "Override" Normativo (Policy-as-Code):** El PM propone ingenuamente "Verde", pero la IA detecta una variable de riesgo financiero/PII y hace un **override automático** a "Rojo" justificándolo en 1 línea.
* **Dual View (Perspectivas de la Gobernanza):**
  * Vista 1: Checkout de Triaje del PM (Móvil).
  * Vista 2: Tablero Kanban Concurrente de Riesgos & Legal (Bandeja / War Room en escritorio o tablet).

---

## 2. ARQUITECTURA DE PANTALLAS Y FLUJO DEL SIMULADOR

```
[01. CHECKOUT DE TRIAJE] ──► [02. OVERRIDE DEL AGENTE IA] ──► [03. INBOX RIESGOS / KANBAN] ──► [04. WAR ROOM DECISIÓN]
    (Selección de Carril)         (Policy-as-Code Escaneo)         (Fast-Lane vs Pendientes)        (Aprobación en Vivo)
```

---

### PANTALLA 1: EL CHECKOUT DE TRIAJE (Vista Móvil del PM)
* **Propósito:** El PM finaliza el Smart Canvas (MVP 1) y clasifica el riesgo de su experimento.
* **Componentes UI Minimalistas:**
  * **Header:** `TRIAGE DE RIESGO // EXP-095`.
  * **3 Tarjetas Táctiles de Carril (Semáforo CIX):**
    1. 🟩 **VERDE (UI & Textos):** Badge `<24H` · Sin impacto financiero ni datos PII.
    2. 🟨 **AMARILLO (Canales & Promo):** Badge `<48H` · Nuevos canales de comunicación.
    3. 🟥 **ROJO (Pricing & PII):** Badge `WAR ROOM` · Scoring crediticio, tasas o transacciones.
  * **Interacción del Expositor:** El usuario toca la tarjeta **VERDE** con confianza y pulsa:  
    `[ CONFIRMAR CARRIL VERDE ⚡ ]`.

---

### PANTALLA 2: EL "OVERRIDE" DE LA IA (Policy-as-Code en Acción)
* **Propósito:** Mostrar que el banco no depende del sesgo o la buena fe del PM; las reglas del BCP están codificadas en el sistema.
* **Micro-interacción de Escaneo (1.2s):**
  * Pulso visual escaneando variables del Canvas: `Escaneando variables... [Tokenización] [Ingresos]`.
* **El Momento Eureka (Alerta Escarlata de Reclasificación):**
  * Salta una tarjeta con borde **Rojo Escarlata pulsante**:
    * Tag: `OVERRIDE AUTOMÁTICO // POLICY-AS-CODE`
    * Motivo minimal: `"Detectado parámetro sensible: [Tokenización de Ingresos]. Reclasificado a Carril Rojo."`
  * **Acción obligatoria:** Botón `[ DERIVAR A WAR ROOM SEMANAL → ]`.

---

### PANTALLA 3: EL INBOX CONCURRENTE (Vista de Riesgos & Legal)
* **Propósito:** Demostrar cómo Riesgos y Legal dejan de recibir cadenas de 40 correos y ven un pipeline ordenado.
* **Layout:** Tablero limpio con 2 carriles clave:
  1. **Carril Fast-Lane (Solo Lectura / 40% del Backlog):**
     * Experimentos verdes aprobados automáticamente por la IA.
     * Badge: `APROBADO POR IA (<24H) ✓` · Cero correos requeridos.
  2. **Carril War Room (Comité Sincrónico Semanal):**
     * Experimento `EXP-095` en espera del comité del jueves.
     * Badge de Alerta: `PII DETECTADO · 20 MIN AGENDA`.
  * **Acción del Expositor:** Tocar la tarjeta `EXP-095` para entrar al War Room virtual.

---

### PANTALLA 4: EL ESPACIO DE RESOLUCIÓN "WAR ROOM" (Decisión en 20 Minutos)
* **Propósito:** Mostrar cómo se toma la decisión en una sesión de 20 minutos entre Producto, Riesgos y Legal.
* **Componentes UI:**
  * **Resumen One-Pager Compacto:** 
    * Hipótesis + Guardrails de Seguridad definidos.
    * Dictamen previo del Agente IA: *"Riesgo mitigado si se limita al 5% del segmento."*
  * **Consola de Decisión Concurrente (3 Botones Gigantes):**
    * 🟩 **`[ APROBAR ]`** ➔ Pasa inmediatamente a despliegue TI.
    * 🟨 **`[ ITERAR ]`** ➔ Devuelve al PM con observación puntual fijada.
    * 🟥 **`[ DESCARTAR ]`** ➔ Cierra el expediente sin pérdida de tiempo.
  * **Feedback Visual al Aprobar:** Sello verde vibrante `APROBADO CONCURRENTE // TIEMPO TOTAL: 3 DÍAS HÁBILES` (vs 20 días tradicionales).

---

## 3. MÉTRICAS NORTH STAR MOSTRADAS EN EL SIMULADOR
* **Tasa Fast-Track:** `38%` de experimentos aprobados con Zero-Touch humano.
* **Lead Time Casos Críticos:** Reducción de **20 días hábiles a 3.5 días**.
* **Horas-Hombre Liberadas:** `45%` de ahorro de tiempo para analistas de control.

---

## 4. INTEGRACIÓN CON EL SHOWCASE Y MVP 01
* Al estar ubicado en `mvp/`, este MVP 02 puede coexistir como la **Columna Central / Derecha** de la pantalla principal (junto al iPhone del MVP 01), logrando que la audiencia vea a la izquierda al **PM enviando desde el móvil** y a la derecha al **Comité de Riesgos/Legal aprobando en tiempo real en la pantalla grande**.
