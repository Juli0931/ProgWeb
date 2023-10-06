import './Button.css'
import { useApp } from "../../hooks/useApp";

export function Button({ title }) {
  const { handleBtn } = useApp();

  return (
    <div>
      <button
        onClick={handleBtn}
      ><span>
        {title}
      </span>
      </button>
    </div>
  );
}
