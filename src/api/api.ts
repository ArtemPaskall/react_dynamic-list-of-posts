export const BASE_URL = 'https://mate.academy/students-api';

export async function request(url: string) {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error('Server error');
  }

  return result.json();
}
