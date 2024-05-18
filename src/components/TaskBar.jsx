import Task from "./Task"
import '../styles/index.css'
import { useState } from "react"

const TaskBar = ({task, setTask, hasTask, setHasTask}) => {

  return (
    
    
    <div className='w-[60%] min-h-[300px] rounded-xl  bg-white p-3 taskMedia' defaultValue={hasTask}>
      {
        task.length > 0 ? <Task task={task} setTask={setTask} setHasTask={setHasTask} /> : <h1 className=" capitalize font-bold text-4xl text-center">No hay tareas que cumplir</h1>
      }
      
    </div>
  )
}

export default TaskBar