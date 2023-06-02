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

  const addTodo = (text, category) => {

    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodo);

  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo}/>
        ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
      
  )
}

export default App
