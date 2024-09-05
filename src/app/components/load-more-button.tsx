"use client";

import { useState } from "react";
import { Pokemon } from "@/lib/definitions";

export function LoadMoreButton({
  currentPokemon,
  nextUrl,
  setPokemon,
}: {
  currentPokemon: Pokemon[];
  nextUrl: string | null;
  setPokemon: (pokemon: Pokemon[]) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (!nextUrl) return;
    setLoading(true);

    const res = await fetch(nextUrl);
    const data = await res.json();

    const newPokemonData = await Promise.all(
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

    setPokemon([...currentPokemon, ...newPokemonData]);

    setLoading(false);
  };

  return (
    <button
      onClick={handleLoadMore}
	  className="bg-purple-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
      disabled={loading}
    >
      {loading ? "Loading..." : "Load More"}
    </button>
  );
}
