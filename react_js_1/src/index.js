import state, {
  addNewMessageFirst,
  updateNewMessageFirst,
} from "./redux/state";
import { addNewPost, updateNewPost } from "./redux/state";
import reRenderTree from "./render";

reRenderTree(
  state,
  addNewPost,
  updateNewPost,
  addNewMessageFirst,
  updateNewMessageFirst
);
