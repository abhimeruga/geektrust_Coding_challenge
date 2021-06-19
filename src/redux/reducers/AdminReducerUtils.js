export const selectUnSelectUser = (users, id) =>
  users.map((user) => {
    if (user.id !== id) return user;
    else return { ...user, isSelect: !user.isSelect };
  });

export const deleteUser = (users, id) => users.filter((user) => user.id !== id);

export const deleteSelectedUsers = (users) =>
  users.filter((user) => !user.isSelect);

export const updateUserDetails = (users, userDetails) =>
  users.map((user) => {
    if (user.id === userDetails.id) {
      return userDetails;
    } else {
      return user;
    }
  });

export const setPageSelection = (state, pageIndex) => {
  const selectionPage = state.selectionPage.map((page, index) => {
    if (pageIndex === index) {
      return { ...page, isSelect: !page.isSelect };
    } else {
      return page;
    }
  });

  let pageId = pageIndex * 10;
  const userData = state.userData.map((user, index) => {
    if (index === pageId && pageId < (pageIndex + 1) * 10) {
      pageId++;
      return { ...user, isSelect: selectionPage[pageIndex].isSelect };
    } else return user;
  });
  return { selectionPage, userData };
};
