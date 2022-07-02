const ADD_NEW_MESSAGE_FIRST_USER = "ADD_NEW_MESSAGE_FIRST_USER";
const UPDATE_NEW_MESSAGE_TEXT_FIRST_USER = "UPDATE_NEW_MESSAGE_TEXT_FIRST_USER";

let initialState = {
  dialogsData: [
    {
      id: "1",
      name: "Pavel",
      avatar:
        "https://shutnikov.club/wp-content/uploads/2020/01/1_PiHoomzwh9Plr9_GA26JcA.png",
    },
    {
      id: "2",
      name: "Maria",
      avatar:
        "https://shutnikov.club/wp-content/uploads/2020/01/mschropp_avatar-300x300.png",
    },
    {
      id: "3",
      name: "Wolf-=777=-",
      avatar:
        "https://i1.photo.2gis.com/images/profile/30258560049350742_9a4a.jpg",
    },
    {
      id: "4",
      name: "Kisa 1991",
      avatar:
        "https://shutnikov.club/wp-content/uploads/2020/01/enimals14.jpg",
    },
    {
      id: "5",
      name: "Stich",
      avatar:
        "https://i.gifer.com/fetch/w300-preview/c2/c2fe20b49aed794dfcc9c98db71f0242.gif",
    },
  ],
  messagesData: {
    firstUser: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How are you?" },
      { id: "3", message: "Fine!" },
    ],
    newFirstUserMessage: "",
    secondUser: [
      { id: "1", message: "Hi" },
      { id: "2", message: "Fine! And you?" },
      { id: "3", message: "Good :)" },
    ],
  },
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE_FIRST_USER: {
      let copyState = {...state};
      let length = copyState.messagesData.firstUser.length - 1;
      let newId = +copyState.messagesData.firstUser[length].id + 1;
      copyState.messagesData = {...state.messagesData};
      copyState.messagesData.firstUser = [...state.messagesData.firstUser];
      copyState.messagesData.firstUser.push({
        id: newId,
        message: copyState.messagesData.newFirstUserMessage,
      });
      copyState.messagesData.newFirstUserMessage = "";
      return copyState;
    }
    case UPDATE_NEW_MESSAGE_TEXT_FIRST_USER: {
      let copyState = {...state};
      copyState.messagesData = {...state.messagesData};
      copyState.messagesData.newFirstUserMessage = action.newMessage;
      return copyState;
    }
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