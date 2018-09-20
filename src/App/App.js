import React from 'react';
import Todo from '../Todo';



const App = ({ todos, addTodo, input, handleChange, removeTodo, modifyTodo, confirmIsOpen }) => {
  return (
    <div>
      <div>
        <input type="text" value={input} onChange={e => handleChange(e.target.value)}/>
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
      <hr/>
      <div>
        {
          todos.map(todo => (<Todo key={todo.id} todo={todo}/>))
        }
      </div>
    </div>
  )
}

export default App;
