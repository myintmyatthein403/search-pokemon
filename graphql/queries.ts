import { gql } from '@apollo/client';

export const FETCH_ALL_POKEMONS_QUERY = gql`
  query {
    pokemons(first: 151) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;
export const FETCH_SINGLE_POKEMON_QUERY = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const FETCH_POKEMON_EVOLUTION = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
        id
        name
        number
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          ...RecursivePokemonFragment
        }
        maxHP
        image
    }
  }

  fragment RecursivePokemonFragment on Pokemon {
    id
    name
    number
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
`;

// queries/fetchPokemonAttacks.graphql

export const FETCH_POKEMON_DETAILS = gql `
    query fetchPokemonDetails($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    name
    image
    types
    maxCP
    maxHP
    number
    height {
      minimum
      maximum
    }
    weight {
      minimum
      maximum
    }
    classification
    resistant
    weaknesses
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      image
      types
      maxCP
      maxHP
      classification
      resistant
      weaknesses
    }
  }
}
`;