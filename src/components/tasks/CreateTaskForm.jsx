import { useState }
from "react";

import {
 createTask
}
from "../../api/taskApi";

const CreateTaskForm=()=>{

 const [title,setTitle]=
 useState("");

 const handleSubmit=
 async(e)=>{

  e.preventDefault();

  await createTask({

   title,

   description:
   "Task Description"

  });

 };

 return (
  <form
   onSubmit={
    handleSubmit
   }
  >

   <label htmlFor="quick-task-title" className="mb-1.5 block text-sm font-semibold text-slate-700">
    Task title
   </label>
   <input
    id="quick-task-title"
    name="title"
    value={title}
    placeholder="Enter a task title"
    onChange={(e)=>
      setTitle(
       e.target.value
      )
    }
    className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
   />

   <button>
    Add Task
   </button>

  </form>
 );

};

export default CreateTaskForm;