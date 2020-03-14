import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ auth, logOut, cssClass }) => {
  if(auth) {
    return (
      <div className={cssClass}>
        <NavLink exact to="/posts" className="nav-right__link">Posts</NavLink>
        <NavLink exact to="/developers" className="nav-right__link r">Developers</NavLink>
        <NavLink exact to="/profile" className="nav-right__link r">Profile</NavLink>
        <NavLink to="/" onClick={() => logOut()} className="nav-right__link r">Logout</NavLink>
      </div>
    )
  } else {
    return (
      <div className={cssClass}>
        <NavLink exact to="/register" className="nav-right__link">Register</NavLink>
        <NavLink exact to="/login" className="nav-right__link r">Login</NavLink>
     </div>
    )
  }
};

export default Navigation;