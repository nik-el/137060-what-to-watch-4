const testFilm = {
  title: `Test title 1`,
  genre: `test genre 1`,
  releaseYear: 2000,
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

const testEditedFilm = {
  title: `Test edit title 1`,
  genre: `test genre 1`,
  releaseYear: 2000,
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
Object.freeze(testEditedFilm);

const testFilms = [
  {
    title: `Test title 1`,
    genre: `test genre 1`,
    releaseYear: 2000,
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
    releaseYear: 2000,
    thumbnail: `https://picsum.photos/id/2`,
    bgImage: `https://picsum.photos/id/2`,
    bgColor: `#FFF`,
    poster: `https://picsum.photos/id/2`,
    description: `Test description`,
    rating: 5.5,
    ratingCount: 100,
    director: `Test director`,
    starring: [`Test Star 1`, `Test Star 2`],
    id: `2`,
    preview: `https://picsum.photos/id/2`,
    runTime: 100,
  },
];
Object.freeze(testFilms);

const testGenres = [`test genre 1`, `test genre 2`];
Object.freeze(testGenres);

const testComments = [{
  id: 1,
  user: {
    id: 4,
    name: `Test  name`
  },
  rating: 1.1,
  comment: `test comment`,
  date: `2019-05-08T14:13:56.569Z`
}];
Object.freeze(testComments);

const testStore = {
  DATA: {
    films: testFilms,
    genres: testGenres,
    loadingFilmsData: false,
    restApi: `test_api_url`
  },
  VIEW: {
    currentGenre: testGenres[0],
    feedLimit: 10,
  },
  USER: {
    authorizationStatus: `TEST_AUTH`,
    user: {
      "id": 1,
      "email": `test@test.com`,
      "name": `test`,
      "avatarUrl": `test/1.png`
    }
  },
  REVIEW: {
    loadingCommentsData: false,
    loadingAddingComment: false,
    comments: testComments
  },
  FAVORITE: {
    favorites: testFilms,
    loadingFavoritesData: false,
    loadingSetFavorite: false
  }
};
Object.freeze(testStore);

export {testFilm, testFilms, testEditedFilm, testGenres, testComments, testStore};
