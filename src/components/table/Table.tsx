"use client";
import React from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

function Table<T extends object>({ columns, data, className }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className || ""}`}>
      <table className="min-w-full border border-stone-800 text-sm text-left">
        <thead className="bg-card text-text-white">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 border-b border-stone-800">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background text-text-muted">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-stone-800"
                >
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
