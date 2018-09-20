import { ADD, MODIFY, REMOVE } from './../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADD: return [...state, action.payload];
    case REMOVE: return state.filter(({ id }) => id !== action.id );
    case MODIFY: return state.map(todo => {
      if (action.payload.id !== todo.id) return todo;
      return action.payload;
    });
    default: return state;
  }
}
