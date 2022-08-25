import React, { useState, useContext } from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import SearchProductsForm from "../../forms/SearchProductsForm";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AppContext } from "../../App";

function Navbar() {
  const {
    isUserLoggedIn,
    isAdminLoggedIn,
    setIsUserLoggeIn,
    setIsAdminLoggedIn,
    isUserVerified,
  } = useContext(AppContext);

  const navigator = useNavigate();

  const [mobileMenuVibility, setMobileMenuVisibility] = useState("none");

  const toggleMenu = (e) => {
    e.target.checked
      ? setMobileMenuVisibility("flex")
      : setMobileMenuVisibility("none");
  };

  const resendVerificationEmail = async () => {
    const user = JSON.parse(sessionStorage.getItem("token"));
    const email = user?.email;
    const userId = user?._id;
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/resendToken?userId=${userId}&&email=${email}`
      )
      .then((res) => {
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          timer: 3000,
        });
        navigator(`/email/verify/?userId=${userId}`);
        sessionStorage.clear();
      })
      .catch((err) => {
        Swal.fire({
          title: "Success",
          text: err.message,
          icon: "success",
          timer: 3000,
        });
        window.location.reload();
      });
  };

  return (
    <div className="layout-container">
      <header className="header">
        <div className="container-fluid">
          <nav className="nav">
            <a href="/">
              <img src={logo} alt="Digital Superstore" className="logo" />
            </a>

            {!isAdminLoggedIn && <SearchProductsForm />}

            <ul
              className="nav-items"
              style={{ width: `${isAdminLoggedIn && "90%"}` }}
            >
              {/* Admin specific links */}
              {isAdminLoggedIn && (
                <li className="nav-item">
                  <a href="/admin/dashboard" className="nav-link">
                    Dashboard
                  </a>
                </li>
              )}

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <a href="/admin/products/createNew" className="nav-link">
                    Create Product
                  </a>
                </li>
              )}

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <a href="/admin/products/view" className="nav-link">
                    View Products
                  </a>
                </li>
              )}

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <a href="/admin/orders/view" className="nav-link">
                    View orders
                  </a>
                </li>
              )}

              {!isAdminLoggedIn && (
                <li className="nav-item">
                  <a href="/shop" className="nav-link">
                    Shop
                  </a>
                </li>
              )}

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <a
                    onClick={() => {
                      sessionStorage.removeItem("admin-token");
                      setIsAdminLoggedIn(false);
                      navigator("/");
                    }}
                    href="/"
                    className="nav-link"
                  >
                    Log out
                  </a>
                </li>
              )}

              <li className="nav-item">
                {!isUserLoggedIn && (
                  <a href="/login" className="nav-link">
                    Log in as user
                  </a>
                )}

                {isUserLoggedIn && (
                  <a
                    onClick={() => {
                      sessionStorage.clear();
                      sessionStorage.removeItem("token");
                      setIsUserLoggeIn(false);
                      navigator("/");
                    }}
                    href="/"
                    className="nav-link"
                  >
                    Log out
                  </a>
                )}
              </li>

              {!isUserLoggedIn && (
                <li className="nav-item">
                  <a href="/signup" className="nav-link">
                    Sign up as user
                  </a>
                </li>
              )}

              {isUserLoggedIn && (
                <li className="nav-item d-flex">
                  <a href="/cart" className="nav-link">
                    <i class="bi bi-cart cart-icon"></i>
                  </a>

                  <a href="/login" className="nav-link">
                    <i class="bi bi-person-circle profile-icon"></i>
                  </a>
                </li>
              )}
            </ul>

            {/* Mobile menu button */}
            <div className="menu">
              <input type="checkbox" id="toggle" onChange={toggleMenu} />
              <label htmlFor="toggle" id="menu-button">
                <p></p>
              </label>
            </div>

            {/* Mobile menu */}
            <MobileMenu
              visibility={mobileMenuVibility}
              className="mobile-nav"
              style={{
                display: `${mobileMenuVibility}`,
              }}
            >
              <ul>
                {/* Admin specific links */}
                {isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/dashboard"
                      className="mobile-nav-link nav-link"
                    >
                      Dashboard
                    </a>
                  </li>
                )}

                {isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/products/createNew"
                      className="mobile-nav-link nav-link"
                    >
                      Create Product
                    </a>
                  </li>
                )}

                {isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/products/view"
                      className="mobile-nav-link nav-link"
                    >
                      View Products
                    </a>
                  </li>
                )}

                {isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/orders/view"
                      className="mobile-nav-link nav-link"
                    >
                      View orders
                    </a>
                  </li>
                )}
                {!isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a href="/shop" className="mobile-nav-link nav-link">
                      Shop
                    </a>
                  </li>
                )}

                {isAdminLoggedIn && (
                  <li className="mobile-nav-item">
                    <a
                      onClick={() => {
                        sessionStorage.removeItem("admin-token");
                        setIsAdminLoggedIn(false);
                        navigator("/");
                      }}
                      href="/"
                      className="mobile-nav-link nav-link"
                    >
                      Log out
                    </a>
                  </li>
                )}

                <li className="mobile-nav-item">
                  {!isUserLoggedIn && (
                    <a href="/login" className="mobile-nav-link nav-link">
                      Log in as user
                    </a>
                  )}

                  {isUserLoggedIn && (
                    <a
                      onClick={() => {
                        sessionStorage.clear();
                        sessionStorage.removeItem("token");
                        setIsUserLoggeIn(false);
                        window.location.reload();
                      }}
                      href="/"
                      className="mobile-nav-link nav-link"
                    >
                      Log out
                    </a>
                  )}
                </li>

                {!isUserLoggedIn && (
                  <li className="mobile-nav-item">
                    <a href="/signup" className="mobile-nav-link nav-link">
                      Sign up as user
                    </a>
                  </li>
                )}

                {isUserLoggedIn && (
                  <li className="mobile-nav-item d-flex">
                    <a href="/cart" className="mobile-nav-link nav-link">
                      <i class="bi bi-cart cart-icon"></i>
                    </a>

                    <a href="/login" className="mobile-nav-link nav-link">
                      <i class="bi bi-person-circle profile-icon"></i>
                    </a>
                  </li>
                )}
              </ul>
            </MobileMenu>
          </nav>
        </div>
        {isUserLoggedIn && !isUserVerified && (
          <p className="verification-message bg-danger p-2">
            Please verify your email.{" "}
            <span onClick={resendVerificationEmail}>
              Resend verification token
            </span>
          </p>
        )}
      </header>
    </div>
  );
}

const MobileMenu = styled.div`
  @media (min-width: 1030px) {
    ${(props) =>
      props.visibility === "flex" &&
      `
      display: none !important
    `}
  }
`;

export default Navbar;
