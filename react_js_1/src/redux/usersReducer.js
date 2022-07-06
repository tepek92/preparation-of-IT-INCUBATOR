// Экшены, переменные
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "TOTAL_COUNT_USERS";

// Стартовый стейт
let initialState = {
  users: [],
  currentPage: 1,
  totalCount: 0,
  usersCountPage: 10,
};

// Сам редьюсер - это функция, которая на вход получает стейт и экшен, делает его копию, изменяет его и возвращает.
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [...state.users].map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users, // ...state.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT_USERS:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalCountUsersAC = (totalCount) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCount: totalCount,
});

// Сосздаем экшен криейторы - создают экшены - экшем это объект у которого как минимум есть тип
export default usersReducer;
