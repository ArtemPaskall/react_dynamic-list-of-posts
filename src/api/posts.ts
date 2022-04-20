import { request, BASE_URL } from './api';

export const getPosts = async () => {
  const postsFromServer = await request(`${BASE_URL}/posts/}`);

  return postsFromServer;
};

export const getUserPosts = (userId: number) => {
  return request(`${BASE_URL}/posts/${userId}`);
};
