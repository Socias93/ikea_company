import { NavLink } from "react-router-dom";
import { Column, Item } from "../types";
import { TableBody, TableHeader } from "./index";

interface Props {
  items: Item[];
}

function Table({ items }: Props) {
  const columns: Column[] = [
    {
      path: "name",
      label: "Name",
      content: (item) => (
        <div className="d-flex justify-content-between align-items-center">
          <span>{item.name}</span>
          <NavLink
            to={`update-item/${item.id}`}
            className="btn btn-sm btn-outline-primary ms-2">
            Edit
          </NavLink>
        </div>
      ),
    },
    {
      path: "category.name",
      label: "Category",
    },
    {
      path: "price",
      label: "Price - (Kr)",
    },
    {
      path: "numberInStock",
      label: "Stock",
    },
  ];
  return (
    <>
      <table className="table table-dark table-bordered border-primary ">
        <TableHeader columns={columns} />
        <TableBody items={items} columns={columns} />
      </table>
    </>
  );
}

export default Table;
