let state = {
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
};

let reRenderTree = () => {};

export const subscriber = (observer) => {
  reRenderTree = observer;
};

export const addNewPost = () => {
  let newId =
    +state.profilePage.postDate[state.profilePage.postDate.length - 1].id + 1;
  state.profilePage.postDate.push({
    id: newId + "",
    message: state.profilePage.newPostText,
    likeCount: "0",
  });
  state.profilePage.newPostText = "";

  reRenderTree(
    state,
    addNewPost,
    updateNewPost,
    addNewMessageFirst,
    updateNewMessageFirst
  );
};

export const updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;

  reRenderTree(
    state,
    addNewPost,
    updateNewPost,
    addNewMessageFirst,
    updateNewMessageFirst
  );
};

export const addNewMessageFirst = () => {
  let newId =
    +state.dialogsPage.messagesData.firstUser[
      state.dialogsPage.messagesData.firstUser.length - 1
    ].id + 1;
  state.dialogsPage.messagesData.firstUser.push({
    id: newId,
    message: state.dialogsPage.messagesData.newFirstUserMessage,
  });

  state.dialogsPage.messagesData.newFirstUserMessage = "";

  reRenderTree(
    state,
    addNewPost,
    updateNewPost,
    addNewMessageFirst,
    updateNewMessageFirst
  );
};

export const updateNewMessageFirst = (newMessage) => {
  state.dialogsPage.messagesData.newFirstUserMessage = newMessage;

  reRenderTree(
    state,
    addNewPost,
    updateNewPost,
    addNewMessageFirst,
    updateNewMessageFirst
  );
};


export default state;
