import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDevProfile, clearDev } from '../../redux/action_generators';
import { Link } from 'react-router-dom';
import DeveloperExperience from './DeveloperExperience';
import { ReactComponent as GitHub } from '../../img/gitHub.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Twitter } from '../../img/twitter.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as Youtube } from '../../img/youtube.svg';

const DevelopersProfile = ({ fetchDevProfile, clearDev, match, profile }) => {
  useEffect(() => {
      fetchDevProfile(match.params.id);
    return () => {
      clearDev();
    }
  }, [fetchDevProfile]);

  return (
    <section className="dev-profile">
      <Link className="dev-profile__btn" to="/developers">Go Back</Link>
      {profile.dev ? 
      <>
      <div className="info-top">
        <img className="info-top__avatar" src={profile.dev.userId.avatar} alt="profile icon" />
        <span className="info-top__name">{profile.dev.userId.name}</span>
        <span className="info-top__row"><span className="info-top__row-pre">status &bull; </span> {profile.dev.status}</span>
        <span className="info-top__row"><span className="info-top__row-pre">from &bull; </span> {profile.dev.location}</span>
        <div className="info-top__icons">
          {profile.dev.gitHub && <a target="_blank" href={'https://' + profile.dev.gitHub} rel="noopener noreferrer"><GitHub className="info-top__social-icon"/></a>} 
          {profile.dev.social && profile.dev.social.youtube && <a target="_blank" href={'https://' + profile.dev.social.youtube} rel="noopener noreferrer"><Youtube className="info-top__social-icon"/></a>}
          {profile.dev.social && profile.dev.social.twitter && <a target="_blank" href={'https://' + profile.dev.social.twitter} rel="noopener noreferrer"><Twitter className="info-top__social-icon"/></a>}
          {profile.dev.social && profile.dev.social.instagram && <a target="_blank" href={'https://' + profile.dev.social.instagram} rel="noopener noreferrer"><Instagram className="info-top__social-icon"/></a>}
          {profile.dev.social && profile.dev.social.facebook && <a target="_blank" href={'https://' + profile.dev.social.facebook} rel="noopener noreferrer"><Facebook className="info-top__social-icon"/></a>}
        </div>
      </div>
      <div className="info-section">
          <p className="info-section__title">Bio</p>
          <p className="info-section__bio">{profile.dev.bio}</p>
          <hr className="info-section__hr"/>
          <p className="info-section__title">Skills</p>
          <div className="info-section__skills">
            {profile.dev.skills.map(e => <span className="info-section__skill" key={e}> &sdot; {e}</span>)}
          </div>
      </div>
      <div className="info-section">
        <p className="info-section__title">Experience</p>
        <div className="dev-experience-container">
          {profile.dev.experience.length > 0 && profile.dev.experience.map(e => <DeveloperExperience key={e._id} {...e} />)}
        </div>
      </div>
      </>
       : 
      null}
    </section>
  )
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { fetchDevProfile, clearDev })(DevelopersProfile);