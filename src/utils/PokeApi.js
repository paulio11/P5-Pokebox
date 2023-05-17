import { pokeApi } from "../api/AxiosDefaults";

// Fetch the list of 1010 pokemon from PokeAPI
// Fetched data inclueds pokemon name and URL
export const FetchPokemonList = async () => {
  try {
    const response = await pokeApi.get("pokemon/?limit=1010");
    return response.data.results;
  } catch (error) {
    // Return empty list if error (to do)
  }
};

// This function asynchronously fetches data about Pokémon based on the provided
// query or list of Pokémon names.
export const FetchPokemonData = async (query, list) => {
  try {
    // If a query is provided, fetch data for a single Pokémon.
    if (query) {
      const { data } = await pokeApi.get(`pokemon/${query}`);
      return [data];
    }

    // If a list is provided, fetch data for multiple Pokémon.
    if (list) {
      // Create an array of promises to fetch data for each Pokémon in the list.
      const responsePromise = Promise.all(
        list.map(async (pokemon) => {
          try {
            // Fetch data for each Pokémon using their names or provided values.
            const { data } = await pokeApi.get(
              `pokemon/${pokemon.name || pokemon}`
            );
            return data;
          } catch (error) {
            return null;
          }
        })
      );

      // Create a promise that resolves after a timeout of 30 seconds.
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve([]), 30000);
      });

      // Wait for either all the Pokémon data to be fetched or the timeout to occur.
      const response = await Promise.race([responsePromise, timeoutPromise]);

      // Filter out any null values (Pokémon data that failed to be fetched).
      const filteredResponse = response.filter((pokemon) => pokemon !== null);
      return filteredResponse;
    }

    // If neither a query nor a list is provided, return an empty array.
    return [];
  } catch (error) {
    // If the API returns a 404 status code, return an empty array.
    if (error.response?.status === 404) {
      return [];
    }

    // If any other error occurs, re-throw it.
    throw error;
  }
};

// Fetch data from a pokemon's species page using pokemon ID
export const FetchSpeciesData = async (id) => {
  try {
    const response = await pokeApi.get(`pokemon-species/${id}`);
    return response.data;
  } catch (error) {}
};
