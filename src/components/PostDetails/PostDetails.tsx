import React, { useEffect, useState } from 'react';
import { NewCommentForm } from '../NewCommentForm';
import './PostDetails.scss';
import { getPostDetails } from '../../api/posts';
import { addComment, getComments, deleteComment } from '../../api/comments';
import { Comment, Post } from '../../react-app-env';

type Props = {
  selectedPostId: number,
};

export const PostDetails: React.FC<Props> = ({ selectedPostId }) => {
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onCommentAdd = (name: string, email: string, body: string) => {
    addComment(selectedPostId, name, email, body);
  };

  useEffect(() => {
    getComments(selectedPostId)
      .then(response => setComments(response));
  }, [comments]);

  useEffect(() => {
    getPostDetails(selectedPostId)
      .then(response => setPost(response));
  }, [selectedPostId]);

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>
      <section className="PostDetails__post">
        <p>{post?.body}</p>
      </section>
      <section className="PostDetails__comments">
        {!isVisible && (
          <button
            type="button"
            className="button"
            onClick={() => setIsVisible(true)}
          >
            {`Show ${comments?.length} comments`}
          </button>
        )}
        {isVisible && (
          <button
            type="button"
            className="button"
            onClick={() => setIsVisible(false)}
          >
            {`Hide ${comments?.length} comments`}
          </button>
        )}
        {isVisible && (
          <ul className="PostDetails__list">
            {comments?.map(comment => (
              <li
                className="PostDetails__list-item"
                key={comment.id}
              >
                <button
                  type="button"
                  className="PostDetails__remove-button button"
                  onClick={() => deleteComment(comment.id)}
                >
                  X
                </button>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            onCommentAdd={onCommentAdd}
          />
        </div>
      </section>
    </div>
  );
};
