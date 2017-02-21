$(document).ready(function () {

  var $container = $('.game--board');
  var $table = $('<table>');
  var $tr;
  var $td;

  $container.append($table).addClass('game--board');


  for (var y = 0; y < 4; y += 1) {
    $tr = $('<tr>');

    for(var x = 0; x < 4; x += 1) {
      $td = $('<td>').addClass('game--card')
        .on('click', function () {
          $(this).addClass('game--card__flipped');
        });
      $tr.append($td);
    }
    $table.append($tr);
  }
});