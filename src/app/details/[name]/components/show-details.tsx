"use client";

import { PokemonDetails } from "@/lib/definitions";
import { ShowSprite } from "./show-sprite";
import { useRouter } from "next/navigation";

export function ShowPokemon({ pokemon }: { pokemon: PokemonDetails | null }) {
  const router = useRouter();

  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }

  const spriteDefault = pokemon.sprites?.other?.["official-artwork"]?.front_default;
  const spriteShiny = pokemon.sprites?.other?.["official-artwork"]?.front_shiny;

  return (
    <div className="p-8 rounded-lg  text-center mb-8">
      {/* Nombre del Pokémon */}
      <h1 className="text-3xl mb-4">
        Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>

      {/* Imágenes del Pokémon */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex justify-center items-center">
          <ShowSprite url={spriteDefault} alt={pokemon.name} />
        </div>
        <div className="flex justify-center items-center">
          <ShowSprite url={spriteShiny} alt={`${pokemon.name} shiny`} />
        </div>
      </div>

      {/* ID, Height y Weight */}
      <div className="grid grid-cols-3 gap-0 mb-6 border-8 border-gray-400 py-4 rounded-lg shadow-md">
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height / 10} m</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
      </div>

      {/* Abilities y Stats en columnas */}
      <div className="grid grid-cols-2 gap-0 border-4 border-gray-400 rounded-lg shadow-md ">
        {/* Abilities */}
        <div className="p-4 border-4 border-gray-400">
          <h2 className="text-xl font-bold mb-2">Abilities</h2>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="p-4 border-4 border-gray-400">
          <h2 className="text-xl font-bold mb-2">Stats</h2>
          <ul>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón para Volver a la Página Principal */}
      <button
        onClick={() => router.push("/")}
        className="yelow_button mt-8"
        style={{ padding: "16px 16px" }}
      >
        Back to the Main Page
      </button>
    </div>
  );
}
