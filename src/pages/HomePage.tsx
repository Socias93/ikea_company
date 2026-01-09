import { useEffect, useState } from "react";
import { getItems } from "../services/fakeItemService";
import { getCategories } from "../services/fakeCategoryService";
import { useOutletContext } from "react-router-dom";
import { paginate } from "../components/utils";
import { ListGroup, Table, Pagination } from "../components/index";
import { Category } from "../types";

const DEFAULT_CATEGORY = { id: "", name: "All Categories" };
const PAGE_SIZE = 10;

function HomePage() {
  const items = getItems();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [selectedPage, setSelectedPage] = useState(1);
  const { searchValue, setSearchValue } = useOutletContext<{
    searchValue: string;
    setSearchValue(value: string): void;
  }>();

  useEffect(() => {
    async function fetch() {
      const { data: categories } = await getCategories();
      setCategories(categories);
    }

    fetch();
  }, []);

  function handleCategorySelect(cataegory: Category) {
    setSelectedCategory(cataegory);
    setSearchValue("");
    setSelectedPage(1);
  }

  let filtredItems = selectedCategory.id
    ? items.filter((item) => item.category.id === selectedCategory.id)
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
          items={[DEFAULT_CATEGORY, ...categories]}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        <Table items={paginatedItems} />
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

export default HomePage;
