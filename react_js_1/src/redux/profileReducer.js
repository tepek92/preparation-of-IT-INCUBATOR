import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
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
  newPostText: "",
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
          { id: newId + "", message: state.newPostText, likeCount: "0" },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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

export const addNewPost = () => ({ type: ADD_NEW_POST });
export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const setUser = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

export const setUserProfile = (userId) => {
  return((dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUser(data)));
    }
  );
};

export const getUserStatus = (userId) => {
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
