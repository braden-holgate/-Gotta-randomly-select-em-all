import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Trainer from './Trainer'

import Home from './Home'

const App = () => {

  return (
    <>
    <Trainer />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/trainer/:id" element={<Trainer />}></Route>
      </Routes>
    </>
  
  )
}

export default App
