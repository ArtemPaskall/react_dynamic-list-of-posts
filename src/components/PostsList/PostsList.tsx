import React, { useState, useEffect } from 'react';
import './PostsList.scss';
import { getPosts } from '../../api/posts';

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsFromServer = await getPosts();

    setPosts(postsFromServer);
  });

  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">

        {/* <li className="PostsList__item">
          <div>
            <b>[User #1]: </b>
            sunt aut facere repellat provident occaecati excepturi optio
          </div>
          <button
            type="button"
            className="PostsList__button button"
          >
            Close
          </button>
        </li> */}

        {/* <li className="PostsList__item">
          <div>
            <b>[User #2]: </b>
            et ea vero quia laudantium autem
          </div>

          <button
            type="button"
            className="PostsList__button button"
          >
            Open
          </button>
        </li> */}
      </ul>
    </div>
  );
};
