"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Israel-Hamas War Rages",
    role: "10 minutes ago",
    status: "CNN",
  },
  {
    key: "2",
    name: "Israel Evacuation Order",
    role: "11 hours ago",
    status: "BBC News",
  },
  {
    key: "3",
    name: "Why Israel Must Reconsider...",
    role: "23 hours ago",
    status: "NYT",
  },
  {
    key: "4",
    name: "Israel Prepares Ground Assault",
    role: "17 hours ago",
    status: "Reuters",
  },
];

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

export default function Tables() {
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
