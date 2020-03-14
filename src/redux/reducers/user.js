import { SET_USER, RESET } from '../action_types';

const defaultState = {
  auth: false
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        auth: true,
        ...action.data
      };
    case RESET:
      state = defaultState;
      return state;
    default:
      return state;
  }
};

export default userReducer;