// src/app/details/[name]/page.tsx

import { fetchPokemonDetails } from '@/lib/data';
import { ShowPokemon } from './components/ShowPokemon';
import LoadingCircle from '@/app/components/LoadingCircle';

export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const pokemon = await fetchPokemonDetails(name);

  if (!pokemon) {
    return <div>No Pokemon data available.</div>;
  }

 return <ShowPokemon pokemon={pokemon} />;
}

