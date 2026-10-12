# GUÍA DIAGNÓSTICA EXHAUSTIVA: ANÁLISIS DE PROBLEMAS, CAUSAS RAÍZ Y SESGOS COGNITIVOS EN NOVALAB (BCP)

---

## 1. RESUMEN EJECUTIVO Y MATRIZ PARETO (EL 20% PALANCA)

El presente documento constituye un diagnóstico operativo y conceptual profundo sobre el proceso de experimentación en **NovaLab** (centro de innovación de Banco Andino / BCP). 

El objetivo estratégico de este análisis es aplicar el **Principio de Pareto (Regla del 80/20)** para identificar cuál es el **20% de las fallas de entrada** que está generando el **80% de la fricción, retrasos y reprocesos** en todo el ciclo de vida de los experimentos.

### El Diagnóstico en Cifras Macro
* **Déficit de Entregables (Output):** Meta anual de **60 experimentos** vs. **44 alcanzados** (déficit del 26.7%).
* **Ralentización Sistémica (Cycle Time):** El tiempo medio de ciclo pasó de **38 días hábiles en T1** a **57 días hábiles en T4** (deterioro del 50%).
* **Caída de Eficiencia (Throughput):** La productividad trimestral se desplomó un **42.8%** entre el primer y último trimestre (14 en T1 vs. 8 en T4).
* **Inventario Bloqueado (Backlog):** **23 ideas de negocio** acumuladas en cola esperando entrar al flujo.

---

### MATRIZ DE PRIORIZACIÓN PARETO (80/20)

```
[20% PALANCA PARETO] ──► Entrada Defectuosa y Falta de Estandarización (Etapas 1 y 2)
                                 │
                                 ▼
                     Genera el 80% de Fricción:
                     ├─► 61% de Experimentos Observados
                     ├─► +150% de Penalización de Tiempo en Aprobaciones (20 vs 8 días)
                     ├─► Caída de Conclusividad Científica (64% a 50%)
                     └─► Amnesia Organizacional y Duplicación de Experimentos
```

| Prioridad | Problema Local (NovaLab) | Impacto Cuantitativo Clave | Falla Estructural de Fondo | Sesgo Cognitivo / Fundamento Científico |
| :--- | :--- | :--- | :--- | :--- |
| **P1 (Palanca 80/20)** | **Ausencia de Estandarización y Entrada Defectuosa (Etapas 1 y 2)** | • **61% de observados** (27/44 exp).<br>• **80% de rechazos** concentrados en 3 errores de diseño (muestras 34%, métricas 24%, comms 22%). | **Ausencia de Gobernanza Operativa e Intake Condicional.** Inexistencia de un *Experiment Canvas* obligatorio y reglas preestablecidas. | • *Racionalidad Limitada* (Simon)<br>• *Sesgo de Acción* & *Ley de Goodhart*<br>• *Maldición del Conocimiento* & *In-Group Bias* |
| **P2** | **Cuello de Botella en Aprobaciones y Flujo en Cascada (Etapa 3)** | • **20 días hábiles** de aprobación si hay observaciones (+150%).<br>• Cycle time total elevado de **38 a 57 días hábiles**. | **Gobernanza Tradicional Secuencial (*Waterfall*).** Control defensivo asincrónico por correo en vez de triaje concurrente. | • *Aversión a la Pérdida* (Kahneman & Tversky)<br>• *Sesgo de Riesgo Cero*<br>• *Status Quo Bias* |
| **P3** | **Amnesia Organizacional y Fuga de Aprendizajes (Etapas 6 y 7)** | • Documentación cayó de **50% (T1) a 25% (T4)**.<br>• Conclusividad cayó de **64% (T1) a 50% (T4)**.<br>• Reinvención de la rueda. | **Inexistencia de Repositorio Vivo y Reglas de Cierre (*Gating*).** Etapa de documentación configurada como "opcional". | • *Descuento Hiperbólico* (Present Bias)<br>• *Sesgo de Confirmación*<br>• *Tragedia de los Bienes Comunes* |

---

## 2. PROBLEMA PRIORITARIO 1 (LA PALANCA PARETO): AUSENCIA DE ESTANDARIZACIÓN Y ENTRADA DEFECTUOSA

