import { useState } from "react";
import { getItems } from "../services/fakeItemService";
import ListGroup from "./ListGroup";
import { getCategories } from "../services/fakeCategoryService";
import Pagination from "./Pagination";

const DEFAULT_CATEGORY = { _id: "", name: "All Categories" };
const PAGE_SIZE = 10;

function ItemsTable() {
  const items = getItems();
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const filtredItems = selectedCategory._id
    ? items.filter((item) => item.category._id === selectedCategory._id)
    : items;

  return (
    <>
      <div className="bg-dark text-primary p-3">
        <ListGroup
          DEFAULT_CATEGORY={DEFAULT_CATEGORY}
          items={[DEFAULT_CATEGORY, ...getCategories()]}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <table className="table table-dark table-bordered border-primary ">
          <thead className="">
            <tr>
              <th className="text-primary">Name</th>
              <th className="text-primary">Category</th>
              <th className="text-primary">Stock</th>
            </tr>
          </thead>
          <tbody>
            {filtredItems.map((item) => (
              <tr key={item._id}>
                <td> {item.name} </td>
                <td> {item.category.name} </td>
                <td> {item.numberInStock} st </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pageSize={PAGE_SIZE} totalCount={items.length} />
      </div>
    </>
  );
}

export default ItemsTable;
