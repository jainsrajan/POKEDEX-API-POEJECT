// import Pokedex from './Components/Pokedex/Pokedex.jsx'
import CustomRoutes from './Routes/CustomRoutes.jsx'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='outer-pokedex'>

    <Link to={'/'}>
    <h1 className="pokedex-heading"> Pokedex </h1>
    </Link>
      
    <CustomRoutes/>
    </div>
  )
}

export default App
