import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PostsForm from './PostsForm';
import PostContainer from './PostContainer';
import { fetchPosts, removeError, addPost, deletePost, addLike, deleteLike, fetchMyPosts } from '../../redux/action_generators';

const Posts = ({ post, error, removeError, fetchPosts, addPost, user, deletePost, addLike, deleteLike, fetchMyPosts }) => {
  let [page, changePage] = useState(1);

  useEffect(() => {
    if(!post.posts.length) {
      fetchPosts(page);
    }
  }, []);

  useEffect(() => {
    if(error.message) {
      removeError()
    }
  }, [removeError]);

  useEffect(() => {
    if(post.posts.length) {
      fetchPosts(page);
    }
  }, [page]);

  const renderPosts = () => {
    if(post.posts.length) {
      return (
        <>
          <div className="posts-container__btns-container">
            <button className="posts-container__more-btn" onClick={() => fetchMyPosts()}>my posts</button>
            <button className="posts-container__more-btn" onClick={() => fetchPosts(1)}>all posts</button>
          </div>
          {post.posts.map(e => <PostContainer 
            key={e._id} 
            currentId={user._id} 
            deletePost={deletePost}
            addLike={addLike}
            deleteLike={deleteLike}
            {...e} 
          />)}
          <div className="posts-container__btns-container">
            <button className="posts-container__more-btn" onClick={() => changePage(page + 1)}>more</button>
            <button className="posts-container__more-btn" onClick={() => changePage(1)}>first page</button>
          </div>
        </>
      )
    } else {
      return null;
    }
  };
  return (
    <section className="posts-container">
      <h1 className="posts__title">Welcome to the community</h1>
      <PostsForm 
        addPost={addPost}
      />
      {error.message && <p className="posts-container__error">{error.message}</p>}
      {renderPosts()}
    </section>
  )
};

const mapStateToProps = state => ({
  user: state.user,
  post: state.post,
  error: state.error
})

export default connect(mapStateToProps, { fetchPosts, removeError, addPost, deletePost, addLike, deleteLike, fetchMyPosts })(Posts);