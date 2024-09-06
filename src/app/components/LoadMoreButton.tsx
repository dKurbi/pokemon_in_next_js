// src/app/components/LoadMoreButton.tsx

"use client";

import { useState } from "react";
import { Pokemon } from "@/lib/definitions";

export function LoadMoreButton({
  currentPokemon,
  nextUrl,
  setPokemon,
  setCurrentNextUrl, // Accept setCurrentNextUrl as a prop
}: {
  currentPokemon: Pokemon[];
  nextUrl: string | null;
  setPokemon: (pokemon: Pokemon[]) => void;
  setCurrentNextUrl: (url: string | null) => void; // Declare prop type for setCurrentNextUrl
}) {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (!nextUrl) return;
    setLoading(true);

    try {
      const res = await fetch(nextUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }

      const data = await res.json();

      if (!data.results) {
        throw new Error("No results found in the API response");
      }

      const newPokemonData = await Promise.all(
        data.results.map(async (p: Pokemon) => {
          try {
            const pokemonRes = await fetch(p.url);

            if (!pokemonRes.ok) {
              throw new Error(
                `Failed to fetch ${p.name}: ${pokemonRes.statusText}`
              );
            }

            const pokemonDetails = await pokemonRes.json();

            return {
              name: p.name,
              url: p.url,
              image: pokemonDetails.sprites.front_default,
            };
          } catch (error) {
            console.error(`Error fetching details for ${p.name}:`, error);
            return null;
          }
        })
      );

      setPokemon([
        ...currentPokemon,
        ...newPokemonData.filter((p) => p !== null),
      ]);
      setCurrentNextUrl(data.next);
    } catch (error) {
      console.error("Error fetching more Pokémon:", error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleLoadMore}
      className="yelow_button"
      style={{ padding: "16px 16px" }}
      disabled={loading}
    >
      {loading ? "Loading..." : "Load More Pokemon"}
    </button>
  );
}
