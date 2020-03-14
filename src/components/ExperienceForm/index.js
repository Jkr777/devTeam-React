import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeError, addExperience } from '../../redux/action_generators';
import { Link } from 'react-router-dom';
import pick from '../../resources/helpers';

const ExperienceForm = props => {
  const [data, setData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false
  });

  const handleChange = e => setData({...data, [e.target.name]: e.target.value});

  const handleChangeCheck = () => setData({...data, current: !data.current});

  const handleSubmit = e => {
    e.preventDefault();
    const formData = pick(data, ["title", "company", "location", "from", "to", "current"]);
    props.addExperience(formData, props.history);
  };

  useEffect(() => {
    return () => {
      if(props.error.message) {
        props.removeError();
      }
    }
  }); 
  
  return (
    <section className="profile-form-container">
      <h1>Add Experience</h1>
      <p className="profile-form-container__subtitle">Add any work experience</p>
      {props.error.message && <p className="profile-form-container__error">{props.error.message}</p>}
      <small>* = required field</small>
      <form className="profile-form" onSubmit={handleSubmit}>
        <input 
          className="profile-form__input"
          placeholder="* Job Title"
          type="text"
          name="title"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
          required
        />
        <input 
          className="profile-form__input"
          placeholder="* Company Name"
          type="text"
          name="company"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
          required
        />
        <input 
          className="profile-form__input"
          placeholder="Location"
          type="text"
          name="location"
          minLength="3"
          maxLength="255"
          onChange={handleChange}
        />
        <div className="checkbox-container">
          <input 
            className="checkbox-container__input" 
            type="checkbox"
            name="current"
            id="current" 
            onChange={handleChangeCheck}
          />
          <label
            className="profile-form__box-label"
            htmlFor="current"
          >Current Job</label>
        </div>

        <input 
          className="profile-form__input"
          type="date"
          name="from"
          id="from"
          onChange={handleChange}
          required={data.current === false}
        />
        <label 
          className="profile-form__label"
          htmlFor="from"
        >From Date</label>
      
        <input 
          className="profile-form__input"
          type="date"
          name="to"
          id="to"
          onChange={handleChange}
          required={data.from}
        />
        <label 
          className="profile-form__label" 
          htmlFor="to"
        >To Date</label>

        <div className="profile-btn-container">
          <input
            className="profile-btn-container__btn"
            type="submit"
            value="Add"
          />
          <Link className="profile-btn-container__btn2" to="/profile">Go Back</Link>
        </div>
      </form>
    </section>
  )
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { removeError, addExperience })(ExperienceForm);