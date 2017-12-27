var images = $('.img-container')
var output = $('.count')
var warning = $('.warning')
var livesCount = $('.lives')
var count = 0
var pokeFound = ['marill']
var lives = 3

function gameOver() {
  setTimeout(function() {location.reload()}, 5000)
  var audio = new Audio('sounds/gameover.wav')
  audio.play()
  warning.html('<p>Game Over!</p>')
}

function showLives() {
  switch(lives){
    case 3:
      livesCount.empty()
      livesCount.append('<ul>')
      for(var i = 0; i < lives; i++) {
        livesCount.append('<li>&hearts;</li>')
      }
      livesCount.append('</ul>')
      break;

    case 2:
      livesCount.empty()
      livesCount.append('<ul>')
      for(var i = 0; i < lives; i++) {
        livesCount.append('<li>&hearts;</li>')
      }
      livesCount.append('</ul>')
      break;
      
    case 1:
      livesCount.empty()
      livesCount.append('<ul>')
      for(var i = 0; i < lives; i++) {
        livesCount.append('<li>&hearts;</li>')
      }
      livesCount.append('</ul>')
      break;

    default:
      livesCount.empty()
      break;
  }

}

function checkPokemon(input) {

  for(var j = 0; j < pokeFound.length; j++){
    if(input === pokeFound[j]) {
      console.log('already found')
      warning.html('<p>Déjà trouvé!</p>')
      var audio = new Audio('sounds/lose.wav')
      audio.play()
      lives--;
      console.log(lives)
      showLives()
      if(lives === 0) {
        gameOver()
      }
    }
    else {
      for(var i = 0; i < pokemons.length; i++) {
        if(input === pokemons[i] && !pokeFound.includes(pokemons[i])) {
          warning.html('')
          pokeFound.push(input)
          input=''
          console.log(input)
          console.log(pokeFound)
          images.append('<img class="pokemon" src="img/'+ pokemons[i] +'.png" alt="'+ pokemons[i] +'"/>')
          var audio = new Audio('sounds/'+ pokemons[i] +'.wav')
          audio.play()
          count++
          output.html('<p class="text-help">Pokemon trouvés : <em>'+ count +'</em> sur '+ pokemons.length +'</p>')
        }
      }
    }
  }
}

$(document).ready(function() {
  showLives()
  $(document).keypress(function(key) {
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var input = $('#user-input').val().toLowerCase()
      $('#user-input').val("")
      checkPokemon(input)
    }
  })
})
