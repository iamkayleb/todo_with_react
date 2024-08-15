import { createContext, useContext, useState } from 'react'
import './App.css'
import AddedItems from './components/AddedItems'
import AddTodo from './components/AddTodo'
import Completed from './components/Completed'

export const TodoContext = createContext('')

function App() {
  const [input, setInput] = useState('')
  const [components, setComponents] = useState([])
  const [id, setId] = useState(0)
  
  
  return (
      <TodoContext.Provider value={{input, setInput, components, setComponents, id, setId}}>
        <AddTodo/>
        {components.map((component, index) => (
          <AddedItems key={Date.now()}/>
        ))}
        <Completed/>
      </TodoContext.Provider>

      
  )
}

export default App
