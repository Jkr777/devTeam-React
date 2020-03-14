import { NAV_CLICK } from '../action_types';

const defaultState = {
  clicked: false
};

const userInteractionReducer = (state=defaultState, action) => {
  switch(action.type) {
    case NAV_CLICK:
      return {
        clicked: !state.clicked
      };
    default:
      return state;
  }
};

export default userInteractionReducer;