import React from 'react'
import TodoList from './components/ToDoList.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App;