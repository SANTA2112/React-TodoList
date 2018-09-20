import Todo from './Todo';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { remove, modify } from '../store/actions';

const confirmState = withState('confirmIsOpen', 'handleConfirm', false);

const handlers = withHandlers({
  removeTodo: props => () => props.handleConfirm(true),
  modifyTodo: props => props.modify,
})

export default compose(
  connect(null, { remove, modify }),
  confirmState,
  handlers,
)(Todo);
