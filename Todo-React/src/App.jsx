import { Form, List, Filter, Footer } from './components'
import { useTodos } from './hooks/useTodos';
import {filters} from "./const/filters"

const initTodosValue = JSON.parse(localStorage.getItem('todos')) || [];
const initValueFilter = localStorage.getItem('filter') || 'all';

export default function App () {
  const {
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
  } = useTodos(initTodosValue, initValueFilter)

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
          {hasTodos ? (
            <>
              <List list={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
              <Footer
                completedTask={completedTodos.length}
                totalTask={totalTodos}
                onDeleteCompleted={deleteTodos}
              />
            </>
          ) : (
            <p>There are no tasks to show yet</p>
          )}
        </main>

      </div>
    </>
  )
}