var images = $('.img-container')
var output = $('.count')
var warning = $('.warning')
var count = 0
var pokeFound = ['marill']

function scrollDown() {
		var gameText = $(".game-text");
		gameText.scrollTop = gameText.scrollHeight;
	}

function checkPokemon(input) {
  for(var j = 0; j < pokeFound.length; j++){
    if(input === pokeFound[j]) {
      console.log('already found')
      warning.html('<p>Déjà trouvé!</p>')
    }
    else {
      for(var i = 0; i < pokemons.length; i++) {
        if(input === pokemons[i] && !pokeFound.includes(pokemons[i])) {
          warning.html('')
          pokeFound.push(input)
          input=''
          console.log(input)
          console.log(pokeFound)
          images.append('<img class="pokemon" src="img/'+ pokemons[i] +'.png" />')
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
  $(document).keypress(function(key) {
    if(key.which === 13 && $('#user-input').is(':focus')) {
      var input = $('#user-input').val().toLowerCase()
      $('#user-input').val("")
      checkPokemon(input)
    }
  })
})
