import { setAuthStatus } from "./authReducer";

// Экшены, переменные
const SET_INITIALIZE = "SET_INITIALIZE";

// Стартовый стейт
let initialState = {
  initializeStatus: false,
};

// Сам редьюсер - это функция, которая на вход получает стейт и экшен, делает его копию, изменяет его и возвращает.
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return {
        ...state,
        initializeStatus: true,
      };

    default:
      return state;
  }
};

export const setInitializeSucsess = () => ({type: SET_INITIALIZE});

export const setInitialize = () => {
  return (dispatch) => {
    const promise = dispatch(setAuthStatus());

    promise.then(() => dispatch(setInitializeSucsess()));
  };
};

export default appReducer;
