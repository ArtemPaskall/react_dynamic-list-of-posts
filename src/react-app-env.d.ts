/// <reference types="react-scripts" />
export type Post = {
  id: number,
  createdAt: string,
  updatedAt: string,
  userId: null | number,
  title: string,
  body: string
};

export type User = {
  id: number,
  createdAt: string,
  updatedAt: string,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
};

export type Comment = {
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string,
};
