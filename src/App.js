import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AdminUI from "./modules/admin/AdminUI";

import { setUserData } from "./redux/actions/AdminActions";

import { getUserDetails } from "./services/admin";
import "./App.css";

const addIsSelectToUser = (users) =>
  users.map((user) => {
    return { ...user, isSelect: false };
  });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userData = await getUserDetails();
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
