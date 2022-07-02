// Экшены, переменные
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";


// Стартовый стейт
let initialState = {users: []};

// Сам редьюсер - это функция, которая на вход получает стейт и экшен, делает его копию, изменяет его и возвращает.
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return {
          ...state,
          users: [...state.users].map((u) => {
            if (u.id === action.id) {
              return {...u, followed: !u.followed}
            }
            return u;
          }),
        };
      case SET_USERS: 
        return ({
          ...state,
          users: [...state.users, ...action.users]
        })
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, id: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});


// Сосздаем экшен криейторы - создают экшены - экшем это объект у которого как минимум есть тип
export default usersReducer;
