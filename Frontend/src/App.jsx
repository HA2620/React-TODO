import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/TodoList'

function App() {
  const [todos , setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })
  

  return (
 
      <div>
        <CreateTodo></CreateTodo>
        <TodoList todos={todos} ></TodoList>
      </div>
      
  )
}

export default App
