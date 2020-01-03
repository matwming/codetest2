export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface PostActions {
  readonly type: PostTypes;
  payload: { key: string; value: string };
}
let initialState: Post = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

enum PostTypes {
  createPost = 'createPost',
}
/**
 * Action:
 */
export const createPost = (key: string, value: string): PostActions => {
  return {
    type: PostTypes.createPost,
    payload: { key, value },
  };
};

export const newPostReducer = (state = initialState, action: PostActions) => {
  switch (action.type) {
    case PostTypes.createPost:
      const copiedState = { ...state };
      copiedState[action.payload.key] = action.payload.value;
      console.log('copiedState', copiedState, action.payload);
      return copiedState;
    default:
      return state;
  }
};
