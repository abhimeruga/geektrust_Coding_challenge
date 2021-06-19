export const searchItems = (users, searchText) => {
  const filteredUsers = users?.filter((user) => {
    const mergeUserObject = `${user.name} ${user.email} ${user.role}`;
    if (mergeUserObject.includes(searchText)) return user;
  });
  if (!searchText) return users;
  return filteredUsers;
};

export const pageSelectionController = (users) => {
  const pageSelectionLength = Math.round(users / 10);
  const pageSelectionObject = {
    isSelect: false,
  };
  const pageSelection = Array(pageSelectionLength).fill(pageSelectionObject);
  return pageSelection;
};
