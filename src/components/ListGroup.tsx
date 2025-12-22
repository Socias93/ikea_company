import { Category } from "../types";

interface Props {
  DEFAULT_CATEGORY: Category;
  items: Category[];
  selectedCategory: Category;
  onCategorySelect(item: Category): void;
}

function ListGroup({
  DEFAULT_CATEGORY,
  items,
  onCategorySelect,
  selectedCategory,
}: Props) {
  return (
    <>
      <ul className="list-group">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle mb-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {selectedCategory.id === DEFAULT_CATEGORY.id
              ? DEFAULT_CATEGORY.name
              : selectedCategory.name}
          </button>
          <ul className="dropdown-menu bg-dark">
            {items.map((category) => (
              <li onClick={() => onCategorySelect(category)} key={category.id}>
                <a
                  className={`dropdown-item text-secondary ${
                    selectedCategory.id === category.id ? "active" : ""
                  }`}>
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
