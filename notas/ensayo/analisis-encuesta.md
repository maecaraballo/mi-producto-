---
source: synthetic
survey_design: product/surveys/2026-09-27-2150-postres-para-visitas.md
results: notas/ensayo/respuestas_encuesta.csv
n: 30 filas (25 completas, 1 parcial, 4 descalificadas); 26 pasan el filtro
analysis_date: 2026-10-04
status: ensayo (datos inventados, no es evidencia)
---

# Análisis de ensayo: encuesta "cómo resuelven el postre quienes reciben visitas"

> **Estos datos son inventados.** El CSV lo generó una IA con el prompt de alaimolabs.com/es/af-prompts a partir de tu encuesta. Sirve para practicar el análisis, no para decidir nada. **No se anotó ninguna creencia** en `product/overview.md`, y ningún hallazgo de acá confirma ni contradice nada del segmento. Los patrones que aparecen fueron plantados por el generador: que "aparezcan" no los valida.

## 1. Denominador y límites (lo primero)

- **30 filas:** 25 completas, 1 parcial (r18, abandonó después de Q4, a los 140 s) y 4 descalificadas (3 por S2 = "No", 1 por S1 = "Menos de 18"). **n analizable = 26** (25 + 1 parcial) para Q1 a Q4; las demás preguntas tienen n propio, indicado en cada tabla.
- **El set de ensayo no respeta tu alcance real.** Tu diseño dice que las cinco vías juntas llegan a 12 personas como máximo (esperabas 7 a 10 respuestas). Este set tiene 30 filas, así que **no se puede calcular tasa de respuesta por canal** (el alcance por canal es `unknown` en el diseño). Con datos reales, esperá un tercio de este tamaño.
- **Todo es direccional.** Con n menor a 30 por segmento y muestra de red propia, se reportan **conteos** ("7 de 9"), nunca porcentajes con confianza.
- **Canales (n por canal):** instagram 8, wa-estados 6, reenvio-hermana 6, trabajo 6, reenvio-esposo 4. Canales propios (instagram, wa-estados) suman 14 de 30; los de segundo grado, 16.
- **Perfil:** 19 de 25 completas viven en CABA y 6 en GBA; edades: 30 a 44 (15), 45 a 59 (8), 18 a 29 (3) entre las 26 que pasan el filtro.
- **Calidad:** duración mediana de las completas, 262 s (~4,4 min; el diseño estimaba ~5). Dos inconsistencias internas: r06 dice "lo compartimos" en R1 pero escribe "no elijo yo" en Q9; r11 contesta R1 = "Otra persona" y aun así responde las preguntas de compra.

## 2. Por objetivo de aprendizaje

### Objetivo 1: por qué compran el postre en lugar de hacerlo

**Lo que creías:** compran por falta de tiempo o de destreza, no por preferencia.
**Decisión atada:** si predominan motivos de preferencia ("comprado queda mejor", "no me gusta cocinar") sobre tiempo o destreza, replantear la oportunidad antes de invertir en entrevistas sobre ese problema.

**Lo que muestran los datos** (Q3, 16 que compraron o encargaron; elegían hasta 2 motivos):

| Motivo | Menciones |
|---|---|
| No tenía tiempo | 10 |
| Comprado queda mejor o más lindo | 5 |
| Lo resolví a último momento | 4 |
| No me gusta cocinar | 4 |
| Sale igual o más barato que hacerlo | 3 |
| No me sale bien o no sé hacer postres | 2 |
| Otro | 1 |

- **Tiempo o destreza:** 12 menciones (10 + 2), 10 personas distintas. **Preferencia** (mejor + no me gusta cocinar + más barato): 12 menciones, 9 personas distintas. **Empate**: el criterio de la decisión no se cumple ("preferencia predomina") pero tampoco hay confirmación.
- **Lo que sí se separa:** la **destreza casi no existe** (2 de 16). El motivo operativo es el tiempo. "Último momento" (4) es una cuarta razón, ni tiempo ni preferencia.
- **Corte por dónde compraron:** "no tenía tiempo" se concentra en quienes compraron en pastelería (7 de 9); en supermercado, 2 de 4; en emprendimiento, 1 de 3. Los que encargaron a emprendimientos citan sobre todo preferencia ("comprado queda mejor": 3 de 3).
- **Quienes hicieron el postre** (5 de 26, entre ellos r02, r08, r13, r20, r24): se declaran por gusto (4 "me gusta cocinar"), costumbre (2) y costo (2). Solo r13 dice "lo comprado no me convence".

**Qué decisión sigue:** inconcluso, y con un matiz útil: si la oportunidad se apoya en "no sabés hacerlo", el dato ensayo no la sostiene; si se apoya en "no tenés tiempo ni cabeza ese día", sí aparece. **Por qué (para entrevistas):** ¿"no tenía tiempo" es falta de tiempo real o postre que quedó último en la lista?

