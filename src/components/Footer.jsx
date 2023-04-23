import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light navbar-nav small">
      <div className="container d-flex justify-content-evenly">
        <div className="flex-grow-1 p-3">
          <h4 className="text-warning">Contacts</h4>
          <p>
            To See His Face <br />
            123 Frisby Way <br />
            Oslo <br />
            Norway
          </p>
          <p>warning@toseehisface.org</p>
        </div>
        <div className="flex-grow-1 p-3">
          <h4 className="text-warning">Links</h4>
          <ul class="">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Media
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow-1 p-3">
          <p className="fw-bold text-warning">
            &copy;2023 To See His Face <br />
            All Rights Reserved <br />
          </p>
          <p>
            Site design by: <br />
            Nceku Moyo <br />
            <span className="fw-bold text-warning">nhmoyo7@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
