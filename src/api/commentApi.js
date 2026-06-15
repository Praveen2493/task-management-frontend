import axiosInstance from "./axiosInstance";

export const addComment = async (
  taskId,
  comment
) => {

  const response =
    await axiosInstance.post(
      `/comments/${taskId}`,
      { comment }
    );

  return response.data;
};

export const getComments = async (
  taskId
) => {

  const response =
    await axiosInstance.get(
      `/comments/${taskId}`
    );

  return response.data;
}