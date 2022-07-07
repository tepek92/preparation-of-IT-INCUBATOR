const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  userProfile: null
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
    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_NEW_POST });
export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export default profileReducer;
