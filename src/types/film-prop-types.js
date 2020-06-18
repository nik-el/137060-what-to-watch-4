import PropTypes from "prop-types";

export const FilmPropTypes = {
  // заголовок карточки
  title: PropTypes.string.isRequired,
  // ссылка на изображение
  thumbnail: PropTypes.string.isRequired,
  // уникальный id
  id: PropTypes.string.isRequired
};
