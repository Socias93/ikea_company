import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category, Item } from "../types";
import { deleteCategory, getCategories } from "../services/fakeCategoryService";
import { getItems } from "../services/fakeItemService";

function AllCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();
  const { searchValue } = useOutletContext<{
    searchValue: string;
  }>();

  useEffect(() => {
    async function fetch() {
      try {
        const { data: categories } = await getCategories();
        setCategories(categories);

        const { data: items } = await getItems();
        setItems(items);
      } catch (err) {
        console.log("Failed to fetch categories", err);
      }
    }

    fetch();
  }, []);

  const query = (searchValue || "").toLowerCase();

  let filtredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(query)
  );

  async function handleDelete(id: string) {
    const newCategory = categories.filter((category) => category.id !== id);
    setCategories(newCategory);
    await deleteCategory(id);
  }
  return (
    <>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
          {filtredCategories.map((category) => {
            const usedCount = items.filter(
              (it) => it.category.id === category.id
            ).length;
            const disabled = usedCount > 0;

            return (
              <div key={category.id} className="col">
                <div className="card h-100 shadow-lg border-0 rounded-4 relative">
                  <div className="d-grid justify-content-center">
                    <h3 className="text-center">{category.name}</h3>
                    <div
                      className="d-flex mt-2 mb-3 gap-3"
                      style={{ maxWidth: "250px" }}>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="btn btn-dark "
                        disabled={disabled}>
                        {disabled ? `In use (${usedCount})` : "Delete"}
                      </button>
                      <div>
                        <button
                          onClick={() =>
                            navigate(`/update-category/${category.id}`)
                          }
                          className="btn btn-primary "
                          disabled={disabled}>
                          {disabled ? `In use (${usedCount})` : "Edit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllCategories;
