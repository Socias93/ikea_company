import { NavLink } from "react-router-dom";

function Dropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Login/Register
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink to={"login"} className="dropdown-item">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to={"register"} className="dropdown-item">
            Register
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default Dropdown;
