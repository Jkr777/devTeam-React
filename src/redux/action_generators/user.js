import { axiosInstance, setTokenHeader } from '../../services/axios';
import { SET_USER, RESET } from '../action_types';
import { addError, removeError } from './error';

const setUser = data => ({
  type: SET_USER,
  data
});

const resetState = () => ({
  type: RESET
});

export const logOut = () => dispatch => {
  localStorage.removeItem("devTeam-auth");
  dispatch(resetState());
};

export const setAuthToken = token => {
  setTokenHeader(token);
};

export const auth = (data, endPoint) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.post(`/${endPoint}`, data)
    .then(res => {
      localStorage.setItem("devTeam-auth", res.headers["x-auth"]);
      setAuthToken(res.headers["x-auth"]);
      dispatch(setUser(res.data));
      if(error.message) {
        dispatch(removeError())
      };
    })
    .catch(err => dispatch(addError(err.response.data)));
};

export const getUser = () => dispatch => {
  axiosInstance.get("/auth")
    .then(res => {
      dispatch(setUser(res.data));
    })
    .catch(() => dispatch(logOut()));
};