"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const columns = [
  {
    key: "name",
    label: "ARTICLE",
  },
  {
    key: "role",
    label: "DATE",
  },
  {
    key: "status",
    label: "PROVIDER",
  },
];

export default function Tables({source}:{source:Array<Array<string>>}) {
  
  var rows = [
  { key: "1", name: "", role: "", status: "",},
  { key: "2", name: "", role: "", status: "",},
  { key: "3", name: "", role: "", status: "",},
  { key: "4", name: "", role: "", status: "",},
  { key: "5", name: "", role: "", status: "",},
  { key: "6", name: "", role: "", status: "",}
  ];

  for(var i = 0; i < 6; i++){
    rows[i].name = source[i][0];
    rows[i].role = source[i][1];
    rows[i].status = source[i][2];
  }
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