### A. Descripción del Problema Local
La Etapa 1 (Definición de hipótesis) y la Etapa 2 (Diseño del experimento) se ejecutan de forma completamente desarticulada y libre. Cada laboratorio utiliza formatos propios en presentaciones de PowerPoint o hojas de cálculo de Excel sin campos obligatorios ni validaciones previas. Esto provoca que el **80% de los expedientes enviados a revisión contengan errores conceptuales, estadísticos o legales básicos**.

---

### B. Sustento Cuantitativo Exhaustivo

1. **Tasa de Observación Global:**
   * **61% de los experimentos (27 de 44)** sufrieron al menos una observación y devolución formal durante su evaluación.
   * **41 observaciones totales** registradas sobre los 27 experimentos devueltos.

2. **Desglose Anatómico de las Observaciones (Causas de Rechazo):**
   * **34% (14 observaciones):** *Segmento o tamaño de muestra no definido.* Los laboratorios no calculaban el tamaño muestral necesario ($MDE$) ni delimitaban los criterios de inclusión/exclusión de clientes.
   * **24% (10 observaciones):** *Métricas de éxito no definidas.* Imposibilidad de determinar de antemano qué resultado cuantitativo daría por validada o refutada la hipótesis.
   * **22% (9 observaciones):** *Falta de detalle en la comunicación al cliente.* Textos comerciales, piezas gráficas o copys sin revisión preliminar.
   * **15% (6 observaciones):** *Tratamiento de datos personales (PII) no evaluado.* Falta de identificación de campos sensibles y cláusulas de consentimiento normativo.
   * **5% (2 observaciones):** *Otros aspectos técnicos u operativos.*

3. **Disparidad Extrema entre Laboratorios (Efecto Silo):**

| Laboratorio | Exp. Lanzados | Tiempo Promedio (Días) | % Experimentos Observados | % Conclusivos | % Documentados |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Pagos** | **14** | **36** | **29% (4/14)** | **79% (11/14)** | **71% (10/14)** |
| **Inversiones** | 11 | 49 | 73% (8/11) | 45% (5/11) | 27% (3/11) |
| **Pymes** | 10 | 52 | 80% (8/10) | 40% (4/10) | 20% (2/10) |
| **Seguros** | 9 | 51 | 78% (7/9) | 56% (5/9) | 22% (2/9) |
| **TOTAL / PROM.** | **44** | **46** | **61% (27/44)** | **57% (25/44)** | **39% (17/44)** |

---

### C. Sustento Cualitativo Exhaustivo

* **Falta de Claridad Normativa:**
  > *"Mandamos el diseño a Riesgos y nos lo devuelven por cosas que nadie nos dijo que había que incluir. Cada ida y vuelta es una semana más."*  
  — **Líder del Laboratorio Pymes**

* **Definición Reactiva de Métricas:**
  > *"Muchas veces nos damos cuenta al final del experimento de que no medimos lo que necesitábamos para decidir. Las métricas se terminan definiendo sobre la marcha."*  
  — **Analista de Datos del Laboratorio Inversiones**

* **Recepción de Expedientes Incompletos en Control:**
  > *"Nos llegan diseños incompletos: no sabemos a cuántos clientes va dirigido el experimento ni a cuáles. Todo lo revisamos por correo..."*  
  — **Analista de Riesgos**

* **Aislamiento e Inexistencia de Transmisión de Buenas Prácticas:**
  > *"Armamos una plantilla propia con todo lo que Riesgos y Legal nos suelen pedir. Desde que la usamos, casi no nos observan. Nunca la compartimos con los otros laboratorios, no se nos ocurrió."*  
  — **Líder del Laboratorio Pagos**

---

### D. Falla Estructural de Fondo
NovaLab opera bajo una **ausencia total de arquitectura de entrada (*Smart Intake*) y estandarización metodológica**. Product Operations no ha establecido un artefacto único obligacional (como un *Experiment Canvas*) ni un catálogo unificado de métricas. Se permite que cada equipo diseñe de forma empírica y desestructurada, trasladando la responsabilidad de "descubrir las reglas" a la etapa de revisión con las áreas de control. Es el clásico fenómeno informático de ***Garbage In, Garbage Out***.

