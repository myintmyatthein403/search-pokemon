import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_POKEMON_DETAILS } from '@/graphql/queries';
import { Pokemon } from '@/types';
import PokemonHeader from '@/components/PokemonHeader';
import PokemonImage from '@/components/PokemonImage';
import { typeColors } from '@/components/typeColors';
import PokemonEvolutionChain from '@/components/PokemonEvolutionChain';
import AttacksSection from '@/components/AttacksSection';
import Loading from "@/components/Loading";

const PokemonDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(FETCH_POKEMON_DETAILS, {
        variables: { id },
    });

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.pokemon) return <p>Oops! Try again. The Pokémon you're looking for is a unicorn. It doesn't exist in this list.</p>;

    const pokemon: Pokemon = data.pokemon;
    const evolutionChain: Pokemon[] = [pokemon, ...(pokemon.evolutions ?? [])];

    return (
        <div className="w-fit mx-auto bg-gray-900 text-white shadow-md rounded-lg overflow-hidden">
            <PokemonHeader
                number={pokemon.number.toString()}
                name={pokemon.name}
                types={pokemon.types}
                onClickBack={() => router.back()}
            />
            <div>
                <PokemonImage src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="w-[90%] p-3 mx-auto">
                {/* Breeding Section */}
                <div className="bg-gray-800 px-4 py-2 mb-4">
                    <h2 className="text-lg font-bold mb-2">Breeding</h2>
                    <div className="flex justify-between">
                        <div>
                            <p>
                                <strong>Height:</strong> {pokemon.height?.minimum ?? 'N/A'} - {pokemon.height?.maximum ?? 'N/A'}
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong>Weight:</strong> {pokemon.weight?.minimum ?? 'N/A'} - {pokemon.weight?.maximum ?? 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Attributes Section */}
                <div className="bg-gray-800 px-4 py-2 mb-4">
                    <h2 className="text-lg font-bold mb-2">Attributes</h2>
                    <p><strong>Classification:</strong> {pokemon.classification}</p>
                </div>
                {/* Resistant Section */}
                <div className="bg-gray-800 px-4 py-2 mb-4">
                    <h2 className="text-lg font-bold mb-2">Resistant</h2>
                    <div className="flex flex-wrap">
                        {pokemon.resistant.map((type, index) => (
                            <span key={index} className={`text-xs px-2 py-1 rounded-full mr-2 bg-${typeColors[type]}-500 text-white`}>
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Weaknesses Section */}
                <div className="bg-gray-800 px-4 py-2 mb-4">
                    <h2 className="text-lg font-bold mb-2">Weaknesses</h2>
                    <div className="flex flex-wrap">
                        {pokemon.weaknesses.map((type, index) => (
                            <span key={index} className={`text-xs px-2 py-1 rounded-full mr-2 bg-${typeColors[type]}-500 text-white`}>
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <AttacksSection fastAttacks={pokemon.attacks.fast} specialAttacks={pokemon.attacks.special} />
            <PokemonEvolutionChain pokemonChain={evolutionChain} />
        </div>
    );
};

export default PokemonDetailPage;
