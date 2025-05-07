import { useReducer } from 'react'
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList({ filter }) {
  const [todos, dispatch] = useReducer(reducer, initTodoList);

  const handleAdd = (item) => dispatch({ type: 'add', item });
  const handleUpdate = (item) => dispatch({ type: 'update', item });
  const handleRemove = (item) => dispatch({ type: 'remove', item });

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
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

const initTodoList = [
  { id: 1, text: '장보기', status: 'active' },
  { id: 2, text: '공부하기', status: 'completed' },
];