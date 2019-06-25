import uuid from 'uuid';
import { ADD_NEW_TODO, MARK_COMPLETE } from '../actions/actions';

const initialState = {
  todos: [
    {
      id: uuid(),
      todo: 'reading',
      isCompleted: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  console.log('this is the action', action);
  console.log('this is the state', state);

 

  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = state.todos.concat(action.payload);
  
      return {
        ...state,
        todos: newTodo
      };

    case MARK_COMPLETE:
      const newItems = state.todos.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        }
        return item;
      });

      return {
        ...state,
        todos: newItems
      };

    default:
      return state;
  }
};

export default reducer;
