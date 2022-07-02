const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});

export default profileReducer;
