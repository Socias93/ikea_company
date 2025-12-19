import { NavLink } from "react-router-dom";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <img
          style={{ width: 100 }}
          className="rounded-1"
          src="/public/images/ikea.jpg"
          alt="IKEA"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={""} className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"employes"} className="nav-link">
                Employes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"categories"} className="nav-link">
                Categories
              </NavLink>
            </li>

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
          </ul>
          <NavSearch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
