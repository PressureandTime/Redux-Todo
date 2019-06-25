import uuid from 'uuid';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';

export function addNewTodo(payload) {
  return {
    type: ADD_NEW_TODO,
    payload: {
      id: uuid(),
      todo: payload,
      isCompleted: false
    }
  };
}

export function markComplete(id) {
  return { type: MARK_COMPLETE, payload: id };
}
