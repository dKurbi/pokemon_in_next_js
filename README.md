# Pokémon App

This project is a Pokémon listing app that fetches data from the [PokéAPI](https://pokeapi.co/). It allows users to view details about different Pokémon and explore additional information in a secure way.

## Features

- **Server-Side API Requests**: All API requests to the PokéAPI are made from the server. This ensures that API endpoints and access details are hidden from the client, improving security.
- **Responsive Layout**: The app is designed to work across various screen sizes and devices, including desktop and mobile.
- **Dynamic Pokémon Details**: Users can click on a Pokémon to see more detailed information, such as its abilities and stats.
- **Load More Functionality**: As users scroll through the list of Pokémon, they can load more results dynamically, ensuring a seamless experience.

## API Security

All API requests to fetch Pokémon data are handled server-side using **Next.js Server-Side Rendering (SSR)**. This approach ensures that:

- The **API endpoints** are not exposed to the client, preventing direct access to the backend.
- The logic for accessing external APIs remains hidden, protecting sensitive data like API keys or rate limits.
- This makes the app more secure by limiting exposure to potential vulnerabilities in the API.

## How It Works

1. The **Home Page** fetches a list of Pokémon from the API using server-side methods.
2. When the user clicks on a Pokémon, detailed information is also fetched on the server and rendered.
3. The client only receives the final rendered HTML, which does not expose any of the internal API logic.
4. The app uses **Next.js** for rendering, allowing for fast load times and an optimized user experience.

## Technologies Used

- **Next.js**: For server-side rendering and API integration.
- **Tailwind CSS**: For responsive and modern styling.
- **PokéAPI**: As the source of Pokémon data.
- **TypeScript**: For type safety and better development experience.

## Installation and Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokemon-app.git
   cd pokemon-app
   npm install
   npm run dev
   

## Folder Structure 
```
src/
  ├── app/
  │   ├── components/
  │   │   ├── Cards.tsx          # Component to display Pokémon cards
  │   │   ├── LoadMoreButton.tsx # Component to load more Pokémon
  │   │   ├── ShowMainPage.tsx   # Main page component
  │   ├── details/
  │   │   └── [name]/
  │   │       ├── page.tsx       # Pokémon details page
  ├── lib/
  │   ├── data.ts                # API fetch logic
  │   ├── definitions.ts         # TypeScript definitions for Pokémon
```


## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
