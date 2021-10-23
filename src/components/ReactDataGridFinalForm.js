/* eslint react/prop-types: "off" */
import React from "react";
import ReactDataGrid from "../components/ReactDataGrid";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import { Button } from "@material-ui/core";

const ReactDataGridUsage = (props) => {
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
    <>
      <ReactDataGrid
        columns={[
          {
            name: "id",
            header: "Id",
            defaultVisible: false,
            minWidth: 300,
            type: "number"
          },
          { name: "name", header: "Name", defaultFlex: 1, minWidth: 250 },
          { name: "city", header: "City", defaultFlex: 1, minWidth: 300 },
          { name: "age", header: "Age", minWidth: 150, type: "number" }
        ]}
        dataSource={input.value}
        onUpdate={input.onChange}
      />
      <Button
        onClick={() =>
          input.onChange([
            ...input.value,
            {
              id: null,
              name: "",
              city: "",
              age: ""
            }
          ])
        }
      >
        Adicionar item
      </Button>
    </>
  );
};

export default ReactDataGridUsage;
