// let $image = $('#www');
// $image.css('width', '400px');
// let $value = image.attr('src');
// $('.value').text($value);

// $('.link + span').text($('.link').attr('href'));

// let $images = $('.img');

// $images.each(function () {
//   $(this).css('width', '200px');
//   console.log($(this).attr('src'));
// });

// let $items = $('li');

// $items.map(function () {
//   return $(this).attr('class', 'test');
// });

// $('.test-link')
//   .map(function () {
//     return $(this).attr('href', 'https://facebook.com');
//   })
//   .map(function () {
//     return $(this).attr('target', '_blank');
//   })
//   .map(function () {
//     return $(this).text(`(${$(this).attr('href')})`);
//   })
//   .map(function () {
//     return $(this).attr('title', $(this).text());
//   });

// let $inputs = $('input');

// $inputs.attr('value', function (index, value) {
//   if (index % 2 !== 0) {
//     return `${value}-${index}`;
//   }
// });

// let $items = $('li');

// $items.each(function () {
//   const isAttr = $(this).attr('class') === 'www' && true;

//   if (isAttr) {
//     $(this).removeAttr('class');
//   } else {
//     $(this).attr('class', 'www');
//   }
// });

// $items.each(function () {
//   $(this).attr('class', '');
// });

// $("input[type='checkbox']").prop('checked', false);

// $("input[type='checkbox']").prop('checked', true);

// let $inputs = $('input');

// $inputs.val('!');

// $("input[type='number']").val(function (_, value) {
//   return Math.pow(value, 2);
// });

// console.log($('.text').val());

// $('li').addClass('test');

// $('button').click(function () {
//   $('li').toggleClass('www');
// });

// $('button').click(function () {
//   $('p').toggleClass('red', false);
// });

console.log($('a').hasClass('www'));
