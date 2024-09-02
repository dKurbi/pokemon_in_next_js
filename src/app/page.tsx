// src/app/page.tsx
import { ShowMainPage } from './show-main-page';
import { fetchInitialPokemon } from './lib/data';

export default async function HomePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const url = searchParams.nextUrl ? decodeURIComponent(searchParams.nextUrl) : undefined;
  const { pokemonData, nextUrl } = await fetchInitialPokemon(url);

  return <ShowMainPage pokemonData={pokemonData} nextUrl={nextUrl} />;
}

/* // src/app/page.tsx
import { ShowMainPage } from '@/app/show-main-page';
import { fetchInitialPokemon } from './lib/data';

export default async function HomePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const url = searchParams.nextUrl ? decodeURIComponent(searchParams.nextUrl) : undefined;
  const { pokemonData, nextUrl } = await fetchInitialPokemon(url);

  return <ShowMainPage pokemonData={pokemonData} nextUrl={nextUrl} />;
}
 */