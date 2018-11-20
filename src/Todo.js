import React from 'react'

function Todo({ todo, id, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        color: todo.isCompleted ? 'rgb(196, 108, 80)' : 'gray',
      }}>
      <p className="todo-text">{todo.text}</p>
      <div>
        <button
          onClick={() => completeTodo(index)}
          style={{
            backgroundColor: todo.isCompleted
              ? 'rgb(196, 108, 80)'
              : 'rgb(107, 153, 78)',
          }}
          className="btn">
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
