import { request, BASE_URL } from './api';

export const getPosts = async () => {
  const postsFromServer = await request(`${BASE_URL}/posts/`);

  return postsFromServer;
};

export const getPostDetails = async (userId: number) => {
  const userPostsFromServer = await request(`${BASE_URL}/posts/${userId}`);

  return userPostsFromServer;
};
