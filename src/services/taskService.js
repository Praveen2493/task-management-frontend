import API from "./api"


export const getTasks =  async () => {
    return await API.get("/tasks");
}


export const createTasks = async (data) => {
    return await API.post("/tasks", data);
}