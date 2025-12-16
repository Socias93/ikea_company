import "./App.css";
import ItemsTable from "./components/ItemsTable";
import { getItems } from "./services/fakeItemService";

function App() {
  const items = getItems();
  return (
    <>
      <ItemsTable items={items} />
    </>
  );
}

export default App;
