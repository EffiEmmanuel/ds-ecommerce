import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import SearchProductsForm from "../../forms/SearchProductsForm";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [isVerified, setIsVerified] = useState(null);

  const navigator = useNavigate();

  const [mobileMenuVibility, setMobileMenuVisibility] = useState("none");

  const toggleMenu = (e) => {
    e.target.checked
      ? setMobileMenuVisibility("flex")
      : setMobileMenuVisibility("none");
  };

  const resendVerificationEmail = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const email = user?.email;
    const userId = user?._id;
    user?.verified ? setIsVerified(true) : setIsVerified(false);

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

            {!sessionStorage.getItem("admin-token") && <SearchProductsForm />}

            <ul
              className="nav-items"
              style={{
                width: `${sessionStorage.getItem("admin-token") && "90%"}`,
              }}
            >
              {/* {sessionStorage.getItem("token") && <p>USER IS LOGGED IN</p>} */}
              {/* {sessionStorage.getItem("admin-token") && (
                <p>ADMIN IS LOGGED IN</p>
              )} */}
              {/* Admin specific links */}
              {sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a href="/admin/dashboard" className="nav-link">
                    Dashboard
                  </a>
                </li>
              )}

              {sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a href="/admin/products/createNew" className="nav-link">
                    Create Product
                  </a>
                </li>
              )}

              {sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a href="/admin/products/viewProducts" className="nav-link">
                    View Products
                  </a>
                </li>
              )}

              {/* {sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a href="/admin/orders/view" className="nav-link">
                    View orders
                  </a>
                </li>
              )} */}

              {!sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a href="/shop" className="nav-link">
                    Shop
                  </a>
                </li>
              )}

              {sessionStorage.getItem("admin-token") && (
                <li className="nav-item">
                  <a
                    onClick={() => {
                      sessionStorage.removeItem("admin-token");
                      sessionStorage.clear();
                      // setIsAdminLoggedIn(false);
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
                {!sessionStorage.getItem("token") && (
                  <a href="/login" className="nav-link">
                    Log in
                  </a>
                )}
              </li>

              {sessionStorage.getItem("token") && (
                <li className="nav-item">
                  <a
                    onClick={() => {
                      sessionStorage.clear();
                      sessionStorage.removeItem("token");
                      // setIsUserLoggeIn(false);
                      navigator("/");
                    }}
                    href="/"
                    className="nav-link"
                  >
                    Log out
                  </a>
                </li>
              )}

              {!sessionStorage.getItem("token") && (
                <li className="nav-item">
                  <a href="/signup" className="nav-link">
                    Sign up
                  </a>
                </li>
              )}

              {sessionStorage.getItem("token") && (
                <li className="nav-item d-flex">
                  <a href="/wishlist" className="nav-link">
                    <i class="bi bi-heart cart-icon"></i>
                  </a>

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
                {sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/dashboard"
                      className="mobile-nav-link nav-link"
                    >
                      Dashboard
                    </a>
                  </li>
                )}

                {sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/products/createNew"
                      className="mobile-nav-link nav-link"
                    >
                      Create Product
                    </a>
                  </li>
                )}

                {sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/products/view"
                      className="mobile-nav-link nav-link"
                    >
                      View Products
                    </a>
                  </li>
                )}

                {/* {sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a
                      href="/admin/orders/view"
                      className="mobile-nav-link nav-link"
                    >
                      View orders
                    </a>
                  </li>
                )} */}
                {!sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a href="/shop" className="mobile-nav-link nav-link">
                      Shop
                    </a>
                  </li>
                )}

                {sessionStorage.getItem("admin-token") && (
                  <li className="mobile-nav-item">
                    <a
                      onClick={() => {
                        sessionStorage.removeItem("admin-token");
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
                  {!sessionStorage.getItem("token") && (
                    <a href="/login" className="mobile-nav-link nav-link">
                      Log in
                    </a>
                  )}

                  {sessionStorage.getItem("token") && (
                    <a
                      onClick={() => {
                        sessionStorage.removeItem("token");
                        window.location.reload();
                      }}
                      href="/"
                      className="mobile-nav-link nav-link"
                    >
                      Log out
                    </a>
                  )}
                </li>

                {!sessionStorage.getItem("token") && (
                  <li className="mobile-nav-item">
                    <a href="/signup" className="mobile-nav-link nav-link">
                      Sign up
                    </a>
                  </li>
                )}

                {sessionStorage.getItem("token") && (
                  <li className="mobile-nav-item d-flex align-items-center justify-content-around">
                    <a href="/wishlist" className="mobile-nav-link">
                      <i class="bi bi-heart cart-icon"></i>
                    </a>

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
        {isVerified === false && (
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
