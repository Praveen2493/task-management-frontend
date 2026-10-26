import axiosInstance from "./axiosInstance";

// Get All Tasks
export const getTasks = async (filters = {}) => {

  const response = await axiosInstance.get("/tasks", {
    params: filters,
  });

  return response.data;
};

// Create Task
export const createTask = async (taskData) => {
  const response = await axiosInstance.post("/tasks", taskData);
  return response.data;
};

// Update Task
export const updateTask = async (id, taskData) => {
  const response = await axiosInstance.put(`/tasks/${id}`, taskData);
  return response.data;
};

// Delete Task
export const deleteTask = async (id) => {
  const response = await axiosInstance.delete(`/tasks/${id}`);
  return response.data;
};

// Get Single Task
export const getTaskById = async (id) => {
  const response = await axiosInstance.get(`/tasks/${id}`);
  return response.data;
};

export const assignTask = async (id, userId) => {
  const response = await axiosInstance.put(`/tasks/assign/${id}`, { userId });
  return response.data;
};

export const shareTask = async (id, userId, permission) => {
  const response = await axiosInstance.put(`/tasks/${id}/shares`, { userId, permission });
  return response.data;
};

export const removeTaskShare = async (id, userId) => {
  const response = await axiosInstance.delete(`/tasks/${id}/shares/${userId}`);
  return response.data;
};


export const uploadFile = async(file) => {

 const formData = new FormData();

 formData.append("file", file);

 const response = await axiosInstance.post(
   "/tasks/upload",
   formData
 );

 return response.data;
};