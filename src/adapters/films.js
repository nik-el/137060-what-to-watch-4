export const filmAdapter = (film) => (
  {
    title: film.name,
    genre: film.genre,
    releaseYear: film.released,
    thumbnail: film.preview_image,
    bgImage: film.background_image,
    bgColor: film.background_color,
    poster: film.poster_image,
    description: film.description,
    rating: film.rating,
    ratingCount: film.run_time,
    director: film.director,
    starring: film.starring,
    id: String(film.id),
    preview: film.preview_video_link,
    runTime: film.run_time,
  }
);
