import React from 'react'

const Input = ({type, placeholder, name, attr , value, onChange, label}) => {
 
  return (
    <>
      {attr === "text" || attr === "date" ? 
        <div className=' mb-3 bg-gray-300 rounded-xl text-center'>
          <label className=' text-2xl bg-none' htmlFor={label}>{label}</label>
          <input className=' bg-white rounded-md mb-2 mt-2 w-[90%] '
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
       : <div className=' mb-3 bg-gray-300 rounded-xl  text-center'>
          <label className=' text-2xl bg-none cursor-pointer' htmlFor={label}>{label}</label>
          <textarea className=' bg-white rounded-md mt-2 w-[90%] '
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
       </div>
      }
    </>
  )
}

export default Input