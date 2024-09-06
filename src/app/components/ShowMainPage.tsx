// src/app/components/ShowMainPage.tsx

"use client";

import { useState, useEffect } from "react";
import { Pokemon } from "@/lib/definitions";
import { LoadMoreButton } from "./LoadMoreButton";

export function ShowMainPage({
  pokemonData,
  nextUrl,
}: {
  pokemonData: Pokemon[];
  nextUrl: string | null;
}) {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
  const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(nextUrl);

  return (
    <div className="p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {pokemon.map((p, index) => (
          <a href={`/details/${p.name}`} key={index}>
            <li className="bg-pokemon-gradient border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-contain w-full h-full"
                />
              </div>
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
