# DOCUMENTO MAESTRO DE DIAGNÓSTICO: CASO NOVALAB (BCP)

**Tipo de Documento:** Análisis de Estado Actual (As-Is) / Diagnóstico Operativo.
**Audiencia:** Agentes de Inteligencia Artificial, Analistas de Datos, Equipo de Product Operations.
**Restricción de Contenido:** Este documento contiene ÚNICAMENTE problemas, métricas, síntomas y causas raíz comprobables en el caso. NO contiene propuestas de solución.

---

## 1. SÍNTOMA MACRO: DESPLOME DE LA PRODUCTIVIDAD Y VELOCIDAD
NovaLab presenta un deterioro progresivo en su capacidad de entrega y en el "Time to Market" de sus experimentos, estancando el pipeline de innovación.

*   **[Métrica] Brecha de Cumplimiento (Output):** La meta anual de NovaLab era lanzar 60 experimentos. El resultado real proyectado y finalizado es de solo 44 experimentos lanzados (déficit de ~26%).
*   **[Métrica] Decadencia Trimestral (Throughput):** La productividad experimentó una caída progresiva trimestre a trimestre (T).
    *   T1: 14 experimentos lanzados.
    *   T2: 12 experimentos lanzados.
    *   T3: 10 experimentos lanzados.
    *   T4: 8 experimentos lanzados. *(La productividad cayó un 42.8% del inicio al final del año).*
*   **[Métrica] Ralentización del Ciclo de Vida (Cycle Time):** El tiempo total promedio desde la "Definición de hipótesis" hasta el "Análisis y decisión". El promedio anual fue de 46 días hábiles, pero con una tendencia crítica al alza:
    *   T1: 38 días hábiles.
    *   T4: 57 días hábiles. *(El proceso es un 50% más lento en el último trimestre comparado con el primero).*
*   **[Dato Operativo] Estancamiento de Inventario:** Existen 23 ideas en el backlog de los laboratorios bloqueadas o en espera de ser experimentadas.
*   **[Cita] Impacto en el Negocio (Director de NovaLab):** "Cuando por fin tenemos una respuesta, a veces ya pasó tanto tiempo que la oportunidad cambió."

---

## 2. EL CUELLO DE BOTELLA OPERATIVO: APROBACIONES Y RETRABAJOS
El nodo crítico de fricción del flujo de valor ocurre en la transición entre la **Etapa 2 (Diseño del experimento)** y la **Etapa 3 (Aprobaciones)**. El proceso de control es deficiente, secuencial y altamente penalizador en tiempos.

*   **[Métrica] Tasa Crítica de Retrabajo:** El 61% de los experimentos (27 de 44) fueron "observados" (rechazados temporalmente por errores) al menos una vez por las áreas de control.
*   **[Métrica] Costo de la No-Calidad en Tiempo:**
    *   Tiempo si el experimento pasa SIN observaciones: 8 días en aprobarse.
    *   Tiempo si el experimento recibe observaciones: 20 días en aprobarse. *(Penalización de +150% de tiempo).*
    *   Promedio actual de la etapa: 15 días hábiles (El objetivo interno no formalizado es de 7 días).
*   **[Proceso Deficiente] Flujo Secuencial (Cascada) y Comunicación:** Las aprobaciones se hacen por correo electrónico y en orden estricto (primero Riesgos, luego Legal). Si Legal observa un error (normalmente textos o consentimientos, que revisan al final), el diseño vuelve al laboratorio y TODO el ciclo de revisión se reinicia, perdiendo semanas.
*   **[Desglose de Datos] Causas Exactas de Rechazo (41 observaciones totales):**
    *   34% (14 observaciones): Segmento o tamaño de muestra no definido (Afecta a Riesgos).
    *   24% (10 observaciones): Métricas de éxito no definidas (Falla del propio Laboratorio).
    *   22% (9 observaciones): Falta detalle de la comunicación al cliente (Afecta a Legal).
    *   15% (6 observaciones): Tratamiento de datos personales no evaluado (Afecta a Legal/Riesgos).
    *   5% (2 observaciones): Otros.

