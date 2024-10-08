# Pokemon App

This project is a Pokemon listing app that fetches data from the [PokeAPI](https://pokeapi.co/). It allows users to view details about different Pokemon and explore additional information in a secure way.

## Features

- **Server-Side API Requests**: All API requests to the PokeAPI are made from the server. This ensures that API endpoints and access details are hidden from the client, improving security.
- **Responsive Layout**: The app is designed to work across various screen sizes and devices, including desktop and mobile.
- **Dynamic Pokemon Details**: Users can click on a Pokemon to see more detailed information, such as its abilities and stats.
- **Load More Functionality**: As users scroll through the list of Pokemon, they can load more results dynamically, ensuring a seamless experience.

## Live Demo

You can view the app running in production on Vercel:

🔗 **<a href="https://pokemon-in-next-js.vercel.app/" target="_blank">View Pokemon App</a>**


## API Security

All API requests to fetch Pokemon data are handled server-side using **Next.js Server-Side Rendering (SSR)**. This approach ensures that:

- The **API endpoints** are not exposed to the client, preventing direct access to the backend.
- The logic for accessing external APIs remains hidden, protecting sensitive data like API keys or rate limits.
- This makes the app more secure by limiting exposure to potential vulnerabilities in the API.

## How It Works

1. The **Home Page** fetches a list of Pokemon from the API using server-side methods.
2. When the user clicks on a Pokemon, detailed information is also fetched on the server and rendered.
3. The client only receives the final rendered HTML, which does not expose any of the internal API logic.
4. The app uses **Next.js** for rendering, allowing for fast load times and an optimized user experience.

## Technologies Used

- **Next.js**: For server-side rendering and API integration. (v20.17.0)
- **Tailwind CSS**: For responsive and modern styling.
- **PokeAPI**: As the source of Pokemon data.
- **TypeScript**: For type safety and better development experience.

## Installation and Running Locally

Clone the repository:

   ```bash
   git clone https://github.com/dKurbi/pokemon_in_next_js
   cd pokemon_in_next_js
   npm install
   npm run dev
```
   

## Folder Structure 
```
public/
  ├── fonts/
  │   ├── PokemonSolidNormal.woff
  │   ├── PokemonSolidNormal.woff2
src/
  ├── app/
  │   ├── components/
  │   │   ├── styles/
  │   │   │   ├── loading-circle.css   # Styles for the loading circle
  │   │   ├── Footer.tsx               # Footer component
  │   │   ├── Header.tsx               # Header component
  │   │   ├── LoadingCircle.tsx        # Loading circle component
  │   │   ├── LoadMoreButton.tsx       # "Load More" button component
  │   │   ├── ShowMainPage.tsx         # Main page that shows the Pokemon list
  │   ├── details/
  │   │   └── [name]/
  │   │       ├── components/
  │   │       │   ├── ShowPokemon.tsx  # Component to show Pokemon details
  │   │       │   ├── ShowSprite.tsx   # Component to display Pokemon sprites
  │   │       ├── page.tsx             # Pokemon details page
  │   ├── favicon.ico                  # Favicon
  │   ├── globals.css                  # Global styles
  │   ├── layout.tsx                   # Main layout of the app
  │   ├── loading.tsx                  # Global loading screen
  │   ├── page.tsx                     # Home page

lib/
  ├── data.ts                          # Data fetching logic
  ├── definitions.ts                   # TypeScript types and interfaces
  ├── fonts.ts                         # Font configuration
```

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
