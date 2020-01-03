import React, { useEffect, useState } from 'react';
import axios from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { Post, createPost } from '../store/reducer/NewPost/NewPost';
import { Alert, Row, Col, Container } from '../UI/Basic/basicStyle';
import { useHistory } from 'react-router-dom';
import LoadingIndicator from '../component/Loading';

const Home: React.FC = () => {
  const [alert, setAlert] = useState({ isShow: false, content: '' });
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error: Error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const handlePost = () => {
    history.push({
      pathname: '/posts-list',
    });
  };
  return (
    <Container>
      {alert.isShow && (
        <Alert>
          {alert.content}
          <button onClick={handlePost} style={{ color: 'black' }}>
            See your posts!
          </button>
        </Alert>
      )}
      <form>
        <Row>
          <label htmlFor="userId">User Id:</label>
          <input
            type="text"
            id="userId"
            value={post.userId}
            placeholder="please type your User Id"
            onChange={onChangeHandler}
          />
        </Row>
        <Row>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Please type your Post Title"
            onChange={onChangeHandler}
            value={post.title}
          />
        </Row>
        <Row>
          <label htmlFor="body">Post Content:</label>
          <input
            type="area"
            id="body"
            placeholder="Please type your post content"
            onChange={onChangeHandler}
            value={post.body}
          />
        </Row>
        <LoadingIndicator loading={loading}>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </LoadingIndicator>
      </form>
    </Container>
  );
};
export default Home;