---

### E. Fundamento Científico y Sesgos Cognitivos Asociados

#### 1. Racionalidad Limitada (*Bounded Rationality* - Herbert Simon)
* **Principio:** Los individuos toman decisiones basadas únicamente en la información que está inmediatamente disponible en su entorno cognitivo acotado, no en la información óptima total.
* **Manifestación en NovaLab:** Los analistas y PMs diseñan experimentos en PPT usando la información que recuerdan o intuitivamente consideran relevante. Al no contar con un *checklist* o marco normativo visible a la mano, omiten sistemáticamente la PII, el tamaño de muestra y los descargos legales.

#### 2. Sesgo de Acción (*Action Bias*) y Ley de Goodhart
* **Principio:** Ante la presión por cumplir un objetivo, las personas prefieren ejecutar acciones inmediatas (lanzar el experimento rápido) descuidando la preparación. La *Ley de Goodhart* complementa esto: cuando una medida (lanzar 60 experimentos) se convierte en la meta, deja de ser una buena medida de valor real.
* **Manifestación en NovaLab:** La dirección exigió cuantitativamente "60 experimentos al año". Los equipos se volcaron a enviar propuestas apresuradas a aprobación sin haber cerrado el diseño estadístico ni legal, prefiriendo la ilusión de avance sobre el rigor científico.

#### 3. La Maldición del Conocimiento (*Curse of Knowledge*) y Sesgo Endogrupal (*In-Group Bias*)
* **Principio:** Cuando un individuo o subgrupo encuentra la solución a un problema, le resulta cognitivamente difícil asumir que otros no la conocen. A la vez, el *In-Group Bias* lleva a los equipos a priorizar el éxito de su propia "tribu" frente al colectivo.
* **Manifestación en NovaLab:** El laboratorio de Pagos resolvió el problema creando su propia plantilla interna (logrando 29% de observados y 36 días de ciclo), pero admitió que *"nunca se les ocurrió compartirla"*. Asumieron implícitamente que el problema era obvio o se enfocaron únicamente en su propio indicador.

---

## 3. PROBLEMA PRIORITARIO 2: CUELLO DE BOTELLA EN APROBACIONES Y FLUJO EN CASCADA

### A. Descripción del Problema Local
La Etapa 3 (Aprobaciones de Riesgos y Legal) constituye el cuello de botella físico del proceso. La revisión se realiza mediante intercambio asincrónico de correos electrónicos y bajo una secuencia lineal estricta: primero evalúa Riesgos y, únicamente cuando este emite su conformidad, el expediente es derivado a Legal. Si Legal encuentra un hallazgo en la etapa final, el diseño es devuelto al laboratorio y **todo el circuito de revisión se reinicia desde cero**.

---

### B. Sustento Cuantitativo Exhaustivo

1. **Penalización del Tiempo por Observación (Costo de la No-Calidad):**
   * Experimento **SIN observaciones:** Tarda **8 días hábiles** en aprobarse.
   * Experimento **CON observaciones:** Tarda **20 días hábiles** en aprobarse.
   * **Penalización temporal:** **+150% de retraso (+12 días hábiles adicionales por experimento devuelto).**
   * Promedio actual real de la Etapa 3: **15 días hábiles** (frente al objetivo interno no formalizado de 7 días).

2. **Deterioro Progresivo del Cycle Time Anual:**

```
T1: 38 días hábiles
T2: 44 días hábiles  (▲ +15.8%)
T3: 51 días hábiles  (▲ +15.9%)
T4: 57 días hábiles  (▲ +11.8%)
─────────────────────────────────────────
Deterioro Total Anual: +50% en velocidad
```

3. **Impacto Directo en la Productividad y Backlog:**
   * **Caída del Throughput:** De 14 lanzamientos en T1 a solo 8 en T4 (caída del 42.8%).
   * **Incumplimiento del Plan:** 44 lanzamientos finales vs. 60 comprometidos (-26.7%).
   * **Efecto Embalse:** **23 ideas de negocio** varadas en el backlog sin poder iniciar experimentación.

---

### C. Sustento Cualitativo Exhaustivo

