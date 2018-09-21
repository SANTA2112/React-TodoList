import React from 'react';
import Todo from '../Todo';
import image from '../_assets/images/1_o-9xgkkyBgkhnBVN_Wxs6Q.png';
import { Form, Group, GroupInput, GroupLabel, GroupSpan, GroupSpan2, Header, Wrapper, MainWrap, Todos } from "./styled";



const App = ({ todos, addTodo, input, handleChange }) => (
  <MainWrap>
    <Wrapper>
      <img src={image} alt="image" height='210'/>
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

export default App;
