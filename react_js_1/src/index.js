import state from "./redux/state";
import { addNewPost } from "./redux/state";
import reRenderTree from "./render";

reRenderTree(state, addNewPost);



