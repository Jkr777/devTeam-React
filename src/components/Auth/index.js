import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeError } from '..//../redux/action_generators';
import AuthForm from './AuthForm';

const Auth = ({ error, user, location, history, removeError }) => {
  useEffect(() => {
    if(error.message) {
      const unlisten = history.listen(() => {
        removeError();
        unlisten();
      })
    }
  });

  return (
    <section className="auth-container">
      <h1 className="auth-container__title">{location.pathname === "/register" ? "Sign Up" : "Sign In"}</h1>
      {error.message && <p className="auth-container__error">{error.message}</p> }
      <AuthForm 
        redirect={user.auth}
        history={history}
        endPoint={location.pathname === "/register" ? "Register" : "Login"}
      />
      {location.pathname === "/register" ? 
        <div className="auth-container__sub"><span>Already have an account ?</span><Link className="auth-container__link" to="/login"> Sign In</Link></div> :
        <div className="auth-container__sub"><span>Don't have an account ?</span><Link className="auth-container__link" to="/register"> Sign Up</Link></div> 
      }
    </section>
  )};

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export default connect(mapStateToProps, { removeError })(Auth);