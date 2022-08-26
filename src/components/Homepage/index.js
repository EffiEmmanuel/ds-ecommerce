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
            <a href="/shop" role="button" className="btn btn-dark shop-btn">
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

      <main className="container-fluid">
        <div className="main-section-header d-flex justify-content-center align-items-center my-5">
          <h2 className="semibold-text">
            Meet the development team<span className="ds-pink">.</span>
          </h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Ebube Okolie Kelvin - Project Manager</p>{" "}
          <p>Akinloluwa Olumuyide - Lead backend developer</p>{" "}
          <p>Effi Emmanuel Nwachukwu - Lead frontend developer</p>{" "}
          <p>Okatta Chinedu - Frontend developer</p>{" "}
          <p>Nwogoh Emmanuel - Frontend developer</p>{" "}
          <p>Imuekemhe Precious Adams - Frontend developer</p>{" "}
        </div>
        {/* <div className="grd">
        <span><img src="C:\Users\HP\frontend\src\assets\images\Apple watch.jfif" className="picture"><br><span className="txt">akin</span> </span>
        <span><img src="C:\Users\HP\frontend\src\assets\images\Apple watch.jfif" className="picture"><br><span className="txt">akin</span> </span>
        <span><img src="C:\Users\HP\frontend\src\assets\images\Apple watch.jfif" className="picture"><br><span className="txt">akin</span> </span>
        <span><img src="C:\Users\HP\frontend\src\assets\images\Apple watch.jfif" className="picture"><br><span className="txt">akin</span> </span>
        <span><img src="C:\Users\HP\frontend\src\assets\images\Apple watch.jfif" className="picture"><br><span className="txt">akin</span> </span>
    </div> */}
      </main>
    </div>
  );
}

export default Homepage;
