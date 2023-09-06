import './Button.css'

export function Button ({ onClick, labelText, type }) {
  return (
    <button
      className={`${type}-btn`}
      type='button'
      onClick={onClick}
    >
      {labelText}
    </button>
  )
}
