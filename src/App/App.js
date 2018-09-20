import React from 'react';
import Todo from '../Todo';
import { Form, Group, GroupInput, GroupLabel, GroupSpan, GroupSpan2, Header, Wrapper, MainWrap, Todos } from "./styled";



const App = ({ todos, addTodo, input, handleChange }) => {
  return (
    <MainWrap>
      <Wrapper>
        <Header>Todo-list</Header>
        <Form onSubmit={e => { e.preventDefault(); addTodo(input) }}>
          <Group>
            <GroupInput type="text" value={input} onChange={e => handleChange(e.target.value)}/>
            <GroupSpan />
            <GroupSpan2 />
            <GroupLabel>Title</GroupLabel>
          </Group>
        </Form>
        <Todos>{ todos.map(todo => (<Todo key={todo.id} todo={todo}/>)) }</Todos>
      </Wrapper>
    </MainWrap>
  )
}

export default App;
