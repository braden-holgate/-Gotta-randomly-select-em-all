import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getPokemon } from '../api/pokeApi'

import { getTrainers } from '../api/trainerApi';

import Pokemon from './Pokemon.jsx'
const Trainer = () => {
  const [pokedata, setPokeData] = useState([])
  const [trainerData, setTrainerData] = useState([])
  const params = useParams().id
  const numberData = Number(params)
 
  const getData = () => {
    getTrainers()
    .then(data => setTrainerData(data[numberData -1]))
  .catch(err => console.log(err.message))}

 

  useEffect((() => getData()), [])
  const clickHandler = () => {
    getPokemon()
      .then(data => {
        // //TODO
        // if (pokedata.length > 5) {
          //setPokedata[pokedata[0]=data] 
          //check array method to replace first pos and shift others up
        
          // } else {
          //setPokeData([...pokedata,data])
  //       }
  //       console.log(data);
  //       setPokeData([...pokedata, data])
  //       console.log(pokedata);
  //     }).catch((err) => {
  //       console.error(err.message)
  //     })
  // }
      }).catch((err) => {
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
      <Pokemon pokedata={pokedata}/>
    </div>
  
  )
}

export default Trainer