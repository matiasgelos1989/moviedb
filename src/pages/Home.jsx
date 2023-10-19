import { Link } from 'react-router-dom';
import { FiVideo } from "react-icons/fi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";


export const Home = () => {
    

return (<div className='divHome'>
     
      <div style={{color:'white',display:'block',width:'50px'}}>
            <Link to='/Buscador' ><FiVideo style={{fontSize:'35px'}}/>Pelis</Link>
            
      </div>

      <div style={{color:'white',display:'block',width:'60px',textAlign:'center'}}>
            <Link to='/PokeApi' ><AiOutlineAppstoreAdd style={{fontSize:'35px'}}/>PokeApi  </Link>
            
      </div>

      <div>
            <Link to='/ApiBackEnd'> BackEnd </Link>
      </div>
      
      
      
</div>
  

)
}