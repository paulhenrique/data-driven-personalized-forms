/* eslint react/prop-types: "off" */
import PropTypes from "prop-types";
import React, { useCallback } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-enterprise/index.css";

const ReactDataGridUsage = ({ columns, dataSource, onUpdate }) => {
  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const data = [...dataSource];
      data[rowIndex][columnId] = value;

      onUpdate(data);
    },
    [dataSource]
  );

  return (
    <ReactDataGrid
      idProperty="id"
      onEditComplete={onEditComplete}
      editable={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

ReactDataGridUsage.PropTypes = {
  test: PropTypes.string.isRequired
};

export default ReactDataGridUsage;
