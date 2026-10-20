# Encargo con anticipación (Carabalo Cakes)

> Estado de la evidencia: **no hay evidencia real de que el encargo con plazo sea aceptable.** La prueba T1 se publicó el 12/10 pero no se cerró ni se analizó (ver *Tested before spec*). Todo lo que sigue es una apuesta, no un hallazgo.

## Problem

Quien recibe visitas en su casa suele resolver el postre a último momento, comprando lo que haya en la pastelería o el supermercado. El resultado le queda "más o menos": muy dulce, igual a todos, y con sobras que se tiran. Cuando intenta evitarlo encargando a una emprendedora, el riesgo es que no confirme o llegue tarde, y termina peor que si hubiera comprado. Esta spec propone una carta corta de postres caseros para 8 personas, que se encarga con 3 a 5 días de anticipación, con confirmación activa antes de la entrega.

> Evidence: "Era una chocotorta, de esas que ya están armadas. [...] Muy empalagosa, la galletita toda húmeda. [...] sobró más de la mitad." — Carolina Benítez (`synthetic`), `product/interviews/2026-09-27-2254-carolina-benitez.md`

> Evidence: "el postre siempre queda último en la lista. [...] cuando me acuerdo del postre ya es viernes a la noche." — Carolina Benítez (`synthetic`), misma entrevista

> Evidence: "Después de lo del cumple, me da miedo encargar. Prefiero algo que sé que va a estar, aunque no me encante." — Carolina Benítez (`synthetic`), misma entrevista

> Evidence (`survey`, n=6, solo familia, 1 sola compradora): 5 de 6 hicieron el postre en casa; la única que compró lo encontró pesado y artificial y quedó "más o menos" conforme. No confirma ni contradice nada. `product/insights/2026-10-04-1730-encuesta-postres-para-visitas.md`

## Who it's for

- **Carolina Benítez (primary):** recibe casi todos los fines de semana, decide el postre el jueves o viernes y tiene miedo a encargar por una mala experiencia. Es la persona para la que la promesa de "puntual y confirmado" pesa más.
- **Gustavo Ferrari (primary):** confirma la cena 3 a 5 días antes y ahí decide el postre, así que el plazo ya coincide con cómo planifica. Usa solo WhatsApp y llamadas, y desconfía de vendedores nuevos.
- **Diego Salvatierra (primary, contra-ejemplo a vigilar):** pastelero por hobby; si prefiere cocinar o el precio no le cierra, la parte de "destreza" de la creencia cae para él.

Quedan afuera: Nélida Paz (restricciones alimentarias múltiples) y quien compra para festejos de oficina.

## User journey

Camino de Carolina, con la feature insertada donde hoy se rompe (el postre queda último y encargar da miedo).

