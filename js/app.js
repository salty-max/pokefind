var app = {

  pokeFound: ['marill'],
  count: 0,
  thumbs: $('.imgs'),

  init: function() {

    $(document).keypress(function(key) {
      if(key.which === 13 && $('#user-input').is(':focus')) {
        var input = $('#user-input').val().toLowerCase();
        $('#user-input').val('');
        app.checkPokemon(input);
      }
    });

  },

  playSound: function(sound) {

    var soundToPlay = new Audio('sounds/'+ sound +'.wav');
    soundToPlay.volume = 0.2;
    soundToPlay.play();

  },

  // gameOver: function() {
  //
  //   setTimeout(function() {location.reload()}, 5000);
  //   app.playSound('gameover');
  //   warning.html('<p>Game Over!</p>');
  //
  // },

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
      for(var j = 0; j < lives; j++) {
        livesCount.append('<li>&hearts;</li>');
      }
      livesCount.append('</ul>');
      break;

    case 1:
      livesCount.empty();
      livesCount.append('<ul>');
      for(var k = 0; k < lives; k++) {
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

    for(var j = 0; j < app.pokeFound.length; j++){

      if(app.pokeFound.includes(input)) {

        console.log('already found');
        app.warning('<p>Déjà trouvé!</p>');
        app.playSound('lose');
        //app.lives--;
        // showLives();
        // if(lives === 0) {
        //   gameOver()
        // }
      }

      else {

        for(var i = 0; i < pokemons.length; i++) {

          if(input === pokemons[i] && !app.pokeFound.includes(input)) {

            app.warning('');
            app.addToArray(app.pokeFound, pokemons[i]);
            console.log(input);
            input='';
            console.log(app.pokeFound);
            app.thumbs.append('<img class="pokemon" src="img/'+ pokemons[i] +'.png" alt="'+ pokemons[i] +'"/>');
            app.playSound(pokemons[i]);
            app.count++;
            app.output(app.count, pokemons.length);

          }
        }
      }
    }
  },

  warning: function(text) {
    $('.warning').html(text);
  },

  output: function(count, length) {
    $('.count').html('<p class="text-help">Pokemon trouvés : <em>'+ count +'</em> sur '+ length +'</p>');

  },

  addToArray: function(arr, element) {
    arr.push(element);
  }
};

$(function() {

  $(app.init);
  // $(app.showLives);
});
