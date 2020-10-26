import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
