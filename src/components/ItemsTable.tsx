import { Item } from "../services/fakeItemService";

interface Props {
  items: Item[];
}

function ItemsTable({ items }: Props) {
  return (
    <>
      <table className="table table-dark table-bordered border-primary ">
        <thead>
          <tr>
            <th className="text-primary">Name</th>
            <th className="text-primary">Category</th>
            <th className="text-primary">Stock</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td> {item.name} </td>
              <td> {item.category.name} </td>
              <td> {item.numberInStock} st </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ItemsTable;
