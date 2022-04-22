import React, {useState} from 'react'
import {getPokemon} from '../api/pokeApi'


const Trainer = () => {
  const [poke, setPoke] = useState('')

  const clickHandler = () => {
    getPokemon()
      .then(data => {
        setPoke(data)
      }).catch((err) => {
        console.error(err.message)
      })
  }

  //${name}
  return (
    <>
    <h2>Name: </h2>
    <button onClick={clickHandler}>Get your Pokemon! </button>
    {poke && <h3>{poke.name}</h3>}
    {poke && <img src={poke.sprites.front_default}></img>}
    </>
  
  )
}

export default Trainer