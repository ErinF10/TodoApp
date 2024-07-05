import React from "react"
import {useState} from 'react'
import { Link } from 'react-router-dom';


// Import custom components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Greeter from "./components/Greeter"
import TodoItem from "./components/TodoItem"
import Joke from "./components/Joke"

// Import data and utility functions
import todoData from "./components/todoData"
import {encourage, pickRandomTask} from "./utils"

function App() {
  const [todos, setTodos] = useState(todoData)
  // const jokeComponents = jokesData.map(joke => <Joke 
  //   key={joke.id} question={joke.question} punchLine={joke.answer} />)
  // const todoComponents = todoData.map(todo => <TodoItem 
  //   key={todo.id} task={todo.text} completed={todo.completed} />)
  function handleChange(id) {
    setTodos(prevTodos => prevTodos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    }))
}
  const todoComponents = todos.map(item => (
    <TodoItem
        key={item.id}
        id={item.id}
        task={item.text}
        completed={item.completed}
        handleChange={handleChange}
    />
  ))
  
  
  
  return (
    
    <div>
      <Header/>
      <div className="greeter">
        <Greeter username="Erin"/>
      </div>
      <div className="button-container">
        <button onClick={encourage}>Need some encouragement?</button>
        <button onClick={() => pickRandomTask(todos)}>Pick a random task</button>
        <Link to="/user-info">
          <button>User Info</button>
        </Link>
      </div>
      <div className="todo-list">
        {todoComponents}
      </div>
      {/* <div className="jokes">
        {jokeComponents}
      </div> */}
      <div className="jokes">
        <Joke />
      </div>
      <Footer/> 
    </div>
  )
}

export default App