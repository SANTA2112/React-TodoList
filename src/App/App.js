import React from 'react';

const Confirm = () => (
  <div>
    Удалить?
    <button>Yes</button>
    <button>No</button>
  </div>
);

const App = ({ todos, addTodo, input, handleChange, removeTodo, modifyTodo, confirmIsOpen }) => (
  <div>
    <div>
      <input type="text" value={input} onChange={e => handleChange(e.target.value)}/>
      <button onClick={() => addTodo(input)}>Add</button>
    </div>
    <hr/>
    <div>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => removeTodo(todo.id)}>Del</button>
            <button onClick={() => modifyTodo({ id: todo.id, text: prompt(todo.text) })}>Modify</button>
          </div>
          )
        )
      }
    </div>
    {
      confirmIsOpen &&  <Confirm />
    }
  </div>

)

export default App;
