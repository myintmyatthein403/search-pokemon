// types/index.ts

export interface PokemonAttack {
    name: string;
    type: string;
    damage: number;
}


export interface Pokemon {
    id: string;
    name: string;
    types: string[]; // Array of strings for types
    image: string;
    maxCP: number;
    maxHP: number;
    number: string;
    height: {
        minimum: string;
        maximum: string;
    };
    weight: {
        minimum: string;
        maximum: string;
    };
    classification: string;
    resistant: string[];
    weaknesses: string[];
    attacks: {
        fast: PokemonAttack[];
        special: PokemonAttack[];
    };
    evolutions: Pokemon[];
}
