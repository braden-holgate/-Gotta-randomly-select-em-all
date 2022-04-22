import React, { useState } from 'react'
import { getPokemon } from '../api/pokeApi'

import Pokemon from './Pokemon.jsx'
const Trainer = () => {
  const [pokedata, setPokeData] = useState([])

  const clickHandler = () => {
    getPokemon()
      .then((data) => {
        console.log(data)
        if (pokedata.length > 6) {
          pokedata.pop()
          setPokeData([data, ...pokedata])
        } else {
          setPokeData([...pokedata, data])
        }
        console.log(pokedata)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Name: </h2>
      <button onClick={clickHandler}>Get your Pokemon! </button>
      {pokedata.map((pokemon, i) => {
        return <Pokemon key={i} pokedata={pokemon} />
      })}
    </div>
  )
}

export default Trainer
