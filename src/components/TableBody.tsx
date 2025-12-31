import { Item } from "../types";

interface Props {
  items: Item[];
}

function TableBody({ items }: Props) {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className="d-flex justify-content-between">{item.name}</td>
          <td> {item.category.name} </td>
          <td> {item.price} kr </td>
          <td> {item.numberInStock} st </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
