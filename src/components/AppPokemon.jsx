import React from 'react'
import './AppPokemon.css'

export const AppPokemon = ({array, busquedaActual}) => {


  if(busquedaActual.length !== 0 ) console.log(busquedaActual.sprites.other)

return (<div >

  <h1>Ultimas Busquedas</h1> 
  
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {array.map( (pokemon)=> (<div  key={pokemon.name} className='ultimasBusquedas'>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt="" />



            </div>))}
        </div>
          {busquedaActual.length !== 0  ?
        <div>
            <img src={busquedaActual.sprites.other.dream_world.front_default} alt="" />
            <h3>{busquedaActual.name}</h3>
        </div>
          :[]}
  </div>
  )
}