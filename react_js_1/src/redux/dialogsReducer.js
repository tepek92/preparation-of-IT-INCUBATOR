const ADD_NEW_MESSAGE_FIRST_USER = "ADD_NEW_MESSAGE_FIRST_USER";
const UPDATE_NEW_MESSAGE_TEXT_FIRST_USER = "UPDATE_NEW_MESSAGE_TEXT_FIRST_USER";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE_FIRST_USER:
      let length = state.messagesData.firstUser.length - 1;
      let newId = +state.messagesData.firstUser[length].id + 1;
      state.messagesData.firstUser.push({
        id: newId,
        message: state.messagesData.newFirstUserMessage,
      });
      state.messagesData.newFirstUserMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT_FIRST_USER:
      state.messagesData.newFirstUserMessage = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addNewMessageFirstUserActionCreator = () => ({
  type: ADD_NEW_MESSAGE_FIRST_USER,
});
export const updateNewMessageTextFirstUserActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT_FIRST_USER,
  newMessage: newMessage,
});

export default dialogsReducer;