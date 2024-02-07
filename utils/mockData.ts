import { Pokemon, PokemonAttack } from '@/types';

export const mockSquirtle: Pokemon = {
    id: 'UG9rZW1vbjowMDc=',
    name: 'Squirtle',
    image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
    types: ['Water'],
    maxCP: 891,
    maxHP: 1008,
    number: '007',
    height: {
        minimum: "0.44m",
        maximum: "0.56m"
    },
    weight: {
        minimum: "7.88kg",
        maximum: "10.13kg"
    },
    classification: 'Tiny Turtle Pokémon',
    resistant: ['Fire', 'Water', 'Ice', 'Steel'],
    weaknesses: ['Electric', 'Grass'],
    attacks: {
        fast: [
            { name: 'Bubble', type: 'Water', damage: 25 },
            { name: 'Tackle', type: 'Normal', damage: 12 }
        ],
        special: [
            { name: 'Aqua Jet', type: 'Water', damage: 25 },
            { name: 'Aqua Tail', type: 'Water', damage: 45 },
            { name: 'Water Pulse', type: 'Water', damage: 35 }
        ]
    },
    evolutions: [
        {
            id: 'UG9rZW1vbjowMDg=',
            name: 'Wartortle',
            image: 'https://img.pokemondb.net/artwork/wartortle.jpg',
            types: ['Water'],
            maxCP: 1435,
            maxHP: 1582,
            number: '008',
            height: {
                minimum: "0.88m",
                maximum: "1.13m"
            },
            weight: {
                minimum: "19.69kg",
                maximum: "25.31kg"
            },
            classification: 'Turtle Pokémon',
            resistant: ['Fire', 'Water', 'Ice', 'Steel'],
            weaknesses: ['Electric', 'Grass'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        },
        {
            id: 'UG9rZW1vbjowMDk=',
            name: 'Blastoise',
            image: 'https://img.pokemondb.net/artwork/blastoise.jpg',
            types: ['Water'],
            maxCP: 2355,
            maxHP: 2542,
            number: '009',
            height: {
                minimum: "1.4m",
                maximum: "1.8m"
            },
            weight: {
                minimum: "74.81kg",
                maximum: "96.19kg"
            },
            classification: 'Shellfish Pokémon',
            resistant: ['Fire', 'Water', 'Ice', 'Steel'],
            weaknesses: ['Electric', 'Grass'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        }
    ]
};

export const mockBulbasaur: Pokemon = {
    id: 'UG9rZW1vbjowMDE=',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    types: ['Grass', 'Poison'],
    maxCP: 951,
    maxHP: 1071,
    number: '001',
    height: {
        minimum: "0.61m",
        maximum: "0.79m"
    },
    weight: {
        minimum: "6.04kg",
        maximum: "7.76kg"
    },
    classification: 'Seed Pokémon',
    resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    attacks: {
        fast: [
            { name: 'Tackle', type: 'Normal', damage: 12 },
            { name: 'Vine Whip', type: 'Grass', damage: 7 }
        ],
        special: [
            { name: 'Power Whip', type: 'Grass', damage: 70 },
            { name: 'Seed Bomb', type: 'Grass', damage: 40 },
            { name: 'Sludge Bomb', type: 'Poison', damage: 55 }
        ]
    },
    evolutions: [
        {
            id: 'UG9rZW1vbjowMDI=',
            name: 'Ivysaur',
            image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            maxHP: 1632,
            number: '002',
            height: {
                "minimum": "0.88m",
                "maximum": "1.13m"
            },
            "weight": {
                "minimum": "11.38kg",
                "maximum": "14.63kg"
            },
            classification: 'Seed Pokémon',
            resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
            weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        },
        {
            id: 'UG9rZW1vbjowMDM=',
            name: 'Venusaur',
            image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            maxHP: 2580,
            number: '003',
            height: {
                minimum: "1.75m",
                maximum: "2.25m"
            },
            weight: {
                minimum: "87.5kg",
                maximum: "112.5kg"
            },
            classification: 'Seed Pokémon',
            resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
            weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        }
    ]
};

export const mockCharmander: Pokemon = {
    id: 'UG9rZW1vbjowMDQ=',
    name: 'Charmander',
    image: 'https://img.pokemondb.net/artwork/charmander.jpg',
    types: ['Fire'],
    maxCP: 841,
    maxHP: 955,
    number: '004',
    height: {
        minimum: "0.53m",
        maximum: "0.68m"
    },
    weight: {
        minimum: "7.44kg",
        maximum: "9.56kg"
    },
    classification: 'Lizard Pokémon',
    resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
    weaknesses: ['Water', 'Ground', 'Rock'],
    attacks: {
        fast: [
            { name: 'Ember', type: 'Fire', damage: 10 },
            { name: 'Scratch', type: 'Normal', damage: 6 }
        ],
        special: [
            { name: 'Flame Burst', type: 'Fire', damage: 30 },
            { name: 'Flame Charge', type: 'Fire', damage: 25 },
            { name: 'Flamethrower', type: 'Fire', damage: 55 }
        ]
    },
    evolutions: [
        {
            id: 'UG9rZW1vbjowMDU=',
            number: '005',
            name: 'Charmeleon',
            image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
            types: ['Fire'],
            maxCP: 1411,
            maxHP: 1557,
            height: {
                minimum: "0.96m",
                maximum: "1.24m"
            },
            weight: {
                minimum: "16.63kg",
                maximum: "21.38kg"
            },
            classification: 'Flame Pokémon',
            resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
            weaknesses: ['Water', 'Ground', 'Rock'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        },
        {
            id: 'UG9rZW1vbjowMDY=',
            number: '006',
            name: 'Charizard',
            image: 'https://img.pokemondb.net/artwork/charizard.jpg',
            types: ['Fire', 'Flying'],
            maxCP: 2413,
            maxHP: 2602,
            height: {
                minimum: "1.49m",
                maximum: "1.91m"
            },
            weight: {
                minimum: "79.19kg",
                maximum: "101.81kg"
            },
            classification: 'Flame Pokémon',
            resistant: ['Fire', 'Grass', 'Fighting', 'Bug', 'Steel', 'Fairy'],
            weaknesses: ['Water', 'Electric', 'Rock'],
            attacks: {
                fast: [],
                special: []
            },
            evolutions: []
        }
    ]
};
