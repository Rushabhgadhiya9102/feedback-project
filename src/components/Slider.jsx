import React from "react";
import Slider1 from "../assets/slider-1.webp";
import Slider2 from "../assets/slider-2.webp";
import Slider3 from "../assets/slider-3.webp";
import Slider4 from "../assets/slider-4.webp";
import Slider5 from "../assets/slider-5.webp";
import Slider6 from "../assets/slider-6.webp";
import Slider7 from "../assets/slider-7.webp";

const Slider = () => {
  return (
    <>
      <section className="slider pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded-4">
                  <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider4} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider5} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider6} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider7} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
