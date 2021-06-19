import {
  deleteSelectedUsers,
  deleteUser,
  selectUnSelectUser,
  updateUserDetails,
  setPageSelection,
} from "./AdminReducerUtils";

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

const initialState = {
  userData: [],
  selectionPage: [],
};
export const AdminUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: [...state.userData, ...action.payload] };
    case DELETE_USER:
      return {
        ...state,
        userData: [...deleteUser(state.userData, action.payload)],
      };
    case SELECT_UNSELECT_USER:
      return {
        ...state,
        userData: [...selectUnSelectUser(state.userData, action.payload)],
      };

    case DELETE_SELECTED_USERS:
      return {
        ...state,
        userData: [...deleteSelectedUsers(state.userData)],
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        userData: [...updateUserDetails(state.userData, action.userDetails)],
      };
    case SET_PAGE_SELECTIONS:
      return {
        ...state,
        selectionPage: [...action.payload],
      };
    case HANDLE_PAGE_SELECTION:
      return {
        ...state,
        ...setPageSelection(state, action.page),
      };
    default:
      return state;
  }
};
