import React from 'react'

const TaskBotones = ({task, setTask}) => {

  const taskCompleted = (task) => (
     task.complete = true,
     task.paperBin = false
  )
    
  
  const toBin = (task) => (
    task.paperBin = true,
    task.complete = false
  )
  

  return (
    <div className='flex'>
        <button className=' w-full m-2 rounded-xl bg-green-400' onClick={() => {taskCompleted(task)}}>Completar</button>
        <button className='w-full m-2 rounded-xl bg-red-600' onClick={() => {toBin(task)}}>papelera</button>
    </div>
  )
}

export default TaskBotones