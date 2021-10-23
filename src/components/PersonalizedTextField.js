import React from "react";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import { TextField, Box } from "@material-ui/core";

const PersonalizedTextField = (props) => {
  const {
    customProp,
    label,
    input,
    isRequired,
    FieldArrayProvider,
    dataType,
    ...rest
  } = useFieldApi(props);
  return (
    <Box my={2}>
      <TextField
        fullWidth
        required={isRequired}
        label={label}
        {...input}
        {...rest}
      />
    </Box>
  );
};

export default PersonalizedTextField;
