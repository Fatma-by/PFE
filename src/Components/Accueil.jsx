import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Image/child.jpg";
import img1 from "../Image/img2.jpg";
import img3 from "../Image/le-groupe-de-l-école.webp";
import "bootstrap/dist/css/bootstrap.css";
import "./Accueil.css"

const Accueil = () => {
  return (
    <>
      <div className="accueil">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
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
    </>
  );
};

export default Accueil;
