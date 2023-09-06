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
  const {id, title, complete} = todo

  const handleChange = ({target}) => {
    const {checked} = target;
    onToggle({id, complete: checked})
  }

  const handleDelete = () =>{
    console.log(id);
    onDelete(id);
  }

  return (
    <li key={id} className='list-item'>
    <div>
      <label className="containerList">
        <input type="checkbox" checked={complete} onChange={handleChange}/>
        <div className="checkmark"></div>
      </label>
    </div>
    <h3>{title}</h3>
    <Button
      labelText='Delete'
      type='delete'
      onClick = {handleDelete}
    />
  </li>
  
  )
}
