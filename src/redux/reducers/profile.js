import { SET_PROFILE, FETCH_PROFILE, SET_EXPERIENCE, REMOVE_EXPERIENCE, CLEAR_DEV, RESET } from '../action_types';

const profileReducer = (state = {skills: []}, action) => {
  switch(action.type) {
    case SET_PROFILE:
    case SET_EXPERIENCE:
      return { ...action.data };
    case REMOVE_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter(e => e._id !== action.data)
      };
    case FETCH_PROFILE:
      return {
        ...state,
        dev: action.data
      };
    case CLEAR_DEV: 
      return {
        ...state,
        dev: null
      };
    case RESET:
      return {
        skills: []
      };
    default:
      return state;
  }
};

export default profileReducer;