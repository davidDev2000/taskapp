import Formulario from './components/Formulario.jsx'
import TaskBar from './components/TaskBar.jsx'
import {useState} from 'react'
import { handleSubmit, handleInput } from './helpers/handlers.js'

function App() {
  const [task, setTask] = useState([])
  const [formInput, setFormInput] = useState({
    nombre:"",
    fecha:"",
    observacion:""
  })
  return (
    <div className=' flex justify-around items-center bg-indigo-900'>
    <Formulario 
      formInput={formInput} 
      setFormInput={setFormInput}
      handleSubmit={e => handleSubmit(e,task,setTask,formInput,setFormInput)}
      handleInput={e => handleInput(e, setFormInput)}
    />

    <TaskBar task={task}/>

    </div>
  )
}

export default App
