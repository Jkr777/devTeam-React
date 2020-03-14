import { ADD_ERROR, REMOVE_ERROR, RESET } from '../action_types';

const errorReducer = (state = {message: null}, action) => {
  switch(action.type) {
    case ADD_ERROR: 
      return {
        message: action.data
      };
    case REMOVE_ERROR:
      return {
        message: null
      };
    case RESET:
      return {
        message: null
      };
    default:
      return state;
  }
};

export default errorReducer;