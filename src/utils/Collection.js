// API
import { axiosReq } from "../api/AxiosDefaults";
// Contexts
import { useCurrentNotification } from "../contexts/NotificationContext";

// Updates user's Pokémon collection (Pokémon array in profile object).
// Takes newPokemon and filters it out of array if it exists.
// If new it adds the Pokémon ID to the array.
// Sends PATCH request with sorted array to update the profile object.
export const UpdateCollection = async (newPokemon, uData, setUData) => {
  const setCurrentNotification = useCurrentNotification();
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
  } catch (error) {
    setCurrentNotification(
      "An error occurred while attempting to update your collection. Please try again."
    );
  }
};
