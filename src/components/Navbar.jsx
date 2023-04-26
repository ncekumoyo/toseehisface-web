import { NavLink, Link } from "react-router-dom";
import logo from "../assets/JESUS.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-sans text-light p-0">
      <div className="container p-0">
        <Link activeClassName="active" className="navbar-brand text-warning fw-bold p-0" to="/">
          <div className="d-flex align-items-center p-2">
            <img
              className="rounded-circle border border-warning border-5"
              src={logo}
              alt="logo"
              width={70}
              height={70}
            />
            <div className="ms-3">
              TO SEE <br /> HIS FACE
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler btn btn-warning btn-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link menu-link text-light text-light py-4"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/studies">
                Studies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/media">
                Media
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/prayer">
                Prayer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/newsletter">
                Newsletter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link menu-link text-light py-4" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
