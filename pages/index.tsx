// pages/index.tsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ALL_POKEMONS_QUERY } from '@/graphql/queries';
import PokemonList from '../components/PokemonList';
import { Pokemon } from '@/types';
import Loading from "@/components/Loading";

const HomePage: React.FC = () => {
    const { loading, error, data } = useQuery(FETCH_ALL_POKEMONS_QUERY);

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;

    const pokemons: Pokemon[] = data.pokemons;

    return <PokemonList pokemons={pokemons} />;
};

export default HomePage;
