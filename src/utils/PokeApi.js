import { pokeApi } from "../api/AxiosDefaults";

// Fetch the list of Pokémon from PokeAPI
// Fetched data inclueds Pokémon name and URL
export const FetchPokemonList = async (offset, limit) => {
  try {
    const response = await pokeApi.get(
      `pokemon/?offset=${offset}&limit=${limit}`
    );
    return response.data.results;
  } catch (error) {
    return [];
  }
};

// This function asynchronously fetches data about Pokémon based on the provided
// query or list of Pokémon names.
export const FetchPokemonData = async (query, list, setNoResults) => {
  try {
    // If a query is provided, fetch data for a single Pokémon.
    if (query) {
      const { data } = await pokeApi.get(`pokemon/${query}`);
      return [data];
    }
    // If a list is provided, fetch data for multiple Pokémon.
    if (list) {
      const response = await Promise.all(
        list.map(async (pokemon) => {
          try {
            // Fetch data for each Pokémon using their names or provided ID.
            const { data } = await pokeApi.get(
              `pokemon/${pokemon.name || pokemon}`
            );
            return data;
          } catch (error) {
            return null;
          }
        })
      );
      // Filter out any null values (Pokémon data that failed to be fetched).
      const filteredResponse = response.filter((pokemon) => pokemon !== null);
      return filteredResponse;
    }
    // If neither a query nor a list is provided, return an empty array.
    return [];
  } catch (error) {
    // If the API returns a 404 status code, return an empty array.
    if (error.response?.status === 404) {
      setNoResults(true);
      return [];
    }
  }
};

// Fetch data from a Pokémon's species page using Pokémon ID
export const FetchSpeciesData = async (id) => {
  try {
    const response = await pokeApi.get(`pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
