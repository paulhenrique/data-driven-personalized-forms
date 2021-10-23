import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import { Button } from "@material-ui/core";

const FormTemplate = ({ formFields }) => {
  const { handleSubmit, onCancel } = useFormApi();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      {formFields}
      <Button type="submit" variant="primary">
        Enviar
      </Button>
      <Button type="button" label="cancel" onClick={onCancel}>
        Cancelar
      </Button>
    </form>
  );
};

export default FormTemplate;
