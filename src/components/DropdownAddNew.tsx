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
          <NavLink to={"new/category"} className="dropdown-item">
            Category
          </NavLink>
        </li>
        <li>
          <NavLink to={"new/item"} className="dropdown-item">
            Item
          </NavLink>
        </li>
        <li>
          <NavLink to={"new/employe"} className="dropdown-item">
            Employe
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default DropdownAddNew;
