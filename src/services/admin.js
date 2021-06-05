import axios from "axios";

import { adminURLS } from "../constants/admin";

export const getUserDetails = async () => {
  const userDetails = await axios.get(adminURLS.userDetails);
  return userDetails.data;
};
