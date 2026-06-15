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

   <input
    value={title}
    onChange={(e)=>
      setTitle(
       e.target.value
      )
    }
   />

   <button>
    Add Task
   </button>

  </form>
 );

};

export default CreateTaskForm;