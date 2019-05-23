import React, {useReducer} from 'react';
import  uuid  from 'uuid/v4';
import {TodoReducer} from './TodoReducer' 
import {dataFetchReducer} from './DataFetching' 
const Todo = () => {
    const [TodoState,dispatch] = useReducer(TodoReducer);
    const [fetchingstate, dispatchv] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        // data: initialData,
      });

    //   console.log(fetchingstate)
// const handleSubmit = event => {
//     dispatch({ type: 'ADD_TODO', task, id: uuid() });
//   };
  
  const handleChange = () => {
    // dispatch({
    //   type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
    //   id: todo.id,
    // });
  };

    return(
    <div>
        {TodoState.map(todo =>(
            <div>
            <input 
            key ={todo.id}
            type ='checkbox'
            checked ={todo.complete}
            onChange ={()=>handleChange(todo.id)}
        />
        {todo.Title}
            </div>
          
        ))}
     </div>
);
}
export default Todo;