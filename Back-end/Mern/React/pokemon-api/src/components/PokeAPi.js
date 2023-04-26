import React, {useEffect, useState} from 'react';

const PokeApi = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(err => console.log(err) )
    }, [])

    return (
        <>
            <h2>Fetch Pokemon</h2>
            <ul>
                {pokemon.map((pokemon, index) => {
                    return (<li key={index}>{pokemon.name}</li>);
                })}
            </ul>
        </>
    );

}

export default PokeApi;