import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "../../../assets/images/logo.png";

function AdminNavbar() {
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
            <a href="/admin/dashboard">
              <img src={logo} alt="Digital Superstore" className="logo" />
            </a>

            <ul className="nav-items">
              <li className="nav-item">
                {sessionStorage.getItem("admin-token") && (
                  <a href="/admin/dashboard" className="nav-link">
                    Dashboard
                  </a>
                )}
              </li>
              <li className="nav-item">
                {sessionStorage.getItem("admin-token") && (
                  <a href="/admin/products/createNew" className="nav-link">
                    Create Product
                  </a>
                )}
              </li>
              <li className="nav-item">
                {sessionStorage.getItem("admin-token") && (
                  <a href="/admin/products/viewProducts" className="nav-link">
                    View Products
                  </a>
                )}
              </li>

              <li className="nav-item">
                {!sessionStorage.getItem("admin-token") && (
                  <a href="/admin/login" className="nav-link">
                    Log in as admin
                  </a>
                )}

                {sessionStorage.getItem("admin-token") && (
                  <a
                    onClick={() => {
                      sessionStorage.clear();
                      sessionStorage.removeItem("admin-token");
                      navigator('/admin/login')
                      window.location.reload();
                    }}
                    href={window.location}
                    className="nav-link"
                  >
                    Log out
                  </a>
                )}
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
                <li className="nav-item">
                  {sessionStorage.getItem("admin-token") && (
                    <a href="/admin/dashboard" className="mobile-nav-link nav-link">
                      Dashboard
                    </a>
                  )}
                </li>
                <li className="nav-item">
                  {sessionStorage.getItem("admin-token") && (
                    <a href="/admin/products/createNew" className="mobile-nav-link nav-link">
                      Create Products
                    </a>
                  )}
                </li>
                <li className="nav-item">
                  {sessionStorage.getItem("admin-token") && (
                    <a href="/admin/products/viewProducts" className="mobile-nav-link nav-link">
                      View Products
                    </a>
                  )}
                </li>

                <li className="nav-item">
                  {!sessionStorage.getItem("admin-token") && (
                    <a href="/admin/login" className="mobile-nav-link nav-link">
                      Log in as admin
                    </a>
                  )}

                  {sessionStorage.getItem("admin-token") && (
                    <a
                      onClick={() => {
                        sessionStorage.clear();
                        sessionStorage.removeItem("admin-token");
                        window.location.reload();
                      }}
                      href={window.location}
                      className="mobile-nav-link nav-link"
                    >
                      Log out
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default AdminNavbar;
