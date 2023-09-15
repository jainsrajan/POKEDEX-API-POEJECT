import PokemonList from "../PokemonLIst/PokemonList"
import Search from "../Search/Search"
import './Pokedex.css'

function Pokedex()

{
    return(

        <div>
        <h1 className="pokedex-wrapper"> Pokedex </h1>
    
        <Search/>
    <PokemonList/>
        

        </div>
        )

}

export default Pokedex;