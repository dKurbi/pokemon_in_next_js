// src/app/page.tsx
import { ShowMainPage } from './components/ShowMainPage';
import { fetchInitialPokemon } from '../lib/data';

export default async function HomePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const url = searchParams.nextUrl ? decodeURIComponent(searchParams.nextUrl) : undefined;
  const { pokemonData, nextUrl } = await fetchInitialPokemon(url);

  return <ShowMainPage pokemonData={pokemonData} nextUrl={nextUrl} />;
}

