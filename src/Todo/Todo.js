import React from 'react';
import { createPortal } from 'react-dom'
import styled from 'styled-components';
import { Button, ButtonWrap, Text, Wrapper } from "./styled";

const WrapperC = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
`;

const Confirm = ({ onCancel, onConfirm }) => {
  return createPortal(
    (
      <WrapperC>
        <div>
          Удалить?
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </WrapperC>),
      document.body
  );
}

export default ({ todo, confirmIsOpen, removeTodo, handleConfirm, remove }) => (
  <Wrapper>
    <Text>{todo.text}</Text>
    <ButtonWrap>
      <Button onClick={() => removeTodo(todo.id)}>Del</Button>
      <Button onClick={() => modifyTodo({ id: todo.id, text: prompt(todo.text) })}>Modify</Button>
    </ButtonWrap>
    {
      confirmIsOpen && <Confirm onCancel={() => handleConfirm(false) } onConfirm={() => remove(todo.id)} />
    }
  </Wrapper>
);
