// Найдите всех родителей элемента #test и создайте массив из CSS классов этих родителей.

// const classes = [];

// $('#test')
//   .parents()
//   .each(function () {
//     const isClass = $(this).attr('class');

//     if (isClass) {
//       classes.push(isClass);
//     }
//   });

// console.log(classes);

// Найдите все абзацы p, у которых есть атрибут class, и каждый из них оберните в div с теми же классами, как у найденного абзаца, а классы каждого абзаца удалите вместе с атрибутом class.

// $('p[class]').each(function () {
//   $(this).wrap(`<div class='${$(this).attr('class')}'></div>`);
//   $(this).removeAttr('class');
// });

// Найдите все абзацы p из #test, поставьте им в конец текст '!', затем исключите из найденных абзацы с классом www и оставшимся поставьте красный цвет.

// $('#test').children('p').append('!').filter(':not(.www)').css('color', 'red');

// Найдите все li на странице, затем перед предпоследним из найденных вставьте еще один li с текстом 'пункт'.

// $('li').eq(-2).before('<li>пункт</li>');

// Найдите все li на странице, затем выберите среди найденных второй, третий и четвертый с конца и поставьте им текст '!'.

// $('li').slice(-4, -1).append('!');

// Найдите ol с #test и переставьте все li в нем в обратном порядке.

// const reversedItems = $('ol#test > li').toArray().reverse();

// $('ol#test').empty().append(reversedItems);

// Дан элемент #test. Найдите всех его соседей сверху и всех его соседей снизу и поменяйте их местами (то есть все, что стоит до элемента, должно стать после него и наоборот).

// const over = $('#test').prevAll();
// const below = $('#test').nextAll();

// $('#test').after(over).before(below);

// Получите все li с классом www, сделайте им красный цвет, затем найдите среди найденных те li, у которых есть класс bbb и удалите их. Решите все одной цепочкой.

// $('li.www').css('color', 'red').filter('.bbb').remove();

// Найдите все теги div и удвойте им высоту.

// $('div').each(function () {
//   $(this).height($(this).height() * 2);
// });

// Найдите сумму высот всех div на странице.

let sum = 0;

$('div').each(function () {
  sum += $(this).height();
});

console.log(sum);
