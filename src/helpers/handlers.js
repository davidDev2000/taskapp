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

