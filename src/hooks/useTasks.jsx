import { useContext } from "react";
import { TaskContext } from "../context/contexts";

const useTasks = () => {
  return useContext(TaskContext);
}

export default useTasks;
