import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import PaginationButton from "../../components/Pagination.Component";
import FormCheckbox from "../../components/FormCheckbox.Component";
import FormInput from "../../components/FormInput.Component";
import ModalContent from "../../components/Modal.Component";
import { EditModalContent } from "./components/EditModalContent.Component";
import { searchItems } from "./AdminUtils";
import {
  deletUser,
  selectUnSelectUser,
  deleteSelectedUsers,
  setPageIsSelect,
} from "../../redux/actions/AdminActions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableSize: {
    width: "90%",
    margin: "2% 5% 2% 5%",
  },
  adminStyles: {
    width: "100%",
    margin: "3%",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default function AdminUI() {
  const classes = useStyles();
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(10);
  const [inputValue, setInputValue] = useState("");

  const { userData, selectionPage } = useSelector((state) => state.adminData);
  const dispatch = useDispatch();
  const [users, setUsers] = useState(userData);
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    setUsers(searchItems(userData, inputValue));
  }, [inputValue, userData]);

  const selectHandle = (id) => {
    dispatch(selectUnSelectUser(id));
  };

  const deleteHandler = () => {
    dispatch(deleteSelectedUsers());
  };

  const editUser = (user) => {
    setOpenModal(!openModal);
    setUserSelected(user);
  };

  const filterUsers = users?.slice(pageStart, pageEnd);
  return (
    <div className={classes.adminStyles}>
      <FormInput
        label={"Search by Name, Email or Role"}
        setInputValue={setInputValue}
        value={inputValue}
      />
      {filterUsers.length > 0 ? (
        <div className={classes.tableSize}>
          <TableContainer component={Paper}>
            <Table
              stickyHeader
              aria-label="sticky table"
              className={classes.table}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    {
                      <FormCheckbox
                        isSelect={selectionPage[pageStart / 10].isSelect}
                        selectAllHandler={() => {
                          dispatch(setPageIsSelect(pageStart / 10));
                        }}
                      />
                    }
                  </TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Role</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterUsers?.map((user) => (
                  <TableRow selected={user.isSelect} key={user.id}>
                    <TableCell component="th" scope="row">
                      {
                        <FormCheckbox
                          isSelect={user.isSelect}
                          selectHandle={() => selectHandle(user.id)}
                        />
                      }
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.role}</TableCell>
                    <TableCell align="center">
                      <span
                        onClick={() => editUser(user)}
                        style={{ cursor: "pointer" }}
                      >
                        <EditIcon />
                      </span>
                      <span
                        onClick={() => {
                          dispatch(deletUser(user.id));
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <DeleteIcon />{" "}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : inputValue.length > 0 ? (
        <h2>Search Results Not Found!!</h2>
      ) : (
        <h2>No Results Found</h2>
      )}
      <div className={classes.footer}>
        <Button variant="contained" color="secondary" onClick={deleteHandler}>
          Delete Selected
        </Button>
        <PaginationButton
          setPageEnd={setPageEnd}
          setPageStart={setPageStart}
          count={Math.round(users?.length / 10)}
        />
      </div>
      <ModalContent
        title={"Update User Details"}
        isModalOpen={openModal}
        content={
          <EditModalContent
            id={userSelected.id}
            name={userSelected.name}
            email={userSelected.email}
            role={userSelected.role}
            handleCloseModal={() => setOpenModal(false)}
          />
        }
        handleCloseModal={() => setOpenModal(false)}
      />
    </div>
  );
}
