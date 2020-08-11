import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {getRestApi} from "../../reducer/data/selectors";

export const UserBlock = React.memo(function SignIn({userData}) {
  const restApi = useSelector(getRestApi);

  const signInEl =
    <div className="user-block">
      <Link className="small-movie-card__link" to={`/login`}>
        Sign in
      </Link>
    </div>;

  return userData ? <Link
    to={`/mylist`}
    className="user-block"
  >
    <div className="user-block__avatar">
      <img src={restApi + userData.avatarUrl} alt="User avatar" width="63" height="63"/>
    </div>
  </Link> : signInEl;
});

UserBlock.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })
};
