import React from 'react';
import { createPortal } from 'react-dom';
import { Wrapper, Header, Button, Wrap } from "./styled";

export default ({ onCancel, onConfirm }) => {

  return createPortal(
    (
      <Wrapper>
        <Wrap>
          <Header>Удалить?</Header>
          <div>
            <Button onClick={onConfirm}>Yes</Button>
            <Button onClick={onCancel}>No</Button>
          </div>
        </Wrap>
      </Wrapper>
    ),
      document.body
  );
}
