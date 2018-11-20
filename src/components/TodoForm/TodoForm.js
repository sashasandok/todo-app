// react

import React, { useState } from 'react'

// styles
import './TodoForm.css'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Tape new todo"
      />
    </form>
  )
}

export default TodoForm
