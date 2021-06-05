import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  ul: {
    justifyContent: "center",
  },
}));

export default function PaginationButton({ count, setPageStart, setPageEnd }) {
  const classes = useStyles();

  const handlePageChange = (object, pageNumber) => {
    setPageStart(pageNumber * 10 - 10);
    setPageEnd(pageNumber * 10);
  };

  return (
    <div className={classes.root}>
      <Pagination
        classes={{ ul: classes.ul }}
        onChange={handlePageChange}
        count={count}
        showFirstButton
        showLastButton
      />
    </div>
  );
}
