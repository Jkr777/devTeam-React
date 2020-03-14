import React from 'react';
import moment from 'moment';

const Comment = ({ _id, date, name, avatar, title, text, userId, currentId, removeComment, clickedPostId }) => (
  <div className="comment-container">
    <div className="comment-container__left">
      <img className="comment-container__avatar" src={avatar} alt="avatar" />
      <span className="comment-container__name">{name}</span>
    </div>
    <div className="comment-container__right">
      <span className="comment-container__title">{title}</span>
      <p className="comment-container__text">{text}</p>
      <span className="comment-container__date">Posted on {moment(date).format('MMM Do Y')}</span>
      {currentId === userId && <button onClick={() => removeComment(clickedPostId, _id)} className="comment-container__btn">Remove</button>}
    </div>
  </div>
);

export default Comment;