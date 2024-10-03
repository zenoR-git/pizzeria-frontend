import React from "react";
import { Link } from "react-router-dom";

//assets import
import pizalogo from "../assets/PizzeriaLogo.png";
import "./styles/navbar_styles.css";
import { useSelector } from "react-redux";

function Navbar() {

  const count = useSelector(state=>state.cart.count)

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <Link className="nav-link text-light" to="/">
              <span className="text-light">Pizzeria</span>
              <img src={pizalogo} alt="pizzeria" width="40" height="34" />
            </Link>
          </a>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/buy/pizza">
                  {" "}
                  Order Pizza
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/make/pizza">
                  {" "}
                  Build Ur Pizza
                </Link>
              </li>
            </ul>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <button className="btn btn-warning position-relative">
                <i className="bi bi-cart3"></i> Shopping{" "}
                {count == 0?"":<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
                </span>}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
