export const searchItems = (users, searchText) => {
  const filteredUsers = users?.filter((user) => {
    const mergeUserObject = `${user.name} ${user.email} ${user.role}`;
    if (mergeUserObject.includes(searchText)) return user;
  });
  if (!searchText) return users;
  return filteredUsers;
};
