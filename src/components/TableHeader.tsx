import { Column } from "../types";

interface Props {
  columns: Column[];
}

function TableHeader({ columns }: Props) {
  return (
    <thead className="">
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th key={column.path} className="text-primary">
              {column.label}
            </th>
          ) : (
            <th key={column.key}></th>
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
