import { ApiPelis } from '../components/ApiPelis';
import { useState } from 'react';


export const Buscador = () => {
    
    const [inputValue, setInputValue] = useState('')
    const [peliculas, setPeliculas] = useState([])
    const [busqueda,setBusqueda] = useState('')
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '6162d543c17d2fe9eed005cbfcb1d995'
    
    const fetchPeliculas = async () =>{
        try{const response = await fetch(`${urlBase}?query=${inputValue}&api_key=${API_KEY}`)
        const data = await response.json()
        setPeliculas(data.results)
  
        console.log(data.results)
  
        
    }catch (error) {
        console.error('Ha ocurrido un error ', error)
    }
   
    }
  
    const handleInputChange = (e)=> {
        setInputValue(e.target.value)  
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
        setBusqueda(inputValue)
        fetchPeliculas()
    }
  
  return (<div className="divContainer">
    <div className='divForm'>
        {/* <p>Login: {props.suario}</p> */}
        <form onSubmit={onSubmit}>
            <input 
                className="inputSearch"
                type="text" 
                onChange={handleInputChange}
                value={inputValue}
                placeholder='Ingresar pelicula...'
                />
                <button className='buttonSearch' type='submit'>Buscar Peli</button>
        </form>
    </div>
    
    <ApiPelis busqueda={busqueda} peliculas={peliculas}></ApiPelis>
    </div>
  )
  }