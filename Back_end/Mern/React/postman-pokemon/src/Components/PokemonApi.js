import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PokemonApi = () => {
    const {numberOrName} = useParams();
    const lowerCase = numberOrName.toString().toLowerCase();
    const [pokemonName, setPokemonName] = useState([]);
    useEffect(() => {
        fetch("http://pokeapi.co/api/v2/pokemon/"+lowerCase)
            .then(response => response.json())
            .then(response => setPokemonName(response.name))
            .catch(err => console.log(err));
    })

    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    useEffect(()=> {
        fetch("http://pokeapi.co/api/v2/pokemon/"+lowerCase)
            .then(response => response.json())
            .then(response => setPokemonAbilities(response.abilities))
            .catch(err => console.log(err) )
    }, [])

    const [pokemonApiResults, setPokemonApiResults] = useState();
    useEffect(()=> {
        fetch("http://pokeapi.co/api/v2/pokemon/"+lowerCase)
            .then(response => response.json())
            .then(response => setPokemonApiResults(response))
            .catch(err => console.log(err) )
    }, [])
    console.log(pokemonApiResults);

    const capitalizeFirstLetter = (word) => {
        return word.toString().charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className="card">
            <h1>{capitalizeFirstLetter(pokemonName)}</h1>
            <h4>Abilities</h4>
            <ul>                    
                {
                    pokemonAbilities.map((abilities, index) => {
                        return (
            
                            <li key={index}>{capitalizeFirstLetter(abilities.ability.name)}</li>
                            
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default PokemonApi;