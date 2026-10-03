let pokemonName = null;

function showQuestion(response) {
  pokemonName = response.data.name;
  console.log(response.data.name);
  let pokemon = document.querySelector("#pokemon");
  pokemon.innerHTML = "";
  new Typewriter("#pokemon", {
    strings: response.data.flavor_text_entries[0].flavor_text,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function showAnswer(response) {
  //console.log(response.data.name);
  let answer = document.querySelector("#answer");
  answer.innerHTML = "";
  new Typewriter("#answer", {
    strings: pokemonName,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generatePokemonDescription(event) {
  event.preventDefault();
  let apiUrl = `https://pokeapi.co/api/v2/pokemon-species/pikachu`;
  axios.get(apiUrl).then(showQuestion);
  console.log("called the api");
  let pokemon = document.querySelector("#pokemon");
  pokemon.innerHTML = "Shuffling a pokemon for you.. please wait";
  document.querySelector("#answer").innerHTML = "";
}

let button = document.querySelector("#button");
button.addEventListener("click", generatePokemonDescription);

let button2 = document.querySelector("#button2");
button2.addEventListener("click", showAnswer);

