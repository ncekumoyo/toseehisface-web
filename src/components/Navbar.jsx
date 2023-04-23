import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark text-light">
      <div class="container">
        <Link class="navbar-brand  text-warning fw-bold" to="/">
          TO SEE HIS FACE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link text-light active text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/studies">
                Studies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/media">
                Media
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/prayer">
                Prayer
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/newsletter">
                Newsletter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light" to="/contact">
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
