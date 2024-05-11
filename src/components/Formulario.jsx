import Input from "./Input"

const Formulario = ({ formInput, handleSubmit, handleInput }) => {
  return (
    <form className=" bg-black max-w-[300px] rounded-md p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      <h1 className="text-3xl bg-black text-gray-300 mb-4">Registrar Tareas</h1>
      <Input
        attr={"text"}
        type={"text"}
        name="nombre"
        placeholder={"escribe algo"}
        label={"Tarea por hacer"}
        value={formInput.nombre}
        onChange={handleInput}
      />
      <Input
        attr={"date"}
        type={"date"}
        name="fecha"
        placeholder={"escribe algo"}
        label={"Entregar antes de"}
        value={formInput.fecha}
        onChange={handleInput}
      />
      <Input
        attr={"textarea"}
        type={"text"}
        name="observacion"
        placeholder={"escribe algo"}
        label={"Observacion"}
        value={formInput.observacion}
        onChange={handleInput}
      />
      <button className=" bg-gray-300 rounded-xl p-2 text-2xl w-[100%]" type="submit">Agregar</button>
    </form>
  )
}

export default Formulario