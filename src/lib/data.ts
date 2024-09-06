// src/app/data.ts

import { PokemonDetails } from "./definitions";
import { Pokemon } from './definitions';


export const fetchPokemonDetails = async (name: string): Promise<PokemonDetails> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export async function fetchInitialPokemon(url: string = 'https://pokeapi.co/api/v2/pokemon?limit=20'): Promise<{ pokemonData: Pokemon[], nextUrl: string | null }> {
  const res = await fetch(url);
  const data = await res.json();

  const pokemonData = await Promise.all(
    data.results.map(async (p: Pokemon) => {
      const pokemonRes = await fetch(p.url);
      const pokemonDetails = await pokemonRes.json();
      return {
        name: p.name,
        url: p.url,
        image: pokemonDetails.sprites.front_default,
      };
    })
  );

  return { pokemonData, nextUrl: data.next };
}
