"use client";

import { useState } from 'react';
import { Pokemon } from './lib/definitions';
import { LoadMoreButton } from './load-more-button'; 
export function ShowMainPage({ pokemonData, nextUrl }: { pokemonData: Pokemon[], nextUrl: string | null }) {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Pokémon List</h1>
      <ul className="grid grid-cols-2 gap-4">
        {pokemon.map((p, index) => (
          <li key={index} className="border p-2 rounded flex items-center">
            <img src={p.image} alt={p.name} className="w-12 h-12 mr-4" />
            <a href={`/details/${p.name}`} className="text-blue-500">
              {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      {nextUrl && (
        <div className="text-center mt-4">
          <LoadMoreButton currentPokemon={pokemon} nextUrl={nextUrl} setPokemon={setPokemon} />
        </div>
      )}
    </div>
  );
}

/* // src/show-main-page.tsx
"use client";
import { Pokemon } from "./lib/definitions";
import { useRouter } from "next/navigation";
import { LoadMoreButton } from "./load-more-button";

export function ShowMainPage({
  pokemonData,
  nextUrl,
}: {
  pokemonData: Pokemon[];
  nextUrl: string | null;
}) {
  const router = useRouter();

  const handleLoadMore = () => {
    if (nextUrl) {
      router.push(`/?nextUrl=${encodeURIComponent(nextUrl)}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Pokémon List</h1>
      <ul className="grid grid-cols-3 gap-4">
        {pokemonData.map((p, index) => (
          <li key={index} className="border p-2 rounded flex items-center">
            <img src={p.image} alt={p.name} className="w-12 h-12 mr-4" />
            <a href={`/details/${p.name}`} className="text-blue-500">
              {p.name.charAt(0).toUpperCase() + p.name.slice(1) + " " + index}
            </a>
          </li>
        ))}
      </ul>
      {nextUrl && (
        <div className="text-center mt-4">
          <LoadMoreButton nextUrl={nextUrl} />
        </div>
      )}
    </div>
  );
}
 */