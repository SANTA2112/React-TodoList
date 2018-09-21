import ModyfyTodo from './ModyfyTodo';
import { compose, withState, withHandlers } from "recompose";

const state = withState('text', 'handleChange', props => props.todo.text);

const handlers = withHandlers({
  onConfirm: props => obj => e => (e.preventDefault(), props.onConfirm(obj), props.onCancel())
})

export default compose(
  state,
  handlers,
)(ModyfyTodo);
