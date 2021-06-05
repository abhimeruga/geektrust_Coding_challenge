export const selectUnSelectUser = (users, id) =>
  users.map((user) => {
    if (user.id !== id) return user;
    else return { ...user, isSelect: !user.isSelect };
  });

export const deleteUser = (users, id) => users.filter((user) => user.id !== id);

export const selectALLUsers = (users, isSelectAll) =>
  users.map((user) => ({ ...user, isSelect: isSelectAll }));

export const deleteSelectedUsers = (users) =>
  users.filter((user) => !user.isSelect);
