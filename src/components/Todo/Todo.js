// react
import React from 'react'

// styles
import './Todo.css'

function Todo({ todo, id, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        color: todo.isCompleted ? 'rgb(210, 63, 63)' : 'white',
      }}>
      <p className="todo-text">{todo.text}</p>
      <div>
        <button onClick={() => completeTodo(index)} className="btn">
          {todo.isCompleted ? 'Not done' : 'Done'}
        </button>
        <button onClick={() => removeTodo(index)} className="btn">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
