import React from 'react';
import Link from 'next/link';
import { Pokemon } from '@/types';
import { typeColors } from './typeColors'; // Import the typeColors mapping

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <Link href={`/pokemon/${pokemon.id}`}>
            <div className="cursor-pointer bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img className="w-full h-40 object-cover" src={pokemon.image} alt={pokemon.name} />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{pokemon.name}</h2>
                    <p className="text-sm text-gray-600">#{pokemon.number}</p>
                    <div className="flex mt-2">
                        {pokemon.types.map((type, index) => (
                            <span
                                key={index}
                                className={`text-xs bg-${typeColors[type]}-200 text-${typeColors[type]}-800 px-2 py-1 rounded-full mr-2`}
                                style={{ backgroundColor: typeColors[type], color: '#FFFFFF' }} // Override text color for better contrast
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
