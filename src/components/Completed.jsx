import TaskBotones from './TaskBotones';
import { useState } from 'react'
import { reset, toBin } from '../helpers/handlers';
import { FaArrowDownWideShort } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io"

const Completed = ({task, setHasTask, toggleDialog}) => {
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
        task.filter(task => task.complete === true).map(task => (
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
                <div className=' flex'>
                <TaskBotones type={"button"} text={"Volver a Tareas"} className={"w-full bg-green-500 rounded-xl"} onClick={() => {reset(task);toggleTask(task.id);setHasTask(true);toggleDialog()}}/>
                <TaskBotones type={"button"} text={"Papelera"} className={"w-full bg-red-500 rounded-xl"} onClick={() => {toBin(task);toggleTask(task.id);toggleDialog()}}/>
              </div> 
                </div>
            }
            
          </div>
        ))
      }
    </div>
  )
}

export default Completed