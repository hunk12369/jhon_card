import { useState } from 'react'
import PeliculaCartel from './pages/PeliculaCartel'
import Home from './pages/Home'
function App() {
  const [data, setData] = useState(null);
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=47df33b1');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error de tu api pe:', error);
      }
    };
    fetchData();
  }, []);  */
  
  return (
    <div className="App">
      <Home/>
    </div>
    
  )
}

export default App
