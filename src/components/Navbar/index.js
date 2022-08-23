import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import SearchProductsForm from "../../forms/SearchProudctsForm";

function Navbar() {
  const [mobileMenuVibility, setMobileMenuVisibility] = useState("none");

  const toggleMenu = (e) => {
    e.target.checked
      ? setMobileMenuVisibility("flex")
      : setMobileMenuVisibility("none");
  };

  return (
    <div className="layout-container">
      <header className="header">
        <div className="container-fluid">
          <nav className="nav">
            <a href="/">
              <img src={logo} alt="Digital Superstore" className="logo" />
            </a>

            <SearchProductsForm />

            <ul className="nav-items">
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a href="/signup" className="nav-link">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a href="/shop" className="nav-link">
                  Shop
                </a>
              </li>
            </ul>

            {/* Mobile menu */}
            <div className="menu">
              <input type="checkbox" id="toggle" onChange={toggleMenu} />
              <label htmlFor="toggle" id="menu-button">
                <p></p>
              </label>
            </div>

            <div
              className="mobile-nav"
              style={{
                display: `${mobileMenuVibility}`,
              }}
            >
              <ul>
                <li className="mobile-nav-item">
                  <a href="/login" id="mobile-nav-link" className="nav-link">
                    Log in
                  </a>
                </li>
                <li className="mobile-nav-item">
                  <a href="/signup" id="mobile-nav-link" className="nav-link">
                    Sign up
                  </a>
                </li>
                <li className="mobile-nav-item">
                  <a href="/shop" id="mobile-nav-link" className="nav-link">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
