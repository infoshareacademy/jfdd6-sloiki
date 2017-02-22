$(document).ready(function () {

  var $container = $('.game--board');
  var $table = $('<table>');
  var $tr;
  var $td;

  var cards = ["a", "b", "c", "d", "e", "f", "g", "h"];

  $container.append($table).addClass('game--board');


  for (var y = 0; y < 4; y += 1) {
    $tr = $('<tr>');

    for(var x = 0; x < 4; x += 1) {
      $td = $('<td>').addClass('game--card')
        .on('click', function () {
          $(this).toggleClass('game--card__flipped');
        });
      $tr.append($td);
    }
    $table.append($tr);
  }
});