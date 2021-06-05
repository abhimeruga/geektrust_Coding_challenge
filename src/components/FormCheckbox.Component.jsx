import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes({
  isSelect,
  selectHandle,
  selectAllHandler,
}) {
  const handleChange = (event) => {
    selectHandle && selectHandle();
    selectAllHandler && selectAllHandler();
  };

  return (
    <div>
      <Checkbox
        checked={isSelect}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
