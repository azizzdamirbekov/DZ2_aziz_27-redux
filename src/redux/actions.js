import { types } from "./types";

export function changeInputAction(value) {
  return {
    type: types.VALUE,
    payload: value,
  };
}

export function addUserAction(name) {
  return {
    type: types.USERS,
    payload: name,
  };
}

export function deleteAllAction() {
  return {
    type: types.DELETE_ALL,
    payload: [],
  };
}

export function NumberValueAction(value) {
  return {
    type: types.NUMBVALUE,  
    payload: value
  }
}

export function AddNumberAction(add) {
  return{
    type: types.ADD_NUMBER,
    payload: add
  }
}