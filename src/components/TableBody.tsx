import { Column, Item } from "../types";
import _ from "lodash";

interface Props {
  items: Item[];
  columns: Column[];
}

function TableBody({ items, columns }: Props) {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          {columns.map((column) =>
            "content" in column ? (
              <td key={column.key}> {column.content(item)} </td>
            ) : (
              <td key={column.path}>
                <div className="d-flex justify-content-between">
                  {_.get(item, column.path)}{" "}
                </div>
              </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
