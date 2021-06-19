import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import AdminUI from "./modules/admin/AdminUI";
import { setUserData, setPageSelection } from "./redux/actions/AdminActions";
import { getUserDetails } from "./services/admin";
import { pageSelectionController } from "./modules/admin/AdminUtils";

const addIsSelectToUser = (users) =>
  users.map((user) => {
    return { ...user, isSelect: false };
  });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userData = await getUserDetails();
      dispatch(setPageSelection(pageSelectionController(userData?.length)));
      dispatch(setUserData(addIsSelectToUser(userData)));
    })();
  }, [dispatch]);
  return (
    <div className="App">
      <h3>{"Geektrust Challenge - Admin UI"}</h3>
      <AdminUI />
    </div>
  );
}

export default App;
