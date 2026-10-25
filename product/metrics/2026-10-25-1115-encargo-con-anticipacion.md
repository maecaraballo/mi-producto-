---
spec: product/specs/2026-10-20-1905-encargo-con-anticipacion.md
exposure-plan: product/exposure-plans/2026-10-20-1920-encargo-con-anticipacion.md
level: 1
status: designed
---

# Métricas para: Encargo con anticipación (Carabalo Cakes) — Nivel 1

> Nivel 1 = la carta de 5 postres con la regla "3 a 5 días de anticipación" y reserva por WhatsApp. Sin precio, cobro, confirmación activa ni entrega. Es la prueba T1 (`product/tests/2026-10-12-1115-postres-para-visitas.md`), todavía sin cerrar ni analizar.

## Target audience
Adultos que reciben visitas en su casa y hoy compran el postre (segmento de `product/overview.md`), alcanzados en este nivel a través de vecinos de Flores y contactos que **no son familia directa** (plan, Nivel 1). Mínimo **30 personas distintas** alcanzadas; con menos, el nivel es no concluyente.

- La unidad es la persona (no el chat ni el pedido). Quien reserva es quien inicia; no hay participantes en este nivel.
- Quedan afuera del denominador: familia directa. Las amigas cercanas **sí** entran, pero se cuentan aparte porque el plan las trata distinto (ver reconciliación).
- Tamaño: se fija al cerrar la publicación y no se cambia después. Hoy: desconocido (T1 no registró alcance).
- **Decisión pendiente (canal):** WhatsApp permite saber quién vio un estado o abrió un mensaje directo, pero **no** quién leyó un mensaje en un grupo. Para que el denominador sea observable, la audiencia se define solo por los canales donde se puede verificar la vista (estados, difusión, mensajes directos). Si se publica en el grupo de vecinos, el alcance será una estimación y se marca `assumption`. Instagram: mientras no se decida si es canal, sus reservas se registran pero no cuentan en el numerador.

## Expected frequency
Para el **problema** (resolver el postre cuando se reciben visitas): Carolina recibe casi todos los fines de semana; Gustavo, cada tanto (fuente: personas `synthetic`). No hay evidencia real de frecuencia (T1 sin cierre, encuesta n=6 solo familia). **`assumption`:** el segmento recibe visitas con postre entre 1 y 2 veces por mes → la ventana de retención es **mensual**, no semanal. En el Nivel 1 la retención no se mide (ver más abajo).

## Acquisition
- **Signal:** la persona abrió la carta (vio el estado, o abrió —con tilde azul— el mensaje directo/difusión que la contiene).
- **Expanded definition:** cuenta cada persona distinta de la audiencia que cumple la señal durante los 4 días del nivel (más la única extensión de 3 días, si se usa). Se verifica con la lista de "vistos" del estado y los acuses de lectura. No cuenta ver el chat de un grupo (no es observable).
- **Calculation:** personas que abrieron la carta / personas de la audiencia contactadas, en 4 días (+3).
- **Target:** ≥ 60% de la audiencia contactada · **Why:** es un supuesto (`assumption`) sobre lo que un estado de WhatsApp suele alcanzar; no hay dato propio. Su función real es la regla de alcance del plan: **al menos 30 personas distintas deben abrir la carta**, o el nivel es no concluyente. Se fija el piso en 30 personas, que sí viene del plan.
- **Events needed:** `carta_publicada` (canal, fecha, audiencia contactada), `carta_vista` (persona, canal, fecha).

## Activation
- **Signal:** la persona manda una **reserva válida**: postre + fecha de una reunión real a 3 días o más + entrega o retiro.
- **Expanded definition:** cuenta una vez por persona distinta, no familia directa, por el canal habilitado (WhatsApp). Las reservas de amigas cercanas se cuentan en el numerador pero también en el contador `amiga_cercana`, porque cambian la lectura.
- **Signal threshold:** los tres datos completos y la fecha a 3 días o más · **Why:** es la definición de la hipótesis de la spec ("reserva válida") y de la regla de decisión de T1; es la conducta que sostiene la creencia #6 (aceptan encargar con días de anticipación). Preguntar el precio o decir "me interesa" no es valor. · **Excludes:** consultas sin reserva (p. ej. R1, que preguntó el precio del Brownie y no reservó); pedidos con fecha a menos de 3 días (se anotan aparte); familia directa; reservas por Instagram hasta decidir el canal; mensajes sin fecha de reunión (no se toman como reserva).
- **Calculation:** personas con reserva válida / audiencia contactada, en 4 días (+3).
- **Target:** ≥ 3 personas con reserva válida sobre ≥ 30 alcanzadas (≥ 10% en el mínimo), con menos de 2 de esas reservas de amigas cercanas · **Why:** es el criterio "avanza si" del Nivel 1; no se pone más alto para no contradecir el plan. Con alcance mayor a 30, el criterio del plan sigue siendo el absoluto (3), y el porcentaje se reporta sin cambiar el umbral.
- **Events needed:** `mensaje_recibido` (persona, canal, fecha), `reserva_valida` (persona, postre, fecha de reunión, entrega/retiro, es_familia, es_amiga_cercana), `consulta_sin_reserva` (persona, tema), `fecha_cercana` (persona, fecha pedida), `reserva_incompleta` (persona, dato faltante).

