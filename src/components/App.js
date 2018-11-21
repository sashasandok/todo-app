import React, { useEffect, useState } from 'react'
import './App.css'

import Todo from './Todo/Todo'
import TodoForm from './TodoForm/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    console.log('use effect', savedTodos)
    setTodos(JSON.parse(savedTodos))
  }, localStorage.getItem('todos'))

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const onSaveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  return (
    <div className="todo-block">
      <header>Todo app with React Hooks</header>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <p>You have no any 'todo' at the time :(</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <div className="save-btn-block">
            <button className="btn" onClick={onSaveTodos}>
              save todos
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
