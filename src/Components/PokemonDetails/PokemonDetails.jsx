import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react";
import './PokemonDetails.css'

function PokemonDetails()
{
    const[pokemon , setPokemon] = useState({});

         const {id} = useParams()

        //  console.log(id)

         useEffect(()=>{
async function downloadPokemon(){
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(response.data)
    
    setPokemon({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weight:response.data.weight,
        height:response.data.height,
        // types:response.data.types.map((t)=>t.type.name)
    })
}

downloadPokemon()
         },[])


         return (
            <div className="pokemon-details-wrapperrr">

                <img  className="pokemon-imagee" src={pokemon.image}/>
                <div className="pokemon-nextpage-name">Name: <span>{pokemon.name}</span></div>
                <div className="pokemon-nextpage-name"> Height: <span>{pokemon.height}</span>  </div>
                <div className="pokemon-nextpage-name"> Weight: <span>{pokemon.weight}</span>  </div>
                {/* <div className="pokemon-details-types">{pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}</div> */}

            </div>
         )
}

export  default PokemonDetails