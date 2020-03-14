import { ADD_ERROR, REMOVE_ERROR } from '../action_types';

export const addError = data => ({
  type: ADD_ERROR,
  data
});

export const removeError = () => ({
  type: REMOVE_ERROR
});