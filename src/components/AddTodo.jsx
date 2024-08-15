import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../App'

function AddTodo() {
    const {setInput, input, components, setComponents, id, setId} = useContext(TodoContext)
    const [typedInput, getTypedInput] = useState('')

  return (
    <div className='add-items'>
         <form action="">
            <input className="add-items-input" type="text" placeholder='Add Item' onChange={(e)=> getTypedInput(event.target.value)}/>
        </form>
        <button onClick={()=> {
            setInput(typedInput)
            setComponents([...components, setInput])
            console.log(components)
        }}>Add</button>
    </div>
   
    
  )
}

export default AddTodo