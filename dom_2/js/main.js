// $('h3').wrap('<div>');

// $('h3').wrap('<div class="aaa"></div>');

// $('p').unwrap('div');

// let $spans = $('span');
// $spans.unwrap('p');

// $('h3').wrapInner('<i>');

// $('h2').wrapAll('<div></div>');
// $('h2').prepend('<i>new </i>');

// let $headers = $('h2');

// $headers.prepend('! ').append(' ?').css('color', 'red');

// $('h2').before('<p>!</p>').after('<p>?</p>');

// $('<b> Hello</b>').appendTo('.www');
// $('<strong>Prev </strong>').prependTo('.www');

// $('<p>!!!</p>').replaceAll('.title');

// $('h2').remove('.zzz');

// let $elem = $('#test');
// $elem.detach();
// $($elem).appendTo('.value');

// $('h2').empty();

let w = $('#wrapper').width();
let h = $('#wrapper').height();

$('#one').text(`Width: ${w}, Height: ${h}`);
$('#two').text(
  `Width: ${$('#wrapper').innerWidth()}, Height: ${$('#wrapper').innerHeight()}`
);
$('#three').text(
  `Width: ${$('#wrapper').outerWidth()}, Height: ${$('#wrapper').outerHeight()}`
);
$('#four').text(
  `Width: ${$('#wrapper').outerWidth(true)}, Height: ${$(
    '#wrapper'
  ).outerHeight(true)}`
);
