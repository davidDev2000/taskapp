
import Task from './Task';

const ModalTaskContent = ({task}) => {

  return (
    <div>
        {
          task.length > 0 ? <Task task={task}/> : <h1 className=" capitalize font-bold text-4xl text-center">No hay tareas que cumplir</h1>
        }
    </div>
  )
}

export default ModalTaskContent