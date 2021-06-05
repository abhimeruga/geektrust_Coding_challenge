import {
  deleteSelectedUsers,
  deleteUser,
  selectALLUsers,
  selectUnSelectUser,
} from "./AdminReducerUtils";
import { ADMIN_ACTION_TYPES } from "../../constants/admin";

const {
  DELETE_SELECTED_USERS,
  SET_SELECT_ALL,
  SELECT_UNSELECT_USER,
  DELETE_USER,
  SET_USER_DATA,
} = { ...ADMIN_ACTION_TYPES };

const initialState = {
  userData: [],
  isSelectAll: false,
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
    case SET_SELECT_ALL:
      return {
        ...state,
        isSelectAll: !state.isSelectAll,
        userData: [...selectALLUsers(state.userData, !state.isSelectAll)],
      };
    case DELETE_SELECTED_USERS:
      return {
        ...state,
        userData: [...deleteSelectedUsers(state.userData)],
      };
    default:
      return state;
  }
};
