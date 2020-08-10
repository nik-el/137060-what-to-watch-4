import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {getRestApi} from "../../reducer/data/selectors";

export const UserBlock = React.memo(function SignIn({userData}) {
  const restApi = useSelector(getRestApi);

  const signInEl =
    <div className="user-block">
      <Link className="small-movie-card__link" to={`/sign-page`}>
        Sign in
      </Link>
    </div>;

  return userData ? <Link
    to={`/my-list`}
    className="user-block"
  >
    <div className="user-block__avatar">
      <img src={restApi + userData.avatar_url} alt="User avatar" width="63" height="63"/>
    </div>
  </Link> : signInEl;
});

UserBlock.propTypes = {
  userData: PropTypes.object
};
