"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}

export default function PokemonDetailsPage() {
  const params = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const name = params.name;
    if (name) {
      console.log(`Fetching data for: ${name}`);
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPokemon(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [params]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <img
        src={pokemon.sprites.other['official-artwork'].front_shiny}
        alt={`${pokemon.name} shiny`}
      />
      <p>ID: {pokemon.id}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <h2 className="text-xl font-bold">Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold">Stats</h2>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
