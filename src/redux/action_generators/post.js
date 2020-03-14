import { axiosInstance } from '../../services/axios';
import { SET_POST, REMOVE_POST, SET_POSTS, LIKE_POST, UNLIKE_POST, SET_COMMENT, REMOVE_COMMENT, CLICKED_POST  } from '../action_types';
import { addError, removeError } from './error';

const setPost = data => ({
  type: SET_POST,
  data
});

const removePost = data => ({
  type: REMOVE_POST,
  data
});

const getPosts = data => ({
  type: SET_POSTS,
  data
});

const likePost = data => ({
  type: LIKE_POST,
  data
});

const unlikePost = data => ({
  type: UNLIKE_POST,
  data
});

const setComment = data => ({
  type: SET_COMMENT,
  data
});

const clickedPost = data => ({
  type: CLICKED_POST,
  data
});

const removeComment = data => ({
  type: REMOVE_COMMENT,
  data
});

export const addPost = data => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.post('/posts', data)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(setPost(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const fetchPost = data => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.get(`/posts/${data}`)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(clickedPost(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
}; 

export const deletePost = data => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.delete(`/posts/${data}`)
  .then(() => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(removePost(data))
  })
  .catch(err => dispatch(addError(err.response.data)));
}; 

export const fetchPosts = pageNr => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.get(`/posts?page=${pageNr}`)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(getPosts(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const fetchMyPosts = () => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.get('/posts/myPosts')
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(getPosts(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
};

export const addLike = data => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.put(`/posts/like/${data.postId}`)
  .then(() => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(likePost(data))
  })
  .catch(err => dispatch(addError(err.response.data)));
}; 

export const deleteLike = data => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.put(`/posts/unlike/${data}`)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(unlikePost(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
}; 

export const addComment = (postId, data) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.post(`/posts/comment/${postId}`, data)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(setComment(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
}; 

export const deleteComment = (postId, commId) => (dispatch, getState) => {
  const {error} = getState();
  axiosInstance.delete(`/posts/comment/${postId}/${commId}`)
  .then(res => {
    if(error.message) {
      dispatch(removeError());
    };
    dispatch(removeComment(res.data));
  })
  .catch(err => dispatch(addError(err.response.data)));
} 