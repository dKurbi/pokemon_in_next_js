// src/app/components/LoadMoreButton.tsx

"use client";

import { useState } from "react";
import { Pokemon } from "@/lib/definitions";

export function LoadMoreButton({
  currentPokemon,
  nextUrl,
  setPokemon,
  setCurrentNextUrl,
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
	setCurrentNextUrl(data.next);
    setLoading(false);
  };

  return (
    <button
      onClick={handleLoadMore}
	  className="yelow_button"
      style={{ padding: '16px 16px' }} 
	  disabled={loading}
    >
      {loading ? "Loading..." : "Load More Pokemon"}
    </button>
  );
}
