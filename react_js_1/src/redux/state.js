const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_MESSAGE_FIRST_USER = "ADD-NEW-MESSAGE-FIRST-USER";
const UPDATE_NEW_MESSAGE_TEXT_FIRST_USER = "UPDATE-NEW-MESSAGE-TEXT-FIRST-USER";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
    },
  },

  _reRenderTrees() {},

  subscriber(observer) {
    this._reRenderTree = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      let length =  this._state.profilePage.postDate.length - 1;   
      let newId = +this._state.profilePage.postDate[length].id + 1;
      this._state.profilePage.postDate.push({
        id: newId + "",
        message: this._state.profilePage.newPostText,
        likeCount: "0",
      });
      this._state.profilePage.newPostText = "";
      this._reRenderTree(store);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._reRenderTree(store);
    } else if (action.type === ADD_NEW_MESSAGE_FIRST_USER) {
      let length = this._state.dialogsPage.messagesData.firstUser.length - 1;
      let newId = +this._state.dialogsPage.messagesData.firstUser[length].id + 1;
      this._state.dialogsPage.messagesData.firstUser.push({
      id: newId,
      message: this._state.dialogsPage.messagesData.newFirstUserMessage,
    });
    this._state.dialogsPage.messagesData.newFirstUserMessage = "";
    this._reRenderTree(store);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT_FIRST_USER) {
      this._state.dialogsPage.messagesData.newFirstUserMessage = action.newMessage;
      this._reRenderTree(store);
    }
  },
};

export const addNewPostActionCreator = () => 
({type: ADD_NEW_POST});
export const updateNewPostTextActionCreator = (newText) => 
({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const addNewMessageFirstUserActionCreator = () => 
({type: ADD_NEW_MESSAGE_FIRST_USER});
export const updateNewMessageTextFirstUserActionCreator = (newMessage) => 
({type: UPDATE_NEW_MESSAGE_TEXT_FIRST_USER, newMessage: newMessage});

export default store;
