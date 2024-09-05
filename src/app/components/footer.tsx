// src/components/Footer.tsx

export default function Footer() {
	const currentYear = new Date().getFullYear(); // Obtiene el año actual
  
	return (
	  <footer className="bg-gray-800 text-white p-4 text-center">
		<p>
		  &copy; {currentYear} Developed by Diego Kurcbart -{' '}
		  <a
			href="https://www.linkedin.com/in/diegokurcbart/"
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-400 hover:underline"
		  >
			LinkedIn
		  </a>{' '}
		  |{' '}
		  <a
			href="https://github.com/dKurbi"
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-400 hover:underline"
		  >
			GitHub
		  </a>
		</p>
	  </footer>
	);
  }
  