import './ApiPelis.css'


export const ApiPelis = ({peliculas,busqueda}) => {
  return (<>
    <div style={{textAlign:'start',marginLeft:'10px',color:'white'}}>

        {busqueda?<h2>Los resultados de tu busqueda: 🕵️‍♀️{busqueda}</h2>:''}
    </div>
   <div className="container-card" >
    
        { peliculas.map( (pelicula) => (
        <div  className="movie-card" key={pelicula.id}>
                <img className='img-movie' src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
                <div style={{display:'flex', flex:'50%'}}>
                    <div className="botonPeli" ><b>(i)</b></div>
                    <div className="botonPeli" >Reseña</div>
                </div>
        </div>
    )) } 
   </div>
   
  </>  
  )
}
