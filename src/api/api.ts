export const BASE_URL = 'https://mate.academy/students-api';

export async function request(url: string) {
  const result = await fetch(url);

  return result.json();
}
