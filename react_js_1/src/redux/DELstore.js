import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._reRenderTree(this._state);
  },
};

export default store;



// [
//   {
//     id: 1,
//     photo: "https://avatarko.ru/img/kartinka/12/multfilm_rusalka_Ariel_11649.jpg",
//     followed: true,
//     fullName: "Maria Savina",
//     status: "Im HAPPY!",
//     adress: { country: "France", city: "Paris" },
//   },
//   {
//     id: 2,
//     photo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1950s-laika-space-dog-russian-matchbox-label-retro-graphics.jpg",
//     followed: false,
//     fullName: "Mustag",
//     status: "Im DOG!",
//     adress: { country: "France", city: "Paris" },
//   },
//   {
//     id: 3,
//     photo: "https://cs10.pikabu.ru/post_img/2019/02/03/6/1549186262135686997.jpg",
//     followed: true,
//     fullName: "Tom",
//     status: "Im pitia!",
//     adress: { country: "France", city: "Paris" },
//   },
// ]
