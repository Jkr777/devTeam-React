import React from 'react';

const ProfileInfo = props => (
  <div className="profile-info">
    <span>{props.company}</span>
    <span>{props.website}</span>
    <span>{props.status}</span>
    <span>{props.location}</span>
    <p>{props.bio}</p>
  </div>
)

export default ProfileInfo;