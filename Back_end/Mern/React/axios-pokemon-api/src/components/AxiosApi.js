import axios from 'axios';
import React, {useEffect, useState} from 'react';

const AxiosApi = () =>{

    const [pokemon, setPokemon] = useState([]);
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=>{setPokemon(response.data.results)
            .catch(err=> console.log(err));
            }, []);
    })
    return (
        <div>
            <h2>Fetch Pokemon</h2>
            <ul>
            {pokemon.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>
            })}
            </ul>
        </div>
    )
}

export default AxiosApi;