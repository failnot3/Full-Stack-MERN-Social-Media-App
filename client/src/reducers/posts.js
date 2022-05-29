export default (posts = [], action) => {
  switch (action.type) {
    case "UPDATE":
      // output of MAP method is ARRAY
      // action.payload is the updated post in this case.
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
