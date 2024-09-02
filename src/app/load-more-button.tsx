"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pokemon } from '../lib/definitions';

export function LoadMoreButton({ currentPokemon, nextUrl, setPokemon }: { currentPokemon: Pokemon[], nextUrl: string | null, setPokemon: (pokemon: Pokemon[]) => void }) {
  const router = useRouter();
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
    router.push(`/?nextUrl=${encodeURIComponent(data.next)}`);
    setLoading(false);
  };

  return (
    <button
      onClick={handleLoadMore}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      disabled={loading}
    >
      {loading ? "Loading..." : "Load More"}
    </button>
  );
}

/* "use client";

import { useRouter } from 'next/navigation';

export function LoadMoreButton({ nextUrl }: { nextUrl: string }) {
  const router = useRouter();

  const handleLoadMore = () => {
    if (nextUrl) {
      router.push(`/?nextUrl=${encodeURIComponent(nextUrl)}`);
    }
  };

  return (
    <button
      onClick={handleLoadMore}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Load More
    </button>
  );
}
 */