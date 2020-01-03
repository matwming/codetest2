import React, { useEffect, useState } from 'react';
import axios from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { Post, createPost } from '../store/reducer/NewPost/NewPost';
import { Alert } from '../UI/Basic/basicStyle';
import { useHistory } from 'react-router-dom';
const Home: React.FC = () => {
  const [alert, setAlert] = useState({ isShow: false, content: '' });
  const dispatch = useDispatch();
  const history: { push: Function } = useHistory();
  const post = useSelector((state: { newPost: Post }) => {
    return state.newPost;
  });
  const onChangeHandler = (e) => {
    const [key, value] = [e.target.id, e.target.value];
    console.log('key', key, 'value', value);
    dispatch(createPost(key, value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('posts', { ...post })
      .then((res: { data: Post; status: number }) => {
        console.log(res);
        if (res.status === 201) {
          setAlert({
            isShow: true,
            content: 'Your post is successfully created!',
          });
        }
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  const handlePost = () => {
    history.push({
      pathname: '/posts-list',
    });
  };
  return (
    <>
      {alert.isShow && (
        <Alert>
          {alert.content}
          <button onClick={handlePost}>See your posts!</button>
        </Alert>
      )}
      <form>
        <label htmlFor="userId">User Id:</label>
        <input
          type="text"
          id="userId"
          value={post.userId}
          placeholder="please type your User Id"
          onChange={onChangeHandler}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Please type your Post Title"
          onChange={onChangeHandler}
          value={post.title}
        />

        <label htmlFor="body">Post Content:</label>
        <input
          type="area"
          id="body"
          placeholder="Please type your post content"
          onChange={onChangeHandler}
          value={post.body}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};
export default Home;
