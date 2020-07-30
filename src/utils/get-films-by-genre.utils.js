export const getFilmsByGenre = (films, genre) => {
  if (!Array.isArray(films)) {
    return [];
  }
  if (!genre) {
    return films;
  }

  return films.filter((item) => item.genre === genre);
};
