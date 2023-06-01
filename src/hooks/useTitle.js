import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = title + " - Pokébox";
  }, [title]);
}

export default useTitle;
