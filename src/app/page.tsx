// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';

interface Pokemon {
	name: string;
	url: string;
	image: string;
}

export default function HomePage() {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [nextUrl, setNextUrl] = useState<string | null>('https://pokeapi.co/api/v2/pokemon/');
	const [loading, setLoading] = useState(false);

	const fetchPokemon = async () => {
		if (!nextUrl) return;
		setLoading(true);
		const res = await fetch(nextUrl);
		const data = await res.json();

		const pokemonData = await Promise.all(
			data.results.map(async (p: Pokemon) => {
				const pokemonRes = await fetch(p.url);
				const pokemonDetails = await pokemonRes.json();
				return {
					name: p.name,
					url: p.url,
					image: pokemonDetails.sprites.front_default, // Obtener la imagen
				};
			})
		);

		setPokemon((prev) => [...prev, ...pokemonData]);
		setNextUrl(data.next);
		setLoading(false);
	};

	/*  const fetchPokemon = async () => {
	   if (!nextUrl) return;
	   setLoading(true);
	   const res = await fetch(nextUrl);
	   const data = await res.json();
   	
	   setPokemon((prev) => [...prev, ...data.results]);
	   setNextUrl(data.next);
	   setLoading(false);
	 }; */

	useEffect(() => {
		fetchPokemon();
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Pokémon List</h1>
			<ul className="grid grid-cols-2 gap-4">
				{pokemon.map((p, index) => (
					<li key={index} className="border p-2 rounded flex items-center">
						<img src={p.image} alt={p.name} className="w-12 h-12 mr-4" />
						<a href={`/details/${p.name}`} className="text-blue-500">
							{p.name.charAt(0).toUpperCase() + p.name.slice(1)}
						</a>
					</li>
				))}
			</ul>

{/* 			<ul className="grid grid-cols-2 gap-4">
				{pokemon.map((p, index) => (
					<li key={index} className="border p-2 rounded">
						<a href={`/details/${p.name}`} className="text-blue-500">
							{p.name.charAt(0).toUpperCase() + p.name.slice(1)}
						</a>
					</li>
				))}
			</ul> */}
			{nextUrl && (
				<div className="text-center mt-4">
					<button
						onClick={fetchPokemon}
						disabled={loading}
						className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
					>
						{loading ? 'Loading...' : 'Load More'}
					</button>
				</div>
			)}
		</div>
	);
}
