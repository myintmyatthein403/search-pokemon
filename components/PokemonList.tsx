import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from "@/components/SearchBar";
import { Pokemon } from '@/types';

interface PokemonListProps {
    pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (query: string) => {
        setSearchQuery(query.trim());
    };

    return (
        <div className='w-fit mx-auto bg-gray-900 text-white shadow-md rounded-lg overflow-hidden'>
            <div className="mt-4 mb-4">
                <SearchBar onSearch={handleSearch} showSuggestions={false} suggestions={[]} />
            </div>
            {filteredPokemons.length === 0 ? (
                <div className="text-center mt-4">
                    <p className="text-gray-500">Oops! Try again. The Pokémon you're looking for is a unicorn. It doesn't exist in this list.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filteredPokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PokemonList;
