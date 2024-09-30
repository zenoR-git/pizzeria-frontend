import React from 'react'

//assets import
import pizalogo from '../assets/PizzeriaLogo.png'
import './styles/navbar_styles.css'

function Navbar() {
  return (
    <div>
        <nav  className="navbar navbar-expand-lg text-light">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <span className="text-light">Pizzeria</span><img src={pizalogo} alt="pizzeria" width="40" height="34" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">Order Pizza</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">Build Ur Pizza</a>
              </li>
            </ul>
            <button className="btn btn-warning"><i className="bi bi-cart3"></i> Shopping</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar