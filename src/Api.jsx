// api key 6162d543c17d2fe9eed005cbfcb1d995
// url --request GET \--url 'https://api.themoviedb.org/3/search/movie'
// curl --request GET \
    //  --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=6162d543c17d2fe9eed005cbfcb1d995'

    import './Api.css'


import { useState } from "react"

export const Api = () => {
    
    const [inputValue, setInputValue] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '6162d543c17d2fe9eed005cbfcb1d995'
    
    const fetchPeliculas = async () =>{
        try{const response = await fetch(`${urlBase}?query=${inputValue}&api_key=${API_KEY}`)
        const data = await response.json()
        setPeliculas([data.results][0])

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
        fetchPeliculas()
    }

  return (<div className="divContainer">
    <div className='divForm'>
        <form onSubmit={onSubmit}>
            <input 
                className="inputSearch"
                type="text" 
                onChange={handleInputChange}
                value={inputValue}
                />
                <button className='buttonSearch' type='submit'>Buscar Peli</button>
        </form>
    </div>
    
   <div className="container-card" >
    { peliculas.map( (pelicula) => (
        <div  className="movie-card" key={pelicula.id} >
            <img className='img-movie' src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
            <h2>{pelicula.title}</h2>
        </div>
    )) } 
   </div>
    
    </div>
  )
}
