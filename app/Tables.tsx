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
  
  var index = parseInt(source[source.length-1][0]);
  var links:Array<string> = [];
  var rows = [];

  for(var i = 0; i < Math.min(source.length-1-index,6); i++){
    rows.push({key: i+1, name: source[i+index][0], role: source[i+index][1], status: source[i+index][2]})
    links.push(source[i+index][5]);
  }
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}> 
            {(columnKey) => <TableCell>{<a href={links[item.key-1]} target="_blank">{getKeyValue(item, columnKey)}</a>}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
