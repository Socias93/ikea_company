import ListGroup from "./ListGroup";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { getItems } from "../services/fakeItemService";
import { Category, getCategories } from "../services/fakeCategoryService";
import { paginate } from "./utils";
import { useOutletContext } from "react-router-dom";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const DEFAULT_CATEGORY = { _id: "", name: "All Categories" };
const PAGE_SIZE = 10;

function ItemsTable() {
  const items = getItems();
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [selectedPage, setSelectedPage] = useState(1);
  const { searchValue, setSearchValue } = useOutletContext<{
    searchValue: string;
    setSearchValue(value: string): void;
  }>();

  useEffect(() => {
    setSelectedPage(1);
    setSearchValue(searchValue);
  }, [searchValue]);

  function handleCategorySelect(cataegory: Category) {
    setSelectedCategory(cataegory);
    setSearchValue("");
    setSelectedPage(1);
  }

  let filtredItems = selectedCategory._id
    ? items.filter((item) => item.category._id === selectedCategory._id)
    : items;

  const query = searchValue.toLowerCase();
  const numberQuery = searchValue.toString();

  if (searchValue) {
    filtredItems = filtredItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.name.toLowerCase().includes(query) ||
        item.price.toString().includes(numberQuery) ||
        item.numberInStock.toString().includes(numberQuery)
    );
  }

  const paginatedItems = paginate(filtredItems, PAGE_SIZE, selectedPage);

  if (filtredItems.length === 0)
    return (
      <h3 className="d-grid justify-content-center text-primary mt-4">
        There are no items in the database
      </h3>
    );
  return (
    <>
      <div className="bg-dark text-primary p-3">
        <ListGroup
          DEFAULT_CATEGORY={DEFAULT_CATEGORY}
          items={[DEFAULT_CATEGORY, ...getCategories()]}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        <table className="table table-dark table-bordered border-primary ">
          <TableHeader />
          <TableBody items={paginatedItems} />
        </table>
        <Pagination
          pageSize={PAGE_SIZE}
          totalCount={filtredItems.length}
          onPageSelect={setSelectedPage}
          selectedPage={selectedPage}
        />
      </div>
    </>
  );
}

export default ItemsTable;
