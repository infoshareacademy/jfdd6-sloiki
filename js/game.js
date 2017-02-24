$(document).ready(function () {

  var $container = $('.game--board');
  var $table = $('<table>');
  var $tr;
  var $td;
  var points = 0; //TODO dodać miejsce, w którym wyświetlany będzie licznik puntków

  var cards = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // We create board
  $container.append($table).addClass('game--board');

  // We create empty fields
  for (var y = 0; y < 4; y += 1) {
    $tr = $('<tr>');

    for(var x = 0; x < 4; x += 1) {
      $td = $('<td>');
      $tr.append($td);
    }
    $table.append($tr);
  }

  // We put cards on fields
  cards.forEach(function(cardName) {
    putCard(cardName, $table);
    putCard(cardName, $table);
  });

  // It puts card on empty field on $table
  function putCard(cardName, $table) {
    var $emptyFields = $('td:not(.game--card)', $table);
    var howManyEmptyFields = $emptyFields.length;

    $emptyFields
      .eq(Math.floor(Math.random() * howManyEmptyFields))
      .addClass('game--card')
      .addClass('game--card__covered')
      .addClass(cardName)
      .attr('data-card', cardName)
      .on('click', function () {
        points += 1;
        var $uncoveredCards = $('td:not(.game--card__covered)', $table);
        var howManyUncovered = $uncoveredCards.length;

        console.log('Liczba odkrytych kart to:', howManyUncovered);

        if (howManyUncovered === 2) {
          if ($uncoveredCards.first().attr('data-card') == $uncoveredCards.last().attr('data-card')) {
            $uncoveredCards.addClass('correct')
          }
          else {
            $uncoveredCards.addClass('game--card__covered')
          }

          $uncoveredCards.addClass('game--card__covered')
        }

        $(this).removeClass('game--card__covered');
      });
  }


  //funkcja end game - resetuje zmienne, wyczyści karty, listenery

  // przycisk podpięty pod funkcję


  //licznik kliknięć w td?

//button nowa gra / restart


});