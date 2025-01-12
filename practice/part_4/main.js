// По нажатию на абзац p удалите его пятого соседа снизу, если этот сосед не имеет внутри себя тега b.

// $('p').on('click', function () {
//   $(this).nextAll().eq(4).not('p:has(b)').remove();
// });

// По нажатию на абзац p удалите его пятого соседа снизу, если этот сосед не стоит непосредственно после h2.

// $('p').click(function () {
//   $(this)
//     .nextAll()
//     .eq(4)
//     .filter(function () {
//       return !$(this).prev().is('h2');
//     })
//     .remove();
// });

// Дан элемент #test. Поменяйте этот элемент местами с его непосредственным соседом снизу.

// $('#test').insertAfter($('#test').next());

// Дан элемент #test. После его непосредственного соседа снизу вставьте копию нашего элемента.

// $('#test').clone().insertAfter($('#test').next());

// Дан элемент #test. Поменяйте этот элемент местами с его ближайшим соседом снизу с классом www.

// $('#test').nextAll('.www').first().after($('#test'));

// Найдите все абзацы p, которые внутри одного родителя лежат между одним и другим h2.

// $('h2').each(function () {
//   $(this)
//     .nextAll('p')
//     .slice(0, $(this).nextAll('h2').index() - 2)
//     .css('color', 'red');
// });

// Оберните каждый абзац p снаружи и внутри в div.

// $('p').wrap('<div>').wrapInner('<div>');

// Найдите все абзацы p, у которых непосредственный родитель не div и оберните каждый из них в <div class="www"></div>.

// $('p').each(function () {
//   if (!$(this).parent().is('div')) {
//     $(this).wrap('<div class="www"></div>');
//   }
// });

// Найдите все абзацы p. Удалите их родителя (сделайте ему unwrap), если этот родитель не div с классом www. Затем для те абзацы, у которых был удален родитель, оберните в div с классом zzz.

// $('p').each(function () {
//   let parent = $(this).parent();
//   if (!parent.is('div.www') && !parent.is('body')) {
//     $(this).unwrap().wrap('<div class="zzz"></div>');
//   }
// });

// Найдите всех родителей элемента #test и создайте массив из CSS классов этих родителей.

const arrClasses = [];

$('#test')
  .parents('div')
  .each(function () {
    arrClasses.push($(this).attr('class'));
  });

console.log(arrClasses);
