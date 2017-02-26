$(document).ready(function () {
  var $gameContent = $('#game');
  $gameContent.hide();

  if (!window.location.search.includes('mailerResult')) {
    return;
  }

  window.location.hash = '#game';
  $('#form').hide();
  $gameContent.show();

  var $container = $('.game--board');
  var $table = $('<table>');
  var $tr;
  var $td;
  var points = 0;
  var howManyCorrect = 0;

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

    $container.append('<div class="game--scores" >');
    //button add here
    $('.game--scores').append('<h3>');
    $('.game--scores h3').text('Twój wynik to: ' + points);

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
          $('.game--scores h3').text('Twój wynik to: ' + points);
          console.log('Twój wynik to: ' + points)

          var $uncoveredCards = $('td:not(.game--card__covered)', $table);
          var howManyUncovered = $uncoveredCards.length;

          // console.log('Liczba odkrytych kart to:', howManyUncovered);

          if (howManyUncovered === 2) {
            if ($uncoveredCards.first().attr('data-card') == $uncoveredCards.last().attr('data-card')) {
              $uncoveredCards.addClass('correct');
              howManyCorrect += 2;

              if (howManyCorrect === 16) {
                console.log('Gratulacje! Udało Ci się odkryć wszystkie karty w ' + points + ' ruchach.');

                  $container.append('<div class="congratulations">');
                  $('.congratulations').append('<h2>').hide().fadeIn(1000);
                  $('.congratulations h2').text('Gratulacje! Udało Ci się odkryć wszystkie karty w ' + points + ' ruchach.');
              }
            }

            else {
              $uncoveredCards.addClass('game--card__covered')
            }

            $uncoveredCards.addClass('game--card__covered')
          }

          $(this).removeClass('game--card__covered');
        });
    }
});
