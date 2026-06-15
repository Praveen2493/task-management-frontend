import axiosInstance
from "./axiosInstance";

export const
getNotifications=
async()=>{

 const response=
 await axiosInstance.get(
  "/notifications"
 );

 return response.data;

};