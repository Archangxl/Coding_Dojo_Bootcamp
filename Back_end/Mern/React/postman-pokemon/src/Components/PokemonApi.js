import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PokemonApi = () => {

    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const {numberOrName} = useParams();

    useEffect(()=> {
        fetch("http://pokeapi.co/api/v2/pokemon/"+numberOrName)
            .then(response => response.json())
            .then(response => setPokemonAbilities(response.abilities))
            .catch(err => console.log(err) )
    }, [])

    useEffect(() => {
        fetch("http://pokeapi.co/api/v2/pokemon/"+numberOrName)
            .then(response => response.json())
            .then(response => setPokemonName(response.name))
            .catch(err => console.log(err));
    })

    return (
        <div>
            
            <ul>
                {
                pokemonAbilities.map((ability, index) => {
                return (
                    
                    <li key={index} >{ability.name}</li>
                    
                );
                }}
            </ul>

        </div>
    );
}

export default PokemonApi;