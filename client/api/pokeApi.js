import request from 'superagent'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' //${id}

//https://pokeapi.co/api/v2/pokemon/  -> this lets us tag on either the pokemon name or an id on the end

const getNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getPokemon() {
  const id = getNumber(1, 151)
  return request
    .get(pokemonUrl + id)
    .then((resp) => {
      return resp.body
    })
    .catch((err) => {
      console.log(err.message)
    })
}
