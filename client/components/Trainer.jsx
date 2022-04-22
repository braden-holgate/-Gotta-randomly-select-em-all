import React, { useState } from 'react'
import { getPokemon } from '../api/pokeApi'

import Pokemon from './Pokemon.jsx'
const Trainer = () => {
  const [pokedata, setPokeData] = useState([])
  const [trainerData, setTrainerData] = useState([])
  const params = useParams().id
  const numberData = Number(params)

  const getData = () => {
    getTrainers()
      .then((data) => setTrainerData(data[numberData - 1]))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => getData(), [])
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
      <h2>{trainerData.name} </h2>
      <p>Type: {trainerData.pokemon_type}</p>
      <p>Home gym: {trainerData.home_gym}</p>
      <p>{trainerData.bio}</p>
      <button onClick={clickHandler}>Get your Pokemon! </button>
      {pokedata.map((pokemon, i) => {
        return <Pokemon key={i} pokedata={pokemon} />
      })}
    </div>
  )
}

export default Trainer
