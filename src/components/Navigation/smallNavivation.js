import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/action_generators';
import Navigation from './index';

const SmallNavigation = ({ user, logOut, clicked }) => (
  <Navigation 
    auth={user.auth}
    logOut={logOut}
    cssClass={clicked ? "small-nav open" : "small-nav"}
  />
);

const mapStateToProps = state => ({
  user: state.user,
  clicked: state.userInteraction.clicked
});

export default connect(mapStateToProps, { logOut })(SmallNavigation);