import React, {useEffect} from 'react';
import {Feed} from "../feed/feed";
import {Operation as FavoriteOperation} from "../../reducer/favorite";
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "../../reducer/favorite/selectors";
import {UserBlock} from "../user-block/user-block";
import {getUser} from "../../reducer/user/selectors";
import {Logo} from "../logo/logo";

export const MyList = React.memo(function MyList({}) {
  const dispatch = useDispatch();
  const userData = useSelector(getUser);

  useEffect(() => {
    dispatch(FavoriteOperation.loadFavorites());
  }, []);

  const favoritesFilms = useSelector(getFavorites);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock
          userData={userData}
        />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Feed
          className="catalog__movies-list"
          currentFilms={favoritesFilms}
        />
      </section>

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
