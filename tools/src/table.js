import React from "react";
import Table from "rc-table/es";

export function GenericTable({ columns, data, action, ...restProps }) {
  return <Table columns={columns} data={data} {...restProps} />;
}
