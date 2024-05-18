
const TaskBotones = ({type,text,onClick,className}) => {

  
  return (
        <button type={type} text={text} onClick={onClick} className={className}> {text} </button>
  )
}

export default TaskBotones