// $('#hide').click(function (event) {
//   event.preventDefault();
//   $('#block').hide(1000);
// });

// $('#show').click(function (event) {
//   event.preventDefault();
//   $('#block').show(1000);
// });

// $('#hide').click(function (event) {
//   event.preventDefault();
//   $('#block').slideUp(1600);
// });

// $('#show').click(function (event) {
//   event.preventDefault();
//   $('#block').slideDown(1600);
// });

// $('.btn').click(function (event) {
//   event.preventDefault();

//   $('#block').slideToggle(1000);
// });

// $('#hide').click(function (event) {
//   event.preventDefault();

//   $('#block').fadeOut(1000);
// });

// $('#show').click(function (event) {
//   event.preventDefault();

//   $('#block').fadeIn(1000);
// });

// $('.btn').click(function (event) {
//   event.preventDefault();

//   $('#block').fadeTo(1000, 0.5);
// });

// $('#block').click(function () {
//   $(this).animate({ width: 200 }, 1100);
// });

// $('#block').click(function () {
//   $(this).animate({ width: '+=200' }, 900);
// });

// $('#block').click(function () {
//   $(this).animate({ width: '+=100', height: '+=100' }, 950);
// });

$('#block').click(function () {
  $(this).css('position', 'relative');

  $(this).animate({ left: '+=100' }, 700);
});
