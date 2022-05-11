import { request, BASE_URL } from './api';

export const getAllUsers = async () => {
  const usersFromServer = await request(`${BASE_URL}/users/`);

  return usersFromServer;
};
