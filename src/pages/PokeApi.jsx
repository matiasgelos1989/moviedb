import { useState } from "react";
import { AppPokemon } from "../components/AppPokemon";




export const PokeApi = () => {
const URLbase = 'https://pokeapi.co/api/v2/pokemon/'
const [pokemonBuscadoInput,setPokemonBuscadoInput] = useState('') 
const pokemonBuscado = `${pokemonBuscadoInput}`.toLowerCase();
const [fetchArray,setFetchArray] = useState([])
const [busquedaActual,setBusquedaActual] = useState([])
const handleInputChange = (e) =>{
  setPokemonBuscadoInput(e.target.value)
}

const Fetch = async () => {
  try{const response = await fetch(`${URLbase}${pokemonBuscado}`)
   const data = await response.json()
   setFetchArray([...fetchArray,data])
   setBusquedaActual(data)
   console.log(data)
  // console.log('El nombre del pokemon es: ' + data.name)
  // console.log('la imagen del pokemon es: ' + data)
  // console.log(data.sprites.other.dream_world.front_default)
} catch (error) { console.log(`ha ocurrido un error ${error}`)}
}

const onSubmit = (e) =>{
    e.preventDefault()
    Fetch()
}


  return (<div className="divContainer">
  <div className='divForm'>
      
      <form onSubmit={onSubmit}>
          <input 
              className="inputSearch"
              type="text" 
              onChange={handleInputChange}
              value={pokemonBuscadoInput}
              placeholder='Ingresar pelicula...'
              />
              <button onSubmit={onSubmit} className='buttonSearch' type='submit'>Buscar Poke</button>
      </form>
  </div>
    
    <AppPokemon array={fetchArray} busquedaActual={busquedaActual}></AppPokemon>
    </div>)
}