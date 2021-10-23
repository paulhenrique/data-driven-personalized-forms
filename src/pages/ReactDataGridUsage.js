/* eslint react/prop-types: "off" */
import React from "react";
import ReactDataGrid from "../components/ReactDataGrid";
import tableData from "../source/tablesData.json";

const ReactDataGridUsage = () => {
  const [dataSource, setDataSource] = React.useState(tableData);

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
        dataSource={dataSource}
        onUpdate={setDataSource}
      />
      <pre>{JSON.stringify(dataSource, null, 2)}</pre>
    </>
  );
};

export default ReactDataGridUsage;
