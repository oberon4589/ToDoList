import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade de adicionar tarefas',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ])

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <ToDo todo={todo}/>
        ))}
      </div>
      <ToDoForm />
    </div>
      
  )
}

export default App
