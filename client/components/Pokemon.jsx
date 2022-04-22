import React from 'react'

const Pokemon = ({ pokedata}) => {
  return (
    <div className="pokemon-card">
    <img src={pokedata.sprites.front_default} />
      <h3>{pokedata.name}</h3>
      <ul>
        <li>Type: {pokedata.types[0].type.name}</li>
        <li>PokeIndex: {pokedata.id}</li>
        <li>Abilities: {pokedata.abilities[0].ability.name}</li>
        <li>Weight: {pokedata.weight}lbs</li>
      </ul>
    </div>
  )
}

export default Pokemon
