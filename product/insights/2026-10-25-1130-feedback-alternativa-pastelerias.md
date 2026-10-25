---
source: real
corpus: product/data/2026-10-25-resenas-google-pastelerias-flores-caballito.csv
metrics-analysis: none
period: reseñas publicadas entre ~2017 y oct-2026 (Google muestra antigüedad relativa, no fecha), leídas el 2026-10-25
---

# Análisis de feedback: la alternativa actual al encargo de postres (pastelerías con reseñas en Google)

> **Qué es y qué no es este análisis.** Son reseñas de **otros negocios** (la alternativa que hoy usan quienes compran el postre), no de Carabalo Cakes. Sirven para entender qué valoran y qué les molesta a los clientes de la alternativa. No miden tu producto: todavía no hay Nivel 1 corrido ni análisis de métricas (`metrics-analysis: none`).

## Corpus
- **40 reseñas públicas de Google Maps**, 20 de cada local: **Roma Pane & Dolci** (Caballito) y **La Buenos Aires** (Av. Carabobo 122, Flores). Se tomaron las **primeras 20 de cada local en el orden "Más relevantes" de Google**; el tope de 40 lo fija la consigna. Los textos están tal cual se publicaron; se sacaron los nombres de las autoras y los contadores de reacciones.
- **Fuera de tope (6 reseñas leídas, no incluidas en los conteos):** 3 de Roma y 3 de La Buenos Aires. Una de La Buenos Aires es relevante para este tema y conviene saberlo: *"Las masas son pura crema . Muy pesadas No valen lo que cuestan."* (hace 6 meses). Es un indicio sobre "pesado" que este corpus no cuenta.
- **Fuera de alcance: 22 de 40** (55%). Hablan de sandwiches de miga, facturas, pan, empanadas, lunch o elogian el local en general, sin referirse a tortas, postres ni al pedido. Quedan afuera de los porcentajes. Los **18 en alcance** son la base de lo que sigue.
- **Fuente única:** el 100% es Google Maps. Sobre-representa a quien está muy contento o muy enojado, y quien se fue sin escribir no aparece. El orden por relevancia no es una muestra al azar.
- **No se capturó la puntuación en estrellas** de cada reseña.
- Solo 2 locales, ambos muy bien puntuados en Google (4,3 y 4,6): el resultado vale para pastelerías de buena reputación, no para "la pastelería promedio" ni para el supermercado.
- **Tendencia:** `n/a`. Google da fechas relativas ("hace 7 meses", "hace 9 años"), no fechas.

## Muestra del etiquetado
Antes de los conteos, así se etiquetó (el etiquetado completo está al final, para corregir criterios):

| id | parte | tipo | tema |
|---|---|---|---|
| C03 | torta de cumpleaños, retiro, atención | praise | F1, F5 |
| C10 | masitas, precio, cobro | complaint | F2, F3, F4 |
| C13 | pedido de torta | complaint | débil (W1) |
| C05 | sandwiches de miga | complaint | fuera de alcance |

## Themes

### F1. La torta o el postre gusta por su sabor y su calidad
- **Entries:** 14 (78% de las 18 en alcance) · **Sources:** Google Maps (ambos locales) · **Segments:** clientes de pastelería; 9 de las 14 describen el producto (crema, frescura, dulce de leche) y 5 elogian "la pastelería" en general.
- **Part of the feature:** el producto en sí (la torta o postre que llega a la mesa).
- **Type:** praise
- **Severity:** baja como problema; como dato de competencia es **alta**: la alternativa, cuando está bien ejecutada, deja satisfecha a la mayoría. Cualquier postre propio se compara con eso.
- **Trend:** n/a
- > "Ayer compramos una " torta cumpleañitos". La torta estaba fresca, la crema riquísima,sin ese olor a " heladera". Una buena cantidad de relleno." (C03)
- > "La Pastelería es de gran calidad, ya que bajan la cantidad de azúcar pero el sabor es excelente." (C09)

### F2. Postre que defrauda: seco, sin sabor o "guardado"
- **Entries:** 3 (17%) · **Sources:** Google Maps (solo Roma) · **Segments:** compradores de tortas, postres y masitas.
- **Part of the feature:** sabor y frescura del producto.
- **Type:** complaint
- **Severity:** **alta en intensidad, baja en frecuencia.** Las tres cortan la relación ("no vuelvo", "no lo recomiendo"). Dos van acompañadas de precio alto.
- **Trend:** n/a
- > "Compré un postre Balcarce que salió $65.000. La estética preciosa, el packaging imponente. Por dentro, el bizcocho super seco. Realmente no hay armonía entre el exterior y los sabores. No lo recomiendo" (C17)
- > "En las tortas mejoraron la decoración pero bajo el sabor y la calidad." (C12)

### F3. El precio no se justifica por lo que se recibe
- **Entries:** 5 (28%) · **Sources:** Google Maps (solo Roma) · **Segments:** compradores de tortas, porciones y masitas. En contraste, 1 reseña de La Buenos Aires (C38) dice "precios accesibles".
- **Part of the feature:** precio.
- **Type:** complaint
- **Severity:** **media-alta.** Es la queja más frecuente después del sabor. Aparece mezclada con la expectativa ("por el precio esperaba algo único"), no con el precio en sí.
- **Trend:** n/a
- > "Volví a llevar las porciones de la red velvet (q son cositas finitas para picar, no es una porción porción grande) y salian $1100 cada una, q terminaron siendo $2200. Una barbaridad!!!" (C20)
- > "quizás por el precio esperaba algo único" (C06)

