import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from '../reducer/user/enum';
import {useSelector} from "react-redux";
import {getAuth} from "../reducer/user/selectors";

export const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const isAuth = (useSelector(getAuth) === AuthorizationStatus.AUTH);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          isAuth
            ? render()
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
