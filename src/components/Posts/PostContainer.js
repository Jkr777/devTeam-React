import React,{  } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Like from '../../img/like.svg';
import { ReactComponent as Unlike } from '../../img/unlike.svg';

const PostContainer = ({userId: {_id, name, avatar}, _id:postId, date, title, text, likes, comments, currentId, deletePost, addLike, deleteLike}) => {
  return (
    <div className="post-container">
      <div className="post-container__left">
        <img className="post-container__avatar" src={avatar} alt="profile icon" />
        <span className="post-container__name">{name}</span>
      </div>
      <div className="post-container__right">
        <span className="post-container__title">{title}</span>
        <p className="post-container__text">{text}</p>
        <span className="post-container__date">Posted on {moment(date).format('MMM Do Y')}</span>
        <div className="post-container__btns">
          <div className="social-btn__container" onClick={() => addLike({userId: _id, postId: postId})}><img className="social-btn__container--btn" src={Like} alt="thumbs up"/> {likes.length > 0 && likes.length}</div>
          <div className="social-btn__container" onClick={() => deleteLike(postId)}><Unlike className="social-btn__container--btn" /></div>
          <Link to={`/posts/${postId}`} className="post-container__btn">
            Discusions {comments.length > 0 && comments.length}
          </Link>
          {currentId === _id && <button onClick={() => deletePost(postId)} className="post-container__btn">Remove</button>}
        </div>
      </div>
    </div>
  )
};

export default PostContainer;