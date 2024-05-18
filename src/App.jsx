import Formulario from './components/Formulario.jsx'
import TaskBar from './components/TaskBar.jsx'
import Navbar from './components/Navbar.jsx'
import {useState} from 'react'
import { handleSubmit, handleInput} from './helpers/handlers.js'
import './styles/index.css'

function App() {
  const [hasTask, setHasTask] = useState(false)
  const [task, setTask] = useState([])
  // console.log(task)
  const [formInput, setFormInput] = useState({
    nombre:"",
    fecha:"",
    observacion:""
  })
  return (
    <div className='bg-indigo-900  h-screen'>
       <Navbar task={task}  setTask={setTask} hasTask={hasTask} setHasTask={setHasTask} />
     <div className=' flex items-center justify-evenly mt-[10%] '>
      <Formulario 
        formInput={formInput} 
        setFormInput={setFormInput}
        handleSubmit={e => handleSubmit(e,task,setTask,formInput,setFormInput)}
        handleInput={e => handleInput(e, setFormInput)}
      />

      <TaskBar task={task} setTask={setTask}  hasTask={hasTask} setHasTask={setHasTask}/>
      </div>
    </div>
  )
}

export default App
