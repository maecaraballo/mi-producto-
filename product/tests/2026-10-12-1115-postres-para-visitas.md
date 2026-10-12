---
opportunity: postres-para-visitas
solutions: product/solutions/2026-10-04-1702-postres-para-visitas.md
status: designed
---

# Solution tests for: postres para visitas que no empachan

## Why test
Está en prueba A1, encargo con anticipación (la elegida el 2026-10-04). La evidencia real del problema es mínima (6 respuestas de encuesta, 1 sola compradora, toda de tu familia) y nadie vio ni reaccionó a la carta con plazo: que esta solución alivia el problema no está probado. La celda de deseabilidad del archivo de soluciones no se modificó, por decisión de María Eugenia. Los datos del ensayo (`notas/ensayo/`) son sintéticos y no se usan para decidir. La prueba arranca por el círculo cercano y los vecinos porque es lo más accesible y deja feedback para ajustar la carta y la logística; por eso el umbral se lee por cercanía.

## T1. encargo-con-anticipacion: carta publicada con reserva por WhatsApp
- **Test status:** designed
- **Belief under test:** `[product] [value]` Les resulta aceptable encargar con días de anticipación, porque planifican lo que sirven cuando reciben visitas. (#6 de `product/overview.md`.) El vendedor es María Eugenia, desconocida para parte de los participantes.
- **Risk:** [value]
- **Test type:** fake-door
- **What we do:**
  1. Publicar la carta en el grupo de vecinos de Flores y en tus estados de WhatsApp.
  2. Reservar es tocar un link de WhatsApp con un mensaje prellenado: postre, fecha de una reunión real y entrega o retiro.
  3. Durante 4 días no pedís a nadie que reserve ni mandás recordatorios personales.
  4. A quien reserva le respondés que es una prueba de lanzamiento y que le confirmás en 48 h si entra en el cupo. No prometés entrega ni cobrás.
  5. Registrás el alcance y cada reserva, y la codificás por cercanía: `familia`, `amigo/a`, `conocido/a o vecino/a`.
  6. A cada persona que reserva, y a quien escribe sin reservar, le hacés una pregunta abierta: "¿qué te frenó o qué cambiarías de la carta?". Registrás la respuesta textual.
- **With whom:** tu círculo (familia, amigos, conocidos) y los vecinos de Flores del grupo. No se filtra de antemano: la reserva exige una reunión real en casa. Se recluta publicando, sin invitar a nadie en particular. Pueden reservar y opinar todos; la familia directa (y tu esposo) no suma al umbral ni al piso de exposición.
- **Material needed:** una carta de una página con 3 o 4 postres para 8 personas, la regla "se encarga con 3 a 5 días de anticipación, entrega o retiro pactado", la leyenda "prueba de lanzamiento, cupo limitado, confirmo en 48 h", los textos del post y del estado, y el link de WhatsApp con el mensaje prellenado. Las fotos son las que ya tengas de postres propios. Se deja afuera a propósito: precio (esta prueba no mide #4; sin precio, reservar es barato y eso infla las reservas), cobros, carrito, sitio web y cualquier software.
- **Material:** pendiente (lo agrega `/build-solution-test`).
- **Duration:** 4 días corridos desde la publicación. Si al cierre alcanzó menos de 30 personas, se extiende una sola vez 3 días.
- **Signal and threshold:** señal: personas distintas, que no son familia directa, que mandan una reserva con postre + fecha de una reunión real a 3 días o más + entrega o retiro. Umbral: **3 o más**. Piso de exposición: **al menos 30 personas distintas alcanzadas, sin contar familia directa** (vistos del estado + leídos del mensaje en el grupo, sin duplicar). El umbral de 3 es elección de María Eugenia por su capacidad de producción en el paso siguiente, más bajo que el 4 de 10 del archivo de soluciones. Si 2 o más de las reservas que cuentan son de `amigo/a`, el resultado es señal débil. No se mueve después de ver los datos.
- **Decision rule:**
  - **continue** si hay 3 o más reservas válidas con 30 o más personas alcanzadas. Con 2 o más `amigo/a` entre las que cuentan, se anota como señal débil y no mueve la creencia.
  - **change** si hay 1 o 2 reservas válidas, o si 3 o más personas piden una fecha a menos de 3 días (el plazo es la barrera).
  - **discard** si hay 0 reservas y nadie pide fecha cercana, con 30 o más alcanzadas. A1 sale; vuelven A2 y A4, hoy en parked, a evaluarse.
  - Menos de 30 alcanzadas tras la extensión: `inconclusive`, no se decide y se rediseña el canal.
- **Expected provenance:** real. Las reservas de familia y de amigos que reservan por apoyo se informan aparte, por el código de cercanía.
- **Next step if it passes:** concierge: hacer y entregar hasta 3 de las reservas, con precio informado, una vez calculado el costo y averiguada la habilitación. Ahí se prueban el precio (#4), la recompra (#5) y que puedas producir y entregar a tiempo.

## Results
_Pendiente: lo agrega `/analyze-solution-tests`._

## Decision
_Pendiente: lo agrega `/analyze-solution-tests`._
