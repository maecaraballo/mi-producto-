/**
 * Crea la encuesta "Cómo resolvemos el postre cuando recibimos visitas"
 * en Google Forms, con los saltos entre secciones, una planilla de
 * respuestas y una pestaña "Links" con un link precargado por canal.
 *
 * Fuente: product/surveys/2026-09-27-2150-postres-para-visitas.md
 * Uso: script.google.com > Nuevo proyecto > pegar > ejecutar crearEncuesta
 */

var CANALES = ['instagram', 'wa-estados', 'reenvio-hermana', 'reenvio-esposo', 'trabajo'];

function crearEncuesta() {
  var form = FormApp.create('Cómo resolvemos el postre cuando recibimos visitas');
  form.setDescription(
    'Estoy haciendo una investigación sobre cómo organizamos la comida cuando ' +
    'recibimos gente en casa. Son 5 minutos y es anónima. ¡Gracias!'
  );
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage('¡Gracias por tu tiempo! Me ayudaste muchísimo.');

  var maxDos = FormApp.createCheckboxValidation()
    .setHelpText('Elegí hasta 2 opciones.')
    .requireSelectAtMost(2)
    .build();

  // ---------- Screening ----------
  var s1 = form.addMultipleChoiceItem()
    .setTitle('¿Qué edad tenés?')
    .setRequired(true);

  var pbS2 = form.addPageBreakItem().setTitle('Visitas');
  var s2 = form.addMultipleChoiceItem()
    .setTitle('En los últimos 3 meses, ¿recibiste visitas en tu casa (familia, amigos, un cumpleaños, una comida)?')
    .setRequired(true);

  // ---------- Sección A ----------
  var pbA = form.addPageBreakItem().setTitle('La última vez que recibiste');
  form.addMultipleChoiceItem()
    .setTitle('En los últimos 3 meses, ¿cuántas veces recibiste visitas en tu casa?')
    .setChoiceValues(['1 vez', '2 o 3 veces', '4 a 6 veces', 'Más de 6 veces'])
    .setRequired(true);
  var q2 = form.addMultipleChoiceItem()
    .setTitle('Pensá en la última vez que recibiste visitas. ¿De dónde salió el postre?')
    .setRequired(true);

  // ---------- Sección B1: lo compró o encargó ----------
  var pbB1 = form.addPageBreakItem().setTitle('Sobre ese postre');
  form.addCheckboxItem()
    .setTitle('¿Qué hizo que esa vez el postre fuera comprado? Elegí hasta 2.')
    .setChoiceValues([
      'No tenía tiempo',
      'No me sale bien o no sé hacer postres',
      'Comprado queda mejor o más lindo',
      'No me gusta cocinar',
      'Sale igual o más barato que hacerlo',
      'Lo resolví a último momento'
    ])
    .showOtherOption(true)
    .setValidation(maxDos)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('¿Qué tan conforme quedaste con ese postre?')
    .setChoiceValues(['Nada conforme', 'Poco conforme', 'Más o menos', 'Bastante conforme', 'Muy conforme'])
    .setRequired(false);
  form.addCheckboxItem()
    .setTitle('¿Hubo algo que no te convenció? Elegí hasta 2.')
    .setChoiceValues([
      'Nada, estuvo bien',
      'Muy dulce',
      'Pesado o empalagoso',
      'Sabor artificial o poco casero',
      'Se veía común, igual a todos',
      'Sobró mucho',
      'Muy caro para lo que era',
      'Poca cantidad'
    ])
    .showOtherOption(true)
    .setValidation(FormApp.createCheckboxValidation()
      .setHelpText('Elegí hasta 2 opciones.')
      .requireSelectAtMost(2)
      .build())
    .setRequired(false);
  form.addTextItem()
    .setTitle('¿Cuánto pagaste por ese postre, aproximadamente? En pesos, sin puntos.')
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Solo números, sin puntos ni signo $.')
      .requireWholeNumber()
      .build())
    .setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle('¿Para cuántas personas era?')
    .setChoiceValues(['2 a 4', '5 a 8', '9 a 12', 'Más de 12'])
    .setRequired(false);

  // ---------- Sección B2: lo hizo en casa ----------
  var pbB2 = form.addPageBreakItem().setTitle('Sobre ese postre');
  form.addCheckboxItem()
    .setTitle('¿Qué hizo que esa vez el postre fuera casero? Elegí hasta 2.')
    .setChoiceValues([
      'Me gusta cocinar',
      'Sale más rico que comprado',
      'Sale más barato',
      'Lo comprado no me convence',
      'Es una costumbre o algo que esperan de mí'
    ])
    .showOtherOption(true)
    .setValidation(FormApp.createCheckboxValidation()
      .setHelpText('Elegí hasta 2 opciones.')
      .requireSelectAtMost(2)
      .build())
    .setRequired(true);

  // ---------- Sección C: para todos ----------
  var pbC = form.addPageBreakItem().setTitle('Unas preguntas más');
  form.addMultipleChoiceItem()
    .setTitle('La última vez, ¿con cuánta anticipación decidiste qué postre iba a haber?')
    .setChoiceValues(['El mismo día', 'El día anterior', '2 o 3 días antes', '4 días antes o más', 'No me acuerdo'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('En el último año, ¿encargaste algún postre o comida a un emprendimiento o a alguien que cocina, con días de anticipación?')
    .setChoiceValues(['Sí, varias veces', 'Sí, una vez', 'No'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('¿Qué es lo más difícil de resolver el postre cuando recibís gente?')
    .setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle('¿Dónde vivís?')
    .setChoiceValues(['CABA', 'Gran Buenos Aires', 'Otra zona'])
    .setRequired(true);

  // ---------- Reclutamiento ----------
  form.addPageBreakItem().setTitle('Una última cosa');
  form.addMultipleChoiceItem()
    .setTitle('Cuando reciben gente en tu casa, ¿quién suele decidir y conseguir el postre?')
    .setChoiceValues(['Yo', 'Lo compartimos con otra persona', 'Otra persona'])
    .setRequired(true);
  var r2 = form.addMultipleChoiceItem()
    .setTitle('¿Aceptarías una charla de 30 minutos (videollamada o café) para contarme cómo lo resolvés?')
    .setRequired(true);
  var canal = form.addTextItem()
    .setTitle('Código de invitación (no lo modifiques)')
    .setHelpText('Viene completado en el link. Solo sirve para saber por dónde llegó la encuesta.')
    .setRequired(false);

  // Contacto: sección propia, solo para quien aceptó la charla.
  var pbR3 = form.addPageBreakItem().setTitle('¿Cómo te contacto?');
  form.addTextItem()
    .setTitle('Dejame tu nombre y un WhatsApp o mail.')
    .setRequired(false);

  // ---------- Saltos ----------
  var SUBMIT = FormApp.PageNavigationType.SUBMIT;
  var CONTINUE = FormApp.PageNavigationType.CONTINUE;

  s1.setChoices([
    s1.createChoice('Menos de 18', SUBMIT),
    s1.createChoice('18 a 29', CONTINUE),
    s1.createChoice('30 a 44', CONTINUE),
    s1.createChoice('45 a 59', CONTINUE),
    s1.createChoice('60 o más', CONTINUE)
  ]);
  s2.setChoices([
    s2.createChoice('Sí', CONTINUE),
    s2.createChoice('No', SUBMIT)
  ]);
  q2.setChoices([
    q2.createChoice('Lo hice yo (o alguien de mi casa)', pbB2),
    q2.createChoice('Lo compré en una panadería o pastelería', pbB1),
    q2.createChoice('Lo compré en un supermercado', pbB1),
    q2.createChoice('Lo encargué a un emprendimiento o a alguien que cocina', pbB1),
    q2.createChoice('Lo trajo un invitado', pbC),
    q2.createChoice('No hubo postre', pbC),
    q2.createChoice('Otro', pbC)
  ]);
  r2.setChoices([
    r2.createChoice('Sí', pbR3),
    r2.createChoice('No', SUBMIT)
  ]);
  // Al terminar B1 (la sección anterior a pbB2) se salta B2 y va a C.
  pbB2.setGoToPage(pbC);

  // ---------- Planilla y links por canal ----------
  var ss = SpreadsheetApp.create('Respuestas — postre para visitas');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  var links = ss.insertSheet('Links');
  links.appendRow(['Canal', 'Link para compartir']);
  CANALES.forEach(function (c) {
    var url = form.createResponse()
      .withItemResponse(canal.createResponse(c))
      .toPrefilledUrl();
    links.appendRow([c, url]);
    Logger.log(c + ': ' + url);
  });

  Logger.log('Editar formulario: ' + form.getEditUrl());
  Logger.log('Planilla: ' + ss.getUrl());
}
