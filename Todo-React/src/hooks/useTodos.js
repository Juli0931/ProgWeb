import { useState, useEffect } from 'react'
export const useTodos = (initTodosValue, initValueFilter) => {
    const [todos, setTodos] = useState(initTodosValue)
  const [filter, setFilter] = useState(initValueFilter)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  };

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
    setFilter(filterValue)
  }

  const completedTodos = todos.filter((todo) => todo.completed)
  const totalTodos = todos.length
  const deleteTodos = () => {
    const updatedList = todos.filter((todo) => !todo.completed)
    setTodos(updatedList)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed
    } else if (filter === 'pending') {
      return !todo.completed
    } return todo})

    return{
        filter, 
        todos,
        createTodo,
        handleToggle,
        handleDelete,
        handleFilterChange,
        deleteTodos,
        filteredTodos,
        hasTodos,
        completedTodos,
        totalTodos
    }
}