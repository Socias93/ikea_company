import { Item } from "../types";
import { TableBody, TableHeader } from "./index";

interface Props {
  items: Item[];
}

function Table({ items }: Props) {
  return (
    <>
      <table className="table table-dark table-bordered border-primary ">
        <TableHeader />
        <TableBody items={items} />
      </table>
    </>
  );
}

export default Table;
