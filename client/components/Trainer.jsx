import React, {useState} from 'react'
import {getPokemon} from '../api/pokeApi'

import Pokemon from './Pokemon.jsx'
const Trainer = () => {
  const [pokedata, setPokeData] = useState([])

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
      <h2>Name: </h2>
      <button onClick={clickHandler}>Get your Pokemon! </button>
      <Pokemon pokedata={pokedata}/>
    </div>
  
  )
}

export default Trainer