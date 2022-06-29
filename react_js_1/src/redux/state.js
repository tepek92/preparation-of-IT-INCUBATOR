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

  getState() {
    return this._state;
  },

  _reRenderTrees() {},

  subscriber(observer) {
    this._reRenderTree = observer;
  },
  
  addNewPost() {
    let newId =
      +this._state.profilePage.postDate[this._state.profilePage.postDate.length - 1].id + 1;
    this._state.profilePage.postDate.push({
      id: newId + "",
      message: this._state.profilePage.newPostText,
      likeCount: "0",
    });
    this._state.profilePage.newPostText = "";
    this._reRenderTree(store);
  },
  
  updateNewPost (newText) {
    console.log("i tyt");
    this._state.profilePage.newPostText = newText;
    this._reRenderTree(store);
  },
  
  addNewMessageFirst () {
    let newId =
      +this._state.dialogsPage.messagesData.firstUser[
        this._state.dialogsPage.messagesData.firstUser.length - 1
      ].id + 1;
      this._state.dialogsPage.messagesData.firstUser.push({
      id: newId,
      message: this._state.dialogsPage.messagesData.newFirstUserMessage,
    });
  
    this._state.dialogsPage.messagesData.newFirstUserMessage = "";
  
    this._reRenderTree(store);
  },
  
  updateNewMessageFirst (newMessage) {
    this._state.dialogsPage.messagesData.newFirstUserMessage = newMessage;
    this._reRenderTree(store);
  }
 }

export default store;