### Objetivo 2: qué les disgusta de lo que compran

**Lo que creías:** les resulta demasiado dulce, pesado o artificial. **Decisión atada:** si la mayoría queda conforme, o el disgusto está en precio o presentación y no en el sabor, "sabor equilibrado" no alcanza como diferencial.

**Satisfacción** (Q4, n = 16 que compraron o encargaron): Muy conforme 2, Bastante conforme 5, Más o menos 6, Poco conforme 3, Nada conforme 0.

**Qué no los convenció** (Q5, n = 15; hasta 2 opciones):

| Opción | Menciones |
|---|---|
| Muy dulce | 5 |
| Nada, estuvo bien | 5 |
| Sobró mucho | 3 |
| Pesado o empalagoso | 3 |
| Sabor artificial o poco casero | 2 |
| Se veía común, igual a todos | 2 |
| Muy caro para lo que era | 2 |
| Poca cantidad | 1 |

- **9 de 15** marcan al menos uno de "muy dulce", "pesado o empalagoso" o "sabor artificial" (r01, r05, r07, r11, r12, r17, r19, r22, r28). **5 de 15** dicen "nada, estuvo bien". El precio aparece en 2, la presentación en 2.
- **Es una queja moderada:** nadie marcó "Nada conforme" y solo 3 de 16 quedaron "Poco conforme". 9 de 16 están en "Más o menos" o "Poco".
- **Corte por origen:** el disgusto sabor-dulce se concentra en pastelería (7 de los 8 que respondieron Q5) y en supermercado (2 de 4). **Quienes encargaron a un emprendimiento (3 de 3) quedaron conformes** y su única queja es el precio (r15).

**Qué decisión sigue:** el patrón va **en dirección de tu creencia** (mayoría marca dulzor, pesadez o artificial), pero con intensidad baja. Es direccional y sintético. **Por qué (para entrevistas):** ¿este "más o menos" mueve a cambiar de lugar o gastar más, o es una queja al pasar? La encuesta no puede responderlo.

### Objetivo 3: con qué anticipación lo resuelven y cuánto gastan

**Lo que creías:** aceptan encargar con días de anticipación. **Decisión atada:** si el modelo por encargo encaja o hace falta resolver en 24 horas.

**Anticipación** (Q7, n = 25 completas): mismo día 7, día anterior 7, 2 o 3 días antes 5, 4 días antes o más 4, no me acuerdo 2. **14 de 25 deciden el mismo día o el día anterior.** Solo 4 de 25 deciden con 4 días o más.

**Por dónde resolvieron:**

| Qué hicieron | Cuándo decidieron |
|---|---|
| Supermercado (4) | las 4 el mismo día |
| Pastelería (8 completas) | 5 el día anterior, 2 el mismo día, 1 con 2 o 3 días |
| Emprendimiento (3) | las 3 con 4 días o más |

**Encargos reales** (Q8, n = 25): ya encargaron a un emprendimiento 11 de 25 en el último año (4 varias veces, 7 una vez). Es comportamiento, no intención.

**Frecuencia como anfitrión** (Q1 × Q7): de los 9 que reciben "4 a 6 veces" en 3 meses, 5 deciden el mismo día; los de "2 o 3 veces" planifican más (3 de 8 con 4 días o más). Con estos n es una pista, no un hallazgo.

