import './Filter.css'

// ! The filter doesn't work. Debug before class.
// TODO: Check the handleChange in the App.jsx
export function Filter ({ onChange, currentValue, filters }) {
  const handleChange = ({ target }) => {
    onChange(target.value)
  }
  return (
    <ul className='filters'>
      {
            filters.map(({ id, value, label }) => {
              return (
                <li key={id}>
                  <input
                    type='radio'
                    id={id}
                    value={value}
                    onChange={handleChange}
                    checked={(currentValue === value)}
                  />
                  <label htmlFor={id}>{label}</label>
                </li>
              )
            })
        }
    </ul>
  )
}