import React from 'react';
import RemoveTodo from '../RemoveTodo';
import ModyfyTodo from '../ModyfyTodo';
import { Button, ButtonWrap, Text, Wrapper } from "./styled";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faEdit);

export default ({ todo, confirmIsOpen, removeTodo, handleConfirm, remove, modifyTodo, confirmIsModify, modify, handleModify }) => (
  <Wrapper>
    <Text>{todo.text}</Text>
    <ButtonWrap>
      <Button onClick={() => removeTodo(todo.id)}>
        <FontAwesomeIcon icon="trash" />
      </Button>
      <Button onClick={() => modifyTodo({ id: todo.id, text: todo.text })}>
        <FontAwesomeIcon icon="edit" />
      </Button>
    </ButtonWrap>
    { confirmIsOpen && <RemoveTodo onCancel={() => handleConfirm(false) } onConfirm={() => remove(todo.id) } /> }
    { confirmIsModify && <ModyfyTodo onCancel={() => handleModify(false) } onConfirm={modify} todo={todo} /> }
  </Wrapper>
);
