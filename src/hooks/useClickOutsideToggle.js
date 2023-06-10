import { useEffect, useRef, useState } from "react";

// Custom hook for handling click outside behavior
const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);

  // Creating a ref to store the reference to the element
  const ref = useRef(null);

  useEffect(() => {
    // Event handler to handle click outside behavior
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    // Adding and removing event listener to the document for mouseup event
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
