import React from 'react'
import {Gender} from './Gender'
import movie from "../assets/peliculas.json"
import "./MovieMain.css"
export const MovieMain = (props) => {
  const {peliculaDatos}= props;
  const texoGenero=peliculaDatos.Genre;
  const arrayGenero=texoGenero.split(',');
  return (
    <div className='movie-main-container'>
        
        {console.log(peliculaDatos)}
        <img src={peliculaDatos.Poster} alt="imagen-poster" />
        {}
        {console.log(peliculaDatos.Genre)}
        {console.log(arrayGenero)}
        <Gender movieGeneros={arrayGenero}/>
        <span>
            {
                peliculaDatos.Plot
            }
        </span>
    </div>
  )
}
