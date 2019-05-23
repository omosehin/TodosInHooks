

export const TodoReducer = (TodoState, action) =>{
    switch(action.type){
        case 'DO_TODO':
        return TodoState.map(todo =>{
            if(todo.id === action.id){
            return{...todo,complete:true}}
            else return {
                todo
            }
        })
        case 'UNDO_TODO':
        return TodoState.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        });
      case 'ADD_TODO':
        return TodoState.concat({
          task: action.task,
          id: action.id,
          complete: false,
        });
        default:
        throw new Error(); 
    }
}