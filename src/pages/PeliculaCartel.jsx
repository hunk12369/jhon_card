import React, { useEffect, useState } from 'react';

import {TopCastContainer} from '../components/TopCastContainer'
import { Chip } from '../components/Chip'
import { MovieMain } from '../components/MovieMain'
import BookingButton from '../components/BookingButton'

const PeliculaCartel = () => {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=47df33b1')
        .then(response => response.json())
        .then(data => {
            // Guarda los datos de la API en el estado
            setApiData(data);
        })
        .catch(error => {
            // Maneja errores de la solicitud
            console.error('Error:', error);
        });
    }, []);
  
    return (
    <div>
      {apiData && <MovieMain peliculaDatos={apiData}/>}
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default PeliculaCartel