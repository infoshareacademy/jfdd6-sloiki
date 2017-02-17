$('.menu--content .container').on('click', function (event) {
  event.preventDefault();

  var href = $('#').attr('href')
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});


$('.menu--nav a').on('click', function (event) {
  event.preventDefault();

  var href = $('#product').attr('href')
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

$('.menu--nav a').on('click', function (event) {
  event.preventDefault();

  var href = $('#team').attr('href')
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

$('.menu--nav a').on('click', function (event) {
  event.preventDefault();

  var href = $('#form').attr('href')
  var offset = p.offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

