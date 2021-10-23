import React, { useState, useCallback } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

const gridStyle = { minHeight: 550 };

const columns = [
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
];

const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Graziela",
      city: "Campinas",
      age: "22"
    },
    {
      id: 2,
      name: "Rodrigo",
      city: "Campinas",
      age: "25"
    },
    {
      id: 2,
      name: "Renata",
      city: "Campinas",
      age: "22"
    }
  ]);

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      setDataSource(data);
    },
    [dataSource]
  );

  return (
    <div>
      <h3>Grid with inline edit</h3>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default () => <App />;
