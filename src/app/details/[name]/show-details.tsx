// src/app/details/[name]/show-details.tsx
import { PokemonDetails } from "@/app/lib/definitions";
import { ShowSprite } from "./show-sprite";

export function ShowPokemon({ pokemon }: { pokemon: PokemonDetails | null }) {
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }
  const spriteDefault =
    pokemon.sprites?.other?.["official-artwork"]?.front_default;
  const spriteShiny = pokemon.sprites?.other?.["official-artwork"]?.front_shiny;
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        {pokemon.name
          ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          : "Unknown Pokémon"}
      </h1>
		<ShowSprite url={spriteDefault} alt={pokemon.name} />
		<ShowSprite url={spriteShiny} alt={pokemon.name + ' shiny'} />
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
