# PROPUESTA DE MVP 2: SMART ROUTING & FAST-TRACK (AI Triage)
**Documento de Definición de Producto y Flujo de Aprobación Concurrente**

## 1. CONCEPTO DEL MVP
Un sistema de **Gobernanza Concurrente Automatizada** que reemplaza el modelo de aprobación secuencial (que actualmente toma hasta 20 días). Actúa como un semáforo inteligente de triaje ("Triage") que clasifica el nivel de riesgo de cada experimento, automatizando la aprobación de pruebas sencillas (Fast-Lane) y derivando los casos complejos a sesiones síncronas de alto impacto, eliminando el "peloteo" de correos.

## 2. DINÁMICA DE FUNCIONAMIENTO (El Flujo Híbrido)

1. **Autoevaluación del PM:** Al terminar de usar el "Smart Canvas" (MVP 1), el sistema le pide al Product Manager que sugiera un carril de riesgo para su experimento basándose en su criterio:
   *   🟩 **Carril Verde (Minimal/No Risk):** Cambios de UI (color, textos genéricos), pruebas sin cruce de PII (datos personales) ni impacto financiero.
   *   🟨 **Carril Amarillo (Transparency-Risk):** Pruebas que requieren comunicación especial, uso de nuevos canales o promociones simples.
   *   🟥 **Carril Rojo (High-Risk):** Pruebas de pricing, nuevos productos de crédito, o uso intensivo de datos sensibles (PII).
2. **El Veredicto del Agente IA (Policy-as-Code):** El PM propone, pero la IA dispone. Un motor de reglas evalúa el *Experiment Canvas* en segundos escaneando parámetros (Ej: Si detecta la variable "Historial Crediticio", el sistema sabe que es PII). Si el PM eligió "Verde" pero la IA detecta datos sensibles, el sistema hace un *override* (anulación) y lo reclasifica a "Rojo", justificando la razón normativa.
3. **El Fast-Lane (Carril Verde):** Si la IA confirma que es un riesgo mínimo y los parámetros están dentro de los umbrales prefijados, se habilita la **Aprobación Automática en menos de 24 horas**. Riesgos y Legal solo reciben una notificación pasiva ("Para su conocimiento"), sin necesidad de intervenir.
4. **El "War Room" (Carriles Amarillo y Rojo):** Para los casos complejos, se elimina la revisión secuencial por email. El sistema agenda automáticamente el experimento en el *Comité Ágil Semanal* (una reunión en vivo de 20-30 minutos). Allí, Riesgos, Legal y el PM analizan el *One-Pager* pre-masticado por la IA y toman la decisión en esa misma sesión.

## 3. SUSTENTO METODOLÓGICO (Basado en el Notebook)
*   **Gobernanza Concurrente vs. Secuencial:** Pasamos de un flujo "en cascada" a evaluaciones automatizadas mediante "motores de reglas de riesgo y verificación de privacidad (PII)" desde el inicio del embudo.
*   **Implementación de Políticas como Código (Policy-as-Code):** Las regulaciones del banco dejan de ser un PDF estático y se incrustan en el sistema, permitiendo que la IA actúe como un "Supervisor" que aplica las reglas en tiempo de ejecución.
*   **Optimización del Talento Humano:** Riesgos y Legal dejan de fungir como "correctores de ortografía" de pruebas menores y concentran sus horas-hombre de alto valor únicamente en las pruebas complejas (Carril Rojo).

## 4. LAS 3 MÉTRICAS DE ÉXITO (North Star Metrics)

1.  **Porcentaje de Experimentos en Fast-Track (Tasa de Automatización):**
    *   *Definición:* Volumen de experimentos que logran ser aprobados vía Carril Verde.
    *   *Meta del MVP:* Lograr que el **30% - 40% del backlog** fluya por aprobación automática (cero intervención humana), descongestionando el sistema inmediatamente.
2.  **Reducción del "Lead Time" en Casos Críticos:**
    *   *Diagnóstico actual:* Los casos observados demoran 20 días hábiles.
    *   *Meta del MVP:* Reducir el tiempo de aprobación de los experimentos del Carril Rojo a un **máximo de 5 días hábiles**, gracias al modelo de resolución en vivo ("War Room").
3.  **Horas-Hombre Ahorradas en Control (Efficiency Gain):**
    *   *Definición:* Tiempo recuperado por los analistas de Riesgos y Legal al no tener que revisar correos de bajo riesgo.
    *   *Meta del MVP:* Liberar al menos un **40% del tiempo operativo** de las áreas de control, permitiéndoles enfocarse en innovación estratégica en lugar de micro-gestión.

---

## 5. FLUJO DE USUARIO Y PANTALLAS (Para Prototipado)

### Pantalla 1: El Checkout de Triage (Vista del PM)
*   **Visual:** Pantalla de confirmación tras llenar el Canvas. Tres tarjetas (Bento Grid) grandes para Verde, Amarillo y Rojo.
*   **Funcionalidad:** El PM hace clic en la tarjeta de su elección. Al confirmar, aparece un loader (estado de carga) simulando el "Análisis de IA en curso".
*   **Microinteracción de corrección:** Si la IA difiere del PM, salta un modal (*pop-up*) con borde Rojo Escarlata: *"⚠️ Reclasificación Automática: Tu prueba ha sido movida a Riesgo Alto porque incluye el parámetro [Tokenización de Ingresos]."*

### Pantalla 2: El Inbox de Aprobaciones (Vista de Riesgos / Legal)
*   **Visual:** Un tablero Kanban o "Inbox" limpio estilo plataforma SaaS (ej. Jira o Asana optimizado).
*   **Funcionalidad:** 
    *   Columna 1: **"Aprobados por IA (Solo lectura)"** (Los verdes, con badge de "Fast-Lane").
    *   Columna 2: **"Pendientes para War Room"** (Los rojos y amarillos).
*   **Detalle:** Las tarjetas de la Columna 2 tienen etiquetas automáticas generadas por la IA (Ej: `Alerta: PII detectado`, `Requiere revisar Copy legal`), para que el analista sepa exactamente qué buscar antes de la reunión.

### Pantalla 3: El Espacio de Resolución "War Room" (Compartido)
*   **Visual:** Una interfaz de colaboración en vivo enfocada en el expediente.
*   **Funcionalidad:** Muestra el *Experiment Canvas* completo. Abajo tiene un panel de decisión rápida.
*   **Acción de Cierre:** Tres botones enormes de decisión final tomados en la reunión en vivo: `Aprobar`, `Iterar Diseño`, `Descartar`. Al darle a Aprobar, el experimento pasa automáticamente a la cola de "Implementación en TI".