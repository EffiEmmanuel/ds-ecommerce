import React from "react";
import './index.css'

function Person({ image, name, role }) {
  return (
    <div className="m-4 person-container d-flex flex-column align-items-center justify-content-center">
      <img src={image} className="picture" alt={role} />
      {/* <br /> */}
      <p className="text-center mt-3 semibold-text">{name}</p>
      <small className="text-center w-100">{role}</small>
    </div>
  );
}

export default Person;
