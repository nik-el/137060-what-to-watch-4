import PropTypes from "prop-types";

export const FilmPropTypes = {
  // заголовок карточки
  title: PropTypes.string.isRequired,
  // жанр фильма
  genre: PropTypes.string.isRequired,
  // год выпуска
  releaseYear: PropTypes.number.isRequired,
  // ссылка на изображение
  thumbnail: PropTypes.string.isRequired,
  // уникальный id
  id: PropTypes.string.isRequired,
  // описание фильма
  description: PropTypes.string.isRequired,
  // оценка фильма
  rating: PropTypes.number.isRequired,
  // кол-во отзывов
  ratingCount: PropTypes.number.isRequired,
  // режиссеры
  director: PropTypes.string,
  // звезды
  starring: PropTypes.array,
};
