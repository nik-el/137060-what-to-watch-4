export const filmAdapter = (film) => (
  {
    title: film.name,
    genre: film.genre,
    releaseYear: film.released,
    thumbnail: film.preview_image,
    poster: film.poster_image,
    description: film.description,
    rating: film.rating,
    ratingCount: film.run_time,
    directors: film.director,
    starring: film.starring,
    id: String(film.id),
    preview: film.preview_video_link,
  }
);
