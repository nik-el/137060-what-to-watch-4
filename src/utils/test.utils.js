const testPromo = {
  title: `Test title`,
  year: 2000,
  genre: `test genre`
};
Object.freeze(testPromo);

const testFilm = {
  title: `Test title`,
  thumbnail: `https://picsum.photos/id/0`,
  id: `0`,
};
Object.freeze(testFilm);

const testFilms = [
  {
    title: `Test title 1`,
    thumbnail: `https://picsum.photos/id/1`,
    id: `1`,
  },
  {
    title: `Test title 2`,
    thumbnail: `https://picsum.photos/id/2`,
    id: `2`,
  },
];
Object.freeze(testFilms);

export {testPromo, testFilm, testFilms};
