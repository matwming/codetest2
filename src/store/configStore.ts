import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { newPostReducer as newPost } from './reducer/NewPost/NewPost';
import { postsListReducer as postsList } from './reducer/PostsList/PostsList';
/**
|--------------------------------------------------
| config rootReducer
|--------------------------------------------------
*/
const rootReducer = combineReducers({
  newPost,
  postsList,
});

/**
|--------------------------------------------------
| 自定义了一个logger middle 开始
|--------------------------------------------------
*/
const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching an action', action);
  }
  const result = next(action);
  console.log('nextState', store.getState());
};
/**
|--------------------------------------------------
| logger middleware 结束
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| connect to redux store in chrome
|--------------------------------------------------
*/
let composeEnhancer = compose;
//@ts-ignore
composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger)),
);

const configStore = () => {
  return store;
};
export default configStore;
