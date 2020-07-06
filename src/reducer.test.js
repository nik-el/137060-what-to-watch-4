import {reducer, ActionType, ActionCreator} from "./reducer.js";
import {films} from "./mocks/films";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    films,
    currentGenre: null,
    feedLimit: 4,
    genres: [`crime`, `comedy`, `action`, `documentary`],
  });
});

it(`Action creator for setting filter correct action`, () => {
  expect(ActionCreator.setFilter(`test genre`)).toEqual({
    type: ActionType.SET_FILTER,
    payload: `test genre`,
  });
});

it(`Action creator for setting filter correct action`, () => {
  expect(ActionCreator.getFilmsByGenre(`test genre`)).toEqual({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: `test genre`,
  });
});

it(`Reducer should return new state with current genre`, () => {
  expect(reducer({
    currentGenre: null
  }, {
    type: ActionType.SET_FILTER,
    payload: `test genre`,
  })).toEqual({
    currentGenre: `test genre`,
  });
});

it(`Reducer should return new state with filtred films`, () => {
  expect(reducer({
    films,
  }, {
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: `documentary`,
  })).toEqual({
    films: [{
      title: `No Country For Old Men`,
      thumbnail: `https://picsum.photos/id/109/800/600`,
      id: `8`,
      genre: `documentary`,
      releaseYear: 1994,
      poster: `https://picsum.photos/id/109/300/450`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      rating: `4,6`,
      ratingCount: 230,
      directors: [`Wes Andreson`],
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      preview: `https://mazwai.com/videvo_files/video/free/2015-11/small_watermarked/finlandia_preview.mp4`
    }],
  });
});

