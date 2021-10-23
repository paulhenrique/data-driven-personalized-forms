import React, { useState, useCallback } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

import tableData from "../source/tablesData.json";
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

const ReactDataGridUsage = () => {
  const [dataSource, setDataSource] = useState(tableData);

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
      <ReactDataGrid
        idProperty="id"
        onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        dataSource={dataSource}
      />
      <pre>{JSON.stringify(dataSource, null, 2)}</pre>
    </div>
  );
};

export default () => <ReactDataGridUsage />;
