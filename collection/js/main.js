// let $items = $('li');
// let num = $items.length;
// console.log($items.get(2));
// console.log(num);

// let index = $('#test').index();
// console.log(index);

// let first = $('li').index($('#first'));
// console.log(first);

// $('li').not('.test').append('!');

// $('li').eq(4).css('color', 'red');
// $('li').eq(-2).css('background-color', 'purple');

// $('li').first().append(' Hello everybody');

// $('li').has('i').css('font-size', '20px');

// $('.list > li').slice(2, 7).css('color', 'green');

// $('.item').prepend('first - ').filter('.www').css('font-size', '20px');

// $('li.www').siblings().css('color', 'brown');

// $('li.www').siblings().not('.test').css('color', 'orange');

// $('.www').parent().css('border', '1px solid orange');

// $('#text')
//   .children()
//   .each(function () {
//     console.log(this);
//   });

// $('#text')
//   .contents()
//   .each(function () {
//     console.log(this);
//   });

// $('p.www').prepend('!').append('!!').add('h2').css('color', 'red');

$('h2').filter('.www').css('color', 'red').end().css('font-size', '30px');

$('div.www').clone().css('color', 'brown').text('???').insertBefore('div.www');

console.log(
  $('span')
    .toArray()
    .map((el) => el.innerText[0].toUpperCase() + el.innerText.slice(1))
    .join(' ')
);
