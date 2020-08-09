import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const UserBlock = React.memo(function SignIn({isAuth, avatarUrl}) {
  const signInEl =
    <div className="user-block">
      <Link className="small-movie-card__link" to={`/sign-page`}>
        Sign in
      </Link>
    </div>;

  const avatarEl =
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
    </div>;

  return isAuth ? avatarEl : signInEl;
});

UserBlock.propTypes = {
  isAuth: PropTypes.bool,
  avatarUrl: PropTypes.string.isRequired,
};
