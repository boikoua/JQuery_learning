// let $items = $('li');
// $items.click(function () {
//   $(this).prepend('?');
// });

// $('div > p').click(function () {
//   $('.value').html($(this).text());
// });

// $('a').hover(function () {
//   $(this).append('(' + $(this).attr('href') + ')');
// });

// $('input').blur(function () {
//   $('#test').html($(this).val());
// });

// $('input').on('blur', function () {
//   $('#test').html($(this).val());
// });

// $('a').on('mouseenter', function func() {
//   $(this).append($(this).attr('href'));
//   $(this).off('mouseenter', func);
// });

// $('input').on('click', function func() {
//   alert($(this).val());
//   $(this).off('click', func);
// });

// $('ul').on('click', 'li', function () {
//   $(this).append('!');
// });

// $('button').click(function () {
//   $('ul').append('<li>пункт</li>');
// });

// $('ul').on('click', 'li', function () {
//   $(this).append('!');
// });

// $('form').submit(function (event) {
//   event.preventDefault();

//   let $name = $('.name').val();
//   let $surname = $('.surname').val();

//   $('table').append(`<tr><td>${$name}</td><td>${$surname}</td></tr>`);

//   $('.name').val('');
//   $('.surname').val('');
// });

// $('table').on('click', 'td', function () {
//   const newValue = prompt('Введите новое значение');

//   if (newValue !== null) {
//     $(this).text(newValue);
//   }
// });

// $('a').one('mouseenter', function () {
//   $(this).append(`(${$(this).attr('href')})`);
// });

$('p').one('click', function () {
  $(this).append('!');
});

// Давайте будем вводит текст в текстовое поле, а при нажатии на кнопку проверять этот текст. Если мы введем 'jQuery', то в спане покажем текст 'Good!', с помощью методов text и show, а если что-то другое, то - 'Bad...':

$('form').submit(function (event) {
  event.preventDefault();

  if ($('input[type=text]').val() === 'JQuery') {
    $('span').css('color', 'green').text('Good!').show();
    return;
  }

  $('span').css('color', 'red').text('Bad!').show();
});
