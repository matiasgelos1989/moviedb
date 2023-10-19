import React from 'react';
import { useState, useEffect } from 'react';
import {ProductosBackEnd} from '../components/ProductosBackEnd'

export const ApiBackEnd = () => {

    
const [inputPrice, setiInputPrice] = useState('');
const [inputName, setInputName] = useState('');
const [inputDescription, setInputDescription] = useState('');
const [fetchInfo,setFetchInfo] = useState([]);


useEffect(() => {
  fetchObjects(fetchInfo)
}, [fetchInfo])



const handleInputNameChange = (e) =>{
    setInputName(e.target.value)
}

const handleInputPriceChange = (e) =>{
    setiInputPrice(e.target.value)
}

const handleInputDescriptionChange = (e) =>{
    setInputDescription(e.target.value)
}
const onSubmit = async (e) =>{
 
    e.preventDefault();
    setFetchInfo({name: inputName, price: inputPrice, description: inputDescription});
    
  }
  
  const fetchObjects = (fetchInfo)=>{
    
  try{fetch('http://localhost:3000/api/products', {
            method: 'Post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchInfo)
  
          }).then(x=> console.log("hola"))
  
      }catch(error){
          console.log(error)
      }
}

  return (<div style={{marginTop:'100px', color:'white'}}>
    <form onSubmit={onSubmit}>
        Name <br />
        <input 
          style={{width:'300px'}}
          required
          type='text' 
          onChange={handleInputNameChange}
          value={inputName}
          placeholder='introduce el nombre del producto' /> <br />  
        precio <br />
        <input 
          style={{width:'300px'}}
          required
          type="text" 
          onChange={handleInputPriceChange}
          value={inputPrice}
          placeholder='introduce precio del producto'/> <br />
        descripción <br />
        <input 
          style={{width:'300px'}}
          required
          type="text" 
          onChange={handleInputDescriptionChange}
          value={inputDescription}
          placeholder='introduce una descripción'/>
        <button type='submit'>Enviar información</button>
    </form>

    <div style={{backgroundColor:'white'}}>
        Aqui mostraremos los productos
        <ProductosBackEnd></ProductosBackEnd>
    </div>

    </div>
  )
}