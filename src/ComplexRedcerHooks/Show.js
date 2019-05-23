import React, {useReducer,useState} from 'react'
import uuid from 'uuid/v4';
import { ShowReducer } from './ShowReducer';
import { initialTodos } from './Task';

 const Show = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [filter, dispatchFilter] = useReducer(ShowReducer,'ALL')
    const [task, setTask] = useState('')
    console.log(todos)
    const handleShowAll = () =>{
        dispatchFilter({type:'SHOW_ALL'})
    }
    const handleShowComplete = () =>{
        dispatchFilter({type:'COMPLETE'})
    }
    const handleShowInComplete = () =>{
        dispatchFilter({type:'INCOMPLETE'}) 
    }
    const handleChangeCheckbox = (id) =>{
        setTodos(todos.map(todo =>{
            if(todo.id === id){
                return{...todo,complete:!todo.complete};
            }
            else {
                return todo
            }

        }));
        
    };

    const filteredTodos = todos && todos.filter(todo =>{
        if(filter === 'ALL'){
            return true;
        }
        if(filter === 'COMPLETE' && todo.complete){
            return true
        }
        if(filter === 'INCOMPLETE' && !todo.complete){
            return true;
        }
        return false;
    });


    const handleChangeInput =(e)=>{
        setTask(e.target.value)
    }

    const handleSubmit =(e)=>{
        if(task){
            setTodos(todos.concat({id:uuid(),task,complete:false}))
        }
        setTask('')
        e.preventDefault()
    }

    const deleteHandler = (id) => {
        const delTodo = todos.filter(todo=>todo.id !==id)
        setTodos(delTodo)
    }
    return(
        <div>
            <div>
                <h6>Complex Reducer</h6>
               <button onClick={handleShowAll} >Show All</button>
                <button onClick={handleShowComplete} >Show Complete</button>
                <button onClick={handleShowInComplete} >Show InComplete</button>
            </div>
            <ul>          
            
            {filteredTodos && filteredTodos.map(todo =>(
                    <li key = {todo.id}>
                        <label>
                            <input
                                type = "checkbox"
                                checked ={todo.complete}
                                onChange = {() =>handleChangeCheckbox(todo.id)}
                            />
                            {todo.task}
                            <button type ='button' onClick = {()=>deleteHandler(todo.id)}>Delete</button>
                        </label>
                    </li>
                ))
            }
            </ul>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    value = {task}  
                    onChange = {handleChangeInput}  
                />
                <button type = "submit">Add Todo</button>
            </form>
        </div>

    );
}
export default Show;