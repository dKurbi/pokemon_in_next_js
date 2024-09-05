"use client";

import { useState } from 'react';
import { Pokemon } from '@/lib/definitions';
import { LoadMoreButton } from './load-more-button'; 

export function ShowMainPage({ pokemonData, nextUrl }: { pokemonData: Pokemon[], nextUrl: string | null }) {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
  const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(nextUrl); // Guarda la nextUrl actual

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Pokemon List</h1>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {pokemon.map((p, index) => (
          <li key={index} className="border p-2 rounded flex items-center">
            <img src={p.image} alt={p.name} className="w-12 h-12 mr-4" />
            <a href={`/details/${p.name}`} className="text-blue-500">
              {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      {currentNextUrl && (
        <div className="text-center mt-4">
          <LoadMoreButton
            currentPokemon={pokemon}
            nextUrl={currentNextUrl}
            setPokemon={setPokemon}
          />
        </div>
      )}
    </div>
  );
}
