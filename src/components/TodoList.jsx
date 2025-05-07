import { useEffect, useReducer } from 'react'
import AddTodo from './AddTodo';
import Todo from './Todo';
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
  /**
   * 상태가 변경될때도 readTodosFromLocalStorage 함수가 호출되고 있어서 콜백함수로 관리
   * 초기 렌더링 시 단 한번만 실행
   */
  const [todos, dispatch] = useReducer(reducer, undefined, () => readTodosFromLocalStorage());

  const handleAdd = (item) => dispatch({ type: 'add', item });
  const handleUpdate = (item) => dispatch({ type: 'update', item });
  const handleRemove = (item) => dispatch({ type: 'remove', item });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        { 
          filtered.map(todo => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              onUpdate={handleUpdate}
              onRemove={handleRemove}>
            </Todo> 
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter)
}

function reducer(todos, action) {
  const { item } = action;
  switch(action.type){
    case 'add': {
      return [ ...todos, item ]
    }
    case 'remove': {
      return todos.filter(todo => todo.id !== item.id)
    }
    case 'update': {
      return todos.map(todo => todo.id === item.id ? item : todo )
    }
  }
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

const initTodoList = [
  { id: 1, text: '장보기', status: 'active' },
  { id: 2, text: '공부하기', status: 'completed' },
];