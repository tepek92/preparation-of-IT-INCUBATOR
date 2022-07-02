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
    case ADD_NEW_POST: {
      let copyState = {...state};
      let length = copyState.postDate.length - 1;
      let newId = +copyState.postDate[length].id + 1;
      copyState.postDate = [...state.postDate];
      copyState.postDate.push({
        id: newId + "",
        message: copyState.newPostText,
        likeCount: "0",
      });
      copyState.newPostText = "";
      return copyState;
    }
    case UPDATE_NEW_POST_TEXT: {
      let copyState = {...state};
      copyState.newPostText = action.newText;
      return copyState;
    }
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
