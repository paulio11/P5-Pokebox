import { useEffect } from "react";

// Custom hook for setting the document title
function useTitle(title) {
  useEffect(() => {
    // Updates the document title with the provided title and a suffix
    document.title = title + " - Pokébox";
  }, [title]);
}

export default useTitle;
