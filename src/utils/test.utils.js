const testFilm = {
  title: `Test title`,
  thumbnail: `https://picsum.photos/id/0`,
  id: `0`,
  genre: `Comedy`,
  poster: `https://picsum.photos/id/2`,
  description: `Test description`,
  rating: `5,5`,
  ratingCount: 100,
  directors: [`Test director`],
  starring: [`Test Star 1`, `Test Star 2`],
  preview: `http://test_preview.com`
};
Object.freeze(testFilm);

const testFilms = [
  {
    title: `Test title 1`,
    thumbnail: `https://picsum.photos/id/1`,
    id: `1`,
    genre: `test genre 1`,
    poster: `https://picsum.photos/id/2`,
    description: `Test description`,
    rating: `5,5`,
    ratingCount: 100,
    directors: [`Test director`],
    starring: [`Test Star 1`, `Test Star 2`]
  },
  {
    title: `Test title 2`,
    thumbnail: `https://picsum.photos/id/2`,
    id: `2`,
    genre: `test genre 2`,
    poster: `https://picsum.photos/id/2`,
    description: `Test description`,
    rating: `5,5`,
    ratingCount: 100,
    directors: [`Test director`],
    starring: [`Test Star 1`, `Test Star 2`]

  },
];
Object.freeze(testFilms);

const testGenres = [`test genre 1`, `test genre 2`];
Object.freeze(testGenres);

export {testFilm, testFilms, testGenres};
