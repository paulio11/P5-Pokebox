import React, { createContext, useContext, useState } from "react";

// Creating a context for managing the current notification
const CurrentNotificationContext = createContext();

// Provider component for managing the current notification state
export const CurrentNotificationProvider = ({ children }) => {
  const [currentNotification, setCurrentNotification] = useState(null);

  const setNotification = (notification, type) => {
    // Perform any necessary logic using the additionalParam
    // For example, you can pass it along with the notification object
    const updatedNotification = { notification, type };
    setCurrentNotification(updatedNotification);
  };

  return (
    <CurrentNotificationContext.Provider
      value={{ currentNotification, setCurrentNotification: setNotification }}
    >
      {children}
    </CurrentNotificationContext.Provider>
  );
};

// Custom hook for accessing the current notification from the context
export const useCurrentNotification = () => {
  const { currentNotification } = useContext(CurrentNotificationContext);
  return currentNotification;
};

// Custom hook for updating the current notification in the context
export const useSetCurrentNotification = () => {
  const { setCurrentNotification } = useContext(CurrentNotificationContext);
  return setCurrentNotification;
};
