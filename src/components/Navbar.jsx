import { Link } from "react-router-dom";

const Navbar = ({ handleState }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-lg border-bottom py-3 nav-container">
        <button
          className="btn menu-btn d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand fw-bold fs-3 ms-5">
          sneakers
        </Link>

        <div className="right-nav">
          <div
            style={{ cursor: "pointer" }}
            className="d-inline-block"
            onClick={() => {
              handleState();
            }}
          >
            <i className="bi bi-cart2 fs-3 me-3 position-relative">
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill orange"
                style={{ fontSize: "0.7rem" }}
              >
                0
              </span>
            </i>
          </div>
          <img
            src={require("../images/image-avatar.png")}
            className="img-fluid avatar ms-3"
            alt=""
          />
        </div>
        <div
          className="offcanvas offcanvas-start ms-2"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2" aria-current="page">
                  Collections
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/" className="nav-link">
                  Men
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/" className="nav-link">
                  Women
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
