import React from "react";
import { FaStar } from "react-icons/fa";
import gameIcon from "../assets/game-icons.webp"

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="herosection-item py-5">
                <div className="title">
                  <h1 className="display-3 fw-semibold">Nova: Space Armada</h1>
                  <p className="text-success fw-semibold mb-0">
                    STONE3 PTE. LTD.
                  </p>
                  <p className="text-secondary">In-app-purchases</p>
                </div>
                <div className="global-info">
                  <ul className="list-unstyled d-flex justify-content-start gap-3">
                    <li className="text-center">
                      <p className="mb-0">
                        4.1 <FaStar />
                      </p>
                      <p className="text-secondary">42.7K reviews</p>
                    </li>
                    <li className="text-center">
                      <p className="mb-0">1M+</p>
                      <p className="text-secondary">Downloads</p>
                    </li>
                    <li className="text-center">
                      <p className="mb-0 border w-50 border-black mx-auto">
                        12+
                      </p>
                      <p className="text-secondary">Rated for 12+</p>
                    </li>
                  </ul>
                </div>
                <div className="installation-button">
                  <button className="btn btn-success me-2">
                    Install on Windows
                  </button>
                  <button className="btn btn-outline-success">
                    Install on More Devices
                  </button>
                </div>
                <div className="aggreement">
                  <p className="mt-3">
                    Google Play Games beta is required to install this game on
                    Windows. By downloading the beta and the game, you agree to
                    the Google Terms of Service and Google Play Terms of
                    Service. Learn more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
                <div className="herosection-item d-flex">
                    <img src={gameIcon} className="rounded-4 img-fluid w-50 ms-auto" alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
