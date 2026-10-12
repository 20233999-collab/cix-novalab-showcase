# PRD — MVP 03: TELEMETRÍA, FEATURE FLAGS & AUTO-KILL SWITCH (SAFE LAUNCH)

**Proyecto:** Centro de InnovaCXión BCP (CIX) / NovaLab Product Ops Showcase  
**Documento:** `mvp/PRD-MVP-03.md`  
**Ruta / Vista Standalone:** `mvp/mvp03.html` (Servidor: `http://localhost:3000/mvp03.html`)  
**Fase de Implementación:** FASE 3 (Semanas 9–12) — Telemetría, Seguridad & Safe Launch  
**Formato Obligatorio:** Mockup de Celular iPhone idéntico al MVP 01 y 02 (350x700px, Dynamic Island, sin scrollbars, fondo corporativo CIX).  
**Objetivo Operativo:** Demostrar cómo se desacopla el despliegue técnico de la liberación al usuario con **Feature Flags progresivos**, cómo opera el **Auto-Kill Switch** ante la degradación de métricas de salvaguarda (Guardrails), y cómo el **Gating de Aprendizajes** sube la documentación del 25% al 100%.

---

## 1. PRINCIPIOS DE DISEÑO & EXPERIENCIA (STORYTELLING EN VIVO)
* **Texto Ultra Reducido:** La interfaz utiliza sliders táctiles, interruptores (toggles), electrocardiogramas de estado y badges numéricos.
* **Fidelidad CIX BCP:** 
  * Fondo abisal con acentos: Verde Esmeralda (`#10B981` normal), Ámbar (`#FEA900` atención) y Escarlata Crítico (`#E11D48` kill switch).
  * Tipografía `JetBrains Mono` para métricas (ms de latencia, % de exposición, conteo de reclamos).
* **El Momento "Eureka" del Expositor:**
  * Al subir la exposición con el slider, la latencia de la app se dispara a `+820ms`.
  * La IA ejecuta el **Auto-Kill Switch** en milisegundos sin intervención humana, apagando la prueba y protegiendo a los clientes del banco.

---

## 2. ARQUITECTURA DE PANTALLAS EN EL CELULAR (MOCKUP IPHONE)

```
[01. COCKPIT SLIDER] ──► [02. DISPARO GUARDRAIL] ──► [03. AUTO-KILL SWITCH] ──► [04. GATING DE APRENDIZAJE]
  (Exposición 1%→10%)       (Latencia >800ms)         (Rollback Inmediato)          (Ficha Obligatoria)
```

---

### PANTALLA 1: EL COCKPIT DE DESPLIEGUE (Feature Flag Slider)
* **Propósito:** Mostrar cómo el PM controla la exposición de su experimento sin depender de la cola de TI de 6 días.
* **Componentes UI:**
  * **Header:** `DESPLIEGUE SEGURO // EXP-095`.
  * **Switch Maestro:** Toggle `FEATURE FLAG: ACTIVO` (Verde).
  * **Slider de Tráfico Táctil:**
    * Control interactivo de exposición: `1%` ➔ `5%` ➔ `10%` ➔ `50%`.
    * Tag dinámico: `5,000 usuarios expuestos (Segmento Jóvenes Beta)`.
  * **Mini Cards de Guardrails en Tiempo Real (Verdes/Normales):**
    * *Conversión Primaria:* `+3.4%` (Verde).
    * *Latencia App:* `140 ms` (Verde / Umbral <300ms).
    * *Error Rate:* `0.02%` (Verde / Umbral <0.1%).
  * **Acción del Expositor:** Subir el slider al **10%** o pulsar `[ ESCALAR A 10% TRÁFICO ]`.

---

### PANTALLA 2: DISPARO DE GUARDRAIL EN VIVO (Alerta de Riesgo)
* **Propósito:** Demostrar el monitoreo automatizado de la experiencia del cliente.
* **Interacción:** Al subir el tráfico, la latencia se dispara:
  * La tarjeta de Latencia parpadea en **Rojo Escarlata**: `820 ms ⚠️ (LÍMITE CRÍTICO EXCEDIDO)`.
  * Badge de Alerta: `DEGRADACIÓN DE PERFORMANCE DETECTADA`.
  * Contador regresivo automático de 1 segundo: *"Ejecutando freno de emergencia..."*

---

### PANTALLA 3: AUTO-KILL SWITCH (Freno de Emergencia Algorítmico)
* **Propósito:** Neutralizar la Falacia del Costo Hundido; el sistema no espera reuniones ni reportes, apaga el experimento en milisegundos.
* **Componentes UI:**
  * **Modal Escarlata Central con Icono de Apagado:**
    * Tag: `AUTO-KILL SWITCH ACTIVADO (42ms)`.
    * Motivo: *"Latencia > 800ms superó guardrail de seguridad."*
    * Acción ejecutada: `Rollback instantáneo a versión estable. 0 usuarios impactados en producción.`
    * Estado del Feature Flag: **APAGADO (Gris/Rojo)**.
  * **Botón de Cierre de Incidente:** `[ REGISTRAR LECCIÓN APRENDIDA → ]`.

---

### PANTALLA 4: EL GATING DE APRENDIZAJES (Cero Amnesia Institucional)
* **Propósito:** Evitar la fuga de conocimiento obligando al equipo a documentar antes de empezar otra prueba.
* **Componentes UI:**
  * **Bloqueo del Sistema:** Badge `NUEVO EXPERIMENTO: BLOQUEADO POR GATING`.
  * **Ficha Rápida de Aprendizaje (3 toques):**
    * *Resultado:* `NO CONCLUYENTE (KILL-SWITCH)`.
    * *Causa Raíz:* `Sobrecarga en microservicio de tokenización`.
    * *Decisión:* `Optimizar backend antes de reintentar`.
  * **Acción de Desbloqueo:** Botón `[ GUARDAR EN BCP BRAIN ]`.
  * **Resultado Final:** Sello `100% CAPTURA DE CONOCIMIENTO ✓` y desbloqueo del portafolio.

---

### PANTALLA 5 (OPCIONAL EN TOGGLE / TAB): RADAR DIRECTIVO DE OPS
* **Propósito:** Widget de vista de águila para el Director de NovaLab:
  * Cycle time reducido a 38 días.
  * Conclusividad científica recuperada: de 50% a >75%.
  * 0 incidentes no controlados en producción.

---

## 3. INTEGRACIÓN TÉCNICA
* **Archivo:** Se implementará como **[`mvp/mvp03.html`](file:///home/laptop/Documentos/cix-caso/mvp/mvp03.html)** en servidor local `http://localhost:3000/mvp03.html`.
* **Marco de Celular:** Exactamente la misma estructura (350x700px, botones de hardware titanio, Dynamic Island y fondo corporativo CIX).
* **Cero afectación al MVP 01 (`index.html`) ni al MVP 02 (`mvp02.html`).**
