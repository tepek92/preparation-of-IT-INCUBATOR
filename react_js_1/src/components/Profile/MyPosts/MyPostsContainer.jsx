import React from 'react';
import MyPosts from "./MyPosts";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
// import StoreContext from "../../../StoreContext";
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const onAddNewPost = () =>
//           store.dispatch(addNewPostActionCreator());
//         const onUpdatePostText = (newPost) => {
//           store.dispatch(updateNewPostTextActionCreator(newPost));
//         };

//         return (
//           <MyPosts
//             addNewPost={onAddNewPost}
//             updateNewPostText={onUpdatePostText}
//             postDate={store.getState().profilePage.postDate}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return ({
    postDate: state.profilePage.postDate, 
    newPostText: state.profilePage.newPostText
    });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewPost: () => {
      dispatch(addNewPostActionCreator());
    },
    updateNewPostText: (newPost) => {
      dispatch(updateNewPostTextActionCreator(newPost));
    }
  })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
