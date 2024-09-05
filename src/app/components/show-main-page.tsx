// src/app/components/show-main-pages.tsx

"use client";

import { useState } from "react";
import { Pokemon } from "@/lib/definitions";
import { LoadMoreButton } from "./load-more-button";

export function ShowMainPage({
  pokemonData,
  nextUrl,
}: {
  pokemonData: Pokemon[];
  nextUrl: string | null;
}) {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
  const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(nextUrl); // Guarda la nextUrl actual

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Pokemon List</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {pokemon.map((p, index) => (
          <a href={`/details/${p.name}`} key={index}>
            <li className="bg-gradient-to-br from-yellow-50 to-yellow-150 border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center">
              <img src={p.image} alt={p.name} className="w-15 h-15 mr-4" />
              <div className="text-blue-500">
                {" "}
                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}{" "}
              </div>
            </li>
          </a>
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
