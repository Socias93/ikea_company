import { Item } from "../services/fakeItemService";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

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
