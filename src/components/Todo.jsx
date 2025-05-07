import { HiTrash } from "react-icons/hi2"
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onRemove }) {
  const { id, text, status } = todo;

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
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleRemove}>
          <HiTrash  />
        </button>
      </span>
    </li>
  )
}