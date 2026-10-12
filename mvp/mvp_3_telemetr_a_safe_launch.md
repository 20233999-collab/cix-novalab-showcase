# PROPUESTA DE MVP 3: TELEMETRÍA, FEATURE FLAGS & AUTO-KILL SWITCH
**Documento de Definición de Producto: Despliegue Seguro y Monitor de Ops**

## 1. CONCEPTO DEL MVP
Un ecosistema de **Monitoreo en Vivo y Despliegue Progresivo** que desacopla el lanzamiento de código de la liberación al cliente. Otorga a los PMs "interruptores digitales" (Feature Flags) para encender pruebas gradualmente y cuenta con un sistema de "frenado automático" (Auto-Kill Switch) si las métricas de riesgo (Guardrails) se disparan. Además, consolida toda la telemetría en un "Radar de Innovación" para la Dirección de NovaLab.

## 2. DINÁMICA DE FUNCIONAMIENTO (El "Miedo Cero")

1. **Exposición Progresiva (Sliders):** El PM no lanza la prueba al 100% de clientes de golpe. Usa un panel para liberar el experimento al 1%, luego al 5%, luego al 50%. 
2. **Monitoreo de Guardrails (Métricas de Salvaguarda):** El sistema rastrea en vivo métricas secundarias innegociables (Ej: Latencia de la app, aumento de llamadas al Call Center, errores de servidor). 
3. **El Auto-Kill Switch (Freno de Emergencia):** Si un *guardrail* supera el umbral de peligro, el sistema apaga el experimento en milisegundos, devolviendo a los clientes afectados a la experiencia original de inmediato, sin esperar que TI lea un ticket de soporte.
4. **El Peaje de Conocimiento (Gating):** Al finalizar la prueba, el sistema "bloquea" la capacidad del equipo para iniciar un nuevo experimento hasta que llenen la "Ficha de Aprendizaje" con los resultados, forzando la memoria institucional.
5. **El Radar Directivo:** El Director de NovaLab y Product Ops ven en un solo *dashboard* qué pruebas están activas, cuántos días llevan, y qué % están resultando concluyentes, eliminando la ceguera operativa.

## 3. SUSTENTO CUALITATIVO, CUANTITATIVO Y BENCHMARK

*   **El Dolor Actual (Datos):** La falta de medición correcta hace que la "calidad científica" caiga mes a mes. Los experimentos **concluyentes bajaron del 64% al 50%** en el T4. Además, **solo el 25% documenta sus aprendizajes**, creando amnesia institucional. El Director mismo dice: *"Cuando un experimento no es concluyente, perdimos dos meses"*.
*   **El Cuello de TI:** Actualmente, implementar toma **6 días hábiles** en la cola de TI. Con Feature Flags, TI instala el código apagado de antemano y el PM lo enciende cuando decida, eliminando esa espera.
*   **Benchmark Global (Referentes externos):** 
    *   **Spotify (EP / Confidence):** Utilizan catálogos de métricas de salvaguarda que protegen la experiencia del usuario (ej. que una prueba no haga que la gente deje de escuchar música).
    *   **Capital One (Banca de EE.UU.):** Realizan experimentación A/B en integraciones y microservicios complejos usando plataformas de *Feature Flags* (como LaunchDarkly) para garantizar velocidad de despliegue sin comprometer la seguridad transaccional.

## 4. MITIGACIÓN DE SESGOS COGNITIVOS

*   **Falacia del Costo Hundido (Sunk Cost Fallacy):** Los humanos odian "matar" una idea en la que invirtieron meses, incluso si los datos iniciales son malos, esperando que "mejore". El *Auto-Kill Switch* elimina la emoción: si la métrica se rompe, la máquina lo apaga sin piedad.
*   **Descuento Hiperbólico (Present Bias):** Los equipos prefieren la recompensa inmediata de lanzar una nueva prueba antes que la tarea "aburrida" de documentar la pasada. El *Mecanismo de Gating* ("No hay nueva prueba sin documento") obliga a documentar en el presente.
*   **Heurística de Disponibilidad:** El Director hoy juzga la velocidad por los que más "ruido" hacen. El *Dashboard* en vivo reemplaza las opiniones con telemetría objetiva y brutal.

## 5. LAS 3 MÉTRICAS DE ÉXITO (North Star Metrics)

1.  **Recuperación de la Conclusividad Científica:**
    *   *Meta:* Subir el porcentaje de experimentos con resultados concluyentes **del 50% actual a un sólido >75%**, gracias a la medición en vivo de métricas estandarizadas.
2.  **Tasa de Retención de Aprendizaje (Knowledge Capture):**
    *   *Meta:* Pasar **del 25% de documentación al 100%** de captura en el trimestre, habilitado por el candado del sistema (Gating). Cero fugas de conocimiento.
3.  **Reducción del MTTR (Mean Time to Resolution) de Incidentes:**
    *   *Meta:* Reducir el tiempo de reacción ante una falla en producción de "horas/días de reportes" a **segundos**, protegiendo la reputación del banco y la experiencia del cliente.

---

## 6. FLUJO DE USUARIO Y PANTALLAS (Para Prototipado)

### Pantalla 1: El Cockpit de Despliegue (Vista del PM)
*   **Visual:** Una consola de control técnica pero limpia.
*   **Funcionalidad:** En el centro, un control deslizante (*slider*) que va de 0% a 100% para controlar la exposición del experimento.
*   **Microinteracción:** Al mover el slider al 5%, sale un aviso: *"Tráfico ajustado. 5,000 usuarios verán el experimento A."*

### Pantalla 2: Monitor de Guardrails y Alerta de Auto-Kill
*   **Visual:** Un panel con tarjetas de métricas tipo "Electrocardiograma". 
*   **Funcionalidad:** Muestra 3 tarjetas críticas: *Conversión (Primaria)*, *Latencia de App (Guardrail)*, *Reclamos (Guardrail)*.
*   **Estado de Emergencia (Interacción):** La tarjeta de *Latencia* se pone en Rojo Escarlata. Salta un *Modal* automático (pop-up) que cubre la pantalla: *"⚠️ PELIGRO CRÍTICO: La latencia superó los 800ms. El Auto-Kill Switch ha apagado el experimento y restaurado la versión estable. Usuarios afectados: 120."*

### Pantalla 3: El Radar de Product Ops (Vista de la Dirección)
*   **Visual:** Un Dashboard panorámico de "Vista de Águila". Fondo oscuro (Modo Noche) para resaltar los gráficos.
*   **Funcionalidad:** 
    *   Widget 1: **"Velocímetro de Cycle Time"** (Marcando la baja de 57 a 40 días).
    *   Widget 2: **"Salud del Portafolio"** (Ej: 10 corriendo, 3 concluidos, 1 apagado por riesgo).
    *   Widget 3: **"Muro de Aprendizajes"** (Feed en vivo de las conclusiones de los equipos documentadas obligatoriamente).