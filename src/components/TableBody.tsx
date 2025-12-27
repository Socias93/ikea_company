import { NavLink } from "react-router-dom";
import { Item } from "../types";

interface Props {
  items: Item[];
}

function TableBody({ items }: Props) {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className="d-flex justify-content-between">
            {item.name}
            <NavLink
              to={`update-item/${item.id}`}
              className="btn btn-outline-primary">
              Edit
            </NavLink>
          </td>
          <td> {item.category.name} </td>
          <td> {item.price} kr </td>
          <td> {item.numberInStock} st </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
