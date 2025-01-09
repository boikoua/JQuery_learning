// let $headers = $('h3');

// $headers.css({ color: 'green', fontWeight: '700' });

// let $subtitles = $('.subtitle');

// $subtitles.css({ color: 'blue', 'font-size': '30px' });

// $('h2 i').css('color', 'red');

// let $testElements = $('.test');

// $testElements.css('color', 'yellow');

// $('#list').css('list-style', 'none');

// $('h2.test').css('color', 'brown');

// let $elements = $('.test p');

// $elements.css('font-size', '24px');

// $('h2 > i').css('color', 'purple');

$(':header').css('color', 'red');

let $zzzHeaders = $(':header.zzz');
$zzzHeaders.css('color', 'green');

$(':header + :header').css('background-color', 'blue');

$(':header:not(.zzz)').css('font-size', '26px');

$('h2:has(i)').css('font-size', '12px');

// $('li:contains(text)').css('font-size', '30px');

$('p:empty').css({ width: '300px', height: '5px', backgroundColor: 'orange' });

$('p:parent').css({ border: '1px solid red', width: '80%' });

// Each

let $items = $('li');

$items.each(function (index) {
  $(this).append(' ' + index);
});

// Map

$('.jjj').map(function (index) {
  return (this.id = index);
});
