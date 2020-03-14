import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import error from '../reducers/error';
import user from '../reducers/user';
import profile from '../reducers/profile';
import post from '../reducers/post';
import developers from '../reducers/developers';
import userInteraction from '../reducers/userInteraction';

export default () => {
  const store = createStore(combineReducers({
    error,
    user,
    profile,
    developers,
    userInteraction,
    post
  }), composeWithDevTools(applyMiddleware(thunk)));
  return store;
};