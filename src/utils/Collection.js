import { axiosReq } from "../api/AxiosDefaults";

export const UpdateCollection = async (newPokemon, uData, setUData) => {
  const hasPokemon = uData.pokemon.includes(newPokemon);
  const updatedCollection = hasPokemon
    ? uData.pokemon.filter((pokemon) => pokemon !== newPokemon)
    : [...uData.pokemon, newPokemon];

  try {
    const response = await axiosReq.patch(`profiles/${uData.id}`, {
      pokemon: updatedCollection.sort(function (a, b) {
        return a - b;
      }),
    });
    setUData(response.data);
  } catch (error) {}
};
