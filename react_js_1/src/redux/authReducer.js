import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";

// Экшены, переменные
const SET_USER_DATA_AUTH = "SET_USER_DATA_AUTH";
const SET_USER_PHOTO = "SET_USER_PHOTO";

// Стартовый стейт
let initialState = {
  email: null,
  id: null,
  login: null,
  userPhoto: null,
  isAuthorized: false,
};

// Сам редьюсер - это функция, которая на вход получает стейт и экшен, делает его копию, изменяет его и возвращает.
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA_AUTH:
      return {
        ...state,
        ...action.authData,
        // isAuthorized: true,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.userPhoto,
      };
    default:
      return state;
  }
};

export const setUserDataAuth = (
  email,
  id,
  login,
  isAuthorized,
  userPhoto = null
) => ({
  type: SET_USER_DATA_AUTH,
  authData: { email, id, login, isAuthorized, userPhoto },
});

export const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const setAuthStatus = () => {
  return (dispatch) => {
    return authAPI.getMe().then((data) => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setUserDataAuth(email, id, login, true, null));
        profileAPI.getProfile(data.id).then((data) => {
          dispatch(setUserPhoto(data.photos.small));
        });
      }
    });
  };
};

export const login = (email, password, rememberMe = false) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthStatus());
      } else {
        let message = data.messages ? data.messages[0] : "some errror";
        dispatch(stopSubmit("login", {_error: message}));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataAuth(null, null, null, false, null));
      }
    });
  };
};

// Сосздаем экшен криейторы - создают экшены - экшем это объект у которого как минимум есть тип
export default authReducer;
