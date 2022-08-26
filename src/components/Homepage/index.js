import React from "react";
import "./index.css";
import { Fade } from "react-reveal";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";
import kelvin from "../../assets/images/1.jpg";
import effi from "../../assets/images/2.jpg";
import akin from "../../assets/images/6.jpg";
import martins from "../../assets/images/3.jpg";
import adams from "../../assets/images/5.jpg";
import chinedu from "../../assets/images/4.jpg";
import Person from "./Person";

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
        {/* <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Ebube Okolie Kelvin - Project Manager</p>{" "}
          <p>Akinloluwa Olumuyide - Lead backend developer</p>{" "}
          <p>Effi Emmanuel Nwachukwu - Lead frontend developer</p>{" "}
          <p>Okatta Chinedu - Frontend developer</p>{" "}
          <p>Nwogoh Emmanuel - Frontend developer</p>{" "}
          <p>Imuekemhe Precious Adams - Frontend developer</p>{" "}
        </div> */}
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <Fade duration={1500}>
            <Person
              image={kelvin}
              name="Ebube Okolie Kelvin"
              role="Project Manager"
            />
          </Fade>

          <Fade duration={1500} delay={200}>
            <Person
              image={effi}
              name="Effi Emmanuel"
              role="Lead Frontend developer"
            />
          </Fade>

          <Fade duration={1500} delay={300}>
            <Person
              image={akin}
              name="Olumuyide Akinloluwa"
              role="Lead Backend developer"
            />
          </Fade>

          <Fade duration={1500} delay={400}>
            <Person
              image={chinedu}
              name="Okatta Chinedu"
              role="Frontend developer"
            />
          </Fade>

          <Fade duration={1500} delay={500}>
            <Person
              image={adams}
              name="Imuekemhe Precious"
              role="Frontend developer"
            />
          </Fade>

          <Fade duration={1500} delay={600}>
            <Person
              image={martins}
              name="Nwogoh Emmanuel"
              role="Frontend developer"
            />
          </Fade>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
