# Design System & Visual Specification: CIX NovaLab Product Ops Showcase
**Documento:** `DESIGN.md`  
**Proyecto:** Centro de InnovaCXión del BCP (CIX) / NovaLab Operational Showcase  
**Propósito:** Definición vinculante de la dirección de diseño, tokens visuales, sistema de movimiento, componentes y patrones de interfaz para la plataforma interactiva del caso NovaLab Product Ops (BCP).

---

## 1. Visual Theme & Cinematic Identity

### 1.1 El Concepto: "Deep Abyssal Glass & Concave Horizon"
La experiencia visual combina la sobriedad y escala institucional del BCP con la audacia vanguardista del Centro de InnovaCXión (CIX). Deja atrás las diapositivas corporativas estáticas y adopta una estética de software de alta gama (*Awwwards / Stripe / Apple-grade*) caracterizada por:

*   **Fondo Abisal Deep Navy (`#080B1A`):** Una base profunda, silenciosa y libre de negro puro (`#000000`), con una retícula geométrica técnica sutil (`opacity: 0.06`, pasos de 60px).
*   **Halo Cóncavo CIX Horizon (`GlowHorizonFM`):** Un arco de horizonte que se curva hacia el centro (cóncavo hacia adentro), recreando fielmente el gradiente cromático del logotipo CIX: cresta blanca pura brillante, seguida de un intenso Clementine Gold (`#FEA900`), escarlata BCP (`#D92107`) y una disolución gradual hacia violeta crepuscular (`#3B49DF` / `#190276`) sobre el Navy abisal.
*   **Atmósfera Híbrida:** 
    *   **Hero & Showcases:** Alto contraste en fondo oscuro profundo (`#080B1A`) para generar máxima inmersión y protagonismo a la telemetría.
    *   **Auditoría & Análisis Detallado:** Transición limpia hacia lienzos estructurados (`#F8FAFC`) con tarjetas translúcidas de cristal pulido.
*   **Densidad Analítica (Nivel 6/10):** Tipografía de gran escala, respiración espacial deliberada y micro-tarjetas de datos densas con fuentes monoespaciadas.

---

## 2. Color Palette & Semantic Tokens

La paleta cromática se basa en el escaneo oficial de la identidad visual de CIX BCP:

| Token | Valor Hex / RGBA | Rol Semántico & Caso de Uso |
| :--- | :--- | :--- |
| `--bg-abyssal-navy` | `#080B1A` | Fondo principal del Hero y módulos oscuros de telemetría macro. |
| `--bg-canvas-light` | `#F8FAFC` | Fondo de auditoría, comparativa y módulos de despliegue en canvas claro. |
| `--cix-white-crest` | `#FFFFFF` | Cresta de luz, reflejos superiores y titulares de máximo impacto. |
| `--cix-clementine` | `#FEA900` | Acento protagónico cálido, acento tubelight, resplandor del halo y shimmer. |
| `--cix-indigo` | `#3B49DF` | Acento secundario tecnológico, botones primarios, rieles de progreso y líneas guía. |
| `--cix-scarlet-red` | `#D92107` | Señal de alerta crítica, cuellos de botella (61% retrabajo) y penalización de tiempo. |
| `--cix-twilight` | `#190276` | Sombra y transición final del halo hacia el fondo abisal. |
| `--surface-glass-dark` | `rgba(15, 23, 42, 0.60)` | Tarjetas Bento oscuras con `backdrop-blur-xl` y borde `rgba(255,255,255,0.1)`. |
| `--surface-glass-light` | `rgba(255, 255, 255, 0.85)` | Tarjetas sobre canvas claro con `backdrop-blur-md` y borde `#E2E8F0`. |
| `--signal-emerald` | `#10B981` | Experimentos concluyentes, quick wins y templates exitosos. |

---

## 3. Typographic Architecture

Tipografía rigurosa, geométrica, moderna y corporativa. **Prohibido el uso de `Inter` y fuentes genéricas de sistema.**

*   **Display & Titulares Principales:** `Plus Jakarta Sans` / `Outfit` (Weights: 700 / 800)
    *   Tracking ajustado: `-0.03em`
    *   Leading editorial: `1.15` a `1.18`
*   **Prosa & Lectura:** `Satoshi` / `Geist Sans` (Weights: 400 / 500)
    *   Leading: `1.6`
    *   Ancho máximo: `65ch`
