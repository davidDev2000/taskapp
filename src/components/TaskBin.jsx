import TaskBotones from './TaskBotones';
import { useState } from 'react'
import { FaArrowDownWideShort } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io"


const TaskBin = ({task}) => {

  const [showTask, setShowTask] = useState({})
  const toggleTask = (taskId) => {
    setShowTask((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId]
    }));
  };

  return (
    <div>
      {
        task.filter(task => task.paperBin === true).map(task => (
          <div key={task.id} className='mb-2'>
            <div className=' flex items-center justify-between border-black border-4  rounded-xl'>
              <article className='p-2 font-bold italic mb-4 text-indigo-700'> {task.nombre} </article>
              <FaArrowDownWideShort className=' text-2xl cursor-pointer mr-4' value={showTask} onClick={() => {toggleTask(task.id)}}/>
            </div>
            
            {
              showTask[task.id] &&
              <div className=''>
                <IoMdClose className=' text-2xl float-end mr-2 cursor-pointer' onClick={() => {toggleTask(task.id)}}/>
                <p className=' p-2'> <span className=' italic'>Entregar antes de:</span> <span className=' text-sky-500'>{task.fecha}</span> </p>
                <p className=' p-2'> <span className=' italic'>Observacion/Nota:</span> <span className=' text-sky-500'>{task.observacion}</span> </p>
                <TaskBotones task={task}/>
              </div> 
            }
            
          </div>
        ))
      }
    </div>
  )
}

export default TaskBin