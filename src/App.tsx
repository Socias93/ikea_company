import "./App.css";
import { getItems } from "./services/fakeItemService";

function App() {
  const items = getItems();
  return (
    <>
      <div className="bg-dark text-primary p-3 ">
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
      </div>
    </>
  );
}

export default App;
