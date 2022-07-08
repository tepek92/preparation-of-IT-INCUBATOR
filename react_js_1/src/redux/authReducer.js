// Экшены, переменные
const SET_USER_DATA_AUTH = "SET_USER_DATA_AUTH";
const SET_USER_PHOTO = "SET_USER_PHOTO";

// Стартовый стейт
let initialState = {
  email: null,
  id: null,
  login: null,
  isAuthorized: false,
  userPhoto: null
};

// Сам редьюсер - это функция, которая на вход получает стейт и экшен, делает его копию, изменяет его и возвращает.
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA_AUTH:
      return {
        ...state,
        ...action.authData,
        isAuthorized: true
      };
      case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.userPhoto
      };
    default:
      return state;
  }
};

export const setUserDataAuth = (authData) => ({type: SET_USER_DATA_AUTH, authData});
export const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO, userPhoto});


// Сосздаем экшен криейторы - создают экшены - экшем это объект у которого как минимум есть тип
export default authReducer;
