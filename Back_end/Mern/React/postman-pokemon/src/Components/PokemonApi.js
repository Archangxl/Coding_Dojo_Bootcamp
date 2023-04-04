import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PokemonApi = () => {

    const [pokemon, setPokemon] = useState([]);
    const {numberOrName} = useParams();
    const url = "https://pokeapi.co/api/v2/pokemon/"+ numberOrName;
    console.log(url);
    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(err => console.log(err) )
    }, [])
    console.log(pokemon);
    return (
        <>
            {pokemon}
        </>
    );

}

export default PokemonApi;