## Retention
- **Signal:** una persona con una reserva válida vuelve a reservar otro postre en la ventana mensual.
- **Expanded definition:** reserva válida nueva de una persona que ya había activado, en una reunión distinta.
- **Retention curve:** cohortes por semana de primera reserva válida, seguidas a 30 y 60 días. Con las cohortes que habrá (3 a 10 personas), la lectura es solo direccional.
- **Calculation:** personas con 2 o más reservas válidas en 60 días / audiencia (la de los clientes reales, no la del Nivel 1).
- **Target:** ≥ 30% de los primeros 10 clientes reales dentro de 60 días (3 de 10) · **Why:** es el criterio "avanza si" del Nivel 4 y de la creencia #5.
- **Estado en el Nivel 1:** **`not computable`.** Nadie recibe un postre ni vuelve a reservar en 4 a 7 días, y medir un proxy (por ejemplo, quien reserva dos veces el mismo día) sería aproximar la señal con otro evento. No se computa ni se interpreta en este nivel. La definición queda fijada para cuando se llegue al Nivel 4.
- **Events needed:** `reserva_valida` (con persona y fecha, ya definida), `postre_entregado` (persona, fecha) cuando exista entrega.

## Satisfaction
- **Instrument:** pregunta de un mensaje por WhatsApp, enviada a toda persona que hizo una reserva válida, justo después de recibir la respuesta de cupo · **Question:** "¿Qué tan fácil fue pedirlo? Del 1 al 5." · **When it shows:** una sola vez, apenas se contesta la reserva (o dentro de las 24 h siguientes) · **Cut:** 4 o más.
- **Expanded definition:** mide la experiencia de **reservar** (lo único que el Nivel 1 revela), no la del postre. Se mide solo a quienes reservaron: con 3 a 10 respuestas posibles, es una lectura cualitativa.
- **Calculation:** personas con 4 o más / audiencia contactada (la tasa de respuesta y el porcentaje entre quienes respondieron se reportan aparte).
- **Target:** ≥ 2 de cada 3 de las personas que reservaron responden 4 o más · **Why:** el plan no fija criterio de satisfacción para este nivel; es un umbral **informativo, no una condición de avance** (propuesto, `assumption`).
- **Events needed:** `encuesta_enviada` (persona, fecha), `encuesta_respondida` (persona, puntaje).

## Business metrics
`none declared`. `product/overview.md` no tiene sección de sponsor con métricas de negocio; solo hay creencias de viabilidad (#4 precio, #5 recompra y margen). En el Nivel 1 no se miden: el precio está oculto y no hay entrega. Se miden con el Nivel 2 (precio) y el Nivel 4 (recompra).

## Exposure plan reconciliation
- **Avanza si ≥ 3 reservas válidas que cuentan, ≥ 30 alcanzadas y < 2 de amigas** → lo lee `activation` (numerador y contador `amiga_cercana`) con `acquisition` como condición de alcance.
- **Se detiene o cambia si 0 a 2 reservas válidas** → `activation` por debajo de 3 personas.
- **Se detiene o cambia si ≥ 3 piden una fecha a menos de 3 días** → contador `fecha_cercana` (parte de `activation`; no es una métrica AARS aparte, y se lee junto con ella).
- **No concluyente si < 30 alcanzadas** → `acquisition`: personas que abrieron la carta < 30.
- **Cuidado al leerlo (sin precio)** → un `activation` bajo puede deberse a que no hay precio; se contrasta con `consulta_sin_reserva` por tema precio (feedback), nunca solo con las métricas.
- Retención y satisfacción no tienen criterio de avance/detención en el Nivel 1: retención `not computable`, satisfacción informativa.
