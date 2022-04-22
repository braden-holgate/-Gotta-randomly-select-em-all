import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { getTrainers } from '../api/trainerApi';

//Internal API -> To get all trainers: 

//name
//pokemontype

const Home = () => {
  const navigate = useNavigate()
  const [trainerId, setTrainerId] = useState(null)

  const [trainerData, setTrainerData] = useState([])

  const getData = () => {
    getTrainers()
    .then(data => setTrainerData(data))
  .catch(err => console.log(err.message))}

  useEffect((() => getData()), [])

  const handleClick = (e) => {
    setTrainerId(e.target.id)
    console.log(e.target.id);
    navigate(`/trainer/${e.target.id}`)
  }

  return (
    <div className='home'>
      <div className='title-container'>
        <div className='title'>
          <h1>Pokemon</h1>
          <h1>collector</h1>
          <h1>extravaganza</h1>
        </div>
        <h2 className='subtitle'>Gotta randomly select em all</h2>
      </div>
      {trainerData.map((trainer) => {
      return <div className={trainer.name} key={trainer.id} onClick={handleClick} id={trainer.id}>
        <p>{trainer.name}</p>
        <p>Type: {trainer.pokemon_type}</p>
        </div>
      })}
    </div>
  )
}

export default Home
