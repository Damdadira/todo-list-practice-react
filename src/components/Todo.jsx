import { HiTrash } from "react-icons/hi2";

export default function Todo({ todo, onUpdate, onRemove }) {
  const { text, active } = todo;

  const handleChange = (e) => {
    onUpdate({ ...todo, active: e.target.checked });
  }
  const handleRemove = () => {
    onRemove(todo);
  }

  return(
    <li>
      <input 
        type="checkbox" 
        id='checkbox' 
        checked={active === true}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleRemove}><HiTrash  /></button>
    </li>
  )
}