import axios from '../../../config/config';
let initialState = [];
enum PostsListTypes {
  getAllPosts = 'getAllPosts',
}
export const initPosts = () => {
  return (dispatch) => {
    axios
      .get('posts')
      .then((res) => {
        if (res.status === 200) {
          return dispatch(getAllPosts(res.data));
        }
        console.log('initPostsError', res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
};
const getAllPosts = (value) => {
  return {
    type: PostsListTypes.getAllPosts,
    payload: value,
  };
};
export const postsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsListTypes.getAllPosts:
      return action.payload;
    default:
      return state;
  }
};
