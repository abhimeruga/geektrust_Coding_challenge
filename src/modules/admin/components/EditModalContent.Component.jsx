import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { updateUserDetails } from "../../../redux/actions/AdminActions";
import FormInput from "../../../components/FormInput.Component";
import RadioButtonsGroup from "../../../components/FormRadio.Component";

const roleData = [
  { value: "admin", label: "Admin" },
  { value: "member", label: "Member" },
];

const formClasses = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};

export const EditModalContent = ({
  id,
  name,
  email,
  role,
  handleCloseModal,
}) => {
  const [userDetails, setUserDetails] = useState({
    id,
    name,
    email,
    role,
  });
  const dispatch = useDispatch(null);

  const updateEditedUserDetails = () => {
    dispatch(updateUserDetails(userDetails));
    handleCloseModal();
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: "5%",
        }}
      >
        <div style={formClasses}>
          <span style={{ fontWeight: "bold" }}>Name </span>
          <FormInput
            value={userDetails.name}
            setInputValue={(value) =>
              setUserDetails({
                ...userDetails,
                name: value,
              })
            }
          />
        </div>
        <div style={formClasses}>
          <span style={{ fontWeight: "bold" }}>Email ID </span>
          <FormInput
            value={userDetails.email}
            setInputValue={(value) =>
              setUserDetails({
                ...userDetails,
                email: value,
              })
            }
          />
        </div>
        <div style={formClasses}>
          <span style={{ fontWeight: "bold" }}>Role </span>
          <RadioButtonsGroup
            formRadioButtons={roleData}
            selectedValue={userDetails.role}
            handleSelection={(value) =>
              setUserDetails({ ...userDetails, role: value })
            }
          />
        </div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={updateEditedUserDetails}
      >
        Update
      </Button>
    </React.Fragment>
  );
};
