import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { auth } from '..//../redux/action_generators';
import pick from '..//../resources/helpers';

const AuthForm = props => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => setData({...data, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    const formData = pick(data, ["name", "email", "password"]);
    const endPoint = props.endPoint;

    props.auth(formData, endPoint);
    setData({...data, name: ""});
  };

  useEffect(() => {
    if(props.redirect) {
      props.history.push('/profile');
    }
  });
  

  return (
    <form className="auth-form" onSubmit={e => handleSubmit(e)}>
      {props.endPoint === "Register" && 
        <>
        <p className="auth-form__gravatar">This site uses Gravatar so if you want a profile image, use a Gravatar email </p>

        <input
          className="auth-form__input"
          placeholder="Full Name"
          name="name"
          type="text"
          minLength="3"
          maxLength="255"
          value={data.name}
          onChange={e => handleChange(e)}
          required
        />
        </>
      }
      <input 
        className="auth-form__input"
        placeholder="Email Address"
        name="email"
        type="email"
        minLength="5"
        maxLength="255"
        value={data.email}
        onChange={e => handleChange(e)}
        required
      />
      <input 
        className="auth-form__input"
        placeholder="Password"
        name="password"
        type="password"
        minLength="5"
        maxLength="255"
        autoComplete="off"
        value={data.password}
        onChange={e => handleChange(e)}
        required
      />
      <button className="auth-form__btn">{props.endPoint}</button>
    </form>
  )
};

export default connect(null, { auth })(AuthForm);