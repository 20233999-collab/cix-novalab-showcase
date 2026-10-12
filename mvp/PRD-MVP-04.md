# PRD — MVP 04: KNOWLEDGE REPO AI & GATING DE MEMORIA INSTITUCIONAL (RAG SEARCH)

**Proyecto:** Centro de InnovaCXión BCP (CIX) / NovaLab Product Ops Showcase  
**Documento:** `mvp/PRD-MVP-04.md`  
**Ruta / Vista Standalone:** `mvp/mvp04.html` (Servidor: `http://localhost:3000/mvp04.html`)  
**Fase de Implementación:** FASE 4 (Semanas 13–16) — Memoria Organizacional & RAG IA  
**Formato Obligatorio:** Mockup de Celular iPhone idéntico a los MVPs anteriores (350x700px, Dynamic Island, sin scrollbars, fondo corporativo CIX).  
**Objetivo Operativo:** Erradicar la amnesia institucional (documentación caída al 25% en T4) y la duplicación de experimentos entre laboratorios (Pymes vs Seguros) mediante el buscador semántico con IA (**BCP Brain / Nova Search**) y la regla de **Gating de Conocimiento**.

---

## 1. PRINCIPIOS DE DISEÑO & EXPERIENCIA (STORYTELLING EN VIVO)
* **Texto Ultra Reducido:** La interfaz privilegia la búsqueda asistida en lenguaje natural, chips de consulta rápida, tarjetas sintetizadas con KPIs e indicadores de duplicidad.
* **Fidelidad CIX BCP:** 
  * Fondo abisal (`#060919`) con acento Clementine Gold (`#FEA900`), Indigo CIX (`#3B49DF`) y Verde Validación (`#10B981`).
  * Tipografía `JetBrains Mono` para IDs de experimentos (`EXP-064`, `EXP-071`), fechas y métricas.
* **El Momento "Eureka" del Expositor:**
  * El PM va a crear un experimento nuevo, pero antes consulta al buscador de IA: *"¿Qué hemos probado en notificaciones para Pymes?"*.
  * La IA le responde en 1 segundo con la síntesis histórica exacta: *"Ya se probó en Q2 por Seguros. Enviar SMS elevó reclamos un 12%. Te ahorras 46 días de prueba fallida"*.
  * Un botón directo permite `[ CLONAR Y EVITAR ERROR HISTÓRICO ]`.

---

## 2. ARQUITECTURA DE PANTALLAS EN EL CELULAR (MOCKUP IPHONE)

```
[01. EL MURO DE GATING] ──► [02. NOVA SEARCH (RAG)] ──► [03. SÍNTESIS INTELIGENTE] ──► [04. CLONAR APRENDIZAJE]
 (Botón Bloqueado por Ficha)    (Buscador Semántico)       (Detección de Duplicidad)      (Ahorro de 46 Días)
```

---

### PANTALLA 1: EL MURO DE GATING (Bloqueo de Cuenta / Peaje)
* **Propósito:** Demostrar cómo se ataca la Tragedia de los Bienes Comunes: nadie puede iniciar un nuevo experimento si tiene una ficha de aprendizaje pendiente.
* **Componentes UI:**
  * **Header:** `CIX NOVALAB // PORTAFOLIO`.
  * **Alerta Superior Naranja:**
    * Badge: `⚠️ GATING ACTIVO // 1 FICHA PENDIENTE`.
    * Texto minimal: *"No hay nuevo presupuesto sin registrar aprendizajes del experimento anterior."*
  * **Botón Principal Desactivado:**
    * `[ + NUEVO EXPERIMENTO (BLOQUEADO) 🔒 ]`.
  * **Acción Rápida de Desbloqueo:** Tocar `[ COMPLETAR FICHA PENDIENTE ]` ➔ Desbloquea el acceso a la plataforma de búsqueda.

---

### PANTALLA 2: NOVA SEARCH (El Buscador RAG)
* **Propósito:** Mostrar la facilidad con la que un PM consulta el conocimiento colectivo del BCP en lugar de inventar la rueda.
* **Componentes UI:**
  * **Header:** `BCP BRAIN // RAG SEARCH`.
  * **Barra de Búsqueda con Icono IA:**
    * Input minimal con brillo índigo/dorado.
    * Placeholder: *"Pregunta sobre experimentos pasados..."*
  * **Chips de Búsqueda Rápida (1 Tap para la Demo):**
    * Chip A: `"Notificaciones Push en Pymes"` (El caso real de duplicidad del caso).
    * Chip B: `"Descuentos en Fondos Mutuos"`.
  * **Micro-interacción de Carga RAG:** Al pulsar el chip, aparece un spinner sutil: *"Escaneando 44 experimentos históricos..."*.

---

### PANTALLA 3: SÍNTESIS GENERADA POR IA (Detección de Duplicidad)
* **Propósito:** Mostrar cómo la IA previene un error que ya costó 2 meses de trabajo en el pasado.
* **Componentes UI:**
  * **Tarjeta de Síntesis RAG (Rich AI Response):**
    * Badge: `2 EXPERIMENTOS HISTÓRICOS ENCONTRADOS`.
    * Síntesis: *"Lab Pymes probó Push SMS en Q2 (`EXP-064`). Resultado: +4% conversión pero disparó reclamos al Call Center en +12%."*
  * **Alerta de Duplicidad:**
    * Tag Escarlata: `DUPLICIDAD EVITADA: 46 DÍAS DE TRABAJO AHORRADOS`.
  * **Tarjeta de Expediente Original (`EXP-064`):**
    * Lab: `Pymes` · Resultado: `Concluyente Negativo`.
    * Descargo legal preaprobado reutilizable.

---

### PANTALLA 4: CLONAR & EVITAR ERROR HISTÓRICO (Cierre)
* **Propósito:** Cerrar el ciclo mostrando cómo el nuevo experimento nace robusto y con conocimiento previo.
* **Componentes UI:**
  * **Sello:** `MEMORIA INSTITUCIONAL ACTIVADA ✓`.
  * **Resumen de Eficiencia:**
    * *Experimentos duplicados:* `0% (Erradicado)`.
    * *Cumplimiento de documentación:* `100%`.
  * **Acciones:**
    * `[ CLONAR Y MEJORAR CANVAS → ]` (Lleva al diseño ya pre-llenado con lo aprendido).
    * `[ NUEVA BÚSQUEDA ]`.

---

## 3. INTEGRACIÓN TÉCNICA
* **Archivo:** Se creará de forma aislada en **[`mvp/mvp04.html`](file:///home/laptop/Documentos/cix-caso/mvp/mvp04.html)**.
* **Servidor Local:** Accesible en `http://localhost:3000/mvp04.html`.
* **Marco de Celular:** Idéntico (350x700px, Dynamic Island, sin scrollbars, paleta CIX).
* **Blindaje:** `index.html` (MVP 01), `mvp02.html` y `mvp03.html` quedan 100% intactos.
