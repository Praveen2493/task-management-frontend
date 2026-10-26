import axiosInstance
from "./axiosInstance";

export const
getNotifications=
async()=>{

 const response=
 await axiosInstance.get(
  "/tasks/notifications"
 );

 return response.data;

};

export const markNotificationsRead = async () => {
  const response = await axiosInstance.patch("/tasks/notifications/read");
  return response.data;
};