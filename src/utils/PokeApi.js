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

// Fetch pokemon data for either a query or list
export const FetchPokemonData = async (query, list) => {
  try {
    if (query) {
      // Make a GET request to pokeApi for the specified pokemon
      const { data } = await pokeApi.get(`pokemon/${query}`);
      // Return data in an array
      return [data];
    }
    if (list) {
      // Use Promise.all and map to asynchronously fetch data for each Pokemon in the list
      const response = await Promise.all(
        list.map(async (pokemon) => {
          // Make a GET request to pokeApi for each Pokemon in the list
          const { data } = await pokeApi.get(
            `pokemon/${pokemon.name || pokemon}`
          );
          return data;
        })
      );
      return response;
    }
    return [];
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    }
    throw error;
  }
};
