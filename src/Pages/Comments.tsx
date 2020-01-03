import React, { useEffect, useState } from 'react';
import axios from '../config/config';
import { PostStyle } from '../UI/Basic/basicStyle';
interface comment {
  postId: number;
  id: number;
  email: string;
  name: string;
  body: string;
}
export default function Comments() {
  const [comments, setComment] = useState<comment[]>([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId: string = urlParams.get('postId');
    if (postId) {
      axios
        .get(`posts/${postId}/comments`)
        .then((res) => {
          if (res.status === 200) {
            setComment(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const showComment = () => {
    return comments.length > 0 ? (
      comments.map((el: comment, index: number) => {
        return (
          <PostStyle>
            <p>Name:{el.name}</p>
            <p>Email:{el.email}</p>
            <p>Body:{el.body}</p>
          </PostStyle>
        );
      })
    ) : (
      <p>There is no comment for this post</p>
    );
  };
  return (
    <>
      <div>this is comment list</div>
      {showComment()}
    </>
  );
}
