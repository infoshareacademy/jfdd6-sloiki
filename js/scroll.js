

$('.nav-product').on('click', function (event) {
  event.preventDefault();
  var p = $('#product');
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

$('.nav-team').on('click', function (event) {
  event.preventDefault();
  var p = $('#team');
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

$('.nav-form').on('click', function (event) {
  event.preventDefault();
  var p = $('#form');
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

$('.header--menu').on('click', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});