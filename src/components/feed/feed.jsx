import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';
import {FilmPropTypes} from "../../types/film-prop-types";

export class Feed extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleCardHover = (index) => {
      this.setState({
        activeCard: index
      });
    };
  }

  render() {
    const {films, onCardTitleClick, className} = this.props;

    return (
      <div className={className}>
        { films.map((film) =>
          (
            <Card
              onCardMouseOver={this.handleCardHover}
              onCardTitleClick={onCardTitleClick}
              key={film.id}
              film={film}
            />
          )
        )}
      </div>
    );
  }
}

Feed.propTypes = {
  // массив данных с фильмами
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
