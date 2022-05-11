import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/general.scss';
import { Loader } from './components/Loader';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { getPosts, getPostDetails } from './api/posts';
import { getAllUsers } from './api/users';
import { Post, User } from './react-app-env';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [serverError, setServerError] = useState(false);
  const [noPostsError, setNoPostsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    setServerError(false);
    setNoPostsError(false);
    if (selectedUserId === 0) {
      setIsLoading(true);
      getPosts()
        .then(response => (setPosts(response)))
        .then(() => setIsLoading(false))
        .catch(() => setServerError(true));
    } else {
      getPostDetails(selectedUserId)
        .then(response => (setPosts(response)))
        .catch(() => setNoPostsError(true));

      setSelectedPostId(0);
    }
  }, [selectedUserId]);

  useEffect(() => {
    getAllUsers()
      .then(response => (setAllUsers(response)))
      .catch(() => setServerError(true));
  }, []);

  const onUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(+event.target.value);
  };

  return (
    <div className="App">
      <header className="App__header">
        <label htmlFor="App__users">
          Select a user: &nbsp;
          <select
            className="App__user-selector"
            id="App__users"
            onChange={onUserChange}
          >
            <option value="0">All users</option>
            {allUsers.map(user => (
              <option
                value={user.id}
                key={user.id}
              >
                {user.name}
              </option>
            ))}
          </select>
        </label>
      </header>
      <main className="App__main">
        <div className="App__sidebar">
          {isLoading ? (
            <Loader />
          ) : (
            <PostsList
              posts={posts}
              serverError={serverError}
              selectedPostId={selectedPostId}
              setSelectedPostId={setSelectedPostId}
              noPostsError={noPostsError}
            />
          )}
        </div>
        <div className="App__content">
          {(selectedPostId === 0) ? (
            <p>No post details</p>
          ) : (
            <PostDetails
              selectedPostId={selectedPostId}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