**Precio de referencia** (Q6, solo lo que pagaron la última vez, **no disposición a pagar**): pastelería, mediana $23.250 (n = 8, rango $17.000 a $31.000); supermercado, $10.500 (n = 4, $9.500 a $13.500); emprendimiento, $36.000 (n = 3, $34.000 a $38.000). Los tamaños varían (Q6b), así que no son comparables entre sí. La creencia de precio (#4) **no se resuelve acá**, como ya decía tu diseño.

**Qué decisión sigue:** el encargo con días **ya lo practican** quienes compran a emprendedoras (3 de 3), pero 14 de 25 resuelven con un día o menos. Inconcluso entre "modelo por encargo encaja" y "hace falta ventana de 24 horas". **Por qué (entrevistas):** ¿la decisión tardía es circunstancia (semana caótica) o hábito (el postre siempre queda último)?

## 3. Cortes por canal

Con n tan chico, **cada celda es una anécdota**; lo registro porque el análisis debe decirlo.

| Canal | Compraron o encargaron (Q4) | Lectura |
|---|---|---|
| instagram (canal propio) | 3: los 3 "Más o menos" | Ninguno "Muy" o "Bastante": no se ve sesgo de complacencia, que era el riesgo del canal propio |
| wa-estados (propio) | 4: Muy 1, Bastante 1, Más o menos 1, Poco 1 | Mezclado |
| reenvio-hermana (2.º grado) | 2: los 2 "Poco conforme" | Los más críticos llegaron por segundo grado |
| reenvio-esposo | 4: Muy 1, Bastante 2, Más o menos 1 | Los más conformes; perfil mayor y de GBA |
| trabajo | 3: Bastante 2, Más o menos 1 | Conformes |

**Lectura:** la diferencia entre canales pesa más sobre la muestra que sobre el segmento. La hipótesis "mis canales propios responden para quedar bien" **no aparece** en este set (instagram es el menos entusiasta), y los más satisfechos vienen por el esposo y el trabajo. No se saca ninguna conclusión de eso.

## 4. Pregunta abierta (Q9), codificada

16 de 25 completas respondieron (9 la dejaron vacía). Una respuesta puede tener 2 códigos.

| Tema | Menciones | Cita |
|---|---|---|
| Dulzor, todo parecido, falta algo más liviano o fresco | 5 (r05, r13, r17, r22, r28) | "Que todas las tortas son iguales y llenas de crema. Quisiera algo mas liviano pero rico" (r05) |
| Olvido, tiempo o último momento | 4 (r01, r13, r17, r19) | "Me acuerdo tarde, siempre. Cuando quiero ver ya es viernes y queda lo que haya" (r01) |
| No es un problema o está resuelto | 3 (r03, r27, r29) | "No es algo que me preocupe, con el cafe alcanza" (r27) |
| Otra persona decide o hace | 3 (r06, r10, r11) | "Mi señora se encarga normalmente, yo paso a buscar" (r11) |
| Confianza y puntualidad de quien hace el encargo | 2 (r04, r12) | "Me dan miedo los emprendimientos de instagram, una vez me dejaron plantada." (r12) |
| Costo | 1 (r08) | "Es lo mas barato y me sale rico" (r08) |

Dos temas aparecen **sin que nadie los preguntara** en las cerradas: la confianza en quien encarga, y que haya gente a la que el problema no le interesa o no le toca decidir.

## 5. Insights (por impacto)

1. **El problema no es uniforme: cambia según dónde compran.** En pastelería se juntan el "no tenía tiempo" (7 de 9) y el disgusto de sabor (7 de 8 que respondieron Q5); en supermercado, la decisión es del mismo día (4 de 4); quienes encargan a emprendimientos planifican con 4 días o más y quedan conformes (3 de 3). Implica empezar a buscar clientes entre quienes compran en pastelería, que son los que reúnen ambos dolores.
2. **"No sé hacerlo" casi no explica nada (2 de 16); el tiempo sí (10 de 16), y empata con la preferencia (9 de 16 citan al menos una).** Implica que la promesa debería hablar de resolverles el postre sin que se les complique el día, no de suplir una destreza que casi nadie declara faltarles.
3. **14 de 25 deciden el postre el mismo día o el día anterior.** Si el modelo es solo "encargá con días", queda afuera la mayoría de los episodios; implica probar una ventana de 24 a 48 horas o un recordatorio antes de dar el encargo con anticipación por hecho.
4. **Ya hay hábito de encargar (11 de 25), y la confianza aparece sola en Q9 (2 de 16 respuestas).** Implica que la puntualidad y la confirmación son parte del producto, no un detalle de logística.
5. **El dulzor es una queja real pero suave (0 "Nada conforme"; 3 "Poco conforme").** Implica no apostar toda la diferenciación a "menos dulce" sin saber si mueve a cambiar de lugar.

## 6. Contraste con las creencias (sin anotar)

Los hallazgos tocan: `[opportunity: postres-para-visitas] [value]` (objetivo 1 y 2), `[product] [value] #1` (objetivo 2), `[product] [value] #6` (objetivo 3). Como son datos inventados, **no se propone ninguna anotación** (`confirmed`, `contradicted` ni `weakened`) y `product/overview.md` queda intacto.

## 7. Pool de entrevistas (opt-in, ordenado como pide tu guía)

12 de 25 completas aceptaron una charla (R2 = "Sí"); todas pasan R1 (ninguna es "Otra persona"). Orden de contacto, contradictores primero:

1. **Contradicen el objetivo 1:** r24 (lo hizo por costumbre y gusto), r13 (lo hizo; dice que lo comprado no le convence), r10 (compra por "no me gusta cocinar" y "comprado queda mejor"; quedó "Bastante conforme"; lo compartió con su pareja).
2. **Quedaron conformes:** r04 (encargó a un emprendimiento, "Muy conforme"; y confía en quien le cocina).
3. **Confirman la creencia:** r12 (miedo a encargar tras plantón; compra en pastelería "segura"), r22, r05, r01, r17, r19, r28.
4. **Último:** r06 (no elige el postre; trajo un invitado).

## 8. Próximo paso

Con datos reales: `/design-interview` ya tiene la guía; las "por qué" de arriba son lo que deben responder las entrevistas. Con este set de ensayo, la práctica termina acá.
