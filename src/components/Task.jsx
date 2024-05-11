import React from 'react'

const Task = ({task}) => {
  return (
    <div className=' bg-gray-200'>
      { 
        task.map(task => (
          <div key={task.id} className='mb-2'>

            <article className=' text-center'> {task.nombre} </article>

            <div className=''>
              <p className=''> <span className=' italic'>Entregar antes de:</span> <span className=' text-sky-500'>{task.fecha}</span> </p>
              <p className=''> <span className=' italic'>Observacion/Nota:</span> <span className=' text-sky-500'>{task.observacion}</span> </p>

              <div className='flex'>
                <button className=' w-full bg-green-400'>Completar</button>
                <button className='w-full bg-red-600'>papelera</button>
              </div>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Task