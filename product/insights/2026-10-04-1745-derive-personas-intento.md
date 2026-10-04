---
source: derived
status: not-derivable
confidence: low
sources: product/insights/2026-10-04-1730-encuesta-postres-para-visitas.md (6 respuestas reales analizadas, `source: survey`); product/surveys/2026-10-04-respuestas-postres-para-visitas.csv
date: 2026-10-04
---

# Intento de `/derive-personas`: con estos datos no se puede

**Conclusión:** no se derivó ninguna persona. El corpus real son 6 respuestas de encuesta, de la familia y por un solo canal, y ninguna entrevista real. Es menos de lo que pide la skill (unas 4 o 5 entrevistas reales o una encuesta con datos suficientes para ver patrones) y no hay un grupo de compradores del que derivar. Se hizo igual el agrupamiento, marcado como baja confianza, para dejar registrado qué se vería y qué falta.

## Corpus

- Respuestas reales analizadas: 6 (se excluye la fila del 4/10 17:17, que parece una prueba de la investigadora). Los nombres P1 a P6 siguen el orden de llegada del 28/9 al 29/9.
- Entrevistas reales: 0. La única entrevista del repo (Carolina) y las 12 de `notas/ensayo/` son sintéticas y **no entran**.

## Grupos candidatos, por comportamiento

| Grupo | Quiénes | Cobertura | Qué comparten (con evidencia) | Confianza |
|---|---|---|---|---|
| A. Cocinan el postre | P1, P2, P3, P4, P5 | 5 de 6 | Lo hicieron ellos o alguien de su casa; lo justifican porque "sale más rico que comprado" (3) o "sale más barato" (3); solo 1 dice "me gusta cocinar" | Baja: mezcla 2 de 60 o más y 3 de 30 a 44, todos de la red familiar; P1, P2 y P4 contestan que decide otra persona |
| B. Compra por falta de tiempo y destreza | P6 | 1 de 6 | Compró en pastelería, "más o menos" conforme, lo notó "pesado" y "artificial", pagó $20.000; "que sea rico y alcance" | Ninguna: una sola persona |

Dentro del grupo A no se separan subgrupos (por ejemplo, planifica con días y decide el mismo día) sin inventar: los 5 se reparten entre "mismo día" (1), "día anterior" (2) y "4 días o más" (2).

## Por qué no se redactó una persona

- **A** describe a quien cocina, que según tu oportunidad **no es el segmento** (anfitriones que compran el postre). Derivar una persona de ahí daría una descripción de un perfil que, además, tu brief ya cubre con la persona Diego.
- **B** es una sola respuesta: es una anécdota, no un patrón.
- Casi todas las secciones de una persona (objetivos, frustraciones, tareas, dispositivo) quedarían "no evidence yet": la encuesta no pregunta por eso.

## Reconciliación con las personas sintéticas

| Persona | Qué muestran los datos reales |
|---|---|
| Carolina Benítez (primary) | No observada. P6 se parece a su frustración (pesado, artificial, poco conforme), pero con n = 1 no la valida |
| Gustavo Ferrari (primary) | No observado |
| Diego Salvatierra (primary) | Parcialmente consistente con el grupo A (saben hacer postres), pero ningún cocinero contó que compre cuando no le da el tiempo, que es lo que lo define |
| Lucía Romero (secondary) | No observada |
| Nélida Paz (negative) | No observada: los 2 de 60 o más cocinan y no mencionan restricciones |

No se propone ningún cambio de `type:` ni se modificó ningún archivo de `product/personas/`.

## Qué haría falta

- Respuestas o entrevistas de **quienes compran el postre**, de un canal que no sea la familia.
- Al menos 4 o 5 entrevistas reales con la guía de `product/interview-guides/`, empezando por quienes contradicen el objetivo 1.
- Con eso, volver a correr `/derive-personas`.
