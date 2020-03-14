import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProfile } from '../../redux/action_generators';

const ProfileActions = ({ deleteProfile }) => (
  <div className="profile-actions">
    <Link className="profile-actions__btn" to="profile/edit">Edit Profile</Link>
    <Link className="profile-actions__btn" to="profile/experience">Add Experience</Link>
    <Link className="profile-actions__btn" onClick={() => deleteProfile()} to="profile/">Delete Account</Link>
  </div>
);

export default connect(null, { deleteProfile })(ProfileActions);