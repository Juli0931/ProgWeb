import { Button } from '../'
import './List.css'
export function List ({list, onToggle, onDelete}) {
  const handleToogle = (data) => onToggle(data)
  const handleDelete = (id) => onDelete(id)
  return (
    <ul className='list'>
      {
        list.map( item =>
          <ListItem 
          onToggle={handleToogle}
          onDelete={handleDelete}
          key={item.id}
          todo={item} 
          />
        )
      }
    </ul>
  )
}

export function ListItem({todo, onToggle, onDelete}) {
  const {id, title, completed} = todo

  const handleChange = ({target}) => {
    const {checked} = target;
    onToggle({id, completed: checked})
  }

  const handleDelete = () =>{
    console.log(id);
    onDelete(id);
  }

  return (
    <li key={id} className='list-item'>
    <div>
      <label className="containerList">
        <input type="checkbox" checked={completed} onChange={handleChange}/>
        <div className="checkmark"></div>
      </label>
    </div>
    <DashedTodo isCompleted={completed}>
      <h3>{title}</h3>
    </DashedTodo>
    <Button
      labelText='Delete'
      type='delete'
      onClick = {handleDelete}
    />
  </li>
  )
}

function DashedTodo({children, isCompleted}) {
  if (isCompleted) {
    return(
      <del>
        {children}
      </del>
    )
  }
  return children
}
