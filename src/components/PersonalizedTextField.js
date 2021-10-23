import React from "react";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import { TextField } from "@material-ui/core";

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
    <div>
      <TextField required={isRequired} label={label} {...input} {...rest} />
    </div>
  );
};

export default PersonalizedTextField;
