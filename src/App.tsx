import "./App.css";
import { getItems } from "./services/fakeItemService";

function App() {
  const items = getItems();
  return (
    <>
      <table
        className="table-fixed
">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td> {item.name} </td>
              <td> {item.category.name} </td>
              <td> {item.numberInStock} </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
}

export default App;
