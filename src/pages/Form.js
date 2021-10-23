import React from "react";
import { FormRenderer } from "@data-driven-forms/react-form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import { Typography } from "@material-ui/core";
import FormTemplate from "../components/FormTemplate";
import PersonalizedTextField from "../components/PersonalizedTextField";

const componentMapper = {
  [componentTypes.TEXT_FIELD]: PersonalizedTextField,
  "custom-component-type": PersonalizedTextField
};

const ComponentMapper = () => {
  const [values, setValues] = React.useState({});
  const schema = {
    fields: [
      {
        component: componentTypes.TEXT_FIELD,
        name: "first-name",
        label: "First name",
        isRequired: true,
        validate: [
          (value) => (!value || value.lenght === 0 ? "Required" : undefined)
        ],
        customProp: true
      },
      {
        component: componentTypes.TEXT_FIELD,
        name: "last-name",
        label: "Last name",
        isRequired: true,
        validate: [
          (value) => (!value || value.lenght === 0 ? "Required" : undefined)
        ]
      },
      {
        component: componentTypes.TEXT_FIELD,
        name: "age",
        label: "Your age",
        type: "number"
      },
      {
        component: "custom-component-type",
        name: "password",
        label: "Your password",
        type: "password"
      }
    ]
  };
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
