import { NavLink } from "react-router-dom";

function DropdownAddNew() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Add new
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink to={"login"} className="dropdown-item">
            Category
          </NavLink>
        </li>
        <li>
          <NavLink to={"register"} className="dropdown-item">
            Product
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default DropdownAddNew;
