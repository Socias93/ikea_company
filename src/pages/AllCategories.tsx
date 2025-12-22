import { useNavigate } from "react-router-dom";
import { getCategories } from "../services/fakeCategoryService";
import { getItems } from "../services/fakeItemService";
import { useState } from "react";

function AllCategories() {
  const [categories, setCategories] = useState(getCategories());
  const items = getItems();
  const navigate = useNavigate();

  function handleDelete(id: string) {
    const newCategory = categories.filter((category) => category.id !== id);
    setCategories(newCategory);
  }
  return (
    <>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
          {categories.map((category) => {
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
