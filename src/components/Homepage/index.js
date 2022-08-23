import React from "react";
import "./index.css";
import { Fade } from "react-reveal";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";

function Homepage() {
  return (
    <div className="container-md-fluid main-container">
      <div className="main-content home container-fluid">
        <div className="headline">
          <Fade duration={2000}>
            <h1>
              Shop products that meet your every day need
              <span className="ds-pink">.</span>
            </h1>
          </Fade>

          <Fade up delay={500}>
            <p className="mt-3">
              Groceries, electronics, fashion, essentials and much more
            </p>
          </Fade>

          <Fade up>
            <a href="/market" role="button" className="btn btn-dark shop-btn">
              Shop
            </a>
          </Fade>
        </div>

        <img
          src={ps5Pad}
          className="ps-pad"
          alt="Welcome to the digital superstore"
        />
      </div>
    </div>
  );
}

export default Homepage;