*   **Telemetría, Métricas & Código:** `JetBrains Mono` / `Geist Mono` (Weights: 600 / 700)
    *   Para métricas clave (`44 / 60 Meta`, `57 DÍAS`, `61% RETRABAJO`), chips y etiquetas técnicas en mayúsculas (`uppercase`, tracking `+0.08em`).

---

## 4. Navigation: Tubelight Navbar Architecture

La barra de navegación principal se rige por el componente `tubelight-navbar`:

*   **Posición:** Fija en la parte superior del viewport (`fixed top-4 left-1/2 -translate-x-1/2 z-50`).
*   **Estructura:**
    1.  **Brand Pill (Izquierda):** Logotipo CIX oficial con texto `NovaLab Product Ops` sobre cápsula `bg-slate-900/80` y `backdrop-blur-xl`.
    2.  **Tubelight Navigation (Centro):** Cápsula flotante redondeada (`rounded-full`) con los 4 destinos del showcase:
        *   `01. DATOS`
        *   `02. ¿POR QUÉ?`
        *   `03. BENCHMARKS`
        *   `04. LA PROPUESTA`
    3.  **Efecto Tubelight Lamp:** El tab seleccionado proyecta un halo de luz superior (*lamp glow*) con trazo Clementine Orange (`#FEA900`), sombra difusa cálida y halo índigo (`#3B49DF`) con física de resorte `spring` (`stiffness: 340, damping: 30`).
*   **Minimalismo:** Sin píldoras redundantes o exceso de widgets decorativos en los laterales.

---

## 5. Hero Section: Composition & Loop Dynamics

El Hero es la pieza insignia de la presentación:

1.  **Badge Superior:** 
    *   Cápsula monocromática sobria: `CIX // MIGUEL AMPUERO`.
    *   Micro-pulso ámbar activo en el extremo izquierdo.
2.  **Cita de Deming con Loop Dinámico:**
    *   Texto base: *"En Dios confiamos, todos los demás"* en blanco con sombra de relieve.
    *   **Loop Activo en *"traigan datos."*:**
        *   Gradiente metálico con desplazamiento continuo (*shimmer loop* a 3.2s) entre blanco y Clementine Gold.
        *   Halo difuso posterior (*breathing pulse*) oscilando suavemente en escala y opacidad cada 2.4s.
3.  **Autor & Cargo:**
    *   Rótulo monoespaciado centrado flanqueado por líneas tensoras índigo de 1px: `W. EDWARDS DEMING · PADRE DEL CONTROL ESTADÍSTICO DE CALIDAD`.
4.  **Bento Bar de Telemetría (4 Métricas Clave):**
    *   Disposición horizontal de 4 tarjetas con físicas de elevación (`y: -4px`) y borde reactivo en hover.
    *   Entrada escalonada (*stagger*) al cargar la pantalla.
    *   Barra de progreso animada para el cumplimiento de experimentos (73.3%).
5.  **CTA Primario:**
    *   Botón *"Auditar Datos Trimestrales"* con gradiente Índigo CIX, sombra de elevación y compresión elástica (`whileTap: 0.97`).

---

## 6. Motion System & Micro-Interactions

*   **Curva de Resorte Maestro:** `cubic-bezier(0.16, 1, 0.3, 1)` (Físicas inspiradas en Apple Human Interface & Stripe).
*   **Reglas de Rendimiento:** 
    *   Animaciones continuas restringidas exclusivamente a `transform` y `opacity` (GPU accelerated).
    *   Tiempos de micro-hover: `200ms` a `250ms`.
*   **Accesibilidad Obligatoria:** 
    *   Detección estricta de `prefers-reduced-motion` para desactivar bucles de resplandor y movimientos de traslación en usuarios sensibles.

---

## 7. Anti-Patterns & Slop Prevention (Reglas Inquebrantables)

1.  **CERO gradientes violetas genéricos de IA:** Prohibido `#7C3AED` o morados genéricos de plantillas.
2.  **CERO negro `#000000` puro:** Toda superficie oscura debe ser Deep Navy Abisal (`#080B1A`) o Slate 900 (`#0F172A`).
3.  **CERO emojis:** Iconografía técnica y consistente con trazo uniforme de 1.5px / 2px provista por `lucide-react`.
4.  **CERO títulos centrados flotantes sin contexto:** Todo encabezado debe estar soportado por un badge técnico superior o líneas tensoras de ingeniería.
5.  **CERO bloques de texto masivo en el Hero:** El Hero debe comunicar con contundencia conceptual, datos numéricos y foco en el problema principal.
