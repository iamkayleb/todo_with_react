import React, { useContext } from 'react'
import { TodoContext } from '../App'

function AddedItems() {
    const {input} = useContext(TodoContext)
  return (
    <div className="added-item">
       <input type="checkbox" name="" />
       <p>{input}</p>
    </div>
  )
}

export default AddedItems