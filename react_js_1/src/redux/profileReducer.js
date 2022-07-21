import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";


let initialState = {
  postDate: [
    { id: "1", message: "Всем хорошего дня!", likeCount: "44" },
    { id: "2", message: "С днем города!", likeCount: "13" },
    {
      id: "3",
      message: "Не всех можно потерять, но всех можно забыть :(",
      likeCount: "4",
    },
    { id: "4", message: "Abgegfgfe", likeCount: "0" },
  ],
  userProfile: null,
  userStatus: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let length = state.postDate.length - 1;
      let newId = +state.postDate[length].id + 1;

      return {
        ...state,
        postDate: [
          ...state.postDate,
          { id: newId + "", message: action.newPost, likeCount: "0" },
        ],
      };
      case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
      case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      };
    default:
      return state;
  }
};

export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost});

export const setUser = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

export const setUserProfile = (userId) => {
  return((dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUser(data)));
    }
  );
};

export const setUserStatus = (userId) => {
  return((dispatch) => {
    profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)));
    }
  );
};

export const updateUserStatus = (userStatus) => {
  return((dispatch) => {
    profileAPI.updateStatus(userStatus).then(data => {
      if (data.resultCode === 0) {
      dispatch(setStatus(userStatus))
      }
    }
      );
    }
  );
};

export default profileReducer;
