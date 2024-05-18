export function handleSubmit(e, task, setTask, formInput, setFormInput) {
    e.preventDefault()

    const newTask = {
      ...formInput,
      id: crypto.randomUUID(),
      complete: false,
      paperBin: false
    };

    setTask([...task, newTask])
    setFormInput({
      nombre:"",
      fecha:"",
      observacion:"",
    })

    // console.log(task)
  }



export function handleInput(e, setFormInput) {
    const { name, value } = e.target;
    setFormInput(prevState => ({
      ...prevState,
      [name]: value
    }));
}

export const taskCompleted = (task) => (
  task.complete = true,
  task.paperBin = false
)
 

export const toBin = (task) => (
 task.paperBin = true,
 task.complete = false
)

export const reset = (task) => {
  task.complete = false
  task.paperBin = false
}

export const eliminarTarea = (task, setTask, taskID) => {
  const tareasActualizadas =   [task].filter(t => t.id !== taskID)
  setTask(tareasActualizadas)
  }