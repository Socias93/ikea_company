import { getCategories } from "../services/fakeCategoryService";

function ListGroup() {
  const categories = getCategories();
  return (
    <>
      <ul className="list-group">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle mb-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Categories
          </button>
          <ul className="dropdown-menu bg-dark">
            {categories.map((category) => (
              <li key={category._id}>
                <a className="dropdown-item text-secondary" href="#">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </>
  );
}

export default ListGroup;