---

## 3. CAUSA RAÍZ ESTRUCTURAL 1: FALTA DE ESTANDARIZACIÓN Y TRABAJO EN SILOS
Los equipos de los laboratorios cometen errores en la etapa de diseño porque no existen reglas claras, herramientas compartidas, ni requerimientos unificados desde el equipo de Product Operations.

*   **[Problema de Herramientas] Ausencia de Plantillas:** La Etapa 2 (Diseño) se realiza en PPT o Excel "sin formato estándar".
*   **[Cita] Desconexión con Control (Líder Pymes):** "Mandamos el diseño a Riesgos y nos lo devuelven por cosas que nadie nos dijo que había que incluir. Cada ida y vuelta es una semana más."
*   **[Problema Metodológico] Definición Reactiva:** Las métricas no se piensan de antemano. El Analista de Inversiones confirma: "Las métricas se terminan definiendo sobre la marcha. Muchas veces nos damos cuenta al final (...) de que no medimos lo que necesitábamos".
*   **[Métrica Comparativa] El Caso Atípico de Pagos vs. El Resto:**
    *   El Laboratorio de Pagos creó *proactivamente* su propia plantilla incluyendo lo que Riesgos y Legal suelen pedir, pero confesaron: "Nunca la compartimos con los otros laboratorios, no se nos ocurrió".
    *   **Resultados de Pagos:** 14 exp. lanzados / 36 días de ciclo promedio / Solo 29% de observaciones.
    *   **Resultados del Resto (Inversiones, Pymes, Seguros):** Tienen tasas de observación del 73%, 80% y 78% respectivamente. Sus promedios de tiempo rondan los 50 días.
*   **[Hallazgo]** Falla de Product Operations: Al no haber monitoreo transversal, la "buena práctica" de Pagos se quedó en un silo y no escaló para salvar al resto de laboratorios.

---

## 4. CAUSA RAÍZ ESTRUCTURAL 2: FUGA DE CONOCIMIENTO (AMNESIA INSTITUCIONAL)
NovaLab sufre de un grave problema de gestión del conocimiento. No se capitalizan los aprendizajes, lo que genera repetición de errores y desperdicio de presupuesto/tiempo en experimentos duplicados.

*   **[Proceso Deficiente] Etapa de Documentación Inexistente:** La Etapa 7 (Documentación de aprendizajes) está catalogada como "Opcional", se aloja en una carpeta compartida sin formato definido y su tiempo no es medido.
*   **[Métrica] Caída en la Calidad Científica (Conclusividad):** La proporción de experimentos con "resultados concluyentes" (donde la data sirve para tomar decisiones con confianza) cayó drásticamente:
    *   T1: 64% de experimentos concluyentes.
    *   T4: 50% de experimentos concluyentes. (Promedio anual: 57%).
    *   [Cita] Director: "Cuando un experimento no es concluyente, perdimos dos meses y no sabemos si la idea era mala o si el experimento estaba mal diseñado".
*   **[Métrica] Colapso de la Documentación:** El registro de lo aprendido se abandonó a lo largo del año.
    *   T1: 50% de aprendizajes documentados.
    *   T4: 25% de aprendizajes documentados. (Promedio anual: 39%).
    *   El laboratorio de Seguros apenas documenta el 22% y Pymes el 20%.
*   **[Hallazgo Cualitativo] Reinvención de la rueda (Duplicidad):** En la encuesta general, lo peor evaluado fue "la posibilidad de acceder a lo que aprendieron otros laboratorios".
*   **[Cita] Evidencia de Duplicidad (PM de Seguros):** "No sé qué han probado los otros laboratorios. Hace poco lanzamos un experimento (...) y después me enteré de que Pymes había probado algo casi igual meses antes."