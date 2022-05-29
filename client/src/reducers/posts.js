import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      // same as update
      //first we map the post, we check what is the one post that was changed a.k.a. liked, return the post with the change
      // and if the post was not liked, we just return the post as is
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case UPDATE:
      // output of MAP method is ARRAY
      // action.payload is the updated post in this case.
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
