import { ADD, MODIFY, REMOVE } from "./constants";
import { v4 as genId } from 'uuid';

export const add = (text) => ({ type: ADD, payload: { text, id: genId() } });

export const remove = id => ({ type: REMOVE, id });

export const modify = payload => ({ type: MODIFY, payload })
