import React from "react";
import { FormRenderer } from "@data-driven-forms/react-form-renderer";
import { Typography } from "@material-ui/core";
import FormTemplate from "../components/FormTemplate";
import PersonalizedTextField from "../components/PersonalizedTextField";
import schema from "../schemes/firstFormExample.json";

const componentMapper = {
  textField: PersonalizedTextField,
  "custom-component-type": PersonalizedTextField
};

const ComponentMapper = () => {
  const [values, setValues] = React.useState({});
  return (
    <div>
      <Typography variant="h4">Formulário com inputs personalizados</Typography>
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplate}
        schema={schema}
        onSubmit={(values) => setValues(values)}
        onCancel={() => console.log("cancel action")}
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default ComponentMapper;
