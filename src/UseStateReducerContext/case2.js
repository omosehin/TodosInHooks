import React, {useState} from 'react'
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
  
const CaseB = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeCheckbox = id => {
    let mapTodo =  todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    })
    setTodos(mapTodo)
  };


  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseB;