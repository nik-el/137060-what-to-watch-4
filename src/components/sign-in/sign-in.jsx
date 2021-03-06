import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user";
import {AuthorizationStatus} from '../../reducer/user/enum';
import {getAuth} from "../../reducer/user/selectors";
import {Redirect} from "react-router-dom";
import {Logo} from "../logo/logo";

export const SignIn = React.memo(function SignIn() {
  const isAuth = (useSelector(getAuth) === AuthorizationStatus.AUTH);

  const dispatch = useDispatch();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleSignInClick = useCallback((event) => {
    event.preventDefault();
    dispatch(UserOperation.login(email, password));
  }, [email, password]);

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
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
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo
          alignRight
        />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
});
