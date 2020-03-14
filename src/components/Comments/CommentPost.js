import React from 'react';
import moment from 'moment';

const CommentPost = ({clicked: {title, text, date, userId: {avatar, name}}}) => (
  <div className="post-container">
    <div className="post-container__left">
      <img className="info-top__avatar" src={avatar} alt="avatar"/>
      <span className="post-container__name">{name}</span>
    </div>
    <div className="post-container__right">
      <span className="post-container__title">{title}</span>
      <p className="post-container__text">{text}</p>
      <span className="post-container__date">Posted on {moment(date).format('MMM Do Y')}</span>
    </div>
  </div>
);

export default CommentPost;