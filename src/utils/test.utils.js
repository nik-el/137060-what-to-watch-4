const testFilm = {
  title: `Test title 1`,
  genre: `test genre 1`,
  releaseYear: `2000`,
  thumbnail: `https://picsum.photos/id/1`,
  bgImage: `https://picsum.photos/id/1`,
  bgColor: `#FFF`,
  poster: `https://picsum.photos/id/1`,
  description: `Test description`,
  rating: 5.5,
  ratingCount: 100,
  director: `Test director`,
  starring: [`Test Star 1`, `Test Star 2`],
  id: `1`,
  preview: `https://picsum.photos/id/1`,
  runTime: 100,
};
Object.freeze(testFilm);

const testFilms = [
  {
    title: `Test title 1`,
    genre: `test genre 1`,
    releaseYear: `2000`,
    thumbnail: `https://picsum.photos/id/1`,
    bgImage: `https://picsum.photos/id/1`,
    bgColor: `#FFF`,
    poster: `https://picsum.photos/id/1`,
    description: `Test description`,
    rating: 5.5,
    ratingCount: 100,
    director: `Test director`,
    starring: [`Test Star 1`, `Test Star 2`],
    id: `1`,
    preview: `https://picsum.photos/id/1`,
    runTime: 100,
  },
  {
    title: `Test title 2`,
    genre: `test genre 2`,
    releaseYear: `2000`,
    thumbnail: `https://picsum.photos/id/2`,
    bgImage: `https://picsum.photos/id/2`,
    bgColor: `#FFF`,
    poster: `https://picsum.photos/id/2`,
    description: `Test description`,
    rating: 5.5,
    ratingCount: 100,
    director: `Test director`,
    starring: [`Test Star 1`, `Test Star 2`],
    id: `1`,
    preview: `https://picsum.photos/id/2`,
    runTime: 100,
  },
];
Object.freeze(testFilms);

const testGenres = [`test genre 1`, `test genre 2`];
Object.freeze(testGenres);

export {testFilm, testFilms, testGenres};
