# Hoja de captura (T1)

Lo que se anota para poder leer después la señal y el umbral del archivo de tests. Completá `reservas.csv` (una fila por persona que escribe) y `alcance.csv` (una fila por día). Anotá todo mientras ocurre, antes de interpretarlo.

## Qué cuenta (reglas del diseño, no se cambian)

- **Reserva válida:** la persona manda por WhatsApp postre + fecha de una reunión real a **3 días o más** del día del mensaje + entrega o retiro.
- **Cuenta para el umbral (3 o más):** reserva válida de una persona distinta que **no es familia directa** (ni tu esposo).
- **Señal débil:** si 2 o más de las reservas que cuentan son de `amigo`.
- **Piso de exposición:** al menos 30 personas distintas alcanzadas, sin contar familia directa. Alcance = vistos del estado + leídos del mensaje en el grupo (Info del mensaje), sin duplicar.
- **Duración:** 4 días corridos desde la publicación. Si al cierre alcanzó menos de 30, se extiende una sola vez 3 días.

## reservas.csv: una fila por persona que escribe

| Columna | Qué anotar |
|---|---|
| `id` | R1, R2, R3… |
| `fecha_hora_mensaje` | Cuándo escribió |
| `nombre_o_alias` | Como la identifiques; sirve para no contarla dos veces |
| `cercania` | `familia`, `amigo` o `conocido-vecino` |
| `canal` | `grupo` o `estado` |
| `postre` | El que eligió, o vacío |
| `fecha_reunion` | Fecha de su reunión, o vacío |
| `dias_de_anticipacion` | Días entre el mensaje y la reunión (`fecha_reunion` − fecha del mensaje) |
| `entrega_o_retiro` | `entrega`, `retiro` o vacío |
| `reserva_valida` | `si` / `no` según la regla de arriba |
| `cuenta_para_umbral` | `si` solo si es válida y `cercania` no es `familia` |
| `motivo_si_no_valida` | `fecha_menor_a_3_dias`, `sin_reunion`, `no_completo_datos`, `solo_comentario` u `otro` |
| `pidio_fecha_menor_a_3_dias` | `si` / `no` |
| `pregunto_precio` | `si` / `no` |
| `feedback_textual` | Respuesta textual a "¿qué te frenó o qué cambiarías de la carta?". No la resumas |
| `notas` | Lo que no entra en otras columnas (ej.: reservó "por apoyo") |

## alcance.csv: una fila por día

| Columna | Qué anotar |
|---|---|
| `dia` | 1, 2, 3, 4 (y 5 a 7 si se extiende) |
| `fecha` | Fecha |
| `nombres_nuevos_no_familia` | Nombres de las personas nuevas que vieron el estado o leyeron el grupo ese día, separados por `;`. Comparalos con los días anteriores para no duplicar |
| `cantidad_nuevos` | Cuántos son |
| `acumulado_distintos` | Suma acumulada de personas distintas |

## Límites que conocés de antemano

- El alcance en WhatsApp pierde a quien tiene desactivadas las confirmaciones de lectura.
- Sin precio publicado, una reserva no dice nada sobre disposición a pagar.
- Las reservas de familia y las de apoyo se anotan igual: se informan aparte.
