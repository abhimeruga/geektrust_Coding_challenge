import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  inputElement: {
    width: "90%",
    margin: "auto",
  },
}));

export default function FormInput({ label, setInputValue }) {
  const classes = useStyles();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.inputElement}
        onChange={handleInputChange}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </form>
  );
}
