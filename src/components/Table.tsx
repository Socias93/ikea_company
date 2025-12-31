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
        <TableBody items={items} />
      </table>
    </>
  );
}

export default Table;
