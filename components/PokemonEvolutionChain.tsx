// ../../components/PokemonEvolutionChain.tsx

import React from 'react';
import { Pokemon } from '@/types';
import {typeColors} from "@/components/typeColors";

interface PokemonEvolutionChainProps {
    pokemonChain: Pokemon[];
}

const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({ pokemonChain }) => {
    return (
        <div className="flex items-center overflow-x-auto">
            {pokemonChain.map((pokemon, index) => (
                <React.Fragment key={pokemon.id}>
                    <div className="flex flex-col items-center mr-4">
                        <img className="w-24 h-24 object-contain" src={pokemon.image} alt={pokemon.name} />
                        <p className="text-lg font-bold">{pokemon.name}</p>
                        <p className="text-sm text-gray-500">#{pokemon.number}</p>
                        <div className="flex">
                            {pokemon.types.map((type) => (
                                <span key={type} className={`text - xs px-2 py-1 rounded-full mr-1 bg-${typeColors[type]}-500 text-white`}>
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                    {index < pokemonChain.length - 1 && (
                        <span className="text-gray-500 mx-2">{'>'}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PokemonEvolutionChain;
