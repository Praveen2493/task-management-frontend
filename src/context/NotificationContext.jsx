import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {




  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Task assigned to you",
      read: false,
    },
    {
      id: 2,
      message: "Task deadline approaching",
      read: false,
    },
  ]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;