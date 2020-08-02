export const getFilmById = (films, id) => {
  if (!Array.isArray(films) || !id) {
    return null;
  }

  return films.find((item) => item.id === id);
};
