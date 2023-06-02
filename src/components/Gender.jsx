import React from 'react'
import { Chip } from './Chip'
import "./Gender.css"
export const Gender = (props) => {
  const {movieGeneros} = props;
  return (
    <div className='gender-container'>
        {movieGeneros.map(item => (
            <Chip genero = {item} />
        ))}
    </div>
  )
}
