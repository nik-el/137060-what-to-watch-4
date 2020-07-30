import React, {useCallback, useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user";
import {AuthorizationStatus} from '../../reducer/user/enum';
import {getAuth} from "../../reducer/user/selectors";
import {useHistory} from "react-router-dom";

export const SignIn = React.memo(function SignIn() {
  const isAuth = (useSelector(getAuth) === AuthorizationStatus.AUTH);

  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  useEffect(() => {
    if (isAuth) {
      history.push(`/`);
    }
  }, [isAuth]);

  const handleSignInClick = useCallback((event) => {
    event.preventDefault();
    dispatch(UserOperation.login(email, password));
  }, [email, password]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={(event) => handleSignInClick(event)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
});
