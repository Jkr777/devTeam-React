import { axiosInstance } from '..//../services/axios';
import { SET_PROFILE, FETCH_PROFILE, FETCH_PROFILES, SET_EXPERIENCE, REMOVE_EXPERIENCE, CLEAR_DEV } from '../action_types';
import { addError, removeError } from '../action_generators/error';
import { logOut } from './user';

export const setProfile = data => ({
  type: SET_PROFILE,
  data
});

const setDev = data => ({
  type: FETCH_PROFILE,
  data
});

export const clearDev = () => ({
  type: CLEAR_DEV
});

const setExperience = data => ({
  type: SET_EXPERIENCE,
  data
});

const setProfiles = data => ({
  type: FETCH_PROFILES,
  data
})

const removeExperience = data => ({
  type: REMOVE_EXPERIENCE,
  data
});

export const addProfile = (data, history) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.post('/profile', data)
  .then(res => {
    if(error.message) {
      dispatch(removeError())
    };
    dispatch(setProfile(res.data));
    history.push("/profile");
  })
  .catch(err => dispatch(addError(err.response.data)));
}

export const fetchProfile = () => (dispatch, getState)=> {
  const {error} = getState();
  axiosInstance.get('/profile')
  .then(res => {
    if(error.message) {
      dispatch(removeError())
    };
    dispatch(setProfile(res.data));
    
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const fetchDevProfile = data => (dispatch) => {
  axiosInstance.get(`/profile/${data}`)
  .then(res => {
    dispatch(setDev(res.data))
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const updateProfile = (data, history) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.patch('/profile/edit', data)
  .then(res => {
    if(error.message) {
      dispatch(removeError())
    };
    dispatch(setProfile(res.data));
    history.push("/profile");
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const fetchProfiles = pageNr =>  (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.get(`/profile/more?page=${pageNr}`)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(setProfiles(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const deleteProfile = () => dispatch => {
  axiosInstance.delete('/profile')
  .then(() => {
    dispatch(logOut());
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const addExperience = (data, history) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.put('/profile/experience', data)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(setExperience(res.data));
    history.push("/profile");
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const deleteExperience  = data => dispatch => {
  axiosInstance.delete(`profile/experience/${data}`)
  .then(() => {
    dispatch(removeExperience(data))
  })
  .catch(err => dispatch(addError(err.response.data)));
};