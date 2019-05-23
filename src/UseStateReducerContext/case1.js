import React, { useState } from "react";
import uuid from 'uuid/v4';
const initialTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false
  }
];

const Case1 = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = e => {
    setTask(e.target.value);
  };
  const handleSubmit = e => {
    if (task) {
        setTodos(todos.concat({id:uuid(),task:'Learn '+ task,complete:false}));
    }
    setTask('');
    e.preventDefault();
  };

  const handleDelete = (todoId) =>{
    const DeleteTodo = todos.filter(tod=>tod.id !==todoId)
    setTodos(DeleteTodo)
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>{todo.task}</label>
            <button onClick = {()=>handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
        <input 
            type="text" 
            value={task}
            onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Case1;
