import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProfile, removeError, updateProfile } from '../../redux/action_generators';
import pick from '../../resources/helpers';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import youtube from '../../img/youtube.svg';

const ProfileForm = props => {
  const [data, setData] = useState({
    website: props.profile.website ? props.profile.website : "",
    location: props.profile.location ? props.profile.location : "",
    status: props.profile.status ? props.profile.status : "",
    skills: props.profile.skills ? props.profile.skills : "",
    bio: props.profile.bio ? props.profile.bio : "",
    gitHub: props.profile.gitHub ? props.profile.gitHub: "",
    social: ""
  });

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  };

  const handleChangeSkills = e => {
    setData({...data, skills: e.target.value.split(',')})
  };
  const handleSocialLinks = e => {
    setData({...data, social: {...data.social, [e.target.name]: e.target.value}})
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = pick(data, ["company", "website", "location", "status", "skills", "bio", "gitHub", "social"]);
    
    if(props.location.pathname === "/profile/edit") {
      props.updateProfile(formData, props.history);
    } else {
      props.addProfile(formData, props.history);
    };
  };

  useEffect(() => {
    return () => {
      if(props.error.message) {
        props.removeError();
      }
    }
  }, [props.removeError]); 
  
  return (
    <section className="profile-form-container">
      <h1>Create Your Profile</h1>
      {props.error.message && <p className="profile-form-container__error">{props.error.message}</p>}
      <small>* = required field</small>
      <form className="profile-form" onSubmit={e => handleSubmit(e)}>
        <input
          className="profile-form__input"
          type="text"
          name="status"
          id="status" 
          placeholder="* Status"
          minLength="3"
          maxLength="255"
          required
          onChange={handleChange}
          value={data.status}

        />
        <label className="profile-form__label" htmlFor="status">* Add your professional status (eg. Developer, Manager, Intern)</label>

        <input
          className="profile-form__input"
          type="text"
          name="website"
          id="website" 
          placeholder="Website"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
          value={data.website}
        />
        <label className="profile-form__label" htmlFor="website">Your website</label>

        <input
          className="profile-form__input"
          type="text"
          name="location" 
          id="location" 
          placeholder="* Location"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
          value={data.location}
          required
        />
        <label className="profile-form__label" htmlFor="location">* Your city(eg. London)</label>

        <input
          className="profile-form__input"
          type="text"
          name="skills"
          id="skills" 
          placeholder="* Skills"
          minLength="3"
          required
          onChange={handleChangeSkills}
          value={data.skills}
        />
        <label className="profile-form__label" htmlFor="skills">* Please use comma separated values (eg. HTML, CSS, JavaScript)</label>

        <input
          className="profile-form__input"
          type="text"
          name="gitHub"
          id="gitHub" 
          placeholder="GitHub Address"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
          value={data.gitHub}
        />
        <label className="profile-form__label" htmlFor="gitHub">If you wanna show your projects</label>

        <textarea
          className="profile-form__input"
          type="text"
          name="bio"
          id="bio" 
          placeholder="* A short bio of yourself"
          minLength="50"
          maxLength="400"
          required
          onChange={handleChange}
          value={data.bio}
        ></textarea>
        <label className="profile-form__label" htmlFor="bio">* Something about yourself</label>

        <p className="social-title">Social Network Links</p>

        <div className="social-links">
          <img className="social-links__img" src={youtube} alt="youtube icon" />
          <input
            className="social-links__input"
            type="text"
            name="youtube"
            id="youtube" 
            placeholder="youtube"
            maxLength="255"
            onChange={handleSocialLinks}
          />
        </div>
        <div className="social-links">
          <img className="social-links__img" src={twitter} alt="twitter icon" />
          <input
            className="social-links__input"
            type="text"
            name="twitter" 
            id="twitter" 
            placeholder="twitter"
            maxLength="255"
            onChange={handleSocialLinks}
          />
        </div>
        <div className="social-links">
          <img className="social-links__img" src={facebook} alt="facebook icon" />
          <input
            className="social-links__input"
            type="text"
            name="facebook" 
            id="facebook" 
            placeholder="facebook"
            maxLength="255"
            onChange={handleSocialLinks}
          />
        </div>
        <div className="social-links">
          <img className="social-links__img" src={instagram} alt="instagram icon" />
          <input
            className="social-links__input"
            type="text"
            name="instagram" 
            id="instagram" 
            placeholder="instagram"
            maxLength="255"
            onChange={handleSocialLinks}
          />
        </div>
        <div className="profile-btn-container">
          <input 
            className="profile-btn-container__btn"
            type="submit"
            value="Submit"
            onChange={handleChange}
          />
          <Link
            className="profile-btn-container__btn2"
            to="/profile"
          >Go Back</Link>
        </div>
      </form>
    </section>
)};

const mapStateToProps = state => ({
  profile: state.profile,
  error: state.error
});

export default connect(mapStateToProps, { addProfile, removeError, updateProfile })(ProfileForm);