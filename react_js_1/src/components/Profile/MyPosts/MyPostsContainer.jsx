import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

import {
  addNewPost,
  updateNewPostText,
} from "../../../redux/profileReducer";

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

const MyPostsContainer = connect(mapStateToProps, {addNewPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;
