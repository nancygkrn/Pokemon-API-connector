function showAnswer(response) {
  console.log(response.data.flavor_text_entries[0].flavor_text);
  let pokemon = document.querySelector("#pokemon");
  pokemon.innerHTML = "Generating a joke for you.. please wait";
  new Typewriter("#pokemon", {
    strings: response.data.flavor_text_entries[0].flavor_text,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generatePokemonDescription(event) {
  event.preventDefault();
  let apiUrl = `https://pokeapi.co/api/v2/pokemon-species/pikachu`;
  axios.get(apiUrl).then(showAnswer);
  console.log("called the api");
  let pokemon = document.querySelector("#pokemon");
  pokemon.innerHTML = "Shuffling a pokemon for you.. please wait";
}

let button = document.querySelector("#button");
button.addEventListener("click", generatePokemonDescription);
