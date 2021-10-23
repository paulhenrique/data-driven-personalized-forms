import React from "react";
import { FormRenderer } from "@data-driven-forms/react-form-renderer";
import { Typography } from "@material-ui/core";
import FormTemplate from "../components/FormTemplate";
import schema from "../schemes/firstFormExample.json";
import PersonalizedFields from "../source/PersonalizedFields";

const DefaultForm = () => {
  const [values, setValues] = React.useState({});
  return (
    <div>
      <Typography variant="h4">Formulário com inputs personalizados</Typography>
      <FormRenderer
        componentMapper={PersonalizedFields}
        FormTemplate={FormTemplate}
        schema={schema}
        onSubmit={(values) => setValues(values)}
        onCancel={() => console.log("cancel action")}
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default DefaultForm;
