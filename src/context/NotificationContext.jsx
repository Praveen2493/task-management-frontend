import { useCallback, useEffect, useState } from "react";
import { getNotifications, markNotificationsRead as markNotificationsReadRequest } from "../api/notificationApi";
import { NotificationContext } from "./contexts";

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = useCallback(() => {
    if (!localStorage.getItem("token")) {
      setNotifications([]);
      return;
    }
    getNotifications()
      .then((response) => setNotifications(response.notifications || []))
      .catch((error) => {
        console.error("Unable to load notifications", error);
      });
  }, []);

  const markNotificationsRead = useCallback(async () => {
    await markNotificationsReadRequest();
    setNotifications((current) => current.map((notification) => ({
      ...notification,
      isRead: true,
    })));
  }, []);

  useEffect(() => {
    let active = true;
    const loadNotifications = () => {
      if (!localStorage.getItem("token")) return;
      getNotifications()
        .then((response) => {
          if (active) setNotifications(response.notifications || []);
        })
        .catch((error) => {
          if (active) console.error("Unable to load notifications", error);
        });
    };

    loadNotifications();
    const interval = window.setInterval(loadNotifications, 60000);
    window.addEventListener("auth-changed", refreshNotifications);
    return () => {
      active = false;
      window.clearInterval(interval);
      window.removeEventListener("auth-changed", refreshNotifications);
    };
  }, [refreshNotifications]);

  return (
    <NotificationContext.Provider value={{
      notifications,
      setNotifications,
      refreshNotifications,
      markNotificationsRead,
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
