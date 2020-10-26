import React from 'react'

const AddTodo = (props) => {
  return (
    <div>
      <input type="text" onChange={props.handleChange} value={props.newTodo} />
      <button onClick={props.addTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo
