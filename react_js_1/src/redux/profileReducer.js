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
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let length = state.postDate.length - 1;
      let newId = +state.postDate[length].id + 1;
      state.postDate.push({
        id: newId + "",
        message: state.newPostText,
        likeCount: "0",
      });
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
