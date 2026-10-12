# PROPUESTA DE MVP 4: KNOWLEDGE REPO AI & MECANISMO DE GATING
**Documento de Definición de Producto: Memoria Institucional y Buscador RAG**

## 1. CONCEPTO DEL MVP
Una plataforma de **Gestión de Conocimiento Centralizada** equipada con un motor de Inteligencia Artificial Conversacional (RAG). Transforma los aprendizajes muertos en un activo corporativo reutilizable. Incluye una regla operativa infranqueable de *Gating* (Bloqueo de Presupuesto) que condiciona el inicio de nuevos experimentos a la documentación de los pasados, erradicando la amnesia institucional del banco.

## 2. DINÁMICA DE FUNCIONAMIENTO (El "ChatGPT de NovaLab")

1. **El Buscador Conversacional (Previo al Diseño):** Antes de idear algo nuevo, el PM o Analista entra al "Nova Search". En lugar de buscar en carpetas de Windows, escribe en lenguaje natural: *"¿Qué hemos probado antes sobre notificaciones de pago para Pymes?"*.
2. **Síntesis IA (RAG - Retrieval-Augmented Generation):** En 3 segundos, la IA escanea el historial de todo el banco y le genera un resumen ejecutivo. Devuelve gráficos, resultados exactos (concluyentes o no), y los descargos legales que se usaron en ese momento.
3. **Mecanismo de Gating (El Peaje Operativo):** Cuando un PM termina de medir su experimento actual (MVP 3), el sistema bloquea su cuenta para crear nuevos "Smart Canvas" (MVP 1). El botón de "Nuevo Experimento" está grisado con el mensaje: *"Tienes 1 Ficha de Aprendizaje pendiente"*. 
4. **La Ficha Markdown Estructurada:** Para desbloquearse, el PM debe llenar una Ficha de Aprendizajes rápida y pre-formateada, documentando la hipótesis, la métrica final y por qué funcionó o falló. Una vez aprobada, el ciclo vuelve a empezar.
5. **Alineación Transversal:** Todo el banco tiene acceso a los aprendizajes en tiempo real, creando un ecosistema de cero trabajo duplicado y respuestas instantáneas del pasado.

## 3. SUSTENTO CUALITATIVO, CUANTITATIVO Y BENCHMARK

*   **El Dolor Actual (Datos de la Amnesia):** La documentación en NovaLab colapsó del 50% en T1 a un crítico **25% en el T4**. Laboratorios como Pymes y Seguros apenas documentan el 20% y 22%. 
*   **La Evidencia de la Duplicidad:** El dolor más grande reportado en las encuestas fue no poder acceder a datos de otros. El PM de Seguros lo confirmó: *"Lanzamos un experimento de notificaciones y después me enteré de que Pymes había probado algo casi igual meses antes."* Se pierden meses de trabajo por no cruzar información.
*   **Benchmark Global (Referentes externos):** 
    *   **Airbnb (Knowledge Repo):** Resolvieron este mismo caos construyendo un repositorio en código abierto. Obligan a usar formatos estructurados y revisiones por pares (Peer Review) antes de cerrar un proyecto. Multiplicaron el consumo interno de aprendizajes de 50 a más de 250 usuarios semanales.
    *   **IntuitionLabs (RAG en Pharma/Tech):** Utilizan motores de Generación Aumentada por Recuperación (RAG) para que los científicos pregunten a la IA sobre experimentos pasados, evitando repetir fallos y ahorrando millones en pruebas duplicadas.

## 4. MITIGACIÓN DE SESGOS COGNITIVOS

*   **Tragedia de los Bienes Comunes (Tragedy of the Commons):** Un repositorio de conocimiento es un "bien público". Todos quieren consumir datos ajenos, pero nadie quiere gastar tiempo en subir los propios. El mecanismo de *Gating* soluciona esto imponiendo un costo individual real por no contribuir.
*   **Descuento Hiperbólico (Present Bias):** Los equipos prefieren la recompensa inmediata (iniciar el proyecto emocionante del futuro) frente a la tarea aburrida (documentar el proyecto del pasado). Al atar el presupuesto de la nueva idea a la documentación de la anterior, el sistema alinea la motivación presente con la responsabilidad corporativa.
*   **Sesgo de Confirmación:** Al obligar a documentar *todos* los experimentos, incluso los fallidos, se evita que los equipos oculten sus errores y se fomenta una verdadera cultura de aprendizaje (Learning Rate).

## 5. LAS 3 MÉTRICAS DE ÉXITO (North Star Metrics)

1.  **Tasa de Cumplimiento de Documentación (Knowledge Capture):**
    *   *Diagnóstico actual:* 39% promedio anual (25% en T4).
    *   *Meta del MVP:* Alcanzar un **100% de cumplimiento estricto**, garantizado mecánicamente por la regla de Gating (Sin ficha, no hay nuevo canvas).
2.  **Reducción de la Tasa de Duplicidad Estratégica:**
    *   *Definición:* Número de experimentos rebotados en etapas tempranas porque la IA detecta que ya se ejecutaron en los últimos 12 meses.
    *   *Meta del MVP:* **Cero (0) experimentos duplicados** en el año, ahorrando aproximadamente 46 días de ciclo por cada idea repetida evitada.
3.  **Tasa de Aprendizaje (Learning Rate - Modelo Spotify):**
    *   *Definición:* Cambiar la medición de "Éxito vs Fracaso" a "¿El experimento produjo datos confiables?".
    *   *Meta del MVP:* Recuperar y superar la conclusividad, pasando del 50% actual a un **>64%**, asegurando que cada prueba sume al "IQ" del banco.

---

## 6. FLUJO DE USUARIO Y PANTALLAS (Para Prototipado)

### Pantalla 1: El Muro de Gating (Bloqueo de PM)
*   **Visual:** El panel principal de creación de experimentos (MVP 1), pero el botón principal está desactivado.
*   **Funcionalidad:** Un *banner* superior naranja: *"⚠️ Tienes 1 experimento concluido esperando documentación. Completa la Ficha de Aprendizaje para desbloquear nuevo presupuesto."*
*   **Acción:** Un botón que redirige directamente a la plantilla de cierre.

### Pantalla 2: El Buscador de Inteligencia "Nova Search"
*   **Visual:** Interfaz limpia inspirada en Google o Perplexity. Un cuadro de búsqueda central amplio con el logo de la IA de NovaLab.
*   **Texto sugerido (Placeholder):** *"Pregúntame sobre experimentos pasados, métricas de conversión o segmentos de clientes..."*
*   **Funcionalidad:** Al escribir la búsqueda, la pantalla muestra un estado de *Carga RAG* ("Consultando Knowledge Repo...").

### Pantalla 3: Resultados Generados por RAG (Vista de IA)
*   **Visual:** Una interfaz tipo chat conversacional, pero rica en datos (Rich Text).
*   **Funcionalidad:** 
    *   **Respuesta Sintetizada:** *"Encontramos 2 experimentos sobre Notificaciones Pymes (Q2 y Q3). El Laboratorio Pymes descubrió que enviar SMS aumentaba la conversión en 4%, pero elevaba los reclamos un 12%."*
    *   **Tarjetas Clickeables:** Debajo del texto, dos "tarjetas de experimento" originales para hacer clic y ver el Canvas técnico completo, los gráficos de métricas y los textos legales preaprobados que se usaron en ese entonces.
    *   **Botón de Acción:** `Clonar Experimento y Mejorar`.