* **Visión de la Alta Dirección:**
  > *"Cuando un experimento no es concluyente, perdimos dos meses y no sabemos si la idea era mala o si el experimento estaba mal diseñado. Y cuando por fin tenemos una respuesta, a veces ya pasó tanto tiempo que la oportunidad cambió."*  
  — **Director de NovaLab**

* **Efecto Cascada y Reinicio del Flujo:**
  > *"La mayoría de consultas que recibimos son sobre lo mismo: los textos que se envían al cliente y los consentimientos. Nos llegan después de que Riesgos ya aprobó, así que si observamos algo, el laboratorio tiene que volver a empezar."*  
  — **Asesora de Legal**

---

### D. Falla Estructural de Fondo
El modelo de gobierno de control opera bajo un esquema tradicional secuencial ***Waterfall***. Las áreas de segunda línea de defensa (Riesgos y Legal) actúan como **jueces e inspectores al final de la cadena**, en lugar de habilitadores concurrentes integrados al diseño. No existe una segmentación por niveles de riesgo (*Triaje / Fast-Track*): un cambio mínimo de copy en una pantalla pasa por el mismo flujo burocrático de correos que un nuevo producto crediticio de alto riesgo.

---

### E. Fundamento Científico y Sesgos Cognitivos Asociados

#### 1. Aversión a la Pérdida (*Loss Aversion* - Kahneman & Tversky)
* **Principio:** El dolor psicológico asociado a una pérdida es aproximadamente el doble de intenso que el placer experimentado ante una ganancia equivalente.
* **Manifestación en NovaLab:** Para un analista de Riesgos o Legal, el costo reputacional o regulatorio de aprobar un experimento con una falla normativo es altísimo y personal. Por el contrario, el beneficio de que el experimento se lance 12 días antes es capturado por el laboratorio. Por ende, la aversión a la pérdida los motiva a ser hiper-vigilantes y pausar expedientes ante cualquier duda.

#### 2. Sesgo de Riesgo Cero (*Zero-Risk Bias*)
* **Principio:** Tendencia intuitiva a preferir la reducción absoluta de un riesgo en un subdominio específico (incluso a un costo exorbitante de tiempo/eficiencia), en lugar de una reducción óptima del riesgo sistémico global.
* **Manifestación en NovaLab:** Riesgos y Legal buscan llevar a cero el riesgo normativo individual revisando exhaustivamente cada palabra por correo, ignorando que esa parálisis operativa destruye el valor del portafolio de innovación del banco.

#### 3. Sesgo del Statu Quo (*Status Quo Bias*)
* **Principio:** Tendencia a mantener el estado actual de las cosas o los procesos establecidos, percibiendo cualquier alternativa de cambio como un riesgo potencialmente peligroso.
* **Manifestación en NovaLab:** La revisión secuencial mediante hilos de correos se mantiene simplemente porque "así se han tramitado las aprobaciones históricamente en el banco", bloqueando la transición hacia un modelo de comités concurrentes o aprobaciones automáticas basadas en código/reglas.

---

## 4. PROBLEMA PRIORITARIO 3: AMNESIA INSTITUCIONAL Y FUGA DE APRENDIZAJES

### A. Descripción del Problema Local
La Etapa 7 (Documentación de aprendizajes) es tratada como un paso **opcional, desestructurado y sin medición de tiempo**. Al finalizar la medición en campo, los equipos sienten la urgencia de pasar inmediatamente al siguiente proyecto. Esto provoca que el conocimiento generado en las pruebas se disipe en carpetas compartidas locales, impidiendo la capitalización del aprendizaje, reduciendo la calidad de los experimentos y provocando la duplicación de pruebas fallidas.

---

### B. Sustento Cuantitativo Exhaustivo

1. **Colapso Sistemático de la Documentación:**
   * **T1:** 50% de experimentos documentados (7/14).
   * **T2:** 42% de experimentos documentados (5/12).
   * **T3:** 30% de experimentos documentados (3/10).
   * **T4:** **25% de experimentos documentados (2/8).**
   * **Promedio Anual:** **Solo el 39% de los experimentos (17 de 44) registraron sus aprendizajes.**

