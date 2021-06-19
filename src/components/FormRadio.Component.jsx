import React, { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup({
  RadioHeader = "header",
  formRadioButtons,
  handleSelection,
  selectedValue,
}) {
  const [value, setValue] = React.useState(selectedValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    handleSelection(value);
  }, [value]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label={formRadioButtons}
        name={RadioHeader}
        value={value}
        onChange={handleChange}
      >
        {formRadioButtons.map((radio) => (
          <FormControlLabel
            value={radio.value}
            control={<Radio />}
            label={radio.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
