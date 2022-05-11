import { request, BASE_URL } from './api';

export const getComments = async (PostId: number) => {
  const commentsFromServer = await request(`${BASE_URL}/comments?postId=${PostId}`);

  return commentsFromServer;
};

export const addComment = (postId: number, name: string, email: string, body: string) => {
  return fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      postId,
      name,
      email,
      body,
    }),
  });
};

export const deleteComment = async (commentId: number) => {
  return fetch(`${BASE_URL}/comments/${commentId}`, { method: 'DELETE' });
};