2. **Desglose de Documentación por Laboratorio:**
   * **Pymes:** Solo el **20%** documentado (2/10).
   * **Seguros:** Solo el **22%** documentado (2/9).
   * **Inversiones:** Solo el **27%** documentado (3/11).
   * **Pagos:** **71%** documentado (10/14) — *Refleja nuevamente la brecha cultural de Pagos.*

3. **Caída en la Calidad Científica (Conclusividad Estadísticos):**
   * **T1:** 64% de experimentos concluyentes (9/14).
   * **T2:** 58% de experimentos concluyentes (7/12).
   * **T3:** 50% de experimentos concluyentes (5/10).
   * **T4:** **50% de experimentos concluyentes (4/8).**
   * **Impacto:** **43% de los experimentos del año (19 de 44) fueron INCONCLUSOS.** Se consumieron 2 meses de trabajo por prueba sin obtener datos útiles para tomar decisiones de negocio.

---

### C. Sustento Cualitativo Exhaustivo

* **Percepción en la Encuesta de Clima Laboral/Operativo:**
  > En la encuesta a los miembros de los laboratorios, el factor **peor evaluado de todo el centro de innovación** fue la *"posibilidad de acceder a lo que aprendieron otros laboratorios"*.

* **Evidencia Directa de Reinvención de la Rueda (Duplicidad):**
  > *"No sé qué han probado los otros laboratorios. Hace poco lanzamos un experimento de notificaciones de pago y después me enteré de que Pymes había probado algo casi igual meses antes."*  
  — **Product Manager del Laboratorio Seguros**

---

### D. Falla Estructural de Fondo
NovaLab padece de **Gestión de Conocimiento Cero (*Zero Knowledge Management*)** e ineficiencia en las reglas de gobernanza de cierre (*Gating*). La documentación no está integrada al flujo de trabajo ni condiciona el presupuesto/autorización de nuevas hipótesis. No existe un repositorio centralizado e indexado (estilo *Airbnb Knowledge Repo* o *Spotify Metrics Catalog*) con taxonomía unificada o búsqueda inteligente.

---

### E. Fundamento Científico y Sesgos Cognitivos Asociados

#### 1. Descuento Hiperbólico (*Hyperbolic Discounting* / *Present Bias*)
* **Principio:** La psique humana tiende a valorar desproporcionadamente las recompensas inmediatas en comparación con los beneficios futuros de mayor magnitud.
* **Manifestación en NovaLab:** Recibir el reconocimiento por diseñar e iniciar un nuevo proyecto otorga gratificación inmediata. En contraste, sentarse a redactar la ficha de aprendizajes de un experimento concluido solo beneficia al banco en un futuro incierto. Al ser opcional, la mente humana pospone la documentación de forma indefinida (cayendo del 50% al 25%).

#### 2. Sesgo de Confirmación (*Confirmation Bias*)
* **Principio:** Tendencia a buscar, interpretar y recordar información de manera que confirme las hipótesis o creencias previas.
* **Manifestación en NovaLab:** Cuando las métricas se definen "sobre la marcha" o al final de la prueba, los equipos ajustan la interpretación de los datos a posteriori para evitar aceptar que la idea fracasó. Esto explica por qué el **43% de los experimentos resultaron inconclusos**: no se diseñaron con criterios rigurosos de refutación previa.

#### 3. La Tragedia de los Bienes Comunes (*Tragedy of the Commons*)
* **Principio:** Un recurso de acceso público o compartido se degrada y destruye cuando los usuarios actúan buscando su interés individual, sin incentivos directos para mantener o nutrir la infraestructura común.
* **Manifestación en NovaLab:** El repositorio de conocimiento es un "bien común". Como ningún laboratorio tiene el incentivo ni la obligación individual de nutrirlo, todos lo abandonan, destruyendo la memoria corporativa y obligando al equipo de Seguros a repetir a ciegas lo que Pymes ya había ejecutado.

---

## 5. DIAGNÓSTICO PROFUNDO: CADENA DE CAUSALIDAD (LOS 5 PORQUÉS)

Para comprender cómo se interconectan estas fallas, se aplica la técnica de análisis de la causa raíz de los **5 Porqués** a la problemática central:

