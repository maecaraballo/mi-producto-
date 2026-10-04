# notas/ensayo/: set de ensayo (datos inventados)

Todo lo que hay en esta carpeta es **sintético**. Se generó el 2026-10-04 cuando creí que no había datos reales (en el repo no había respuestas de la encuesta; la única entrevista de `product/interviews/` es sintética). Después llegaron 7 respuestas reales de tu familia: su análisis está en `product/insights/2026-10-04-1730-encuesta-postres-para-visitas.md` y no se mezcla con esto. Sirve para practicar `/analyze-survey` y `/extract-insights`. **No es evidencia** y por eso vive fuera de `product/`.

| Archivo | Qué es | Cómo se hizo |
|---|---|---|
| `respuestas_encuesta.csv` | 30 respuestas inventadas (25 completas, 1 parcial, 4 descalificadas) | Prompt "Generar datos de encuesta" de alaimolabs.com/es/af-prompts, con tu encuesta `product/surveys/2026-09-27-2150-postres-para-visitas.md` como guía |
| `entrevistas/*.md` | 12 transcripciones inventadas (`source: synthetic` en cada una) | Prompt "Generar datos de entrevista" del mismo sitio, con tu guía `product/interview-guides/2026-09-27-2236-postres-para-visitas.md` |
| `analisis-encuesta.md` | Análisis de la encuesta (`/analyze-survey`) | Cifras calculadas con código sobre el CSV |
| `insights-entrevistas.md` | Insights de las 12 entrevistas (`/extract-insights`) | Cruces entre transcripciones |

Reglas que se respetaron:

- **Ninguna creencia de `product/overview.md` se anotó** (`confirmed`, `contradicted` o `weakened`) a partir de estos datos.
- Las fechas de las entrevistas (2026-10-08 a 2026-10-16) son inventadas: caen después de la fecha de cierre prevista de la encuesta, solo para ser coherentes con tu plan.
- Las entrevistas están en español rioplatense (voseo), como indica tu guía; el prompt original pedía tuteo.
- La encuesta real alcanza como máximo a unas 12 personas; este set tiene 30 filas porque lo pide el prompt.
- Cuando haya datos reales, esta carpeta no se reutiliza: los datos reales van a `product/`.
