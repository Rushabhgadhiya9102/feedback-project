import React from "react";
import Slider1 from "../assets/slider-1.webp";
import Slider2 from "../assets/slider-2.webp";
import Slider3 from "../assets/slider-3.webp";
import Slider4 from "../assets/slider-4.webp";
import Slider5 from "../assets/slider-5.webp";
import Slider6 from "../assets/slider-6.webp";
import Slider7 from "../assets/slider-7.webp";
import { BsArrowRepeat, BsGooglePlay } from "react-icons/bs";
import {
  MdLockOutline,
  MdOutlineCardGiftcard,
  MdVerified,
} from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { TiCloudStorageOutline } from "react-icons/ti";
import { LuTrash2 } from "react-icons/lu";

const HeroSection2 = () => {
  return (
    <>
      <section className="slider pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
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
              <div className="slider-content-1 pt-5">
                <h4 className="d-flex align-items-center gap-3">
                  About this game <FaArrowRight />
                </h4>
                <p>
                  An Imposing Republican Space Station <br />
                  In the dark and dangerous void, your imposing space station
                  will be your haven and base. Complete Republican Orders and
                  adjust your strategic deployment regularly. A powerful space
                  station will be your first step toward the conquest of the
                  galaxy.
                </p>
                <p>
                  Unstoppable Space Armada <br />
                  Select wisely among various warship blueprints. Forge your
                  unique fleets with modular designs and assembling systems.
                  Plan out
                </p>
              </div>
              <div className="slider-content-2 pt-3">
                <h4 className="d-flex align-items-center gap-3">
                  Data Safety <FaArrowRight />
                </h4>
                <p>
                  Safety starts with understanding how developers collect and
                  share your data. Data privacy and security practices may vary
                  based on your use, region and age. The developer provided this
                  information and may update it over time.
                </p>
                <ul className="list-unstlyed border rounded-4 p-5 mt-4">
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <IoMdShare size={20} />
                    <p className="mb-0">No data shared with third parties</p>
                  </li>
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <TiCloudStorageOutline size={20} />
                    <p className="mb-0">
                      This app may collect these data types
                    </p>
                  </li>
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <MdLockOutline size={20} />
                    <p className="mb-0">Data is encrypted in transit</p>
                  </li>
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <LuTrash2 size={20} />
                    <p className="mb-0">You can request that data be deleted</p>
                  </li>
                  <a href="#" className="text-decoration-none text-success">
                    See Details
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="devices-compatibility">
                <div className="card border-0">
                  <div className="text-bg-dark rounded-4 p-5">
                    <div className="content-1">
                      <div className=" d-flex align-items-center gap-3">
                        <BsGooglePlay className="text-success" />
                        <h4 className="">Play on PC</h4>
                      </div>
                      <p className="mt-3 ">
                        Play this game on your Windows PC with Google Play Games
                        beta
                      </p>
                      <button className="btn btn-outline-success">
                        Learn More
                      </button>
                    </div>
                    <hr />
                    <div className="content-2">
                      <ul className="list-unstyled py-3">
                        <li className="d-flex align-items-center gap-2 mb-3">
                          <MdVerified />
                          <p className="mb-0">Official Google experience</p>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-3">
                          <SlScreenDesktop />
                          <p className="mb-0">Bigger screen</p>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-3">
                          <FaArrowTrendUp />
                          <p className="mb-0">
                            Level up with improved controls
                          </p>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-3">
                          <BsArrowRepeat />
                          <p className="mb-0">Seamless sync across devices*</p>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-3">
                          <MdOutlineCardGiftcard />
                          <p className="mb-0">Earn Google Play Points</p>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="content-3">
                      <ul className="py-3">
                        <li>
                          <p>
                            <span className="fw-semibold">OS: </span>Windows 10
                            (v2004)
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fw-semibold">Storage: </span> Solid
                            State Drive (SSD) with 10 GB of available storage
                            space
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fw-semibold">Graphics: </span>{" "}
                            IntelⓇ UHD Graphics 630 GPU or comparable
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fw-semibold">Processor: </span> 4
                            CPU physical cores
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fw-semibold">Memory: </span>8 GB of
                            RAM
                          </p>
                        </li>
                        <li>
                          <p>Windows admin account</p>
                        </li>
                        <li>
                          <p>Hardware virtualisation must be turned on</p>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="content-4">
                      <p>
                        To learn more about these requirements, visit the{" "}
                        <span className="text-success">Help Centre</span>
                      </p>
                      <p>
                        Intel is a registered trademark of Intel Corporation or
                        its subsidiaries. Windows is a trademark of the
                        Microsoft group of companies.
                      </p>
                      <p>Might not be available for this game</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection2;
