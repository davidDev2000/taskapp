import Task from "./Task"
import '../styles/index.css'

const TaskBar = ({task, setTask}) => {
  return (
    <div className='w-[60%] min-h-[300px] rounded-xl  overflow-y-scroll bg-white p-3 taskMedia'>
      {
        task.length > 0 ? <Task task={task} setTask={setTask}/> : <h1 className=" capitalize font-bold text-4xl text-center">No hay tareas que cumplir</h1>
      }
      
    </div>
  )
}

export default TaskBar