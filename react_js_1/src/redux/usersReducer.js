import { usersAPI, followAPI } from "../api/api";

// Экшены, переменные
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "TOTAL_COUNT_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_DISABLED_BUTTON = "SET_IS_DISABLED_BUTTON";

// Стартовый стейт
let initialState = {
  users: [],
  currentPage: 1,
  totalCount: 0,
  usersCountPage: 10,
  isFetching: false,
  isFollowedProgress: [],
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
        users: action.users,
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
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_IS_DISABLED_BUTTON:
      return {
        ...state,
        isFollowedProgress: action.isDisable
          ? [...state.isFollowedProgress, action.userID]
          : state.isFollowedProgress.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

// Action creators
export const followPosition = (userId) => ({ type: FOLLOW, id: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalCountUsers = (totalCount) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCount: totalCount,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching,
});
export const setIsDisabled = (userID, isDisable) => ({
  type: SET_IS_DISABLED_BUTTON,
  userID: userID,
  isDisable: isDisable,
});

// Thunk Creator
export const getUsersInfo = (currentPage, usersCountPage) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, usersCountPage).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setIsFetching(false));
      dispatch(setTotalCountUsers(data.totalCount));
    });
  };
};

export const follow = (id, followStatus) => {
  return (dispatch) => {
    dispatch(setIsDisabled(id, true));
    if (followStatus) {
      followAPI.deleteFollowed(id).then((data) => {
        if (data.resultCode === 0) {
          dispatch(followPosition(id));
        }
        dispatch(setIsDisabled(id, false));
      });
    } else {
      followAPI.postFollowed(id).then((data) => {
        if (data.resultCode === 0) {
          dispatch(followPosition(id));
        }
        dispatch(setIsDisabled(id, false));
      });
    }
  };
};

// Сосздаем экшен криейторы - создают экшены - экшем это объект у которого как минимум есть тип
export default usersReducer;
