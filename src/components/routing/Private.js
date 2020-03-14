import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Private = ({ user, path, component: Component, render, ...rest }) => {
  return (
    <Route
      { ...rest } 
      render={props => {
        if (!rest.auth){
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }    
              }}
            />
          )};
        return Component ? <Component {...props} /> : render(props);   
      }}
    />
  );
};

export default Private;