import profileReducer, { addNewPost, deletePost } from "./profileReducer";

let state = {
  postDate: [
    { id: "1", message: "Всем хорошего дня!", likeCount: "44" },
    { id: "2", message: "С днем города!", likeCount: "13" },
    { id: "3", message: "Не всех можно", likeCount: "4" },
    { id: "4", message: "Abgegfgfe", likeCount: "0" },
  ],
};

it("after adding the post, the length increaseds", () => {
  let action = addNewPost("New post added");
  let newState = profileReducer(state, action);

  expect(newState.postDate.length).toBe(5);
});

it("after deleting the post, the length decreased", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postDate.length).toBe(3);
});

it("added post is correct", () => {
  let action = addNewPost("New post added");
  let newState = profileReducer(state, action);

  expect(newState.postDate[4].message).toBe("New post added");
});


it("deleting an incorrect id works correctly", () => {
  let action = deletePost(686);
  let newState = profileReducer(state, action);

  expect(newState.postDate.length).toBe(4);
});