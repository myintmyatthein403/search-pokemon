import { Pokemon } from '@/types'; // Assuming you have defined the Pokemon interface

// Function to check if a Pokémon is of Grass type
export const isGrassType = (pokemon: Pokemon): boolean => {
    return pokemon.types.includes('Grass');
};

// Function to check if a Pokémon is of Fire type
export const isFireType = (pokemon: Pokemon): boolean => {
    return pokemon.types.includes('Fire');
};

// Function to check if a Pokémon is of Water type
export const isWaterType = (pokemon: Pokemon): boolean => {
    return pokemon.types.includes('Water');
};
