import React,{  } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const DeveloperInfo = ({ _id, date, skills, status, location, userId, currentUserId }) => (
  <div className="dev-info">
    <img className="dev-info__avatar" src={userId.avatar} alt="avatar"/> 
    <div className="dev-info-container">
      <span className="dev-info-container__row">{userId.name} 
        <span className="dev-info-container__lowercase"> from</span> {location}
      </span>
      <span className="dev-info-container__row">
        <span className="dev-info-container__lowercase">status</span> &bull; {status}
      </span>
      <span className="dev-info-container__row">
        <span className="dev-info-container__lowercase">member since</span> &bull; {moment(date).format('MMM Do Y')}
      </span>
      <span className="dev-info-container__row">
        <span className="dev-info-container__lowercase">skills</span> &bull; {skills.join(',')}
      </span>
      <Link className="dev-info-container__link" to={currentUserId === userId._id ? "/profile" :`/developers/${_id}`}>More Info</Link>
    </div>
  </div>
);

export default DeveloperInfo;