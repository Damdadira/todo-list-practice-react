import { HiTrash } from "react-icons/hi2";

export default function Todo({ todo, onUpdate, onRemove }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }
  const handleRemove = () => {
    onRemove(todo);
  }

  return(
    <li>
      <input 
        type="checkbox" 
        id='checkbox' 
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleRemove}><HiTrash  /></button>
    </li>
  )
}