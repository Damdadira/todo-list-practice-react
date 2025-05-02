import { useReducer } from 'react'
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initTodoList);

  const handleAdd = (item) => {
    dispatch({ type: 'add', item });
  }

  return (
    <section>
      <ul>
        { 
          todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

function reducer(todos, action) {
  switch(action.type){
    case 'add': {
      return [ ...todos, action.item ]
    }
    case 'remove': {
      return []
    }
  }
}

const initTodoList = [
  { id: 1, text: '장보기', active: true },
  { id: 2, text: '공부하기', active: true },
];