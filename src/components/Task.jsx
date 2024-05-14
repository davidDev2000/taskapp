import { useState } from 'react'
import { FaArrowDownWideShort } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Task = ({task}) => {

  const [showTask, setShowTask] = useState({})

  const toggleTask = (taskId) => {
    setShowTask((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId]
    }));
  };

  return (
    <div className=' rounded-xl flex flex-col'>
      { 
        task.map(task => (
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

                <div className='flex'>
                  <button className=' w-full m-2 rounded-xl bg-green-400'>Completar</button>
                  <button className='w-full m-2 rounded-xl bg-red-600'>papelera</button>
                </div>
              </div> 
            }
            
          </div>
        ))
      }
    </div>
  )
}

export default Task