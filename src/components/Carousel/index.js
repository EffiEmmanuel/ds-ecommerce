import React from "react";
import "./index.css";
import carouselItem1 from "../../assets/images/carousel/1.webp";
import carouselItem2 from "../../assets/images/carousel/2.webp";
import carouselItem3 from "../../assets/images/carousel/3.webp";
import { Fade } from "react-reveal";

function Carousel() {
  return (
    <div className="hero-slider">
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleControls"
      >
        <Fade duration={2000}>
          <div className="carousel-inner slider-container">
            <div className="carousel-item active slider-item">
              <img
                src={carouselItem1}
                alt="Shop with us"
                className="d-block w-100 carousel-image"
              />
            </div>
            <div className="carousel-item slider-item">
              <img
                src={carouselItem2}
                alt="Shop with us"
                className="d-block w-100 carousel-image"
              />
            </div>
            <div className="carousel-item slider-item">
              <img
                src={carouselItem3}
                alt="Shop with us"
                className="d-block w-100 carousel-image"
              />
            </div>
          </div>
        </Fade>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
