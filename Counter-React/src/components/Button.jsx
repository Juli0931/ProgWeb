import "./Styles/Button.css"
export function Button(props) {
    const {handle, tittle} = props;
  return (
    <div>
      <button onClick={handle}>{tittle}</button>
    </div>
  );
}

