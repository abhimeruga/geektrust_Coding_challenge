import { ADMIN_ACTION_TYPES } from "../../constants/admin";

const {
  DELETE_SELECTED_USERS,
  SET_SELECT_ALL,
  SELECT_UNSELECT_USER,
  DELETE_USER,
  SET_USER_DATA,
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

export const setSelectAll = () => ({
  type: SET_SELECT_ALL,
});

export const deleteSelectedUsers = () => ({
  type: DELETE_SELECTED_USERS,
});
