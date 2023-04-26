import { Link } from "react-router-dom";
import logo from "../assets/JESUS.jpg";
import { AppContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { active } = useContext(AppContext);
  let linkCss = "nav-link menu-link text-light text-light py-4";

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
              <Link className={active === "home" ? linkCss + " active" : linkCss} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "about" ? linkCss + " active" : linkCss} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "studies" ? linkCss + " active" : linkCss} to="/studies">
                Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "media" ? linkCss + " active" : linkCss} to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "prayer" ? linkCss + " active" : linkCss} to="/prayer">
                Prayer
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "newsletter" ? linkCss + " active" : linkCss} to="/newsletter">
                Newsletter
              </Link>
            </li>
            <li className="nav-item">
              <Link className={active === "contact" ? linkCss + " active" : linkCss} to="/contact">
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
