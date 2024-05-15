import { useState, useRef } from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ModalTaskContent from './ModalTaskContent';
import Completed from './Completed';
import TaskBin from './TaskBin';


const Navbar = ({task}) => {

  const [dialogContent, setDialogContent] = useState(null)

  const dialogRef = useRef(null)

  function toggleDialog () {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ?dialogRef.current.close()
      :dialogRef.current.showModal()
  }

  return (
    <div>
      <nav className=' w-full bg-indigo-700 h-[50px] flex items-center justify-center gap-5'>

        <button 
          onClick={() => {setDialogContent(<ModalTaskContent task={task}/>); toggleDialog()}}>  <FaTasks 
          className=" text-3xl text-white md:hidden"
        />  
          
        </button>

        <button 
          onClick={() => {setDialogContent(<Completed task={task}/>); toggleDialog()}}> <FaCalendarCheck 
          className=" text-3xl text-white "/> 
        </button>

        <button 
          onClick={() => {setDialogContent(<TaskBin task={task}/>); toggleDialog()}}> <FaTrashCan 
          className=" text-3xl text-white "/> 
        </button>

        
      <div className=''>
       <dialog ref={dialogRef} className=' h-[50%] min-w-[400px] p-2'>
         <button className=' flex flex-row-reverse text-3xl w-full m-0' onClick={() => toggleDialog()}>
          <IoMdClose/>
         </button>
         {dialogContent} 
        </dialog>
      </div>
      </nav>
      


    </div>

  )
}

export default Navbar