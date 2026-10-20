# Plan de exposición: Encargo con anticipación (Carabalo Cakes)

Spec: `product/specs/2026-10-20-1905-encargo-con-anticipacion.md`

## Hipótesis (textual de la spec)

Creemos que los anfitriones que reciben visitas en su casa y hoy compran el postre (Carolina, Gustavo) reservarán un postre casero con 3 a 5 días de anticipación, si la carta es corta, el pedido se cierra por WhatsApp y reciben confirmación activa antes de la entrega, porque hoy el postre les queda último, lo que compran los deja disconformes y encargar les da miedo cuando no hay confirmación.

Nos equivocamos si, con 30 o más personas alcanzadas que no son familia directa, menos de 3 mandan una reserva válida, o si 3 o más piden una fecha a menos de 3 días.

## Secuencia de creencias

1. Aceptan el plazo y reservan (#6). Si falla, nada de lo siguiente es interpretable.
2. Ven el precio de entrada y siguen reservando (#4).
3. La confirmación activa y la entrega puntual convierten una reserva en un postre recibido, sin que tengan que preguntar.
4. Quien recibió el postre vuelve a encargar (#7).

## Nivel 1: La carta con reserva por WhatsApp

- **Qué se revela:** la carta de 5 postres para 8 personas (Lemon pie, Tiramisú, Torta de zanahoria, Torta de chocolate Matilda y Brownie), la regla "3 a 5 días de anticipación" y el link de reserva con mensaje prellenado. Sigue oculto: precio, cobro, confirmación activa y entrega.
- **Creencia:** las personas que compran postre para recibir visitas aceptan encargar con 3 a 5 días de anticipación a alguien que no conocen (#6).
- **Audiencia:** vecinos de Flores y contactos que no son familia directa, sin invitar a nadie en particular. Mínimo 30 personas distintas alcanzadas.
- **Duración:** 4 días, con una única extensión de 3 días si no llega al mínimo. Es T1: hay que cerrarlo y analizarlo primero.
- **Validación:**
  - **Avanza si:** hay 3 o más reservas válidas que cuentan, con 30 o más alcanzadas, y menos de 2 son de amigas.
  - **Se detiene o cambia si:** hay 0 a 2 reservas válidas, o 3 o más personas piden una fecha a menos de 3 días.
  - **No concluyente si:** hay menos de 30 alcanzadas.
  - **Cuidado al leerlo:** como la carta no llevaba precio, un resultado bajo puede deberse a eso y no al plazo. No alcanza para descartar la alternativa.

## Nivel 2: La carta con precios (incluye el Nivel 1)

- **Qué se revela:** el precio de cada postre en la carta, visible antes de reservar. Sigue oculto: confirmación activa y entrega.
- **Creencia:** viendo el precio de entrada, siguen reservando (#4).
- **Audiencia:** una nueva publicación para el mismo tipo de público que el Nivel 1, sin repetir a quienes ya reservaron.
- **Duración:** 4 días corridos, con las mismas reglas de alcance mínimo del Nivel 1.
- **Condición previa:** tener calculado el costo de un postre para 8 personas, para fijar un precio con margen positivo.
- **Validación:**
  - **Avanza si:** las reservas válidas por persona alcanzada no bajan respecto del Nivel 1 y 2 o menos respuestas citan el precio como freno.
  - **Se detiene o cambia si:** el precio aparece como el freno principal en las respuestas, o las reservas válidas caen a 0 con 30 o más alcanzadas.

## Nivel 3: Confirmación activa y entrega (incluye los niveles 1 y 2)

- **Qué se revela:** la respuesta con el cupo en 24 horas, el mensaje de confirmación 24 horas antes con la franja pactada, y la entrega o el retiro. Sigue oculto: seguimiento posterior y reorden.
- **Creencia:** cuando reciben una confirmación activa y el postre llega en la franja pactada, el encargo deja de dar miedo y no necesitan preguntar si va a llegar.
- **Audiencia:** hasta 3 personas con una reserva válida de los niveles 1 y 2, sin ser familia directa.
- **Duración:** 2 a 3 semanas, según las fechas de sus reuniones.
- **Condición previa:** definir N (capacidad de producción) y averiguar la habilitación de CABA.
- **Validación:**
  - **Avanza si:** los postres salen dentro de la franja pactada, ninguna clienta escribió para preguntar por el estado, y al menos 2 de 3 no citan el plazo ni la incertidumbre como problema.
  - **Se detiene o cambia si:** algún postre sale tarde, o 2 o más clientas escriben para preguntar si el pedido va a llegar.

## Nivel 4: Reencargo (incluye los niveles 1, 2 y 3)

- **Qué se revela:** un mensaje de seguimiento al día siguiente de la entrega, con una pregunta abierta y la carta con precios y el link de reserva.
- **Creencia:** quien recibió el postre en el horario pactado vuelve a encargar antes que volver a la pastelería (#7).
- **Audiencia:** todos los clientes que recibieron un postre en los niveles anteriores, hasta llegar a 10 clientes reales.
- **Duración:** 60 días desde la primera entrega (el plazo ya fijado en la creencia #5).
- **Validación:**
  - **Avanza si:** al menos 3 de los primeros 10 repiten dentro de los 60 días.
  - **Se detiene o cambia si:** menos de 3 repiten y quienes no repiten citan sobre todo el sabor o el precio. Si citan la entrega, el problema es operativo y no de valor.

## Mecanismo de revelado

No hay software: revelar una capa significa cambiar qué mensaje y qué información se le manda a la persona. Se recomienda el modo incremental manual, sumando cada capa a lo que ya se ofrece. Lo decide que cada nivel se prueba con un grupo chico y conocido, sin necesidad de separar audiencias técnicamente. La decisión final es de María Eugenia.

## Validaciones en paralelo

- **Costo por postre (viabilidad):** debe estar calculado antes del Nivel 2. Si el precio posible no deja margen, la alternativa cambia aunque las reservas sean buenas.
- **Capacidad (#8):** definir N antes del Nivel 3. Si 3 reservas ya son un esfuerzo grande, el umbral del Nivel 1 deja de ser realista.
- **Habilitación (#9):** averiguar el requisito en CABA antes de entregar y cobrar por primera vez.

## Preguntas abiertas para el equipo

- ¿Se cierra y se analiza T1 antes de seguir? Tiene 2 mensajes anotados y ningún dato de alcance.
- ¿Instagram es un canal? Llegó una reserva por ahí que el diseño no contemplaba; cambia cómo se mide el alcance.
- ¿Qué se hace con los pedidos que ya llegaron con una fecha demasiado cercana (R2, para el 20/10)? No cumplen el plazo de 3 a 5 días.
- Los niveles 3 y 4 dependen de la producción y la entrega, no solo de la aceptación. ¿Conviene partir la spec en dos: aceptación del plazo y del precio primero, y entrega y recompra después?
