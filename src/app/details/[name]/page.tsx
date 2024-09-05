// src/app/details/[name]/page.tsx

import { fetchPokemonDetails } from '@/lib/data';
import { ShowPokemon } from './components/show-details';
import LoadingCircle from '@/app/components/loadingcircle';

export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const pokemon = await fetchPokemonDetails(name);

  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }

 return <ShowPokemon pokemon={pokemon} />;
}

