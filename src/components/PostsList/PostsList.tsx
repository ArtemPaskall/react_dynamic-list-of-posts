import React from 'react';
import './PostsList.scss';
import { Post } from '../../react-app-env';

type Props = {
  posts: Post[],
  serverError: boolean,
  selectedPostId: number,
  setSelectedPostId: (id: number) => void,
  noPostsError: boolean
};

export const PostsList: React.FC<Props> = ({
  posts,
  serverError,
  selectedPostId,
  setSelectedPostId,
  noPostsError,
}) => {
  return (
    <div className="PostsList">
      {serverError ? (
        <p>No data from server</p>
      ) : (
        <>
          <h2>Posts:</h2>
          {noPostsError
            ? <p>This user have no posts</p>
            : (
              <ul className="PostsList__list">
                {posts.map(post => (
                  <li
                    className="PostsList__item"
                    key={post.id}
                  >
                    <div>
                      <b>{`[User #${post.userId}]: `}</b>
                      {post.title}
                    </div>
                    <button
                      type="button"
                      className="PostsList__button button"
                      onClick={() => {
                        if (selectedPostId === post.id) {
                          setSelectedPostId(0);
                        } else {
                          setSelectedPostId(post.id);
                        }
                      }}
                    >
                      {post.id === selectedPostId ? 'Close' : 'Open'}
                    </button>
                  </li>
                ))}
              </ul>
            )}
        </>
      )}
    </div>
  );
};
