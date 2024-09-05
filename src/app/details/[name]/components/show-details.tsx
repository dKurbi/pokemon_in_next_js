// src/app/details/[name]/show-details.tsx
import { PokemonDetails } from "@/lib/definitions";
import { ShowSprite } from "./show-sprite";

export function ShowPokemon({ pokemon }: { pokemon: PokemonDetails | null }) {
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }
  const spriteDefault =
    pokemon.sprites?.other?.["official-artwork"]?.front_default;
  const spriteShiny = pokemon.sprites?.other?.["official-artwork"]?.front_shiny;
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">
        {pokemon.name
          ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          : "Unknown Pokémon"}
      </h1>
	  <div className="grid grid-cols-2">
		<div className="img-center"><ShowSprite url={spriteDefault} alt={pokemon.name} /></div>
		<div className="al"><ShowSprite url={spriteShiny} alt={pokemon.name + ' shiny'} /></div>
		</div>
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
