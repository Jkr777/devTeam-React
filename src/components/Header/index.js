import React from 'react';
import { connect } from 'react-redux';
import { logOut, navClick } from '../../redux/action_generators';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/';
import logo from '../../img/terminal.svg';
import navIncon from '../../img/navIcon.svg';

const Header = ({ user, logOut, navClick }) => {
  return (
    <header className="nav-container">
      <nav className="nav">
        <div className="nav-left">
          <img src={logo} alt="logo"/>
          <NavLink exact to="/" className="nav-left__name">DreamTeam</NavLink>
        </div>
        <img src={navIncon} alt="navigation incon" className="nav__icon" onClick={navClick}/>
        <Navigation 
          auth={user.auth}
          logOut={logOut}
          cssClass="nav-right"
        />
      </nav>
    </header>
)};

const mapStateToProps = state => ({
  user: state.user
}); 

export default connect(mapStateToProps, { logOut, navClick })(Header);