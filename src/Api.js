import React from 'react'
import {Home} from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { PokeApi } from './pages/PokeApi'
import { Buscador } from './pages/Buscador'
import {ApiBackEnd} from './pages/ApiBackEnd'
import './Api.css'

export const Api = () => {
  return (<div className='divGeneral'>
        <Home></Home>
      
        
|       <Routes>
            <Route path='/Buscador' element={<Buscador></Buscador>}></Route>
            <Route path='/PokeApi' element={<PokeApi></PokeApi>}></Route>
            <Route path='/ApiBackEnd' element={<ApiBackEnd></ApiBackEnd>}></Route>
        </Routes>
  </div>
  )
}