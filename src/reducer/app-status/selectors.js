import NameSpace from "../name-space.js";

export const getCurrentGenre = (state) => {
  return state[NameSpace.APP_STATUS].currentGenre;
};

export const getFilmsToShowCount = (state) => {
  return state[NameSpace.APP_STATUS].filmsToShowCount;
};

export const getChosenFilm = (state) => {
  return state[NameSpace.APP_STATUS].chosenFilm;
};

export const getFilmToWatch = (state) => {
  return state[NameSpace.APP_STATUS].filmToWatch;
};

export const getLoggingStatus = (state) => {
  return state[NameSpace.APP_STATUS].isLogging;
};

export const getFormSendingStatus = (state) => {
  return state[NameSpace.APP_STATUS].isFormSending;
};

export const getFormErrorMessage = (state) => {
  return state[NameSpace.APP_STATUS].formErrorMessage;
};
