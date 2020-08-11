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
  // ссылка на изображение
  bgImage: PropTypes.string.isRequired,
  // основной цвет фильма
  bgColor: PropTypes.string.isRequired,
  // ссылка  на постер
  poster: PropTypes.string.isRequired,
  // ссылка на превью
  preview: PropTypes.string.isRequired,
  // ссылка на видео
  video: PropTypes.string.isRequired,
  // уникальный id
  id: PropTypes.string.isRequired,
  // кол-во просмотров
  runTime: PropTypes.number.isRequired,
  // описание фильма
  description: PropTypes.string.isRequired,
  // оценка фильма
  rating: PropTypes.number.isRequired,
  // кол-во отзывов
  ratingCount: PropTypes.number.isRequired,
  // режиссеры
  director: PropTypes.string.isRequired,
  // звезды
  starring: PropTypes.array.isRequired,
  //  признак избранного
  isFavorite: PropTypes.bool.isRequired,
};