1. **Trigger** — Confirma quién viene a su casa el fin de semana (jueves o viernes hoy; con esta feature, 3 a 5 días antes) y se acuerda del postre.
2. Ve la carta de Carabalo Cakes en un estado o grupo de WhatsApp, o la recibe de alguien. Son pocos postres, todos para 8, sin precio de entrada (el precio es un tema abierto, #4).
3. Toca el link de reserva y se abre un WhatsApp con el mensaje prellenado: postre, fecha de la reunión y entrega o retiro. Completa tres datos.
4. Recibe una respuesta que le dice si su fecha entra en el cupo y cuándo. *(Acá se rompe hoy la confianza: la emprendedora que no confirma.)*
5. 24 horas antes de la fecha recibe una confirmación activa con el horario de entrega o retiro, sin tener que preguntar.
6. Recibe o retira el postre en la franja pactada.
7. **Outcome** — Llega a la mesa con un postre casero de sabor equilibrado, resuelto con días de margen y sin pensarlo el sábado. Más adelante le cuenta a las invitadas dónde lo consiguió o vuelve a encargar.

Los pasos 5 a 7 son por ahora hipótesis: ninguna persona real los vivió. El paso 4 y el paso 5 son donde la entrevista sintética ubica el dolor, no una entrevista real.

## Critical user stories

### Reservar desde la carta
As Carolina, I want reservar un postre con un solo mensaje de WhatsApp, so that resolver el postre no me lleve otra conversación larga en un fin de semana ya cargado.

Acceptance criteria:
- [ ] La carta muestra 5 postres (Lemon pie, Tiramisú, Torta de zanahoria, Torta de chocolate Matilda y Brownie), cada uno con su rendimiento (8 personas) y la regla "se encarga con 3 a 5 días de anticipación".
- [ ] Al tocar "Reservar" se abre WhatsApp con el mensaje prellenado: postre, fecha de la reunión, entrega o retiro.
- [ ] La reserva queda completa cuando tiene los tres datos; con menos, la vendedora pide solo el dato que falta.
- [ ] La reserva se cierra en 10 mensajes o menos en total, contando los de ambas partes.
- [ ] Caso borde: si el mensaje llega sin fecha de reunión, no se toma como reserva y se pide la fecha.

Traces to: entrevista sintética con Carolina (el postre "queda último"); `product/tests/materials/t1-encargo-con-anticipacion/` (mensaje prellenado y regla de reserva válida).

### Saber si mi fecha entra
As Gustavo, I want saber rápido si mi fecha entra y qué pasa después, so that no me quede esperando una respuesta que no llega.

Acceptance criteria:
- [ ] Toda persona que reserva recibe respuesta dentro de las 24 horas, que es el plazo prometido en la prueba.
- [ ] La respuesta dice una de tres cosas: entra, no entra, o entra con otra franja. Nunca queda en silencio.
- [ ] La respuesta no promete algo que no se puede cumplir (entrega o cobro) mientras la producción y la habilitación estén sin resolver.
- [ ] Caso borde: si el cupo está lleno, la respuesta ofrece la fecha disponible más cercana dentro de los 5 días.

Traces to: persona Gustavo ("Evitar sorpresas desagradables", torta que llegó aplastada sin aviso); entrevista con Carolina ("no me contestaba").

### Confirmación activa antes de la entrega
As Carolina, I want recibir una confirmación con el horario 24 horas antes, so that no tenga que escribir a preguntar si mi postre va a llegar.

Acceptance criteria:
- [ ] 24 horas antes de la fecha, la vendedora manda un mensaje con postre, fecha, franja de entrega o retiro y dirección o punto de retiro.
- [ ] La clienta puede responder "ok" o pedir cambiar la franja, y recibe respuesta en el día.
- [ ] El postre sale dentro de la franja pactada en 4 de 4 fines de semana de prueba.
- [ ] Caso borde: si la vendedora prevé un retraso, avisa con al menos 3 horas de anticipación y ofrece otra franja el mismo día.

Traces to: entrevista con Carolina (el episodio del cumple: "me respondió a las diez de la noche que había tenido un problema con el horno").

### Fecha a menos de 3 días
As Carolina (o Gustavo), I want que me digan con claridad qué pasa si mi reunión es en menos de 3 días, so that sepa si me conviene esperar o comprar en otro lado.

Acceptance criteria:
- [ ] Un pedido para menos de 3 días recibe una respuesta que explica la regla y no lo toma como reserva.
- [ ] El pedido se anota igual, con la fecha pedida, para medir cuántos chocan con el plazo.
- [ ] La respuesta no cobra ni promete entrega.
- [ ] Caso borde: un pedido para exactamente 3 días se toma como válido.

Traces to: `product/tests/materials/t1-encargo-con-anticipacion/mensajes.md` y la regla de decisión de T1 (3 o más pedidos con fecha cercana indican que el plazo es la barrera).

## Hypothesis

We believe anfitriones que reciben visitas en su casa y hoy compran el postre (Carolina, Gustavo) reservarán un postre casero con 3 a 5 días de anticipación, si la carta es corta, el pedido se cierra por WhatsApp y reciben confirmación activa antes de la entrega, porque hoy el postre les queda último, lo que compran los deja disconformes, y encargar les da miedo cuando no hay confirmación.

We're wrong if, en una publicación que alcance a 30 o más personas distintas que no son familia directa, menos de 3 de ellas mandan una reserva válida (postre + fecha de una reunión real a 3 días o más + entrega o retiro), o si 3 o más piden una fecha a menos de 3 días. Si 2 o más de las 3 son amigas cercanas, la señal es débil y no cuenta como confirmación.

## Alternatives considered

Explored in: `product/solutions/2026-10-04-1702-postres-para-visitas.md`
- A2 Postre para mañana — parked: rompe la restricción de venta por encargo y exige stock perecedero. Vuelve si las entrevistas reales muestran que la mayoría decide el mismo día y no considera encargar.
- A3 Kit para terminar en casa — discarded (María Eugenia, 2026-10-04): genera trabajo y costos igual, hay que garantizar el envoltorio y habría que venderlo más barato; nadie lo pidió ni siquiera en el ensayo.
- A4 Vía un comercio de confianza — parked: es el próximo test si la desconfianza hacia vendedores nuevos aparece como la barrera principal en entrevistas reales.
- A5 Carta que todos puedan comer — agregada después de elegir A1, sin descartar ni elegir: queda como candidata a probar en entrevistas reales. Se apoya en 3 respuestas abiertas de familia; no tiene todavía pregunta propia en la guía.

## Tested before spec

Tested in: `product/tests/2026-10-12-1115-postres-para-visitas.md`
- T1 Carta publicada con reserva por WhatsApp (fake door) — **sin resultado**: se publicó el 12/10 (cierre previsto 16/10, extensión posible hasta 19/10), pero el archivo de tests sigue en `status: ready` con *Results* y *Decision* pendientes. En la hoja de captura hay solo 2 mensajes: R1 preguntó el precio del Brownie sin completar la reserva, y R2 pidió una torta de zanahoria para el 20/10 por Instagram (canal que no era parte del diseño) y es amigo de la familia. No hay alcance registrado ni análisis. · `[product] [value]` #6, **no probada**.
- **Riesgo más alto sin probar (declarado): que las personas que compran el postre, fuera de tu círculo, acepten encargar con 3 a 5 días de anticipación a alguien que no conocen.** Hasta que T1 se cierre y se analice, #6 sigue `unverified`. Las cifras sintéticas del ensayo (por ejemplo "14 de 25 deciden con un día o menos") no sirven para decidirlo.
- T1 — el resultado no aplicaría a lo siguiente que esta spec define, que T1 no probó: la confirmación activa de 24 horas antes, la franja de entrega o retiro y la regla de aviso de retraso. Esas partes son creencias nuevas (ver abajo).

## Assumptions

Referencias a `product/overview.md` (registro único). Las creencias de feature se registraron el 2026-10-20.

Registradas:
- [product] [value] #6 Les resulta aceptable encargar con días de anticipación, porque planifican lo que sirven cuando reciben visitas. — **no probada** (T1 sin resultado)
- [opportunity: postres-para-visitas] [viability] Un anfitrión al que le gustó el postre vuelve a encargar para otra reunión, y cada pedido deja margen positivo.
- [product] [viability] #4 Pagarían entre un 10% y un 30% más que en una pastelería. — T1 no lo midió a propósito (no publicó precio).

Registradas con esta spec (2026-10-20):
- [feature: encargo-con-anticipacion] [value] Un anfitrión que recibió el postre en el horario pactado, tras una confirmación activa 24 horas antes, vuelve a encargar antes que volver a la pastelería. Falsa si, entre los primeros 10 clientes reales, quienes no repiten citan en su mayoría el sabor o el precio y no la entrega.
- [feature: encargo-con-anticipacion] [feasibility] Puedo producir y entregar N postres para 8 por fin de semana, en casa, en la franja pactada (N a definir según mi capacidad real). Falsa si en 4 fines de semana de prueba alguno sale tarde o el margen queda por debajo del costo. — owner: María Eugenia
- [feature: encargo-con-anticipacion] [feasibility] Puedo vender postres caseros cumpliendo la habilitación que exija CABA. Se replantea si el requisito cuesta más de lo que deja el margen. — owner: María Eugenia

No registrada (por ahora): [usability] el pedido se cierra en una sola conversación. T1 todavía no tiene ninguna reserva completa; se registra cuando haya algo que medir.

## Decisiones abiertas

- **Resuelto (confirmado por María Eugenia, 2026-10-20):** la carta publicada fue de 5 postres y el plazo de respuesta prometido fue de 24 h. Los archivos `carta.md` (4 postres, 48 h), `textos-publicacion.md` y `mensajes.md` del repo quedaron desactualizados respecto de lo publicado; conviene alinearlos.
- **Canal:** T1 se diseñó para el grupo de vecinos y los estados de WhatsApp; llegó un pedido por Instagram. Hay que decidir si Instagram es canal o no, porque cambia cómo se cuenta el alcance.
- **Precio:** fuera de esta spec a propósito; es el siguiente paso del concierge.
