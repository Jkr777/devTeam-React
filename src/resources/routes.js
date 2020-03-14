import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logOut, setAuthToken } from '../redux/action_generators';
import Layout from '../components/hoc/Layout';
import Private from '../components/routing/Private';
import Home from '../components/Home';
import Auth from '../components/Auth';
import Profile from '../components/Profile';
import ProfileForm from '../components/ProfileForm';
import ExperienceForm from '../components/ExperienceForm';
import Developers from '../components/Developers';
import DeveloperProfile from '../components/DeveloperProfile';
import Posts from '../components/Posts';
import Comments from '../components/Comments';

const Routes = ({auth, getUser, logOut}) => {
  useEffect(() => {
    if(localStorage.getItem("devTeam-auth")){
      setAuthToken(localStorage.getItem("devTeam-auth"));
      try {
        getUser();
      } catch(err) {
        logOut();
      }
    };
  });
  
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact render={props => <Home auth={auth} {...props}/> }/> 
          <Route path="/login" exact render={props => <Auth {...props}/> } />  
          <Route path="/register" exact render={props => <Auth {...props}/> } />  
          <Private path="/profile" exact auth={auth} component={Profile} /> 
          <Private path="/profile/new" exact auth={auth} component={ProfileForm} />  
          <Private path="/profile/edit" exact auth={auth} component={ProfileForm} />  
          <Private path="/profile/experience" exact auth={auth} component={ExperienceForm} /> 
          <Private path="/developers" exact auth={auth} component={Developers} /> 
          <Private path="/developers/:id" exact auth={auth} component={DeveloperProfile} /> 
          <Private path="/posts" exact auth={auth} component={Posts} /> 
          <Private path="/posts/:id" exact auth={auth} component={Comments} /> 
        </Switch>
      </Layout>
    </BrowserRouter>
)};

const mapStateToPros = state => ({
  auth: state.user.auth
});

export default connect(mapStateToPros, { getUser, logOut })(Routes);