import Task from "./Task"

const TaskBar = ({task}) => {
  return (
    <div className=' w-[60%] border border-black h-screen bg-white'>
      <Task task={task}/>
    </div>
  )
}

export default TaskBar