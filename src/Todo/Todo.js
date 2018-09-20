import React from 'react';
import { createPortal } from 'react-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
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
      <Wrapper>
        <div>
          Удалить?
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </Wrapper>),
      document.body
  );
}

export default ({ todo, confirmIsOpen, removeTodo, handleConfirm, remove }) => (
  <div>
    <div>{todo.text}</div>
    <button onClick={() => removeTodo(todo.id)}>Del</button>
    <button onClick={() => modifyTodo({ id: todo.id, text: prompt(todo.text) })}>Modify</button>
    {
      confirmIsOpen && <Confirm onCancel={() => handleConfirm(false) } onConfirm={() => remove(todo.id)} />
    }
  </div>
);
