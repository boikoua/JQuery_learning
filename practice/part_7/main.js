// Дан инпут. Переместите содержимое атрибута value в атрибут placeholder, а сам атрибут value удалите совсем.

// $('input').attr('placeholder', $('input').val()).removeAttr('value');

// Дана ссылка. Если атрибут href начинается на http://, добавьте ссылке атрибут target="_blank".

// $('a').each(function () {
//   if ($(this).attr('href').startsWith('http://')) {
//     $(this).attr('target', '_blank');
//   }
// });

// Дан инпут, в который можно ввести число. Сделайте так, чтобы при вводе числа в этот инпут и потери фокуса на странице искался чекбокс с таким номером и становился отмеченным, а остальные чекбоксы становились неотмеченными.

// $('input[type=number]').on('blur', function () {
//   const number = Number($(this).val());

//   $('input[type=checkbox]').each(function (index) {
//     if (index + 1 === number) {
//       $(this).prop('checked', true);
//     } else {
//       $(this).prop('checked', false);
//     }
//   });
// });

// Дан селект и радио кнопочки, количество радио равно количеству пунктов в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически становилась отмеченной соответствующая радио кнопочка (соответствие по номеру следования: первый пункт списка - первому радио и так далее).

$('select').on('change', function () {
  const selectedElem = $(this).val();

  $('input[type=radio]').each(function () {
    if (selectedElem === $(this).prop('name')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
});
