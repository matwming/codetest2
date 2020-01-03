import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initPosts } from '../store/reducer/PostsList/PostsList';
import { Post } from '../store/reducer/NewPost/NewPost';
import { PostStyle } from '../UI/Basic/basicStyle';
import axios from '../config/config';
import { Link } from 'react-router-dom';

export default function PostsList() {
  const [comment, setComment] = useState({ postId: 0, commentBody: '' });
  const [checkComment, setCheckComment] = useState(false);
  const dispatch = useDispatch();
  const allPosts = useSelector((state: { postsList: Post[] }) => {
    return state.postsList;
  });
  useEffect(() => {
    dispatch(initPosts());
  }, []);
  const showAllPosts = () => {
    return allPosts.length > 0 ? (
      allPosts.map((el: Post, index: number) => {
        return (
          <PostStyle key={el.id}>
            <h2>Title: {el.title}</h2>
            <p>Body: {el.body}</p>
            <div>
              <label htmlFor="createComment"></label>
              <input
                type="text"
                id="createComment"
                placeholder="leave your comment"
                value={el.id === comment.postId ? comment.commentBody : ''}
                onChange={(event) => handleCommentOnChange(event, el.id)}
              />
              <button onClick={() => handlePostComment()}>send</button>
            </div>
          </PostStyle>
        );
      })
    ) : (
      <p>There is currently no posts available!</p>
    );
  };
  const handleCommentOnChange = (event, id) => {
    setComment({ postId: id, commentBody: event.target.value });
  };
  const handlePostComment = () => {
    if (comment.commentBody.length === 0) {
      return alert('Please enter your comment!');
    }
    axios
      .post(`posts/${comment.postId}/comments`, { body: comment.commentBody })
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          setCheckComment(true);
        }
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  return (
    <>
      {checkComment && (
        <p>
          Your comment is successfully sent. Click{' '}
          <Link
            to={{
              pathname: '/comments',
              search: `postId=${comment.postId}`,
            }}>
            here
          </Link>{' '}
          to see all the comments related to this post.
        </p>
      )}
      <div>All posts are shown here.</div>
      {showAllPosts()}
    </>
  );
}
