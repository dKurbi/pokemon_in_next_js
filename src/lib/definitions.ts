// src/app/lib/definitions.ts

export interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}

export interface ShowMainPageProps {
  pokemonData: Pokemon[];
  nextUrl: string | null;
}

export interface ShowSpriteProps {
  url: string;
  alt: string;
}
