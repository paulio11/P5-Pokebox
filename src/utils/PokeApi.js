import { pokeApi } from "../api/AxiosDefaults";

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

export const FetchPokemonData = async (query, list, setNoResults) => {
  try {
    if (query) {
      const { data } = await pokeApi.get(`pokemon/${query}`);
      return [data];
    }
    if (list) {
      const response = await Promise.all(
        list.map(async (pokemon) => {
          try {
            const { data } = await pokeApi.get(
              `pokemon/${pokemon.name || pokemon}`
            );
            return data;
          } catch (error) {
            return null;
          }
        })
      );
      const filteredResponse = response.filter((pokemon) => pokemon !== null);
      return filteredResponse;
    }
    return [];
  } catch (error) {
    if (error.response?.status === 404) {
      setNoResults(true);
      return [];
    }
    throw error;
  }
};

export const FetchSpeciesData = async (id) => {
  try {
    const response = await pokeApi.get(`pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
