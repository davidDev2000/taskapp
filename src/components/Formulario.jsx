import Input from "./Input"
import '../styles/index.css'

const Formulario = ({ formInput, handleSubmit, handleInput }) => {
  return (
    <div className="formContainer">
    <form className=" bg-black max-w-[300px] ml-2 rounded-md p-4 flex flex-col justify-center items-center formMedia" onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Formulario