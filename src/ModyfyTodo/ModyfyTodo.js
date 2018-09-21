import React from 'react';
import { createPortal } from 'react-dom';
import { Wrapper, Wrap, Button } from "../RemoveTodo/styled";
import { Input, ButtonWrap } from "./styled";

export default ({ onCancel, onConfirm, handleChange, text, todo }) => createPortal(
  (
    <Wrapper>
      <Wrap>
        <form onSubmit={onConfirm({ id: todo.id , text})}>
          <Input value={text} onChange={e => handleChange(e.target.value)}/>
          <ButtonWrap>
            <Button>Ок</Button>
            <Button onClick={onCancel}>Отмена</Button>
          </ButtonWrap>
        </form>
      </Wrap>
    </Wrapper>
  ),
  document.body
);
