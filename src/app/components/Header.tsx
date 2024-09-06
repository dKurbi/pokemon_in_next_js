// src/app/components/Header.tsx

export default function Header() {
	return (
	  <header className="text-center p-6">
		<h1
		  className="pokemon-font text-6xl text-yellow-600"
		  style={{
			WebkitTextStroke: '2px blue', 
			display: 'inline-block', 
			padding: '10px', 
		  }}
		>
		  Find your Pokemon
		</h1>
	  </header>
	);
  }