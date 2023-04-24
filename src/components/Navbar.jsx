import { Link } from "react-router-dom";
import logo from "../assets/JESUS.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-sans text-light p-0">
      <div className="container p-0">
        <Link className="navbar-brand text-warning fw-bold p-0" to="/">
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light active text-light py-4" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/studies">
                Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/prayer">
                Prayer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/newsletter">
                Newsletter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light py-4" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
