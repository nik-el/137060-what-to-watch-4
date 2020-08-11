export const userDataAdapter = (userData) => (
  {
    avatarUrl: userData.avatar_url,
    email: userData.email,
    id: userData.id,
    name: userData.name,
  }
);
