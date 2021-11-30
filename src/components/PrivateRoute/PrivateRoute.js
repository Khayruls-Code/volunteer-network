import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import loader from '../../logos/loader.gif'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className='w-full h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;