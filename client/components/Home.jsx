import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { getTrainers } from '../api/trainerApi';

//Internal API -> To get all trainers: 

//name
//pokemontype

const Home = () => {
  const navigate = useNavigate()
  const [trainerId, setTrainerId] = useState(null)
  const [isVisible, setIsVisible] = useState(null)

  const [trainerData, setTrainerData] = useState([])

  const getData = () => {
    getTrainers()
    .then(data => setTrainerData(data))
  .catch(err => console.log(err.message))}

  useEffect((() => getData()), [])

  const handleClick = (e) => {
    setTrainerId(e.target.id)
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
        if (isVisible === trainer.id) {
          return <div className={trainer.name + '-visible'} key={trainer.id} onClick={handleClick} id={trainer.id} onMouseLeave={() => setIsVisible(null)}>
          <p>{trainer.name}</p>
          <p>Type: {trainer.pokemon_type}</p>
          </div>
        } else {
          return <div className={trainer.name + '-hidden'} onMouseEnter={() => setIsVisible(trainer.id)}></div>
        }
      
      })}
    </div>
  )
}

export default Home
