$(document).ready(function () {

  var $conteiner = $('.table');
  var $table = $('<table>');
  var $tr;
  var $td;

  $conteiner.append($table);


  for (var y = 0; y < 4; y += 1) {
    $tr = $('<tr>');

    for(var x=0; x<4; x +=1) {
      $td = $('<td>').addClass('cell cover');
      $tr.append($td);
    }
    $table.append($tr);
  }
});