```
[SÍNTOMA MACRO]
NovaLab solo lanzó 44 de 60 experimentos y su tiempo de ciclo escaló a 57 días hábiles.
       │
       ├─► ¿Por qué 1? Porque el 61% de los experimentos fueron rebotados y tardaron 20 días en aprobarse.
       │      │
       │      ├─► ¿Por qué 2? Porque Riesgos y Legal observaron errores en muestras (34%), métricas (24%) y copys (22%).
       │             │
       │             ├─► ¿Por qué 3? Porque los laboratorios envían expedientes incompletos en PPT/Excel sin diseño estadístico ni legal previo.
       │                    │
       │                    ├─► ¿Por qué 4? Porque Product Operations no provee un Experiment Canvas estandarizado ni un Intake condicional.
       │                           │
       │                           └─► ¿Por qué 5? (CAUSA RAÍZ ÚLTIMA)
       │                               Porque NovaLab opera con una gobernanza tradicional secuencial (Waterfall),
       │                               en silos sin memoria corporativa, intentando hacer innovación ágil sobre procesos
       │                               de control pensados para banca tradicional.
```

---

## 6. BENCHMARKS GLOBALES Y MARCO DE REFERENCIA (CÓMO LO RESUELVEN LOS LÍDERES)

Para contextualizar cómo la industria financiera global de escala y las tecnológicas líderes resuelven estas fallas estructurales, se destacan tres referencias del mercado:

### 1. Capital One (Gobernanza Automatizada & *Compliance-by-Design*)
* **Desafío:** Evitar que los controles de seguridad y compliance frenen el ritmo de lanzamientos continuos.
* **Solución:** Implementación de *Policy-as-Code* (usando Open Policy Agent - OPA) directamente en las tuberías de despliegue (CI/CD). Integración de un *Smart Intake Form* que valida automáticamente el tamaño de muestra y la PII antes de notificar a los revisores humanos.
* **Resultado:** Despliegue de miles de cambios diarios garantizando disponibilidad de "cinco nueves" (99.999%) y reduciendo las revisiones manuales en lanzamientos de bajo riesgo a menos de 24 horas.

### 2. Spotify (Plataforma de Experimentación & *Learning Rate*)
* **Desafío:** Coordinar más de 500 experimentos concurrentes en una sola pantalla sin interferencias ni pérdida de aprendizajes.
* **Solución:** Creación de una plataforma central (*Confidence*) con catálogo unificado de métricas. Reemplazo de la métrica de éxito tradicional (*Win Rate*) por el **Tasa de Aprendizaje (*Learning Rate*)**, midiendo cuántos experimentos entregan datos decisionales concluyentes.
* **Resultado:** Tasa de aprendizaje elevada al **64%**, eliminando el sentimiento de fracaso en experimentos descartados y centralizando el historial de aprendizajes.

### 3. Airbnb (Gestión del Conocimiento & *Knowledge Repo*)
* **Desafío:** Evitar la duplicación de investigaciones y experimentos entre cientos de científicos de datos y PMs.
* **Solución:** Creación del *Knowledge Repo* de código abierto. Cada experimento debe documentarse obligatoriamente en un formato Jupyter/Markdown estructurado con metadatos YAML y pasar por una revisión por pares (*Peer Review*) antes de autorizar el cierre del proyecto.
* **Resultado:** Eliminación total de experimentos duplicados e incremento del consumo de aprendizajes de 50 a más de 250 usuarios activos semanales.

---

## 7. RECOMENDACIONES DE ACCIÓN PARA PRODUCT OPERATIONS

Si la Dirección de NovaLab busca desbloquear el flujo de valor para el próximo año, debe centrar el **80% de su esfuerzo operativo inicial en la Prioridad 1**:

1. **Institucionalizar el *Experiment Canvas Estructurado*:** Prohibir el uso de formatos libres en PPT/Excel. El Canvas debe ser el único contrato válido de diseño.
2. **Implementar el *Smart Intake Form*:** Crear un formulario digital con campos condicionales obligatorios (calculadora de muestra $MDE$, selector de métricas de salvaguarda y catálogo de frases legales preaprobadas).
3. **Establecer la Regla de Cierre (*Gating Rule*):** No autorizar el inicio o presupuesto de un nuevo experimento a una célula que mantenga fichas de aprendizajes pasadas sin registrar en el repositorio central.
