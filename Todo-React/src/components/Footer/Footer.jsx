import './Footer.css'
import { Button } from '../'
export function Footer({ completedTask, totalTask, onDeleteCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{completedTask}</strong> of <strong>{totalTask}</strong> tasks completed
      </span>
      <Button
      labelText='Delete completed'
      type='delete'
      onClick = {onDeleteCompleted}
    />
    </footer>
  );
}