### F4. No se ven los precios, o el precio cobrado no coincide con el dicho
- **Entries:** 2 (11%) · **Sources:** Google Maps (solo Roma) · **Segments:** compradora de masitas y clienta de 30 años.
- **Part of the feature:** exhibición del precio antes de comprar.
- **Type:** complaint
- **Severity:** **media.** Son pocas, pero enojan mucho y es justo lo que el Nivel 2 del plan de exposición decide mostrar (precio visible antes de reservar).
- **Trend:** n/a
- > "Pregunté cuanto estaba el cuarto y me dijo 8.000, cuando fui a caja me cobraron 9.800." (C10)
- > "Desde la renovación ya no exhiben los precios, no sabes cuanto sale NADA." (C12)

### F5. La atención amable acompaña la compra de tortas
- **Entries:** 5 (28%) · **Sources:** Google Maps (ambos locales) · **Segments:** clientes frecuentes.
- **Part of the feature:** trato en la compra y el retiro.
- **Type:** praise
- **Severity:** baja como problema; el trato es parte de por qué vuelven.
- **Trend:** n/a
- > "El retiro fue muy rápido. [...] Las vendedoras siempre muy amables. Seguiremos comprando ahí,sin duda!" (C03)

## Against the metrics hypotheses
No hay análisis de métricas (el Nivel 1 todavía no corrió), así que no hay hipótesis de métricas que contrastar. Lo que sí se puede hacer es leer los temas frente a tres creencias de `product/overview.md`. **Esto no anota el overview:** las reseñas son de otros negocios, vienen de una sola fuente que se autoselecciona y no son del segmento medido.

- **#1 (el postre de pastelería o supermercado resulta muy dulce, pesado o artificial): `no signal`.** Ninguna reseña dice "empalagoso" o "muy dulce". Hay un "es una bomba" ambiguo (C02) y una reseña que alaba que "bajan la cantidad de azúcar" (C09). La mayoría de las 18 elogia el sabor (F1), aunque son dos locales muy bien puntuados. Para #1 hace falta mirar el supermercado y las pastelerías más comunes, que este corpus no cubre.
- **#4 (pagarían entre 10% y 30% más que en una pastelería): `no signal` sobre la disposición a pagar más.** Sí hay una pista fuerte (F3, F4): el precio es la queja más frecuente de la alternativa y la falta de precios a la vista enoja. Eso apoya mostrar el precio en la carta desde el Nivel 2 y justifica el cuidado al leerlo (sin precio, el Nivel 1 puede perder gente).
- **#6 (les resulta aceptable encargar con anticipación): `no signal`.** Nadie habla de encargar con días de margen. La única mención de pedido (C13) es un error de entrega, ver abajo.

Temas que ninguna creencia cubría: **el postre que defrauda a pesar de verse bien (F2)**: el packaging y la estética no compensan un sabor o una textura mala, y un cliente no vuelve.

## Weak signals
- **Error en el pedido (C13):** pidió cheesecake, le dieron limón pie, lo notó a las 23 h al abrir la caja para el cumpleaños de su hija, y la encargada se negó a cambiarlo. *"Un desastre total [...] Capaciten a los empleados o pagenles mejor que pierden gente."* Es 1 de 18, pero es exactamente el miedo que describe la spec ("encargar da miedo si no hay confirmación") y apoya la idea de confirmar el pedido antes de la entrega, aunque no la prueba.
- **Dulzor:** C09 elogia que "bajan la cantidad de azúcar", y C02 dice que una torta es "muy buena pero es una bomba". Una mención cada una; refuerza mirar el equilibrio de dulzor como diferencial, pero no es un tema.
- **Porciones chicas:** "Detalle son chicas" (C04) y "cositas finitas para picar, no es una porción porción grande" (C20). Relevante para el rendimiento "para 8" de la carta.
- **Uso para reuniones:** C31 ("ideal cuando no querés cocinar y comprar algunas cosas para servir en casa") y C35 (usaron productos "como cátering" en un casamiento, fuera de alcance por referirse a lo salado). Los dos describen el contexto de recibir visitas que define tu segmento.

## Etiquetado completo
En alcance (18): C02, C03, C04, C06, C07, C09, C10, C11, C12, C13, C17, C20, C22, C24, C31, C34, C38, C40.
Fuera de alcance (22): C01, C05, C08, C14, C15, C16, C18, C19, C21, C23, C25, C26, C27, C28, C29, C30, C32, C33, C35, C36, C37, C39.

| Tema | Entradas |
|---|---|
| F1 sabor/calidad elogiados | C02, C03, C04, C06, C07, C09, C11, C20, C22, C24, C31, C34, C38, C40 |
| F2 postre que defrauda | C10, C12, C17 |
| F3 precio no justificado | C06, C10, C12, C17, C20 |
| F4 sin precios exhibidos / cobro distinto | C10, C12 |
| F5 atención amable | C03, C04, C11, C22, C34 |
| Señal débil (pedido equivocado) | C13 |

Criterio de alcance: una reseña está en alcance si habla de una torta, postre, masa, alfajor o macaron, del precio de esos productos o de un pedido de ellos. Una misma reseña puede tener más de un tema, así que los porcentajes no suman 100.
