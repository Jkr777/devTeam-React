import { FETCH_PROFILES, RESET } from '../action_types';

const developersReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_PROFILES:
      return [...action.data];
    case RESET:
      state = [];
      return state;
    default:
      return state;
  }
};

export default developersReducer;