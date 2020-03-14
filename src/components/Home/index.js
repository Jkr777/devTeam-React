import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ auth, history }) => {
  useEffect(() => {
    if(auth) {
      history.push('/profile')
    }
  });
  return (
    <section className="home" >
      <div className="content-container">
        <h1 className="content-container__title">Find your dream team</h1>
        <span className="content-container__text">Tell the world about your projects and recruit devs with the same dreams</span>
        <div className="btn-container">
          <Link to="/register" className="btn-container__btn btn--1">Sign Up</Link>
          <Link to="/login" className="btn-container__btn btn--2">Login</Link>
        </div>
      </div>
    </section>
  )
};

export default Home;