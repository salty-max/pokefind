var app = {

  init: function() {

    $(document).keypress(function(key) {
      if(key.which === 13 && $('#user-input').is(':focus')) {
        var input = $('#user-input').val().toLowerCase();
        $('#user-input').val("");
        app.checkPokemon(input);
      }
    });

  },

  playSound: function(sound) {

    var soundToPlay = new Audio('sounds/'+ sound +'.wav');
    soundToPlay.volume = 0.2;
    soundToPlay.play();

  },

  gameOver: function() {

    setTimeout(function() {location.reload()}, 5000);
    app.playSound('gameover');
    warning.html('<p>Game Over!</p>');

  },

  showLives: function() {

    var lives = 3;
    var livesCount = $('.lives');
    switch(lives){
      case 3:
        livesCount.empty();
        livesCount.append('<ul>');
        for(var i = 0; i < lives; i++) {
          livesCount.append('<li>&hearts;</li>');
        }
        livesCount.append('</ul>');
        break;

      case 2:
        livesCount.empty();
        livesCount.append('<ul>');
        for(var i = 0; i < lives; i++) {
          livesCount.append('<li>&hearts;</li>');
        }
        livesCount.append('</ul>');
        break;

      case 1:
        livesCount.empty();
        livesCount.append('<ul>');
        for(var i = 0; i < lives; i++) {
          livesCount.append('<li>&hearts;</li>');
        }
        livesCount.append('</ul>');
        break;

      default:
        livesCount.empty();
        break;
    }

  },

  checkPokemon: function(input) {

    var images = $('.imgs');
    var warning = $('.warning');
    var output = $('.count')
    var count = 0;
    var pokeFound = ['marill'];

    for(var j = 0; j < pokeFound.length; j++){

      if(input === pokeFound[j]) {
        console.log('already found');
        warning.html('<p>Déjà trouvé!</p>');
        app.playSound('lose');
        //app.lives--;
        // showLives();
        // if(lives === 0) {
        //   gameOver()
        // }
      }
      else {
        for(var i = 0; i < pokemons.length; i++) {
          // if(input === pokemons[i] && !pokeFound.includes(pokemons[i])) {
          //   warning.html('');
          //   pokeFound.push(input);
          //   console.log(input);
          //   input='';
          //   console.log(pokeFound);
            images.append('<img class="pokemon" src="img/'+ pokemons[i] +'.png" alt="'+ pokemons[i] +'"/>');
        //     app.playSound(pokemons[i]);
        //     count++;
        //     output.html('<p class="text-help">Pokemon trouvés : <em>'+ count +'</em> sur '+ pokemons.length +'</p>');
        //   }
        }
      }
    }
  },
}

$(function() {

  $(app.init);
  // $(app.showLives);

})
