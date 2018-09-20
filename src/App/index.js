import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { add } from '../store/actions';
import { compose, withHandlers, withState } from 'recompose';

import App from './App';

const redux = connect(
  store => ({ todos: store.todos }),
  { add }
);

const handlers = withHandlers({
  addTodo: props => data => (props.add(data), props.handleChange('')),
});

const state = withState('input', 'handleChange', '');

export default compose(
  hot(module),
  redux,
  state,
  handlers,
)(App)
