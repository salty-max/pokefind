var app = {

  pokeFound: ['marill'],
  count: 0,
  thumbs: $('.imgs'),
  lives: 3,
  livesCount: $('.lives'),
  lost: false,
  timeLimit: 180,
  currentSound: new Audio(),
  $clock: $('.timer'),

  init: function() {

    $(document).keypress(function(key) {
      if(key.which === 13 && $('#user-input').is(':focus')) {
        var input = $('#user-input').val().toLowerCase();
        $('#user-input').val('');
        app.checkPokemon(input);
      }
    });

  },

  checkPokemon: function(input) {

    for(var j = 0; j < app.pokeFound.length; j++){

      if(input === app.pokeFound[j]) {
        console.log('already found');
        app.warning('<p>Déjà trouvé!</p>');
        app.playSound('lose');
        app.loseLife();
      }
      else {
        for(var i = 0; i < pokemons.length; i++) {
          if(input === pokemons[i] && !app.pokeFound.includes(pokemons[i])) {
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

  playSound: function(sound) {

    var soundToPlay = new Audio('sounds/'+ sound +'.wav');
    soundToPlay.volume = 0.2;
    soundToPlay.play();
    app.currentSound = soundToPlay;
  },

  stopSound: function(sound) {
    sound.pause();
  },

  gameOver: function() {

    setTimeout(function() {location.reload();}, 5000);
    app.playSound('gameover');
    app.livesCount.css('display', 'none');
    app.$clock.css('display', 'none');
    app.warning('<p>Game Over!</p>');

  },

  loseLife: function() {
    app.lost = true;
    app.lives--;
    app.livesManager();
    console.log(app.lives);

    if(app.lives === 0) {
      app.gameOver();
    }
    return app.lost;
  },

  livesManager: function() {
    app.livesCount.html('Lives: ' + app.lives);
  },

  timer: function() {
    var countdown = 0;
    var timer = setInterval(function() {
      app.$clock.text('Time: ' + Math.floor((app.timeLimit - countdown) / 60) + 'm ' + ((app.timeLimit - countdown) % 60 ) +'s');
      countdown++;

      if (countdown > (app.timeLimit - 10)) {
        app.$clock.css('color', '#e74c3c');
        app.playSound('timer');
      }

      if (app.timeLimit < countdown) {
        app.stopSound(app.currentSound);
        app.gameOver();
        window.clearInterval(timer);
      }
    }, 1000);
  },

  warning: function(content) {
    $('#warning').html(content);
  },

  output: function(count, length) {
    $('.count').html('<p class="text-info">Pokemon trouvés : <span class="text-help">'+ count +'</span> sur '+ length +'</p>');

  },

  addToArray: function(arr, element) {
    arr.push(element);
  }

};

$(function() {

  $(app.init);
  $(app.livesManager);
  $(app.timer);
});
