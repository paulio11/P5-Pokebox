import React, { createContext, useContext, useState } from "react";

const CurrentNotificationContext = createContext();

export const CurrentNotificationProvider = ({ children }) => {
  const [currentNotification, setCurrentNotification] = useState(null);

  return (
    <CurrentNotificationContext.Provider
      value={{ currentNotification, setCurrentNotification }}
    >
      {children}
    </CurrentNotificationContext.Provider>
  );
};

export const useCurrentNotification = () => {
  const { currentNotification } = useContext(CurrentNotificationContext);
  return currentNotification;
};

export const useSetCurrentNotification = () => {
  const { setCurrentNotification } = useContext(CurrentNotificationContext);
  return setCurrentNotification;
};
