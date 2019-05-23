import React, {useReducer} from 'react'
import { todoReducer,initialTodos } from './todoReducer';
function UseCase1() {
  const [todos,dispatch] = useReducer(todoReducer,initialTodos)
    const handleChange = todo =>{
      dispatch({
        type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
        id:todo.id});
    };
  return (
    <ul>
        {
            todos.map(todo => (
              
                <li key = {todo.id}>
                    <label>
                        <input 
                            type = 'checkbox'
                            checked = {todo.complete}
                            onChange = {()=>handleChange(todo)} 
                        />
                        {todo.task}
                    </label>
                </li>
            ))
        }
    </ul>
  )
}


export default UseCase1

