// Найдите все абзацы p, покрасьте их в красный цвет. Затем выберите среди найденных абзацев абзацы с классом www и поставьте им текст '!'.

// $('p').css('color', 'red');
// $('p.www').text('!');

// Найдите все абзацы p с классом www, покрасьте их в красный цвет. Затем выберите среди найденных абзацев первый и поставьте ему текст '!', затем выберите последний и ему поставьте текст '?'. Решите задачу одной цепочкой.

// $('p.www').css('color', 'red').first().text('!').end().last().text('?');

// Найдите все абзацы p, поставьте каждому из них в конец тот же текст, который стоит внутри него (то есть текст в абзаце станет написан два раза).

// $('p').each(function () {
//   $(this).append(' ' + $(this).text());
// });

// Найдите все абзацы p, поставьте каждому из них в конец его порядковый номер в наборе.

// $('p').each(function (index) {
//   $(this).append(' ' + index);
// });

// Даны абзацы с числами. Поставьте каждому из них в конец число, которое в нем хранится, умноженное на его порядковый номер в наборе.

// $('p').each(function (index) {
//   $(this).append(` * ${index} = ${$(this).text() * index}`);
// });

// По нажатию на абзац p удалите его непосредственных соседей сверху и снизу.

// $('p').click(function () {
//   $(this).prev().remove();
//   $(this).next().remove();
// });

// По нажатию на абзац p удалите всех его соседей сверху до первого заголовка h1-h6 (то есть элементы, стоящие выше этого заголовка и сам заголовок удалять не надо).

// $('p').click(function () {
//   $(this).prevUntil(':header').remove();
// });

// По нажатию на абзац p удалите его ближайшего нижнего соседа с классом www.

// $('p').click(function () {
//   $(this).nextAll('.www').first().remove();
// });

// По нажатию на абзац p удалите его пятого соседа снизу.

// $('p').click(function () {
//   $(this).nextAll().eq(4).remove();
// });

// По нажатию на абзац p удалите его пятого соседа снизу, если это не h2.

$('p').click(function () {
  $(this).nextAll().eq(4).not('h2').remove();
});
