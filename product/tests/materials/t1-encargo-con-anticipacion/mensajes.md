# Mensajes de WhatsApp (T1)

Mensajes listos para copiar. Respondés a cada persona que escribe, tenga o no una reserva válida. No prometés entrega ni cobrás.

## 1. Mensaje prellenado del link

Es lo que ve la persona al tocar "Reservar". Ya tiene los tres datos de la reserva; ella completa los espacios.

```
Hola! Quiero reservar un postre de Carabalo Cakes.
Postre:
Fecha de mi reunión:
Entrega o retiro:
```

Link (reemplazá `{TU_NUMERO}`):
`https://wa.me/{TU_NUMERO}?text=Hola%21%20Quiero%20reservar%20un%20postre%20de%20Carabalo%20Cakes.%0APostre%3A%20%0AFecha%20de%20mi%20reuni%C3%B3n%3A%20%0AEntrega%20o%20retiro%3A%20`

## 2. Respuesta a quien reserva (mensaje honesto)

```
¡Gracias por reservar! Esto es una prueba de lanzamiento: todavía estoy viendo cuántos pedidos puedo tomar, así que no es un pedido confirmado. En 48 h te aviso por acá si tu fecha entra en el cupo. Por ahora no hace falta que pagues ni que organices nada alrededor del postre.

Una pregunta que me ayuda mucho: ¿qué te frenó o qué cambiarías de la carta?
```

## 3. Respuesta a quien escribe con una fecha a menos de 3 días

```
¡Gracias por escribir! En esta prueba tomo pedidos con 3 a 5 días de anticipación, así que para esa fecha no llego. Anoto tu pedido igual.

Me ayudaría saber: ¿qué hubieras hecho para el postre de esa fecha? Y si querés, ¿qué te frenó o qué cambiarías de la carta?
```

## 4. Respuesta a quien escribe sin reservar (pregunta, comentario, "me encanta")

```
¡Gracias por escribir! Es una prueba de lanzamiento y estoy aprendiendo qué ajustar. ¿Qué te frenó o qué cambiarías de la carta?
```

## 5. Si preguntan el precio

```
Todavía estoy definiendo precios. En esta prueba te lo cuento al confirmar si tu fecha entra en el cupo.
```

Registrar en la hoja de captura que preguntó el precio (`pregunto_precio = si`). No lo uses para cerrar la reserva.

## 6. Cierre a las 48 h

A quien reservó, avisale si su fecha entra en el cupo. No hay entrega ni cobro en esta prueba: lo que sigue es el concierge del archivo de tests, una vez que tengas costo calculado y habilitación.
