---
source: survey
survey_design: product/surveys/2026-09-27-2150-postres-para-visitas.md
results: product/surveys/2026-10-04-respuestas-postres-para-visitas.csv (export de Google Forms, sin la columna de contacto)
n: 7 recibidas, 6 analizadas (se excluye la fila del 4/10 17:17, cuyo contacto es el de la investigadora; probablemente una prueba)
analysis_date: 2026-10-04
---

# Análisis: encuesta "cómo resuelven el postre quienes reciben visitas"

## 1. Denominador y límites

- **7 respuestas recibidas, 6 analizadas.** La última (4/10, 17:17) lleva tu nombre en el campo de contacto y llegó minutos antes de preguntar dónde ver las respuestas: la trato como prueba y la dejo afuera. Si fue una respuesta real, avisame y la sumo.
- **Todas pasan el filtro** (S2 = "Sí"; nadie menor de 18).
- **Un solo canal con respuestas:** 5 de las 6 analizadas traen el código `reenvio-hermana`; la sexta (60 o más, "Yo") escribió "Correo" en el campo **Código de invitación**, así que su canal es desconocido. No hay respuestas identificadas de instagram, wa-estados, reenvio-esposo ni trabajo. La tasa de respuesta por canal no se puede calcular (alcance `unknown` en el diseño).
- **Es la red de tu familia**, con 2 personas de 60 o más y 4 de 30 a 44. La guía las marca útiles solo como piloto.
- **n = 6: todo es anecdótico.** Se reportan conteos, sin porcentajes, y no se corta por canal ni por segmento.

## 2. Por objetivo de aprendizaje

### Objetivo 1 (por qué compran) y objetivo 2 (qué les disgusta): no se pueden evaluar

**5 de 6 hicieron el postre; solo 1 lo compró** (en pastelería, por falta de tiempo y destreza, "más o menos" conforme, le pareció pesado y artificial, pagó $20.000 para 5 a 8 personas). Las preguntas de compra (Q3 a Q6b) tienen n = 1, así que **ningún resultado mueve la creencia de que compran por falta de tiempo o destreza, ni la del dulzor**. La decisión atada al objetivo 1 (replantear si predomina la preferencia) tampoco se puede tomar con esto.

Lo que sí hay son los 5 que cocinan (Q3b, hasta 2 motivos): "sale más rico que comprado" 3, "sale más barato" 3, "me gusta cocinar" 1. Nadie marcó "lo comprado no me convence" ni "es una costumbre". Es el grupo que podía contradecir tu creencia: lo hacen porque les sale mejor o más barato, no por gusto de cocinar. **Sesgo:** son autoinformes de quienes cocinan y de tu familia.

### Objetivo 3 (anticipación y encargo)

- **Anticipación** (Q7, n = 6): mismo día 2, día anterior 2, 4 días o más 2. Los dos que planifican con 4 días o más son de 60 o más y cocinan. No se dice que encarguen.
- **Encargo real** (Q8, n = 6): 1 encargó una vez; 5 nunca. Con tan poco, no habla de si el modelo por encargo encaja.
- La pregunta de precio (Q6) tiene 1 dato; no sirve de referencia.

## 3. Pregunta abierta (Q9), codificada

5 de 6 respondieron (1 en blanco). Temas:

| Tema | Menciones | Cita |
|---|---|---|
| Complacer a los invitados: gustos y restricciones | 3 | "Definir algo que sea sencillo, sabroso y que todos puedan comer" · "El poder complacer a los invitados" · "Los gustos que tengan" |
| Tiempo y complejidad | 1 | "El tiempo y complejidad del postre" |
| Que sea rico y alcance | 1 | "Que sea rico y alcance" |

**Hallazgo no previsto:** el tema más repetido no es dulzor ni tiempo, sino **encajar con los gustos y restricciones de los invitados**. No estaba en tus creencias ni en tu encuesta.

## 4. Insights (por impacto)

1. **La muestra no llegó al segmento: casi todos cocinan.** 5 de 6 hicieron el postre. Para evaluar la oportunidad hace falta gente que compre, y el canal "reenvío de la hermana" no la trae. Implica abrir canales que lleguen a quien compra (tu diseño ya proponía un grupo de vecinos de Flores).
2. **Quienes cocinan lo hacen porque les sale mejor o más barato (3 y 3 de 5).** No por gusto. Es una pista sobre cómo ven lo comprado, pero viene de cocineros; hay que verificarla con compradores.
3. **Complacer a los invitados aparece como la dificultad principal (3 de 5).** Implica probar, en entrevistas, si variedad o postres aptos para restricciones pesan más que el sabor equilibrado. (Ojo: tu brief deja afuera a quienes tienen restricciones múltiples; acá aparecen como una preocupación del anfitrión, no como cliente.)
4. **La decisión del postre se reparte parejo entre "mismo día", "día anterior" y "4 días o más" (2, 2, 2).** No alcanza para decir si el encargo con días encaja.
5. **3 de 6 contestan que decide "otra persona".** Aun así respondieron sobre "lo hice yo (o alguien de mi casa)". La opción mezcla a quien decide con quien cocina, y vuelve ambigua la respuesta.

## 5. Whys para entrevistas

- ¿Cómo eligen el postre pensando en los invitados, y qué pasa cuando alguien no puede comer algo?
- ¿Por qué dicen que "sale más rico" hecho en casa: qué tiene lo comprado que no les gusta?
- Para quienes compran: lo de los objetivos 1 y 2, que esta muestra no pudo responder.

## 6. Problemas del instrumento (para corregir antes de recolectar más)

- **Q2** mezcla "Lo hice yo" con "alguien de mi casa": separalas, o ubicá R1 antes.
- **Multi-select con comas:** Forms exporta las opciones separadas por coma y una opción ("Nada, estuvo bien") ya contiene una coma. Cuando haya más respuestas, el parseo de Q5 va a ser ambiguo; conviene cambiar el texto de esa opción.
- **Campo Código de invitación:** una persona lo sobrescribió. Marcalo de solo lectura o ocultalo, y verificá que los links de los otros cuatro canales traigan el código precargado.
- El campo de contacto guarda teléfonos y correos en texto plano: el CSV guardado en el repo no incluye esa columna.

## 7. Recruitment pool

4 de 7 aceptaron la charla (R2 = "Sí"), 3 de las 6 analizadas. Según el filtro de tu guía (no es candidata quien responde R1 = "Otra persona"), **queda una sola candidata: la de respuestas del 29/9 13:31** (hizo el postre, "más rico y más barato", decide en pareja). Las otras dos respondieron "Otra persona". Y todas son familiares, que tu guía reserva para el piloto.

## 8. Contraste con las creencias

Con 1 comprador y un solo canal familiar, **ninguna respuesta confirma ni contradice** las creencias de `product/overview.md`, así que no propongo anotar nada.

## 9. Próximo paso

Conseguir respuestas de quienes compran (otro canal), corregir Q2 y el campo Código, y recién entonces volver a correr el análisis.
