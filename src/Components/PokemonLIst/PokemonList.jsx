import { useEffect, useState } from "react";
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";


function PokemonList(){
    const [pokemonList , setPokemonList] = useState([])
    const[isloading , setLoading] = useState(true)
    const [PokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const[prevurl , setPrevUrl] = useState('')
    const[nexturl , setNextUrl] = useState('')
      useEffect(()=>{
        
        async function downloadPokemon(){
        setLoading(true)
    
        const response = await axios.get(PokedexUrl)
        //  console.log(response)

         setNextUrl(response.data.next)
         setPrevUrl(response.data.previous)

        const pokemonResults = response.data.results //Storing the Pokemon detail(name and URL) in pokemonresults...
        // console.log(pokemonResults)

    const pokemonResultPromise =  pokemonResults.map((pokemon)=>axios.get(pokemon.url))// We will get all the promises....
    const pokemonData = await  axios.all(pokemonResultPromise)//Promises is being resolved here....
    
     console.log(pokemonData)


    //Iterating over each pokemon data and extract id,name,image,types..... 
    const res = pokemonData.map((pokeData)=>{
    const pokemon = pokeData.data

    return{
        id:pokemon.id,
        name:pokemon.name,
        image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
        types:pokemon.types
    }
})
        setPokemonList(res)
        setLoading(false)

        }

        downloadPokemon()
        
    },[PokedexUrl]) 


    return (
        <div  className="pokemon-list-wrapper">
        
        <div>Pokemon List</div>
        
<div>
    <div className="pokemon-wrapper">

    {(isloading)? "Loading....." : 
            
            pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
         }
    </div>


    <div className="buttons">
        <button className = "prev-button" disabled={prevurl==null} onClick={()=>setPokedexUrl(prevurl)}> <span>Prev</span></button>
        <button className = "next-button" disabled={nexturl==null} onClick={()=>setPokedexUrl(nexturl)}> <span>Next</span></button>
    </div>

</div>
       
        </div>

    )
}

    export default PokemonList