import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { add, modify, remove } from '../store/actions';
import { compose, withHandlers, withState } from 'recompose';

import App from './App';

const redux = connect(
  store => ({ todos: store.todos }),
  { add, remove, modify }
);

const handlers = withHandlers({
  addTodo: props => data => (props.add(data), props.handleChange('')),
  removeTodo: props => () => props.handleConfirm(true),
  modifyTodo: props => props.modify,
});

const state = withState('input', 'handleChange', '');
const confirmState = withState('confirmIsOpen', 'handleConfirm', false)

export default compose(
  hot(module),
  redux,
  confirmState,
  state,
  handlers,
)(App)
