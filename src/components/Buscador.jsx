import React from 'react'
import './Buscador.css'
import { Icon } from '@iconify/react';

const Buscador = () => {
  return (
    <div>
        <Icon className='icono' icon="clarity:search-line"  onClick={() => {
          console.log("BUSCANDO")
        }}/>

        <input className='hola' type="text" placeholder='Search Movie'/>
    </div>
  )
}

export default Buscador