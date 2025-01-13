// Для элемента #test найдите ближайшего родителя с классом www, в конец этого родителя добавьте абзац с текстом '!'.

// $('#test').parents('.www').first().append('<p>!</p>');

// По нажатию на элемент #test найдите его ближайшего родителя с классом www, внутри этого родителя найдите все абзацы и покрасьте их в красный цвет.

// $('#test').click(function () {
//   $(this).parents('.www').first().children('p').css('color', 'red');
// });

// Покрасьте первые 10 li на странице в красный цвет.

// $('li').slice(0, 10).css('color', 'red');

// Покрасьте с 5-той по 10-ю li на странице в красный цвет.

// $('li').slice(4, 10).css('color', 'red');

// Найдите последние 10 li на странице, покрасьте их в красный цвет. Затем из найденных найдите четные li и оберните их внутри в тег b.

// $('li')
//   .slice(-10)
//   .css('color', 'red')
//   .each(function (index) {
//     if (index % 2 === 0) {
//       $(this).wrapInner('<b></b>');
//     }
//   });

// На странице даны чекбоксы. Подсчитайте, сколько из них отмечены.

// console.log($('input[type=checkbox]:checked').length);

// Дано 5 чекбоксов. Сделайте так, чтобы после того, как пользователь отметил два из них, все чекбоксы заблокировались.

// $('input[type=checkbox]').on('change', function () {
//   if ($('input[type=checkbox]:checked').length === 2) {
//     $('input[type=checkbox]').prop('disabled', true);
//   }
// });

// Сделайте так, чтобы все отмеченные чекбоксы сменили свое состояние на неотмеченное и наоборот.

$('input[type=checkbox]').each(function () {
  const isChecked = $(this).prop('checked');

  $(this).prop('checked', !isChecked);
});
