import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  addTodo = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.newTodo],
      newTodo: ''
    }))
  }

  handleNewTodo = (event) => {
    // console.log(event.target)
    this.setState((prevState) => ({
      newTodo: event.target.value
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <AddTodo
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
          handleChange={this.handleNewTodo}
        />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
