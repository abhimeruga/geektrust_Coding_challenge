import { ADMIN_ACTION_TYPES } from "../../constants/admin";

const {
  DELETE_SELECTED_USERS,
  SELECT_UNSELECT_USER,
  DELETE_USER,
  SET_USER_DATA,
  UPDATE_USER_DETAILS,
  SET_PAGE_SELECTIONS,
  HANDLE_PAGE_SELECTION,
} = { ...ADMIN_ACTION_TYPES };

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});

export const deletUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const selectUnSelectUser = (id) => ({
  type: SELECT_UNSELECT_USER,
  payload: id,
});

export const deleteSelectedUsers = () => ({
  type: DELETE_SELECTED_USERS,
});

export const updateUserDetails = (data) => ({
  type: UPDATE_USER_DETAILS,
  userDetails: data,
});

export const setPageSelection = (data) => ({
  type: SET_PAGE_SELECTIONS,
  payload: data,
});

export const setPageIsSelect = (pageId) => ({
  type: HANDLE_PAGE_SELECTION,
  page: pageId,
});
