import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';

export class Feed extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: null
    };

    this.handleCardHover = (index) => {
      this.setState({
        activeCardIndex: index
      });
    };
  }

  render() {
    const {films, onCardTitleClick, className} = this.props;

    return (
      <div className={className}>
        { films.map((item, index) =>
          (
            <Card
              title={item.title}
              thumbnail={item.thumbnail}
              key={item.id}
              onCardMouseOver={() => this.handleCardHover(index)}
              onCardTitleClick={onCardTitleClick}
            />
          )
        )}
      </div>
    );
  }
}

Feed.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    // заголовок карточки
    title: PropTypes.string.isRequired,
    // ссылка на изображение
    thumbnail: PropTypes.string.isRequired,
    // уникальный id
    id: PropTypes.string.isRequired
  })),
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
