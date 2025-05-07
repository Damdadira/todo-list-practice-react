import { HiTrash } from "react-icons/hi2"
import styles from './Todo.module.css'

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
    <li className={styles.todo}>
      <input 
        className={styles.checkbox}
        type="checkbox" 
        id='checkbox' 
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleRemove}>
          <HiTrash  />
        </button>
      </span>
    </li>
  )
}