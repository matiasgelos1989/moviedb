import React from 'react'
const urlBase = 'http://localhost:3000/api/products' 


export const ProductosBackEnd = () => {
    const FetchProductos =  async () =>{
        try{const response = await fetch(`${urlBase}`)
        const data = await response.json()
        
  
        console.log(data)
  
        
    }catch (error) {
        console.error('Ha ocurrido un error ', error)
    }
    }


  return (
    <div>ProductosBackEnd

    <button onClick={FetchProductos}>Productos</button>



    </div>
  )
}
