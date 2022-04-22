import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { getTrainers } from '../api/trainerApi';

//Internal API -> To get all trainers: 



//name
//pokemontype

const Home = () => {
  const params = useParams();

  return (
    <div className='main-div'>
      <h1 className='title'>Pokemon collector extravaganza</h1>
      <h2>Gotta randomly select em all</h2>
      {/* trainers map trainer:
      image(pokeball)
      Link to trainer + id */}
    </div>
  )
}

export default Home
