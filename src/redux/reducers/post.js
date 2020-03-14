import { SET_POST, REMOVE_POST, SET_POSTS, LIKE_POST, UNLIKE_POST, SET_COMMENT, REMOVE_COMMENT, CLICKED_POST, RESET } from '../action_types';

const defaultState = {clicked: {userId: {}, comments: []}, posts: []}

const postReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_POST:
      return {
        ...state,
        posts: [action.data, ...state.posts]
      };
    case SET_POSTS:
      return {
        ...state, 
        posts: [...action.data]
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(e => e._id !== action.data)  
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(e => {
          if(e._id === action.data.postId) {
            return {
              ...e,
              likes: [...e.likes, action.data.userId]
            };
          } else {
            return {...e};
          }
        })
    };
    case UNLIKE_POST:
      return {
        ...state,
        posts: state.posts.map(e => {
          if(e._id === action.data._id) {
            return {
              ...e,
              likes: [...action.data.likes]
            };
          } else {
            return {...e};
          }
        })
      };
    case CLICKED_POST:
      return {
        ...state,
        clicked: {...action.data}
      };
    case SET_COMMENT: 
      return {
        ...state,
        clicked: {...state.clicked, comments: [action.data, ...state.clicked.comments]}
      };
    case REMOVE_COMMENT: 
      return {
        ...state,
        clicked: {...state.clicked, comments: [...action.data.comments]}
      };
    case RESET:
      state = defaultState;
      return state;
    default:
      return state;
  }
};

export default postReducer;