import { useState } from 'react'
import { Form, List, Filter } from './components'

export default function App () {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const filters = [
    {
      id: crypto.randomUUID(),
      label: 'All',
      value: 'all'
    },
    {
      id: crypto.randomUUID(),
      label: 'Completed',
      value: 'completed'
    },
    {
      id: crypto.randomUUID(),
      label: 'Pending',
      value: 'pending'
    }
  ]

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  }

  const hasTodos = todos.length > 0

  const handleToggle = (data) => {
    const updatedList = todos.map((item) =>
      item.id === data.id ? { ...item, completed: data.completed } : item
    );
    setTodos(updatedList); 
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((item) => item.id !== id );
    setTodos(updatedList);
  }

  const handleFilterChange = (filterValue) => {
    console.log(filterValue)
    setFilter(filterValue)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed
    } else if (filter === 'pending') {
      return !todo.completed
    } return todo})

  return (
    <>
      <h1>Todo List</h1>
      <div className='container'>
        <header className='header'>
          <Form onSubmit={createTodo} />
        </header>
        <Filter
          filters={filters}
          onChange={handleFilterChange}
          currentValue={filter}
        />
        <main>
          {
           hasTodos
             ? <List list={filteredTodos} onToggle={handleToggle} onDelete={handleDelete}/>
             : <p>There are no tasks to show yet</p>
          }

        </main>
      </div>
    </>
  )
}

//TODO: Create a footer components that shows the number of completed tasks (x of y) and a btn to delete all the completed.