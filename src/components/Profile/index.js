import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfile, removeError, deleteExperience } from '../../redux/action_generators';
import ProfileActions from './ProfileActions';
import ProfileInfo from './ProfileInfo';
import ExperienceRow from './ExperienceRow';


const Profile = props => {
  useEffect(() => {
    if(props.profile.skills.length === 0) {
      props.fetchProfile();
    };
  }, []);

  useEffect(() => {
    if(props.error.message) {
      props.removeError();
    }
  }, [props.removeError]);
  
  const renderProfile = () => {
    if(props.profile.skills.length === 0) {
      return (
        <>
          <p className="profile-container__info">Please add some info about yourself</p>
          <Link to="/profile/new" className="profile-container__btn">Create Profile</Link>
        </>
      )
    } else {
      return (
        <>
          <ProfileInfo />
          <table className="experience-table">
            <caption className="experience-table__caption">Experience Credentials</caption>
            <thead>
              <tr className="experience-table__head">
                <th className="experience-table__th">Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Years</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { props.profile.experience ? props.profile.experience.map(e => <ExperienceRow removeExperience={props.deleteExperience} key={e._id} {...e}/>) : null}
            </tbody>
          </table>
          <ProfileActions />
        </>
      )
    }
  };

  return (
    <section className="profile-container">
      {props.error.message && <p className="profile-container__error">You need to create a profile</p>}
      <div className="profile">
        <img src={props.user.avatar} alt="profile icon"/>
        <h1 className="profile__title">Welcome {props.user.name}</h1>
      </div>
      {renderProfile()}
    </section>
)};

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile,
  error: state.error
});

export default connect(mapStateToProps, { fetchProfile, removeError, deleteExperience })(Profile);