import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light small">
      <div className="container d-flex justify-content-evenly">
        <div className="flex-grow-1 p-3">
          <h4 className="text-warning text-sans">Contacts</h4>
          <p>
            To See His Face <br />
            123 Frisby Way <br />
            Oslo <br />
            Norway
          </p>
          <p className="text-warning text-sans">info@toseehisface.org</p>
        </div>
        <div className="flex-grow-1 p-3">
          <h4 className="text-warning text-sans">Links</h4>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link menu-link2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-link2" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-link2" to="/studies">
                Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-link2" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-link2" to="/prayer">
                Prayer
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow-1 p-3">
          <p className="fw-bold text-warning text-sans">
            &copy;2023 To See His Face | All Rights Reserved <br />
          </p>
          <p>
            Site design by: <br />
            Nceku Moyo <br />
            <span className="fw-bold text-warning text-sans">nhmoyo7@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
