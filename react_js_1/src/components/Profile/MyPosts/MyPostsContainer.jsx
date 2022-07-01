import MyPosts from "./MyPosts";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const onAddNewPost = () =>
          store.dispatch(addNewPostActionCreator());
        const onUpdatePostText = (newPost) => {
          store.dispatch(updateNewPostTextActionCreator(newPost));
        };

        return (
          <MyPosts
            addNewPost={onAddNewPost}
            updateNewPostText={onUpdatePostText}
            postDate={store.getState().profilePage.postDate}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
