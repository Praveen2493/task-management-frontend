import { useContext } from "react";
import { NotificationContext } from "../context/contexts";

const useNotifications = () => {
  return useContext(NotificationContext);
};

export default useNotifications;